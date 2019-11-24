import uuid from "uuid";

const Person = mongoose.model("Person");

const create = async body => {
  const createEmployee = {
    ...body,
    idPerson: uuid.v1()
  };
  const employee = await Person.create(createEmployee);

  return res.json(employee);
};

const get = async id => {
  const employee = await Person.findById(id);

  return res.json(employee);
};

const update = async (body, id) => {
  const employee = await Person.findByIdAndUpdate(id, body, { new: true });

  return res.json(employee);
};

const destroy = async id => {
  await Person.findByIdAndDelete(id);

  return res.send();
};

module.exports = {
  create,
  get,
  update,
  destroy
};
