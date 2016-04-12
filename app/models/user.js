// app/models/user.js
import Ember  from 'ember';
import DS     from 'ember-data';

let { Model, attr} = DS;
let computed       = Ember.computed;

export default Model.extend({
  firstName: attr('string'),
  lastName:  attr('string'),

  fullName:  computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })

});
