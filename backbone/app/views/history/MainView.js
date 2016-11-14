var _ = require('underscore');
var Backbone = require('backbone');
Backbone.Marionette = require('backbone.marionette');
var FormView = require('./FormView');

module.exports = Backbone.Marionette.LayoutView.extend({
    tagName: 'div',
    className: 'container',
    template: _.template('<div id="form_region" />'),
    regions: {
        formRegion: '#form_region',
    },
    initialize: function(options) {
        this.teams = options.teams;
        this.locations = options.locations;
    },
    onRender: function() {
        this.renderForm();
    },
    renderForm: function() {
        this.getRegion('formRegion').show(new FormView({ model: this.model, teams: this.teams, locations: this.locations }));
    },
});
