import useInput2 from "../hooks/use-input2";

const BasicForm = (props) => {
  const {
    value: firstName,
    IsValid: firstNameIsValid,
    hasError: firstNameHasError,
    reset: resetFirstName,
    changeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler
  } = useInput2((value) => value.trim() !== "");

  const {
    value: lastName,
    IsValid: lastNameIsValid,
    hasError: lastNameHasError,
    reset: resetLastName,
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler
  } = useInput2((value) => value.trim() !== "");

  const {
    value: email,
    IsValid: emailIsValid,
    hasError: emailHasError,
    reset: resetEmail,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler
  } = useInput2((value) => value.includes("@"));

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (firstNameHasError || lastNameHasError) {
      return;
    }

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameInputClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">First name must not be empty!!</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Last name must not be empty!!</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid E-mail!!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
