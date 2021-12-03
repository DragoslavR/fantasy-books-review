import React from 'react'

const BookShow = (props) => {
  const {book, user} = props
  let editElement

  return(
    <div>
      <h1>{book.title}</h1>
    </div>,
      <div className="inbox">
        <h3>{book.authors}</h3>
        <p>{book.year}</p>
        <p>{book.synopsis}</p>
      </div>
  )
}

export default BookShow