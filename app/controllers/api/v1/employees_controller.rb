class Api::V1::EmployeesController < ApplicationController
  def index
    @employees = Employee.all

    render 'index.json.jbuilder'
  end
end
