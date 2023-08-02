/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";

const Button = ({
  color = "primary",
  variant = "filled",
  children,
  className,
  ...rest
}) => {
  const colors = {
    primary: "bg-blue-500 hover:bg-blue-600 ",
    light: "bg-white hover:bg-gray-100 text-black",
    warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    success: "bg-green-500 hover:bg-green-600 text-white border",
    dark: "bg-black hover:bg-gray-800 text-white border",
  };

  const variants = {
    filled: "",
    outlined: "bg-transparent text-black hover:text-white",
  };
  return (
    <button
      className={twMerge(
        "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none",
        colors[color],
        variants[variant],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
