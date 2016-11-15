var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var Histories  = require('../collections/Histories');

module.exports = Backbone.View.extend({
    initialize: function(options) {
        var histories = new Histories();
        histories.fetch().done(function() {
            console.log(histories);
        });
    },
});
