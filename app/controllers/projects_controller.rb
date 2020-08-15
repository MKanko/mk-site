class ProjectsController < ApplicationController

    def index 
        projects = Project.all 
        render json: ProjectSerializer.new(projects)
    end 

    def new 
        project = Project.new 
    end 

    def create 
        project = Project.create(project_params)
        render json: ProjectSerializer.new(project)
    end 

    def show
        project = Project.find_by(id: params[:id])
        render json: ProjectSerializer.new(project)
    end 

    def edit 
        project = Project.find_by(id: params[:id])
        render json: ProjectSerializer.new(project)
    end 

    def update
        project = Project.find_by(id: params[:id])
        project.update(project_params)
        project.save 
        render json: ProjectSerializer.new(project)
    end 

    def destroy 
        project = Project.find_by(id: params[:id])
        project.destroy 
    end 

    private 

    def project_params 
        params.require(:project).permit(:name, :description, :image, :technical_details => [])
    end 

end
