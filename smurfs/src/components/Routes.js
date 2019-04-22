import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'

import { getSmurfs } from '../actions'

import SmurfVillage from '../components/SmurfComponents/SmurfVillage'
import SmurfForm from '../components/SmurfComponents/SmurfForm'
import Smurf from '../components/SmurfComponents/Smurf'

class Routes extends Component {
  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    console.log(`Routes render this.props.smurfs is: `, this.props.smurfs)
    return (
      <div>
        {/* Assign routes */}
        <Route 
          path='/'
          exact
          component={SmurfVillage}
        />
        <Route 
          path='/add'
          render={props =>
            <SmurfForm
              {...props}
              add
            />}
        />
        {this.props.smurfs.map(smurf => (
          <Route
            key={smurf.id}
            path={`/smurfs/${smurf.id}`}
            render={props =>
              <Smurf
                {...props}
                smurf={smurf}
              />
            }
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ smurfs }) => ({
  smurfs
})

export default withRouter(connect(mapStateToProps,{getSmurfs})(Routes))