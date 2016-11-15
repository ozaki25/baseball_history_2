var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var History    = require('../models/History');
var Histories  = require('../collections/Histories');
var Teams      = require('../collections/Teams');
var Locations  = require('../collections/Locations');
var SampleView = require('./components/Sample');

module.exports = Backbone.View.extend({
    initialize: function(options) {
        var historyId = options && options.historyId;
        var history   = new History({}, { collection: new Histories() });
        var teams     = new Teams();
        var locations = new Locations();
        if(historyId) history.set({ id: historyId });
        Backbone.$.when(
            history.has('id') ? history.fetch() : _.noop(),
            teams.fetch(),
            locations.fetch()
        ).done(function() {
            var view = <SampleView history={ history } teams={ teams } locations={ locations } />
            ReactDOM.render(view, document.getElementById('root_region'));
        });
    },
});
