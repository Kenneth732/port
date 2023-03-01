import React, { useState } from "react";
import Header from "./Header";

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if username and password are valid
    if (username === 'user' && password === 'password') {
      setSuccessMessage('Login successful!');
      props.onLogin(); // Call the onLogin prop
    } else {
      setSuccessMessage('Invalid username or password');
    }
  };

  return (
    <div>
      <Header/>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <br />
      {successMessage && <div>{successMessage}</div>}
    </div>
  );
}
export default Login;