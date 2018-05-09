import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Hero from './components/Hero';
import PageNotFound from './components/PageNotFound';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Hero} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
