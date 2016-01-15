require('normalize.css');
require('styles/App.css');

import React from 'react';

// import { Link } from 'react-router'

import Header from './HeaderComponent'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <Header />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
