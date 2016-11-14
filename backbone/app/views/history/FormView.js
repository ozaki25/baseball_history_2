require('bootstrap-datepicker');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.Marionette = require('backbone.marionette');
var SelectboxView = require('../../lib/SelectboxView');

module.exports = Backbone.Marionette.LayoutView.extend({
    tagName: 'form',
    className: 'form-horizontal',
    template: _.template(
        '<%= deleteBtn  %>' +
        '<div class="form-group">' +
          '<label class="col-sm-2 control-label" for="input_date">Date</label>'+
          '<div class="col-sm-10">' +
            '<input type="text" class="form-control input-sm" id="input_date" value="<%- date %>" />' +
          '</div>' +
        '</div>' +
        '<div class="form-group">' +
          '<label class="col-sm-2 control-label" for="input_team">Team</label>'+
          '<div id="select_team_region" class="col-sm-10"></div>' +
        '</div>' +
        '<div class="form-group">' +
          '<label class="col-sm-2 control-label" for="input_result">Result</label>'+
          '<div id="select_result_region" class="col-sm-10"></div>' +
        '</div>' +
        '<div class="form-group">' +
          '<label class="col-sm-2 control-label" for="input_starter">Starter</label>'+
          '<div class="col-sm-10">' +
            '<input type="text" class="form-control input-sm" id="input_starter" value="<%- starter %>" />' +
          '</div>' +
        '</div>' +
        '<div class="form-group">' +
          '<label class="col-sm-2 control-label" for="input_location">Location</label>'+
          '<div class="col-sm-10">' +
            '<input type="text" class="form-control input-sm" id="input_location" value="<%- location %>" />' +
          '</div>' +
        '</div>' +
        '<div class="form-group">' +
          '<div class="col-xs-12 col-sm-offset-2 col-sm-2">'+
            '<button type="button" class="btn btn-primary form-control" id="submit_history">Submit</button>' +
          '</div>' +
        '</div>'
    ),
    templateHelpers: function() {
        return {
            deleteBtn: this.model.isNew() ? '' : '<div class="clearfix">' +
                                                   '<button id="delete_history" class="btn btn-default btn-xs pull-right">' +
                                                     '<i class="fa fa-trash" />' +
                                                   '</button>' +
                                                 '</div>'
        }
    },
    ui: {
        inputDate    : '#input_date',
        inputStarter : '#input_starter',
        inputLocation: '#input_location',
        submitBtn    : '#submit_history',
        deleteBtn    : '#delete_history',
    },
    events: {
        'click @ui.submitBtn': 'onClickSubmit',
        'click @ui.deleteBtn': 'onClickDelete',
    },
    regions: {
        selectTeam  : '#select_team_region',
        selectResult: '#select_result_region',
    },
    initialize: function(options) {
        this.teams = options.teams;
    },
    onRender: function() {
        this.renderSelectTeam();
        this.renderSelectResult();
    },
    onShow: function() {
        this.$('#input_date').datepicker({
            language: 'ja',
            format: 'yyyy-mm-dd',
            autoclose: true,
            todayHighlight: true,
        });
    },
    renderSelectTeam: function() {
        var selectboxView = new SelectboxView({
            _id: 'input_team',
            _className: 'form-control input-sm',
            collection: this.teams,
            label: 'short_name',
            value: 'id',
        });
        this.getRegion('selectTeam').show(selectboxView);
    },
    renderSelectResult: function() {
        var collection = new Backbone.Collection([
            { label: '&#9675; 勝ち', value: 'win' },
            { label: '&#9679; 負け', value: 'lose' },
            { label: '&#9651; 引き分け', value: 'draw' },
        ]);
        var selectboxView = new SelectboxView({
            _id: 'input_result',
            _className: 'form-control input-sm',
            collection: collection,
            label: 'label',
            value: 'value',
        });
        this.getRegion('selectResult').show(selectboxView);
    },
    onClickSubmit: function(e) {
        e.preventDefault();
        this.model.save({
            date    : this.ui.inputDate.val().trim(),
            team_id : this.$('#input_team').val(),
            result  : this.$('#input_result').val(),
            starter : this.ui.inputStarter.val().trim(),
            location: this.ui.inputLocation.val().trim(),
        }, {
            wait: true
        });
        Backbone.history.navigate('histories', { trigger: true });
    },
    onClickDelete: function(e) {
        e.preventDefault();
        if(confirm('削除します')) {
            this.model.destroy({ wait: true });
            Backbone.history.navigate('/histories', { trigger: true });
        }
    },
});
