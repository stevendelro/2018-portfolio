import 'babel-polyfill';
import '../css/main.scss';
import React from 'preact-compat';
import { render } from 'preact-compat';
import App from './app';

render(<App />, document.getElementById('root'));
