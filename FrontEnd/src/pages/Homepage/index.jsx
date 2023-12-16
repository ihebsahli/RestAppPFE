import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  RatingBar,
  Slider,
  Text,
} from "components";
import Footer from "components/Footer";

const HomepagePage = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="bg-gradient  flex flex-col items-center justify-start p-[50px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start max-w-[1240px] mb-5 mx-auto w-full">
            <header className="flex items-center justify-center w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                <div className="header-row ">
                  <Img
                    className="h-[51px]"
                    src="images/img_logo.svg"
                    alt="Logo"
                  />
                  <div className="mobile-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="flex md:flex-1 sm:flex-col flex-row font-opensans sm:hidden items-start justify-center md:ml-[0] ml-[107px] pt-0.5 w-[52%] md:w-full">
                  <div className="flex flex-col gap-1.5 items-center justify-start w-[9%] sm:w-full">
                    <Text
                      className="text-base text-red-400"
                      size="txtOpenSansRomanRegular16Red400"
                    >
                      Home
                    </Text>
                    <Line className="bg-red-400 h-px w-full" />
                  </div>
                  <div className="flex flex-col items-center justify-start ml-8">
                    <Text
                      className="common-pointer text-base text-gray-900_cc"
                      size="txtOpenSansRomanRegular16Gray900cc"
                      onClick={() => navigate("/menu")}
                    >
                      Menu
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start ml-8">
                    <Text
                      className="common-pointer text-base text-gray-900_cc"
                      size="txtOpenSansRomanRegular16Gray900cc"
                      onClick={() => navigate("/aboutus")}
                    >
                      About us
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start ml-[31px]">
                    <Text
                      className="common-pointer text-base text-gray-900_cc"
                      size="txtOpenSansRomanRegular16Gray900cc"
                      onClick={() => navigate("/orderonline")}
                    >
                      Order online
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start ml-[27px]">
                    <Text
                      className="common-pointer text-base text-gray-900_cc"
                      size="txtOpenSansRomanRegular16Gray900cc"
                      onClick={() => navigate("/reservation")}
                    >
                      Reservation
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start ml-[31px]">
                    <Text
                      className="common-pointer text-base text-gray-900_cc"
                      size="txtOpenSansRomanRegular16Gray900cc"
                      onClick={() => navigate("/contact")}
                    >
                      Contact us
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer flex h-[50px] sm:hidden items-center justify-center md:ml-[0] ml-[122px] w-[50px]"
                  leftIcon={
                    <Img
                      className="h-6 sm:hidden m-[13px]"
                      src="images/img_cart.svg"
                      alt="cart"
                    />
                  }
                  shape="circle"
                  color="white_A700"
                  variant="fill"
                >
                  <div className="sm:hidden"></div>
                </Button>
                <Button
                  className="cursor-pointer font-semibold sm:hidden leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm"
                  shape="round"
                  color="red_400"
                  size="sm"
                  variant="fill"
                >
                  Log in
                </Button>
              </div>
            </header>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex flex-col items-center justify-start rounded-[16px]">
                <div className="flex flex-col gap-9 items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="md:text-5xl text-[70px] text-gray-902"
                      size="txtOpenSansRomanBold70Gray902"
                    >
                      <span className="text-gray-902 font-opensans text-left font-bold">
                        <>
                          Best Restaurant
                          <br />
                          In{" "}
                        </>
                      </span>
                      <span className="text-red-400 font-opensans text-left font-bold">
                        Town.
                      </span>
                    </Text>
                    <Text
                      className="leading-[200.00%] text-gray-802 text-xl w-[91%] sm:w-full"
                      size="txtPoppinsRegular20Gray802"
                    >
                      We provide best food in town, we provide home delivery and
                      dine in services.
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-[85%] md:w-full">
                    <Button
                      className="common-pointer cursor-pointer font-semibold min-w-[232px] text-center text-xl"
                      onClick={() => navigate("/menu")}
                      shape="round"
                      color="red_400"
                      size="lg"
                      variant="fill"
                    >
                      Order now
                    </Button>
                    <Button
                      className="common-pointer cursor-pointer font-semibold min-w-[232px] text-center text-xl"
                      onClick={() => navigate("/reservation")}
                      shape="round"
                      color="red_400_19"
                      size="lg"
                      variant="fill"
                    >
                      Reservation
                    </Button>
                  </div>
                </div>
              </div>
              <Img
                className="h-[502px] md:h-auto object-cover"
                src="images/img_illustration.png"
                alt="illustration"
              />
            </div>
          </div>
        </div>
        <div className="bg-green-50 flex flex-row items-center justify-start mt-[139px] p-3.5 w-full">
          <div className="flex md:flex-col flex-row gap-[13px] items-start justify-start ml-[149px] md:px-5 w-[79%]">
            <div className="md:h-[558px] h-[646px] relative w-3/5 md:w-full">
              <Img
                className="absolute h-[558px] inset-y-[0] left-[4%] my-auto object-cover w-[85%]"
                src="images/img_kindpng3443995.png"
                alt="kindpng3443995"
              />
              <Img
                className="absolute bottom-[7%] h-[175px] left-[0] object-cover w-[28%]"
                src="images/img_kisspngleafpe.png"
                alt="kisspngleafpe"
              />
              <Img
                className="absolute bottom-[0] h-[117px] left-[39%] object-cover w-[17%]"
                src="images/img_kisspngleafpe_117X110.png"
                alt="kisspngleafpe One"
              />
              <Img
                className="absolute h-[158px] object-cover right-[0] top-[0] w-[24%]"
                src="images/img_kisspngleafpe_158X154.png"
                alt="kisspngleafpe Two"
              />
            </div>
            <div className="flex flex-col gap-9 items-start justify-start md:mt-0 mt-[91px] rounded-[16px] w-[39%] md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="leading-[110.00%] sm:text-[38px] md:text-[44px] text-[52px] text-red-400"
                  size="txtTinosBold52"
                >
                  <span className="text-gray-902 font-opensans text-left font-bold leading-[normal]">
                    <>
                      Our Most <br />
                      Popular{" "}
                    </>
                  </span>
                  <span className="text-red-400 font-opensans text-left font-bold leading-[normal]">
                    Dish.
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
                className="common-pointer cursor-pointer font-semibold min-w-[232px] text-center text-xl"
                onClick={() => navigate("/menu")}
                shape="round"
                color="red_400"
                size="lg"
                variant="fill"
              >
                Order now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-opensans md:gap-10 gap-[79px] items-center justify-start max-w-[1112px] mt-[133px] mx-auto md:px-5 w-full">
          <Text
            className="sm:text-[38px] md:text-[44px] text-[52px] text-gray-900"
            size="txtOpenSansRomanBold52"
          >
            Our Popular Menu
          </Text>
          <div className="flex flex-col font-poppins gap-[50px] items-center justify-start w-full">
            <div className="flex sm:flex-col flex-row gap-7 items-center justify-between rounded-[16px] w-full">
              <Button
                className="cursor-pointer font-semibold min-w-[232px] text-center text-xl"
                shape="round"
                color="red_400"
                size="lg"
                variant="fill"
              >
                All catagory
              </Button>
              <Button
                className="cursor-pointer min-w-[192px] text-center text-xl"
                shape="round"
                color="gray_400_63"
                size="lg"
                variant="fill"
              >
                Dinner
              </Button>
              <Button
                className="cursor-pointer min-w-[192px] text-center text-xl"
                shape="round"
                color="gray_400_63"
                size="lg"
                variant="fill"
              >
                Lunch
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
            <div className="flex flex-col gap-12 items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start rounded-[40px] w-full">
                <div className="md:gap-5 gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                    <Img
                      className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                      src="images/img_pngitem41084.png"
                      alt="PngItem41084"
                    />
                    <div className="flex flex-col items-center justify-end mb-1.5 pt-[17px] w-full">
                      <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                          size="txtPoppinsSemiBold30"
                        >
                          Spaghetti
                        </Text>
                        <Text
                          className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                          size="txtPoppinsRegular14"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Egestas consequat mi eget auctor aliquam, diam.{" "}
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                        <RatingBar
                          className="flex justify-between w-[140px]"
                          value={5}
                          starCount={5}
                          activeColor="#f54748"
                          size={24}
                        ></RatingBar>
                      </div>
                      <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-lg w-[95%] md:w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                          size="txtPoppinsSemiBold25"
                        >
                          $12.05
                        </Text>
                        <Button
                          className="common-pointer cursor-pointer font-semibold min-w-[158px] rounded-lg text-base text-center"
                          onClick={() => navigate("/checkout")}
                          color="red_400"
                          size="md"
                          variant="fill"
                        >
                          Order now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                    <Img
                      className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                      src="images/img_pngitem1447549.png"
                      alt="PngItem1447549"
                    />
                    <div className="flex flex-col items-center justify-end mb-1.5 pt-3.5 w-full">
                      <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                          size="txtPoppinsSemiBold30"
                        >
                          Gnocchi
                        </Text>
                        <Text
                          className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                          size="txtPoppinsRegular14"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Egestas consequat mi eget auctor aliquam, diam.{" "}
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                        <RatingBar
                          className="flex justify-between w-[140px]"
                          value={5}
                          starCount={5}
                          activeColor="#f54748"
                          size={24}
                        ></RatingBar>
                      </div>
                      <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-lg w-[95%] md:w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                          size="txtPoppinsSemiBold25"
                        >
                          $12.05
                        </Text>
                        <Button
                          className="common-pointer cursor-pointer font-semibold min-w-[158px] rounded-lg text-base text-center"
                          onClick={() => navigate("/checkout")}
                          color="red_400"
                          size="md"
                          variant="fill"
                        >
                          Order now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                    <Img
                      className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                      src="images/img_pngegg.png"
                      alt="pngegg"
                    />
                    <div className="flex flex-col items-center justify-end mb-1.5 pt-3.5 w-full">
                      <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                          size="txtPoppinsSemiBold30"
                        >
                          Rovioli
                        </Text>
                        <Text
                          className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                          size="txtPoppinsRegular14"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Egestas consequat mi eget auctor aliquam, diam.{" "}
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                        <RatingBar
                          className="flex justify-between w-[140px]"
                          value={5}
                          starCount={5}
                          activeColor="#f54748"
                          size={24}
                        ></RatingBar>
                      </div>
                      <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-lg w-[95%] md:w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                          size="txtPoppinsSemiBold25"
                        >
                          $12.05
                        </Text>
                        <Button
                          className="common-pointer cursor-pointer font-semibold min-w-[158px] rounded-lg text-base text-center"
                          onClick={() => navigate("/checkout")}
                          color="red_400"
                          size="md"
                          variant="fill"
                        >
                          Order now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                    <Img
                      className="h-[270px] md:h-auto mt-1.5 object-cover w-[95%]"
                      src="images/img_pngwing.png"
                      alt="pngwing"
                    />
                    <div className="flex flex-col items-center justify-end mb-1.5 pt-[15px] w-full">
                      <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                          size="txtPoppinsSemiBold30"
                        >
                          Penne Alla Vodak
                        </Text>
                        <Text
                          className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                          size="txtPoppinsRegular14"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Egestas consequat mi eget auctor aliquam, diam.{" "}
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                        <RatingBar
                          className="flex justify-between w-[140px]"
                          value={5}
                          starCount={5}
                          activeColor="#f54748"
                          size={24}
                        ></RatingBar>
                      </div>
                      <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-lg w-[95%] md:w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                          size="txtPoppinsSemiBold25"
                        >
                          $12.05
                        </Text>
                        <Button
                          className="common-pointer cursor-pointer font-semibold min-w-[158px] rounded-lg text-base text-center"
                          onClick={() => navigate("/checkout")}
                          color="red_400"
                          size="md"
                          variant="fill"
                        >
                          Order now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                    <Img
                      className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                      src="images/img_pngitem5290903.png"
                      alt="PngItem5290903"
                    />
                    <div className="flex flex-col items-center justify-end mb-1.5 pt-3.5 w-full">
                      <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                          size="txtPoppinsSemiBold30"
                        >
                          Risoto
                        </Text>
                        <Text
                          className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                          size="txtPoppinsRegular14"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Egestas consequat mi eget auctor aliquam, diam.{" "}
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                        <RatingBar
                          className="flex justify-between w-[140px]"
                          value={5}
                          starCount={5}
                          activeColor="#f54748"
                          size={24}
                        ></RatingBar>
                      </div>
                      <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-lg w-[95%] md:w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                          size="txtPoppinsSemiBold25"
                        >
                          $12.05
                        </Text>
                        <Button
                          className="common-pointer cursor-pointer font-semibold min-w-[158px] rounded-lg text-base text-center"
                          onClick={() => navigate("/checkout")}
                          color="red_400"
                          size="md"
                          variant="fill"
                        >
                          Order now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                    <Img
                      className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                      src="images/img_pngwing_270X270.png"
                      alt="pngwing One"
                    />
                    <div className="flex flex-col items-center justify-end mb-1.5 w-full">
                      <div className="flex flex-col gap-[18px] items-center justify-start mt-4 w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                          size="txtPoppinsSemiBold30"
                        >
                          Splitza Signature
                        </Text>
                        <Text
                          className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                          size="txtPoppinsRegular14"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Egestas consequat mi eget auctor aliquam, diam.{" "}
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                        <RatingBar
                          className="flex justify-between w-[140px]"
                          value={5}
                          starCount={5}
                          activeColor="#f54748"
                          size={24}
                        ></RatingBar>
                      </div>
                      <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-lg w-[95%] md:w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                          size="txtPoppinsSemiBold25"
                        >
                          $12.05
                        </Text>
                        <Button
                          className="common-pointer cursor-pointer font-semibold min-w-[158px] rounded-lg text-base text-center"
                          onClick={() => navigate("/checkout")}
                          color="red_400"
                          size="md"
                          variant="fill"
                        >
                          Order now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row font-inter gap-2.5 items-center justify-center w-1/5 md:w-full">
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
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1112px] mt-[156px] mx-auto md:px-5 w-full">
          <Text
            className="sm:text-[38px] md:text-[44px] text-[52px] text-gray-900"
            size="txtOpenSansRomanBold52"
          >
            Our Popular Chef
          </Text>
          <List
            className="sm:flex-col flex-row font-poppins gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[60px] pb-3 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-[52px] items-center justify-start w-full">
              <div className="bg-gray-900_6c h-[549px] relative rounded-[50px] w-full">
                <Img
                  className="absolute h-[549px] inset-[0] justify-center m-auto object-cover rounded-[50px] w-full"
                  src="images/img_image1.png"
                  alt="imageOne"
                />
              </div>
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                size="txtPoppinsSemiBold25"
              >
                Betran Komar
              </Text>
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-501"
                size="txtPoppinsRegular25Gray501"
              >
                Head chef
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="bg-gradient1  md:h-[541px] h-[549px] pt-2 relative rounded-[50px] w-full">
                <Img
                  className="absolute h-[541px] inset-[0] justify-center m-auto object-cover rounded-[50px] w-full"
                  src="images/img_image3.png"
                  alt="imageThree"
                />
              </div>
              <Text
                className="mt-[54px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                size="txtPoppinsSemiBold25"
              >
                Ferry Sauwi
              </Text>
              <Text
                className="mt-[51px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-501"
                size="txtPoppinsRegular25Gray501"
              >
                Chef
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="bg-lime-900_6c h-[549px] relative rounded-[50px] w-full">
                <Img
                  className="absolute h-[549px] inset-[0] justify-center m-auto object-cover rounded-[50px] w-full"
                  src="images/img_image2.png"
                  alt="imageTwo"
                />
              </div>
              <Text
                className="mt-[52px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                size="txtPoppinsSemiBold25"
              >
                Iswan Dracho
              </Text>
              <Text
                className="mt-[54px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-501"
                size="txtPoppinsRegular25Gray501"
              >
                Chef
              </Text>
            </div>
          </List>
          <Button
            className="cursor-pointer font-poppins font-semibold min-w-[235px] mt-[83px] text-center text-xl"
            shape="round"
            color="red_400"
            size="lg"
            variant="fill"
          >
            View all
          </Button>
        </div>
        <div className="flex flex-col font-opensans gap-[50px] items-center justify-start mt-[120px] pt-4 md:px-5 w-[55%] md:w-full">
          <div className="flex flex-col items-center justify-start">
            <Text
              className="sm:text-[38px] md:text-[44px] text-[52px] text-gray-900"
              size="txtOpenSansRomanBold52"
            >
              What Our Customers Say
            </Text>
          </div>
          <div className="h-[394px] relative w-full">
            <PagerIndicator
              className="absolute flex h-[394px] inset-[0] justify-center m-auto max-w-[728px] w-full"
              count={3}
              activeCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-bluegray-100 w-2.5 relative mx-[5.00px]"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-gray-301 w-2.5 relative mx-[5.00px]"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
            <Button
              className="absolute cursor-pointer flex h-[60px] inset-y-[0] items-center justify-center my-auto right-[0] rounded-[50%] w-[60px]"
              onClick={() => sliderRef.current?.slideNext?.()}
              shape="circle"
              color="white_A700"
              size="md"
              variant="fill"
            >
              <Img
                className="h-6"
                src="images/img_group81.svg"
                alt="groupEightyOne"
              />
            </Button>
            <Button
              className="absolute cursor-pointer flex h-[60px] inset-y-[0] items-center justify-center left-[0] my-auto rotate-[180deg] rounded-[50%] w-[60px]"
              onClick={() => sliderRef.current?.slidePrev?.()}
              shape="circle"
              color="white_A700"
              size="md"
              variant="fill"
            >
              <Img
                className="h-6"
                src="images/img_group82.svg"
                alt="groupEightyTwo"
              />
            </Button>
            <div className="absolute inset-[0] justify-center m-auto w-full"></div>
          </div>
        </div>
        <div className="bg-red-100 flex flex-col font-opensans items-center justify-end max-w-[1112px] mt-[120px] mx-auto p-[93px] md:px-5 rounded-[24px] w-full">
          <div className="flex flex-col gap-12 items-center justify-start mt-[17px] w-[77%] md:w-full">
            <Text
              className="sm:text-[38px] md:text-[44px] text-[52px] text-gray-900"
              size="txtOpenSansRomanBold52"
            >
              Hungry? We are open now..
            </Text>
            <div className="flex sm:flex-col flex-row font-poppins gap-6 items-center justify-center w-[70%] md:w-full">
              <Button
                className="common-pointer cursor-pointer font-semibold min-w-[232px] text-center text-xl"
                onClick={() => navigate("/menu")}
                shape="round"
                color="red_400"
                size="lg"
                variant="fill"
              >
                Order now
              </Button>
              <Button
                className="common-pointer cursor-pointer font-semibold min-w-[232px] text-center text-xl"
                onClick={() => navigate("/reservation")}
                shape="round"
                color="white_A700_7f"
                size="lg"
                variant="fill"
              >
                Reservation
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-901 flex font-poppins items-center justify-center mt-[120px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default HomepagePage;
