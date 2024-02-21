import image from "./assets/pic.jpg";
import Greetings from "./components/Greetings";
import NavBar from "./components/NavBar";
import States from "./components/States";

function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const click = () => {
    document.write("Hey");
  };
  const firstName = "Ojay";
  const lastName = "Sylvester";

  const popUp = (name) => {
    alert(`my name is ${name}`);
  };

  return (
    <div>
      <NavBar />
      <Greetings age={20} name="Ojay" alert={popUp} occupation={"Coder"} />
      <States/>
      
      {arr.map((items, i) => (
        <p key={i}>{items}</p>
      ))}
      <img src="/pic.jpg" alt="" />
      <img style={{ width: "50px", height: "50px" }} src={image} alt="" />
      <h1
        style={{
          fontSize: "90px",
          textTransform: "uppercase",
          color: "darkkhaki",
          border: "solid 2px",
        }}
      >
        {firstName + " " + lastName}
      </h1>
      <button onClick={click} className="">
        click me
      </button>
      <button onClick={() => document.write("first")}>click</button>
    </div>
  );
}

export default App;
