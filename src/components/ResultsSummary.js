import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { toggleFilter } from '../reducers/booksReducer'
import Filter from './Filter'

const mapState = (state) => {
  return {
    search: state.search,
    data: state.books
  }
}

const mapDispatch = {
  toggleFilter
}

const ResultsSummary = (props) => {

  const resultsCount = props.data.books.length

  if (resultsCount === 0) {
    return null
  }

  return (
    <div align='left'>
      <h3>
        {`${resultsCount} results `}
        <Button 
          content='Filter' 
          icon={props.data.filterActive ? 'close' : 'filter' }
          onClick={() => props.toggleFilter()}
        />
      </h3>
      <Filter />
      
    </div>
  )
}

export default connect(mapState, mapDispatch)(ResultsSummary)