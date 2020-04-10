import React from "react";

import "./App.css";

const Header = (props) => {
  console.log(props);
  return <header>Header {props.children}</header>;
};

const Branding = (props) => <p>Branding {props.children}</p>;
const SiteName = () => <p>SiteName</p>;

function App() {
  return (
    <>
      <Header>
        <Branding>
          <SiteName />
        </Branding>
      </Header>
    </>
  );
}

export default App;
