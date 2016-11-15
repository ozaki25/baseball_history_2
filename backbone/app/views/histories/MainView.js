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
    childEvents: {
        'click:edit': 'onClickEdit',
    },
    onRender: function() {
        this.renderHistories()
    },
    renderHistories: function() {
        this.getRegion('historiesRegion').show(new HistoriesView({ collection: this.collection }));
    },
    onClickEdit: function(view) {
        Backbone.history.navigate('/backbone/histories/' + view.model.id + '/edit', { trigger: true });
    },
});
