class BooksController < ApplicationController
  before_action :authenticate_user!
  before_action :authorize_user, except: [:index]

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

  private

  def book_params
    params[:book].permit(:title, :authors, :year, :synopsis)
  end

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      flash[:notice] = "You do not have access to this page."
      redirect_to root_path
    end
  end
end
