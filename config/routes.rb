Rails.application.routes.draw do

  get '/hours/new' => 'hours#new'
  post '/hours' => 'hours#create'

  get '/employees/new' => 'employees#new'
  post '/employees' => 'employees#create'

  get '/' => 'schedules#index'


  namespace :api do 
    namespace :v1 do 
      get '/pizza' => 'pizzas#index'
      post '/pizza' => 'pizzas#create'
      get '/pizza/:id' => 'pizzas#show'
      patch '/pizza/:id' => 'pizzas#update'
      delete '/pizza/:id' => 'pizzas#destroy'

      get '/employees' => 'employees#index'
      
      get '/hours' => 'hours#index'
    end
  end

end
