var _ = require('underscore');
var Backbone = require('backbone');
Backbone.Marionette = require('backbone.marionette');

var History    = require('../../models/History');
var Histories  = require('../../collections/Histories');
var Teams      = require('../../collections/Teams');
var HeaderView = require('../HeaderView');
var MainView   = require('./MainView');

module.exports = Backbone.Marionette.LayoutView.extend({
    template: _.template(
        '<div id="header_region" />' +
        '<div id="main_region" />'
    ),
    regions: {
        headerRegion: '#header_region',
        mainRegion  : '#main_region',
    },
    initialize: function(options) {
        this.historyId = options.historyId;
    },
    onRender: function() {
        this.renderHeader();
        this.renderMain();
    },
    renderHeader: function() {
        this.getRegion('headerRegion').show(new HeaderView());
    },
    renderMain: function() {
        var history = new History({}, { collection: new Histories() });
        var teams = new Teams();
        if(this.historyId) history.set({ id: this.historyId });
        Backbone.$.when(
            history.has('id') ? history.fetch() : _.noop(),
            teams.fetch()
        ).done(function() {
            this.getRegion('mainRegion').show(new MainView({ model: history, teams: teams }));
        }.bind(this));
    },
});
