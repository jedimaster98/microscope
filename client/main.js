//  Meteor.subscribe('posts');
Template.layout.helpers({
  pageTitle: function() { return Session.get('pageTitle'); }
});

