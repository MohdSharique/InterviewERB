Rails.application.routes.draw do
  resources :interviews
  resources :participants
  resources :sessions
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root 'interviews#index'
end