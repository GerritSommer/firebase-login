import Ember                   from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

let Route   = Ember.Route;
let service = Ember.inject.service;

export default Route.extend(AuthenticatedRouteMixin, {
  store: service(),

  model() {
    return this.get('store').createRecord('cocktail');
  },

  actions: {

    saveCocktail() {
      let cocktail = this.modelFor('cocktails.new');

      if ( cocktail.get('isValid') ) {
        cocktail.save().then(()=> {
          this.transitionTo('cocktails');
        });
      } else {
        // TODO: Add validation feedback
        console.log('warning');
      }
      return;
    },

    cancel() {
      let cocktail = this.modelFor('cocktails.new');
      cocktail.unloadRecord();
      this.transitionTo('cocktails');
      return;
    },

    willTransition() {
      let cocktail = this.modelFor('cocktails.new');

      if ( cocktail.get('isNew') ) {
        cocktail.unloadRecord();
      }

      return true;
    }
  }


});
