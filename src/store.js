import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import searchReducer from './reducers/searchReducer'
import booksReducer from './reducers/booksReducer'

const reducer = combineReducers({
  search: searchReducer,
  books: booksReducer
})
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store