class BlogsController < ApplicationController

    def new 
        blog = Blog.new 
    end 

    def create 
        blog = Blog.create(blog_params)
        render json: BlogSerializer.new(blog)
    end 

    def show 
        blog = Blog.first 
        render json: BlogSerializer.new(blog)
    end 

    def edit 
        blog = Blog.first 
        render json: BlogSerializer.new(blog)
    end 

    def update
        blog = Blog.first 
        blog.update(blog_params)
        blog.save 
        render json: BlogSerializer.new(blog)
    end 

    def destroy
        blog = blog.first
        blog.destroy 
    end 

    private 

    def blog_params 
        params.require(:blog).permit(:title, :text_content, :image)
    end 

end
