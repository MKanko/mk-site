class ContactSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :phone, :email, :link_1, :link_2
end
