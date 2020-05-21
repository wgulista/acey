webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var acey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! acey */ \"./node_modules/acey/dist/index.js\");\n/* harmony import */ var acey__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(acey__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/louis/video/counter-next/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar CounterModel = /*#__PURE__*/function (_Model) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(CounterModel, _Model);\n\n  var _super = _createSuper(CounterModel);\n\n  function CounterModel(data, options) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CounterModel);\n\n    _this = _super.call(this, data, options);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"get\", function () {\n      return _this.state.counter;\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"increment\", function () {\n      return _this.setState({\n        counter: _this.get() + 1\n      }).save();\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"decrement\", function () {\n      return _this.setState({\n        counter: _this.get() - 1\n      }).save();\n    });\n\n    return _this;\n  }\n\n  return CounterModel;\n}(acey__WEBPACK_IMPORTED_MODULE_7__[\"Model\"]);\n\nvar Counter = new CounterModel({\n  counter: 0\n}, {\n  connected: true,\n  key: 'counter'\n});\nfunction Home() {\n  _s();\n\n  Object(acey__WEBPACK_IMPORTED_MODULE_7__[\"useAcey\"])([Counter]);\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(\"button\", {\n    onClick: Counter.decrement,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, \"decrement\"), Counter.get(), __jsx(\"button\", {\n    onClick: Counter.increment,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, \"increment\"));\n}\n\n_s(Home, \"qTdWqdOQ7gFO3TfbS6/s2CUwZgs=\", false, function () {\n  return [acey__WEBPACK_IMPORTED_MODULE_7__[\"useAcey\"]];\n});\n\n_c = Home;\n\nHome.getInitialProps = function (_ref) {\n  var query = _ref.query;\n  //Counter state updated on server side\n  Counter.setState({\n    counter: 10\n  }).save();\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkNvdW50ZXJNb2RlbCIsImRhdGEiLCJvcHRpb25zIiwic3RhdGUiLCJjb3VudGVyIiwic2V0U3RhdGUiLCJnZXQiLCJzYXZlIiwiTW9kZWwiLCJDb3VudGVyIiwiY29ubmVjdGVkIiwia2V5IiwiSG9tZSIsInVzZUFjZXkiLCJkZWNyZW1lbnQiLCJpbmNyZW1lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsWTs7Ozs7QUFDSix3QkFBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMEI7QUFBQTs7QUFBQTs7QUFDeEIsOEJBQU1ELElBQU4sRUFBWUMsT0FBWjs7QUFEd0IsOE1BSXBCO0FBQUEsYUFBTSxNQUFLQyxLQUFMLENBQVdDLE9BQWpCO0FBQUEsS0FKb0I7O0FBQUEsb05BS2Q7QUFBQSxhQUFNLE1BQUtDLFFBQUwsQ0FBYztBQUFDRCxlQUFPLEVBQUUsTUFBS0UsR0FBTCxLQUFhO0FBQXZCLE9BQWQsRUFBeUNDLElBQXpDLEVBQU47QUFBQSxLQUxjOztBQUFBLG9OQU1kO0FBQUEsYUFBTSxNQUFLRixRQUFMLENBQWM7QUFBQ0QsZUFBTyxFQUFFLE1BQUtFLEdBQUwsS0FBYTtBQUF2QixPQUFkLEVBQXlDQyxJQUF6QyxFQUFOO0FBQUEsS0FOYzs7QUFBQTtBQUV6Qjs7O0VBSHdCQywwQzs7QUFVM0IsSUFBTUMsT0FBTyxHQUFHLElBQUlULFlBQUosQ0FBaUI7QUFBQ0ksU0FBTyxFQUFFO0FBQVYsQ0FBakIsRUFBK0I7QUFBQ00sV0FBUyxFQUFFLElBQVo7QUFBa0JDLEtBQUcsRUFBRTtBQUF2QixDQUEvQixDQUFoQjtBQUVlLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFFN0JDLHNEQUFPLENBQUMsQ0FDTkosT0FETSxDQUFELENBQVA7QUFJQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFdBQU8sRUFBRUEsT0FBTyxDQUFDSyxTQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUdMLE9BQU8sQ0FBQ0gsR0FBUixFQUZILEVBR0U7QUFBUSxXQUFPLEVBQUVHLE9BQU8sQ0FBQ00sU0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixDQURGO0FBT0Q7O0dBYnVCSCxJO1VBRXRCQyw0Qzs7O0tBRnNCRCxJOztBQWV4QkEsSUFBSSxDQUFDSSxlQUFMLEdBQXVCLGdCQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ3BDO0FBQ0FSLFNBQU8sQ0FBQ0osUUFBUixDQUFpQjtBQUFDRCxXQUFPLEVBQUU7QUFBVixHQUFqQixFQUFnQ0csSUFBaEM7QUFDRCxDQUhEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RlbCwgdXNlQWNleX0gZnJvbSAnYWNleSdcblxuY2xhc3MgQ291bnRlck1vZGVsIGV4dGVuZHMgTW9kZWwge1xuICBjb25zdHJ1Y3RvcihkYXRhLCBvcHRpb25zKXtcbiAgICBzdXBlcihkYXRhLCBvcHRpb25zKVxuICB9XG5cbiAgZ2V0ID0gKCkgPT4gdGhpcy5zdGF0ZS5jb3VudGVyXG4gIGluY3JlbWVudCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoe2NvdW50ZXI6IHRoaXMuZ2V0KCkgKyAxfSkuc2F2ZSgpXG4gIGRlY3JlbWVudCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoe2NvdW50ZXI6IHRoaXMuZ2V0KCkgLSAxfSkuc2F2ZSgpXG59XG5cbmNvbnN0IENvdW50ZXIgPSBuZXcgQ291bnRlck1vZGVsKHtjb3VudGVyOiAwfSwge2Nvbm5lY3RlZDogdHJ1ZSwga2V5OiAnY291bnRlcid9KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIHVzZUFjZXkoW1xuICAgIENvdW50ZXJcbiAgXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e0NvdW50ZXIuZGVjcmVtZW50fT5kZWNyZW1lbnQ8L2J1dHRvbj5cbiAgICAgIHtDb3VudGVyLmdldCgpfVxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtDb3VudGVyLmluY3JlbWVudH0+aW5jcmVtZW50PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSAoeyBxdWVyeSB9KSA9PiB7XG4gIC8vQ291bnRlciBzdGF0ZSB1cGRhdGVkIG9uIHNlcnZlciBzaWRlXG4gIENvdW50ZXIuc2V0U3RhdGUoe2NvdW50ZXI6IDEwfSkuc2F2ZSgpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})