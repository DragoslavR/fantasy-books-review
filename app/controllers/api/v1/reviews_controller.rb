class Api::V1::ReviewsController < ApplicationController
  def create
      review = Review.new(review_params)
      review.user = current_user
      review.book = Book.find_by(bookApiKey: params[:book_id])
      if review.save
          render json: review
      else
          render json: {errors: review.errors.full_messages.to_sentence}
      end
  end

  private

  def review_params
      params.require(:review).permit(:rating, :body, :book_id)
  end
end