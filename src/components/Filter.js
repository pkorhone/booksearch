import React from 'react'
import { connect } from 'react-redux'
import { Transition, Form } from 'semantic-ui-react'

const mapState = (state) => {
  return {
    active: state.books.filterActive
  }
}

const Filter = (props) => {
  return (
    <Transition.Group animation='slide down' duration={500}>
      {props.active && (
        <div>
          <Form>
            
          </Form>
        </div>
      )}
    </Transition.Group>
  )
}

export default connect(mapState, null)(Filter)