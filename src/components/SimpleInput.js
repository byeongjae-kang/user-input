import { useState } from "react";

const SimpleInput = (props) => {
  const [username, setUsername] = useState("");

  const userInputHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setUsername('')
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={username}
          onChange={userInputHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
