class FavoriteQuote < ApplicationRecord
	 belongs_to :list
  belongs_to :quote
end
