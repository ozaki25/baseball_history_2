var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    defaults: {
        longName: '',
        sortName: '',
        league: '',
    },
});
