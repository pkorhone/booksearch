import React from 'react'
import Navbar from './components/Navbar'
import SearchContainer from './components/SearchContainer'
import ResultsContainer from './components/ResultsContainer'

const App = () => {

  return (
    <div>
      <Navbar />
      <SearchContainer />
      <ResultsContainer />
    </div>
  )
}

export default App