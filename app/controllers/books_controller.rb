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

  def edit
    @book = Book.find(params[:id])
  end

  def update
    @book = Book.find(params[:id])

    if @book.update(book_params)
      flash[:notification] = "Book updated"
      redirect_to "/books/#{params[:id]}"
    else 
      flash.now[:error] = @book.errors.full_messages.to_sentence
      render :edit
    end
  end

  def destroy
    @book = Book.find(params[:id])

    if @book.destroy
      flash.now[:notification] = "Book has been deleted."
      redirect_to root_path
    end
  end

  private

  def book_params
    params[:book].permit(:title, :authors, :year, :synopsis)
  end

