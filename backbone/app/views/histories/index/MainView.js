var _ = require('underscore');
var Backbone = require('backbone');
Backbone.Marionette = require('backbone.marionette');
var HistoriesView = require('./HistoriesView');

module.exports = Backbone.Marionette.LayoutView.extend({
    tagName: 'div',
    className: 'container',
    template: _.template('<div id="histories_region" />'),
    regions: {
        historiesRegion: '#histories_region',
    },
    onRender: function() {
        this.renderHistories()
    },
    renderHistories: function() {
        this.getRegion('historiesRegion').show(new HistoriesView({ collection: this.collection }));
    },
});
