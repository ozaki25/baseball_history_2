var Backbone = require('backbone');
var Team = require('../models/Team');

module.exports = Backbone.Collection.extend({
    model: Team,
    url: '/teams',
});
