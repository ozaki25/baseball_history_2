var _ = require('underscore');
var Backbone = require('backbone');
Backbone.Marionette = require('backbone.marionette');
var HistoryView = require('./HistoryView');

module.exports = Backbone.Marionette.CompositeView.extend({
    tagName: 'table',
    className: 'table table-hover',
    template: _.template(
        '<tbody id="histories_child_container" />'
    ),
    childView: HistoryView,
    childViewContainer: '#histories_child_container',
});
