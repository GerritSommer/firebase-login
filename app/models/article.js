import DS         from 'ember-data';
import PageObject from './page-object';

let { attr  } = DS;

export default PageObject.extend({
  body:  attr('string'),

});
