const express = require("express");
const bodyParser = require("body-parser");

// Iniciando o App
const app = express();

//Iniciando o DB
// mongoose.connect("mongodb://192.168.99.100:27017/nodeapi", {
//   useNewUrlParser: true
// });
requireDir("./src/models");

app.get("/", (req, res) => {
  return res.send("Clinica API");
});

app.use(`/api`, require("./src/routes"));

port = 8000;
app.listen(port, () => {
  console.log("Servidor em execução no port " + port);
});
