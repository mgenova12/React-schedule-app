require 'test_helper'

class Api::V1::HoursControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_hours_index_url
    assert_response :success
  end

end
