require "faraday"


class Api::V1::BooksController < ApplicationController
  def index
    url = "https://openlibrary.org/search.json?author=tolkien"
    api_response = Faraday.get(url)
    # binding.pry
    parsed_response = JSON.parse(api_response.body)
    # book_data = parsed_response["docs"]
    # binding.pry
    render json: { books: parsed_response }
  end

  def show
    render json: Book.find(params[:id]), include: 'reviews.user'
  end
  
end