import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatShow from './CatShow'


Enzyme.configure({ adapter: new Adapter()})

describe("When CatShow renders", () => {
  let cat = {
    id: 3,
    name: "Toast",
    age: 1,
    enjoys: "getting all the attention"
  }
  it("displays a header", () => {
    const catShow = shallow(<CatShow cat={cat} />)
    const showHeading = catShow.find("h3")
    expect(showHeading.text()).toEqual("I am the Cat show page")
  })
  it("displays a list of cats", () => {
    const catShow = shallow(<CatShow cat={cat} />)
    const showContent = catShow.find("p")
    expect(showContent.length).toEqual(3)
  })
})
