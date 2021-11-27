import React from 'react'
import { Link } from 'react-router-dom'

const BookTile = (props) => {
  const {book} = props
  let url
  let image
  if (book.image.url) {
  image = <img className="book-tile-image" src={url} alt="book cover image"/> 
  }

  return(
    <Link to={`/books/${book.id}`}>
      <div>
        {image}
        <p className="book-title-text" >
          {book.title}
        </p>
      </div>
    </Link>
  )
}

export default BookTile