Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#user_login'
  get '/auth/verify', to: 'authentication#user_verify'
  resources :users, only: :create do
    resources :jobs, shallow: true
  end

  resources :bartenders do
    resources :jobs, shallow: true
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
