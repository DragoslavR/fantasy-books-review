Rails.application.routes.draw do
  devise_for :users
  
  root "homes#index"
  
  get "/books", to: "homes#index"
  get "/books/works/:key", to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :books, only: [:index, :show]
      resources :authors, only: [:show]

      resources :reviews, only: [:create]

      resources :users, only: [:index]
    end
  end
end
