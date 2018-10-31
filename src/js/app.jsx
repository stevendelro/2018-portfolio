
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import PageNotFound from './pages/PageNotFound';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
