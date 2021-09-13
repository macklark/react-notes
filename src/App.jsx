import React, { useState } from "react";
import "./App.css";

function App() {
  const title = "Hello, world!!";

  const user = { firstName: "John", lastName: "Doe" };
  const [counter, setCounter] = useState(0);

  // This is a valid javascript expression
  const formatName = (user) => {
    return user.firstName + " " + user.lastName;
  };
  // JSX example
  // It is a syntax extension to JavaScript.
  // It comes with full power of JavaScript.
  setInterval(() => {
    setCounter(counter + 1);
  }, 2000);
  return (
    // The JSX syntax gets compiled into react.createElement() calls by babel.
    <div className="App">
      {/* Text interpolation */}
      {/* We can put any valid javascript expression inside the curly braces. */}
      {/* After compilation JSX expression becomes regular javascript objects, so we can return them, use inside conditional loops and etc.. */}
      <h1>{title}</h1>
      <h3 className="text-colour">{formatName(user)}</h3>
      <h4>{counter}</h4>
    </div>
  );
}

export default App;
