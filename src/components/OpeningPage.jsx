import React from "react";
import Button from "./Button";

const OpeningPage = ({ dispatch }) => {
  return (
    <div className="flex h-full flex-col items-center gap-5 rounded-xl bg-[#FFFFFF] px-5 py-16 ">
      <img
        src="https://i.pinimg.com/564x/1a/59/79/1a5979ad4ad336d82821dea32ade9e86.jpg"
        alt="bank"
      />
      <h1 className="w-2/3 text-center text-3xl">
        Simple way to manage your money
      </h1>
      <Button onclick={() => dispatch({ type: "openAccount", payload: 500 })} className="w-[200px]" >
        Open Account
      </Button>
    </div>
  );
};

export default OpeningPage;
