import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { expect } from 'chai'
import Header from '../src/components/HeaderComponent'

describe('Header Component', () => {
  it('Header\' title should be 电子题库', () => {
    let app = shallow(<Header />)

    expect(app.find('span').at(0).text()).to.equal('电子题库')
  })
})
