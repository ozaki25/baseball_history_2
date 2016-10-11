# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

History.create([
                 { date: '2016-09-01', team: '楽天', result: 'win', starter: '増井', location: '東京ドーム' },
                 { date: '2016-08-31', team: '楽天', result: 'lose', starter: 'メンドーサ', location: '東京ドーム' },
                 { date: '2016-08-30', team: '楽天', result: 'lose', starter: 'バース', location: '東京ドーム' },
               ])
