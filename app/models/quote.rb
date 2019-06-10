class Quote < ApplicationRecord
	has_many :favorite_quotes
  has_many :favorited_by, through: :favorite_quotes, source: :list
end
