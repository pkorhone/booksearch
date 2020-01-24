const initialState = {
  advanced: false,
  simpleSearch: '',
  author: '',
  title: '',
  description: '',
  publisher: '',
  year: '',
  categories: []
}

const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'TOGGLE_ADVANCED_SEARCH':
      return {...state, advanced: !state.advanced}
    case 'UPDATE_SIMPLE_SEARCH':
      return {...state, simpleSearch: action.data}
    case 'UPDATE_AUTHOR':
      return {...state, author: action.data}
    case 'UPDATE_TITLE':
      return {...state, title: action.data}
    case 'UPDATE_DESCRIPTION':
      return {...state, description: action.data}
    case 'UPDATE_PUBLISHER':
      return {...state, publisher: action.data}
    case 'UPDATE_YEAR':
      return {...state, year: action.data}
    case 'UPDATE_CATEGORIES':
      return {...state, categories: action.data}
    default:
      return state
  }
}

export const toggleAdvancedSearch = () => {
  return dispatch => (
    dispatch({
      type: 'TOGGLE_ADVANCED_SEARCH'
    })
  )
}

export const updateSimpleSearch = (data) => {
  return dispatch => (
    dispatch({
      type: 'UPDATE_SIMPLE_SEARCH',
      data: data
    })
  )
}

export const updateAuthor = (data) => {
  return dispatch => (
    dispatch({
      type: 'UPDATE_AUTHOR',
      data: data
    })
  )
}

export const updateTitle = (data) => {
  return dispatch => (
    dispatch({
      type: 'UPDATE_TITLE',
      data: data
    })
  )
}

export const updateDescription = (data) => {
  return dispatch => (
    dispatch({
      type: 'UPDATE_DESCRIPTION',
      data: data
    })
  )
}

export const updatePublisher = (data) => {
  return dispatch => (
    dispatch({
      type: 'UPDATE_PUBLISHER',
      data: data
    })
  )
}

export const updateYear = (data) => {
  return dispatch => (
    dispatch({
      type: 'UPDATE_YEAR',
      data: data
    })
  )
}

export const updateCategories = (data) => {
  return dispatch => {
    dispatch({
      type: 'UPDATE_CATEGORIES',
      data: data
    })
  }
}

export default searchReducer