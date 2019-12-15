const mongoose = require('mongoose');
//config module:
const config = require('config');
const startupDebugger = require('debug')('app:startup')
const _ = require('./node_modules/lodash');
//validator package:
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
//helmet sluzy do ustawiania naglowkow:
const helmet = require('helmet');
//morgan sluzy do logowania zadan http:
const morgan = require('morgan');
const auth = require('./routes/auth')
const users = require('./routes/users');
const genres = require('./routes/genres');

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
// app.use('/node_modules/materialize-css/dist/css', express.static('public'));

app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/genres', genres);



// const taskSchema = new mongoose.Schema({
//   name: String,
//   description: String,
//   // addedDate: Date.now,
//   finishDate: {
//     type: Date
//   }
// })

// //Class Task:
// const Task = mongoose.model('Task', taskSchema);

// async function createTask() {
//   const task = new Task({
//     name: 'first task',
//     description: 'make a shopping list'
//   })

//   const result = await task.save();
// }





//process.env.NODE_ENV // defaultowo undefined 
// app.get(env) //defaultowo zwraca development
//jesli chcemy zmienic zmienna srodowiskowa to w terminalu wpisujemy set NODE_ENV=production

app.set('view engine', 'pug'); //set view engine name
app.set('views', './views'); //default path

// app.use(helmet());
// app.use(morgan(tiny));

// app.get('/', (req, res) => {
//   // res.send('u mnie działa');
//   const fileName = 'style.css';
//   res.sendFile(fileName, {
//     root: path.join(__dirname, '/public/css/')
//   });
//   res.set('Content-type', 'text/css');
//   res.render('index', {
//     title: "To Do App",
//     message: "hello"
//   })
// })
app.get('/api/users', (req, res) => {
  res.send('u mnie działa');
})
app.get("/asks", (res, reg) => {
  // odpytaj baze po emailu
  // user_id = email | task_list

  // zwroc dane z bazy danyc
  // obsluz błędne zapytania
  // obsłuz błędy
  res.json({
    test: true
  });
})
app.post("/api/auth", (req, res) => {
  // JWT 
  // zwrócić token do usera
  // zapisać po stronie klienta np. cookie albo localstorage
  // kiedy wysyłasz zapytania do serwera z aplikacji JS-front dokleić
  // header: Authentication: "Bearer LKJFLKAJSJLDKJASLKDJALSDJLAKSJDLKASJDLASJDLKASJDLKASJ"
})

//przykladowy schemat walidowanego obiektu w Joi:
// app.post('/api/courses', (req, res) => {
//   const schema = {
//     name: Joi.string().min(3).required()
//   }
// })
// const result = Joi.validate(req.body, schema);

// if (result.error) {
//   //wysyla zrozumiala dla uzytkownika wiadomosc bledu:
//   res.status(400).send(result.error.details[0].message);
//   return;
// }
// createTask();
//read the value port:
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))