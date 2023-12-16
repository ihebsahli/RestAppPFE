import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, SelectBox, Text, TextArea } from "components";

const selectOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const selectanaccasOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EnterDetailsReservationModal = (props) => {
  const navigate = useNavigate();

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[78%]"
      overlayClassName="bg-gray-900_a3 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col gap-8 items-end justify-start max-w-[1112px] mx-auto my-[76px] p-10 md:px-5 rounded-[16px] w-full">
          <div className="flex flex-row sm:gap-10 items-start justify-between w-[59%] md:w-full">
            <Text
              className="mt-5 text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
              size="txtOpenSansRomanBold36"
            >
              Reservation
            </Text>
            <Img
              className="common-pointer h-5 w-5"
              src="images/img_close.svg"
              alt="close"
              onClick={props.onRequestClose}
            />
          </div>
          <div className="flex flex-col font-poppins gap-12 items-center justify-start mb-5 mr-5 w-[97%] md:w-full">
            <Text
              className="bg-light_blue-A100_7e h-16 justify-center max-w-[992px] md:max-w-full sm:px-5 px-[35px] py-5 rounded-[20px] text-black-900 text-xl w-full"
              size="txtPoppinsRegular20Black900"
            >
              <span className="text-gray-801 font-poppins text-left font-normal">
                Due to limited availability, we can hold this table for you for
              </span>
              <span className="text-black-900 font-poppins text-left font-normal">
                {" "}
              </span>
              <span className="text-gray-900 font-poppins text-left font-semibold">
                5:00 minutes
              </span>
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[23px] items-start justify-start md:mt-0 mt-1.5 w-[48%] md:w-full">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                  size="txtPoppinsSemiBold25Black900"
                >
                  Data order
                </Text>
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <Input
                    name="Firstname"
                    placeholder="First name"
                    className="p-0 placeholder:text-gray-500 text-left text-xl w-full"
                    wrapClassName="border border-gray-400 border-solid w-full"
                    type="text"
                    shape="round"
                  ></Input>
                  <Input
                    name="Lastname"
                    placeholder="Last name"
                    className="p-0 placeholder:text-gray-500 text-left text-xl w-full"
                    wrapClassName="border border-gray-400 border-solid w-full"
                    type="text"
                    shape="round"
                  ></Input>
                  <div className="bg-white-A700 border border-gray-400 border-solid flex flex-row gap-4 items-center justify-start p-3 rounded-lg w-full">
                    <SelectBox
                      className="sm:flex-1 mb-0.5 ml-1 w-[11%] sm:w-full"
                      indicator={
                        <Img
                          className="h-[11px] mr-[0] w-[11px]"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupNinetyFour"
                      isSearchable={false}
                      options={selectOptionsList}
                    />
                    <Text
                      className="text-gray-500 text-xl"
                      size="txtPoppinsRegular20Gray500"
                    >
                      Phone number
                    </Text>
                  </div>
                  <Input
                    name="Emailaddress"
                    placeholder="Email address"
                    className="p-0 placeholder:text-gray-500 text-left text-xl w-full"
                    wrapClassName="border border-gray-400 border-solid w-full"
                    type="email"
                    shape="round"
                  ></Input>
                  <SelectBox
                    className="border border-gray-400 border-solid rounded-lg text-left text-xl w-full"
                    placeholderClassName="text-gray-500"
                    indicator={
                      <Img
                        className="h-[21px] mr-5 w-[21px]"
                        src="images/img_arrowdown_21X21.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="Selectanaccas"
                    options={selectanaccasOptionsList}
                    isSearchable={false}
                    placeholder="Select an occasion"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  />
                  <TextArea
                    className="bg-white-A700 border border-gray-400 border-solid pb-[35px] pl-4 sm:pr-5 pr-[35px] pt-4 rounded-lg placeholder:text-gray-500 text-gray-500 text-left text-xl w-full"
                    name="Addaspecialr"
                    placeholder="Add a special request"
                    name="Addaspecialr"
                    placeholder="Add a special request"
                  ></TextArea>
                </div>
                <Button
                  className="common-pointer cursor-pointer min-w-[475px] sm:min-w-full rounded-lg sm:text-[21px] md:text-[23px] text-[25px] text-center"
                  onClick={() => navigate("/reservationhasbeenconfirmed")}
                  color="red_400"
                  size="sm"
                  variant="fill"
                >
                  Confirm reservation
                </Button>
              </div>
              <div className="flex md:flex-1 flex-col gap-[55px] items-center justify-start w-[44%] md:w-full">
                <div className="bg-bluegray-100_63 flex flex-col items-start justify-end p-[35px] sm:px-5 rounded-[20px] w-full">
                  <Text
                    className="md:ml-[0] ml-[5px] mt-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                    size="txtPoppinsSemiBold25"
                  >
                    Reservation detail
                  </Text>
                  <div className="flex flex-row gap-9 items-center justify-start mt-[47px] w-[95%] md:w-full">
                    <Img
                      className="h-[34px] w-[34px]"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                    <Text
                      className="text-gray-801 text-xl"
                      size="txtPoppinsRegular20"
                    >
                      Saturday, 28 february 2022
                    </Text>
                  </div>
                  <div className="flex flex-row gap-9 items-center justify-start mt-[25px] w-[46%] md:w-full">
                    <Img
                      className="h-[34px] w-[34px]"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <Text
                      className="text-gray-801 text-xl"
                      size="txtPoppinsRegular20"
                    >
                      04:30 pm
                    </Text>
                  </div>
                  <div className="flex flex-row gap-9 items-center justify-start mt-[25px] w-[95%] md:w-full">
                    <Img
                      className="h-[34px] w-[34px]"
                      src="images/img_user_34X34.svg"
                      alt="user"
                    />
                    <Text
                      className="text-gray-801 text-xl"
                      size="txtPoppinsRegular20"
                    >
                      2 people (Standar seating)
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-12 items-start justify-start">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                    size="txtPoppinsSemiBold25Black900"
                  >
                    Restaurant informations
                  </Text>
                  <Text
                    className="text-gray-801 text-xl w-full"
                    size="txtPoppinsRegular20"
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default EnterDetailsReservationModal;
