import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import CatEdit from "./CatEdit"

Enzyme.configure({ adapter: new Adapter() })

describe("when CatEdit loads", () => {
  it("should render a label with the value of Cats name", () => {
    const catEdit = shallow(<CatEdit />)
    const formGroup = catEdit.find("FormGroup")
    expect(formGroup.length).toEqual(3)
    const label = catEdit.find("Label")
    expect(label.length).toEqual(3)
    const input = catEdit.find("Input")
    expect(input.length).toEqual(3)
    const button = catEdit.find("Button")
    expect(button.length).toEqual(1)
  })
})
