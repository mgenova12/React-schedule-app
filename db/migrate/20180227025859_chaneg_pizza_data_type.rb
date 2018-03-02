class ChanegPizzaDataType < ActiveRecord::Migration[5.0]
  def change
    change_column :pizzas, :hour_id, 'integer USING CAST(hour_id AS integer)'
    change_column :pizzas, :employee_id, 'integer USING CAST(employee_id AS integer)'
  end
end
