class BarAuthController < ApplicationController
  before_action :authorize_bartender_request, only: :bartender_verify
  

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

  def bartender_verify
    render json: @current_bartender.attributes.except("password_digest"), status: :ok
  end

  def login_params
    params.require(:barAuthentication).permit(:name, :password)
  end

end
