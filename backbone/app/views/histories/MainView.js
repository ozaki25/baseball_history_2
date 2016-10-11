var _ = require('underscore');
var Backbone = require('backbone');
Backbone.Marionette = require('backbone.marionette');

module.exports = Backbone.Marionette.LayoutView.extend({
    tagName: 'div',
    className: 'container',
    template: _.template('<h1>Baseball History</h1>'),
});

