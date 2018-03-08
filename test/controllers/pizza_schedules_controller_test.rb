require 'test_helper'

class PizzaSchedulesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get pizza_schedules_index_url
    assert_response :success
  end

end
