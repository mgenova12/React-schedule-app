class RemoveTimeFromPizza < ActiveRecord::Migration[5.0]
  def change
    remove_column :pizzas, :time, :string
    remove_column :pizzas, :name, :string
    add_column :pizzas, :time_id, :string
    add_column :pizzas, :name_id, :string
  end
end
