import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BooksIndexPage from './books/BookIndex'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BooksIndexPage} />
        <Route exact path="/books" component={BooksIndexPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
