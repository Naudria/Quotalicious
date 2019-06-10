class CreateFavoriteQuotes < ActiveRecord::Migration[5.2]
  def change
    create_table :favorite_quotes do |t|
    	t.integer :quote_id
      t.integer :list_id
      t.timestamps
    end
  end
end
