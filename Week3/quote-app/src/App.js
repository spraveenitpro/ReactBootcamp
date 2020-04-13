import React from "react";
import "./App.css";

const Header = (props) => {
  const { quote } = props;
  return (
    <header id="myHeader">
      <h2>{quote}</h2>
    </header>
  );
};

const Footer = (props) => {
  const { quote } = props;
  return (
    <footer id="myFooter">
      <h3> {quote}</h3>
    </footer>
  );
};

const Content = (props) => {
  const { quote } = props;
  return (
    <main>
      <h2>{quote}</h2>
    </main>
  );
};

const Login = (props) => (
  <form>
    <label>Name:</label>
    <input type="text" name="name" onChange={props.updateUserName} />
    <input type="button" value="Login" onClick={props.handleLoginclick} />
  </form>
);

class App extends React.Component {
  state = {
    isLoggedIn: false,
    userName: "Name",
  };

  handleLoginclick = (e) => {
    this.setState({ isLoggedIn: true });
  };

  updateUserName = (e) => {
    this.setState({ userName: e.target.value });
  };

  render() {
    if (this.state.isLoggedIn) {
      return (
        <>
          <Header quote=" Knowledge is of no value unless you put it into practice!" />
          <Content quote="Remember the end in the beginning" />
          <Footer
            quote="You may say I'm a dreamer, but I'm not the only one. I hope someday
        you'll join us. And the world will live as one.” ― John Lennon"
          />
        </>
      );
    } else {
      return (
        <>
          <Login
            handleLoginclick={this.handleLoginclick}
            updateUserName={this.updateUserName}
          />
        </>
      );
    }
  }
}

export default App;
