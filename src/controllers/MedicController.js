const mongoose = require('mongoose');
const Person = mongoose.model('Person');

const create = async body => {
  const medic = await Person.create(body);

  return medic;
};

const get = async id => {
  const medic = await Person.findById(id);

  return medic;
};

const getById = async id => {
  const medic = await Person.findById(id);
  return medic;
};

const update = async (body, id) => {
  const medic = await Person.findByIdAndUpdate(id, body);
  return medic;
};

const destroy = async id => {
  const medic = await Person.findByIdAndDelete(id);
  return medic;
};

module.exports = {
  create,
  get,
  getById,
  update,
  destroy
};
