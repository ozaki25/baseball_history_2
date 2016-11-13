json.array!(@teams) do |team|
  json.extract! team, :id, :long_name, :short_name
end
