import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | my-component', function(hooks) {
  setupTest(hooks);

  test('it renders', async function(assert) {
    this.set('model', this.owner.lookup('service:store').createRecord('user'));

    this.owner.factoryFor('component:my-component').create({ model: this.model });
    assert.ok(true);
  });
});
