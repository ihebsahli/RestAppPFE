import React from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleEmailChange = (value) => {
    setFormData({ ...formData, email: value });
  };

  const handlePasswordChange = (value) => {
    setFormData({ ...formData, password: value });
  };

  const Signin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/auth", {
        email: formData.email,
        password: formData.password,
      });

      const { token, user } = response.data;

      // Store the token in local storage
      localStorage.setItem("token", token);

      // Store user information in local storage
      localStorage.setItem("user", JSON.stringify(user));

      // Make a GET request to fetch additional user information
      const getUserResponse = await axios.get("http://localhost:5000/auth", {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
        data: {
          email: formData.email,
          password: formData.password,
        },
      });

      const userData = getUserResponse.data;

      // Extract and store the first name and last name in local storage
      localStorage.setItem("firstName", userData.firstname);
      localStorage.setItem("lastName", userData.lastname);

      navigate("/aboutus");
    } catch (error) {
      console.error("Authentication failed:", error);

      // Show an alert to the user
      window.alert("Email or password is wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[120px] items-center justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col items-center justify-start max-w-[1112px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <Img
              className="h-[51px] w-[12%]"
              src="images/img_logo.svg"
              alt="Logo"
            />
            <div className="flex md:flex-1 sm:flex-col flex-row font-opensans sm:gap-5 items-start justify-center md:ml-[0] ml-[107px] md:mt-0 mt-2.5 pt-0.5 w-[52%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-base text-gray-900_cc"
                  size="txtOpenSansRomanRegular16Gray900cc"
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
              <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[27px]">
                <Text
                  className="common-pointer text-base text-gray-900_cc"
                  size="txtOpenSansRomanRegular16Gray900cc"
                  onClick={() => navigate("/reservation")}
                >
                  Reservation
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[27px]">
                <Text
                  className="common-pointer text-base text-gray-900_cc"
                  size="txtOpenSansRomanRegular16Gray900cc"
                  onClick={() => navigate("/contact")}
                >
                  Contact us
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[27px]">
                <Text
                  className="common-pointer text-base text-gray-900_cc"
                  size="txtOpenSansRomanRegular16Gray900cc"
                  onClick={() => navigate("/myreservations")}
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
              onClick={() => navigate("/Signup")}
            >
              Sign up
            </Button>
          </div>
          <div className="flex flex-col gap-[19px] items-center justify-start mt-[117px]">
            <Text
              className="md:text-5xl text-[80px] text-gray-900"
              size="txtOpenSansRomanBold80"
            >
              Welcome to Foodio
            </Text>
            <Text
              className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-801 w-full"
              size="txtPoppinsRegular25"
            >
              log in and start ordering your favorite food
            </Text>
          </div>
          <div className="flex md:flex-1 flex-col gap-9 items-center justify-start w-[49%] md:w-full">
            <div className="flex flex-col gap-6 items-center justify-start rounded-lg w-full">
              <br></br>
              <Input
                name="Emailaddress"
                placeholder="Email address"
                className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                wrapClassName="border border-gray-400 border-solid w-full"
                type="email"
                shape="round"
                onChange={handleEmailChange}
                value={formData.email}
              ></Input>
              <Input
                name="password"
                placeholder="password"
                className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                wrapClassName="border border-gray-400 border-solid w-full"
                shape="round"
                value={formData.password}
                type="password"
                onChange={handlePasswordChange}
              ></Input>
            </div>
            <Button
              className="cursor-pointer min-w-[340px] sm:min-w-full rounded-[12px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
              color="red_400"
              size="lg"
              variant="fill"
              onClick={Signin}
            >
              Submit
            </Button>
          </div>
        </div>
        <Footer className="bg-gray-901 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default LoginPage;
