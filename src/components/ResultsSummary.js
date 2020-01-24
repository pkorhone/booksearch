import React from 'react'
import { connect } from 'react-redux'

const mapState = (state) => {
  return {
    search: state.search,
    data: state.books
  }
}

const ResultsSummary = (props) => {

  const resultsCount = props.data.books.length

  return (
    <div align='left'>
      <h5>{resultsCount > 0 ? `${resultsCount} results` : ``}</h5>
    </div>
  )
}

export default connect(mapState, null)(ResultsSummary)