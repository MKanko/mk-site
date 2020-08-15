class EmailsController < ApplicationController

    def new 
        email = Email.new 
    end 

    def create 
        email = Email.new(params[:email])

        if email.save
            EmailsMailer.general_message(email).deliver
            render json: {
                :thanks
            }
        else 
            render json: {
                :new 
            }
        end 
    end 

    def thanks 
    end 

end
