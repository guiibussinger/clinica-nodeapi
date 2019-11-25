const mongoose = require('mongoose');
const Person = mongoose.model('Person');

const create = async body => {
  const pacient = await Person.create(body);

  return pacient;
};

const get = async () => {
  const pacient = await Person.findById(id);
  return pacient;
};

const getById = async id => {
  const pacient = await Person.findById(id);

  return pacient;
};

const update = async (body, id) => {
  const pacient = await Person.findByIdAndUpdate(id, body);

  return pacient;
};

const destroy = async id => {
  const pacient = await Person.findByIdAndDelete(id);

  return pacient;
};

module.exports = {
  create,
  get,
  getById,
  update,
  destroy
};
