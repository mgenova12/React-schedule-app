class Api::V1::PizzasController < ApplicationController
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

end