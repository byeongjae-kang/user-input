import { useReducer } from "react";

const INITIAL_INPUT = {
  value: "",
  isEntered: false
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isEntered: state.isEntered };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isEntered: true };
  }
  if (action.type === "RESET") {
    return { value: "", isEntered: false };
  }
};

const useInput2 = (validateValue) => {
  const [inputState, dispatchInput] = useReducer(
    inputStateReducer,
    INITIAL_INPUT
  );

  // const [value, setValue] = useState("");
  // const [isEntered, setIsEntered] = useState(false);

  const IsValid = validateValue(inputState.value);
  const hasError = !IsValid && inputState.isEntered;

  const changeHandler = (e) => {
    dispatchInput({ type: "INPUT", value: e.target.value });
  };
  const blurHandler = (e) => {
    dispatchInput({ type: "BLUR" });
  };

  const reset = () => {
    dispatchInput({ type: "RESET" });
  };

  return {
    value: inputState.value,
    IsValid,
    hasError,
    reset,
    changeHandler,
    blurHandler
  };
};

export default useInput2;
