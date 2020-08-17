class AddProjectLinkToProjects < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :project_link, :string
  end
end
