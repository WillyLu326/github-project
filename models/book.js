const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, required: true },
    year: { type: Number, required: true, min: 1 },
    createdAt: { type: Date, default: Date.now }
  },
  {
    versionKey: false
  }
);

bookSchema.pre('save', (next) => {
    now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

module.exports = mongoose.model('Book', bookSchema);
