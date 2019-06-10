class FavoriteQuoteSerializer < ActiveModel::Serializer
  attributes :list_id, :quote_id

  belongs_to :list
  belongs_to :quote
end