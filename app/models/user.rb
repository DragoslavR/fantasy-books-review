class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true

  has_many :reviews
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
