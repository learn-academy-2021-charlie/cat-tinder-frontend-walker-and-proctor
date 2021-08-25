import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class CatNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: "",
        age: "",
        enjoys: ""
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }

  handleSubmit = () => {
    this.props.createCat(this.state.form)
    this.setState({submitted: true})
  }

  render() {
    return (
      <div className="page-body">
        <h3>Add Your Cat!</h3>
        <br />
        <Form>
          <FormGroup>
            <Label for="name">What is your cat's name?</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.form.name}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="age">How old is your cat?</Label>
            <Input
              type="number"
              min="0"
              max="20"
              name="age"
              onChange={this.handleChange}
              value={this.state.form.age}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="enjoys">What does your cat enjoy?</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={this.handleChange}
              value={this.state.form.enjoys}
            />
          </FormGroup>
          <br />
          <Button name="submit" onClick={this.handleSubmit}>
            Add New Cat
          </Button>
        </Form>
        {this.state.submitted && <Redirect to="/catindex" />}
      </div>
    )
  }
}
export default CatNew
