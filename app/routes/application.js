// app/routes/application.js

import Ember from 'ember';

let Route   = Ember.Route;
let service = Ember.inject.service;

export default Route.extend({
  session:  service(),

  actions: {

    signIn(email = 't@t.de', password = 'pw') {
      let options = { email: email, password: password };
      this.get('session').authenticate('authenticator:torii', 'password', options);
      return;
    },

    signOut() {
      this.get('session').invalidate();
      return;
    }

  }
});
