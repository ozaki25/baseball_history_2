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
    getDetailUrl: function() {
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
        var resultMark;
        switch (this.get('result').toLowerCase()) {
        case 'win':
            resultMark = '&#9675;';
            break;
        case 'lose':
            resultMark = '&#9679;';
            break;
        case 'draw':
            resultMark = '&#9651;';
            break;
        default:
            resultMark = '-';
            break;
        }
        return resultMark;
    },
});
