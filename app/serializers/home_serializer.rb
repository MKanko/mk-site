class HomeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :text_content, :image, :display_phrases
end
