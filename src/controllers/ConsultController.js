const mongoose = require('mongoose');
const Consult = mongoose.model('Consult');
const uuid = require('uuid');

const create = async (req, res) => {
  try {
    const { body } = req;
    const consultToCreate = {
      idConsult: uuid.v1(),
      ...body
    };
    const consult = await Consult.create(consultToCreate);
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(400);
  }
};

const get = async (req, res) => {
  const consults = await Consult.find();
  return res.json(consults);
};

const getById = async (req, res) => {
  try {
    const {
      query: { id }
    } = req;
    const consult = await Consult.find({ idConsult: id });
    return res.json(consult);
  } catch (error) {
    return res.sendStatus(400);
  }
};

const update = async (req, res) => {
  try {
    const {
      body: { id, ...body }
    } = req;
    await Consult.update({ idConsult: id }, body);
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(400);
  }
};

const destroy = async (req, res) => {
  try {
    const {
      query: { id }
    } = req;
    await Consult.remove({ idConsult: id });
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(400);
  }
};

module.exports = {
  create,
  get,
  getById,
  update,
  destroy
};
