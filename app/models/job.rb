class Job < ApplicationRecord
  belongs_to :bartender
  belongs_to :user
end
