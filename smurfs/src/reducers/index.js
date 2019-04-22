import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions'

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
  errorStatusCode: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: null,
        errorStatusCode: null
      }

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: null,
        errorStatusCode: null
      }

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        smurfs: [],
        fetchingSmurfs: false,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status,
      }
    default:
      return state
  }
}

export default reducer