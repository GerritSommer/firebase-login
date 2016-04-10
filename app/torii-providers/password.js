// app/torii-providers/password.js
import Ember from 'ember';

let Obj     = Ember.Object;
let service = Ember.inject.service;

// Setup simple email/password authentication for torii -> firebase
// This is an interface between emberfire and torii
export default Obj.extend({
  auth: service(),

  // Authenticate the user
  open(options = {}) {
    let torii        = this.get('auth');
    options.provider = 'password';

    return torii.open("firebase", options);
  },

  // Verify if the user has a valid session or not
  restore() {
    return this.get("auth").fetch();
  },

  // log out
  invalidate() {
    return this.get("auth").close();
  }

});