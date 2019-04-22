import React, { Component } from 'react';
import { connect } from 'react-redux'

import { updateSmurf, deleteSmurf } from '../../actions'

import { SmurfInfoContainer, ButtonMenu } from './SmurfStyleComponents'
import Button from '../DesignComponents/Button'

class Smurf extends Component {
  state = {
    edit: false,
    id: this.props.smurf.id,
    name: '',
    age: '',
    email: ''
  }

  prePopulateForm = () => {
    const { name, age, height } = this.props.smurf
    this.setState({
      name,
      age,
      height
    })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  toggleEdit() {
    this.setState(prevState => (
      { edit: !prevState.edit }
    ),
      () => this.prePopulateForm()
    )

  }

    handleUpdate = e => {
      e.preventDefault()
    // invoke data update action creator
    this.props.updateSmurf(this.state)
    console.log(`Form submitted data sent: ${JSON.stringify(this.state)}`)

    // reset form fields
    this.setState({
      edit: false,
      id: this.props.smurf.id,
      name: '',
      age: '',
      height: ''
    })
  }

  render() {
    const { name, id, age, height } = this.props.smurf
    return (
      <>
        <SmurfInfoContainer>
          <header>
            <i className="far fa-edit" onClick={() => this.toggleEdit()}>
            </i>
            <i className="fa fa-trash"
              onClick={() => this.props.deleteSmurf(id)}>
            </i>
          </header>
          <div className="smurf-info">
            {!this.state.edit ?
              <h3 className="stat-data">{name}</h3> :
              <input name="name" type="text"
                placeholder="Name" onChange={this.handleInputChange}
                value={this.state.name}
              />
            }
            <div className="smurf-stats">
              <div className="stat-category">Age:</div>
              {!this.state.edit ?
                <div className="stat-data">{age}</div> :
                <input name="age" type="number"
                  placeholder="Age" onChange={this.handleInputChange}
                  value={this.state.age}
                />
              }
              <div className="stat-category">Height:</div>
              {!this.state.edit ?
                <div className="stat-data">{height}</div> :
                <input
                  onChange={this.handleInputChange}
                  placeholder="height"
                  value={this.state.height}
                  name="height"
                />
              }
            </div>
            <ButtonMenu {...this.state} onClick={this.handleUpdate}>
              <Button update>Update</Button>
            </ButtonMenu>

          </div>
        </SmurfInfoContainer>
      </>
    )
  }
}

export default connect(null,{ updateSmurf, deleteSmurf })(Smurf);

