class ListSerializer < ActiveModel::Serializer
  attributes :id, :title

   has_many :favorite_quotes
  has_many :favorites, through: :favorite_quotes, source: :quote
end
