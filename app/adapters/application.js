import Ember           from 'ember';
import FirebaseAdapter from 'emberfire/adapters/firebase';

let service = Ember.inject.service;

export default FirebaseAdapter.extend({
  firebase: service(),
});