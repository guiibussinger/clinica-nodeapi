const PacientController = require('./PacientController');
const MedicController = require('./MedicController');
const EmployeeController = require('./EmployeeController');

const PersonEnum = require('../config/personTypeEnum');

exports.create = async (req, res) => {
  try {
    const { body } = req;
    switch (body.type) {
      case PersonEnum.personTypeValue.pacient:
        await PacientController.create(body);
        break;
      case PersonEnum.personTypeValue.employee:
        await EmployeeController.create(body);
        break;
      case PersonEnum.personTypeValue.medic:
        await MedicController.create(body);
        break;
    }
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(400);
  }
};

exports.get = async (req, res) => {
  try {
    const {
      query: { type }
    } = req;
    let result;
    switch (parseInt(type)) {
      case PersonEnum.personTypeValue.pacient:
        result = await PacientController.get();
        break;
      case PersonEnum.personTypeValue.employee:
        result = await EmployeeController.get();
        break;
      case PersonEnum.personTypeValue.medic:
        result = await MedicController.get();
        break;
    }
    return res.json(result);
  } catch (error) {
    return res.sendStatus(400);
  }
};

exports.getById = async (req, res) => {
  try {
    const {
      query: { id, type }
    } = req;
    let result;
    switch (parseInt(type)) {
      case PersonEnum.personTypeValue.pacient:
        result = await PacientController.getById(id);
        break;
      case PersonEnum.personTypeValue.employee:
        result = await EmployeeController.getById(id);
        break;
      case PersonEnum.personTypeValue.medic:
        result = await MedicController.getById(id);
        break;
    }
    res.json(result);
  } catch (error) {
    return res.sendStatus(400);
  }
};

exports.update = async (req, res) => {
  try {
    const {
      body: { idPerson, ...body }
    } = req;
    switch (parseInt(body.type)) {
      case PersonEnum.personTypeValue.pacient:
        await PacientController.update(idPerson, body);
        break;
      case PersonEnum.personTypeValue.employee:
        await EmployeeController.update(idPerson, body);
        break;
      case PersonEnum.personTypeValue.medic:
        await MedicController.update(idPerson, body);
        break;
    }
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(400);
  }
};

exports.destroy = async (req, res) => {
  try {
    const {
      query: { id, type }
    } = req;
    switch (parseInt(type)) {
      case PersonEnum.personTypeValue.pacient:
        await PacientController.destroy(id);
        break;
      case PersonEnum.personTypeValue.employee:
        await EmployeeController.destroy(id);
        break;
      case PersonEnum.personTypeValue.medic:
        await MedicController.destroy(id);
        break;
    }
    res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(400);
  }
};
