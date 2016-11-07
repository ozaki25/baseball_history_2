var _ = require('underscore');
var Backbone = require('backbone');
Backbone.Marionette = require('backbone.marionette');

var Histories  = require('../../collections/Histories');
var HeaderView = require('../HeaderView');
var MainView   = require('./MainView');

module.exports = Backbone.Marionette.LayoutView.extend({
    template: _.template(
        '<div id="header_region" />' +
        '<div id="main_region" />'
    ),
    regions: {
        headerRegion  : '#header_region',
        mainRegion    : '#main_region',
    },
    onRender: function() {
        this.renderHeader();
        this.renderMain();
    },
    renderHeader: function() {
        this.getRegion('headerRegion').show(new HeaderView());
    },
    renderMain: function() {
        var histories = new Histories();
        histories.fetch();
        this.getRegion('mainRegion').show(new MainView({ collection: histories }));
    },
});
