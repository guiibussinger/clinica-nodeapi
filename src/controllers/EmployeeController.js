const mongoose = require('mongoose');
const Person = mongoose.model('Person');
const uuid = require('uuid');

const create = async body => {
  const createEmployee = {
    ...body,
    idPerson: uuid.v1()
  };
  const employee = await Person.create(createEmployee);
  return employee;
};

const get = async () => {
  const employee = await Person.find();
  return employee;
};

const getById = async id => {
  const employee = await Person.findById({ idPerson: id });
  return employee;
};

const update = async (body, id) => {
  const employee = await Person.update({ idPerson: id }, body);
  return employee;
};

const destroy = async id => {
  const employee = await Person.remove({ idPerson: id });

  return employee;
};

module.exports = {
  create,
  get,
  getById,
  update,
  destroy
};
