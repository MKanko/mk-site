class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :text_content, :image, :id
end
