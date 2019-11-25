const express = require('express');
const bodyParser = require('body-parser');

require('./src/models/Person');
require('./src/models/Consult');

// Iniciando o App
const app = express();

//Iniciando o DB
// mongoose.connect("mongodb://192.168.99.100:27017/nodeapi", {
//   useNewUrlParser: true
// });

app.get('/', (req, res) => {
  return res.send('Clinica API');
});

app.use(`/api`, require('./src/routes'));

port = 8000;
app.listen(port, () => {
  console.log('Servidor em execução no port ' + port);
});
