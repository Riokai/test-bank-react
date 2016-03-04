require('normalize.css');
require('styles/App.css');

import React from 'react';

import Header from './HeaderComponent'

import Sidebar from './Sidebar'
// import MainContent from './MainContent'
import Breadcrumb from './Breadcrumb'
import PageContent from './PageContent'

class AppComponent extends React.Component {

  render() {
    return (
      <div className="navbar-fixed">
        <div className="">
          <Header />
        </div>
        <div className="main-container" id="main-container">
          <div className="main-container-inner">
            <Sidebar />
            <div className="main-content">
              <Breadcrumb data={this.props.routes} />
              <PageContent>
                { this.props.children }
              </PageContent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AppComponent.title = '首页'

AppComponent.defaultProps = {
};

export default AppComponent;
