class BooksController < ApplicationController
  before_action :authenticate_user!

  def new
    @book = Book.new
  end

  def create
    @book = Book.new(book_params)

    if @book.save 
      flash[:notification]="Book saved successfully."
      redirect_to root_path
    else
      flash.now[:error] = @book.errors.full_messages.to_sentence
      render :new
    end
  end
end

  private

  def book_params
    params[:book].permit(:title, :authors, :year, :synopsis)
  end

