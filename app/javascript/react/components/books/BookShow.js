import React, { useEffect, useState } from 'react'
import helperFetch from './helpers/Fetcher'

const BookShowPage = (props) => {
  const [book, setBook] = useState({authors: []})
  const [authors, setAuthors] = useState([])
  const [authorTiles, setAuthorTiles] = useState([])
  
  // debugger
  useEffect(() => {
    helperFetch(`/api/v1/books/${props.match.params.key}`).then(bookJson => {
      setBook(bookJson)
      // console.log(bookJson)
      
    })
  }, [])

  useEffect(() => {
    book.authors.forEach(author => {
      helperFetch(`/api/v1${author.author.key}`).then(authorJson => {
        setAuthors(authors.concat(authorJson))
      })
    })
  }, [book])
  useEffect(() => {
    setAuthorTiles(authors.map(authorData => {
      return(
        <li key={authorData.key}>{authorData.name}</li>
      )
    }))
  }, [authors])
  console.log(book)
  return(
    <div>
    <div className="book-text">
      <h1>{book.title}</h1>
      <details>
        <ul>{authorTiles}</ul>
      </details>
    </div>
    </div>
  )
}

export default BookShowPage