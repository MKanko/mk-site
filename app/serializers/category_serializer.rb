class CategorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :text_content, :secondary_text_content, :image, :id
end
