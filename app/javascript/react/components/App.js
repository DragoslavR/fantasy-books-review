import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BooksIndexPage from './books/BookIndex'
import BooksHomePage from './books/BookHome'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BooksHomePage} />
        <Route exact path="/books" component={BooksIndexPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
