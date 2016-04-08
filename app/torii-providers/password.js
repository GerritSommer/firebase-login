// app/torii-providers/password.js

import Ember from 'ember';

let Obj     = Ember.Object;
let service = Ember.inject.service;

export default Obj.extend({
  auth: service(),

  open(options = {}) {
    let torii        = this.get('auth');
    options.provider = 'password';

    return torii.open("firebase", {
      provider: 'password',
      email:    email,
      password: password
    });
  },

  restore() {
    return this.get("auth").fetch();
  },

  invalidate() {
    return this.get("auth").close();
  }

});