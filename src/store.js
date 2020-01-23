import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import searchReducer from './reducers/searchReducer'

const reducer = combineReducers({
  search: searchReducer
})
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store