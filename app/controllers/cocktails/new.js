import Ember from 'ember';

export default Ember.Controller.extend({

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
    }

  }
});
