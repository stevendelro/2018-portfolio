import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './components/Main';
import About from './components/About';
import PageNotFound from './components/PageNotFound';

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
