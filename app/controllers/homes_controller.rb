class HomesController < ApplicationController

    def new 
        home = Home.new 
    end 

    def create 
        home = Home.create(home_params)
        render json: HomeSerializer.new(home)
    end 

    def show 
       home = Home.first 
       render json: HomeSerializer.new(home) 
    end 

    def edit 
        home = Home.first
        render json: HomeSerializer.new(home)
    end 

    def update
        home = Home.first
        home.update(home_params)
        home.save 
        render json: HomeSerializer.new(home)
    end

    def destroy
        home = Home.first.destroy 
    end 

    private

    def home_params
        params.require(:home).permit(:title, :text_content, :image)
    end 

end
