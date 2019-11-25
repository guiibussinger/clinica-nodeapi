const mongoose = require('mongoose');
const Person = mongoose.model('Person');
const uuid = require('uuid');

const create = async body => {
  const createMedic = {
    ...body,
    idPerson: uuid.v1()
  };
  const medic = await Person.create(createMedic);
  return medic;
};

const get = async id => {
  const medic = await Person.find();
  return medic;
};

const getById = async id => {
  const medic = await Person.findById({ idPerson: id });
  return medic;
};

const update = async (body, id) => {
  const medic = await Person.update({ idPerson: id }, body);
  return medic;
};

const destroy = async id => {
  const medic = await Person.remove({ idPerson: id });
  return medic;
};

module.exports = {
  create,
  get,
  getById,
  update,
  destroy
};
