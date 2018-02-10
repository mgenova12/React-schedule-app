Rails.application.routes.draw do

  get '/' => 'schedules#index'

  namespace :api do 
    namespace :v1 do 
      get '/pizza' => 'pizzas#index'
    end
  end

end
