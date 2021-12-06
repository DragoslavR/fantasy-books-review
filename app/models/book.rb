class Book < ApplicationRecord
  validates :title, presence: true
  validates :authors, presence: true

  has_many :reviews
  def authorList
    return (
      [self.authors]
    )
  end
end