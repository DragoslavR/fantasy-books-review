class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :authors, null: false
      t.string :year, null: false
      t.text :synopsis, null: false
      t.string :isbn

      t.timestamps null: false
    end
  end
end
