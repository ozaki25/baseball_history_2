class HistoriesController < ApplicationController
  before_action :set_history, only: %i(show update destroy)

  # GET /histories
  def index
    @histories = History.all
    render formats: :json
  end

  # GET /histories/1
  def show
    render formats: :json
  end

  # POST /histories
  def create
    @history = History.new(history_params)
    if @history.save
      render :show, status: :created, location: @history
    else
      render json: @history.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /histories/1
  def update
    if @history.update(history_params)
      render :show, status: :ok, location: @history
    else
      render json: @history.errors, status: :unprocessable_entity
    end
  end

  # DELETE /histories/1
  def destroy
    @history.destroy
    head :no_content
  end

  private
  def set_history
    @history = History.find(params[:id])
  end

  def history_params
    params.require(:history).permit(:date, :team, :result, :starter, :location)
  end
end
