class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :text_content
      t.string :image
      t.belongs_to :blog, null: false, foreign_key: true

      t.timestamps
    end
  end
end
