class EmailMailer < ApplicationMailer
    # default from: "mkanko66@gmail.com"

    def general_message(email)
        @email = email
        mail(:to => "mkanko66@gmail.com", :from => email.email, :body => gen_body(email), :subject => gen_subject_line(email))
    end

    def gen_body(email) 
        'From: ' + email.name + ' ' + email.email + ' ' + email.message 
    end 

    def gen_subject_line(email)
        'MK-Site: ' + email.email + ' ' + email.subject  
    end
end
