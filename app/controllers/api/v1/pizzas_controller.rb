class Api::V1::PizzasController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index 
    @MonMornings = Pizza.where(time_of_day:'Morning').where(day:"Monday")
    @MonAfternoons = Pizza.where(time_of_day:'Afternoon').where(day:"Monday")
    
    @TuesMornings = Pizza.where(time_of_day:'Morning').where(day:"Tuesday")
    @TuesAfternoons = Pizza.where(time_of_day:'Afternoon').where(day:"Tuesday")
    
    @WedMornings = Pizza.where(time_of_day:'Morning').where(day:"Wednesday")
    @WedAfternoons = Pizza.where(time_of_day:'Afternoon').where(day:"Wednesday")
    
    @ThursMornings = Pizza.where(time_of_day:'Morning').where(day:"Thursday")
    @ThursAfternoons = Pizza.where(time_of_day:'Afternoon').where(day:"Thursday")
    
    @FriMornings = Pizza.where(time_of_day:'Morning').where(day:"Friday")
    @FriAfternoons = Pizza.where(time_of_day:'Afternoon').where(day:"Friday")
    
    @SatMornings = Pizza.where(time_of_day:'Morning').where(day:"Saturday")
    @SatAfternoons = Pizza.where(time_of_day:'Afternoon').where(day:"Saturday")

    render 'index.json.jbuilder'
  end

  def show 
    @pizza = Pizza.find_by(id: params[:id])

    render 'show.json.jbuilder'
  end

  def create 
    @pizza = Pizza.create!(
      id: params[:id],
      day: params[:day],
      time_of_day: params[:time_of_day]
    )

    render 'show.json.jbuilder'

  end

end
