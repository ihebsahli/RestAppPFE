import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const Myreservations = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log(token);
  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem("token");

    // Navigate to the login page
    navigate("/Login");
  };
  const [resData, setReservationsData] = useState([]);

  const fetchReservations = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/reservation/list",
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      setReservationsData(response.data);
      console.log(resData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  // State variable to track the selected button index
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  // Function to handle button clicks and change the selected button index
  const handleButtonClick = (index) => {
    setSelectedButtonIndex(index);
  };

  const [filteredStatus, setFilteredStatus] = useState("all");

  const deleteReservation = async (id, index) => {
    try {
      // Send a DELETE request to your API to delete the reservation by its ID
      await axios.delete(
        `http://localhost:5000/reservation/deletereservation/${id}`,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );

      // If the reservation is successfully deleted in the API, update the local state
      // to remove the deleted reservation from the table
      const updatedReservations = [...resData];
      updatedReservations.splice(index, 1);
      setReservationsData(updatedReservations);
    } catch (error) {
      console.error("Error deleting reservation:", error);
    }
  };

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[140px] items-center justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col md:gap-10 gap-[102px] items-center justify-start max-w-[1112px] mx-auto md:px-5 w-full">
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
              <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[29px]">
                <Text
                  className="text-base text-gray-900_a2"
                  size="txtOpenSansRomanRegular16"
                  onClick={() => navigate("/menu")}
                >
                  Menu
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[29px]">
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
              <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[27px]">
                <Text
                  className="common-pointer text-base text-gray-900_cc"
                  size="txtOpenSansRomanRegular16Gray900cc"
                  onClick={() => navigate("/reservation")}
                >
                  Reservation
                </Text>
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
                  className="text-base text-red-400"
                  size="txtOpenSansRomanRegular16Red400"
                >
                  My reservations
                </Text>
                <Line className="bg-red-400 h-px w-full" />
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
          <div className="flex flex-col font-opensans md:gap-10 gap-[79px] items-center justify-start w-full">
            <Text
              className="sm:text-[38px] md:text-[44px] text-[52px] text-gray-900"
              size="txtOpenSansRomanBold52"
            >
              Your reservations
            </Text>
            <div className="flex sm:flex-col flex-row gap-7 items-center justify-between rounded-[16px] w-full">
              <Button
                className={`cursor-pointer font-semibold min-w-[232px] text-center text-xl ${
                  filteredStatus === "all" ? "red_400" : "gray_400_63"
                }`}
                shape="round"
                color={filteredStatus === "all" ? "red_400" : "gray_400_63"}
                size="lg"
                variant="fill"
                onClick={() => setFilteredStatus("all")}
              >
                All reservations
              </Button>
              <Button
                className={`cursor-pointer min-w-[192px] text-center text-xl ${
                  filteredStatus === "pending" ? "red_400" : "gray_400_63"
                }`}
                shape="round"
                color={filteredStatus === "pending" ? "red_400" : "gray_400_63"}
                size="lg"
                variant="fill"
                onClick={() => setFilteredStatus("pending")}
              >
                pending
              </Button>
              <Button
                className={`cursor-pointer min-w-[192px] text-center text-xl ${
                  filteredStatus === "accepted" ? "red_400" : "gray_400_63"
                }`}
                shape="round"
                color={
                  filteredStatus === "accepted" ? "red_400" : "gray_400_63"
                }
                size="lg"
                variant="fill"
                onClick={() => setFilteredStatus("accepted")}
              >
                accepted
              </Button>
              <Button
                className={`cursor-pointer min-w-[192px] text-center text-xl 
                }`}
                shape="round"
                color={
                  filteredStatus === "canceled" ? "red_400" : "gray_400_63"
                }
                size="lg"
                variant="fill"
                onClick={() => setFilteredStatus("canceled")}
              >
                canceled
              </Button>
            </div>
          </div>
          <div className="w-full">
            <table className="w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Number of People</th>
                  <th>Table Number</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {resData
                  .filter(
                    (reservation) =>
                      filteredStatus === "all" ||
                      reservation.status === filteredStatus
                  )
                  .map((reservation, index) => (
                    <tr key={reservation._id}>
                      <td style={{ textAlign: "center" }}>
                        {reservation.nomComplet}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {reservation.dateReservation.slice(0, 10)}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {reservation.heureReservation}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {reservation.nombrePersonnes}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {reservation.numeroTable}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {reservation.status}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <Button
                          className={`cursor-pointer min-w-[92px] text-center text-xl`}
                          shape="round"
                          color="red_400"
                          size="lg"
                          variant="fill"
                          onClick={() =>
                            deleteReservation(reservation._id, index)
                          }
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <Footer className="bg-gray-901 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default Myreservations;
