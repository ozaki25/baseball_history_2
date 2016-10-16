var _ = require('underscore');
var Backbone = require('backbone');
Backbone.Marionette = require('backbone.marionette');

module.exports = Backbone.Marionette.ItemView.extend({
    tagName: 'tr',
    template: _.template(
        `<td><%- date %></td>
        <td><%- team %></td>
        <td><%- result %></td>
        <td><%- starter %></td>
        <td><%- location %></td>
        <td><a class="detail-link btn btn-link btn-xs" href="#">詳細</a></td>`
    ),
    ui: {
        detailLink: 'a.detail-link',
    },
    events: {
        'click @ui.detailLink': 'onClickDetailLink',
    },
    onClickDetailLink: function(e) {
        e.preventDefault();
        open(this.model.getDetailUrl(), '_blank');
    },
});
