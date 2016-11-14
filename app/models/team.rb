class Team < ActiveRecord::Base
  has_many :histories, dependent: :destroy
end
