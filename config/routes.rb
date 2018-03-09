Rails.application.routes.draw do
  
  namespace :schedule do 
    get '/pizza' => 'pizzas#index'

    # get '/pizza/:id' => 'pizzas#show'
  end

  get '/hours/new' => 'hours#new'
  post '/hours' => 'hours#create'

  get '/employees/new' => 'employees#new'
  post '/employees' => 'employees#create'

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
