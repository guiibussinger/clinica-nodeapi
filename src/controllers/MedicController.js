const Person = mongoose.model("Person");

const create = async body => {
  const medic = await Person.create(body);

  return res.json(medic);
};

const get = async id =>{
  const medic = await Person.findById(id);

  return res.json(medic);
};

const update = async (body, id) =>{
  const medic = await Person.findByIdAndUpdate(id, body, {new: true });

  return res.json(medic);
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
