class RemoveNullInBook < ActiveRecord::Migration[5.2]
  def change
    change_column :books, :avatar, :string, null: true
  end
end
