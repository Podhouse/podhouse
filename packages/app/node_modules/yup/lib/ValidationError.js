"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = ValidationError;

var _printValue = _interopRequireDefault(require("./util/printValue"));

var strReg = /\$\{\s*(\w+)\s*\}/g;

function ValidationError(errors, value, field, type) {
  var _this = this;

  this.name = 'ValidationError';
  this.value = value;
  this.path = field;
  this.type = type;
  this.errors = [];
  this.inner = [];
  if (errors) [].concat(errors).forEach(function (err) {
    _this.errors = _this.errors.concat(err.errors || err);
    if (err.inner) _this.inner = _this.inner.concat(err.inner.length ? err.inner : err);
  });
  this.message = this.errors.length > 1 ? this.errors.length + " errors occurred" : this.errors[0];
  if (Error.captureStackTrace) Error.captureStackTrace(this, ValidationError);
}

ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;

ValidationError.isError = function (err) {
  return err && err.name === 'ValidationError';
};

ValidationError.formatError = function (message, params) {
  params.path = params.label || params.path || 'this';
  if (typeof message === 'string') return message.replace(strReg, function (_, key) {
    return (0, _printValue.default)(params[key]);
  });
  if (typeof message === 'function') return message(params);
  return message;
};

module.exports = exports.default;