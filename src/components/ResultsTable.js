import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { setSortColumn, setSortDirection, setSortedBooks } from '../reducers/booksReducer'
import { Table } from 'semantic-ui-react'

const mapState = (state) => {
  return {
    tableData: state.books
  }
}

const mapDispatch = {
  setSortColumn,
  setSortDirection,
  setSortedBooks
}

const ResultsTable = (props) => {

  const handleSort = (clickedColumn) => {
    if (props.tableData.sortColumn !== clickedColumn) {     // Option 1: User wants to sort by a new column
      props.setSortColumn(clickedColumn)
      props.setSortedBooks(_.sortBy(props.tableData.books, [clickedColumn]))
      props.setSortDirection('ascending')
      return    // sorting done
    }

    // Option 2: User wants to reverse sort direction of already sorted column
    props.setSortedBooks(props.tableData.books.reverse())
    props.setSortDirection(props.tableData.sortDirection === 'ascending' ? 'descending' : 'ascending')
  }

  if (props.tableData.books.length === 0) {
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
              sorted={props.sortColumn === 'author' ? props.sortDirection : null}
              onClick={() => handleSort('author')}
            >
              Author
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={props.sortColumn === 'title' ? props.sortDirection : null}
              onClick={() => handleSort('title')}
            >
              Title
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={props.sortColumn === 'description' ? props.sortDirection : null}
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
          {props.tableData.books.map(book => 
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

export default connect(mapState, mapDispatch)(ResultsTable)