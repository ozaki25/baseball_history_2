class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :long_name
      t.string :short_name
      t.string :league

      t.timestamps null: false
    end
  end
end
