class AddFieldToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :author, :string, null: false
    add_column :books, :publication_date, :date, null: false
    add_column :books, :supplier_id, :integer, null: false
    add_column :books, :width, :decimal, null: false
    add_column :books, :height, :decimal, null: false
    add_column :books, :size_unit_id, :integer, null: false, default: 1
    add_column :books, :translator, :string
    add_column :books, :cover_type_id, :integer, null: false, default: 1
    add_column :books, :total_page, :integer, null: false
    add_column :books, :description, :text, null: false
    add_column :books, :short_description, :text, null: false
    add_column :books, :avatar, :string, null: false
    add_column :books, :languague_id, :integer, null: false

    add_index :books, [:name, :supplier_id], unique: true
  end

end
