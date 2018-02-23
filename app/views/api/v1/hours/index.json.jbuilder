json.array! @hours.each do |hour|
  json.id hour.id
  json.time hour.time
end