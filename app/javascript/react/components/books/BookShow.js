import React, { useEffect, useState } from 'react'
import helperFetch from './helpers/Fetcher'
import ReviewForm from './ReviewsForm.js'
import ReviewTiles from './ReviewTile'
import BookTile from './BookTile'

const BookShowPage = (props) => {
  const [book, setBook] = useState({authorList: []})
  const [authors, setAuthors] = useState([])
  const [authorTiles, setAuthorTiles] = useState([])
  const [user, setUser] = useState({})
  const [reviews, setReviews] = useState([])
  const bookId = props.match.params.key
  const [formData, setFormData] = useState({
    rating: "",
    body: "",
    book_id: bookId
  })

  useEffect(() => {
    helperFetch(`/api/v1/books/${bookId}`).then(bookJson => {
      setBook(bookJson.book)
      setReviews(bookJson.book.reviews)
    })
  }, [])

  useEffect(() => {
    book.authorList.forEach(author => {
      helperFetch(`/api/v1${author}`).then(authorJson => {
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

  useEffect(() => {
    helperFetch('/api/v1/users').then(userData => { 
      setUser(userData)
      })
  }, [])

  const addNewReview = async (formPayLoad) => {
    try {
      const response = await fetch('/api/v1/reviews', {
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        credentials:"same-origin",
        body: JSON.stringify(formPayLoad)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`
        throw(new Error(errorMessage))
      }
      const newReview = await response.json()
      if (newReview.errors) {
        alert(newReview.errors)
      } else {
        setReviews([
          ...reviews,
          newReview.review 
        ])
      }
      setFormData({
        rating: "",
        body: "",
        book_id: bookId
      })
    } catch(err) {
      console.log(err)
    }
  }
  
  const reviewTiles = reviews.map((review) => {
    return(
      <ReviewTiles
      key={review.id}
      review={review}
      user={review.user}/>
    )
  })

  const createReviews = (
    <ReviewForm
      addNewReview={addNewReview}
      formData={formData}
      setFormData={setFormData}
    />
  )
   
  return(
    <div>
      <div className="book-text">
        <h1>{book.title}</h1>
        <ul>{authorTiles}</ul>
      </div>
      <div className="grid-x grid-margin-x grid-margin-y align-center-middle">
        {createReviews}
      </div>
        {reviewTiles}
    </div>
  )
}

export default BookShowPage