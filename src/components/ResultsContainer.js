import React from 'react'
import { connect } from 'react-redux'
import ResultsSummary from './ResultsSummary'
import ResultsTable from './ResultsTable'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const mapState = (state) => {
  return {
    data: state.books,
    loading: state.loading
  }
}

const ResultsContainer = (props) => {

  return (
    <Segment vertical align='center'
      style={{
        padding: 40,
        borderTop: '0.25px solid'
      }}
    >
      {props.loading.results ? 
        <Dimmer inverted active>
          <Loader>Loading search results...</Loader>
        </Dimmer> :
        ''
      }
      
      <ResultsSummary />
      <ResultsTable books={props.data.books}/>
    </Segment>
  )
}

export default connect(mapState, null)(ResultsContainer)