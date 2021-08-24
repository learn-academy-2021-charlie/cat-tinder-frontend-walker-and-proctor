import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatIndex from './CatIndex'

Enzyme.configure({adapter: new Adapter()})

describe("When CatIndex render", () => {
  it("displays an index heading", () => {
    const catIndex = shallow(<CatIndex />)
    const indexHeading = catIndex.find("h3")
    expect(indexHeading.text()).toEqual("I am the index page")
  })
})
