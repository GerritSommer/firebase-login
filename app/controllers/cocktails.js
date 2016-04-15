import Ember from 'ember';

let service = Ember.inject.service;

export default Ember.Controller.extend({
  session: service()
});
