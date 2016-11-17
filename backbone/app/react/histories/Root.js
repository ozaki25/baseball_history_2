var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var History   = require('../../models/History');
var Histories = require('../../collections/Histories');
var Teams     = require('../../collections/Teams');
var Locations = require('../../collections/Locations');
var Main      = require('./Main');

module.exports = Backbone.View.extend({
    initialize: function(options) {
        var history   = new History({}, { collection: new Histories() });
        var histories = new Histories();
        var teams     = new Teams();
        var locations = new Locations();
        Backbone.$.when(
            teams.fetch(),
            locations.fetch()
        ).done(function() {
             var view = <Main history={history} histories={histories} teams={teams} locations={locations} />
            ReactDOM.render(view, document.getElementById('root_region'));
        });
    },
});
