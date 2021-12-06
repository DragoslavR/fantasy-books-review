class BookSerializer < ActiveModel::Serializer
  attributes :id, :authorList, :title, :reviews
  has_many :reviews
end
