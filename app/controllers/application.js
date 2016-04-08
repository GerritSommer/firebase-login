// app/controllers/application.js

import Ember from 'ember';

let Controller = Ember.Controller;
let service    = Ember.inject.service;

export default Controller.extend({

  session:  service(),

});
