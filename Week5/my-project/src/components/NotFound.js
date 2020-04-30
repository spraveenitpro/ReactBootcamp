import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <article className="not-found container">
    <h1>404!</h1>
    <p>
      Content Not found!!
      <Link to="/">Return to Posts</Link>
    </p>
  </article>
);

export default NotFound;
