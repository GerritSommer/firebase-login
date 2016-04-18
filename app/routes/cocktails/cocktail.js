import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate(controller, model) {
    this.render('cocktails/cocktail/edit', {
      into:   'cocktails',
      outlet: model.get('id')
    });
  },

  actions: {
  willTransition: function() {
      this.disconnectOutlet(this.context.id);
    }
  }
});
