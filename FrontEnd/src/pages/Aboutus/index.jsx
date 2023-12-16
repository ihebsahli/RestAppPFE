import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const AboutusPage = () => {
  const navigate = useNavigate();
  const checkFonction = () => {
    const token = localStorage.getItem("token");
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");

    if (token) {
      console.log("Token:", token);
      console.log("firstName:", firstName);
      console.log("lastName:", lastName);
    } else {
      console.log("Token not found in local storage");
    }
  };

  const token = localStorage.getItem("token");
  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem("token");

    // Navigate to the login page
    navigate("/Login");
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
              <div className="flex flex-col gap-[7px] items-start justify-start ml-8 sm:ml-[0] w-[12%] sm:w-full">
                <Text
                  className="text-base text-red-400"
                  size="txtOpenSansRomanRegular16Red400"
                >
                  About us
                </Text>
                <Line className="bg-red-400 h-px w-[69%]" />
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
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[78px] w-full">
            <div className="md:h-[541px] h-[543px] relative w-[543px] sm:w-full">
              <div className="bg-bluegray-100_63 flex flex-col sm:h-auto h-full items-center justify-start m-auto p-[52px] md:px-10 sm:px-5 rounded-[50%] w-[543px]">
                <div className="bg-bluegray-100_6c h-[437px] rounded-[50%] w-[437px]"></div>
              </div>
              <Img
                className="absolute h-[346px] inset-[0] justify-center m-auto rounded-[50%] w-[346px]"
                src="images/img_unsplashebmyh7.png"
                alt="unsplasheBmyHSeven"
              />
            </div>
            <div className="flex md:flex-1 flex-col gap-9 items-start justify-start rounded-[16px] w-[39%] md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="leading-[110.00%] sm:text-[38px] md:text-[44px] text-[52px] text-red-400"
                  size="txtTinosBold52"
                >
                  <span className="text-gray-902 font-opensans text-left font-bold leading-[normal]">
                    <>
                      About Our <br />
                    </>
                  </span>
                  <span className="text-red-400 font-opensans text-left font-bold leading-[normal]">
                    Restaurant
                  </span>
                </Text>
                <Text
                  className="leading-[200.00%] text-gray-801 text-xl w-full"
                  size="txtPoppinsRegular20"
                >
                  This dish is full of flavor and nutrition! Quinoa is a
                  complete protein, providing all the essential amino acids your
                  body needs, and is also a good source of fiber.
                </Text>
              </div>
              <Button
                className="cursor-pointer font-semibold min-w-[232px] text-center text-xl"
                shape="round"
                color="red_400"
                size="lg"
                variant="fill"
                //todo create checkfonction
                onClick={checkFonction}
              >
                Order now
              </Button>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[120px] w-full">
            <Text
              className="leading-[200.00%] text-gray-801 text-xl"
              size="txtPoppinsRegular20"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </Text>
            <div className="md:h-[559px] h-[560px] relative w-[560px] sm:w-full">
              <div className="bg-bluegray-100_63 flex flex-col sm:h-auto h-full items-center justify-start m-auto p-[57px] md:px-10 sm:px-5 rounded-[50%] w-[560px]">
                <div className="bg-bluegray-100_63 h-[445px] rounded-[50%] w-[445px]"></div>
              </div>
              <Img
                className="absolute h-[354px] inset-[0] justify-center m-auto rounded-[50%] w-[354px]"
                src="images/img_unsplash5dsznc.png"
                alt="unsplash5dsZnC"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[120px] w-full">
            <Img
              className="h-[629px] md:h-auto object-cover"
              src="images/img_unsplashlrawct.png"
              alt="unsplashlRAWcT"
            />
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="leading-[140.00%] sm:text-[38px] md:text-[44px] text-[52px] text-gray-900 w-full"
                  size="txtTinosBold52Gray900"
                >
                  <span className="text-red-400 font-opensans text-left font-bold">
                    Owner
                  </span>
                  <span className="text-orange-600 font-opensans text-left font-bold">
                    {" "}
                  </span>
                  <span className="text-gray-900 font-opensans text-left font-bold">
                    & Executive Chef
                  </span>
                </Text>
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-gray-801"
                  size="txtPoppinsRegular40"
                >
                  Ismail Marzuki
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="md:text-5xl text-[80px] text-amber-800_6c"
                  size="txtTinosBold80"
                >
                  “
                </Text>
                <Text
                  className="italic leading-[200.00%] text-3xl sm:text-[26px] md:text-[28px] text-gray-801 w-full"
                  size="txtPoppinsLightItalic30"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Text
                  className="md:ml-[0] ml-[455px] rotate-[180deg] md:text-5xl text-[80px] text-amber-800_6c"
                  size="txtTinosBold80"
                >
                  “
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-901 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default AboutusPage;
