import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import  Adapter  from 'enzyme-adapter-react-16'
import Header from '../Header'


Enzyme.configure({ adapter: new Adapter()})

describe("When Header Loads ... ", ()=>{
    //arrange
    let header
    beforeEach(()=>{
        header = shallow(<Header/>)
    })
    it('dispalys a hamburger icon and the menu is collpased',()=>{
        //act
        const hamburger = header.find('NavbarToggler')
        //assert
        expect(hamburger.length).toEqual(1)
    })
    it('expands the menu when it is clicked', ()=>{
        const hamburger = header.find('NavbarToggler')
        //act
        hamburger.simulate('click')
        const collapsedComponent = header.find('Collapse')
        expect(collapsedComponent.props().isOpen).toEqual(true)
    })
})