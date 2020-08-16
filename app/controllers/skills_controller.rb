class SkillsController < ApplicationController

    def index 
        skills = Skills.all
        render json: SkillSerializer.new(skills) 
    end 

    def new
        skill = Skill.new 
    end

    def create 
        skill = Skill.create(skill_params)
        render json: SkillSerializer.new(skill)
    end 

    def show
        skill = Skill.find_by(id: params[:id])
        render json: SkillSerializer.new(skill)
    end 

    def edit 
        skill = Skill.find_by(id: params[:id])
        render json: SkillSerializer.new(skill)
    end 

    def update 
        skill = Skill.find_by(id: params[:id])
        skill.update(skill_params)
        skill.save 
        render json: SkillSerializer.new(skill)
    end 

    def destroy
        skill = Skill.find_by(id: params[:id])
        skill.destroy 
    end 

    private 

    def skill_params 
        params.require(:skill).permit(:name, :image, :image_web, :description)
    end 
    
end
