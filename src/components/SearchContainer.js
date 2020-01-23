import React, { useState, useEffect } from 'react'
import { Form, Button, Checkbox, Transition, Icon } from 'semantic-ui-react'
import bookService from '../services/books'

const SearchContainer = (props) => {

  const [categories, setCategories] = useState([])
  const [advancedSearch, setAdvancedSearch] = useState({
    animation: 'slide down',
    duration: 500,
    visible: false
  })

  const [simpleSearchTerm, setSimpleSearchTerm] = useState('')
  const [advancedSearchTerms, setAdvancedSearchTerms] = useState({
    author: '',
    title: '',
    description: '',
    categories: []
  })

  useEffect(() => {
    bookService
      .getCategories()
      .then(response => setCategories(response))
  }, [])

  const toggleAdvancedSearch = () => {
    setAdvancedSearch({ ...advancedSearch, visible: !advancedSearch.visible })
  }

  const handleSimpleChange = (event) => {
    setSimpleSearchTerm(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setAdvancedSearchTerms({...advancedSearchTerms, author: event.target.value})
  }

  const handleTitleChange = (event) => {
    setAdvancedSearchTerms({...advancedSearchTerms, title: event.target.value})
  }

  const handleDescriptionChange = (event) => {
    setAdvancedSearchTerms({...advancedSearchTerms, description: event.target.value})
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    advancedSearch.visible ?
      console.log(advancedSearchTerms) :
      console.log(simpleSearchTerm)
      bookService.simpleSearch(simpleSearchTerm)
        .then(response => console.log(response))
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
        {advancedSearch.visible ? 
        <Form.Field control='input' disabled value={''}/> :
        <Form.Field
          control='input'
          placeholder='Search any attribute...'
          value={simpleSearchTerm}
          onChange={(e) => handleSimpleChange(e)}
        />
        }
        <p 
          onClick={() => toggleAdvancedSearch()}
          align='left' 
          style={{marginTop:-15}}
        >
          <small>
            { advancedSearch.visible ? <Icon name='close' /> : <Icon name='dropdown' /> }
            Advanced search
          </small>
        </p>
        <Transition.Group animation={advancedSearch.animation} duration={advancedSearch.duration}>
          {advancedSearch.visible && (
            <div align='left' style={{marginBottom:10}}>
              <Form.Field
                label='Author'
                control='input'
                value={advancedSearchTerms.author}
                onChange={(e) => handleAuthorChange(e)}
              />
              <Form.Field
                label='Title'
                control='input'
                value={advancedSearchTerms.title}
                onChange={(e) => handleTitleChange(e)}
              />
              <Form.Field
                label='Description'
                control='input'
                value={advancedSearchTerms.description}
                onChange={(e) => handleDescriptionChange(e)}
              />
              <Form.Field label='Categories' />
              {categories.map(c => 
                <Form.Field key={c.id}
                  label={c.name}
                  control={Checkbox}
                />
              )}
            </div>
          )}
        </Transition.Group>
        <Button type='submit' color='blue'>Search</Button>
      </Form>
      <h4>Or:</h4>
      <Button>List all books</Button>
    </div>
  )
}

export default SearchContainer