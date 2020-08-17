class SkillSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image, :image_web, :description
end
