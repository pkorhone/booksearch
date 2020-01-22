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

  useEffect(() => {
    bookService
      .getCategories()
      .then(response => setCategories(response))
  }, [])

  const handleVisibility = () => {
    setAdvancedSearch({ ...advancedSearch, visible: !advancedSearch.visible })
  }

  return (
    <div 
      align='center'
      style={{
        padding:40,
      }}
    >
      <h2>Search all books</h2>
      <Form size='big' style={{maxWidth:500}}>
        {advancedSearch.visible ? 
        <Form.Field control='input' disabled /> :
        <Form.Field
          control='input'
          placeholder='Search any attribute...'
        />
        }
        <p 
          onClick={() => handleVisibility()}
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
              />
              <Form.Field
                label='Title'
                control='input'
              />
              <Form.Field
                label='Description'
                control='input'
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