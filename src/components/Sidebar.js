import React from 'react'

class Sidebar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {isOpen: false}
  }

  toggleMenu(e) {
    let state = this.state.isOpen

    e.preventDefault()

    this.setState({isOpen: !state})
  }

  render() {
    return (
      <div className="sidebar sidebar-fixed" id="sidebar" style={{'zIndex': '999'}}>
        <div className="sidebar-shortcuts" id="sidebar-shortcuts">
          <div className="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
            <button className="btn btn-success">
              <i className="icon-signal">
              </i>
            </button>
            <button className="btn btn-info">
              <i className="icon-pencil">
              </i>
            </button>
            <button className="btn btn-warning">
              <i className="icon-group">
              </i>
            </button>
            <button className="btn btn-danger">
              <i className="icon-cogs">
              </i>
            </button>
          </div>
          <div className="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
            <span className="btn btn-success">
            </span>
            <span className="btn btn-info">
            </span>
            <span className="btn btn-warning">
            </span>
            <span className="btn btn-danger">
            </span>
          </div>
        </div>
        <ul className="nav nav-list">
          <li className="active">
            <a href="/etest/admin/admin_scheduleBuild" className="">
              <i className="icon-dashboard">
              </i>
              <span className="menu-text">
                课表建设
              </span>
            </a>
            <ul className="submenu">
            </ul>
          </li>
          <li
            onClick={this.toggleMenu.bind(this)}>
            <a href="#" className="dropdown-toggle">
              <i className="icon-dashboard">
              </i>
              <span className="menu-text">
                管理信息
              </span>
              <b className="arrow icon-angle-down">
              </b>
            </a>
            <ul
              className="submenu"
              style={ this.state.isOpen ? {display: 'block'} : {} }>
              <li className="">
                <a href="/etest/admin/admin_showAcaInform">
                  <i className="icon-dashboard">
                  </i>
                  学院信息
                </a>
              </li>
              <li className="">
                <a href="/etest/admin/selectAdm_AcaTMaj">
                  <i className="icon-dashboard">
                  </i>
                  专业信息
                </a>
              </li>
              <li className="">
                <a href="/etest/admin/selectAdm_AcaTTea">
                  <i className="icon-dashboard">
                  </i>
                  教师信息
                </a>
              </li>
              <li className="">
                <a href="/etest/admin/selectAdm_AcaTCla">
                  <i className="icon-dashboard">
                  </i>
                  班级信息
                </a>
              </li>
              <li className="">
                <a href="/etest/admin/selectAdm_AcaTStu">
                  <i className="icon-dashboard">
                  </i>
                  学生信息
                </a>
              </li>
              <li className="">
                <a href="/etest/admin/selectAdm_AcaTCur">
                  <i className="icon-dashboard">
                  </i>
                  课程信息
                </a>
              </li>
              <li className="">
                <a href="/etest/admin/selectAdm_AcaTSch">
                  <i className="icon-dashboard">
                  </i>
                  课程表信息
                </a>
              </li>
              <li className="">
                <a href="/etest/admin/selectAdm_AcaTBan">
                  <i className="icon-dashboard">
                  </i>
                  建设者信息
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="sidebar-collapse" id="sidebar-collapse">
          <i className="icon-double-angle-left" data-icon1="icon-double-angle-left"
          data-icon2="icon-double-angle-right">
          </i>
        </div>
      </div>
    )
  }
}

export default Sidebar
