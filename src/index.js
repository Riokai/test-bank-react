import 'core-js/fn/object/assign';
import React from 'react';
import {render} from 'react-dom';
import App from './components/App';

import Main from './components/Main'
import Login from './components/Login'
import {ScheduleBuild} from './components/Admin'

import { Router, Route, browserHistory } from 'react-router'

// let requireAuth = (nextState, replaceState) => {
//   if (1) {
//     replaceState({
//       nextPathname: nextState.location.pathname
//     }, '/login')
//   }
// }

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="admin" component={Main}>
        <Route path="admin_scheduleBuild" component={ScheduleBuild}></Route>
      </Route>
      <Route path="login" component={Login} />
    </Route>
    {/*<Route path="/test" component={Test}></Route>*/}
  </Router>
), document.getElementById('app'))
