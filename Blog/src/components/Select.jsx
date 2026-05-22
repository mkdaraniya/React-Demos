import React, { useId } from "react";
import { forwardRef } from "react";

function Select({ options, label, className = "", ...props }, ref) {

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

      <select
        id={id}
        ref={ref}
        className={`w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${className}`}
        {...props}
      >
        {
          options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))
        }
      </select>
    </div>
  );
}

export default forwardRef(Select);