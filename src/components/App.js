import React, { useState } from "react";
import Login from "./login";
import Header from './Header'

function SignUpForm() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUp = () => {
    if (firstName.trim() !== "" && email.trim() !== "" && password.trim() !== "") {
      setIsSignedUp(true);
    } else {
      alert("Please fill out all fields to sign up.");
    }
  };

  return (
    <>
    <Header />
    <div className="form-container">
      {!isSignedUp ? (
        <div>
          <h2>Sign In</h2>
          <div>
            <label htmlFor="first-name-input">First Name:</label>
            <input
              type="text"
              id="first-name-input"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div>
            <label htmlFor="email-input">Email:</label>
            <input
              type="email"
              id="email-input"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="password-input">Password:</label>
            <input
              type="password"
              id="password-input"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      ) : (
        <div>
          <h2>{firstName}!</h2>
          <Login />
        </div>
      )}
    </div>
    </>
  );
}

function HelpQueue() {
  // HelpQueue component code from previous example
}

export default SignUpForm;
