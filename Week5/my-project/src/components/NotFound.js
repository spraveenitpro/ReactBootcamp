import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <article className="not-found container">
    <h1>404!</h1>
    <p>
      Content Not Found!
      <Link to="/">Return To Posts</Link>
    </p>
  </article>
);

export default NotFound;
