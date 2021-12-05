import React from 'react'
import { Link } from 'react-router-dom'

const BookTile = (props) => {
  const {book} = props

  return(
    
    <Link to={`/books${book.key}`}>
      <div>
        <p className="book-title-text" >
          {book.title}
        </p>
      </div>
    </Link>
  )
}

export default BookTile