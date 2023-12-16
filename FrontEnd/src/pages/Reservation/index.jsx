import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, SelectBox, Text, Input } from "components";
import Footer from "components/Footer";

const partysizeOptionsList = [
  { label: "1-2", value: "2" },
  { label: "3-4", value: "4" },
  { label: "5+", value: "6" },
];

const ReservationPage = () => {
  const token = localStorage.getItem("token");
  const firstName1 = localStorage.getItem("firstName");
  const lastName1 = localStorage.getItem("lastName");
  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem("token");

    // Navigate to the login page
    navigate("/Login");
  };
  const handleDateChange = (value) => {
    setFormData({ ...formData, dateReservation: value });
  };
  const handlePhoneNumberChange = (value) => {
    setFormData({ ...formData, numeroTelephone: value });
  };
  const handleTimeChange = (value) => {
    setFormData({ ...formData, heureReservation: value });
  };
  const handlePartySizeChange = (value) => {
    setFormData({ ...formData, nombrePersonnes: value });
  };
  const handleTableNumberChange = (value) => {
    setFormData({ ...formData, numeroTable: value });
  };

  const validatePhoneNumber = (phoneNumber) => {
    return /^\d{8}$/.test(phoneNumber);
  };

  const handleSubmit = () => {
    if (
      !formData.numeroTelephone ||
      !formData.dateReservation ||
      !formData.heureReservation ||
      !formData.nombrePersonnes ||
      !formData.numeroTable
    ) {
      alert("Please review your data. All fields are required.");
    } else if (!validatePhoneNumber(formData.numeroTelephone)) {
      alert(
        "Please review your phone number. It must be a number of 8 digits."
      );
    } else if (!isDateValid(formData.dateReservation)) {
      alert("Please review the date. It cannot be older than today's date.");
    } else {
      // All data is valid, you can proceed with the reservation
      console.log("Data is valid. Proceeding with the reservation.");
      bookReservation();
      // Add your API call or navigation logic here
    }
  };
  const isDateValid = (date) => {
    const selectedDate = new Date(date);
    const currentDate = new Date();
    return selectedDate >= currentDate;
  };

  const [tables, setTables] = useState([]);

  // Fetch tables data when the component mounts
  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/tables/availabletables"
        );
        const data = await response.json();
        setTables(data);
      } catch (error) {
        console.error("Error fetching tables:", error);
      }
    };

    fetchTables();
  }, []);

  const navigate = useNavigate(); // Set up a state variable for the auth token
  const [formData, setFormData] = useState({
    //fill nomComplet with firstname and lastname
    nomComplet: firstName1 + lastName1,
    numeroTelephone: "",
    dateReservation: "",
    heureReservation: "",
    nombrePersonnes: "",
    numeroTable: "",
  });

  // Function to make the API request
  const bookReservation = async () => {
    try {
      // Construct the request headers
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("x-auth-token", token); // Add the auth token to the headers

      const dateObject = new Date(formData.dateReservation);
      

      // Create the request body
      const requestBody = {
        nomComplet: formData.nomComplet,
        numeroTelephone: formData.numeroTelephone,
        dateReservation: dateObject,
        heureReservation: formData.heureReservation,
        nombrePersonnes: parseInt(formData.nombrePersonnes), // Convert to integer
        numeroTable: formData.numeroTable, // Convert to integer
      };

      console.log(requestBody);

      // Make the POST request
      const response = await fetch("http://localhost:5000/reservation/create", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        // Request was successful, you can handle the response here
        // For example, you can navigate to a confirmation page
        console.error("Reservation request successful");
        navigate("/Myreservations");
      } else {
        // Request failed, handle the error here
        console.error("Reservation request failed");
        // You may want to show an error message to the user
      }
    } catch (error) {
      // Handle any exceptions that occurred during the request
      console.error("An error occurred:", error);
      // You may want to show an error message to the user
    }
  };

  // ...
  <Button
    className="common-pointer cursor-pointer font-poppins font-semibold min-w-[475px] sm:min-w-full mt-10 rounded-[20px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
    onClick={bookReservation}
    color="red_400"
    size="xl"
    variant="fill"
  >
    Book now
  </Button>;

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[120px] items-center justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-start max-w-[1112px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <Img
              className="h-[51px] w-[12%]"
              src="images/img_logo.svg"
              alt="Logo"
            />
            <div className="flex md:flex-1 sm:flex-col flex-row font-opensans sm:gap-5 items-start justify-center md:ml-[0] ml-[107px] md:mt-0 mt-2.5 pt-0.5 w-[52%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-base text-gray-900_a2"
                  size="txtOpenSansRomanRegular16"
                >
                  Home
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start ml-8 sm:ml-[0]">
                <Text
                  className="common-pointer text-base text-gray-900_cc"
                  size="txtOpenSansRomanRegular16Gray900cc"
                  onClick={() => navigate("/menu")}
                >
                  Menu
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start ml-8 sm:ml-[0]">
                <Text
                  className="common-pointer text-base text-gray-900_cc"
                  size="txtOpenSansRomanRegular16Gray900cc"
                  onClick={() => navigate("/aboutus")}
                >
                  About us
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[31px]">
                <Text
                  className="common-pointer text-base text-gray-900_cc"
                  size="txtOpenSansRomanRegular16Gray900cc"
                  onClick={() => navigate("/orderonline")}
                >
                  Order online
                </Text>
              </div>
              <div className="flex flex-col gap-1.5 items-start justify-start sm:ml-[0] ml-[27px] w-[16%] sm:w-full">
                <Text
                  className="text-base text-red-400"
                  size="txtOpenSansRomanRegular16Red400"
                >
                  Reservation
                </Text>
                <Line className="bg-red-400 h-px w-[53%]" />
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[31px]">
                <Text
                  className="common-pointer text-base text-gray-900_cc"
                  size="txtOpenSansRomanRegular16Gray900cc"
                  onClick={() => navigate("/contact")}
                >
                  Contact us
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[31px]">
                <Text
                  className="common-pointer text-base text-gray-900_cc"
                  size="txtOpenSansRomanRegular16Gray900cc"
                  onClick={() => navigate("/Myreservations")}
                >
                  My reservations
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer flex h-[50px] items-center justify-center md:ml-[0] ml-[122px] w-[50px]"
              leftIcon={
                <Img
                  className="h-6 m-[13px]"
                  src="images/img_cart.svg"
                  alt="cart"
                />
              }
              shape="circle"
              color="white_A700"
              variant="fill"
            ></Button>
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm"
              shape="round"
              color="red_400"
              size="sm"
              variant="fill"
              onClick={token ? handleLogout : () => navigate("/Login")}
            >
              {token ? "Log out" : "Log in"}
            </Button>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <Img
              className="h-[657px] md:h-auto object-cover rounded-[20px]"
              src="images/img_rectangle150.png"
              alt="Rectangle150"
            />
            <div className="flex flex-col items-start justify-start">
              <Text
                className="md:text-5xl text-[70px] text-gray-900"
                size="txtOpenSansRomanBold70"
              >
                Book a table
              </Text>
              <div className="flex flex-col font-poppins gap-10 items-center justify-start mt-[60px] w-full">
                <Input
                  name="phone number"
                  placeholder="Phone number"
                  className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="border border-gray-400 border-solid w-full"
                  type="date"
                  shape="round"
                  value={formData.dateReservation}
                  onChange={handleDateChange}
                ></Input>
                <Input
                  name="phone number"
                  placeholder="Phone number"
                  className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="border border-gray-400 border-solid w-full"
                  type="time"
                  shape="round"
                  value={formData.heureReservation}
                  onChange={handleTimeChange}
                ></Input>
                <Input
                  name="phone number"
                  placeholder="Phone number"
                  className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="border border-gray-400 border-solid w-full"
                  type="text"
                  shape="round"
                  value={formData.numeroTelephone}
                  onChange={handlePhoneNumberChange}
                ></Input>
                <SelectBox
                  className="border border-gray-400 border-solid text-left text-xl w-full"
                  placeholderClassName="text-gray-500"
                  indicator={
                    <Img
                      className="h-[21px] mr-[35px] w-[21px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="partysize"
                  options={partysizeOptionsList}
                  isSearchable={false}
                  placeholder="Party size"
                  shape="round"
                  onChange={handlePartySizeChange}
                  color="white_A700"
                  size="sm"
                  variant="fill"
                />
                <SelectBox
                  className="border border-gray-400 border-solid text-left text-xl w-full"
                  placeholderClassName="text-gray-500"
                  indicator={
                    <Img
                      className="h-[21px] mr-[35px] w-[21px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="table"
                  options={tables.map((table) => ({
                    label: `${table.emplacement}`,
                    value: table._id,
                  }))}
                  isSearchable={false}
                  placeholder="Select a table"
                  shape="round"
                  onChange={(selectedOption) =>
                    handleTableNumberChange(selectedOption.value)
                  }
                  color="white_A700"
                  size="sm"
                  variant="fill"
                />
              </div>
              <Button
                className="common-pointer cursor-pointer font-poppins font-semibold min-w-[475px] sm:min-w-full mt-10 rounded-[20px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                onClick={handleSubmit}
                color="red_400"
                size="xl"
                variant="fill"
              >
                Book now
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-901 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ReservationPage;
