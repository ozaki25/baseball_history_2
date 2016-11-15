var Backbone = require('backbone');

var Histories  = require('../collections/Histories');

module.exports = Backbone.View.extend({
    initialize: function(options) {
        var histories = new Histories();
        histories.fetch().done(function() {
            console.log(histories);
        });
    },
});
