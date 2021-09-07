import { useState } from "react";

const useInput2 = (validateValue) => {
  const [value, setValue] = useState("");
  const [isEntered, setIsEntered] = useState(false);

  const IsValid = validateValue(value);
  const hasError = !IsValid && isEntered;

  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  const blurHandler = (e) => {
    setIsEntered(true);
  };

  const reset = () => {
    setValue("");
    setIsEntered(false);
  };

  return { value, IsValid, hasError, reset, changeHandler, blurHandler };
};

export default useInput2;
