import React, { Component } from 'preact-compat';
import { Router } from 'preact-router';

import Main from './pages/Main';
import PageNotFound from './pages/PageNotFound';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Main path="/" />
        <PageNotFound type="404" default />
      </Router>
    );
  }
}
