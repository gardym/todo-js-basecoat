var ko = require('../bower_components/knockout/build/output/knockout-latest');
var moment = require('../bower_components/moment/min/moment.min');

var Item = function Item(t, d, c) {
  this.title = t;
  this.isDone = ko.observable(d);

  this.created = moment(c);

  this.priority = ko.computed(function() {
    if(this.isDone()) {
      return 0;
    }

    var daysOld = moment().diff(this.created, 'days');

    if(daysOld >= 255) { 
      return "critical";
    } else if (daysOld >= 200) {
      return "important";
    } else if (daysOld >= 100) {
      return "warn";
    }

    return "info";

  }, this);
}

module.exports = Item;
