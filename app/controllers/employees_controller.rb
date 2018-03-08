class EmployeesController < ApplicationController
  layout "schedule"
  def new
    @employee = Employee.new
    @employees = Employee.all
  end

  def create
    Employee.create(
      name:params[:employee]['name']
    )

    redirect_to '/employees/new'
  end

end
