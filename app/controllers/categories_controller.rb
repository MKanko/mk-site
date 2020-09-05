class CategoriesController < ApplicationController

    def index 
        categories = Category.all 
        render json: CategorySerializer.new(categories)
    end 

    def new 
        category = Category.new 
    end 

    def create 
        category = Resume.first.categories.create(category_params)
        render json: CategorySerializer.new(category)
    end 

    def show 
        category = Category.find_by(id: params[:id])
        render json: CategorySerializer.new(category)
    end
    
    def edit 
        category = Category.find_by(id: params[:id])
        render json: CategorySerializer.new(category)
    end

    def update
        category = Category.find_by(id: params[:id])
        category.update(category_params)
        category.save
        render json: CategorySerializer.new(category)
    end 

    def destroy
        category = Category.find_by(id: params[:id])
        category.destroy 
    end 

    private 

    def category_params 
        params.require(:category).permit(:title, :description, :text_content, :secondary_text_content, :image)
    end 

end
