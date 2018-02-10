class CreatePizzas < ActiveRecord::Migration[5.0]
  def change
    create_table :pizzas do |t|
      t.string :day
      t.string :time_of_day
      t.string :name
      t.string :time

      t.timestamps
    end
  end
end
