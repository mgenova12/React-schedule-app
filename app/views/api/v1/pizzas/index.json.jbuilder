json.Monday do
  json.Morning @MonMornings.each do |morning| 
    json.id morning.id
    json.day morning.day
    json.time_of_day morning.time_of_day
    json.name morning.name
    json.time morning.time
  end  

  json.Afternoon @MonAfternoons.each do |afternoon| 
    json.id afternoon.id
    json.day afternoon.day
    json.time_of_day afternoon.time_of_day
    json.name afternoon.name
    json.time afternoon.time
  end
end

json.Tuesday do
  json.Morning @TuesMornings.each do |morning| 
    json.id morning.id
    json.day morning.day
    json.time_of_day morning.time_of_day
    json.name morning.name
    json.time morning.time
  end  

  json.Afternoon @TuesAfternoons.each do |afternoon| 
    json.id afternoon.id
    json.day afternoon.day
    json.time_of_day afternoon.time_of_day
    json.name afternoon.name
    json.time afternoon.time
  end
end

json.Wednesday do
  json.Morning @WedMornings.each do |morning| 
    json.id morning.id
    json.day morning.day
    json.time_of_day morning.time_of_day
    json.name morning.name
    json.time morning.time
  end  

  json.Afternoon @WedAfternoons.each do |afternoon| 
    json.id afternoon.id
    json.day afternoon.day
    json.time_of_day afternoon.time_of_day
    json.name afternoon.name
    json.time afternoon.time
  end
end

json.Thursday do
  json.Morning @ThursMornings.each do |morning| 
    json.id morning.id
    json.day morning.day
    json.time_of_day morning.time_of_day
    json.name morning.name
    json.time morning.time
  end  

  json.Afternoon @ThursAfternoons.each do |afternoon| 
    json.id afternoon.id
    json.day afternoon.day
    json.time_of_day afternoon.time_of_day
    json.name afternoon.name
    json.time afternoon.time
  end
end

json.Friday do
  json.Morning @FriMornings.each do |morning| 
    json.id morning.id
    json.day morning.day
    json.time_of_day morning.time_of_day
    json.name morning.name
    json.time morning.time
  end  

  json.Afternoon @FriAfternoons.each do |afternoon| 
    json.id afternoon.id
    json.day afternoon.day
    json.time_of_day afternoon.time_of_day
    json.name afternoon.name
    json.time afternoon.time
  end
end

json.Saturday do
  json.Morning @SatMornings.each do |morning| 
    json.id morning.id
    json.day morning.day
    json.time_of_day morning.time_of_day
    json.name morning.name
    json.time morning.time
  end  

  json.Afternoon @SatAfternoons.each do |afternoon| 
    json.id afternoon.id
    json.day afternoon.day
    json.time_of_day afternoon.time_of_day
    json.name afternoon.name
    json.time afternoon.time
  end
end