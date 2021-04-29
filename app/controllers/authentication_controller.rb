class AuthenticationController < ApplicationController
  before_action :authorize_user_request, only: :user_verify


  def user_login
    @user = User.find_by(username: login_params[:username])
    if @user.authenticate(login_params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
      token = encode({id: @user.id})
      render json: {
        user: @user.attributes.except("password_digest"),
        token: token
        }, status: :ok
    else
      render json: { errors: 'unauthorized' }, status: :unauthorized
    end
  end

  
  def bartender_login
    @bartender = Bartender.find_by(name: login_params[:name])
    if @bartender.authenticate(login_params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
      token = encode({id: @bartender.id})
      render json: {
        user: @bartender.attributes.except("password_digest"),
        token: token
        }, status: :ok
    else
      render json: { errors: 'unauthorized' }, status: :unauthorized
    end
  end

  def user_verify
    render json: @current_user.attributes.except("password_digest"), status: :ok
  end

  def bartender_verify
    render json: @current_bartender.attributes.except("password_digest"), status: :ok
  end


  private

  def login_params
    params.require(:authentication).permit(:username, :password)
  end
end
