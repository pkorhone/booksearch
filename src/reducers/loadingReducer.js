const initialState = {
  app: false,
  results: false
}

const loadingReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'TOGGLE_APP_LOADING':
      return {...state, app: !state.app}
    case 'TOGGLE_RESULTS_LOADING':
      return {...state, results: !state.results}
    default:
      return state
  }
}

export const toggleAppLoading = () => {
  return dispatch => {
    dispatch({
      type: 'TOGGLE_APP_LOADING'
    })
  }
}

export const toggleResultsLoading = () => {
  return dispatch => {
    dispatch({
      type: 'TOGGLE_RESULTS_LOADING'
    })
  }
}

export default loadingReducer