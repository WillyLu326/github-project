const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
