var $ = { };

var sandboxedModule = require('sandboxed-module');
var ItemsList = sandboxedModule.require('../app/js/src/items_list', {
  requires: {
    '../js/bower_components/jquery/dist/jquery.min': $,
  }
});

var ItemsList = require('../app/js/src/items_list');

describe('A list of items', function() {
  var itemsList;

  describe('when a new item is added', function() {
    beforeEach(function() {
      $ = { ajax: jasmine.createSpy() };

      itemsList = new ItemsList([]);
      itemsList.newItem();
    });

    it('is appended to the list', function() {
      expect(itemsList.items().length).toEqual(1);
    });

    it('is sent to the server', function() {
      expect($.ajax).toHaveBeenCalled();
    });
  });
});
