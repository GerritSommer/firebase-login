import Ember from 'ember';

/*
 * Sets the active class on the sidebar to toggle it in the mobile-view
 */

export default Ember.Component.extend({
  classNames:         [ 'row-offcanvas', 'wrapper', 'mobile-sidebar' ],
  classNameBindings:  [ 'active' ],

  active: false,

  actions: {
    toggleNavigation() {
      this.toggleProperty('active');
    }
  }
});
