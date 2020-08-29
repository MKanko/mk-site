class EmailMailer < ApplicationMailer
    # default from: "mkanko66@gmail.com"

    def general_message(email)
        @email = email
        mail(:to => "mkanko66@gmail.com", :from => email.email, :body => email.message, :subject => "You Have a Message From Your Website")
    end 
end
