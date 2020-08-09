class PortfoliosController < ApplicationController

    def new
        portfolio = Portfolio.new
    end 

    def create 
        portfolio = Portfolio.create(portfolio_params)
        render json: PortfolioSerializer.new(portfolio)
    end 

    def show 
        portfolio = Portfolio.first 
        render json: PortfolioSerializer.new(portfolio)
    end 

    def edit 
        portfolio = Portfolio.first
        render json: PortfolioSerializer.new(portfolio)
    end 

    def update 
        portfolio = Portfolio.first
        portfolio.update(portfolio_params)
        portfolio.save
        render json: PortfolioSerializer.new(portfolio)
    end 

    def destroy
        portfolio = Portfolio.first.destroy 
    end 

    private 

    def portfolio_params 
        params.require(:portfolio).permit(:title, :text_content, :image)
    end 

end
