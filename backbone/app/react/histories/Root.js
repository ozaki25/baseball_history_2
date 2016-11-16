var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var Histories = require('../../collections/Histories');
var Main      = require('./Main');

module.exports = Backbone.View.extend({
    initialize: function(options) {
        var histories = new Histories();
        histories.fetch().done(function() {
            var view = <Main histories={histories} />
            ReactDOM.render(view, document.getElementById('root_region'));
        });
    },
});
