json.Morning do 
  json.Monday @MonMornings.each do |morning| 
    json.id morning.id
    json.day morning.day
    json.time_of_day morning.time_of_day
    json.name_id morning.name_id
    json.time_id morning.time_id
  end  
  
  json.Tuesday @TuesMornings.each do |morning| 
    json.id morning.id
    json.day morning.day
    json.time_of_day morning.time_of_day
    json.name_id morning.name_id
    json.time_id morning.time_id
  end  

  json.Wednesday @WedMornings.each do |morning| 
    json.id morning.id
    json.day morning.day
    json.time_of_day morning.time_of_day
    json.name_id morning.name_id
    json.time_id morning.time_id
  end 

  json.Thursday @ThursMornings.each do |morning| 
    json.id morning.id
    json.day morning.day
    json.time_of_day morning.time_of_day
    json.name_id morning.name_id
    json.time_id morning.time_id
  end  

  json.Friday @FriMornings.each do |morning| 
    json.id morning.id
    json.day morning.day
    json.time_of_day morning.time_of_day
    json.name_id morning.name_id
    json.time_id morning.time_id
  end  

  json.Saturday @SatMornings.each do |morning| 
    json.id morning.id
    json.day morning.day
    json.time_of_day morning.time_of_day
    json.name_id morning.name_id
    json.time_id morning.time_id
  end 

end





json.Afternoon do

  json.Monday @MonAfternoons.each do |afternoon| 
    json.id afternoon.id
    json.day afternoon.day
    json.time_of_day afternoon.time_of_day
    json.name_id afternoon.name_id
    json.time_id afternoon.time_id
  end

  json.Tuesday @TuesAfternoons.each do |afternoon| 
    json.id afternoon.id
    json.day afternoon.day
    json.time_of_day afternoon.time_of_day
    json.name_id afternoon.name_id
    json.time_id afternoon.time_id
  end

  json.Wednesday @WedAfternoons.each do |afternoon| 
    json.id afternoon.id
    json.day afternoon.day
    json.time_of_day afternoon.time_of_day
    json.name_id afternoon.name_id
    json.time_id afternoon.time_id
  end

  json.Thursday @ThursAfternoons.each do |afternoon| 
    json.id afternoon.id
    json.day afternoon.day
    json.time_of_day afternoon.time_of_day
    json.name_id afternoon.name_id
    json.time_id afternoon.time_id
  end

  json.Friday @FriAfternoons.each do |afternoon| 
    json.id afternoon.id
    json.day afternoon.day
    json.time_of_day afternoon.time_of_day
    json.name_id afternoon.name_id
    json.time_id afternoon.time_id
  end

  json.Saturday @SatAfternoons.each do |afternoon| 
    json.id afternoon.id
    json.day afternoon.day
    json.time_of_day afternoon.time_of_day
    json.name_id afternoon.name_id
    json.time_id afternoon.time_id
  end

end

