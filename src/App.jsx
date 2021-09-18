import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState("Off");

  const clickHandler = () => {
    setCount(count + 1);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert("check console");
    console.log("Successfully printing without refresh from form.");
  };

  const toggleHandler = () => {
    setToggle(toggle === "Off" ? "On" : "Off");
  };

  const arguementHandler = (msg) => {
    console.log(msg);
  };

  return (
    <div className="App">
      {/* A simple event handling example with onClick */}
      <h1>Event handling</h1>
      <p>Count is : {count}</p>
      <button onClick={clickHandler}>Click</button>

      <form onSubmit={submitHandler}>
        <button type="submit">Cick here to submit</button>
      </form>

      <button onClick={toggleHandler}>{toggle}</button>
      {/* Making the counter more simple */}
      <button onClick={() => setCount(count + 2)}>Click me</button>

      {/* Passing arguements to event handlers */}
      <button onClick={() => arguementHandler("Hello, I am a arguement")}>
        Click
      </button>
    </div>
  );
}

export default App;
