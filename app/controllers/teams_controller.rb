class TeamsController < ApplicationController
  before_action :set_team, only: %i(show)

  # GET /teams
  def index
    @teams = Team.all
    render formats: :json
  end

  # GET /teams/1
  def show
    render formats: :json
  end

  private
  def set_team
    @team = Team.find(params[:id])
  end
end
