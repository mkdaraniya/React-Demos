import React, { useId } from "react";
import { forwardRef } from "react";

const Input = forwardRef(function Input({
  label,
  type = "text",
  className = "",
  ...props
}, ref) {

  const id = useId();

  return (
    <div className="w-full">
      {
        label && (
          <label
            htmlFor={id}
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )
      }

      <input
        id={id}
        ref={ref}
        type={type}
        className={`w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${className}`}
        {...props}
      />
    </div>
  )
})

export default Input;