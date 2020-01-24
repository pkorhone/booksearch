import React from 'react'
import { connect } from 'react-redux'
import { Transition, Form } from 'semantic-ui-react'
import ActiveFilter from './ActiveFilter'

const mapState = (state) => {
  return {
    active: state.books.filterActive
  }
}

const Filter = (props) => {

  const options = [
    { key: 'author', text: 'Author', value: 'author' },
    { key: 'title', text: 'Title', value: 'title' },
    { key: 'description', text: 'Description', value: 'description' },
    { key: 'publisher', text: 'Publisher', value: 'publisher' },
    { key: 'year', text: 'Year', value: 'year' },
    { key: 'categories', text: 'Categories', value: 'categories' },
  ]

  return (
    <Transition.Group animation='slide down' duration={500}>
      {props.active && (
        <div style={{height:300}}>
          <Form>
            <Form.Select inline
              label='Add new filter for'
              options={options}
            />
          </Form>
          <div>
            <ActiveFilter />
            <ActiveFilter />
          </div>
        </div>
      )}
    </Transition.Group>
  )
}

export default connect(mapState, null)(Filter)