const mongoose = require('mongoose');

const ConsultSchema = new mongoose.Schema({
  idConsult: { type: String, required: true },
  idPacient: { type: String, required: true },
  idMedic: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: Date, default: Date.now }
});

mongoose.model('Consult', ConsultSchema);
