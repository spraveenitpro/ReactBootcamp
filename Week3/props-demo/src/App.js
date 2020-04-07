import React from "react";
import './App.css';

function App() {

  const number = 1981;
  const quote = "Consistency beats Procrastination"

  return (

    <Child number={number} quote={quote} />
  );
}

const Child = props => {
  return(
    <header>
    <h1>{props.quote}</h1>
    <h3>{props.number}</h3>
    </header>
  );
}





export default App;