const express = require('express');
const routes = express.Router();

const PersonController = require('./controllers/PersonController');
const ConsultController = require('./controllers/ConsultController');

routes.get('/person', PersonController.get);
routes.post('/person', PersonController.create);
routes.get('/personById', PersonController.getById);
routes.put('/person', PersonController.update);
routes.delete('/person', PersonController.destroy);

routes.get('/consult', ConsultController.get);
routes.post('/consult', ConsultController.create);
routes.get('/consultById', ConsultController.getById);
routes.put('/consult', ConsultController.update);
routes.delete('/consult', ConsultController.destroy);

module.exports = routes;
