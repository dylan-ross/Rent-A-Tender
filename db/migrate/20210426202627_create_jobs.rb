class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.references :bartender, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.datetime :date
      t.datetime :start_time
      t.datetime :end_time

      t.timestamps
    end
  end
end
