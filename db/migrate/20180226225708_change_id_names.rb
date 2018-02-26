class ChangeIdNames < ActiveRecord::Migration[5.0]
  def change
    rename_column :pizzas, :name_id, :employee_id
    rename_column :pizzas, :time_id, :hour_id

  end
end
