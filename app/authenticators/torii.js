// app/authenticators/torii.js
//
import Ember              from 'ember';
import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';

let service = Ember.inject.service;

export default ToriiAuthenticator.extend({
  torii: service()
});