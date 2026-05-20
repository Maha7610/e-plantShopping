import React from "react";
import "./App.css";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Paradise Nursery</h1>
      <p>Welcome to our plant shopping store</p>

      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </div>
  );
}

export default App;