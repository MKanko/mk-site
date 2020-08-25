class AddSecondaryTitleToHomes < ActiveRecord::Migration[6.0]
  def change
    add_column :homes, :secondary_title, :string
  end
end
