exports.id = "server";
exports.modules = {
  /***/ "./src/common/createLoader.ts":
    /*!************************************!*\
  !*** ./src/common/createLoader.ts ***!
  \************************************/
    /*! exports provided: createLoader */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLoader", function() { return createLoader; });\n/* harmony import */ var _entria_graphql_mongoose_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @entria/graphql-mongoose-loader */ "@entria/graphql-mongoose-loader");\n/* harmony import */ var _entria_graphql_mongoose_loader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_entria_graphql_mongoose_loader__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dataloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dataloader */ "dataloader");\n/* harmony import */ var dataloader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dataloader__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _entria_graphql_mongo_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @entria/graphql-mongo-helpers */ "@entria/graphql-mongo-helpers");\n/* harmony import */ var _entria_graphql_mongo_helpers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_entria_graphql_mongo_helpers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _withConnectionCursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withConnectionCursor */ "./src/common/withConnectionCursor.ts");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\n\n\n\n\nconst defaultViewerCanSee = (context, data) => data;\n\nconst createLoader = ({\n  model,\n  viewerCanSee = defaultViewerCanSee,\n  loaderName,\n  filterMapping = {}\n}) => {\n  class Loader {\n    constructor(data) {\n      Object.keys(data).map(key => {\n        this[key] = data[key];\n      });\n      this.id = data.id || data._id;\n    }\n\n  }\n\n  const nameIt = (name, cls) => ({\n    [name]: class extends cls {}\n  })[name];\n\n  const Wrapper = nameIt(model.collection.collectionName, Loader);\n\n  const getLoader = () => new dataloader__WEBPACK_IMPORTED_MODULE_1___default.a(ids => Object(_entria_graphql_mongoose_loader__WEBPACK_IMPORTED_MODULE_0__["mongooseLoader"])(model, ids));\n\n  const load = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator(function* (context, id) {\n      if (!id) {\n        return null;\n      }\n\n      try {\n        const data = yield context.dataloaders[loaderName].load(id.toString());\n\n        if (!data) {\n          return null;\n        }\n\n        const filteredData = yield viewerCanSee(context, data);\n        return filteredData ? new Wrapper(filteredData) : null;\n      } catch (err) {\n        return null;\n      }\n    });\n\n    return function load(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  const clearCache = ({\n    dataloaders\n  }, id) => dataloaders[loaderName].clear(id.toString());\n\n  const loadAll = Object(_withConnectionCursor__WEBPACK_IMPORTED_MODULE_3__["withConnectionCursor"])(model, load, (context, args) => {\n    const builtMongoConditions = Object(_entria_graphql_mongo_helpers__WEBPACK_IMPORTED_MODULE_2__["buildMongoConditionsFromFilters"])(context, args.filters, filterMapping);\n    console.log("builtMongoConditions: ", builtMongoConditions);\n\n    const conditions = _objectSpread({}, builtMongoConditions.conditions);\n\n    const sort = {\n      createdAt: -1\n    };\n    return {\n      conditions,\n      sort\n    };\n  });\n  return {\n    Wrapper: Wrapper,\n    getLoader,\n    clearCache,\n    load,\n    loadAll\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2NyZWF0ZUxvYWRlci50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vY3JlYXRlTG9hZGVyLnRzPzY4YmQiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpOyB9IH1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIHNlbGYgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzOyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7IGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTsgfSBmdW5jdGlvbiBfdGhyb3coZXJyKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpOyB9IF9uZXh0KHVuZGVmaW5lZCk7IH0pOyB9OyB9XG5cbmltcG9ydCB7IG1vbmdvb3NlTG9hZGVyIH0gZnJvbSBcIkBlbnRyaWEvZ3JhcGhxbC1tb25nb29zZS1sb2FkZXJcIjtcbmltcG9ydCBEYXRhTG9hZGVyIGZyb20gXCJkYXRhbG9hZGVyXCI7XG5pbXBvcnQgeyBidWlsZE1vbmdvQ29uZGl0aW9uc0Zyb21GaWx0ZXJzIH0gZnJvbSBcIkBlbnRyaWEvZ3JhcGhxbC1tb25nby1oZWxwZXJzXCI7XG5pbXBvcnQgeyB3aXRoQ29ubmVjdGlvbkN1cnNvciB9IGZyb20gXCIuL3dpdGhDb25uZWN0aW9uQ3Vyc29yXCI7XG5cbmNvbnN0IGRlZmF1bHRWaWV3ZXJDYW5TZWUgPSAoY29udGV4dCwgZGF0YSkgPT4gZGF0YTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUxvYWRlciA9ICh7XG4gIG1vZGVsLFxuICB2aWV3ZXJDYW5TZWUgPSBkZWZhdWx0Vmlld2VyQ2FuU2VlLFxuICBsb2FkZXJOYW1lLFxuICBmaWx0ZXJNYXBwaW5nID0ge31cbn0pID0+IHtcbiAgY2xhc3MgTG9hZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICBPYmplY3Qua2V5cyhkYXRhKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgdGhpc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmlkID0gZGF0YS5pZCB8fCBkYXRhLl9pZDtcbiAgICB9XG5cbiAgfVxuXG4gIGNvbnN0IG5hbWVJdCA9IChuYW1lLCBjbHMpID0+ICh7XG4gICAgW25hbWVdOiBjbGFzcyBleHRlbmRzIGNscyB7fVxuICB9KVtuYW1lXTtcblxuICBjb25zdCBXcmFwcGVyID0gbmFtZUl0KG1vZGVsLmNvbGxlY3Rpb24uY29sbGVjdGlvbk5hbWUsIExvYWRlcik7XG5cbiAgY29uc3QgZ2V0TG9hZGVyID0gKCkgPT4gbmV3IERhdGFMb2FkZXIoaWRzID0+IG1vbmdvb3NlTG9hZGVyKG1vZGVsLCBpZHMpKTtcblxuICBjb25zdCBsb2FkID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoY29udGV4dCwgaWQpIHtcbiAgICAgIGlmICghaWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCBjb250ZXh0LmRhdGFsb2FkZXJzW2xvYWRlck5hbWVdLmxvYWQoaWQudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSB5aWVsZCB2aWV3ZXJDYW5TZWUoY29udGV4dCwgZGF0YSk7XG4gICAgICAgIHJldHVybiBmaWx0ZXJlZERhdGEgPyBuZXcgV3JhcHBlcihmaWx0ZXJlZERhdGEpIDogbnVsbDtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmdW5jdGlvbiBsb2FkKF94LCBfeDIpIHtcbiAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfSgpO1xuXG4gIGNvbnN0IGNsZWFyQ2FjaGUgPSAoe1xuICAgIGRhdGFsb2FkZXJzXG4gIH0sIGlkKSA9PiBkYXRhbG9hZGVyc1tsb2FkZXJOYW1lXS5jbGVhcihpZC50b1N0cmluZygpKTtcblxuICBjb25zdCBsb2FkQWxsID0gd2l0aENvbm5lY3Rpb25DdXJzb3IobW9kZWwsIGxvYWQsIChjb250ZXh0LCBhcmdzKSA9PiB7XG4gICAgY29uc3QgYnVpbHRNb25nb0NvbmRpdGlvbnMgPSBidWlsZE1vbmdvQ29uZGl0aW9uc0Zyb21GaWx0ZXJzKGNvbnRleHQsIGFyZ3MuZmlsdGVycywgZmlsdGVyTWFwcGluZyk7XG4gICAgY29uc29sZS5sb2coXCJidWlsdE1vbmdvQ29uZGl0aW9uczogXCIsIGJ1aWx0TW9uZ29Db25kaXRpb25zKTtcblxuICAgIGNvbnN0IGNvbmRpdGlvbnMgPSBfb2JqZWN0U3ByZWFkKHt9LCBidWlsdE1vbmdvQ29uZGl0aW9ucy5jb25kaXRpb25zKTtcblxuICAgIGNvbnN0IHNvcnQgPSB7XG4gICAgICBjcmVhdGVkQXQ6IC0xXG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZGl0aW9ucyxcbiAgICAgIHNvcnRcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBXcmFwcGVyOiBXcmFwcGVyLFxuICAgIGdldExvYWRlcixcbiAgICBjbGVhckNhY2hlLFxuICAgIGxvYWQsXG4gICAgbG9hZEFsbFxuICB9O1xufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common/createLoader.ts\n',
      );

      /***/
    },
};