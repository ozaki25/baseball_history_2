# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

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

eagles = Team.find_by(short_name: '楽天')

locations = [
  { short_name: '札幌ドーム',       long_name: '札幌ドーム' },
  { short_name: '福岡ドーム',       long_name: '福岡ヤフオク!ドーム' },
  { short_name: '千葉マリン',       long_name: '千葉マリンスタジアム' },
  { short_name: '西武ドーム',       long_name: '西武プリンスドーム' },
  { short_name: '大阪ドーム',       long_name: '京セラドーム大阪' },
  { short_name: 'Koboパーク',       long_name: 'Koboパーク宮城' },
  { short_name: 'マツダスタジアム', long_name: 'MAZDA Zoom-Zoomスタジアム広島' },
  { short_name: '東京ドーム',       long_name: '東京ドーム' },
  { short_name: '横浜スタジアム',   long_name: '横浜スタジアム' },
  { short_name: '甲子園',           long_name: '阪神甲子園球場' },
  { short_name: '神宮球場',         long_name: '明治神宮野球場' },
  { short_name: 'ナゴヤドーム',     long_name: 'ナゴヤドーム' },
  { short_name: 'スタルヒン球場',   long_name: '花咲スポーツ公園硬式野球場' },
]

Location.create(locations)
tokyo_dome = Location.find_by(short_name: '東京ドーム')

histories = [
  { date: '2016-09-01', result: 'win', starter: '増井', location: tokyo_dome, team: eagles },
  { date: '2016-08-31', result: 'lose', starter: 'メンドーサ', location: tokyo_dome, team: eagles },
  { date: '2016-08-30', result: 'lose', starter: 'バース', location: tokyo_dome, team: eagles },
]

History.create(histories)
