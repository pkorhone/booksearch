import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { setSortColumn, setSortDirection, setSortedBooks } from '../reducers/booksReducer'
import { Table, Popup } from 'semantic-ui-react'
import BookPopup from './BookPopup'

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
    <Table sortable selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={props.tableData.sortColumn === 'author' ? props.tableData.sortDirection : null}
              onClick={() => handleSort('author')}
            >
              Author
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={props.tableData.sortColumn === 'title' ? props.tableData.sortDirection : null}
              onClick={() => handleSort('title')}
            >
              Title
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={props.tableData.sortColumn === 'description' ? props.tableData.sortDirection : null}
              onClick={() => handleSort('description')}
            >
              Description
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={props.tableData.sortColumn === 'publishedYear' ? props.tableData.sortDirection : null}
              onClick={() => handleSort('publishedYear')}
            >
              Published
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={props.tableData.sortColumn === 'publisher' ? props.tableData.sortDirection : null}
              onClick={() => handleSort('publisher')}
            >
              Publisher
            </Table.HeaderCell>
            <Table.HeaderCell>
              Categories
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.tableData.books.map(book => 
            <Popup key={book.id}
              flowing 
              hoverable
              position='top center'
              content={<BookPopup book={book} />} 
              trigger={
                <Table.Row>
                  <Table.Cell>{book.author}</Table.Cell>
                  <Table.Cell>{book.title}</Table.Cell>
                  <Table.Cell>
                    {book.description.length > 255 ? 
                    `${book.description.substring(0,255)} ...` :
                    book.description}
                  </Table.Cell>
                  <Table.Cell>{book.publishedYear}</Table.Cell>
                  <Table.Cell>{book.publisher}</Table.Cell>
                  <Table.Cell>{book.categories}</Table.Cell>
                </Table.Row>
              }
            />
            
          )}
        </Table.Body>
      </Table>
  )
}

export default connect(mapState, mapDispatch)(ResultsTable)