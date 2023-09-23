import { useReducer } from "react";
import Main from "./components/Main";
import OpeningPage from "./components/OpeningPage";

const initialState = {
  balance: 0,
  loan: 0,
  // openAccount, deposit, withdrow, requestLoan, payLoan, closeAccount
  isOpen: false,
  deposit: "",
  withdrow: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        balance: action.payload,
        isOpen: true,
      };
    case "addDeposit":
      return {
        ...state,
        deposit: action.payload,
      };
    case "deposit":
      return {
        ...state,
        balance: state.balance + state.deposit,
        deposit: "",
      };
    case "lessWithdrow":
      return {
        ...state,
        withdrow: action.payload,
      };
    case "withdrow":
      return {
        ...state,
        balance: state.balance - state.withdrow,
        withdrow: "",
      };
    case "requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        balance: state.balance + action.payload,
        loan: action.payload,
      };
    case "payLoan":
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
      };
    case "closeAccount":
      if (state.balance !== 0 || state.loan > 0) return state;
      return {
        ...initialState,
      };

    default:
      throw new Error("Unknown");
  }
}

function App() {
  const [{ balance, loan, isOpen, deposit, withdrow }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  return (
    <div className="h-screen w-screen bg-[#07122D] pt-10">
      <div className="m-auto h-[650px] w-[400px] rounded-2xl bg-[#F5F5F4] ">
        {!isOpen && <OpeningPage dispatch={dispatch} />}

        {isOpen && (
          <Main
            balance={balance}
            loan={loan}
            dispatch={dispatch}
            deposit={deposit}
            withdrow={withdrow}
          />
        )}
      </div>
    </div>
  );
}

export default App;
