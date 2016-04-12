// app/router.js
import Ember  from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', function() {
    this.route('new');
  });
  this.route('impressum');
  this.route('contact', { path: 'kontakt' });
});

export default Router;
