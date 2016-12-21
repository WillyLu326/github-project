const assert = require('assert'),
      User = require('../src/user');

describe('Reading data from database', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    joe.save()
      .then(() => done());
  });

  it('finds all users with a name of Joe', (done) => {
    User.find({ name: 'Joe' })
      .then(users => {
        assert(joe._id.toString() === users[0]._id.toString());
        done();
      });
  });

  it('find a user with name of Joe', (done) => {
    User.findOne({ name: 'Joe' })
      .then(user => {
        assert(user._id.toString() === joe._id.toString());
        done();
      });
  });

  it('find a user with particular id', (done) => {
    User.findOne({ _id: joe._id })
      .then(user => {
        assert(user.name === 'Joe');
        done();
      });
  });
  
});
