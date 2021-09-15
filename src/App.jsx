import "./App.css";

// Importing the component from the mentioned path.
import Firstcomponent from "./components/firstComponent";

// We can define a component in 2 ways
// 1. Functional Component - Functional components are generally stateless
// 2. Class Component - This are stateful components.

// This is a example of functional component
function App() {
  return (
    <div className="App">
      <h1>Components and Props</h1>
      {/* Passing data as props to the component */}
      {/* Like passing name prop with value as 'ralph' */}
      {/* We can pass strings, numbers, booleans, arrays, objects, functions, and components as props to a component. */}
      <Firstcomponent
        name="ralph"
        cars={["hurracan", "aventador", "gallardo"]}
      />
    </div>
  );
}

export default App;
