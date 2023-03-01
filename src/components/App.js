import React, { useState } from "react";
import Header from "./Header";
import "./App.css";
import ImageUploader from "./ImageUploader";
import TicketControl from "./TicketControl";
import Login from "./Login";

function ComponentOne({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Check if username and password are valid
      if (username === "user" && password === "password") {
        setSuccessMessage("Login successful!");
        onLogin();
      } else {
        setSuccessMessage("Invalid username or password");
      }
    } else {
      // Register new user
      setSuccessMessage("Signup successful!");
      onLogin();
    }
  };

  return (
    <div>
          <div className="banner">
         <header class="header">
  
        <a href="#" class="logo">Blog-Port</a>
        
        <input class="side-menu" type="checkbox" id="side-menu"/>
        <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
        
        <nav class="nav">
            <ul class="menu">
                <li><a href="<Login/>">Sign Up</a></li>
                <li><a href="#">Login</a> </li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <article>
            <h1>
                Upload Your Work
            </h1>
        </article>
    </main>
    </div>
      <h1>{isLogin ? "Login" : "Signup"}</h1>
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
        <button type="submit">{isLogin ? "Login" : "Signup"}</button>
      </form>
      <br />
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Switch to Signup" : "Switch to Login"}
      </button>
      <br />
      {successMessage && <div>{successMessage}</div>}
    </div>
  );
}

function ComponentTwo() {
  return (
    <div>
      <TicketControl />
    </div>
  );
}

function App() {
  const [showComponentOne, setShowComponentOne] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleComponent = () => {
    setShowComponentOne(!showComponentOne);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="main">
      {isLoggedIn ? (
        <div>
          <Header />
          <ImageUploader />
          <TicketControl />
        </div>
      ) : (
        <div>
          {/* <button className="btn" onClick={toggleComponent}>
            {showComponentOne ? "Show Component Two" : "Show Component One"}
          </button> */}
          {showComponentOne ? <ComponentOne onLogin={handleLogin} /> : null}
          {!showComponentOne ? (
            <div>
              <p>Please sign up or log in to access the TicketControl component.</p>
              <button onClick={toggleComponent}>Show Component One</button>
            </div>
          ) : null}
        </div>
      )}
      <div className="footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default App;
