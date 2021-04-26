class CreateBartenders < ActiveRecord::Migration[6.1]
  def change
    create_table :bartenders do |t|
      t.string :name
      t.string :email
      t.string :password
      t.string :category
      t.text :intro
      t.text :bio
      t.string :skills
      t.integer :rate
      t.string :img_url

      t.timestamps
    end
  end
end
