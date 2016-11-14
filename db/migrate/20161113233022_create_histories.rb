class CreateHistories < ActiveRecord::Migration
  def change
    create_table :histories do |t|
      t.date :date
      t.string :result
      t.string :starter
      t.string :location
      t.references :team, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
