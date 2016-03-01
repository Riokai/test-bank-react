require('normalize.css')
require('styles/App.css')

import React from 'react'

class Breadcrumb extends React.Component {
  render() {
    return (
      <div className="breadcrumbs" id="breadcrumbs">
        <ul className="breadcrumb">
          <li>
            <i className="icon-home home-icon">
            </i>
            <a href="#">
              首页
            </a>
          </li>
          <li className="active">
            课程表建设
          </li>
        </ul>
      </div>
    )
  }
}

export default Breadcrumb
