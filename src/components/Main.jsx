import React from "react";
import Button from "./Button";

const Main = ({ balance, isOpen, loan, dispatch, deposit, withdrow }) => {
  return (
    <div className="grid h-full content-between p-5">
      <div className="flex flex-col gap-2 space-y-3 text-center">
        <div className="rounded-xl bg-[#EBECF1] p-10">
          <h1> Total Balance </h1>
          <h1 className="text-4xl font-semibold"> {balance} </h1>
        </div>

        <h1 className=" rounded-xl bg-[#EBECF1] p-5 text-xl">
          Loan: <span> {loan} </span>
        </h1>

        <div className="flex justify-between gap-5">
          <Button
            onclick={() => dispatch({ type: "requestLoan", payload: 5000 })}
            className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600"
          >
            <i className="fa-solid fa-hand-holding-dollar text-2xl "></i>
            <h1> Request a loan </h1>
          </Button>
          <Button
            onclick={() => dispatch({ type: "payLoan" })}
            className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-600"
          >
            <i className="fa-solid fa-credit-card text-2xl"></i>
            <h1> Pay Loan </h1>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-3 ">
          <input
            type="text"
            value={deposit}
            onChange={(e) =>
              dispatch({ type: "addDeposit", payload: Number(e.target.value) })
            }
            className="col-span-2 rounded-lg text-center"
          />
          <Button onclick={() => dispatch({ type: "deposit" })}>Deposit</Button>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <input
            type="text"
            value={withdrow}
            onChange={(e) =>
              dispatch({
                type: "lessWithdrow",
                payload: Number(e.target.value),
              })
            }
            className="col-span-2 rounded-lg text-center"
          />
          <Button onclick={() => dispatch({ type: "withdrow" })}>
            Withdraw
          </Button>
        </div>
      </div>

      <Button
        onclick={() => dispatch({ type: "closeAccount" })}
        className={balance !== 0 || loan > 0 ? "bg-gray-500 " : ""}
      >
        Close Account
      </Button>
    </div>
  );
};

export default Main;
