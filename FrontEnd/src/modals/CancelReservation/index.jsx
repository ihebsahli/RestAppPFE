import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const CancelReservationModal = (props) => {
  const navigate = useNavigate();

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[78%]"
      overlayClassName="bg-gray-900_a3 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1112px] mx-auto my-[76px] md:px-5 py-[38px] rounded-[16px] w-full">
          <div className="mb-[26px] overflow-x-auto w-full">
            <div className="flex flex-col justify-start w-full">
              <div className="flex flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[448px] w-[55%] md:w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                  size="txtOpenSansRomanBold36"
                >
                  Reservation
                </Text>
                <Img
                  className="common-pointer h-6 w-6"
                  src="images/img_close.svg"
                  alt="close"
                  onClick={props.onRequestClose}
                />
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col font-poppins h-[286px] items-start justify-end p-11 md:px-10 sm:px-5 w-full"
                style={{
                  backgroundImage:
                    "url('images/img_reservationhas_orange_600.png')",
                }}
              >
                <div className="flex flex-col gap-[26px] items-start justify-start md:ml-[0] ml-[19px] mt-[54px] w-[61%] md:w-full">
                  <Text
                    className="leading-[110.00%] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-full"
                    size="txtPoppinsSemiBold40"
                  >
                    Are you sure you want to cancel the reservation?
                  </Text>
                  <div className="flex flex-row gap-4 items-start justify-start w-[39%] md:w-full">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_calendar_30X30.svg"
                      alt="calendar"
                    />
                    <Text
                      className="mt-1 text-white-A700 text-xl"
                      size="txtPoppinsRegular20WhiteA700"
                    >
                      Booking ID : #123456
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-center justify-start md:ml-[0] ml-[34px] mt-12 w-[95%] md:w-full">
                <div className="md:h-[329px] h-[330px] relative w-[330px]">
                  <div className="bg-deep_orange-200_63 flex flex-col h-full items-center justify-start m-auto p-8 sm:px-5 rounded-[50%] w-[330px]">
                    <div className="bg-deep_orange-200_6c h-[265px] rounded-[50%] w-[265px]"></div>
                  </div>
                  <Img
                    className="absolute h-[210px] inset-[0] justify-center m-auto rounded-[50%] w-[210px]"
                    src="images/img_unsplash.png"
                    alt="unsplash"
                  />
                </div>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[34px] w-[31%] md:w-full">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                    size="txtPoppinsSemiBold25"
                  >
                    Reservation detail
                  </Text>
                  <div className="flex flex-row gap-5 items-center justify-start mt-[37px] w-full">
                    <Img
                      className="h-[34px] w-[34px]"
                      src="images/img_calendar.svg"
                      alt="calendar One"
                    />
                    <Text
                      className="text-gray-801 text-xl"
                      size="txtPoppinsRegular20"
                    >
                      Saturday, 28 february 2022
                    </Text>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-start mt-5 w-[46%] md:w-full">
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
                  <div className="flex flex-row gap-5 items-center justify-start mt-5 w-full">
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
                <div className="flex flex-col gap-[30px] items-center justify-start ml-28 md:ml-[0] w-[24%] md:w-full">
                  <Button
                    className="cursor-pointer min-w-[246px] rounded-[20px] text-center text-xl"
                    color="red_400"
                    size="lg"
                    variant="fill"
                  >
                    Cancel
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer min-w-[246px] rounded-[20px] text-center text-xl"
                    onClick={() => navigate("/reservationhasbeenconfirmed")}
                    color="gray_400_64"
                    size="lg"
                    variant="fill"
                  >
                    Go Back
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default CancelReservationModal;
