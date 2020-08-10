class CreateCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :categories do |t|
      t.string :title
      t.text :text_content
      t.string :image
      t.belongs_to :resume, null: false, foreign_key: true

      t.timestamps
    end
  end
end
