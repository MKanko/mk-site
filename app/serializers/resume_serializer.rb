class ResumeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :text_content, :categories 
end
