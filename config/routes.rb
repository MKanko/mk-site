Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
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
end
