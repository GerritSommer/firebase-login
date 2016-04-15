import Ember from 'ember';

let Route = Ember.Route;
let service = Ember.inject.service;

export default Route.extend({
  store: service(),

  model() {
    return this.get('store').createRecord('article');
  }
});
