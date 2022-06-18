import React from "react";
import "./style.css";

export default function App() {
  const [state, setState] = React.useState(0)
  function incre(){
    setState(state + 1)
  }
  function decre(){
    setState(state - 1)
  }
  return (
    <div>
     <>
      
      <button onClick={incre}>+</button>
      {state}
      <button onClick={decre}>-</button>

     </>
    </div>
  );
}
