json.array!(@histories) do |history|
  json.extract! history, :id, :date, :team, :result, :starter, :location
  json.url history_url(history, format: :json)
end
