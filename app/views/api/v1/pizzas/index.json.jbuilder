json.Morning do 
  json.Monday @MonMornings.each do |morning| 
    json.id morning.id
    json.day morning.day
    json.time_of_day morning.time_of_day
    json.name morning.name
    json.time morning.time
  end  
  
  json.Tuesday @TuesMornings.each do |morning| 
    json.id morning.id
    json.day morning.day
    json.time_of_day morning.time_of_day
    json.name morning.name
    json.time morning.time
  end  

  json.Wednesday @WedMornings.each do |morning| 
    json.id morning.id
    json.day morning.day
    json.time_of_day morning.time_of_day
    json.name morning.name
    json.time morning.time
  end 

  json.Thursday @ThursMornings.each do |morning| 
    json.id morning.id
    json.day morning.day
    json.time_of_day morning.time_of_day
    json.name morning.name
    json.time morning.time
  end  

  json.Friday @FriMornings.each do |morning| 
    json.id morning.id
    json.day morning.day
    json.time_of_day morning.time_of_day
    json.name morning.name
    json.time morning.time
  end  

  json.Saturday @SatMornings.each do |morning| 
    json.id morning.id
    json.day morning.day
    json.time_of_day morning.time_of_day
    json.name morning.name
    json.time morning.time
  end 

end





json.Afternoon do

  json.Monday @MonAfternoons.each do |afternoon| 
    json.id afternoon.id
    json.day afternoon.day
    json.time_of_day afternoon.time_of_day
    json.name afternoon.name
    json.time afternoon.time
  end

  json.Tuesday @TuesAfternoons.each do |afternoon| 
    json.id afternoon.id
    json.day afternoon.day
    json.time_of_day afternoon.time_of_day
    json.name afternoon.name
    json.time afternoon.time
  end

  json.Wednesday @WedAfternoons.each do |afternoon| 
    json.id afternoon.id
    json.day afternoon.day
    json.time_of_day afternoon.time_of_day
    json.name afternoon.name
    json.time afternoon.time
  end

  json.Thursday @ThursAfternoons.each do |afternoon| 
    json.id afternoon.id
    json.day afternoon.day
    json.time_of_day afternoon.time_of_day
    json.name afternoon.name
    json.time afternoon.time
  end

  json.Friday @FriAfternoons.each do |afternoon| 
    json.id afternoon.id
    json.day afternoon.day
    json.time_of_day afternoon.time_of_day
    json.name afternoon.name
    json.time afternoon.time
  end

  json.Saturday @SatAfternoons.each do |afternoon| 
    json.id afternoon.id
    json.day afternoon.day
    json.time_of_day afternoon.time_of_day
    json.name afternoon.name
    json.time afternoon.time
  end

end

