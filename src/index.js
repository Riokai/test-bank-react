import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import Test from './components/TestComponent'
import Main from './components/Main'

import { Router, Route, browserHistory } from 'react-router'

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="dashboard" component={Main} />
    </Route>
    <Route path="/test" component={Test}></Route>
  </Router>
), document.getElementById('app'))
