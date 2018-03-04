class AddAmpMtoHours < ActiveRecord::Migration[5.0]
  def change
    add_column :hours, :am_pm, :string
  end
end
