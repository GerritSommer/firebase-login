import DS from 'ember-data';

let { Model, attr, hasMany } = DS;

export default Model.extend({
  name:        attr('string'),
  type:        attr('string'),
  description: attr('string'),
  sortOrder:   attr('number'),

  // menuItems:   hasMany('menu-item')
  cocktails:   hasMany('cocktails')
});
