var Backbone = require('backbone');
Backbone.Marionette = require('backbone.marionette');

var HistoryRootView = require('./views/histories/RootView.js');

var appRouter = Backbone.Marionette.AppRouter.extend({
    appRoutes: {
        ""         : "histories",
        "histories": "histories",
    },
    controller: {
        histories: function() {
            app.getRegion('rootRegion').show(new HistoryRootView());
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
