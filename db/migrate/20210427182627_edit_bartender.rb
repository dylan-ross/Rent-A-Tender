class EditBartender < ActiveRecord::Migration[6.1]
  def change
    rename_column :bartenders, :password, :password_digest
  end
end
