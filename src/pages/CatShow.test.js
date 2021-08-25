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
  it("displays a list of cats", () => {
    const catShow = shallow(<CatShow cat={cat} />)
    const showTitle = catShow.find("CardTitle")
    expect(showTitle.length).toEqual(1)
    const showText = catShow.find("CardText")
    expect(showText.length).toEqual(2)
  })
})
