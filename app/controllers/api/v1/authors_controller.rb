class Api::V1::AuthorsController < ApplicationController
  def show
    url = "https://openlibrary.org/authors/#{params[:id]}.json"
    api_response = Faraday.get(url)
    parsed_response = JSON.parse(api_response.body)
    # binding.pry
    render json: parsed_response
    
  end
end