class Pizza < ApplicationRecord
  has_many :employees
  has_many :hours
end
