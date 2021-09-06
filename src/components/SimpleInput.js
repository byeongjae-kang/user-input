import { useState } from "react";

const SimpleInput = (props) => {
  const [username, setUsername] = useState("");
  const [usernameIsValid, setUsernameIsValid] = useState(true);

  const userInputHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (username.trim() === "") {
      setUsernameIsValid(false);
      return;
    }

    setUsernameIsValid(true);
    setUsername("");
  };

  const nameInputClasses = usernameIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={username}
          onChange={userInputHandler}
        />
        {!usernameIsValid && (
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
