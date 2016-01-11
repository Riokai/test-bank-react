require('normalize.css')

import React from 'react'
import { Router } from 'react-router'

console.log('router', Router.transitionTo);

class LoginComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: 'Kai',
      password: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('state', this.state)
    fetch('http://121.42.216.103/testbank/permission/json_web_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then((res) => {
      console.log(res);
    }).catch((e) => {
      console.log('error', e);
    })
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value})
  }

  handlePwdChange(e) {
    this.setState({password: e.target.value})
  }

  render() {
    return (
      <div className="login">
        <div className="main-container">
      			<div className="main-content">
      				<div className="row">
      					<div className="col-sm-10 col-sm-offset-1">
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
      								<div id="login-box" className="login-box visible widget-box no-border">
      									<div className="widget-body">
      										<div className="widget-main">
      											<h4 className="header blue lighter bigger">
      												<i className="icon-coffee green"></i>
      												请输入您的信息：
      											</h4>
      											<div className="space-6"></div>

      											<form onSubmit={this.handleSubmit.bind(this)}>
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

LoginComponent.defaultProps = {
};

export default LoginComponent;
