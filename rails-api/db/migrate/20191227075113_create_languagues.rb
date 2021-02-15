class CreateLanguagues < ActiveRecord::Migration[5.2]
  def change
    create_table :languagues do |t|
      t.string :name

      t.timestamps
    end
  end
end
