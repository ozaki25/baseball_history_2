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

teams = [
  { long_name: '北海道日本ハムファイターズ',   short_name: '日本ハム',     league: 'パ' },
  { long_name: '福岡ソフトバンクホークス',     short_name: 'ソフトバンク', league: 'パ' },
  { long_name: '千葉ロッテマリーンズ',         short_name: 'ロッテ',       league: 'パ' },
  { long_name: '埼玉西武ライオンズ',           short_name: '西武',         league: 'パ' },
  { long_name: 'オリックス・バファローズ',     short_name: 'オリックス',   league: 'パ' },
  { long_name: '東北楽天ゴールデンイーグルス', short_name: '楽天',         league: 'パ' },
  { long_name: '広島東洋カープ',               short_name: '広島',         league: 'セ' },
  { long_name: '読売ジャイアンツ',             short_name: '巨人',         league: 'セ' },
  { long_name: '横浜DeNAベイスターズ',         short_name: '横浜',         league: 'セ' },
  { long_name: '阪神タイガース',               short_name: '阪神',         league: 'セ' },
  { long_name: '東京ヤクルトスワローズ',       short_name: 'ヤクルト',     league: 'セ' },
  { long_name: '中日ドラゴンズ',               short_name: '中日',         league: 'セ' },

]

Team.create(teams)
