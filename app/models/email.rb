class Email < ApplicationRecord
    validates :email,
        :presence => :true,
        :format => {
            :with => /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i,
            :message => 'Must be a valid email address' 
        }
    validates :message, :presence => true
end
