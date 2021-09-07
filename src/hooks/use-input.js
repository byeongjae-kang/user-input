import { useState } from "react";

const useInput = (validateValue) => {
  const [value, setValue] = useState("");
  const [isEntered, setIsEntered] = useState(false);

  const valueIsValid = validateValue(value);
  const hasError = !value && isEntered;

  const valueChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsEntered(true);
  };

  const reset = () => {
    setValue('');
    setIsEntered(false);

  }

  return { value, valueIsValid, hasError, reset, valueChangeHandler, inputBlurHandler };
};

export default useInput;
