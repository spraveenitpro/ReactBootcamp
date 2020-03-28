import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <header id="myHeader">
      <h2> Knowledge is of no value unless you put it into practice!</h2>
    </header>
  );
};

const Footer = () => {
  return (
    <footer id="myFooter">
      <h3> Remember the end in the beginning</h3>
    </footer>
  );
};

const Content = () => {
  return (
    <main>
      <h2>
        {" "}
        “You may say I'm a dreamer, but I'm not the only one. I hope someday
        you'll join us. And the world will live as one.” ― John Lennon
      </h2>
    </main>
  );
};

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  );
}
