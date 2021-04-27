class BartendersController < ApplicationController
  before_action :set_bartender, only: [:show, :update, :destroy]

  # GET /bartenders
  def index
    @bartenders = Bartender.all

    render json: @bartenders
  end

  # GET /bartenders/1
  def show
    render json: @bartender
  end

  # POST /bartenders
  def create
    @bartender = Bartender.new(bartender_params)
    
    if @bartender.save
      @token = encode({id: @bartender.id})
      render json: {
        user: @bartender.attributes.except("password_digest"),
        token: @token
        }, status: :created
    else
      render json: @bartender.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bartenders/1
  def update
    if @bartender.update(bartender_params)
      render json: @bartender
    else
      render json: @bartender.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bartenders/1
  def destroy
    @bartender.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bartender
      @bartender = Bartender.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def bartender_params
      params.require(:bartender).permit(:name, :email, :password, :category, :intro, :bio, :skills, :rate, :img_url)
    end
end
