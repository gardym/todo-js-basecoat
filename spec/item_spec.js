var Item = require('../app/js/src/item');
var moment = require('moment');

describe('An item', function() {
  var item;

  describe('created more than 255 days ago', function() {
    beforeEach(function() {
      item = new Item("Test", false, moment().subtract(255, 'days'));
    });

    it('is critical', function() {
      expect(item.priority()).toEqual('critical');
    });
  });

  describe('created between 200 and 254 days ago', function() {
    beforeEach(function() {
      item = new Item("Test", false, moment().subtract(200, 'days'));
    });

    it('is important', function() {
      expect(item.priority()).toEqual('important');
    });
  });

  describe('created between 100 and 200 days ago', function() {
    beforeEach(function() {
      item = new Item("Test", false, moment().subtract(100, 'days'));
    });

    it('is a warning', function() {
      expect(item.priority()).toEqual('warn');
    });
  });

  describe('created less than 100 days ago', function() {
    beforeEach(function() {
      item = new Item("Test", false, moment().subtract(99, 'days'));
    });

    it('is a just information', function() {
      expect(item.priority()).toEqual('info');
    });
  });
});
