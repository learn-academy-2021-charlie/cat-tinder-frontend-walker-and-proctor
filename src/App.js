import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import CatEdit from './pages/CatEdit'
import CatIndex from './pages/CatIndex'
import CatNew from './pages/CatNew'
import CatShow from './pages/CatShow'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import cats from './mockCats.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: cats
    }
  }

  createCat = (newCat) => {
    console.log(newCat)
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/catindex" render={(props) => <CatIndex cats={this.state.cats} />} />
          <Route path="/catshow/:id" render={(props) => {
            let id = props.match.params.id
            let cat = this.state.cats.find(cat => cat.id === +id)
            return <CatShow cat={cat} />
          }}/>
          <Route path="/catedit" component={CatEdit} />
          <Route path="/catnew" render={(props) => <CatNew createCat={this.createCat} />} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}
export default App
