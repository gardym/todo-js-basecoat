var $ = require('../bower_components/jquery/dist/jquery.min.js');
var ko = require('../bower_components/knockout/build/output/knockout-latest');
var Item = require('./item');
var ItemsList = require('./items_list');

$(function() {
  var itemsList = new ItemsList([
    new Item("Wash the dishes", false, "2011-12-01"),
    new Item("Buy the groceries", false, "2014-01-01"),
    new Item("Do the thing", true, "2014-02-01")
  ]);

  ko.applyBindings(itemsList);
});
