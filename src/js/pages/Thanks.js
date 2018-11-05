import React from 'preact-compat';
import { Link } from 'preact-router';

const Thanks = () => (
	<section className="page-404">
		<h1>Thanks!</h1>
		<h3>You're email has been sent.</h3>
		<pre></pre>
    <Link href="/">Home</Link>
	</section>
);

export default Thanks;