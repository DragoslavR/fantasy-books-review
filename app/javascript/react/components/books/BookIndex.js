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
      // debugger
      setBooks(parsedJson.books.docs)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

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

    booksFetch()
  }, [])


  const bookTiles = books.map((book) => {
    //use debuggers here to inspect the book elements for be rendered
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
      <div>
        {bookTiles}
      </div>
    </div>
  )
}

export default BooksIndexPage