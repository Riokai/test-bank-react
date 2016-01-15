'use strict'

import React from 'react'
// import { Link } from 'react-router'
// import { Button } from 'react-bootstrap'
import router from '../services/router'

require('normalize.css')
require('styles/bootstrap.min.css')
require('styles/App.scss')
require('styles/font-awesome.min.css')
require('styles/ace.min.css')

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    router.set(this.context.router)
    router.get().pushState(null, '/dashboard')
  }

  render() {

    return (
      <div className="app">
        {
          /*
          <Link to="/dashboard">
            <Button bsStyle="default">dashboard</Button>
          </Link>
          <Link to="/login">
            <Button bsStyle="primary">Login</Button>
          </Link>
          */
        }

        {this.props.children}
      </div>
    )
  }
}

AppComponent.displayName = 'AppComponent'
AppComponent.contextTypes = {
  router: React.PropTypes.object.isRequired
};
// Uncomment properties you need
// AppComponent.propTypes = {}
// AppComponent.defaultProps = {}

export default AppComponent
