var Backbone = require('backbone');
Backbone.Marionette = require('backbone.marionette');

var RootView// = require('./views/RootView.js');

var appRouter = Backbone.Marionette.AppRouter.extend({
    appRoutes: {
        "": "root",
    },
    controller: {
        root: function() {
            app.getRegion('rootRegion').show(new RootView());
        },
    }
});

var app = new Backbone.Marionette.Application({
    regions: {
        rootRegion: '#root_region',
    },
    onStart: function() {
        new appRouter();
        Backbone.history.start();
    }
});

app.start();
