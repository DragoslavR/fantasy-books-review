import React, { useState, useEffect } from 'react'
import BookTile from './BookTile'

const BooksIndexPage = (props) => {
  const [books, setBooks] = useState([])

  const booksFetch = async () => {
    try {
      const response = await fetch("/api/v1/books")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const parsedJson = await response.json()
      setBooks(parsedJson.books.docs)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    booksFetch()
  }, [])

  const bookTiles = books.map((book) => {
    return(
      <div className="book-tile cell small-4" key={book.key}>
        <BookTile
          book={book}
        />
      </div>
    )
  })

  return(
    <div className="book-tile-container" >
      <div>
        {bookTiles}
      </div>
    </div>
  )
}

export default BooksIndexPage