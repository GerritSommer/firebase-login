import Ember from 'ember';

let Route = Ember.Route;
let service = Ember.inject.service;

export default Route.extend({

  firebase: service(),
  authInterface: service(),

  // beforeModel: function() {
  //   return this.get("authInterface")
  //   .fetch()
  //   .catch(function() {});
  // },

  actions: {

    signIn: function(email = 't@t.de', password = 'pw') {
      this.get("authInterface").open("firebase", {
        provider: 'password',
        email:    email,
        password: password
      })
      return;
    },

    signOut: function() {
      this.get("authInterface").close();
      return;
    }

  }
});
