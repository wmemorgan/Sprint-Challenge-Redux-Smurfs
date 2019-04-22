import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SmurfVillage extends Component {
  render() {
    console.log(`render SmurfVillage props are: `, this.props)
    return (
        <div>
          <h2>Smurf Village</h2>
          {this.props.smurfs.map(smurf => (
            <div key={smurf.id}>
              <div>{smurf.id}</div>
              <h3>{smurf.name}</h3>
              <div>{smurf.age}</div>
              <div>{smurf.height}</div>
            </div>
          ))}
        </div>


    )
  }
}

const mapStateToProps = ({ fetchingData, smurfs }) => ({
  fetchingData, smurfs
})

export default connect(mapStateToProps, {})(SmurfVillage)