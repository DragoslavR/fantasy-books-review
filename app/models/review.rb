class Review <ApplicationRecord
  validates :rating, presence: true
  validates :rating, numericality: { greated_than_or_equal_to: 0, less_than_or_equal_to: 5}
  validates :body, presence: true

  belongs_to :book
  belongs_to :user
end