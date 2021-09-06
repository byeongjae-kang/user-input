import { useState } from "react";

const SimpleInput = (props) => {
  const [username, setUsername] = useState("");
  const [usernameIsEntered, setUsernameIsEntered] = useState(false);

  const usernameIsValid = username.trim() !== "";
  const usernameIsInvalid = !usernameIsValid && usernameIsEntered;

  const userInputHandler = (e) => {
    setUsername(e.target.value);
  };

  const userInputBlurHandler = () => {
    setUsernameIsEntered(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setUsernameIsEntered(true);

    if (!usernameIsValid) {
      return;
    }

    setUsername("");
    setUsernameIsEntered(false);
  };

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
        <button disabled={usernameIsInvalid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
