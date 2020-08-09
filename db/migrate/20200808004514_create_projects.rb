class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.string :technical_detail
      t.string :image
      t.belongs_to :portfolio, null: false, foreign_key: true

      t.timestamps
    end
  end
end
