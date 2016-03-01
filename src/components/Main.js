require('normalize.css');
require('styles/App.css');

import React from 'react';

// import { Link } from 'react-router'

import Header from './HeaderComponent'
import MainContainer from './MainContainer'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="navbar-fixed">
        <div className="">
          <Header />
        </div>
        <MainContainer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
