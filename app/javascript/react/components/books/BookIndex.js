import { array } from 'prop-types'
import React, { useState, useEffect } from 'react'
import BookTile from './BookTile'
import Search from './Search'

const BooksIndexPage = (props) => {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState([])
  const [searchResults, setSearchResults] = useState([])

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
      setSearchResults(parsedJson.books.docs)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    booksFetch()
  }, [])

  const bookTiles = searchResults.map((book) => {
    return(
      <div className="book-tile cell small-4" key={book.key}>
        <BookTile
          book={book}
        />
      </div>
    )
  })

  let array = books

  const searchHandler = (search) => {
    setSearch(search)
    if(search !== "") {
      const newBookList = array.filter((book) => {
        return Object.values(book)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
      })
      setSearchResults(newBookList)
    } else (array)
  }

  return(
    <div className="book-tile-container" >
      <Search term={search} searchKeyword={searchHandler}/>
      <div className="list-image">
        {bookTiles}
      </div>
    </div>
  )
}

export default BooksIndexPage