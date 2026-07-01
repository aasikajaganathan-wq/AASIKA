import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, useMemo, useCallback } from "react";

function App() {
  const [name, setName] = useState("");

  // useEffect
  useEffect(() => {
    alert("Welcome to React Hooks!");
  }, []);

  // useMemo
  const [number, setNumber] = useState(1);

  const multiplyByTwo = useMemo(() => {
    console.log("Calculating...");
    return number * 2;
  }, [number]);

  // useCallback
  const showWelcome = useCallback(() => {
    alert("Welcome!");
  }, []);

  const showHello = useCallback(() => {
    alert("Hello Student!");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            background: "lightblue",
            minHeight: "100vh",
            width: "100%",
          }}
        >
          <h1>React Hooks Tasks</h1>

          {/* useState Task */}
          <h2>useState - Student Name Display</h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h3>Welcome {name}</h3>

          <hr />

          {/* useEffect Task */}
          <h2>useEffect - Welcome Alert</h2>
          <p>Alert is shown when the page loads.</p>

          <hr />

          {/* useMemo Task */}
          <h2>useMemo - Multiply Number by 2</h2>
          <p>Number: {number}</p>
          <button onClick={() => setNumber(number + 1)}>Increase Number</button>
          <h3>Result: {multiplyByTwo}</h3>

          <hr />

          {/* useCallback Task */}
          <h2>useCallback - Show Welcome Message</h2>
          <button onClick={showWelcome}>Welcome</button>
          <button onClick={showHello} style={{ marginLeft: "10px" }}>
            Hello
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
