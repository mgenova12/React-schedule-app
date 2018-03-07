require 'test_helper'

class HoursControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get hours_new_url
    assert_response :success
  end

end
