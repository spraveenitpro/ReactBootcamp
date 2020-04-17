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

class App extends React.Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    fetch("https://woocommerce.mystagingwebsite.com/wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then((posts) => {
        this.setState({ posts });
      });
  }
  render() {
    const handleLinkClick = () => {
      console.log("I clicked!!");
    };
    return (
      <>
        <Header quote=" Knowledge is of no value unless you put it into practice!" />
        <Content quote="Remember the end in the beginning" />
        <main>
          <ul>
            {this.state.posts.map((post) => (
              <li key={post.id}>
                <a href={post.guid.rendered}>{post.title.rendered}</a>
              </li>
            ))}
          </ul>
        </main>
        <Footer
          quote="You may say I'm a dreamer, but I'm not the only one. I hope someday
        you'll join us. And the world will live as one.” ― John Lennon"
        />
      </>
    );
  }
}

export default App;
