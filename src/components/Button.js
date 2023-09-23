import React from "react";

const Button = ({ onclick, className, children }) => {
  return (
    <button
      className={`w-full rounded-full bg-[#022165] px-4 py-2 text-white ${className} `}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default Button;
