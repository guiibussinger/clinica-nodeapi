const mongoose = require('mongoose');
const Person = mongoose.model('Person');
const uuid = require('uuid');

const create = async body => {
  const createPacient = {
    ...body,
    idPerson: uuid.v1()
  };
  const pacient = await Person.create(createPacient);
  return pacient;
};

const get = async () => {
  const pacient = await Person.find();
  return pacient;
};

const getById = async id => {
  const pacient = await Person.findById({ idPerson: id });
  return pacient;
};

const update = async (body, id) => {
  const pacient = await Person.update({ idPerson: id }, body);
  return pacient;
};

const destroy = async id => {
  const pacient = await Person.remove({ idPerson: id });
  return pacient;
};

module.exports = {
  create,
  get,
  getById,
  update,
  destroy
};
