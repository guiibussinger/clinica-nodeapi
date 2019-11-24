const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ConsultSchema = new mongoose.Schema({
  idConsult: { type: String, required: true },
  idPacient: { type: String, required: true },
  idMedic: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: Date, default: Date.now }
});

PersonSchema.plugin(mongoosePaginate);

mongoose.model("Consult", ConsultSchema);
