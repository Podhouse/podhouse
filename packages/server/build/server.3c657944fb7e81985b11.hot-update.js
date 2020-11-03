exports.id = "server";
exports.modules = {

/***/ "./src/modules/User/UserModel.ts":
/*!***************************************!*\
  !*** ./src/modules/User/UserModel.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst {\n  ObjectId\n} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types;\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  email: {\n    type: String,\n    trim: true,\n    required: true,\n    lowercase: true\n  },\n  password: {\n    type: String,\n    hidden: true,\n    required: true,\n    minlength: 3\n  },\n  subscriptions: [{\n    type: ObjectId,\n    ref: \"Podcast\"\n  }]\n}, {\n  timestamps: {\n    createdAt: \"createdAt\",\n    updatedAt: \"updatedAt\"\n  },\n  collection: \"User\"\n});\nUserSchema.pre(\"save\", function (next) {\n  if (!this.isModified(\"password\")) return next();\n  if (!this.password) return next();\n  return bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.hash(this.password, 8).then(hash => {\n    this.password = hash;\n    next();\n  });\n});\nUserSchema.methods = {\n  authenticate(plainTextPassword) {\n    return bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.compareSync(plainTextPassword, this.password);\n  },\n\n  encryptPassword(password) {\n    return bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.hashSync(password, 8);\n  }\n\n};\nconst UserModel = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"User\", UserSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserModel);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9Vc2VyL1VzZXJNb2RlbC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1VzZXIvVXNlck1vZGVsLnRzPzdkMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XG5jb25zdCB7XG4gIE9iamVjdElkXG59ID0gbW9uZ29vc2UuU2NoZW1hLlR5cGVzO1xuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBlbWFpbDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICB0cmltOiB0cnVlLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxvd2VyY2FzZTogdHJ1ZVxuICB9LFxuICBwYXNzd29yZDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBoaWRkZW46IHRydWUsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbWlubGVuZ3RoOiAzXG4gIH0sXG4gIHN1YnNjcmlwdGlvbnM6IFt7XG4gICAgdHlwZTogT2JqZWN0SWQsXG4gICAgcmVmOiBcIlBvZGNhc3RcIlxuICB9XVxufSwge1xuICB0aW1lc3RhbXBzOiB7XG4gICAgY3JlYXRlZEF0OiBcImNyZWF0ZWRBdFwiLFxuICAgIHVwZGF0ZWRBdDogXCJ1cGRhdGVkQXRcIlxuICB9LFxuICBjb2xsZWN0aW9uOiBcIlVzZXJcIlxufSk7XG5Vc2VyU2NoZW1hLnByZShcInNhdmVcIiwgZnVuY3Rpb24gKG5leHQpIHtcbiAgaWYgKCF0aGlzLmlzTW9kaWZpZWQoXCJwYXNzd29yZFwiKSkgcmV0dXJuIG5leHQoKTtcbiAgaWYgKCF0aGlzLnBhc3N3b3JkKSByZXR1cm4gbmV4dCgpO1xuICByZXR1cm4gYmNyeXB0Lmhhc2godGhpcy5wYXNzd29yZCwgOCkudGhlbihoYXNoID0+IHtcbiAgICB0aGlzLnBhc3N3b3JkID0gaGFzaDtcbiAgICBuZXh0KCk7XG4gIH0pO1xufSk7XG5Vc2VyU2NoZW1hLm1ldGhvZHMgPSB7XG4gIGF1dGhlbnRpY2F0ZShwbGFpblRleHRQYXNzd29yZCkge1xuICAgIHJldHVybiBiY3J5cHQuY29tcGFyZVN5bmMocGxhaW5UZXh0UGFzc3dvcmQsIHRoaXMucGFzc3dvcmQpO1xuICB9LFxuXG4gIGVuY3J5cHRQYXNzd29yZChwYXNzd29yZCkge1xuICAgIHJldHVybiBiY3J5cHQuaGFzaFN5bmMocGFzc3dvcmQsIDgpO1xuICB9XG5cbn07XG5jb25zdCBVc2VyTW9kZWwgPSBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgVXNlclNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBVc2VyTW9kZWw7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/User/UserModel.ts\n");

/***/ })

};