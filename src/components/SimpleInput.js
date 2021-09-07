import { useState } from "react";

const SimpleInput = (props) => {
  const [username, setUsername] = useState("");
  const [usernameIsEntered, setUsernameIsEntered] = useState(false);
  const [email, setEmail] = useState("");
  const [emailIsEntered, setEmailIsEntered] = useState(false);

  const usernameIsValid = username.trim() !== "";
  const usernameIsInvalid = !usernameIsValid && usernameIsEntered;
  const emailIsValid = email.includes("@");
  const emailIsInvalid = !emailIsValid && emailIsEntered;

  let formIsValid = false;

  if (usernameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const usernameInputHandler = (e) => {
    setUsername(e.target.value);
  };

  const usernameInputBlurHandler = () => {
    setUsernameIsEntered(true);
  };

  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };

  const emailInputBlurHandler = () => {
    setEmailIsEntered(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setUsernameIsEntered(true);
    setEmailIsEntered(true);

    if (usernameIsInvalid || emailIsInvalid) {
      return;
    }

    setUsername("");
    setEmail("");
    setUsernameIsEntered(false);
    setEmailIsEntered(false);
  };

  const nameInputClasses = usernameIsInvalid
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
          onChange={usernameInputHandler}
          onBlur={usernameInputBlurHandler}
        />
        {usernameIsInvalid && (
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
