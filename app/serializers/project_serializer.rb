class ProjectSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :technical_detail, :image 
end
