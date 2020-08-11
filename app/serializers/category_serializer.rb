class CategorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :text_content, :image, :id
end
