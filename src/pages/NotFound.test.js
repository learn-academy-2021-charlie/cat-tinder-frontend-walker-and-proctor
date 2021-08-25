import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'
import notCat from '../assets/not-cat.jpg'

Enzyme.configure({ adapter: new Adapter()})

describe("When NotFound renders", () => {
  it("displays Oops heading", () => {
    const notFound = shallow(<NotFound />)
    const oopsHeading = notFound.find("h3")
    expect(oopsHeading.text()).toEqual("Ooops, no cats here!")
  })
  it("displays a pic that is not a cat", () => {
    const notFound = shallow(<NotFound />)
    expect(notFound.find("img").prop("src")).toEqual(notCat);
  })
})
