Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "homes#index"
  
  get "/books", to: "homes#index"
  get "/books/works/:key", to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :books, only: [:index, :show]
      resources :authors, only: [:show]

      resources :users, only: [:index]
    end
  end
end
