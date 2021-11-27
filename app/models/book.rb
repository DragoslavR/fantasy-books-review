class Book < ApplicationRecord
  validates :title, presence: true
  validates :authors, presence: true
  validates :year, presence: true
end