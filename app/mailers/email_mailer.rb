class EmailMailer < ApplicationMailer
    default from: "mkanko66@gmail.com"

    def general_messages(email)
        @email = email
        mail(:to => "mkanko66@gmail.com", :subject => "You Have a Message From Your Website")
    end 
end
