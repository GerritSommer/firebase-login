import DS from 'ember-data';
import MenuItem from './menu-item';

let { attr } = DS;

export default MenuItem.extend({
  type: attr('string', { defaultValue: ()=> 'cocktail' })
});
