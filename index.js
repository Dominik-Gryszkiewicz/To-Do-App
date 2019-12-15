const mongoose = require('mongoose');
//config module:
const config = require('config');
// const startupDebugger = require('debug')('app:startup')
const _ = require('./node_modules/lodash');
//validator package:
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
//helmet sluzy do ustawiania naglowkow:
// const helmet = require('helmet');
//morgan sluzy do logowania zadan http:
// const morgan = require('morgan');
// const auth = require('./routes/auth');
const auth = require('./routes/auth1');
// const users = require('./routes/users');
const users = require('./routes/users1');
// const genres = require('./routes/genres');

if (!config.get('jwtPrivateKey')) {
  console.error('error: jwtPrivateKey is not defined');
  process.exit(1);
}

mongoose.connect('mongodb://localhost/todotasks')
  .then(() => console.log('connected to mongodb...'))
  .catch(err => console.error('nie polaczono z mongodb', err))


//create express:
const express = require('express');
const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);

app.set('view engine', 'pug'); //set view engine name
app.set('views', './views'); //default path


// Register new user:
app.post('/api/register', (req, res) => {
  console.log("FORMULARZ WYSŁANY")
  console.log(req.body)
  var u = new U(req.body)
  u.save((err, u) => {
    if (err) return console.error(err);
    console.log(u)
  })
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))