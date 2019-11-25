const mongoose = require('mongoose');
const Consult = mongoose.model('Consult');
const uuid = require('uuid');

const create = async (req, res) => {
  const body = { req };
  const consultToCreate = {
    idConsult: uuid.v1(),
    ...body
  };
  const consult = await Consult.create(consultToCreate);
  return res.json(consult);
};

const get = async (req, res) => {
  const consults = await Consult.find();
  return res.json(consults);
};

const getById = async (req, res) => {
  const {
    params: { id }
  } = req;
  const consult = await Consult.find({ idConsult: id });
  return res.json(consult);
};

const update = async (req, res) => {
  const { body } = req;
  await Consult.update({ idConsult: body.id }, body);
  return res.send();
};

const destroy = async id => {
  await Consult.remove({ idConsult: id });
  return res.send();
};

module.exports = {
  create,
  get,
  getById,
  update,
  destroy
};
