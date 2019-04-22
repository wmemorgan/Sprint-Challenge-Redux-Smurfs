/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from 'axios'

// const API_ENDPOINT = `${process.env.REACT_APP_API_ENDPOINT || '/'}.netlify/functions/server/api/smurfs`
const API_ENDPOINT = 'http://localhost:3333/smurfs'

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_DATA_START })
  axios
    .get(API_ENDPOINT)
    .then(res => {
      console.log(res.data)
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err.response)
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response })
    })
}

export const ADD_DATA_START = 'ADD_DATA_START'
export const ADD_DATA_SUCCESS = 'ADD_DATA_SUCCESS'
export const ADD_DATA_FAILURE = 'ADD_DATA_FAILURE'

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_DATA_START })
  axios
    .post(API_ENDPOINT, smurf)
    .then(res => {
      console.log(res.data)
      dispatch({ type: ADD_DATA_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err.response)
      dispatch({ type: ADD_DATA_FAILURE, payload: err.response })
    })
}

export const UPDATE_DATA_START = 'UPDATE_DATA_START'
export const UPDATE_DATA_SUCCESS = 'UPDATE_DATA_SUCCESS'
export const UPDATE_DATA_FAILURE = 'UPDATE_DATA_FAILURE'

export const updateSmurf = smurf => dispatch => {
  dispatch({ type: UPDATE_DATA_START })
  axios
    .post(API_ENDPOINT, smurf)
    .then(res => {
      console.log(res.data)
      dispatch({ type: UPDATE_DATA_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err.response)
      dispatch({ type: UPDATE_DATA_FAILURE, payload: err.response })
    })
}

export const DELETE_DATA_START = 'DELETE_DATA_START'
export const DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS'
export const DELETE_DATA_FAILURE = 'DELETE_DATA_FAILURE'

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_DATA_START })
  axios
    .delete(`${API_ENDPOINT}/${id}`)
    .then(res => {
      console.log(res.data)
      dispatch({ type: DELETE_DATA_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err.response)
      dispatch({ type: DELETE_DATA_FAILURE, payload: err.response })
    })
}