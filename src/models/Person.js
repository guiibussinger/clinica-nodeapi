const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  idPerson: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  birth: { type: Date, required: true },
  document: { type: String, required: true },
  type: { type: Number, required: true, default: 0 },
  convenio: { type: Number, required: false },
  crm: { type: String, required: false },
  cargo: { type: String, required: false }
});

mongoose.model('Person', PersonSchema);
