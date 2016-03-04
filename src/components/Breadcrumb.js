require('normalize.css')
require('styles/App.css')

import React from 'react'
import { Link } from 'react-router'

class Breadcrumb extends React.Component {
  render() {
    let len_routes = this.props.data.length

    return (
      <div className="breadcrumbs" id="breadcrumbs">
        <ul className="breadcrumb">
          { this.props.data.map((item, index) => {
              if (index > 0 && ( (len_routes === 2 && index === 1 ) || (len_routes > 2 && index < len_routes - 1) )) {
                return (
                  <li key={index}>
                    <Link
                      to={item.path || ''}
                      onlyActiveOnIndex={true}>
                      {index === 1 ? (<i className="icon-home home-icon"></i>) : ''}
                      {item.component.title}
                    </Link>
                  </li>
                )
              } else if (index === len_routes - 1) {
                return (
                  <li className="active" key={index}>{item.component.title}</li>
                )
              }
          }) }
        </ul>
      </div>
    )
  }
}

export default Breadcrumb
