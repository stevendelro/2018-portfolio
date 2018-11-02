import React from 'preact-compat';
import { Link } from 'preact-router';

const PageNotFound = () => (
  <div className="container">
    <h2>404</h2>
    <h1>Page not found</h1>
    <br />
    <Link href="/">
      <div>
        <span>Go Home</span>
      </div>
    </Link>
  </div>
);

export default PageNotFound;
