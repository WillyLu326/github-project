const express = require('express'),
      app = express(),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      cors = require('cors');
      router = require('./router');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://willylu:willylu@ds133358.mlab.com:33358/db-book');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(cors(), (req, res, next) => next());
app.use('/api', router);
app.use((req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function() {
    console.log('server started');
});
