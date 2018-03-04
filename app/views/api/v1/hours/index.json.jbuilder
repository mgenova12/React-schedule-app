json.array! @hours.each do |hour|
  json.id hour.id
  json.time hour.time
  json.am_pm hour.am_pm
end