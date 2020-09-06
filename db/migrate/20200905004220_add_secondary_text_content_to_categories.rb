class AddSecondaryTextContentToCategories < ActiveRecord::Migration[6.0]
  def change
    add_column :categories, :secondary_text_content, :text
  end
end
