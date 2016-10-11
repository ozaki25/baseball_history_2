var Backbone = require('backbone');
var History = require('../models/History');

module.exports = Backbone.Collection.extend({
    model: History,
    url: '/histories',
});
