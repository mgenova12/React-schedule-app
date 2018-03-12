class AddScheduleIdAndStatusToPizza < ActiveRecord::Migration[5.0]
  def change
    add_column :pizzas, :status, :string, :default => "added"
    add_column :pizzas, :schedule_id, :integer
  end
end
