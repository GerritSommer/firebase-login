import Ember from 'ember';

let service  = Ember.inject.service;
let computed = Ember.computed;

export default Ember.Component.extend({
  classNames:  [ 'login' ],

  session:     service(),
  store:       service(),

  email:       '',
  password:    '',
  loginFailed: false,

  _signIn(options) {
    this.get('session').authenticate('authenticator:torii', 'password', options)
      .then(()=> {
        this.setProperties({
          email:       '',
          password:    '',
          loginFailed: false
        });
      })
      .catch((e)=> {
        this.set('loginFailed', true)
      });
  },

  actions: {

    signIn() {
      let options = {
        email:    this.get('email'),
        password: this.get('password')
      };

      if ( options.email && options.password ) {
        this._signIn(options);
      } else {
        this.set('loginFailed', true);
      }

      return;
    },

    signOut() {
      return this.get('session').invalidate();
      return;
    }

  }


});
