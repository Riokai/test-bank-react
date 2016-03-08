require('normalize.css')

import React, { Component } from 'react'
// import auth from '../services/auth'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UserAction from '../actions/user'

require('styles/Login.scss')
// import { Router } from 'react-router'

class LoginComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: 'Jedeft',
      password: 'admin'
    }
  }

  login(e) {
    e.preventDefault()
    // console.log(1);
    this.props.actions.login(this.state.username, this.state.password)
    // auth.login(this.state.username, this.state.password)
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value})
  }

  handlePwdChange(e) {
    this.setState({password: e.target.value})
  }

  render() {
    return (
      <div className="login login-layout">
        <div className="main-container">
      			<div className="main-content">
      				<div className="row">
      					<div className="col-sm-10" style={{width: '100%'}}>
      						<div className="login-container">
      							<div className="center">
      								<h1>
      									<i className="icon-leaf green"></i>
      									<span className="red"></span>
      									<span className="white">电子题库系统</span>
      								</h1>
      								<h4 className="blue">&copy; 南昌大学-软件学院</h4>
      							</div>
      							<div className="space-6"></div>
      							<div className="position-relative">
      								<div id="login-box" style={{top: '70px'}} className="login-box visible widget-box no-border">
      									<div className="widget-body">
      										<div className="widget-main">
      											<h4 className="header blue lighter bigger">
      												<i className="icon-coffee green"></i>
      												请输入您的信息：
      											</h4>
      											<div className="space-6"></div>

      											<form onSubmit={this.login.bind(this)}>
      												<fieldset>
      													<label className="block clearfix">
      														<span className="block input-icon input-icon-right">
      															<input type="text"
                                      className="form-control"
                                      placeholder="用户名"
                                      value={this.state.username}
                                      onChange={this.handleUsernameChange.bind(this)} />
      															<i className="icon-user"></i>
      														</span>
      													</label>

      													<label className="block clearfix">
      														<span className="block input-icon input-icon-right">
      															<input
                                      type="password"
                                      className="form-control"
                                      placeholder="密码"
                                      value={this.state.password}
                                      onChange={this.handlePwdChange.bind(this)} />
      															<i className="icon-lock"></i>
      														</span>
      													</label>
      													<div className="space"></div>
      													<div className="clearfix">
      														<label className="inline">
      															<input type="checkbox" className="ace" />
      															<span className="lbl"> 记住我</span>
      														</label>
      														<button type="submit" className="width-35 pull-right btn btn-sm btn-primary">
      															<i className="icon-key"></i>
      															登录
      														</button>
      													</div>
      													<div className="space-4"></div>
      												</fieldset>
      											</form>
      										</div>
                          <div className="toolbar clearfix">
      											<div>
      												<a href="#" className="forgot-password-link">
      													<i className="icon-arrow-left"></i>
      													忘记密码
      												</a>
      											</div>
      											<div>
      												<a href="#" className="user-signup-link">
      													注册
      													<i className="icon-arrow-right"></i>
      												</a>
      											</div>
      										</div>
      									</div>
      								</div>
      							</div>
      						</div>
      					</div>
      				</div>
      			</div>
      		</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserAction, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent)

// export default LoginComponent;
