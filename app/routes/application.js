import Ember from 'ember';

let Route = Ember.Route;
let service = Ember.inject.service;

export default Route.extend({

  firebase: service(),

  beforeModel: function() {
    return this.get("session")
    .fetch()
    .catch(function() {});
  },

  actions: {

    signIn: function(email = 't@t.de', password = 'pw') {
      this.get("session").open("firebase", {
        provider: 'password',
        email:    email,
        password: password
      })
      return;
    },

    signOut: function() {
      this.get("session").close();
      return;
    }

  }
});
