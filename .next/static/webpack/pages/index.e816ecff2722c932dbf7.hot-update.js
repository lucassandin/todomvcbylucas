webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xstate */ \"./node_modules/xstate/es/index.js\");\nvar _s = $RefreshSig$(),\n    _jsxFileName = \"/Users/lucas/developments/reactjs/todomvccopy/pages/index.js\",\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// import React, { Component } from \"react\";\n// import Form from \"../components/form\";\n// import Footer from \"../components/footer\";\n// class Home extends Component {\n//   constructor(props) {\n//     super(props);\n//     this.state = {};\n//   }\n//   render() {\n//     return (\n//       <div>\n//         <Form />\n//         <Footer />\n//       </div>\n//     );\n//   }\n// }\n// export default Home;\n\n\n\nfunction useMachine(machine) {\n  _s();\n\n  const {\n    0: current,\n    1: setCurrent\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(machine.initialState);\n  const service = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => Object(xstate__WEBPACK_IMPORTED_MODULE_1__[\"interpret\"])(machine).onTransition(state => {\n    if (state.changed) {\n      setCurrent(state);\n    }\n  }).start(), []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    return () => service.stop();\n  }, []);\n  return [current, service.send];\n}\n\n_s(useMachine, \"N8luULfBWGYCeClt5AuKgM0ZvFA=\");\n\nconst stateMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_1__[\"Machine\"])({\n  initial: \"idle\",\n  states: {\n    idle: {\n      on: {\n        SUBMIT: [{\n          target: \"loading\",\n          cond: (context, event) => event.data.name !== \"\" && event.data.card !== \"\"\n        }, {\n          target: \"error\"\n        }]\n      }\n    },\n    loading: {\n      on: {\n        PAYMENT_RECEIVED: \"success\",\n        PAYMENT_FAILED: \"error\"\n      }\n    },\n    error: {\n      on: {\n        SUBMIT: \"loading\"\n      }\n    },\n    success: {\n      type: \"final\"\n    }\n  }\n});\n\nconst App = () => {\n  _s2();\n\n  const [machine, send] = useMachine(stateMachine);\n  const {\n    0: form,\n    1: updateForm\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    name: \"\",\n    card: \"\"\n  });\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }\n  }, \"State Machine Payment\")), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }\n  }, __jsx(\"form\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 13\n    }\n  }, \"name on card\"), __jsx(\"input\", {\n    type: \"text\",\n    id: \"nameOnCard\",\n    maxLength: \"255\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }\n  }, \"card number\"), __jsx(\"input\", {\n    type: \"text\",\n    id: \"creditCardNumber\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  })), __jsx(\"button\", {\n    type: \"submit\",\n    id: \"payButton\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }, \"pay now\")))));\n};\n\n_s2(App, \"iogDaXWqQ1sp5IFhTC/2KVjMWCs=\", false, function () {\n  return [useMachine];\n});\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJ1c2VNYWNoaW5lIiwibWFjaGluZSIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwidXNlU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJzZXJ2aWNlIiwidXNlTWVtbyIsImludGVycHJldCIsIm9uVHJhbnNpdGlvbiIsInN0YXRlIiwiY2hhbmdlZCIsInN0YXJ0IiwidXNlRWZmZWN0Iiwic3RvcCIsInNlbmQiLCJzdGF0ZU1hY2hpbmUiLCJNYWNoaW5lIiwiaW5pdGlhbCIsInN0YXRlcyIsImlkbGUiLCJvbiIsIlNVQk1JVCIsInRhcmdldCIsImNvbmQiLCJjb250ZXh0IiwiZXZlbnQiLCJkYXRhIiwibmFtZSIsImNhcmQiLCJsb2FkaW5nIiwiUEFZTUVOVF9SRUNFSVZFRCIsIlBBWU1FTlRfRkFJTEVEIiwiZXJyb3IiLCJzdWNjZXNzIiwidHlwZSIsIkFwcCIsImZvcm0iLCJ1cGRhdGVGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsQ0FBb0JDLE9BQXBCLEVBQTZCO0FBQUE7O0FBQzNCLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQ0gsT0FBTyxDQUFDSSxZQUFULENBQXRDO0FBRUEsUUFBTUMsT0FBTyxHQUFHQyxxREFBTyxDQUNyQixNQUNFQyx3REFBUyxDQUFDUCxPQUFELENBQVQsQ0FDR1EsWUFESCxDQUNpQkMsS0FBRCxJQUFXO0FBQ3ZCLFFBQUlBLEtBQUssQ0FBQ0MsT0FBVixFQUFtQjtBQUNqQlIsZ0JBQVUsQ0FBQ08sS0FBRCxDQUFWO0FBQ0Q7QUFDRixHQUxILEVBTUdFLEtBTkgsRUFGbUIsRUFTckIsRUFUcUIsQ0FBdkI7QUFZQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsV0FBTyxNQUFNUCxPQUFPLENBQUNRLElBQVIsRUFBYjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxTQUFPLENBQUNaLE9BQUQsRUFBVUksT0FBTyxDQUFDUyxJQUFsQixDQUFQO0FBQ0Q7O0dBcEJRZixVOztBQXNCVCxNQUFNZ0IsWUFBWSxHQUFHQyxzREFBTyxDQUFDO0FBQzNCQyxTQUFPLEVBQUUsTUFEa0I7QUFFM0JDLFFBQU0sRUFBRTtBQUNOQyxRQUFJLEVBQUU7QUFDSkMsUUFBRSxFQUFFO0FBQ0ZDLGNBQU0sRUFBRSxDQUNOO0FBQ0VDLGdCQUFNLEVBQUUsU0FEVjtBQUVFQyxjQUFJLEVBQUUsQ0FBQ0MsT0FBRCxFQUFVQyxLQUFWLEtBQ0pBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxJQUFYLEtBQW9CLEVBQXBCLElBQTBCRixLQUFLLENBQUNDLElBQU4sQ0FBV0UsSUFBWCxLQUFvQjtBQUhsRCxTQURNLEVBTU47QUFDRU4sZ0JBQU0sRUFBRTtBQURWLFNBTk07QUFETjtBQURBLEtBREE7QUFlTk8sV0FBTyxFQUFFO0FBQ1BULFFBQUUsRUFBRTtBQUNGVSx3QkFBZ0IsRUFBRSxTQURoQjtBQUVGQyxzQkFBYyxFQUFFO0FBRmQ7QUFERyxLQWZIO0FBcUJOQyxTQUFLLEVBQUU7QUFDTFosUUFBRSxFQUFFO0FBQ0ZDLGNBQU0sRUFBRTtBQUROO0FBREMsS0FyQkQ7QUEwQk5ZLFdBQU8sRUFBRTtBQUNQQyxVQUFJLEVBQUU7QUFEQztBQTFCSDtBQUZtQixDQUFELENBQTVCOztBQWtDQSxNQUFNQyxHQUFHLEdBQUcsTUFBTTtBQUFBOztBQUNoQixRQUFNLENBQUNuQyxPQUFELEVBQVVjLElBQVYsSUFBa0JmLFVBQVUsQ0FBQ2dCLFlBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ3FCLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQXFCbEMsc0RBQVEsQ0FBQztBQUNsQ3dCLFFBQUksRUFBRSxFQUQ0QjtBQUVsQ0MsUUFBSSxFQUFFO0FBRjRCLEdBQUQsQ0FBbkM7QUFLQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixDQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBRSxFQUFDLFlBQXRCO0FBQW1DLGFBQVMsRUFBQyxLQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFFLEVBQUMsa0JBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQUxGLEVBU0U7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixNQUFFLEVBQUMsV0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQVRGLENBREYsQ0FMRixDQURGO0FBdUJELENBOUJEOztJQUFNTyxHO1VBQ29CcEMsVTs7O0tBRHBCb0MsRztBQWdDU0Esa0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm1cIjtcbi8vIGltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XG5cbi8vIGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuLy8gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuLy8gICAgIHN1cGVyKHByb3BzKTtcbi8vICAgICB0aGlzLnN0YXRlID0ge307XG4vLyAgIH1cblxuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxkaXY+XG4vLyAgICAgICAgIDxGb3JtIC8+XG4vLyAgICAgICAgIDxGb290ZXIgLz5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VNZW1vLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1hY2hpbmUsIGludGVycHJldCB9IGZyb20gXCJ4c3RhdGVcIjtcblxuZnVuY3Rpb24gdXNlTWFjaGluZShtYWNoaW5lKSB7XG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKG1hY2hpbmUuaW5pdGlhbFN0YXRlKTtcblxuICBjb25zdCBzZXJ2aWNlID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgaW50ZXJwcmV0KG1hY2hpbmUpXG4gICAgICAgIC5vblRyYW5zaXRpb24oKHN0YXRlKSA9PiB7XG4gICAgICAgICAgaWYgKHN0YXRlLmNoYW5nZWQpIHtcbiAgICAgICAgICAgIHNldEN1cnJlbnQoc3RhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXJ0KCksXG4gICAgW11cbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiBzZXJ2aWNlLnN0b3AoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBbY3VycmVudCwgc2VydmljZS5zZW5kXTtcbn1cblxuY29uc3Qgc3RhdGVNYWNoaW5lID0gTWFjaGluZSh7XG4gIGluaXRpYWw6IFwiaWRsZVwiLFxuICBzdGF0ZXM6IHtcbiAgICBpZGxlOiB7XG4gICAgICBvbjoge1xuICAgICAgICBTVUJNSVQ6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0YXJnZXQ6IFwibG9hZGluZ1wiLFxuICAgICAgICAgICAgY29uZDogKGNvbnRleHQsIGV2ZW50KSA9PlxuICAgICAgICAgICAgICBldmVudC5kYXRhLm5hbWUgIT09IFwiXCIgJiYgZXZlbnQuZGF0YS5jYXJkICE9PSBcIlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGFyZ2V0OiBcImVycm9yXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBsb2FkaW5nOiB7XG4gICAgICBvbjoge1xuICAgICAgICBQQVlNRU5UX1JFQ0VJVkVEOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgUEFZTUVOVF9GQUlMRUQ6IFwiZXJyb3JcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgb246IHtcbiAgICAgICAgU1VCTUlUOiBcImxvYWRpbmdcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzdWNjZXNzOiB7XG4gICAgICB0eXBlOiBcImZpbmFsXCIsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IFttYWNoaW5lLCBzZW5kXSA9IHVzZU1hY2hpbmUoc3RhdGVNYWNoaW5lKTtcbiAgY29uc3QgW2Zvcm0sIHVwZGF0ZUZvcm1dID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgY2FyZDogXCJcIixcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPlN0YXRlIE1hY2hpbmUgUGF5bWVudDwvaDI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbD5uYW1lIG9uIGNhcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lT25DYXJkXCIgbWF4TGVuZ3RoPVwiMjU1XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsPmNhcmQgbnVtYmVyPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY3JlZGl0Q2FyZE51bWJlclwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJwYXlCdXR0b25cIj5cbiAgICAgICAgICAgIDxzcGFuPnBheSBub3c8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})