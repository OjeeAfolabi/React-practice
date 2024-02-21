import { useState } from "react";

const States = () => {
 
 const [state, setState] = useState("Sara")
  
 const handleclick =()=> {
    setState("Ojay")
 }
 
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={handleclick} className="bg-blue-600 text-white px-2 py-1 rounded-md"> Click to change name</button>
        </div>
    )
};
export default States;