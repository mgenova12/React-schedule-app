require 'test_helper'

class Schedule::PizzasControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get schedule_pizzas_index_url
    assert_response :success
  end

end
