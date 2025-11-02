// File: App.js
import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Conditional Rendering Example</h2>

      {isLoggedIn ? (
        <p>Welcome back, User! 🎉</p>
      ) : (
        <p>Please log in to continue.</p>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default App;
