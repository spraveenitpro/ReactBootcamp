import React from "react";
import "./App.css";

const Header = (props) => {
  return <h1>{props.text}</h1>;
};

const CounterButton = (props) => {
  return <input type="button" value={props.text} onClick={props.onClick} />;
};

class App extends React.Component {
  // Setup State parameters

  state = {
    counter: 0,
  };
  // Create functions for increment, decrement and reset

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  reset = () => {
    this.setState({ counter: 0 });
  };

  // Create components to display counter and buttons
  // Wire them up

  render() {
    return (
      <>
        <Header text={this.state.counter} />
        <CounterButton text="+" onClick={this.increment} />
        <CounterButton text="-" onClick={this.decrement} />
        <CounterButton text="reset" onClick={this.reset} />
      </>
    );
  }
}

export default App;
