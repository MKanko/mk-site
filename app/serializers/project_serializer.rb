class ProjectSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :technical_details, :image, :id, :project_link, :github_link 
end
