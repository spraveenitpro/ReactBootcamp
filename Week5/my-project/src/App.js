import React from "react";
import "./App.css";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Post from "./components/Post";
import NotFound from "./components/NotFound";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        slug: "hello-world",
        title: "Hello World",
        content: "Lorem Ipsum",
      },
      {
        id: 2,
        slug: "hello-react",
        title: "Hello REACT",
        content: "Lorem Pipsum",
      },
      { id: 3, slug: "hello-jsx", title: "Hello JSX", content: "Lorem Inpsum" },
    ],
  };
  render() {
    return (
      <>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Posts posts={this.state.posts} />}
              />

              <Route
                path="/post/:postSlug"
                render={(props) => {
                  const post = this.state.posts.find(
                    (post) => post.slug === props.match.params.postSlug
                  );
                  if (post) return <Post post={post} />;
                  else return <NotFound />;
                }}
              />

              <Route component={NotFound} />
            </Switch>
            App Here
          </div>
        </Router>
      </>
    );
  }
}

export default App;
