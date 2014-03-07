var ko = require('../bower_components/knockout/build/output/knockout-latest');
var Item = require('./item');
var $ = require('../bower_components/jquery/dist/jquery.min');

var ItemsList = function ItemsList(items) {
  var list = this;

  list.items = ko.observable(items);

  this.newItem = function() {
    var currentItems = list.items();
    currentItems.push(new Item("Added", false, "2014-03-06"));
    list.items(currentItems);

    $.ajax({ type: 'POST', data: 'New Item', url: 'http://localhost/items/new'})
      .done(function(data) { console.log(data); })
      .fail(function() { console.log("Failed"); });
  };
};

module.exports = ItemsList;
