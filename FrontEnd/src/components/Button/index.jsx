import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[16px]" };
const variants = {
  fill: {
    light_blue_A700_6c: "bg-light_blue-A700_6c text-indigo-900",
    red_A700_63: "bg-red-A700_63 text-red-A700",
    gray_400_64: "bg-gray-400_64 text-gray-900",
    blue_400: "bg-blue-400",
    red_500: "bg-red-500 text-white-A700",
    red_400_19: "bg-red-400_19 text-red-400",
    white_A700: "bg-white-A700 shadow-bs",
    white_A700_7f: "bg-white-A700_7f text-red-400",
    gray_301: "bg-gray-301",
    indigo_300: "bg-indigo-300 text-white-A700",
    bluegray_100: "bg-bluegray-100",
    gray_900: "bg-gray-900 text-white-A700",
    gray_200: "bg-gray-200 text-black-900",
    gray_400_63: "bg-gray-400_63 text-gray-900",
    red_400: "bg-red-400 text-white-A700",
  },
};
const sizes = {
  xs: "p-[9px]",
  sm: "p-3.5",
  md: "p-[19px]",
  lg: "p-[27px] sm:px-5",
  xl: "p-[35px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "light_blue_A700_6c",
    "red_A700_63",
    "gray_400_64",
    "blue_400",
    "red_500",
    "red_400_19",
    "white_A700",
    "white_A700_7f",
    "gray_301",
    "indigo_300",
    "bluegray_100",
    "gray_900",
    "gray_200",
    "gray_400_63",
    "red_400",
  ]),
};

export { Button };
