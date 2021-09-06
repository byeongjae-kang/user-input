import { useState } from "react";

const SimpleInput = (props) => {
  const [username, setUsername] = useState("");
  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [usernameIsEntered, setUsernameIsEntered] = useState(false);

  const userInputHandler = (e) => {
    setUsername(e.target.value);

    if (username.trim() !== "") {
      setUsernameIsValid(true);
    }
  };

  const userInputBlurHandler = () => {
    setUsernameIsEntered(true);

    if (username.trim() === "") {
      setUsernameIsValid(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setUsernameIsEntered(true);

    if (username.trim() === "") {
      setUsernameIsValid(false);
      return;
    }

    setUsernameIsValid(true);
    setUsername("");
  };

  const usernameIsInvalid = !usernameIsValid && usernameIsEntered;
  const nameInputClasses = usernameIsInvalid
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
          onChange={userInputHandler}
          onBlur={userInputBlurHandler}
        />
        {usernameIsInvalid && (
          <p className="error-text">Name must not be empty!!</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
