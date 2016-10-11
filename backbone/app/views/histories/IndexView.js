var _ = require('underscore');
var Backbone = require('backbone');
Backbone.Marionette = require('backbone.marionette');
var HistoryRowView = require('./HistoryRowView');

module.exports = Backbone.Marionette.CompositeView.extend({
    tagName: 'table',
    className: 'table',
    template: _.template(
        '<thead>' +
          '<tr>' +
            '<th>日付</th>' +
            '<th>対戦相手</th>' +
            '<th>勝敗</th>' +
            '<th>先発</th>' +
            '<th>球場</th>' +
            '<th>リンク</th>' +
          '</tr>' +
        '</thead>' +
        '<tbody id="histories_child_container" />'
    ),
    childView: HistoryRowView,
    childViewContainer: '#histories_child_container',
});
