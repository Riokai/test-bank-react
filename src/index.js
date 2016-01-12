import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import Test from './components/TestComponent'
import Main from './components/Main'
import Login from './components/Login'

import { Router, Route, browserHistory } from 'react-router'

let requireAuth = (nextState, replaceState) => {
  if (1) {
    replaceState({
      nextPathname: nextState.location.pathname
    }, '/login')
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route
        path="dashboard"
        component={Main} />
      <Route path="login" component={Login} />
    </Route>
    <Route path="/test" component={Test}></Route>
  </Router>
), document.getElementById('app'))
