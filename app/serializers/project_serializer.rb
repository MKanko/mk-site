class ProjectSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :technical_details, :image, :id, :project_link 
end
