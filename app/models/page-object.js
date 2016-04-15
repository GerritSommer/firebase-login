import DS from 'ember-data';

let { Model, attr, belongsTo } = DS;

export default Model.extend({
  title:   attr('string'),

  user: belongsTo('user')

});
