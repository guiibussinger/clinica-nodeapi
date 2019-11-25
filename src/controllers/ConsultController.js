const mongoose = require('mongoose');
const Consult = mongoose.model('Consult');

const create = async (req, res) => {
  const body = { req };
  const consult = await Consult.create(body);
  return res.json(consult);
};

const get = async (req, res) => {
  const consults = await Consult.get();
  return res.json(consults);
};

const getById = async (req, res) => {
  const {
    params: { id }
  } = req;
  const consult = await Consult.findById(id);
  return res.json(consult);
};

const update = async (req, res) => {
  const { body } = req;
  await Consult.findByIdAndUpdate(body.id, body);
  return res.send();
};

const destroy = async id => {
  await Consult.findByIdAndDelete(id);
  return res.send();
};

module.exports = {
  create,
  get,
  getById,
  update,
  destroy
};
