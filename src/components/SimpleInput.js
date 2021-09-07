import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: username,
    valueIsValid: usernameIsValid,
    hasError: usernameHasError,
    reset: resetUsername,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler
  } = useInput((value) => value.trim() !== "");

  const [email, setEmail] = useState("");
  const [emailIsEntered, setEmailIsEntered] = useState(false);

  const emailIsValid = email.includes("@");
  const emailIsInvalid = !emailIsValid && emailIsEntered;

  let formIsValid = false;

  if (usernameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };

  const emailInputBlurHandler = () => {
    setEmailIsEntered(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (usernameHasError || emailIsInvalid) {
      return;
    }

    resetUsername();
    setEmail("");
    setEmailIsEntered(false);
  };

  const nameInputClasses = usernameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={username}
          onChange={usernameChangeHandler}
          onBlur={usernameBlurHandler}
        />
        {usernameHasError && (
          <p className="error-text">Name must not be empty!!</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={emailInputHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailIsInvalid && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
