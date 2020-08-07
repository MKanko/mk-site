class AboutSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :text_content, :image
end
