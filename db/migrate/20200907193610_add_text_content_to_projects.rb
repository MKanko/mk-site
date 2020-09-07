class AddTextContentToProjects < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :text_content, :text
  end
end
