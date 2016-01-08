'use strict'

import React from 'react'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'

require('normalize.css')
require('bootstrap/dist/css/bootstrap.css')
require('styles//App.scss')

class AppComponent extends React.Component {
  componentDidMount() {
    document.title = '电子题库'
  }

  render() {
    return (
      <div className="app">
        <Button bsStyle="danger">Primary</Button>
        <Link to="/dashboard">Dashboard</Link>
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
