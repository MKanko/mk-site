class ResumesController < ApplicationController

    def new 
        resume = Resume.new 
    end 

    def create 
        resume = Resume.create(resume_params)
        render json: ResumeSerializer.new(resume)
    end 

    def show
        resume = Resume.first
        render json: ResumeSerializer.new(resume)
    end 

    def edit 
        resume = Resume.first
        render json: ResumeSerializer.new(resume)
    end 

    def update 
        resume = Resume.first 
        resume.update(resume_params)
        resume.save
        render json: ResumeSerializer.new(resume)
    end 

    def destroy
        resume = Resume.first
        resume.destroy 
    end 

    private 

    def resume_params
        params.require(:resume).permit(:title, :text_content)
    end 

end
