import React from 'react'

import Breadcrumb from './Breadcrumb'
import PageContent from './PageContent'
import { NavTab, NavTabItem } from './NavTab'
import Selector from './Selector'
import MultipAdd from './MultipAdd'

class MainContent extends React.Component {

  render() {
    const data = [
      {title: '单个添加'},
      {title: '批量添加'}
    ]

    return (
      <div className="main-content">
        <Breadcrumb />
        <PageContent>
          <NavTab items={data}>
            <NavTabItem>
              <Selector title="选择教师" />
              <Selector title="选择课程" />
              <Selector title="选择时间" />
            </NavTabItem>
            <NavTabItem>
              <MultipAdd />
            </NavTabItem>
          </NavTab>
        </PageContent>
      </div>
    )
  }
}

export default MainContent
