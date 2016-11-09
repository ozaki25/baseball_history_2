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
        '<td><a class="detail-link btn btn-link btn-xs" href="#">詳細</a></td>' +
        '<td><button class="btn btn-default btn-xs"><i class="fa fa-wrench control-history" /></button></td>'
    ),
    ui: {
        detailLink: 'a.detail-link',
        editIcon  : 'i.control-history',
    },
    events: {
        'click @ui.detailLink': 'onClickDetailLink',
        'click @ui.editIcon'  : 'onClickEditIcon',
    },
    onClickDetailLink: function(e) {
        e.preventDefault();
        open(this.model.getDetailUrl(), '_blank');
    },
    onClickEditIcon: function(e) {
        e.preventDefault();
        this.triggerMethod('click:edit');
    },
});
