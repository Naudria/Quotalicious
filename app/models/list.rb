class List < ApplicationRecord
	has_many :favorite_quotes
  has_many :favorites, through: :favorite_quotes, source: :quote
end
