class BartendersController < ApplicationController
  before_action :set_bartender, only: [:show, :update, :destroy]

  def index
    @bartenders = Bartender.all

    render json: @bartenders, include: :jobs
  end

  def show
    render json: @bartender, include: :jobs 
  end

  def create
    @bartender = Bartender.new(bartender_params)
    
    if @bartender.save
      @token = encode({id: @bartender.id})
      render json: {
        bartender: @bartender.as_json(except: "password_digest", include: :jobs),
        token: @token
        }, status: :created
    else
      render json: @bartender.errors, status: :unprocessable_entity
    end
  end

  private
    def set_bartender
      @bartender = Bartender.find(params[:id])
    end

    def bartender_params
      params.require(:bartender).permit(:name, :email, :password, :category, :intro, :bio, :skills, :rate, :img_url)
    end
end
