var Backbone = require('backbone');
Backbone.Marionette = require('backbone.marionette');

var HistoriesRootView = require('./views/histories/RootView.js');
var HistoryRootView   = require('./views/history/RootView.js');

var historiesRouter = {
    ''                  : 'index',
    'histories'         : 'index',
    'histories/new'     : 'newHistory',
    'histories/:id/edit': 'edit',
};

var historiesController = {
    index: function() {
        app.getRegion('rootRegion').show(new HistoriesRootView());
    },
    newHistory: function() {
        app.getRegion('rootRegion').show(new HistoryRootView());
    },
    edit: function(id) {
        app.getRegion('rootRegion').show(new HistoryRootView({ historyId: id }));
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
