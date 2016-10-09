class CreateHistories < ActiveRecord::Migration
  def change
    create_table :histories do |t|
      t.date :date
      t.string :team
      t.string :result
      t.string :starter
      t.string :location

      t.timestamps null: false
    end
  end
end
