class RemoveTechnicalDetailFromProjects < ActiveRecord::Migration[6.0]
  def change
    remove_column :projects, :technical_detail, :string
  end
end
