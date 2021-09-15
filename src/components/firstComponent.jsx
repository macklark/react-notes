// Generally react components are javascript functions which return's JSX.

function Firstcomponent(props) {
  const { name, cars } = props;
  return (
    <div>
      <h2>Component from another file</h2>
      <p>Hello, {name}</p>
      <ul>
        {cars.map((car, index) => {
          return <li key={index}>{car}</li>;
        })}
      </ul>
    </div>
  );
}

export default Firstcomponent;
