class Api::V1::BooksController < ApplicationController
  def index
    render json: Book.all 
  end

  def show
    render json: Book.find(params[:id]), include: 'reviews.user'
  end
  
end