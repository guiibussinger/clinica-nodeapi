const express = require('express');
const routes = express.Router();

const PersonController = require('./controllers/PersonController');
const ConsultController = require('./controllers/ConsultController');

routes.get('/person', PersonController.get);
routes.post('/person', PersonController.create);
routes.get('/person/:id', PersonController.getById);
routes.put('/person/:id', PersonController.update);
routes.delete('/person/:id', PersonController.destroy);

routes.get('/consult', ConsultController.get);
routes.post('/consult', ConsultController.create);
routes.get('/consult/:id', ConsultController.getById);
routes.put('/consult/:id', ConsultController.update);
routes.delete('/consult/:id', ConsultController.destroy);

module.exports = routes;
