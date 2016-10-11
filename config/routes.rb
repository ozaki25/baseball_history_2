Rails.application.routes.draw do
  root 'home#index'
  devise_for :users
  resources :histories, only: %i(index show create update destroy)
end
