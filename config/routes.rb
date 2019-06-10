Rails.application.routes.draw do

  namespace :api do

    get 'list', to: 'lists#show', as: 'list_show'
    # post 'signup', to: 'lists#create', as: 'user_signup'
    # post 'login', to: 'lists#login', as: 'user_login'

    resources :lists do
      get :favorites, on: :member
      post :add_to_favorites, on: :member
      post :remove_from_favorites, on: :member
    end

    resources :quotes do
      get :favorited_by, on: :member
    end

  end

end
