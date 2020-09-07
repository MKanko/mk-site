class EmailMailer < ApplicationMailer
    # default from: "mkanko66@gmail.com"

    def general_message(email)
        @email = email
        mail(:to => "mkanko66@gmail.com", :from => gen_from(email), :body => email.message, :subject => gen_subject_line(email))
    end
    
    def gen_from(email)
        'From: ' + email.name + ' ' + email.email   
    end
    
    def gen_subject_line(email) 
        email.email + ' Message from website: ' + email.subject 
    end
end
