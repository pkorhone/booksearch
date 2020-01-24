import React from 'react'
import { connect } from 'react-redux'
import ResultsSummary from './ResultsSummary'
import ResultsTable from './ResultsTable'

const mapState = (state) => {
  return {
    data: state.books
  }
}

const ResultsContainer = (props) => {

  return (
    <div align='center'
      style={{
        padding: 40,
        borderTop: '0.25px solid'
      }}
    >
      <ResultsSummary />
      <ResultsTable books={props.data.books}/>
    </div>
  )
}

export default connect(mapState, null)(ResultsContainer)