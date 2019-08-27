import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Validations | Disabling/Enabling validations', function(hooks) {
  setupTest(hooks);

  test('disabling and enabling validations works', function(assert) {
    run(() => {
      let record = this.owner.lookup('service:store').createRecord('validations-disabled', {
        name: ''
      });

      assert.ok(record.get('validations.isValid'));
      record.validate();

      assert.ok(record.get('validations.isInvalid'));
    });
  });
});
