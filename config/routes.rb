Rails.application.routes.draw do

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  resources :users, except: [:update, :destroy] do
    resources :trackers, except: :destroy
    resources :medications
  end

  resources :medications, only: :index
  resources :trackers, only: [:index, :create, :destroy]
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
