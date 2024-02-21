import PropTypes from "prop-types";

function Greetings({ name, age, alert, occupation }) {
  console.log(name, age, occupation);
  return (
    <div>
      Hey I am {name} I am {age} years old
      <button className="bg-blue-500 text-white" onClick={() => alert(name)}>
        Click Me
      </button>
    </div>
  );
  Greetings.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    alert: PropTypes.func,
    occupation: Proptypes.string,
  };
}

export default Greetings;
