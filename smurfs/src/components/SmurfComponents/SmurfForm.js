import React, { Component } from 'react';
import { connect } from 'react-redux'

import { FormContainer } from '../SharedComponents/FormStyles'
import Button from '../DesignComponents/Button'

import { addSmurf } from '../../actions'

class SmurfForm extends Component {
 state = {
    name: '',
    age: '',
    height: ''
  }

  addSmurf = e => {
    // prevent default
    e.preventDefault();
    // gather form data
    let newRecord = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }

    // send new record to api
    this.props.addSmurf(newRecord)
    console.log(`Form submitted data sent: ${JSON.stringify(newRecord)}`)
    this.props.history.push('/')

    // reset form fields
    this.setState({
      id: '',
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <FormContainer>
        <form onSubmit={this.addSmurf}>
          {(this.props.update || this.props.delete) &&
            <input name="id" type="number"
              placeholder="ID" onChange={this.handleInputChange}
              value={this.state.id}
            />
          }
          <input
            onChange={this.handleInputChange}
            placeholder="Name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Height"
            value={this.state.height}
            name="height"
          />
          <Button type="submit" {...this.props}>
            {`${this.props.add ? 'Add' : ''} 
              ${this.props.update ? 'Update' : ''}  
              ${this.props.delete ? 'Delete' : ''}   
              to the village
            `}
          </Button>
        </form>
      </FormContainer>
    );
  }
}

export default connect(null, { addSmurf })(SmurfForm)
