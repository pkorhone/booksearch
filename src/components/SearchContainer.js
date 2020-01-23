import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import bookService from '../services/books'
import AdvancedSearch from './AdvancedSearch'
import { 
  toggleAdvancedSearch,
  updateSimpleSearch,
  updateAuthor,
  updateTitle,
  updateDescription,
  updatePublisher,
  updateYear
} from '../reducers/searchReducer'
import SimpleSearch from './SimpleSearch'


const mapState = (state) => {
  return {
    search: state.search
  }
}

const mapDispatch = {
  toggleAdvancedSearch,
  updateSimpleSearch,
  updateAuthor,
  updateTitle,
  updateDescription,
  updatePublisher,
  updateYear
}

const SearchContainer = (props) => {

  /*
  const [categories, setCategories] = useState([])

  useEffect(() => {
    bookService
      .getCategories()
      .then(response => setCategories(response))
  }, [])
  */

  const handleSubmit = (event) => {
    event.preventDefault()
    props.search.advanced ?
      console.log(props.search) :
      console.log(props.search.simpleSearch)
    /*
    advancedSearch.visible ?
      console.log(advancedSearchTerms) :
      console.log(simpleSearchTerm)
      bookService.simpleSearch(simpleSearchTerm)
        .then(response => console.log(response))
    */
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
      <Button>List all books</Button>
    </div>
  )
}

export default connect(mapState, mapDispatch)(SearchContainer)