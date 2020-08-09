class PostsController < ApplicationController

    def index 
        posts = Post.all 
        render json: PostSerializer.new(posts) 
    end 

    def new 
        post = Post.new 
    end 

    def create 
        post = Post.create(post_params)
        render json: PostSerializer.new(post)
    end 

    def show 
        post = Post.find_by(id: params[:id])
        render json: PostSerializer.new(post)
    end 

    def edit 
        post = Post.find_by(id: params[:id])
        render json: PostSerializer.new(post)
    end 

    def update 
        post = Post.find_by(id: params[:id])
        post.update(post_params)
        post.save 
        render json: PostSerializer.new(post)
    end 

    def destroy 
        post = post.find_by(id: params[:id])
        post.destroy  
    end 

    private

    def post_params 
        params.require(:post).permit(:title, :text_content, :image)
    end 

end
