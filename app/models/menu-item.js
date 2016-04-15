import Ember from 'ember';
import DS    from 'ember-data';

let computed                   = Ember.computed;
let { Model, attr, belongsTo } = DS;
let { notEmpty, and }          = Ember.computed;

function isNumerical(value) {
  return !isNaN(parseFloat(value));
}

export default Model.extend({
  name:           attr('string'),
  description:    attr('string'),
  sortOrder:      attr('number'),
  price:          attr('number'),

  category:       belongsTo('category'),

  hasAName:       notEmpty('name'),
  hasAPrice:      notEmpty('name'),
  isValid:        and('priceIsANumber', 'hasAName'),

  priceIsANumber: computed(function() {
    let price = this.get('price');
    return this.get('hasAPrice') ? isNumerical(price) : false;
  })

});
