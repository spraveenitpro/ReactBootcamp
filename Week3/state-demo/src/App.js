import React from "react";

import "./App.css";

class App extends React.Component {
  state = {
    username: "spraveenitpro",
  };

  handleChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handleButton = (e) => {
    window.alert(this.state.username);
  };

  render() {
    return (
      <>
        <p>UserName: {this.state.username}</p>
        <p>
          <input type="text" onChange={this.handleChange} placeholder="" />
          <input type="button" onClick={this.handleButton} value="Click Me!!" />
        </p>
      </>
    );
  }
}

export default App;
