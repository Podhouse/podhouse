exports.id = "server";
exports.modules = {
  /***/ "./src/modules/Episode/EpisodeModel.ts":
    /*!*********************************************!*\
  !*** ./src/modules/Episode/EpisodeModel.ts ***!
  \*********************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst {\n  ObjectId\n} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types;\nconst EpisodeSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({\n  title: {\n    type: String,\n    required: true\n  },\n  description: {\n    type: String,\n    required: true\n  },\n  publishedDate: {\n    type: String,\n    required: true\n  },\n  link: {\n    type: String\n  },\n  image: {\n    type: String,\n    required: true\n  },\n  audio: {\n    type: String,\n    required: true\n  },\n  duration: {\n    type: String,\n    required: true\n  },\n  podcast: {\n    type: ObjectId,\n    ref: "Podcast",\n    description: "Podcast this episode is attached to",\n    required: true\n  }\n}, {\n  collection: "Episode"\n});\nconst EpisodeModel = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("Episode", EpisodeSchema);\n/* harmony default export */ __webpack_exports__["default"] = (EpisodeModel);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9FcGlzb2RlL0VwaXNvZGVNb2RlbC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0VwaXNvZGUvRXBpc29kZU1vZGVsLnRzP2IyOTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xuY29uc3Qge1xuICBPYmplY3RJZFxufSA9IG1vbmdvb3NlLlNjaGVtYS5UeXBlcztcbmNvbnN0IEVwaXNvZGVTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgdGl0bGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWVcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWVcbiAgfSxcbiAgcHVibGlzaGVkRGF0ZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZVxuICB9LFxuICBsaW5rOiB7XG4gICAgdHlwZTogU3RyaW5nXG4gIH0sXG4gIGltYWdlOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIGF1ZGlvOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIGR1cmF0aW9uOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIHBvZGNhc3Q6IHtcbiAgICB0eXBlOiBPYmplY3RJZCxcbiAgICByZWY6IFwiUG9kY2FzdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBvZGNhc3QgdGhpcyBlcGlzb2RlIGlzIGF0dGFjaGVkIHRvXCIsXG4gICAgcmVxdWlyZWQ6IHRydWVcbiAgfVxufSwge1xuICBjb2xsZWN0aW9uOiBcIkVwaXNvZGVcIlxufSk7XG5jb25zdCBFcGlzb2RlTW9kZWwgPSBtb25nb29zZS5tb2RlbChcIkVwaXNvZGVcIiwgRXBpc29kZVNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBFcGlzb2RlTW9kZWw7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/Episode/EpisodeModel.ts\n',
      );

      /***/
    },
};