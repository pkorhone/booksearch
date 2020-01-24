import React from 'react'
import { Image, Grid } from 'semantic-ui-react'

const BookPopup = ({ book }) => {
  return (
    <div style={{width: '75vw'}}>
      <Grid divided='vertically'>
        <Grid.Row columns={3}>
          <Grid.Column width={4}>
            <h2>{book.title}</h2>
            <h5>{book.author}</h5>
            <h5>{`${book.publisher} (${book.publishedYear})`}</h5>
          </Grid.Column>
          <Grid.Column width={8}>
            <p>{book.description}</p>
          </Grid.Column>
          <Grid.Column width={4}>
            <Image src={book.imageLink} />
          </Grid.Column>
        </Grid.Row>
        
        
      </Grid>
    </div>
  )
}

export default BookPopup