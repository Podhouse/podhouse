exports.id = "server";
exports.modules = {

/***/ "./src/modules/User/UserLoader.ts":
/*!****************************************!*\
  !*** ./src/modules/User/UserLoader.ts ***!
  \****************************************/
/*! exports provided: default, getLoader, load, clearCache, loadUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return User; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLoader\", function() { return getLoader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"load\", function() { return load; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearCache\", function() { return clearCache; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadUsers\", function() { return loadUsers; });\n/* harmony import */ var _entria_graphql_mongoose_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @entria/graphql-mongoose-loader */ \"@entria/graphql-mongoose-loader\");\n/* harmony import */ var _entria_graphql_mongoose_loader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_entria_graphql_mongoose_loader__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dataloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dataloader */ \"dataloader\");\n/* harmony import */ var dataloader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dataloader__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UserModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserModel */ \"./src/modules/User/UserModel.ts\");\n/* harmony import */ var _utils_escapeRegex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/escapeRegex */ \"./src/utils/escapeRegex.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nclass User {\n  constructor(data) {\n    _defineProperty(this, \"id\", void 0);\n\n    _defineProperty(this, \"_id\", void 0);\n\n    _defineProperty(this, \"email\", void 0);\n\n    _defineProperty(this, \"password\", void 0);\n\n    this.id = data._id;\n    this._id = data._id;\n    this.email = data.email;\n  }\n\n}\nconst getLoader = () => new dataloader__WEBPACK_IMPORTED_MODULE_1___default.a(ids => Object(_entria_graphql_mongoose_loader__WEBPACK_IMPORTED_MODULE_0__[\"mongooseLoader\"])(_UserModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], ids));\n\nconst viewerCanSee = () => true;\n\nconst load = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (context, id) {\n    if (!id && typeof id !== \"string\") {\n      return null;\n    }\n\n    let data;\n\n    try {\n      data = yield context.dataloaders.UserLoader.load(id);\n    } catch (err) {\n      return null;\n    }\n\n    return viewerCanSee() ? new User(data) : null;\n  });\n\n  return function load(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\nconst clearCache = ({\n  dataloaders\n}, id) => dataloaders.UserLoader.clear(id.toString());\nconst loadUsers = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator(function* (context, args) {\n    const defaultWhere = {\n      removedAt: null\n    };\n    const where = args.search ? _objectSpread(_objectSpread({}, defaultWhere), {}, {\n      name: {\n        $regex: new RegExp(`^${Object(_utils_escapeRegex__WEBPACK_IMPORTED_MODULE_3__[\"escapeRegex\"])(args.search)}`, \"ig\")\n      }\n    }) : defaultWhere;\n    const users = _UserModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(where, {\n      _id: 1\n    }).sort({\n      createdAt: -1\n    }).lean();\n    return Object(_entria_graphql_mongoose_loader__WEBPACK_IMPORTED_MODULE_0__[\"connectionFromMongoCursor\"])({\n      cursor: users,\n      context,\n      args,\n      loader: load\n    });\n  });\n\n  return function loadUsers(_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9Vc2VyL1VzZXJMb2FkZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Vc2VyL1VzZXJMb2FkZXIudHM/YWIyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykgeyB0cnkgeyB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7IHZhciB2YWx1ZSA9IGluZm8udmFsdWU7IH0gY2F0Y2ggKGVycm9yKSB7IHJlamVjdChlcnJvcik7IHJldHVybjsgfSBpZiAoaW5mby5kb25lKSB7IHJlc29sdmUodmFsdWUpOyB9IGVsc2UgeyBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7IH0gfVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgc2VsZiA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTsgZnVuY3Rpb24gX25leHQodmFsdWUpIHsgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpOyB9IGZ1bmN0aW9uIF90aHJvdyhlcnIpIHsgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7IH0gX25leHQodW5kZWZpbmVkKTsgfSk7IH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgY29ubmVjdGlvbkZyb21Nb25nb0N1cnNvciwgbW9uZ29vc2VMb2FkZXIgfSBmcm9tIFwiQGVudHJpYS9ncmFwaHFsLW1vbmdvb3NlLWxvYWRlclwiO1xuaW1wb3J0IERhdGFMb2FkZXIgZnJvbSBcImRhdGFsb2FkZXJcIjtcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSBcIi4vVXNlck1vZGVsXCI7XG5pbXBvcnQgeyBlc2NhcGVSZWdleCB9IGZyb20gXCIuLi8uLi91dGlscy9lc2NhcGVSZWdleFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpZFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2lkXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlbWFpbFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicGFzc3dvcmRcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMuaWQgPSBkYXRhLl9pZDtcbiAgICB0aGlzLl9pZCA9IGRhdGEuX2lkO1xuICAgIHRoaXMuZW1haWwgPSBkYXRhLmVtYWlsO1xuICB9XG5cbn1cbmV4cG9ydCBjb25zdCBnZXRMb2FkZXIgPSAoKSA9PiBuZXcgRGF0YUxvYWRlcihpZHMgPT4gbW9uZ29vc2VMb2FkZXIoVXNlck1vZGVsLCBpZHMpKTtcblxuY29uc3Qgdmlld2VyQ2FuU2VlID0gKCkgPT4gdHJ1ZTtcblxuZXhwb3J0IGNvbnN0IGxvYWQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoY29udGV4dCwgaWQpIHtcbiAgICBpZiAoIWlkICYmIHR5cGVvZiBpZCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGRhdGE7XG5cbiAgICB0cnkge1xuICAgICAgZGF0YSA9IHlpZWxkIGNvbnRleHQuZGF0YWxvYWRlcnMuVXNlckxvYWRlci5sb2FkKGlkKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB2aWV3ZXJDYW5TZWUoKSA/IG5ldyBVc2VyKGRhdGEpIDogbnVsbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGxvYWQoX3gsIF94Mikge1xuICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCk7XG5leHBvcnQgY29uc3QgY2xlYXJDYWNoZSA9ICh7XG4gIGRhdGFsb2FkZXJzXG59LCBpZCkgPT4gZGF0YWxvYWRlcnMuVXNlckxvYWRlci5jbGVhcihpZC50b1N0cmluZygpKTtcbmV4cG9ydCBjb25zdCBsb2FkVXNlcnMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjIgPSBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKGNvbnRleHQsIGFyZ3MpIHtcbiAgICBjb25zdCBkZWZhdWx0V2hlcmUgPSB7XG4gICAgICByZW1vdmVkQXQ6IG51bGxcbiAgICB9O1xuICAgIGNvbnN0IHdoZXJlID0gYXJncy5zZWFyY2ggPyBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGRlZmF1bHRXaGVyZSksIHt9LCB7XG4gICAgICBuYW1lOiB7XG4gICAgICAgICRyZWdleDogbmV3IFJlZ0V4cChgXiR7ZXNjYXBlUmVnZXgoYXJncy5zZWFyY2gpfWAsIFwiaWdcIilcbiAgICAgIH1cbiAgICB9KSA6IGRlZmF1bHRXaGVyZTtcbiAgICBjb25zdCB1c2VycyA9IFVzZXJNb2RlbC5maW5kKHdoZXJlLCB7XG4gICAgICBfaWQ6IDFcbiAgICB9KS5zb3J0KHtcbiAgICAgIGNyZWF0ZWRBdDogLTFcbiAgICB9KS5sZWFuKCk7XG4gICAgcmV0dXJuIGNvbm5lY3Rpb25Gcm9tTW9uZ29DdXJzb3Ioe1xuICAgICAgY3Vyc29yOiB1c2VycyxcbiAgICAgIGNvbnRleHQsXG4gICAgICBhcmdzLFxuICAgICAgbG9hZGVyOiBsb2FkXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBmdW5jdGlvbiBsb2FkVXNlcnMoX3gzLCBfeDQpIHtcbiAgICByZXR1cm4gX3JlZjIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/User/UserLoader.ts\n");

/***/ }),

/***/ "./src/utils/escapeRegex.ts":
/*!**********************************!*\
  !*** ./src/utils/escapeRegex.ts ***!
  \**********************************/
/*! exports provided: escapeRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"escapeRegex\", function() { return escapeRegex; });\n// https://stackoverflow.com/a/2593661/710693\nconst escapeRegex = str => `${str}`.replace(/[.?*+^$[\\]\\\\(){}|-]/g, \"\\\\$&\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZXNjYXBlUmVnZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZXNjYXBlUmVnZXgudHM/NzcyMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjU5MzY2MS83MTA2OTNcbmV4cG9ydCBjb25zdCBlc2NhcGVSZWdleCA9IHN0ciA9PiBgJHtzdHJ9YC5yZXBsYWNlKC9bLj8qK14kW1xcXVxcXFwoKXt9fC1dL2csIFwiXFxcXCQmXCIpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/escapeRegex.ts\n");

/***/ })

};