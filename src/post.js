const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String
});

module.exports = postSchema;
