exports.id = "server";
exports.modules = {
  /***/ "./src/modules/Podcast/PodcastFilterInputType.ts":
    /*!*******************************************************!*\
  !*** ./src/modules/Podcast/PodcastFilterInputType.ts ***!
  \*******************************************************/
    /*! exports provided: podcastFilterMapping, default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "podcastFilterMapping", function() { return podcastFilterMapping; });\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ "graphql");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _entria_graphql_mongo_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @entria/graphql-mongo-helpers */ "@entria/graphql-mongo-helpers");\n/* harmony import */ var _entria_graphql_mongo_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_entria_graphql_mongo_helpers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_escapeRegex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/escapeRegex */ "./src/utils/escapeRegex.ts");\n\n\n\nconst podcastFilterMapping = {\n  name: {\n    type: _entria_graphql_mongo_helpers__WEBPACK_IMPORTED_MODULE_1__["FILTER_CONDITION_TYPE"].MATCH_1_TO_1,\n    format: val => new RegExp(`^${Object(_utils_escapeRegex__WEBPACK_IMPORTED_MODULE_2__["default"])(val)}`)\n  },\n  primaryGenre: {\n    type: _entria_graphql_mongo_helpers__WEBPACK_IMPORTED_MODULE_1__["FILTER_CONDITION_TYPE"].MATCH_1_TO_1,\n    format: val => new RegExp(`^${Object(_utils_escapeRegex__WEBPACK_IMPORTED_MODULE_2__["default"])(val)}`)\n  }\n};\nconst PodcastFilterInputType = new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLInputObjectType"]({\n  name: "PodcastFilter",\n  description: "Used to filter podcasts",\n  fields: () => ({\n    name: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"]\n    },\n    primaryGenre: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"]\n    }\n  })\n});\n/* harmony default export */ __webpack_exports__["default"] = (PodcastFilterInputType);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9Qb2RjYXN0L1BvZGNhc3RGaWx0ZXJJbnB1dFR5cGUudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Qb2RjYXN0L1BvZGNhc3RGaWx0ZXJJbnB1dFR5cGUudHM/MGE1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMSW5wdXRPYmplY3RUeXBlLCBHcmFwaFFMU3RyaW5nIH0gZnJvbSBcImdyYXBocWxcIjtcbmltcG9ydCB7IEZJTFRFUl9DT05ESVRJT05fVFlQRSB9IGZyb20gXCJAZW50cmlhL2dyYXBocWwtbW9uZ28taGVscGVyc1wiO1xuaW1wb3J0IGVzY2FwZVJlZ2V4IGZyb20gXCIuLi8uLi91dGlscy9lc2NhcGVSZWdleFwiO1xuZXhwb3J0IGNvbnN0IHBvZGNhc3RGaWx0ZXJNYXBwaW5nID0ge1xuICBuYW1lOiB7XG4gICAgdHlwZTogRklMVEVSX0NPTkRJVElPTl9UWVBFLk1BVENIXzFfVE9fMSxcbiAgICBmb3JtYXQ6IHZhbCA9PiBuZXcgUmVnRXhwKGBeJHtlc2NhcGVSZWdleCh2YWwpfWApXG4gIH0sXG4gIHByaW1hcnlHZW5yZToge1xuICAgIHR5cGU6IEZJTFRFUl9DT05ESVRJT05fVFlQRS5NQVRDSF8xX1RPXzEsXG4gICAgZm9ybWF0OiB2YWwgPT4gbmV3IFJlZ0V4cChgXiR7ZXNjYXBlUmVnZXgodmFsKX1gKVxuICB9XG59O1xuY29uc3QgUG9kY2FzdEZpbHRlcklucHV0VHlwZSA9IG5ldyBHcmFwaFFMSW5wdXRPYmplY3RUeXBlKHtcbiAgbmFtZTogXCJQb2RjYXN0RmlsdGVyXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlVzZWQgdG8gZmlsdGVyIHBvZGNhc3RzXCIsXG4gIGZpZWxkczogKCkgPT4gKHtcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nXG4gICAgfSxcbiAgICBwcmltYXJ5R2VucmU6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmdcbiAgICB9XG4gIH0pXG59KTtcbmV4cG9ydCBkZWZhdWx0IFBvZGNhc3RGaWx0ZXJJbnB1dFR5cGU7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/Podcast/PodcastFilterInputType.ts\n',
      );

      /***/
    },

  /***/ "./src/utils/escapeRegex.ts":
    /*!**********************************!*\
  !*** ./src/utils/escapeRegex.ts ***!
  \**********************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n// https://stackoverflow.com/a/2593661/710693\nconst escapeRegex = str => `${str}`.replace(/[.?*+^$[\\]\\\\(){}|-]/g, "\\\\$&");\n\n/* harmony default export */ __webpack_exports__["default"] = (escapeRegex);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZXNjYXBlUmVnZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZXNjYXBlUmVnZXgudHM/NzcyMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjU5MzY2MS83MTA2OTNcbmNvbnN0IGVzY2FwZVJlZ2V4ID0gc3RyID0+IGAke3N0cn1gLnJlcGxhY2UoL1suPyorXiRbXFxdXFxcXCgpe318LV0vZywgXCJcXFxcJCZcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGVzY2FwZVJlZ2V4OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/escapeRegex.ts\n',
      );

      /***/
    },
};