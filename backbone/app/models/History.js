var Backbone = require('backbone');
var moment = require('moment');

module.exports = Backbone.Model.extend({
    getDetailUrl: function() {
        var date = moment(new Date(this.get('date'))).format('YYYYMMDD')
        return 'http://www.fighters.co.jp/gamelive/result/' + date + '01/'
    },
});
