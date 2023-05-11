import React, { useState } from "react";

function App() {
  const [todoInput, setInput] = useState("");
  const [realInput, setRealInput] = useState([]);

  function updateInput(event) {
    setInput(event.target.value);
    // console.log(event.target);
  }

  function rowList() {
    setRealInput((prevValue) => {
      return [...prevValue, realInput];
    });
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={updateInput}
          type="text"
          name="input"
          value={todoInput}
        />
        <button onClick={rowList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {realInput.map((item) => (
            <li>item</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
