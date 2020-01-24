import React from 'react'
import { connect } from 'react-redux'

const mapState = (state) => {
  return {
    data: state.books
  }
}

const ResultsSummary = (props) => {

  const resultsCount = props.data.books.length

  if (resultsCount === 0) {
    return null
  }

  return (
    <div align='left'>
      <h3>{`${resultsCount} results `}</h3>
      <small>(Click column name to sort)</small>
    </div>
  )
}

export default connect(mapState, null)(ResultsSummary)