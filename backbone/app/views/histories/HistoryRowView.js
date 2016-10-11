var _ = require('underscore');
var Backbone = require('backbone');
Backbone.Marionette = require('backbone.marionette');

module.exports = Backbone.Marionette.ItemView.extend({
    tagName: 'tr',
    template: _.template(
        '<td><%- date %></td>' +
        '<td><%- team %></td>' +
        '<td><%- result %></td>' +
        '<td><%- starter %></td>' +
        '<td><%- location %></td>' +
        '<td><a href="http://www.fighters.co.jp"></a></td>'
    ),
});
