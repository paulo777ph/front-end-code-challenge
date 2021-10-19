import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");

  const handleInputChange = (value) => {
    if (value) {
      if (value.includes(",")) {
        const output = [];
        let values = value.split(",").filter((e) => e);

        values.forEach((value) => {
          output.push(parseInt(value) * 2);
        });
        setOutput(output.toString());
      } else {
        setOutput(value * 2);
      }
    } else {
      setOutput("");
    }
  };

  return (
    <div className="App">
      <h1>Medirecords Front end Code Challenge</h1>
      <h2>Please try to implement following within one hour</h2>

      <div className="Container">
        <div className="Box">
          <div className="Content">
            <strong>Input</strong>

            <p>Array</p>
            <input
              type="text"
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </div>
        </div>
        <div className="Box">
          <div className="Content">
            <strong>Output</strong>

            <p>Double</p>
            <input type="text" value={output} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
