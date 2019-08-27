// BEGIN-SNIPPET user-model
import DS from 'ember-data';
import { readOnly } from '@ember/object/computed';

import { validator, buildValidations } from 'ember-cp-validations';

const { Model, attr } = DS;

const Validations = buildValidations(
  {
    name: {
      description: 'name',
      validators: [
        validator('presence', true),
        validator('length', {
          min: 1,
          max: 15
        })
      ]
    },
  },
  {
    disabled: readOnly('model.validationsDisabled'),
  }
);

export default Model.extend(Validations, {
  name : attr('string'),
  validationsDisabled: true,
  validate() {
    this.set('validationsDisabled', false);
    return this._super(...arguments);
  },
});
// END-SNIPPET
