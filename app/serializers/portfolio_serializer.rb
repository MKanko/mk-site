class PortfolioSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :text_content, :image 
end
