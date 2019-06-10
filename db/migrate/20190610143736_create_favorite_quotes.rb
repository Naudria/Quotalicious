class CreateFavoriteQuotes < ActiveRecord::Migration[5.2]
  def change
    create_table :favorite_quotes do |t|

      t.timestamps
    end
  end
end
