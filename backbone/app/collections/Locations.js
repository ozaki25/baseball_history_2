var Backbone = require('backbone');
var Location = require('../models/Location');

module.exports = Backbone.Collection.extend({
    model: Location,
    url: '/locations',
});
