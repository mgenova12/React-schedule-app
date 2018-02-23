Rails.application.routes.draw do

  get '/' => 'schedules#index'

  namespace :api do 
    namespace :v1 do 
      get '/pizza' => 'pizzas#index'
      post '/pizza' => 'pizzas#create'
      get '/pizza/:id' => 'pizzas#show'
      delete '/pizza/:id' => 'pizzas#destroy'

      get '/employees' => 'employees#index'
      
      get '/hours' => 'hours#index'


    end
  end

end
