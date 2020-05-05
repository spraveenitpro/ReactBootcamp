import React from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Post from "./components/Post";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

class App extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        slug: "hello-react",
        title: "Hello React",
        content: "Lorem.",
      },
      {
        id: 2,
        slug: "hello-project",
        title: "Hello Project",
        content: "Tothe.",
      },
      {
        id: 3,
        slug: "hello-blog",
        title: "Hello Blog",
        content: "Ipsum.",
      },
    ],
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Posts posts={this.state.posts} />}
            ></Route>
            <Route
              exact
              path="/hello"
              render={() => <h1>Hello World</h1>}
            ></Route>
            <Route
              path="/post/:postSlug"
              render={(props) => {
                const post = this.state.posts.find(
                  (post) => post.slug === props.match.params.postSlug
                );
                if (post) return <Post post={post} />;
                else return <NotFound />;
              }}
            ></Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
