json.array!(@histories) do |history|
  json.extract! history, :id, :date, :result, :starter, :location, :team
end
