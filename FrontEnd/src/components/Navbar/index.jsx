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