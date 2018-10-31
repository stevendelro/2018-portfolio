import 'babel-polyfill';
import '../css/main.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './app';

render(<App />, document.getElementById('root'));
