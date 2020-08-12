class ContactsController < ApplicationController

    def new 
        contact = Contact.new 
    end

    def create 
        contact = Contact.create(contact_params)
        render json: ContactSerializer.new(contact)
    end 

    def show 
        contact = Contact.first 
        render json: ContactSerializer.new(contact)
    end 

    def edit 
        contact = Contact.first 
        render json: ContactSerializer.new(contact)
    end 

    def update 
        contact = Contact.first 
        contact.update(contact_params)
        contact.save 
        render json: ContactSerializer.new(contact)
    end 

    def destroy
        contact = Contact.first 
        contact.destroy 
    end 

    private 

    def contact_params 
        params.require(:contact).permit(:name, :phone, :email, :link_1, :link_2)
    end 


end
