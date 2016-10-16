var Backbone = require('backbone');
Backbone.Marionette = require('backbone.marionette');

var HistoriesRootView  = require('./views/histories/index/RootView.js');
var NewHistoryRootView = require('./views/histories/new/RootView.js');

var historiesRouter = {
    ""             : "index",
    "histories"    : "index",
    "histories/new": "newHistory",
};

var historiesController = {
    index: function() {
        app.getRegion('rootRegion').show(new HistoriesRootView());
    },
    newHistory: function() {
        app.getRegion('rootRegion').show(new NewHistoryRootView());
    },
};

var appRouter = Backbone.Marionette.AppRouter.extend({
    appRoutes: historiesRouter,
    controller: historiesController,
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
