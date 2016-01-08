'use strict'

import React from 'react'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'

require('normalize.css')
require('bootstrap/dist/css/bootstrap.css')
require('styles/App.scss')
require('styles/ace.min.css')
require('font-awesome/css/font-awesome.css')

class AppComponent extends React.Component {

  render() {

    return (
      <div className="app">
        <Link to="/dashboard">
          <Button bsStyle="default">dashboard</Button>
        </Link>
        <Link to="/login">
          <Button bsStyle="primary">Login</Button>
        </Link>

        {this.props.children}
      </div>
    )
  }
}

AppComponent.displayName = 'AppComponent'

// Uncomment properties you need
// AppComponent.propTypes = {}
// AppComponent.defaultProps = {}

export default AppComponent
