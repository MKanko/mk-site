class AddTechnicalDetailToProjects < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :technical_details, :string, array: true, default: []
  end
end
