import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import  Adapter  from 'enzyme-adapter-react-16'
import App from './App'
import CatEdit from './pages/CatEdit'
import CatNew from './pages/CatNew'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import cats from './mockCats.js'

Enzyme.configure({adapter: new Adapter()})

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
    const renderedApp = shallow(<App />) //arrange
    const renderedHomeRoute = renderedApp.find('[path="/"]') //act
    expect(renderedHomeRoute.props().component).toEqual(Home) //assert
  })
  it('provides a route/catindex to the CatIndex component', () => {
    const renderedApp = shallow(<App />)
    const renderedCatIndexRoute = renderedApp.find('[path="/catindex"]')
    expect(renderedCatIndexRoute.props().render()).toEqual(<CatIndex cats={cats} />);
  })
  it('provides a route/catedit to the CatEdit component', () => {
    const renderedApp = shallow(<App />)
    const renderedCatEditRoute = renderedApp.find('[path="/catedit"]')
    expect(renderedCatEditRoute.props().component).toEqual(CatEdit);
  })
})
