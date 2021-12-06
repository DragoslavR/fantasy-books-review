require "faraday"

class Api::V1::BooksController < ApplicationController
  def index
    url = "https://openlibrary.org/search.json?author=tolkien"
    api_response = Faraday.get(url)
    parsed_response = JSON.parse(api_response.body)
    render json: { books: parsed_response }
  end

  def show
    if(Book.exists?(bookApiKey: params[:id]))
      render json: Book.find_by(bookApiKey: params[:id]), include: "reviews.user"
    else
      url = "https://openlibrary.org/works/#{params[:id]}.json"
      api_response = Faraday.get(url)
      parsed_response = JSON.parse(api_response.body)
      Book.create(title: parsed_response["title"], authors: parsed_response["authors"][0]["author"]["key"], bookApiKey: params[:id])
      
      render json: parsed_response
    end
  end
  
end