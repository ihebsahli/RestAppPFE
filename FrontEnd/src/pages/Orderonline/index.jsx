import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, RatingBar, Text } from "components";
import Footer from "components/Footer";

const OrderonlinePage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem("token");

    // Navigate to the login page
    navigate("/Login");
  };
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col md:gap-10 gap-[140px] items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start max-w-[1112px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-start justify-start w-full">
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
                <div className="flex flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[31px] w-[17%] sm:w-full">
                  <Text
                    className="text-base text-red-400"
                    size="txtOpenSansRomanRegular16Red400"
                  >
                    Order online
                  </Text>
                  <Line className="bg-red-400 h-px w-[49%]" />
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
            <Text
              className="md:ml-[0] ml-[456px] mt-[117px] md:text-5xl text-[80px] text-gray-900"
              size="txtOpenSansRomanBold80"
            >
              Menu
            </Text>
            <div className="flex sm:flex-col flex-row font-poppins gap-7 items-center justify-between mt-[73px] rounded-[16px] w-full">
              <Button
                className="cursor-pointer min-w-[192px] text-center text-xl"
                shape="round"
                color="gray_400_63"
                size="lg"
                variant="fill"
              >
                All Categories
              </Button>
              <Button
                className="cursor-pointer font-semibold min-w-[232px] text-center text-xl"
                shape="round"
                color="red_400"
                size="lg"
                variant="fill"
              >
                Pasta
              </Button>
              <Button
                className="cursor-pointer min-w-[192px] text-center text-xl"
                shape="round"
                color="gray_400_63"
                size="lg"
                variant="fill"
              >
                Pizza
              </Button>
              <Button
                className="cursor-pointer min-w-[192px] text-center text-xl"
                shape="round"
                color="gray_400_63"
                size="lg"
                variant="fill"
              >
                Dessert
              </Button>
              <Button
                className="cursor-pointer min-w-[192px] text-center text-xl"
                shape="round"
                color="gray_400_63"
                size="lg"
                variant="fill"
              >
                Drink
              </Button>
            </div>
            <div className="flex md:flex-col flex-row font-poppins md:gap-[46px] items-center justify-between mt-[70px] w-full">
              <div className="flex md:flex-1 flex-col gap-12 items-start justify-end pt-[7px] w-[66%] md:w-full">
                <div className="flex flex-col gap-[18px] items-start justify-start w-[18%] md:w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                    size="txtPoppinsSemiBold30"
                  >
                    PASTA
                  </Text>
                  <Line className="bg-red-400 h-0.5 w-full" />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end p-5 rounded-[45px] w-full">
                      <div className="flex flex-col h-[173px] items-center justify-start w-[173px]">
                        <Img
                          className="h-[173px] md:h-auto rounded-[50%] w-[173px]"
                          src="images/img_kisspngitalian.png"
                          alt="kisspngitalian"
                        />
                      </div>
                      <Text
                        className="mt-[26px] text-gray-900 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        Spaghetti
                      </Text>
                      <div className="flex flex-row items-center justify-center mt-[9px] rounded-[1.13px] w-[57%] md:w-full">
                        <RatingBar
                          className="flex justify-between w-[103px]"
                          value={5}
                          starCount={5}
                          activeColor="#f54748"
                          size={15}
                        ></RatingBar>
                      </div>
                      <Text
                        className="mt-[11px] text-center text-gray-801 text-xs w-[94%] sm:w-full"
                        size="txtPoppinsRegular12"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas consequat
                      </Text>
                      <Text
                        className="mt-[26px] text-gray-900 text-lg"
                        size="txtPoppinsSemiBold18"
                      >
                        $12.05
                      </Text>
                      <div className="bg-gray-51 flex flex-row items-center justify-center mt-[15px] rounded-[16.5px] w-[66%] md:w-full">
                        <Button
                          className="cursor-pointer h-[33px] rounded-[50%] text-center w-[33px]"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Button>
                        <Text
                          className="ml-[21px] text-[16.62px] text-gray-900"
                          size="txtPoppinsRegular1662"
                        >
                          2
                        </Text>
                        <Button
                          className="cursor-pointer h-[33px] ml-5 rounded-[50%] text-center w-[33px]"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Button>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[45px] w-full">
                      <Img
                        className="h-[174px] md:h-auto rounded-[50%] w-[174px]"
                        src="images/img_kisspngtagliat.png"
                        alt="kisspngtagliat"
                      />
                      <Text
                        className="mt-[26px] text-gray-900 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        Linguine
                      </Text>
                      <div className="flex flex-row items-center justify-center mt-[9px] rounded-[1.13px] w-[57%] md:w-full">
                        <RatingBar
                          className="flex justify-between w-[103px]"
                          value={5}
                          starCount={5}
                          activeColor="#f54748"
                          size={15}
                        ></RatingBar>
                      </div>
                      <Text
                        className="mt-[11px] text-center text-gray-801 text-xs w-[94%] sm:w-full"
                        size="txtPoppinsRegular12"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas consequat
                      </Text>
                      <Text
                        className="mt-[26px] text-gray-900 text-lg"
                        size="txtPoppinsSemiBold18"
                      >
                        $12.05
                      </Text>
                      <div className="bg-gray-51 flex flex-row items-center justify-center mt-[15px] rounded-[16.5px] w-[66%] md:w-full">
                        <Button
                          className="cursor-pointer h-[33px] rounded-[50%] text-center w-[33px]"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Button>
                        <Text
                          className="ml-[21px] text-[16.62px] text-gray-900"
                          size="txtPoppinsRegular1662"
                        >
                          2
                        </Text>
                        <Button
                          className="cursor-pointer h-[33px] ml-5 rounded-[50%] text-center w-[33px]"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Button>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[45px] w-full">
                      <div className="h-[174px] relative rounded-[50%] shadow-bs1 w-[174px]">
                        <Img
                          className="h-[173px] m-auto rounded-[50%] w-[174px]"
                          src="images/img_kisspngitalian.png"
                          alt="kisspngitalian One"
                        />
                        <Img
                          className="absolute h-[174px] inset-[0] justify-center m-auto rounded-[50%] w-[174px]"
                          src="images/img_kisspngpastai.png"
                          alt="kisspngpastai"
                        />
                      </div>
                      <Text
                        className="mt-[26px] text-gray-900 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        Capellini
                      </Text>
                      <div className="flex flex-row items-center justify-center mt-[9px] rounded-[1.13px] w-[57%] md:w-full">
                        <RatingBar
                          className="flex justify-between w-[103px]"
                          value={5}
                          starCount={5}
                          activeColor="#f54748"
                          size={15}
                        ></RatingBar>
                      </div>
                      <Text
                        className="mt-[11px] text-center text-gray-801 text-xs w-[94%] sm:w-full"
                        size="txtPoppinsRegular12"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas consequat
                      </Text>
                      <Text
                        className="mt-[26px] text-gray-900 text-lg"
                        size="txtPoppinsSemiBold18"
                      >
                        $12.05
                      </Text>
                      <div className="bg-gray-51 flex flex-row items-center justify-center mt-[15px] rounded-[16.5px] w-[66%] md:w-full">
                        <Button
                          className="cursor-pointer h-[33px] rounded-[50%] text-center w-[33px]"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Button>
                        <Text
                          className="ml-[21px] text-[16.62px] text-gray-900"
                          size="txtPoppinsRegular1662"
                        >
                          2
                        </Text>
                        <Button
                          className="cursor-pointer h-[33px] ml-5 rounded-[50%] text-center w-[33px]"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Button>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[45px] w-full">
                      <div className="h-[174px] relative rounded-[50%] shadow-bs1 w-[174px]">
                        <Img
                          className="h-[173px] m-auto rounded-[50%] w-[173px]"
                          src="images/img_kisspngitalian.png"
                          alt="kisspngitalian Two"
                        />
                        <Img
                          className="absolute h-[174px] inset-[0] justify-center m-auto rounded-[50%] w-[174px]"
                          src="images/img_pngwing1.png"
                          alt="pngwingOne"
                        />
                      </div>
                      <Text
                        className="mt-6 text-gray-900 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        Fettuccine
                      </Text>
                      <div className="flex flex-row items-center justify-center mt-3 rounded-[1.13px] w-[57%] md:w-full">
                        <RatingBar
                          className="flex justify-between w-[103px]"
                          value={5}
                          starCount={5}
                          activeColor="#f54748"
                          size={15}
                        ></RatingBar>
                      </div>
                      <Text
                        className="mt-[11px] text-center text-gray-801 text-xs w-[94%] sm:w-full"
                        size="txtPoppinsRegular12"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas consequat
                      </Text>
                      <Text
                        className="mt-[26px] text-gray-900 text-lg"
                        size="txtPoppinsSemiBold18"
                      >
                        $12.05
                      </Text>
                      <div className="bg-gray-51 flex flex-row items-center justify-center mt-[15px] rounded-[16.5px] w-[66%] md:w-full">
                        <Button
                          className="cursor-pointer h-[33px] rounded-[50%] text-center w-[33px]"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Button>
                        <Text
                          className="ml-[21px] text-[16.62px] text-gray-900"
                          size="txtPoppinsRegular1662"
                        >
                          0
                        </Text>
                        <Button className="bg-transparent cursor-pointer h-[33px] ml-5 text-center w-[33px]"></Button>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[45px] w-full">
                      <Img
                        className="h-[174px] md:h-auto rounded-[50%] w-[174px]"
                        src="images/img_kisspngaldent.png"
                        alt="kisspngaldent"
                      />
                      <Text
                        className="mt-[26px] text-gray-900 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        Linguine
                      </Text>
                      <div className="flex flex-row items-center justify-center mt-[9px] rounded-[1.13px] w-[57%] md:w-full">
                        <RatingBar
                          className="flex justify-between w-[103px]"
                          value={5}
                          starCount={5}
                          activeColor="#f54748"
                          size={15}
                        ></RatingBar>
                      </div>
                      <Text
                        className="mt-[11px] text-center text-gray-801 text-xs w-[94%] sm:w-full"
                        size="txtPoppinsRegular12"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas consequat
                      </Text>
                      <Text
                        className="mt-[26px] text-gray-900 text-lg"
                        size="txtPoppinsSemiBold18"
                      >
                        $12.05
                      </Text>
                      <div className="bg-gray-51 flex flex-row items-center justify-center mt-[15px] rounded-[16.5px] w-[66%] md:w-full">
                        <Button
                          className="cursor-pointer h-[33px] rounded-[50%] text-center w-[33px]"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Button>
                        <Text
                          className="ml-[21px] text-[16.62px] text-gray-900"
                          size="txtPoppinsRegular1662"
                        >
                          0
                        </Text>
                        <Button
                          className="cursor-pointer h-[33px] ml-5 rounded-[50%] text-center w-[33px]"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Button>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[45px] w-full">
                      <Img
                        className="h-[174px] md:h-auto rotate-[-180deg] rounded-[50%] w-[174px]"
                        src="images/img_image5.png"
                        alt="imageFive"
                      />
                      <Text
                        className="mt-[26px] text-gray-900 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        Capellini
                      </Text>
                      <div className="flex flex-row items-center justify-center mt-[9px] rounded-[1.13px] w-[57%] md:w-full">
                        <RatingBar
                          className="flex justify-between w-[103px]"
                          value={5}
                          starCount={5}
                          activeColor="#f54748"
                          size={15}
                        ></RatingBar>
                      </div>
                      <Text
                        className="mt-[11px] text-center text-gray-801 text-xs w-[94%] sm:w-full"
                        size="txtPoppinsRegular12"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas consequat
                      </Text>
                      <Text
                        className="mt-[26px] text-gray-900 text-lg"
                        size="txtPoppinsSemiBold18"
                      >
                        $12.05
                      </Text>
                      <div className="bg-gray-51 flex flex-row items-center justify-center mt-[15px] rounded-[16.5px] w-[66%] md:w-full">
                        <Button
                          className="cursor-pointer h-[33px] rounded-[50%] text-center w-[33px]"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Button>
                        <Text
                          className="ml-[21px] text-[16.62px] text-gray-900"
                          size="txtPoppinsRegular1662"
                        >
                          0
                        </Text>
                        <Button
                          className="cursor-pointer h-[33px] ml-5 rounded-[50%] text-center w-[33px]"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Button>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[45px] w-full">
                      <div className="h-[174px] relative rounded-[50%] shadow-bs1 w-[174px]">
                        <Img
                          className="h-[173px] m-auto rounded-[50%] w-[173px]"
                          src="images/img_kisspngitalian.png"
                          alt="kisspngitalian Three"
                        />
                        <Img
                          className="absolute h-[174px] inset-[0] justify-center m-auto rounded-[50%] w-[174px]"
                          src="images/img_pngwing2.png"
                          alt="pngwingTwo"
                        />
                      </div>
                      <Text
                        className="mt-6 text-gray-900 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        Fusilli
                      </Text>
                      <div className="flex flex-row items-center justify-center mt-3 rounded-[1.13px] w-[57%] md:w-full">
                        <RatingBar
                          className="flex justify-between w-[103px]"
                          value={5}
                          starCount={5}
                          activeColor="#f54748"
                          size={15}
                        ></RatingBar>
                      </div>
                      <Text
                        className="mt-[11px] text-center text-gray-801 text-xs w-[94%] sm:w-full"
                        size="txtPoppinsRegular12"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas consequat
                      </Text>
                      <Text
                        className="mt-[26px] text-gray-900 text-lg"
                        size="txtPoppinsSemiBold18"
                      >
                        $12.05
                      </Text>
                      <div className="bg-gray-51 flex flex-row items-center justify-center mt-[15px] rounded-[16.5px] w-[66%] md:w-full">
                        <Button
                          className="cursor-pointer h-[33px] rounded-[50%] text-center w-[33px]"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Button>
                        <Text
                          className="ml-[21px] text-[16.62px] text-gray-900"
                          size="txtPoppinsRegular1662"
                        >
                          0
                        </Text>
                        <Button
                          className="cursor-pointer h-[33px] ml-5 rounded-[50%] text-center w-[33px]"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Button>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[45px] w-full">
                      <Img
                        className="h-[174px] md:h-auto rounded-[50%] w-[174px]"
                        src="images/img_pngwing3.png"
                        alt="pngwingThree"
                      />
                      <Text
                        className="mt-6 text-gray-900 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        Farfalle
                      </Text>
                      <div className="flex flex-row items-center justify-center mt-3 rounded-[1.13px] w-[57%] md:w-full">
                        <RatingBar
                          className="flex justify-between w-[103px]"
                          value={5}
                          starCount={5}
                          activeColor="#f54748"
                          size={15}
                        ></RatingBar>
                      </div>
                      <Text
                        className="mt-[11px] text-center text-gray-801 text-xs w-[94%] sm:w-full"
                        size="txtPoppinsRegular12"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas consequat
                      </Text>
                      <Text
                        className="mt-[26px] text-gray-900 text-lg"
                        size="txtPoppinsSemiBold18"
                      >
                        $12.05
                      </Text>
                      <div className="bg-gray-51 flex flex-row items-center justify-center mt-[15px] rounded-[16.5px] w-[66%] md:w-full">
                        <Button
                          className="cursor-pointer h-[33px] rounded-[50%] text-center w-[33px]"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Button>
                        <Text
                          className="ml-[21px] text-[16.62px] text-gray-900"
                          size="txtPoppinsRegular1662"
                        >
                          0
                        </Text>
                        <Button
                          className="cursor-pointer h-[33px] ml-5 rounded-[50%] text-center w-[33px]"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Button>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[45px] w-full">
                      <Img
                        className="h-[174px] md:h-auto rounded-[50%] w-[174px]"
                        src="images/img_unsplasho3wkh.png"
                        alt="unsplashO3wkh"
                      />
                      <Text
                        className="mt-6 text-gray-900 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        Penne Alla Vodak
                      </Text>
                      <div className="flex flex-row items-center justify-center mt-3 rounded-[1.13px] w-[57%] md:w-full">
                        <RatingBar
                          className="flex justify-between w-[103px]"
                          value={5}
                          starCount={5}
                          activeColor="#f54748"
                          size={15}
                        ></RatingBar>
                      </div>
                      <Text
                        className="mt-[11px] text-center text-gray-801 text-xs w-[94%] sm:w-full"
                        size="txtPoppinsRegular12"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas consequat
                      </Text>
                      <Text
                        className="mt-[26px] text-gray-900 text-lg"
                        size="txtPoppinsSemiBold18"
                      >
                        $12.05
                      </Text>
                      <div className="bg-gray-51 flex flex-row items-center justify-center mt-[15px] rounded-[16.5px] w-[66%] md:w-full">
                        <Button
                          className="cursor-pointer h-[33px] rounded-[50%] text-center w-[33px]"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Button>
                        <Text
                          className="ml-[21px] text-[16.62px] text-gray-900"
                          size="txtPoppinsRegular1662"
                        >
                          0
                        </Text>
                        <Button
                          className="cursor-pointer h-[33px] ml-5 rounded-[50%] text-center w-[33px]"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end mb-[60px] md:mt-0 mt-[111px] py-[50px] rounded-[20px] shadow-bs2 w-[31%] md:w-full">
                <div className="flex flex-col gap-[54px] items-center justify-start mt-[3px] w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                    size="txtPoppinsSemiBold30"
                  >
                    Order list
                  </Text>
                  <Line className="bg-bluegray-101 h-px w-full" />
                </div>
                <List
                  className="flex flex-col gap-[50px] items-center mt-[39px] w-[83%]"
                  orientation="vertical"
                >
                  <div className="flex flex-col gap-10 items-center justify-end py-[9px] w-full">
                    <div className="flex flex-row items-start justify-between mt-1 w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                        size="txtPoppinsSemiBold25Black900"
                      >
                        Spaghetti
                      </Text>
                      <Button className="bg-transparent cursor-pointer h-6 text-center w-6"></Button>
                    </div>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="bg-gray-51 flex flex-row items-center justify-between rounded-[16.5px] w-[42%]">
                        <Button
                          className="cursor-pointer h-[33px] rounded-[50%] text-center w-[33px]"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Button>
                        <Text
                          className="text-[16.62px] text-gray-900"
                          size="txtPoppinsRegular1662"
                        >
                          2
                        </Text>
                        <Button
                          className="cursor-pointer h-[33px] rounded-[50%] text-center w-[33px]"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Button>
                      </div>
                      <Text
                        className="mt-1 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                        size="txtPoppinsMedium25"
                      >
                        $24.1
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-10 items-center justify-end py-[9px] w-full">
                    <div className="flex flex-row items-start justify-between mt-1 w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                        size="txtPoppinsSemiBold25Black900"
                      >
                        Linguine
                      </Text>
                      <Button className="bg-transparent cursor-pointer h-6 text-center w-6"></Button>
                    </div>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="bg-gray-51 flex flex-row items-center justify-between rounded-[16.5px] w-[42%]">
                        <Button
                          className="cursor-pointer h-[33px] rounded-[50%] text-center w-[33px]"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Button>
                        <Text
                          className="text-[16.62px] text-gray-900"
                          size="txtPoppinsRegular1662"
                        >
                          2
                        </Text>
                        <Button
                          className="cursor-pointer h-[33px] rounded-[50%] text-center w-[33px]"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Button>
                      </div>
                      <Text
                        className="mt-1 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                        size="txtPoppinsMedium25"
                      >
                        $35.7
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-10 items-center justify-end py-[9px] w-full">
                    <div className="flex flex-row items-start justify-between mt-1 w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                        size="txtPoppinsSemiBold25Black900"
                      >
                        Capellini
                      </Text>
                      <Button className="bg-transparent cursor-pointer h-6 text-center w-6"></Button>
                    </div>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="bg-gray-51 flex flex-row items-center justify-between rounded-[16.5px] w-[42%]">
                        <Button
                          className="cursor-pointer h-[33px] rounded-[50%] text-center w-[33px]"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Button>
                        <Text
                          className="text-[16.62px] text-gray-900"
                          size="txtPoppinsRegular1662"
                        >
                          2
                        </Text>
                        <Button
                          className="cursor-pointer h-[33px] rounded-[50%] text-center w-[33px]"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Button>
                      </div>
                      <Text
                        className="mt-1 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                        size="txtPoppinsMedium25"
                      >
                        $18.5
                      </Text>
                    </div>
                  </div>
                </List>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[168px] items-center justify-end mt-[49px] p-[25px] sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group7767.svg')" }}
                >
                  <div className="flex flex-col gap-[26px] items-start justify-start mt-1.5 w-[97%] md:w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtPoppinsSemiBold25Black900"
                    >
                      Voucher Code
                    </Text>
                    <div className="flex flex-row gap-[22px] items-center justify-between w-full">
                      <Input
                        name="group7722"
                        placeholder="FREETOEAT"
                        className="leading-[normal] p-0 placeholder:text-light_blue-800 text-left text-xl w-full"
                        wrapClassName="rounded-[15px]"
                        color="gray_51"
                        size="sm"
                      ></Input>
                      <Button
                        className="cursor-pointer h-[60px] rounded-[15px] text-center w-[60px]"
                        shape="round"
                        color="blue_400"
                        variant="fill"
                      ></Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[39px] items-center justify-end mt-[39px] py-3 w-[83%] md:w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtPoppinsSemiBold25Black900"
                    >
                      Subtotal
                    </Text>
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                      size="txtPoppinsMedium25"
                    >
                      $78.3
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtPoppinsSemiBold25Black900"
                    >
                      Tax fee
                    </Text>
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                      size="txtPoppinsMedium25"
                    >
                      $3.5
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtPoppinsSemiBold25Black900"
                    >
                      Voucher
                    </Text>
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                      size="txtPoppinsMedium25"
                    >
                      $5.0
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtPoppinsSemiBold25Black900"
                    >
                      Total
                    </Text>
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                      size="txtPoppinsMedium25"
                    >
                      $76.8
                    </Text>
                  </div>
                </div>
                <Button
                  className="common-pointer cursor-pointer font-semibold min-w-[283px] mt-[60px] rounded-[15px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                  onClick={() => navigate("/checkout")}
                  shape="round"
                  color="red_400"
                  size="md"
                  variant="fill"
                >
                  Checkout
                </Button>
              </div>
            </div>
            <div className="flex flex-row font-inter gap-2.5 items-center justify-start md:ml-[0] ml-[242px] mt-[50px] w-1/5 md:w-full">
              <Img
                className="h-[15px] w-[15px]"
                src="images/img_arrowleft_black_900.svg"
                alt="arrowleft"
              />
              <div className="flex flex-row gap-2.5 items-center justify-start w-[78%]">
                <Button
                  className="cursor-pointer font-semibold h-[35px] leading-[normal] rounded text-center text-sm tracking-[-0.50px] w-[35px]"
                  color="gray_900"
                  size="xs"
                  variant="fill"
                >
                  1
                </Button>
                <Button
                  className="cursor-pointer font-semibold h-[35px] leading-[normal] rounded text-center text-sm tracking-[-0.50px] w-[35px]"
                  color="gray_200"
                  size="xs"
                  variant="fill"
                >
                  2
                </Button>
                <Button
                  className="cursor-pointer font-semibold h-[35px] leading-[normal] rounded text-center text-sm tracking-[-0.50px] w-[35px]"
                  color="gray_200"
                  size="xs"
                  variant="fill"
                >
                  3
                </Button>
                <Button
                  className="flex h-[35px] items-center justify-center rounded w-[35px]"
                  color="gray_200"
                  size="xs"
                  variant="fill"
                >
                  <Img className="h-5" src="images/img_user.svg" alt="user" />
                </Button>
              </div>
              <Img
                className="h-[15px] w-[15px]"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </div>
          </div>
          <Footer className="bg-gray-901 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default OrderonlinePage;
