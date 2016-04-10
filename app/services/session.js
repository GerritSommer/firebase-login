// app/services/session.js
import Ember          from 'ember';
import DS             from 'ember-data';
import SessionService from 'ember-simple-auth/services/session';

let service = Ember.inject.service;
let { RSVP, isBlank, computed } = Ember;

export default SessionService.extend({
  store:    service(),
  firebase: service(),

  computed: computed('currentUser', function() {
    debugger
  }),

  _changeEmail(oldEmail, newEmail, password) {
    return new RSVP.Promise((resolve, reject) => {

      if ( isBlank(oldEmail) || isBlank(newEmail) || isBlank(password) ) {
        reject();
      } else {
        this.get('firebase').changeEmail({
          oldEmail : oldEmail,
          newEmail : newEmail,
          password : password
        }, function(error) {
          isBlank(error) ? resolve() : reject(error);
        });

      }
    });

  },

  _changePassword(email, oldPassword, newPassword) {
    return new RSVP.Promise((resolve, reject) => {

      if ( isBlank(email) || isBlank(oldPassword) || isBlank(newPassword) ) {
        reject();
      } else {
        this.get('firebase').changePassword({
          email :       email,
          oldPassword : oldPassword,
          newPassword : newPassword
        }, function(error) {
          isBlank(error) ? resolve() : reject(error);
        });
      }

    });
  },

  updateUser() {
    // change mail and pw
  },

  createUser(email, password) {
    if ( isBlank(email) || isBlank(password) ) reject();

    this.get('firebase').createUser({
      email:    email,
      password: password,
    }, (error, data) => {
      isBlank(error) ? resolve() : reject(error);
    });

  },

  // password of the user? how about remote remote deleting
  deleteUser(email, password) {
    return new RSVP.Promise((resolve, reject) => {
      if ( isBlank(email) || isBlank(password) ) reject();

      this.get('firebase').removeUser({
        email:     user,
        password : password
      }, function(error) {
        isBlank(error) ? resolve() : reject(error);
      });
    });

  },

  resetPassword(email) {
    return new RSVP.Promise((resolve, reject) => {
      if (isBlank(password)) reject();

      this.get('firebase').resetPassword({ email : email }, function(error) {
        isBlank(error) ? resolve() : reject(error);
      });

    });
  }

});

// Create a callback which logs the current auth state
// function authDataCallback(authData) {
//   if (authData) {
//     console.log("User " + authData.uid + " is logged in with " + authData.provider);
//   } else {
//     console.log("User is logged out");
//   }
// }
// // Register the callback to be fired every time auth state changes
// var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");
// ref.onAuth(authDataCallback);
// ref.offAuth(authDataCallback);
//

// Additionally, you can use the getAuth() method to synchronously check authentication state.

// var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");
// var authData = ref.getAuth();
// if (authData) {
//   console.log("User " + authData.uid + " is logged in with " + authData.provider);
// } else {
//   console.log("User is logged out");
// }