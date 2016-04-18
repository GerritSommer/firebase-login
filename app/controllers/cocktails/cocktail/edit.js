import Ember from 'ember';

export default Ember.Controller.extend({
  test: 'lala',
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
