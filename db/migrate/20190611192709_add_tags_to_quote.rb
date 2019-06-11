class AddTagsToQuote < ActiveRecord::Migration[5.2]
  def change
  	add_column :quotes, :tags, :string
  end
end
