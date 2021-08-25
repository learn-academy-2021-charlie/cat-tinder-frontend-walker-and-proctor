import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatNew from './CatNew'

Enzyme.configure({ adapter: new Adapter()})

describe("When CatNew renders", () => {
  it("displays a form", () => {
    const catNew = shallow(<CatNew />)
    const formGroup = catNew.find("FormGroup")
    expect(formGroup.length).toEqual(3)
    const label = catNew.find("Label")
    expect(label.length).toEqual(3)
    const input = catNew.find("Input")
    expect(input.length).toEqual(3)
  })
})
