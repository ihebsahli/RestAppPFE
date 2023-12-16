import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Button, Img, Line, RatingBar, Text } from "components";
import Footer from "components/Footer";

const MenuPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [plates, setPlates] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All catagory");
  const [originalPlates, setOriginalPlates] = useState([]);

  const filterPlatesByCategory = (category) => {
    setSelectedCategory(category);

    if (category === "All catagory") {
      // Show all plates from the original unfiltered list
      setPlates(originalPlates);
    } else {
      // If category is not "All", filter the plates
      const filteredPlates = originalPlates.filter(
        (plate) => plate.categorie === category
      );
      setPlates(filteredPlates);
    }
  };

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem("token");

    // Navigate to the login page
    navigate("/Login");
  };

  useEffect(() => {
    // Fetch plates data from the API endpoint
    const fetchPlates = async () => {
      try {
        const response = await fetch("http://localhost:5000/plats/allplats");
        const data = await response.json();
        setPlates(data);
        setOriginalPlates(data); // Set originalPlates to the unfiltered list
      } catch (error) {
        console.error("Error fetching plates:", error);
      }
    };

    fetchPlates();
  }, []);

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
              <div className="flex flex-col gap-1.5 items-start justify-start ml-8 sm:ml-[0] w-[9%] sm:w-full">
                <Text
                  className="text-base text-red-400"
                  size="txtOpenSansRomanRegular16Red400"
                >
                  Menu
                </Text>
                <Line className="bg-red-400 h-px w-full" />
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
          <div className="flex flex-col font-opensans md:gap-10 gap-[79px] items-center justify-start w-full">
            <Text
              className="sm:text-[38px] md:text-[44px] text-[52px] text-gray-900"
              size="txtOpenSansRomanBold52"
            >
              Our Popular Menu
            </Text>
            <div className="flex flex-col font-poppins gap-[50px] items-center justify-start w-full">
              <div className="flex flex-col font-opensans md:gap-10 gap-[79px] items-center justify-start w-full">
                <div className="flex sm:flex-col flex-row gap-7 items-center justify-between rounded-[16px] w-full">
                  <Button
                    className={`cursor-pointer font-semibold min-w-[232px] text-center text-xl ${
                      selectedCategory === "All catagory"
                        ? "red_400"
                        : "gray_400_63"
                    }`}
                    shape="round"
                    color={
                      selectedCategory === "All catagory"
                        ? "red_400"
                        : "gray_400_63"
                    }
                    size="lg"
                    variant="fill"
                    onClick={() => filterPlatesByCategory("All catagory")}
                  >
                    All catagories
                  </Button>
                  <Button
                    className={`cursor-pointer min-w-[192px] text-center text-xl ${
                      selectedCategory === "Plat principal"
                        ? "red_400"
                        : "gray_400_63"
                    }`}
                    shape="round"
                    color={
                      selectedCategory === "Plat principal"
                        ? "red_400"
                        : "gray_400_63"
                    }
                    size="lg"
                    variant="fill"
                    onClick={() => filterPlatesByCategory("Plat principal")}
                  >
                    Plat principal
                  </Button>
                  <Button
                    className={`cursor-pointer min-w-[192px] text-center text-xl ${
                      selectedCategory === "Entrée" ? "red_400" : "gray_400_63"
                    }`}
                    shape="round"
                    color={
                      selectedCategory === "Entrée" ? "red_400" : "gray_400_63"
                    }
                    size="lg"
                    variant="fill"
                    onClick={() => filterPlatesByCategory("Entrée")}
                  >
                    Entrée
                  </Button>
                  <Button
                    className={`cursor-pointer min-w-[192px] text-center text-xl ${
                      selectedCategory === "Dessert" ? "red_400" : "gray_400_63"
                    }`}
                    shape="round"
                    color={
                      selectedCategory === "Dessert" ? "red_400" : "gray_400_63"
                    }
                    size="lg"
                    variant="fill"
                    onClick={() => filterPlatesByCategory("Dessert")}
                  >
                    Dessert
                  </Button>
                  <Button
                    className={`cursor-pointer min-w-[192px] text-center text-xl ${
                      selectedCategory === "Boisson" ? "red_400" : "gray_400_63"
                    }`}
                    shape="round"
                    color={
                      selectedCategory === "Boisson" ? "red_400" : "gray_400_63"
                    }
                    size="lg"
                    variant="fill"
                    onClick={() => filterPlatesByCategory("Boisson")}
                  >
                    Boisson
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-12 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start rounded-[40px] w-full">
                  <div className="md:gap-5 gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                    {plates.map((plate) => (
                      <div
                        key={plate._id}
                        className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full"
                      >
                        <Img
                          className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                          src={plate.image}
                          alt={plate.nomPlat}
                        />
                        <div className="flex flex-col items-center justify-end mb-1.5 pt-[17px] w-full">
                          <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                            <Text
                              className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                              size="txtPoppinsSemiBold30"
                            >
                              {plate.nomPlat}
                            </Text>
                            <Text
                              className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                              size="txtPoppinsRegular14"
                            >
                              {plate.description}
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
                              ${plate.prix.toFixed(2)}
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
                    ))}
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
                      <Img
                        className="h-5"
                        src="images/img_user.svg"
                        alt="user"
                      />
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
        </div>
        <Footer className="bg-gray-901 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default MenuPage;
