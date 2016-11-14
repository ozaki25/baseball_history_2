var _ = require('underscore');
var moment = require('moment');
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
          '<div class="form-inline col-sm-10">' +
            '<span id="select_date_year_region" class"form-group"></span>' +
            '&nbsp;年&nbsp;' +
            '<span id="select_date_month_region" class"form-group"></span>' +
            '&nbsp;月&nbsp;' +
            '<span id="select_date_day_region" class"form-group"></span>' +
            '&nbsp;日&nbsp;' +
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
          '<div id="select_location_region" class="col-sm-10"></div>' +
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
        inputStarter : '#input_starter',
        submitBtn    : '#submit_history',
        deleteBtn    : '#delete_history',
    },
    events: {
        'click @ui.submitBtn': 'onClickSubmit',
        'click @ui.deleteBtn': 'onClickDelete',
    },
    regions: {
        selectYear     : '#select_date_year_region',
        selectMonth    : '#select_date_month_region',
        selectDay      : '#select_date_day_region',
        selectTeam     : '#select_team_region',
        selectResult   : '#select_result_region',
        selectLocation : '#select_location_region',
    },
    initialize: function(options) {
        this.teams = options.teams;
        this.locations = options.locations;
        this.date = moment(new Date(this.model.get('date') || new Date()));
    },
    onRender: function() {
        this.renderSelectYear();
        this.renderSelectMonth();
        this.renderSelectDay();
        this.renderSelectTeam();
        this.renderSelectResult();
        this.renderSelectLocation();
    },
    renderSelectYear: function() {
        var year = moment(new Date()).year();
        var years = new Backbone.Collection(
            _.map(_.range(year, year - 10, -1), function(i) {
                return { id: i, year: i };
            })
        );
        var selectboxView = new SelectboxView({
            _id: 'input_date_year',
            _className: 'form-control input-sm',
            collection: years,
            label: 'year',
            value: 'year',
            selected: years.findWhere({ year: parseInt(this.date.format('YYYY')) }),
        });
        this.getRegion('selectYear').show(selectboxView);
    },
    renderSelectMonth: function() {
        var months = new Backbone.Collection(
            _.map(_.range(1, 13), function(i) {
                return { id: i, month: i };
            })
        );
        var selectboxView = new SelectboxView({
            _id: 'input_date_month',
            _className: 'form-control input-sm',
            collection: months,
            label: 'month',
            value: 'month',
            selected: months.findWhere({ month: parseInt(this.date.format('M')) }),
        });
        this.getRegion('selectMonth').show(selectboxView);
    },
    renderSelectDay: function() {
        var days = new Backbone.Collection(
            _.map(_.range(1, 32), function(i) {
                return { id: i, day: i };
            })
        );
        var selectboxView = new SelectboxView({
            _id: 'input_date_day',
            _className: 'form-control input-sm',
            collection: days,
            label: 'day',
            value: 'day',
            selected: days.findWhere({ day: parseInt(this.date.format('D')) }),
        });
        this.getRegion('selectDay').show(selectboxView);
    },
    renderSelectTeam: function() {
        var selectboxView = new SelectboxView({
            _id: 'input_team',
            _className: 'form-control input-sm',
            collection: this.teams,
            label: 'short_name',
            value: 'id',
            selected: this.teams.findWhere({ id: parseInt(this.model.get('team_id')) }),
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
            selected: collection.findWhere({ value: this.model.get('result') }),
        });
        this.getRegion('selectResult').show(selectboxView);
    },
    renderSelectLocation: function() {
        var selectboxView = new SelectboxView({
            _id: 'input_location',
            _className: 'form-control input-sm',
            collection: this.locations,
            label: 'short_name',
            value: 'id',
            selected: this.locations.findWhere({ id: parseInt(this.model.get('location_id')) }),
        });
        this.getRegion('selectLocation').show(selectboxView);
    },
    onClickSubmit: function(e) {
        e.preventDefault();
        var year = this.$('#input_date_year').val();
        var month = this.$('#input_date_month').val();
        var day = this.$('#input_date_day').val();
        var date = moment([year, parseInt(month - 1), day]);
        this.model.save({
            date       : date.format('YYYY-MM-DD'),
            team_id    : this.$('#input_team').val(),
            result     : this.$('#input_result').val(),
            starter    : this.ui.inputStarter.val().trim(),
            location_id: this.$('#input_location').val(),
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
