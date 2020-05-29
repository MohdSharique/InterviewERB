Rails.application.routes.draw do
  require 'sidekiq/web'
  mount Sidekiq::Web => '/sidekiq'
  
  resources :interviews
  resources :participants
  resources :sessions
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/home' => 'interviews#home'
  root 'interviews#index'
end
