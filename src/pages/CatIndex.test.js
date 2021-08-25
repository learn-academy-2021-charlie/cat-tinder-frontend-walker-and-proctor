import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatIndex from './CatIndex'
import cats from '../mockCats'

Enzyme.configure({adapter: new Adapter()})

describe("When CatIndex render", () => {
  it("displays an index heading", () => {
    const catIndex = shallow(<CatIndex cats={cats}/>)
    const indexHeading = catIndex.find("h3")
    expect(indexHeading.text()).toEqual("Meet the Cats!")
  })
  it("displays a list of cats", () => {
    const catIndex = shallow(<CatIndex cats={cats}/>)
    const catList = catIndex.find("Row")
    expect(catList.length).toEqual(cats.length)
  })
})
