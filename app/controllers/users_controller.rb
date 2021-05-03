class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  before_action :authorize_user_request, except: :create

  # # GET /users
  def index
    @users = User.all

    render json: @users, include: :jobs
  end

  # # GET /users/1
  # def show
  #   render json: @user
  # end

  # POST /users
  def create
    @user = User.new(user_params)
    
    if @user.save
      @token = encode({ id: @user.id })
      render json: {
        user: @user.as_json(except: "password_digest", include: :jobs),      
        token: @token
        }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
end
