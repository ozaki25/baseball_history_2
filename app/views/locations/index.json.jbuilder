json.array!(@locations) do |location|
  json.extract! location, :id, :long_name, :short_name
end
