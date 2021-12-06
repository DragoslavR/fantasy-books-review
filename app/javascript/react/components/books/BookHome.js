import React from 'react'
import { Link } from 'react-router-dom'

const BooksHomePage = () => {
  return(
    <div className="home">
      <Link to="/books">Book List</Link>
    </div>
  )
}

export default BooksHomePage