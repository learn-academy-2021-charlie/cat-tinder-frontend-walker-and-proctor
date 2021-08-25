import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'

Enzyme.configure({ adapter: new Adapter()})

describe("When NotFound renders", () => {
  it("displays Oops heading", () => {
    const notFound = shallow(<NotFound />)
    const oopsHeading = notFound.find("h3")
    expect(oopsHeading.text()).toEqual("Ooops, no cats here!")
  })
})
