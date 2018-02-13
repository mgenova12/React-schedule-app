# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do 
  Pizza.create(day:['Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday' ].sample ,time_of_day:['Morning', 'Afternoon'].sample , name: Faker::Name.first_name, time: '10:30-3')
end
