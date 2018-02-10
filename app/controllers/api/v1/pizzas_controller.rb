class Api::V1::PizzasController < ApplicationController
  def index 

    render 'index.json.jbuilder'
  end

end
