const express = require('express');
const MongoClient = require('mongodb').MongoClient;

require('./src/models/Person');
require('./src/models/Consult');

// Iniciando o App
const app = express();

// conectando ao banco de dados local
MongoClient.connect('mongodb://127.0.0.1:27017/clinica', (error, db) => {
  if (error) return console.log(error);

  console.log('connected to database');
  db.close();
});

app.get('/', (req, res) => {
  return res.send('Clinica API');
});

app.use(`/api`, require('./src/routes'));

port = 8000;
app.listen(port, () => {
  console.log('Servidor em execução no port ' + port);
});
