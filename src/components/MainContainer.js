import React from 'react'


import Sidebar from './Sidebar'
import MainContent from './MainContent'

class MainContainer extends React.Component {
  render() {
    return (
      <div className="main-container" id="main-container">
        <div className="main-container-inner">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    )
  }
}

export default MainContainer
