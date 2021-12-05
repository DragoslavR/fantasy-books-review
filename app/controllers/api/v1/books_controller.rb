require "faraday"


class Api::V1::BooksController < ApplicationController
  def index
    url = "https://openlibrary.org/search.json?author=tolkien"
    api_response = Faraday.get(url)
    parsed_response = JSON.parse(api_response.body)
    render json: { books: parsed_response }
  end

  def show
    
    url = "https://openlibrary.org/works/#{params[:id]}.json"
    api_response = Faraday.get(url)
    parsed_response = JSON.parse(api_response.body)
    # binding.pry
    render json: parsed_response
    # render json: Book.find(params[:id])
    
  end
  
end