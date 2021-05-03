Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#user_login'
  get '/auth/verify', to: 'authentication#user_verify'
  post '/bar_auth/login', to: 'bar_auth#bartender_login'
  get '/bar_auth/verify', to: 'bar_auth#bartender_verify'
  get '/bartenders/:name', to: 'bartenders#show_by_category'
  resources :users, only: :create do
    resources :jobs
  end

  resources :jobs

  resources :bartenders, only: [:create, :index] do
    resources :jobs, only: [:index, :destroy]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
