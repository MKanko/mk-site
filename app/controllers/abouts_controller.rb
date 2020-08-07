class AboutsController < ApplicationController

    def new 
        about = About.new 
    end 

    def create
        about = About.create(about_params)
        render json: AboutSerializer.new(about)
    end  

    def show
        about = About.first
        render json: AboutSerializer.new(about)
    end 

    def edit 
       about = About.first
       render json: AboutSerializer.new(about) 
    end

    def update 
        about = About.first 
        about.update(about_params)
        about.save 
        render json: AboutSerializer.new(about)
    end 

    def destroy
        about = About.first.destroy 
    end 

    private

    def about_params
        params.require(:about).permit(:title, :text_content, :image)
    end 

end
