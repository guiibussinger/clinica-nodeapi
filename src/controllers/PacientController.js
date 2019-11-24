const Person = mongoose.model("Person");

const create = async body => {
  const pacient = await Person.create(body);

  return res.json(pacient);
};

const get = async id =>{
  const pacient = await Person.findById(id);

  return res.json(pacient);
};

const update = async (body, id) =>{
  const pacient = await Person.findByIdAndUpdate(id, body, {new: true });

  return res.json(pacient);
};

const destroy = async id =>{
  await Person.findByIdAndDelete(id);

  return res.send();
};

module.exports = {
  create,
  get,
  update,
  destroy
};
