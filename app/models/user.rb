class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true
    validates :username, uniqueness: true

    validate :confirm_admin_secret

    def confirm_admin_secret
        if self.admin_secret != ENV['ADMIN_SECRET']
            errors.add(:admin, "Admin secret is incorrect.")
        end          
    end
end
