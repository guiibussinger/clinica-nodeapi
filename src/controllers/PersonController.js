const PacientController = require('./PacientController');
const MedicController = require('./MedicController');
const EmployeeController = require('./EmployeeController');

const PersonEnum = require('../config/personTypeEnum');

exports.create = (req, res) => {
  const { body } = req;
  let result;
  switch (body.type) {
    case PersonEnum.personTypeValue.pacient:
      result = PacientController.create(body);
    case PersonEnum.personTypeValue.employee:
      result = EmployeeController.create(body);
    case PersonEnum.personTypeValue.medic:
      result = MedicController.create(body);
  }
  res.json(result);
};

exports.get = (req, res) => {
  const {
    params: { type }
  } = req;
  let result;
  switch (type) {
    case PersonEnum.personTypeValue.pacient:
      result = PacientController.get();
    case PersonEnum.personTypeValue.employee:
      result = EmployeeController.get();
    case PersonEnum.personTypeValue.medic:
      result = MedicController.get();
  }
  return res.json({ name: 'teste' });
  res.json(result);
};

exports.getById = (req, res) => {
  const {
    params: { id, type }
  } = req;
  let result;
  switch (type) {
    case PersonEnum.personTypeValue.pacient:
      result = PacientController.getById(id);
    case PersonEnum.personTypeValue.employee:
      result = EmployeeController.getById(id);
    case PersonEnum.personTypeValue.medic:
      result = MedicController.getById(id);
  }
  res.json(result);
};

exports.update = (req, res) => {
  const {
    body,
    params: { id }
  } = req;
  switch (params.type) {
    case PersonEnum.personTypeValue.pacient:
      PacientController.update(id, body);
    case PersonEnum.personTypeValue.employee:
      EmployeeController.update(id, body);
    case PersonEnum.personTypeValue.medic:
      MedicController.update(id, body);
  }
  res.send();
};

exports.destroy = (req, res) => {
  const {
    params: { id, type }
  } = req;
  switch (type) {
    case PersonEnum.personTypeValue.pacient:
      PacientController.destroy(id);
    case PersonEnum.personTypeValue.employee:
      EmployeeController.destroy(id);
    case PersonEnum.personTypeValue.medic:
      MedicController.destroy(id);
  }
  res.send();
};
