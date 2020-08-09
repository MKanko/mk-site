class BlogSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :text_content, :image, :posts
end
