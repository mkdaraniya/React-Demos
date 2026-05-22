import React from "react";

export const Button = ({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`${bgColor} ${textColor} ${className} px-5 py-3 rounded-xl font-medium shadow-sm hover:opacity-90 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;