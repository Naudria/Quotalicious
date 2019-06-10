class QuoteSerializer < ActiveModel::Serializer
  attributes :id, :author, :body
end
