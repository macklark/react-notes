import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // Generally functional components are stateless.
  // However from react v.16 we can use stateful functional components using react hooks.

  // useState() retuns a value and a method to update the value.
  const [counter, setCounter] = useState(0);

  const clickHnadler = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  // useEffect() is a hook that is called once when the component is mounted.
  // It is useful for setting up stateful functional components.
  // It takes a callback function by the developer to run once the component is mounted.
  // And also a array of dependencies that are needed to run the callback.
  useEffect(() => {
    alert(`Hello ${counter}`);

    return () => alert(`good bye ! ${counter}`);
  }, [counter]);

  // There are 7 stages for a component from mounting to unmounting.
  // 1. componentWillMount - runs before initial rendering
  // 2. componentDidMount - runs after initial rendering
  // 3. componentWillReceiveProps - runs when component recieves new props
  // 4. shouldComponentUpdate - runs before rendering when new props or state.
  // 5. componentWillUpdate - runs before rendering when new props or state.
  // 6. componentDidUpdate - runs after rendering when new props or state.
  // 7. componentWillUnmount - runs before unmounting.

  // Lifecycle methods like this need a constructor.
  // So functional components can use this lifecycle methods using useEffect() hook.

  return (
    <div className="App">
      <h1>State and Lifecycle</h1>
      <p>{counter}</p>
      <button onClick={clickHnadler}>Count</button>
    </div>
  );
}

export default App;
