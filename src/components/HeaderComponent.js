'use strict';

import React from 'react';

require('styles//Header.scss');

let HeaderComponent = () => (
  <div className="header-component">
    <div className="navbar navbar-default" id="navbar">
			<div className="navbar-container" id="navbar-container">
				<div className="navbar-header pull-left">
					<a href="#" className="navbar-brand">
						<small>
							<i className="icon-leaf"></i>
							<span>电子题库</span>
						</small>
					</a>
				</div>
				<div className="navbar-header pull-right" role="navigation">
					<ul className="nav ace-nav">
						<li className="grey">
							<a data-toggle="dropdown" className="dropdown-toggle" href="#">
								<i className="icon-tasks"></i>
								<span className="badge badge-grey">4</span>
							</a>
							<ul className="pull-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">
								<li className="dropdown-header">
									<i className="icon-ok"></i>
									4 Tasks to complete
								</li>

								<li>
									<a href="#">
										<div className="clearfix">
											<span className="pull-left">Software Update</span>
											<span className="pull-right">65%</span>
										</div>

										<div className="progress progress-mini ">
											<div style={{width: '65%'}} className="progress-bar "></div>
										</div>
									</a>
								</li>

								<li>
									<a href="#">
										<div className="clearfix">
											<span className="pull-left">Hardware Upgrade</span>
											<span className="pull-right">35%</span>
										</div>

										<div className="progress progress-mini ">
											<div style={{width: '35%'}} className="progress-bar progress-bar-danger"></div>
										</div>
									</a>
								</li>
								<li>
									<a href="#">
										<div className="clearfix">
											<span className="pull-left">Unit Testing</span>
											<span className="pull-right">15%</span>
										</div>

										<div className="progress progress-mini ">
											<div style={{width: '15%'}} className="progress-bar progress-bar-warning"></div>
										</div>
									</a>
								</li>

								<li>
									<a href="#">
										<div className="clearfix">
											<span className="pull-left">Bug Fixes</span>
											<span className="pull-right">90%</span>
										</div>

										<div className="progress progress-mini progress-striped active">
											<div style={{width: '90%'}} className="progress-bar progress-bar-success"></div>
										</div>
									</a>
								</li>
								<li>
									<a href="#">
										See tasks with details
										<i className="icon-arrow-right"></i>
									</a>
								</li>
							</ul>
						</li>
						<li className="purple">
							<a data-toggle="dropdown" className="dropdown-toggle" href="#">
								<i className="icon-bell-alt icon-animated-bell"></i>
								<span className="badge badge-important">8</span>
							</a>

							<ul className="pull-right dropdown-navbar navbar-pink dropdown-menu dropdown-caret dropdown-close">
								<li className="dropdown-header">
									<i className="icon-warning-sign"></i>
									8 Notifications
								</li>

								<li>
									<a href="#">
										<div className="clearfix">
											<span className="pull-left">
												<i className="btn btn-xs no-hover btn-pink icon-comment"></i>
												New Comments
											</span>
											<span className="pull-right badge badge-info">+12</span>
										</div>
									</a>
								</li>

								<li>
									<a href="#">
										<i className="btn btn-xs btn-primary icon-user"></i>
										Bob just signed up as an editor ...
									</a>
								</li>

								<li>
									<a href="#">
										<div className="clearfix">
											<span className="pull-left">
												<i className="btn btn-xs no-hover btn-success icon-shopping-cart"></i>
												New Orders
											</span>
											<span className="pull-right badge badge-success">+8</span>
										</div>
									</a>
								</li>

								<li>
									<a href="#">
										<div className="clearfix">
											<span className="pull-left">
												<i className="btn btn-xs no-hover btn-info icon-twitter"></i>
												Followers
											</span>
											<span className="pull-right badge badge-info">+11</span>
										</div>
									</a>
								</li>

								<li>
									<a href="#">
										See all notifications
										<i className="icon-arrow-right"></i>
									</a>
								</li>
							</ul>
						</li>

						<li className="green">
							<a data-toggle="dropdown" className="dropdown-toggle" href="#">
								<i className="icon-envelope icon-animated-vertical"></i>
								<span className="badge badge-success">5</span>
							</a>

							<ul className="pull-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">
								<li className="dropdown-header">
									<i className="icon-envelope-alt"></i>
									5 Messages
								</li>

								<li>
									<a href="#">
										<img src={require('../images/avatars/user.jpg')} className="msg-photo" alt="Alex's Avatar" />
										<span className="msg-body">
											<span className="msg-title">
												<span className="blue">Alex:</span>
												Ciao sociis natoque penatibus et auctor ...
											</span>

											<span className="msg-time">
												<i className="icon-time"></i>
												<span>a moment ago</span>
											</span>
										</span>
									</a>
								</li>

								<li>
									<a href="#">
										<img src={require('../images/avatars/user.jpg')} className="msg-photo" alt="Susan's Avatar" />
										<span className="msg-body">
											<span className="msg-title">
												<span className="blue">Susan:</span>
												Vestibulum id ligula porta felis euismod ...
											</span>

											<span className="msg-time">
												<i className="icon-time"></i>
												<span>20 minutes ago</span>
											</span>
										</span>
									</a>
								</li>

								<li>
									<a href="#">
										<img src={require('../images/avatars/user.jpg')} className="msg-photo" alt="Bob's Avatar" />
										<span className="msg-body">
											<span className="msg-title">
												<span className="blue">Bob:</span>
												Nullam quis risus eget urna mollis ornare ...
											</span>

											<span className="msg-time">
												<i className="icon-time"></i>
												<span>3:15 pm</span>
											</span>
										</span>
									</a>
								</li>
								<li>
									<a href="inbox.html">
										See all messages
										<i className="icon-arrow-right"></i>
									</a>
								</li>
							</ul>
						</li>

						<li className="light-blue">
							<a data-toggle="dropdown" href="#" className="dropdown-toggle">
								<img className="nav-user-photo" src={require('../images/avatars/user.jpg')} alt="Jason's Photo" />
							</a>
							<ul className="user-menu pull-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
								<li>
									<a href="#">
										<i className="icon-cog"></i>
										Settings
									</a>
								</li>

								<li>
									<a href="#">
										<i className="icon-user"></i>
										Profile
									</a>
								</li>

								<li className="divider"></li>

								<li>
									<a href="#">
										<i className="icon-off"></i>
										Logout
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
  </div>
);

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
