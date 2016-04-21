import Ember from 'ember';

let { computed } = Ember;
let computedFilterBy = Ember.computed.filterBy;

export default Ember.Controller.extend({

  uncategorized: computedFilterBy('model', 'category', true),

  actions: {

    saveCocktail() {
      let cocktail = this.get('model');

      if ( cocktail.get('isValid') ) {
        cocktail.save().then((cc)=> {
          this.transitionToRoute('cocktails');
        });
      } else {
        // TODO: Add validation feedback
        console.log('warning');
      }
      return;
    },

    cancel() {
      let cocktail = this.get('model');
      cocktail.rollbackAttributes();
      this.transitionToRoute('cocktails');
      return;
    },

    willTransition() {
      let cocktail = this.get('model');

      if ( cocktail.get('isDirty') ) {
        cocktail.rollbackAttributes();
      }

      return true;
    }
  }
});
