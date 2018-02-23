class Api::V1::HoursController < ApplicationController
  def index
    @hours = Hour.all

    render 'index.json.jbuilder'
  end
end
