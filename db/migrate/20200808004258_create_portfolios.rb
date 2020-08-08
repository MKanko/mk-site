class CreatePortfolios < ActiveRecord::Migration[6.0]
  def change
    create_table :portfolios do |t|
      t.string :title
      t.text :text_content
      t.string :image

      t.timestamps
    end
  end
end
