import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SmurfVillage extends Component {
  render() {
    console.log(`render SmurfVillage props are: `, this.props)
    return (
        <h2>Smurf Village</h2>

    )
  }
}

const mapStateToProps = ({ fetchingData, smurfs }) => ({
  fetchingData, smurfs
})

export default connect(mapStateToProps, {})(SmurfVillage)