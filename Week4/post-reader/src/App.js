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

const PostList = (props) => {
  const { quote } = props;
  const { posts } = props;

  return (
    <main>
      <h2>{quote}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} data-id={post.id}>
            <a href={post.guid.rendered} onClick={props.handleClick}>
              {post.title.rendered}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
};

const ActualPost = (props) => {
  for (const item of props.posts) {
    if (props.postId == item.id) {
      var content = item.content.rendered;
    }
  }
  return (
    <>
      <h2> Article:</h2>
      <p>{content}</p>
    </>
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

class App extends React.Component {
  state = {
    posts: [],
    isClicked: false,
    selectedPostID: 0,
  };

  handleClick = (e) => {
    e.preventDefault();
    const selectedPostID = e.target.parentNode.dataset.id;
    this.setState({ isClicked: true, selectedPostID });
    console.log(e.target);
  };

  componentDidMount() {
    let url = "https://ma.tt/wp-json/wp/v2/posts";
    fetch(url)
      .then((response) => response.json())
      .then((posts) => {
        this.setState({ posts });
      });
  }
  render() {
    return (
      <>
        <Header quote=" Knowledge is of no value unless you put it into practice!" />
        <PostList
          quote="Remember the end in the beginning"
          posts={this.state.posts}
          handleClick={this.handleClick}
        />
        {this.state.isClicked ? (
          <ActualPost
            postId={this.state.selectedPostID}
            posts={this.state.posts}
          />
        ) : (
          ""
        )}
        <Footer
          quote="You may say I'm a dreamer, but I'm not the only one. I hope someday
        you'll join us. And the world will live as one.” ― John Lennon"
        />
      </>
    );
  }
}

export default App;
