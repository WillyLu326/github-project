const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://localhost:27017/users_test');
  mongoose.connection
    .once('open', () => done() )
    .on('err', (err) => console.warn('Error', err));
})

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    // Ready to run next test
    done();
  });
});
