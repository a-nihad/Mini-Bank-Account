import React from "react";

const Button = ({ onclick, disabled, children }) => {
  return (
    <button
      className={`py-2 px-4 bg-slate-300 rounded-full w-max ${disabled ? "bg-gray-100 text-gray-400" :""}`}
      onClick={onclick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
