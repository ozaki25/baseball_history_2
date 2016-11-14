class Location < ActiveRecord::Base
  has_many :histories, dependent: :destroy
end
