import React from 'preact-compat';
import { Link } from 'preact-router';

const PageNotFound = ({ type, url }) => (
	<section className="page-404">
		<h1>Error {type}</h1>
		<h3 sty>Page not found!</h3>
		<pre>Route {url} doesn't exist.</pre>
    <Link href="/">Go back</Link>
	</section>
);

export default PageNotFound;
