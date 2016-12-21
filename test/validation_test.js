const assert = require('assert'),
      User = require('../src/user');

describe('validate data from database', () => {

  it('Test name is required', (done) => {
    const user = new User({ name: undefined });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name;

    assert(message === 'Name is required');
    done();
  });

  it('Test name length should longer than 2 characters', (done) => {
    const user = new User({ name: 'Al' });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name;

    assert(message === 'Name length must longer than 2 characters');
    done();
  });

  it('disallow invalid records form being saved', (done) => {
    const user = new User({ name: 'Al' });
    user.save()
      .catch((validationResult) => {
        const { message } = validationResult.errors.name;

        assert(message === 'Name length must longer than 2 characters');
        done();
      });
  });
});
