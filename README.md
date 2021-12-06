# Fantasy Book Reviews

This application allows users to browse a list of fantasy books and add reviews for each book.
For building this app I used the Open Library API. As a front end I used React.js and as a back end Ruby on Rails, and for styling I used Foundations and CSS.

## Dependencies
ruby version 3.0.2 <br>
gem install rails

## Installation

First clone the repo. In your terminal:

```
git clone https://github.com/LaunchAcademy/rails-6-boilerplate
cd rails-6-boilerplate 
bundle install
yarn install
```
If you prefer, **you can rename your project with the `mv` command.**
 After successfully cloning run the following commands in sequence:

```
bundle exec rake db:create
bundle exec rake db:migrate
bundle exec rake db:seed
```

## Instructions

* To create an account, navigate to the top right to sign up through a sign up form. The form requires adding a Username, First name, Last name, Email and Password.
* Once logged in, you can click on an each book within the book index page(referred to as the List of books link in the top left corner of the Home page) to add a rating
and below that, add a brief review.

## Future state

* Add a feature for signed in users to add books to the list. This would include adding a book title, author, year of first publication and a brief synopsis. 
* Add a role of admin who will need to approve newly added books and have an ability to edit and/or delete reviews and books from the database.
* Add a search bar to look for books based on the book title, author or a year.

# Project Links
https://github.com/DragoslavR/fantasy-books-review.git

#Author

<li><a href="https://github.com/DragoslavR">Dragoslav Radosavljevic</a></li>
