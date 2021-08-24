import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import  Adapter  from 'enzyme-adapter-react-16'
import App from './App'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'

Enzyme.configure({ adapter: new Adapter()})

describe('When the app renders', () => {
  it('displays a header and a footer', () => {
    //arrange
    const renderedApp = shallow(<App/>)
    //act
    const renderedHeader = renderedApp.find("Header")
    const renderedFooter = renderedApp.find("Footer")
    //assert
    expect(renderedHeader.length).toEqual(1)
    expect(renderedFooter.length).toEqual(1)
  })
  it('provides a route"/" to the home component', () => {
    //arrange
    const renderedApp = shallow(<App/>)
    //act
    const renderedHomeRoute = renderedApp.find('[path="/"]')
    //assert
    expect(renderedHomeRoute.props().component).toEqual(Home)
  })
  it('provides a route "/catindex" to the CatIndex component', () => {
    //arrange
    const renderedApp = shallow(<App/>)
    //act
    const renderedCatIndexRoute = renderedApp.find('[path="/catindex"]')
    //assert
    expect(renderedCatIndexRoute.props().component).toEqual(CatIndex)
  })
})
