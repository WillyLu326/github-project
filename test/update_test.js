const assert = require('assert'),
      User = require('../src/user');

describe('Update data to the database', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    joe.save().then(() => done());
  });

  it('model instance set and save', (done) => {
    joe.set('name', 'Alex');
    joe.save()
      .then(() => User.findOne({ _id: joe._id }))
      .then(user => {
        assert(user.name === 'Alex');
        done();
      });
  });

  it('model instance update', (done) => {
    joe.update({ name: 'Alex' })
      .then(() => User.findOne({ _id: joe._id }))
      .then(user => {
        assert(user.name === 'Alex');
        done();
      });
  });

  it('model class update', (done) => {
    User.update({ name: 'Joe' }, { name: 'Alex' })
      .then(() => User.findOne({ _id: joe._id }))
      .then(user => {
        assert(user.name === 'Alex');
        done();
      });
  });

  it('model class findOneAndUpdate', (done) => {
    User.findOneAndUpdate({ name: 'Joe' }, { name: 'Alex' })
      .then(() => User.findOne({ _id: joe._id }))
      .then(user => {
        assert(user.name === 'Alex');
        done();
      });
  });

  it('model class findByIdAndUpdate', (done) => {
    User.findByIdAndUpdate(joe._id, { name: 'Alex' })
      .then(() => User.findOne({ _id: joe._id }))
      .then(user => {
        assert(user.name === 'Alex');
        done();
      });
  });
});
