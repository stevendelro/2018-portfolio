import React from 'preact-compat';
import { Link } from 'preact-router';

const PageNotFound = ({ type, url }) => (
	<section className="page-404">
		<h1>Error {type}</h1>
		<h3>Page not found!</h3>
		<pre className="u-margin-top-small u-margin-bottom-small-1">Route {url} doesn't exist.</pre>
    <Link className="btn btn--primary" href="/">Home</Link>
	</section>
);

export default PageNotFound;
