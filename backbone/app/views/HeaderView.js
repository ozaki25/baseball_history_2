var _ = require('underscore');
var Backbone = require('backbone');
Backbone.Marionette = require('backbone.marionette');

module.exports = Backbone.Marionette.ItemView.extend({
    tagName: 'nav',
    className: 'navbar navbar-default',
    template: _.template(
        '<div class="container">' +
          '<div class="navbar-header">' +
            '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar_links">' +
              '<span class="icon-bar"></span>' +
              '<span class="icon-bar"></span>' +
              '<span class="icon-bar"></span>' +
            '</button>' +
            '<a href="#" class="navbar-brand">Baseball History</a>' +
          '</div>' +
        '</div>'
    ),
});
