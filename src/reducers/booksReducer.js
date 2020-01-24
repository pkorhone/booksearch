import bookService from '../services/books'

const initialState = {
  categories: [],
  books: [],
  filterActive: false,
  filteredBooks: [],
  sortColumn: null,
  sortDirection: null
}

const booksReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_CATEGORIES':
      return {...state, categories: action.data}
    case 'SET_BOOKS':
      return {...state, books: action.data, filteredBooks: action.data}
    case 'TOGGLE_FILTER':
      return {...state, filterActive: !state.filterActive}
    case 'SET_FILTERED_BOOKS':
      return {...state, filteredBooks: action.data}
    case 'SET_SORT_COLUMN':
      return {...state, sortColumn: action.data}
    case 'SET_SORT_DIRECTION':
      return {...state, sortDirection: action.data}
    default:
      return state
  }
}

export const getCategories = () => {
  return async dispatch => {
    const categories = await bookService.getCategories()
    dispatch({
      type: 'SET_CATEGORIES',
      data: categories
    })
  }
}

export const getAllBooks = () => {
  return async dispatch => {
    const books = await bookService.getAll()
    dispatch({
      type: 'SET_BOOKS',
      data: books
    })
  }
}

export const setSortedBooks = (books) => {
  return dispatch => (
    dispatch({
      type: 'SET_BOOKS',
      data: books
    })
  )
}

export const getSimpleSearchBooks = (searchTerm) => {
  return async dispatch => {
    const books = await bookService.simpleSearch(searchTerm)
    dispatch({
      type: 'SET_BOOKS',
      data: books
    })
  }
}

export const setSortColumn = (column) => {
  return dispatch => (
    dispatch({
      type: 'SET_SORT_COLUMN',
      data: column
    })
  )
}

export const setSortDirection = (direction) => {
  return dispatch => (
    dispatch({
      type: 'SET_SORT_DIRECTION',
      data: direction
    })
  )
}

export const toggleFilter = () => {
  return dispatch => {
    dispatch({
      type: 'TOGGLE_FILTER'
    })
  }
}

export default booksReducer