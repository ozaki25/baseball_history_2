class History < ActiveRecord::Base
  belongs_to :team
  belongs_to :location
end
