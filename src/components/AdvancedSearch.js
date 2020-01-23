import React from 'react'
import { connect } from 'react-redux'
import { Form, Checkbox, Transition } from 'semantic-ui-react'
import { 
  updateAuthor,
  updateTitle,
  updateDescription,
  updatePublisher,
  updateYear
} from '../reducers/searchReducer'

const mapState = (state) => {
  return {
    search: state.search
  }
}

const mapDispatch = {
  updateAuthor,
  updateTitle,
  updateDescription,
  updatePublisher,
  updateYear
}


const AdvancedSearch = (props) => {

  const authorChange = (event) => {
    props.updateAuthor(event.target.value)
  }

  const titleChange = (event) => {
    props.updateTitle(event.target.value)
  }

  const descriptionChange = (event) => {
    props.updateDescription(event.target.value)
  }

  const publisherChange = (event) => {
    props.updatePublisher(event.target.value)
  }

  const yearChange = (event) => {
    props.updateYear(event.target.value)
  }

  return (
    <Transition.Group animation='slide down' duration={500}>
      {props.search.advanced && (
        <div align='left' style={{marginBottom:10}}>
          <Form.Field
            label='Author'
            control='input'
            value={props.search.author}
            onChange={(e) => authorChange(e)}
          />
          <Form.Field
            label='Title'
            control='input'
            value={props.search.title}
            onChange={(e) => titleChange(e)}
          />
          <Form.Field
            label='Description'
            control='input'
            value={props.search.description}
            onChange={(e) => descriptionChange(e)}
          />
          <Form.Field
            label='Publisher'
            control='input'
            value={props.search.publisher}
            onChange={(e) => publisherChange(e)}
          />
          <Form.Field
            label='Year'
            control='input'
            value={props.search.year}
            onChange={(e) => yearChange(e)}
          />
        </div>
      )}
    </Transition.Group>
  )
}

export default connect(mapState, mapDispatch)(AdvancedSearch)