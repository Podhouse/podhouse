exports.id = "server";
exports.modules = {

/***/ "./src/graphql.ts":
/*!************************!*\
  !*** ./src/graphql.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphql/schema */ \"./src/graphql/schema.ts\");\n/* harmony import */ var _loaders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loaders */ \"./src/loaders/index.ts\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/auth */ \"./src/utils/auth.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\nconst graphql = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (req, res) {\n    const {\n      user\n    } = yield Object(_utils_auth__WEBPACK_IMPORTED_MODULE_2__[\"getUser\"])(req.header.authorization);\n    const dataloaders = Object.keys(_loaders__WEBPACK_IMPORTED_MODULE_1__).reduce((acc, loaderKey) => _objectSpread(_objectSpread({}, acc), {}, {\n      [loaderKey]: _loaders__WEBPACK_IMPORTED_MODULE_1__[loaderKey].getLoader()\n    }), {});\n    return {\n      graphiql: \"development\" !== \"production\",\n      schema: _graphql_schema__WEBPACK_IMPORTED_MODULE_0__[\"schema\"],\n      context: {\n        req,\n        res,\n        user,\n        dataloaders\n      }\n    };\n  });\n\n  return function graphql(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (graphql);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ncmFwaHFsLnRzPzI5NDIiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpOyB9IH1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIHNlbGYgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzOyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7IGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTsgfSBmdW5jdGlvbiBfdGhyb3coZXJyKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpOyB9IF9uZXh0KHVuZGVmaW5lZCk7IH0pOyB9OyB9XG5cbmltcG9ydCB7IHNjaGVtYSB9IGZyb20gXCIuL2dyYXBocWwvc2NoZW1hXCI7XG5pbXBvcnQgKiBhcyBsb2FkZXJzIGZyb20gXCIuL2xvYWRlcnNcIjtcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tIFwiLi91dGlscy9hdXRoXCI7XG5cbmNvbnN0IGdyYXBocWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAocmVxLCByZXMpIHtcbiAgICBjb25zdCB7XG4gICAgICB1c2VyXG4gICAgfSA9IHlpZWxkIGdldFVzZXIocmVxLmhlYWRlci5hdXRob3JpemF0aW9uKTtcbiAgICBjb25zdCBkYXRhbG9hZGVycyA9IE9iamVjdC5rZXlzKGxvYWRlcnMpLnJlZHVjZSgoYWNjLCBsb2FkZXJLZXkpID0+IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgYWNjKSwge30sIHtcbiAgICAgIFtsb2FkZXJLZXldOiBsb2FkZXJzW2xvYWRlcktleV0uZ2V0TG9hZGVyKClcbiAgICB9KSwge30pO1xuICAgIHJldHVybiB7XG4gICAgICBncmFwaGlxbDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiLFxuICAgICAgc2NoZW1hLFxuICAgICAgY29udGV4dDoge1xuICAgICAgICByZXEsXG4gICAgICAgIHJlcyxcbiAgICAgICAgdXNlcixcbiAgICAgICAgZGF0YWxvYWRlcnNcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gZnVuY3Rpb24gZ3JhcGhxbChfeCwgX3gyKSB7XG4gICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/graphql.ts\n");

/***/ })

};