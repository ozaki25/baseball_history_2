var Backbone = require('backbone');
Backbone.Marionette = require('backbone.marionette');

var HistoriesRootView = require('./views/histories/RootView.js');
var HistoryRootView   = require('./views/history/RootView.js');

var historiesRouter = {
    ''                           : 'index',
    'backbone/histories'         : 'index',
    'backbone/histories/new'     : 'newHistory',
    'backbone/histories/:id/edit': 'edit',
};

var backboneHistoriesController = {
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

var reactHistoriesController = {
    index: function() {

    },
    newHistory: function() {

    },
    edit: function(id) {

    },
};

var appRouter = Backbone.Marionette.AppRouter.extend({
    appRoutes: historiesRouter,
    controller: Backbone.history.getHash().indexOf('backbone') !== -1 ? backboneHistoriesController : reactHistoriesController,
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
