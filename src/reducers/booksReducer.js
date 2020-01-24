import bookService from '../services/books'

const initialState = {
  books: [],
  sortColumn: null,
  sortDirection: null
}

const booksReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_BOOKS':
      return {...state, books: action.data, filteredBooks: action.data}
    case 'SET_SORT_COLUMN':
      return {...state, sortColumn: action.data}
    case 'SET_SORT_DIRECTION':
      return {...state, sortDirection: action.data}
    default:
      return state
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

export const getAdvancedSearchBooks = (searchTerms) => {
  return async dispatch => {
    const books = await bookService.advancedSearch(searchTerms)
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

export default booksReducer