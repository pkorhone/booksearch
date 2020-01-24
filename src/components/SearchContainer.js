import React from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import SimpleSearch from './SimpleSearch'
import AdvancedSearch from './AdvancedSearch'
import { getAllBooks, getSimpleSearchBooks } from '../reducers/booksReducer'
import { toggleResultsLoading } from '../reducers/loadingReducer'
import { 
  toggleAdvancedSearch,
  updateSimpleSearch,
  updateAuthor,
  updateTitle,
  updateDescription,
  updatePublisher,
  updateYear
} from '../reducers/searchReducer'



const mapState = (state) => {
  return {
    search: state.search,
    loading: state.loading
  }
}

const mapDispatch = {
  toggleAdvancedSearch,
  updateSimpleSearch,
  updateAuthor,
  updateTitle,
  updateDescription,
  updatePublisher,
  updateYear,
  getAllBooks,
  getSimpleSearchBooks,
  toggleResultsLoading
}

const SearchContainer = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    props.toggleResultsLoading()
    props.search.advanced ?
      console.log('advanced search!') :
      props.getSimpleSearchBooks(props.search.simpleSearch)
        .then(() => props.toggleResultsLoading())
  }

  const handleListAll = () => {
    props.toggleResultsLoading()
    props.getAllBooks()
      .then(() => props.toggleResultsLoading())
  }

  return (
    <div 
      align='center'
      style={{
        padding:40,
      }}
    >
      <h2>Search all books</h2>
      <Form size='big' style={{maxWidth:500}} onSubmit={(e) => handleSubmit(e)}>
        <SimpleSearch />
        <AdvancedSearch />
        <Button type='submit' color='blue'>Search</Button>
      </Form>
      <h4>Or:</h4>
      <Button onClick={() => handleListAll()}>List all books</Button>
    </div>
  )
}

export default connect(mapState, mapDispatch)(SearchContainer)