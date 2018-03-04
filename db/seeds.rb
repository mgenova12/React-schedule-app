# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Pizza.destroy_all

15.times do 
  Pizza.create(day:['Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday' ].sample ,time_of_day:['Morning', 'Afternoon'].sample, employee_id:(1..8).to_a.sample, hour_id: (8..14).to_a.sample)
end

  # Employee.create(name:'Rudy')
  # Employee.create(name:'Tony')
  # Employee.create(name:'Marco')
  # Employee.create(name:'Debbie')
  # Employee.create(name:'Angie')
  # Employee.create(name:'Gianvonni')
  # Employee.create(name:'Anthony')
  # Employee.create(name:'Brenda')

  Hour.create!(time:'10:30-3', am_pm: 'AM')
  # Hour.create!(time:'11-4',am_pm: 'AM')
  # Hour.create!(time:'10-2', am_pm: 'AM')
  # Hour.create!(time:'3-10', am_pm: 'PM')
  # Hour.create!(time:'4-close', am_pm: 'PM')
  # Hour.create!(time:'5-close', am_pm: 'PM')
  # Hour.create!(time:'4-9', am_pm: 'PM')


