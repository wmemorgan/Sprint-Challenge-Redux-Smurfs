import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { SmurfListContainer, Preview } from './SmurfStyleComponents'

class SmurfVillage extends Component {
  render() {
    console.log(`render SmurfVillage props are: `, this.props)
    const { smurfs } = this.props
    return (
      <SmurfListContainer>
        <h1>The Smurfs Village</h1>
        {smurfs.length > 0 ? (smurfs.map(smurf => (
          <Link key={smurf.id} to={`/smurfs/${smurf.id}`}>
            <Preview>
              <div>{smurf.name}</div>
              <div>id: {smurf.id}</div>
            </Preview>
          </Link>
        ))) : (
            <h2>Loading...</h2>
          )}
      </SmurfListContainer>
    )
  }
}

const mapStateToProps = ({ fetchingData, smurfs }) => ({
  fetchingData, smurfs
})

export default connect(mapStateToProps, {})(SmurfVillage)