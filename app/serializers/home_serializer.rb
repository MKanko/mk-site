class HomeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :secondary_title, :text_content, :image, :display_phrases
end
