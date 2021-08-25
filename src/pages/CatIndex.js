import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class CatIndex extends Component {
  render() {
    return (
      <>
        <h3>I am the index page</h3>
        {this.props.cats && this.props.cats.map(cat => {
          return (
            <p key={cat.id}>
              <NavLink to={`/catshow/${cat.id}`}>{cat.name}</NavLink>
            </p>
          )
        })}
      </>
    )
  }
}
export default CatIndex
