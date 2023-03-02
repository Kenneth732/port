import React, { useState } from "react";

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignUp = () => {
    setIsSignedUp(true);
  }

  return (
    <div>
      {!isSignedUp && (
        <button onClick={handleSignUp}>Sign Up</button>
      )}
      {isSignedUp && (
        <div style={{ width: '30%', height: '40vh', border: '1px solid black' }}>Congratulations, you're signed up!</div>
      )}
    </div>
  );
}

export default App;
