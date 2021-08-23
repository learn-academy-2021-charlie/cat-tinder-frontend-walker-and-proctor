import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component{
  render(){
    return(
      <footer>
        <ul>
          <NavLink to="/">&copy; 2021 Sarah & Austin</NavLink>
        </ul>
        <ul>
          <NavLink to="/catindex">Meet the Cats</NavLink>
        </ul>
        <ul>
          <NavLink to="/catnew">Add a Cat</NavLink>
        </ul>
      </footer>
    )
  }
}
export default Footer
