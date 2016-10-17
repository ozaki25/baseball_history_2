var _ = require('underscore');
var Backbone = require('backbone');
Backbone.Marionette = require('backbone.marionette');

module.exports = Backbone.Marionette.ItemView.extend({
    tagName: 'form',
    className: 'form-horizontal',
    template: _.template(
        '<div class="form-group">' +
          '<label class="col-sm-2 control-label" for="input_date">Date</label>'+
          '<div class="col-sm-10">' +
            '<input type="text" class="form-control input-sm" id="input_date" />' +
          '</div>' +
        '</div>' +
        '<div class="form-group">' +
          '<label class="col-sm-2 control-label" for="input_team">Team</label>'+
          '<div class="col-sm-10">' +
            '<input type="text" class="form-control input-sm" id="input_team" />' +
          '</div>' +
        '</div>' +
        '<div class="form-group">' +
          '<label class="col-sm-2 control-label" for="input_result">Result</label>'+
          '<div class="col-sm-10">' +
            '<select class="form-control input-sm" id="input_result">' +
              '<option>Win</option>' +
              '<option>Lose</option>' +
              '<option>Draw</option>' +
            '</select>' +
          '</div>' +
        '</div>' +
        '<div class="form-group">' +
          '<label class="col-sm-2 control-label" for="input_starter">Starter</label>'+
          '<div class="col-sm-10">' +
            '<input type="text" class="form-control input-sm" id="input_starter" />' +
          '</div>' +
        '</div>' +
        '<div class="form-group">' +
          '<label class="col-sm-2 control-label" for="input_location">Location</label>'+
          '<div class="col-sm-10">' +
            '<input type="text" class="form-control input-sm" id="input_location" />' +
          '</div>' +
        '</div>' +
        '<div class="form-group">' +
          '<div class="col-xs-12 col-sm-offset-2 col-sm-2">'+
            '<button type="button" class="btn btn-primary form-control" id="submit_history">Submit</button>' +
          '</div>' +
        '</div>'
    ),
    ui: {
        inputDate    : '#input_date',
        inputTeam    : '#input_team',
        inputResult  : '#input_result',
        inputStarter : '#input_starter',
        inputLocation: '#input_location',
        submitBtn    : '#submit_history',
    },
    events: {
        'click @ui.submitBtn': 'onSubmit',
    },
    onSubmit: function(e) {
        e.preventDefault();
        this.collection.create({
            date    : this.ui.inputDate.val().trim(),
            team    : this.ui.inputTeam.val().trim(),
            result  : this.ui.inputResult.val(),
            starter : this.ui.inputStarter.val().trim(),
            location: this.ui.inputLocation.val().trim(),
        }, {
            wait: true
        });
        Backbone.history.navigate('histories', { trigger: true });
    },
});
