'use strict'

import React from 'react'
import Auth from '../services/auth'
// import { Link } from 'react-router'
// import { Button } from 'react-bootstrap'
// import router from '../services/router'

require('normalize.css')
require('styles/bootstrap.min.css')
require('styles/App.scss')
require('styles/font-awesome.min.css')
require('styles/ace.min.css')
require('styles/custom.css')

require('styles/Header.scss')


class AppComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  // 判断是否已经登录
  // 是：跳转到控制台
  // 否：跳转到登录页面
  componentDidMount() {
    if (Auth.isLogin()) {
      this.context.router.replace('/dashboard')
    } else {
      this.context.router.replace('/login')
    }

  }

  render() {

    return (
      <div className="app">
        {this.props.children}
      </div>
    )
  }
}

AppComponent.displayName = 'AppComponent'
AppComponent.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default AppComponent
