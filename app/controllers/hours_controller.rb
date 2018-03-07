class HoursController < ApplicationController
  def new
    @hour = Hour.new
    @hours = Hour.all
  end

  def create 
    Hour.create(
      time: params[:hour]['time'],
      am_pm: params[:hour]['am_pm']
    )

    redirect_to '/hours/new'
  end

end
