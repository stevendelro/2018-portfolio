import React, { Component } from 'preact-compat';
import { BrowserRouter as Router, Route, Switch } from 'preact-router';

import Main from './pages/Main';
import PageNotFound from './pages/PageNotFound';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Main} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}
