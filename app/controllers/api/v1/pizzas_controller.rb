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
    if params[:time_of_day] == 'Morning'
      if params[:day] == 'Monday'
        @pizza = Pizza.where(time_of_day:'Morning').where(day:"Monday")
      elsif params[:day] == 'Tuesday'
        @pizza = Pizza.where(time_of_day:'Morning').where(day:"Tuesday")
      elsif params[:day] == 'Wednesday'
        @pizza = Pizza.where(time_of_day:'Morning').where(day:"Wednesday")
      elsif params[:day] == 'Thursday'
        @pizza = Pizza.where(time_of_day:'Morning').where(day:"Thursday")
      elsif params[:day] == 'Friday'
        @pizza = Pizza.where(time_of_day:'Morning').where(day:"Friday")
      elsif params[:day] == 'Saturday'
        @pizza = Pizza.where(time_of_day:'Morning').where(day:"Saturday")
      end
    end

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

  def update
    pizza = Pizza.find_by(id: params[:id])
    
    
    
  end


  def destroy
    pizza = Pizza.find_by(id: params[:id])

    pizza.destroy
  end

end
