import React, { useState, useEffect } from 'react'
import BookTile from './BookTile'
import helperFetch from './helpers/Fetcher'

const BooksIndexPage = (props) => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    // helperFetch('api/v1/books').then(booksData => {
    //   setBooks(booksData.books)
    // })
    helperFetch("https://openlibrary.org/search.json?author=tolkien")
    // .then((response) => response.json())
    .then((books) => {
      // console.log(books)
      setBooks(books.docs)
    })
  }, [])


  const bookTiles = books.map((book) => {
    return(
      <div className="book-tile cell small-4" key={book.id}>
        <BookTile
          key={book.id}
          book={book}
        />
      </div>
    )
  })

  return(
    <div className="book-tile-container" >
      <div className="grid-x grid-margin-x grid-margin-10 space" >
        {bookTiles}
      </div>
    </div>
  )
}

export default BooksIndexPage