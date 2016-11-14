class LocationsController < ApplicationController
  before_action :set_location, only: %i(show)

  # GET /locations
  def index
    @locations = Location.all
    render formats: :json
  end

  # GET /locations/1
  def show
    render formats: :json
  end

  private
  def set_location
    @location = Location.find(params[:id])
  end
end
