const PacientController = require("./PacientController");
const MedicController = require("./MedicController");
const EmployeeController = require("./EmployeeController");

const PersonEnum = require("../config/personTypeEnum");

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
  res.send(result);
};

exports.get = (req, res) => {
  const {
    params: { id, type }
  } = req;
  let result;
  switch (type) {
    case PersonEnum.personTypeValue.pacient:
      result = PacientController.get(id);
    case PersonEnum.personTypeValue.employee:
      result = EmployeeController.get(id);
    case PersonEnum.personTypeValue.medic:
      result = MedicController.get(id);
  }
  res.send(result);
};

exports.update = (req, res) => {
  const {
    body,
    params: { id }
  } = req;
  let result;
  switch (params.type) {
    case PersonEnum.personTypeValue.pacient:
      result = PacientController.update(id, body);
    case PersonEnum.personTypeValue.employee:
      result = EmployeeController.update(id, body);
    case PersonEnum.personTypeValue.medic:
      result = MedicController.update(id, body);
  }
  res.send(result);
};

exports.destroy = (req, res) => {
  const {
    params: { id, type }
  } = req;
  let result;
  switch (type) {
    case PersonEnum.personTypeValue.pacient:
      result = PacientController.destroy(id);
    case PersonEnum.personTypeValue.employee:
      result = EmployeeController.destroy(id);
    case PersonEnum.personTypeValue.medic:
      result = MedicController.destroy(id);
  }
  res.send(result);
};

exports.get(req, res);
