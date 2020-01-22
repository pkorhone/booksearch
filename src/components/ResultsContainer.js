import React, { useState, useEffect } from 'react'
import bookService from '../services/books'
import ResultsTable from './ResultsTable'

const ResultsContainer = (props) => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    bookService
      .getAll()
      .then(response => setBooks(response))
    
  }, [])

  return (
    <div align='center'
      style={{
        padding: 40
      }}
    >
      <ResultsTable books={books}/>
    </div>
  )
}

export default ResultsContainer