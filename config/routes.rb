Rails.application.routes.draw do

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  
  resources :users, only: [:create, :show, :index]
  resource :home, except: [:index]
  resource :about, except: [:index]
  resource :portfolio, except: [:index]
  resources :projects
  resource :blog, except: [:index]
  resources :posts
  resource :resume, except: [:index]
  resources :categories
  resource :contact, except: [:index]
  resources :emails, only: [:create]
  resources :skills
  
end
