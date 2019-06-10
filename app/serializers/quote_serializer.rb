class QuoteSerializer < ActiveModel::Serializer
  attributes :id, :author, :body

  has_many :favorited_by, through: :favorite_quotes, source: :list
end
