class EmailsController < ApplicationController

    def new 
        @email = Email.new 
    end

    def create 
        @email = Email.new(email_params)

        if @email.save
            EmailMailer.general_message(@email).deliver
            render json: {
                error: false,
                message: 'Your email was sent, thank you for your contact.'
            }
        else
            render json: {
                error: true,
                message: 'Your email must have a valid email address, and must have message content.'
            }
        end 
    end 

    private 

    def email_params 
        params.require(:email).permit(:name, :subject, :email, :message)
    end 

end
