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
    onRender: function() {
        this.renderForm()
    },
    renderForm: function() {
        this.getRegion('formRegion').show(new FormView({ collection: this.collection }));
    },
});
