import React from 'react'
import { Link } from 'react-router-dom'

const BookTile = (props) => {
  const {book} = props
  // debugger

  return(
    // div
    <Link to={`/books/${book.id}`}>
      <div>
        <p className="book-title-text" >
          {book.title}
        </p>
      </div>
    </Link>
  )
}

export default BookTile