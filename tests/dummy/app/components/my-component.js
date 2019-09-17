import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.myProp;
  },
  cheese: true,
  myProp: computed('cheese', 'model.validations.isValid', function() {
    return this.cheese;
  }),
});
