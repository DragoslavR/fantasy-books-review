class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :authors, null: false
      t.string :year 
      t.text :synopsis
      t.string :bookApiKey
      
      t.timestamps null: false
    end
  end
end
