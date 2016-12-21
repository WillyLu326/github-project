const express = require('express'),
      Book = require('./models/book'),
      router = express.Router();

module.exports = router;

// get all books
router.get('/books', (req, res) => {
    Book.find({}, (err, books) => {
        if (err) {
          res.send(err);
        } else {
          res.json(books);
        }
    });
});

// get single book
router.get('/books/:id', (req, res) => {
    Book.findOne({ _id: req.params.id }, (err, book) => {
        if (err) {
          res.send(err);
        } else {
          res.json(book);
        }
    });
});

// post a book
router.post('/books', (req, res) => {
    const body = req.body;
    const newBook = new Book();

    newBook.save((err, book) => {
      console.log(err);
      if (err) {
        res.send(err);
      } else {
        res.json({ message: 'Book successfully added!', book });
      }
    });
});

// edit a book
router.put('/books/:id', (req, res) => {
    Book.findById({ _id: req.params.id }, (err, book) => {
      if (err) {
        res.send(err);
      } else {
        Object.assign(book, req.body).save((err, book) => {
          if (err) {
            res.send(err);
          } else {
            res.json({ message: 'Book successfully updated!', book });
          }
        });
      }
    });
});

// delete a book
router.delete('/books/:id', (req, res) => {
  Book.remove({ _id:  req.params.id}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Book successfully deleted!', result });
    }
  });
})
