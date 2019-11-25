import uuid from 'uuid';

const Person = mongoose.model('Person');

const create = async body => {
  const createEmployee = {
    ...body,
    idPerson: uuid.v1()
  };
  const employee = await Person.create(createEmployee);

  return employee;
};

const get = async () => {
  const employee = await Person.get();
  return employee;
};

const getById = async id => {
  const employee = await Person.findById(id);
  return employee;
};

const update = async (body, id) => {
  const employee = await Person.findByIdAndUpdate(id, body, { new: true });
  return employee;
};

const destroy = async id => {
  const employee = await Person.findByIdAndDelete(id);

  return employee;
};

module.exports = {
  create,
  get,
  getById,
  update,
  destroy
};
