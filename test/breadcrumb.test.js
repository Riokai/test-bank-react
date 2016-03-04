import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { expect } from 'chai'
import Breadcrumb from '../src/components/Breadcrumb'

describe('Breadcrumb Component', () => {
  it('it should generate breadcrumb length equal 2', () => {
    let data = [
      {path: '/'},
      {path: '/admin', component: {title: 'Admin'}},
      {path: '/admin/build', component: {title: 'Build'}}
    ]

    let app = shallow(<Breadcrumb data={data} />)

    expect(app.find('li').length).to.equal(2)
  })
})
