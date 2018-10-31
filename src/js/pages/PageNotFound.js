import React from 'react';
import { Link } from 'react-router-dom';


const PageNotFound = () => (
  <div className="container">
    <h2>404</h2>
    <h1>Page not found</h1>
    <br />
    <Link to="/">
      <div>
        <span>Go Home</span>
      </div>
    </Link>
  </div>
);

export default PageNotFound;
