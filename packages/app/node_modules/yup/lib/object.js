"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = ObjectSchema;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _has = _interopRequireDefault(require("lodash/has"));

var _snakeCase2 = _interopRequireDefault(require("lodash/snakeCase"));

var _camelCase2 = _interopRequireDefault(require("lodash/camelCase"));

var _mapKeys = _interopRequireDefault(require("lodash/mapKeys"));

var _mapValues = _interopRequireDefault(require("lodash/mapValues"));

var _propertyExpr = require("property-expr");

var _mixed = _interopRequireDefault(require("./mixed"));

var _locale = require("./locale.js");

var _sortFields = _interopRequireDefault(require("./util/sortFields"));

var _sortByKeyOrder = _interopRequireDefault(require("./util/sortByKeyOrder"));

var _inherits = _interopRequireDefault(require("./util/inherits"));

var _runTests = _interopRequireDefault(require("./util/runTests"));

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var isObject = function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

function unknown(ctx, value) {
  var known = Object.keys(ctx.fields);
  return Object.keys(value).filter(function (key) {
    return known.indexOf(key) === -1;
  });
}

function ObjectSchema(spec) {
  var _this2 = this;

  if (!(this instanceof ObjectSchema)) return new ObjectSchema(spec);

  _mixed.default.call(this, {
    type: 'object',
    default: function _default() {
      var _this = this;

      if (!this._nodes.length) return undefined;
      var dft = {};

      this._nodes.forEach(function (key) {
        dft[key] = _this.fields[key].default ? _this.fields[key].default() : undefined;
      });

      return dft;
    }
  });

  this.fields = Object.create(null);
  this._sortErrors = (0, _sortByKeyOrder.default)([]);
  this._nodes = [];
  this._excludedEdges = [];
  this.withMutation(function () {
    _this2.transform(function coerce(value) {
      if (typeof value === 'string') {
        try {
          value = JSON.parse(value);
        } catch (err) {
          value = null;
        }
      }

      if (this.isType(value)) return value;
      return null;
    });

    if (spec) {
      _this2.shape(spec);
    }
  });
}

(0, _inherits.default)(ObjectSchema, _mixed.default, {
  _typeCheck: function _typeCheck(value) {
    return isObject(value) || typeof value === 'function';
  },
  _cast: function _cast(_value, options) {
    var _this3 = this;

    if (options === void 0) {
      options = {};
    }

    var value = _mixed.default.prototype._cast.call(this, _value); //should ignore nulls here


    if (value === undefined) return this.default();
    if (!this._typeCheck(value)) return value;
    var fields = this.fields;
    var strip = this._option('stripUnknown', options) === true;

    var props = this._nodes.concat(Object.keys(value).filter(function (v) {
      return _this3._nodes.indexOf(v) === -1;
    }));

    var intermediateValue = {}; // is filled during the transform below

    var innerOptions = (0, _extends2.default)({}, options, {
      parent: intermediateValue,
      __validating: options.__validating || false
    });
    var isChanged = false;

    for (var _iterator = _createForOfIteratorHelperLoose(props), _step; !(_step = _iterator()).done;) {
      var prop = _step.value;
      var field = fields[prop];
      var exists = (0, _has.default)(value, prop);

      if (field) {
        var fieldValue = void 0;
        var strict = field._options && field._options.strict; // safe to mutate since this is fired in sequence

        innerOptions.path = (options.path ? options.path + "." : '') + prop;
        innerOptions.value = value[prop];
        field = field.resolve(innerOptions);

        if (field._strip === true) {
          isChanged = isChanged || prop in value;
          continue;
        }

        fieldValue = !options.__validating || !strict ? field.cast(value[prop], innerOptions) : value[prop];

        if (fieldValue !== undefined) {
          intermediateValue[prop] = fieldValue;
        }
      } else if (exists && !strip) {
        intermediateValue[prop] = value[prop];
      }

      if (intermediateValue[prop] !== value[prop]) {
        isChanged = true;
      }
    }

    return isChanged ? intermediateValue : value;
  },

  /**
   * @typedef {Object} Ancestor
   * @property {Object} schema - a string property of SpecialType
   * @property {*} value - a number property of SpecialType
   */

  /**
   *
   * @param {*} _value
   * @param {Object}       opts
   * @param {string=}      opts.path
   * @param {*=}           opts.parent
   * @param {Object=}      opts.context
   * @param {boolean=}     opts.sync
   * @param {boolean=}     opts.stripUnknown
   * @param {boolean=}     opts.strict
   * @param {boolean=}     opts.recursive
   * @param {boolean=}     opts.abortEarly
   * @param {boolean=}     opts.__validating
   * @param {Object=}      opts.originalValue
   * @param {Ancestor[]=}  opts.from
   * @param {Object}       [opts.from]
   * @param {Function}     callback
   */
  _validate: function _validate(_value, opts, callback) {
    var _this4 = this;

    if (opts === void 0) {
      opts = {};
    }

    var errors = [];
    var _opts = opts,
        sync = _opts.sync,
        _opts$from = _opts.from,
        from = _opts$from === void 0 ? [] : _opts$from,
        _opts$originalValue = _opts.originalValue,
        originalValue = _opts$originalValue === void 0 ? _value : _opts$originalValue,
        _opts$abortEarly = _opts.abortEarly,
        abortEarly = _opts$abortEarly === void 0 ? this._options.abortEarly : _opts$abortEarly,
        _opts$recursive = _opts.recursive,
        recursive = _opts$recursive === void 0 ? this._options.recursive : _opts$recursive;
    from = [{
      schema: this,
      value: originalValue
    }].concat(from); // this flag is needed for handling `strict` correctly in the context of
    // validation vs just casting. e.g strict() on a field is only used when validating

    opts.__validating = true;
    opts.originalValue = originalValue;
    opts.from = from;

    _mixed.default.prototype._validate.call(this, _value, opts, function (err, value) {
      if (err) {
        if (abortEarly) return void callback(err);
        errors.push(err);
        value = err.value;
      }

      if (!recursive || !isObject(value)) {
        callback(errors[0] || null, value);
        return;
      }

      originalValue = originalValue || value;

      var tests = _this4._nodes.map(function (key) {
        return function (_, cb) {
          var path = key.indexOf('.') === -1 ? (opts.path ? opts.path + "." : '') + key : (opts.path || '') + "[\"" + key + "\"]";
          var field = _this4.fields[key];

          if (field && field.validate) {
            field.validate(value[key], (0, _extends2.default)({}, opts, {
              path: path,
              from: from,
              // inner fields are always strict:
              // 1. this isn't strict so the casting will also have cast inner values
              // 2. this is strict in which case the nested values weren't cast either
              strict: true,
              parent: value,
              originalValue: originalValue[key]
            }), cb);
            return;
          }

          cb(null);
        };
      });

      (0, _runTests.default)({
        sync: sync,
        tests: tests,
        value: value,
        errors: errors,
        endEarly: abortEarly,
        sort: _this4._sortErrors,
        path: opts.path
      }, callback);
    });
  },
  concat: function concat(schema) {
    var next = _mixed.default.prototype.concat.call(this, schema);

    next._nodes = (0, _sortFields.default)(next.fields, next._excludedEdges);
    return next;
  },
  shape: function shape(schema, excludes) {
    if (excludes === void 0) {
      excludes = [];
    }

    var next = this.clone();
    var fields = (0, _extends2.default)(next.fields, schema);
    next.fields = fields;
    next._sortErrors = (0, _sortByKeyOrder.default)(Object.keys(fields));

    if (excludes.length) {
      if (!Array.isArray(excludes[0])) excludes = [excludes];
      var keys = excludes.map(function (_ref) {
        var first = _ref[0],
            second = _ref[1];
        return first + "-" + second;
      });
      next._excludedEdges = next._excludedEdges.concat(keys);
    }

    next._nodes = (0, _sortFields.default)(fields, next._excludedEdges);
    return next;
  },
  from: function from(_from, to, alias) {
    var fromGetter = (0, _propertyExpr.getter)(_from, true);
    return this.transform(function (obj) {
      if (obj == null) return obj;
      var newObj = obj;

      if ((0, _has.default)(obj, _from)) {
        newObj = (0, _extends2.default)({}, obj);
        if (!alias) delete newObj[_from];
        newObj[to] = fromGetter(obj);
      }

      return newObj;
    });
  },
  noUnknown: function noUnknown(noAllow, message) {
    if (noAllow === void 0) {
      noAllow = true;
    }

    if (message === void 0) {
      message = _locale.object.noUnknown;
    }

    if (typeof noAllow === 'string') {
      message = noAllow;
      noAllow = true;
    }

    var next = this.test({
      name: 'noUnknown',
      exclusive: true,
      message: message,
      test: function test(value) {
        if (value == null) return true;
        var unknownKeys = unknown(this.schema, value);
        return !noAllow || unknownKeys.length === 0 || this.createError({
          params: {
            unknown: unknownKeys.join(', ')
          }
        });
      }
    });
    next._options.stripUnknown = noAllow;
    return next;
  },
  unknown: function unknown(allow, message) {
    if (allow === void 0) {
      allow = true;
    }

    if (message === void 0) {
      message = _locale.object.noUnknown;
    }

    return this.noUnknown(!allow, message);
  },
  transformKeys: function transformKeys(fn) {
    return this.transform(function (obj) {
      return obj && (0, _mapKeys.default)(obj, function (_, key) {
        return fn(key);
      });
    });
  },
  camelCase: function camelCase() {
    return this.transformKeys(_camelCase2.default);
  },
  snakeCase: function snakeCase() {
    return this.transformKeys(_snakeCase2.default);
  },
  constantCase: function constantCase() {
    return this.transformKeys(function (key) {
      return (0, _snakeCase2.default)(key).toUpperCase();
    });
  },
  describe: function describe() {
    var base = _mixed.default.prototype.describe.call(this);

    base.fields = (0, _mapValues.default)(this.fields, function (value) {
      return value.describe();
    });
    return base;
  }
});
module.exports = exports.default;