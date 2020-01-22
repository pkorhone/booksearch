import React, { useState, useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import _ from 'lodash'

const ResultsTable = ({ books }) => {

  const [tableData, setTableData] = useState([])
  const [column, setColumn] = useState(null)
  const [direction, setDirection] = useState(null)

  useEffect(() => {
    setTableData(books)
  }, [books])

  const handleSort = (clickedColumn) => {
    if (column !== clickedColumn) {     // Option 1: User wants to sort by a new column
      setColumn(clickedColumn)
      setTableData(_.sortBy(tableData, [clickedColumn]))
      setDirection('ascending')
      return    // sorting done
    }

    // Option 2: User wants to reverse sort direction of already sorted column
    setTableData(tableData.reverse())
    setDirection(direction === 'ascending' ? 'descending' : 'ascending')
  }

  if (tableData.length === 0) {
    return (
      <>
      </>
    )
  }
  
  return (
    <Table sortable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'author' ? direction : null}
              onClick={() => handleSort('author')}
            >
              Author
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'title' ? direction : null}
              onClick={() => handleSort('title')}
            >
              Title
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'description' ? direction : null}
              onClick={() => handleSort('description')}
            >
              Description
            </Table.HeaderCell>
            <Table.HeaderCell>
              Categories
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tableData.map(book => 
            <Table.Row key={book.id}>
              <Table.Cell>{book.author}</Table.Cell>
              <Table.Cell>{book.title}</Table.Cell>
              <Table.Cell>{book.description}</Table.Cell>
              <Table.Cell>{book.categories}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
  )
}

export default ResultsTable