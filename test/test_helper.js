const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/users_test');
mongoose.connection
  .once('open', () => console.log('Good to go'))
  .on('err', (err) => console.warn('Error', err));
