class AddGithubLinkToProjects < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :github_link, :string
  end
end
