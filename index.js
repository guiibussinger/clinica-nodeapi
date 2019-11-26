const express = require('express');
const MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./src/models/Person');
require('./src/models/Consult');

// Iniciando o App
const app = express();

// conectando ao banco de dados local
// using mongodb
// MongoClient.connect('mongodb://127.0.0.1:27017/clinica', (error, db) => {
//   if (error) return console.log(error);

//   console.log('connected to database');
//   db.close();
// });

// using mangoose
mongoose.connect('mongodb://127.0.0.1:27017/clinica', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  console.log('connected to database');
});

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.get('/', (req, res) => {
  return res.send('Clinica API');
});

app.use(`/api`, require('./src/routes'));

port = 8000;
app.listen(port, () => {
  console.log('Servidor em execução no port ' + port);
});
