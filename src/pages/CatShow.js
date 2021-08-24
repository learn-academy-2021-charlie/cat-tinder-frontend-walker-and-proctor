import React, { Component } from 'react'

class CatShow extends Component {
  render() {
    console.log(this.props.cat)
    return (
      <>
        <h3>I am the Cat show page</h3>
        <p>{this.props.cat.name}</p>
        <p>{this.props.cat.age}</p>
        <p>{this.props.cat.enjoys}</p>
      </>
    )
  }
}
export default CatShow
