class AuthenticationController < ApplicationController
  before_action :authorize_user_request, only: :user_verify


  def user_login
    @user = User.find_by(username: login_params[:username])
    if @user.authenticate(login_params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
      token = encode({id: @user.id})
      render json: {
        user: @user.as_json(except: "password_digest", include: :jobs),
        token: token
        }, status: :ok
    else
      render json: { errors: 'unauthorized' }, status: :unauthorized
    end
  end


  def user_verify
    render json: {
      user: @user.as_json(except: "password_digest", include: :jobs)
  }, status: :ok
  end

  private

  def login_params
    params.require(:authentication).permit(:username, :password)
  end
end
