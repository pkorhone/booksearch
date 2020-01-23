import React from 'react'
import { connect } from 'react-redux'
import { Form, Icon } from 'semantic-ui-react'
import { 
  toggleAdvancedSearch,
  updateSimpleSearch
} from '../reducers/searchReducer'

const mapState = (state) => {
  return {
    search: state.search
  }
}

const mapDispatch = {
  toggleAdvancedSearch,
  updateSimpleSearch
}

const SimpleSearch = (props) => {

  const searchTermChange = (event) => {
    props.updateSimpleSearch(event.target.value)
  }

  return (
    <>
      {props.search.advanced ? 
        <Form.Field control='input' disabled value={''}/> :
        <Form.Field
          control='input'
          placeholder='Search any attribute...'
          value={props.search.simpleSearch}
          onChange={(e) => searchTermChange(e)}
        />
        }
        <p 
          onClick={() => props.toggleAdvancedSearch()}
          align='left' 
          style={{marginTop:-15}}
        >
          <small>
            { props.search.advanced ? <Icon name='close' /> : <Icon name='dropdown' /> }
            Advanced search
          </small>
        </p>
      </>
  )
}

export default connect(mapState, mapDispatch)(SimpleSearch)