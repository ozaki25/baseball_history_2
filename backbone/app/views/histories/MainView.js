var _ = require('underscore');
var Backbone = require('backbone');
Backbone.Marionette = require('backbone.marionette');
var IndexView = require('./IndexView');

module.exports = Backbone.Marionette.LayoutView.extend({
    tagName: 'div',
    className: 'container',
    template: _.template(
        '<div id="index_region" />'
    ),
    regions: {
        indexRegion: '#index_region',
    },
    onRender: function() {
        this.renderIndex()
    },
    renderIndex: function() {
        this.getRegion('indexRegion').show(new IndexView({ collection: this.collection }));
    },
});
