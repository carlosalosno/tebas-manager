(function(){Meteor.methods({
  'Items.insert': function (params) {
    Items.insert(params);
  }
});

}).call(this);
