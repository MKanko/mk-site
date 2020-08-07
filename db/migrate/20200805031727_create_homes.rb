class CreateHomes < ActiveRecord::Migration[6.0]
  def change
    create_table :homes do |t|
      t.string :title
      t.text :text_content
      t.string :image

      t.timestamps
    end
  end
end
