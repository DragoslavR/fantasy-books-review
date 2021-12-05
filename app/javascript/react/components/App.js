import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BooksIndexPage from './books/BookIndex'
import BooksHomePage from './books/BookHome'
import BookShowPage from './books/BookShow'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BooksHomePage} />
        <Route exact path="/books" component={BooksIndexPage} />
        <Route exact path="/books/works/:key" component={BookShowPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
