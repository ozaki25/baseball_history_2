var Backbone = require('backbone');
Backbone.Marionette = require('backbone.marionette');

var BackboneHistoriesRootView = require('./views/histories/RootView');
var BackboneHistoryRootView   = require('./views/history/RootView');
var ReactHistoriesRootView    = require('./react/histories/Root');
var ReactHistoryRootView      = require('./react/history/Root');

var historiesRouter = {
    ''                           : 'index',
    'backbone/histories'         : 'index',
    'backbone/histories/new'     : 'newHistory',
    'backbone/histories/:id/edit': 'edit',

    'react/histories'            : 'index',
    'react/histories/new'        : 'newHistory',
    'react/histories/:id/edit'   : 'edit',
};

var backboneHistoriesController = {
    index: function() {
        app.getRegion('rootRegion').show(new BackboneHistoriesRootView());
    },
    newHistory: function() {
        app.getRegion('rootRegion').show(new BackboneHistoryRootView());
    },
    edit: function(id) {
        app.getRegion('rootRegion').show(new BackboneHistoryRootView({ historyId: id }));
    },
};

var reactHistoriesController = {
    index: function() {
        app.getRegion('rootRegion').show(new ReactHistoriesRootView());
    },
    newHistory: function() {
        app.getRegion('rootRegion').show(new ReactHistoryRootView());
    },
    edit: function(id) {
        app.getRegion('rootRegion').show(new ReactHistoryRootView({ historyId: id }));
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
