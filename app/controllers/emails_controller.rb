class EmailsController < ApplicationController

    def new 
        @email = Email.new 
    end 

    def create 
        @email = Email.new(params[:email])

        if @email.save
            # EmailsMailer.general_message(email).deliver
            EmailMailer.general_message(@email).deliver
            render json: {
                # status 200 message to user that email was sent successfully
            }
        else 
            render json: {
                # status 500 message with pointing to error - try again 
            }
        end 
    end 

    def thanks 
    end 

end
