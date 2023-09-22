import { useReducer } from "react";
import Button from "./components/Button";

const initialState = {
  balance: 0,
  loan: 0,
  isOpen: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "open":
      return {
        ...state,
        balance: action.payload,
        isOpen: true,
      };
    case "deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "withdrow":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "loan":
      return {
        ...state,
        balance:
          state.loan === 0 ? state.balance + action.payload : state.balance,
        loan: action.payload,
      };
    case "paid":
      return {
        ...state,
        balance:
          state.loan > 0 ? state.balance - action.payload : state.balance,
        loan: 0,
      };
    case "close":
      if (state.balance === 0) {
        return {
          ...initialState,
        };
      } else {
        return state;
      }
    default:
      throw new Error("error");
  }
}

function App() {
  const [{ balance, loan, isOpen }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <div className="text-center text-2xl space-y-4">
      <h1 className="text-4xl font-bold mt-10"> Mini Bank Account </h1>
      <h1> Balance:- {balance} </h1>
      <h1> Loan:- {loan} </h1>
      <div className="flex flex-col gap-5 items-center">
        <Button
          disabled={isOpen}
          onclick={() => dispatch({ type: "open", payload: 500 })}
        >
          Open Account
        </Button>

        <Button
          disabled={!isOpen}
          onclick={() => dispatch({ type: "deposit", payload: 150 })}
        >
          Deposit 150
        </Button>
        <Button
          disabled={!isOpen}
          onclick={() => dispatch({ type: "withdrow", payload: 50 })}
        >
          Withdraw 50
        </Button>
        <Button
          disabled={!isOpen}
          onclick={() => dispatch({ type: "loan", payload: 5000 })}
        >
          Request a loan of 5000
        </Button>
        <Button
          disabled={!isOpen}
          onclick={() => dispatch({ type: "paid", payload: 5000 })}
        >
          Pay Loan
        </Button>
        <Button disabled={!isOpen} onclick={() => dispatch({ type: "close" })}>
          Close Account
        </Button>
      </div>
    </div>
  );
}

export default App;
