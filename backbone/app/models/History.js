var Backbone = require('backbone');
var moment = require('moment');

module.exports = Backbone.Model.extend({
    defaults: {
        date: '',
        result: '',
        starter: '',
        team_id: '',
        location_id: '',
    },
    detailUrl: function() {
        var date = moment(new Date(this.get('date'))).format('YYYYMMDD');
        return 'http://www.fighters.co.jp/gamelive/result/' + date + '01/';
    },
    shortTeamName: function() {
        return !!this.get('team') ? this.get('team').short_name : '';
    },
    shortLocationName: function() {
        return !!this.get('location') ? this.get('location').short_name : '';
    },
    resultMark: function() {
        var result = this.get('result').toLowerCase();
        return result === 'win' ? '○' :
               result === 'lose' ? '●' :
               result === 'draw' ? '△' :
               '-';
    },
    resultAndTeam: function() {
        return this.resultMark() + ' ' + this.shortTeamName();
    },
});
