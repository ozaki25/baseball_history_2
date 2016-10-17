var _ = require('underscore');
var Backbone = require('backbone');
Backbone.Marionette = require('backbone.marionette');

module.exports = Backbone.Marionette.ItemView.extend({
    tagName: 'table',
    className: 'table',
    template: _.template('<h1>histories form</h1>'),
});
