import Ember from 'ember';

let Route   = Ember.Route;
let service = Ember.inject.service;

export default Route.extend({
  store:   service(),
  i18n:    service(),

  model() {
    return this.store.findAll('cocktail');
  }
});
