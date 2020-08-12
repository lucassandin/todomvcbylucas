webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xstate */ \"./node_modules/xstate/es/index.js\");\nvar _s = $RefreshSig$(),\n    _jsxFileName = \"/Users/lucas/developments/reactjs/todomvccopy/pages/index.js\",\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// import React, { Component } from \"react\";\n// import Form from \"../components/form\";\n// import Footer from \"../components/footer\";\n// class Home extends Component {\n//   constructor(props) {\n//     super(props);\n//     this.state = {};\n//   }\n//   render() {\n//     return (\n//       <div>\n//         <Form />\n//         <Footer />\n//       </div>\n//     );\n//   }\n// }\n// export default Home;\n\n\n\nfunction useMachine(machine) {\n  _s();\n\n  const {\n    0: current,\n    1: setCurrent\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(machine.initialState);\n  const service = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => Object(xstate__WEBPACK_IMPORTED_MODULE_1__[\"interpret\"])(machine).onTransition(state => {\n    if (state.changed) {\n      setCurrent(state);\n    }\n  }).start(), []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    return () => service.stop();\n  }, []);\n  return [current, service.send];\n}\n\n_s(useMachine, \"N8luULfBWGYCeClt5AuKgM0ZvFA=\");\n\nconst stateMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_1__[\"Machine\"])({\n  initial: \"idle\",\n  states: {\n    qualquerCoisa: {\n      on: {\n        SUBMIT: [{\n          target: \"loading\",\n          cond: (context, event) => event.data.name !== \"\" && event.data.card !== \"\"\n        }, {\n          target: \"error\"\n        }]\n      }\n    },\n    loading: {\n      on: {\n        PAYMENT_RECEIVED: \"success\",\n        PAYMENT_FAILED: \"error\"\n      }\n    },\n    error: {\n      on: {\n        SUBMIT: \"loading\"\n      }\n    },\n    success: {\n      type: \"final\"\n    }\n  }\n});\n\nconst App = () => {\n  _s2();\n\n  const [machine, send] = useMachine(stateMachine);\n  console.log(machine.value);\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 9\n    }\n  }, \"State Machine Payment\")), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }, __jsx(\"form\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 13\n    }\n  }, \"name on card\"), __jsx(\"input\", {\n    type: \"text\",\n    id: \"nameOnCard\",\n    maxLength: \"255\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }\n  }, \"card number\"), __jsx(\"input\", {\n    type: \"text\",\n    id: \"creditCardNumber\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  })), __jsx(\"button\", {\n    type: \"submit\",\n    id: \"payButton\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  }, \"pay now\")))));\n};\n\n_s2(App, \"QYszsoYHlEbJxG+N8CcWAfNzNwk=\", false, function () {\n  return [useMachine];\n});\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJ1c2VNYWNoaW5lIiwibWFjaGluZSIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwidXNlU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJzZXJ2aWNlIiwidXNlTWVtbyIsImludGVycHJldCIsIm9uVHJhbnNpdGlvbiIsInN0YXRlIiwiY2hhbmdlZCIsInN0YXJ0IiwidXNlRWZmZWN0Iiwic3RvcCIsInNlbmQiLCJzdGF0ZU1hY2hpbmUiLCJNYWNoaW5lIiwiaW5pdGlhbCIsInN0YXRlcyIsInF1YWxxdWVyQ29pc2EiLCJvbiIsIlNVQk1JVCIsInRhcmdldCIsImNvbmQiLCJjb250ZXh0IiwiZXZlbnQiLCJkYXRhIiwibmFtZSIsImNhcmQiLCJsb2FkaW5nIiwiUEFZTUVOVF9SRUNFSVZFRCIsIlBBWU1FTlRfRkFJTEVEIiwiZXJyb3IiLCJzdWNjZXNzIiwidHlwZSIsIkFwcCIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxPQUFwQixFQUE2QjtBQUFBOztBQUMzQixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUNILE9BQU8sQ0FBQ0ksWUFBVCxDQUF0QztBQUVBLFFBQU1DLE9BQU8sR0FBR0MscURBQU8sQ0FDckIsTUFDRUMsd0RBQVMsQ0FBQ1AsT0FBRCxDQUFULENBQ0dRLFlBREgsQ0FDaUJDLEtBQUQsSUFBVztBQUN2QixRQUFJQSxLQUFLLENBQUNDLE9BQVYsRUFBbUI7QUFDakJSLGdCQUFVLENBQUNPLEtBQUQsQ0FBVjtBQUNEO0FBQ0YsR0FMSCxFQU1HRSxLQU5ILEVBRm1CLEVBU3JCLEVBVHFCLENBQXZCO0FBWUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkLFdBQU8sTUFBTVAsT0FBTyxDQUFDUSxJQUFSLEVBQWI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsU0FBTyxDQUFDWixPQUFELEVBQVVJLE9BQU8sQ0FBQ1MsSUFBbEIsQ0FBUDtBQUNEOztHQXBCUWYsVTs7QUFzQlQsTUFBTWdCLFlBQVksR0FBR0Msc0RBQU8sQ0FBQztBQUMzQkMsU0FBTyxFQUFFLE1BRGtCO0FBRTNCQyxRQUFNLEVBQUU7QUFDTkMsaUJBQWEsRUFBRTtBQUNiQyxRQUFFLEVBQUU7QUFDRkMsY0FBTSxFQUFFLENBQ047QUFDRUMsZ0JBQU0sRUFBRSxTQURWO0FBRUVDLGNBQUksRUFBRSxDQUFDQyxPQUFELEVBQVVDLEtBQVYsS0FDSkEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLElBQVgsS0FBb0IsRUFBcEIsSUFBMEJGLEtBQUssQ0FBQ0MsSUFBTixDQUFXRSxJQUFYLEtBQW9CO0FBSGxELFNBRE0sRUFNTjtBQUNFTixnQkFBTSxFQUFFO0FBRFYsU0FOTTtBQUROO0FBRFMsS0FEVDtBQWVOTyxXQUFPLEVBQUU7QUFDUFQsUUFBRSxFQUFFO0FBQ0ZVLHdCQUFnQixFQUFFLFNBRGhCO0FBRUZDLHNCQUFjLEVBQUU7QUFGZDtBQURHLEtBZkg7QUFxQk5DLFNBQUssRUFBRTtBQUNMWixRQUFFLEVBQUU7QUFDRkMsY0FBTSxFQUFFO0FBRE47QUFEQyxLQXJCRDtBQTBCTlksV0FBTyxFQUFFO0FBQ1BDLFVBQUksRUFBRTtBQURDO0FBMUJIO0FBRm1CLENBQUQsQ0FBNUI7O0FBa0NBLE1BQU1DLEdBQUcsR0FBRyxNQUFNO0FBQUE7O0FBQ2hCLFFBQU0sQ0FBQ25DLE9BQUQsRUFBVWMsSUFBVixJQUFrQmYsVUFBVSxDQUFDZ0IsWUFBRCxDQUFsQztBQUNBcUIsU0FBTyxDQUFDQyxHQUFSLENBQVlyQyxPQUFPLENBQUNzQyxLQUFwQjtBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLENBREYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFFLEVBQUMsWUFBdEI7QUFBbUMsYUFBUyxFQUFDLEtBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUUsRUFBQyxrQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBTEYsRUFTRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLE1BQUUsRUFBQyxXQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBVEYsQ0FERixDQUxGLENBREY7QUF1QkQsQ0EzQkQ7O0lBQU1ILEc7VUFDb0JwQyxVOzs7S0FEcEJvQyxHO0FBNkJTQSxrRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybVwiO1xuLy8gaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXJcIjtcblxuLy8gY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyAgICAgc3VwZXIocHJvcHMpO1xuLy8gICAgIHRoaXMuc3RhdGUgPSB7fTtcbi8vICAgfVxuXG4vLyAgIHJlbmRlcigpIHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPGRpdj5cbi8vICAgICAgICAgPEZvcm0gLz5cbi8vICAgICAgICAgPEZvb3RlciAvPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vICAgfVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBIb21lO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZU1lbW8sIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWFjaGluZSwgaW50ZXJwcmV0IH0gZnJvbSBcInhzdGF0ZVwiO1xuXG5mdW5jdGlvbiB1c2VNYWNoaW5lKG1hY2hpbmUpIHtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUobWFjaGluZS5pbml0aWFsU3RhdGUpO1xuXG4gIGNvbnN0IHNlcnZpY2UgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBpbnRlcnByZXQobWFjaGluZSlcbiAgICAgICAgLm9uVHJhbnNpdGlvbigoc3RhdGUpID0+IHtcbiAgICAgICAgICBpZiAoc3RhdGUuY2hhbmdlZCkge1xuICAgICAgICAgICAgc2V0Q3VycmVudChzdGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuc3RhcnQoKSxcbiAgICBbXVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHNlcnZpY2Uuc3RvcCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIFtjdXJyZW50LCBzZXJ2aWNlLnNlbmRdO1xufVxuXG5jb25zdCBzdGF0ZU1hY2hpbmUgPSBNYWNoaW5lKHtcbiAgaW5pdGlhbDogXCJpZGxlXCIsXG4gIHN0YXRlczoge1xuICAgIHF1YWxxdWVyQ29pc2E6IHtcbiAgICAgIG9uOiB7XG4gICAgICAgIFNVQk1JVDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRhcmdldDogXCJsb2FkaW5nXCIsXG4gICAgICAgICAgICBjb25kOiAoY29udGV4dCwgZXZlbnQpID0+XG4gICAgICAgICAgICAgIGV2ZW50LmRhdGEubmFtZSAhPT0gXCJcIiAmJiBldmVudC5kYXRhLmNhcmQgIT09IFwiXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0YXJnZXQ6IFwiZXJyb3JcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGxvYWRpbmc6IHtcbiAgICAgIG9uOiB7XG4gICAgICAgIFBBWU1FTlRfUkVDRUlWRUQ6IFwic3VjY2Vzc1wiLFxuICAgICAgICBQQVlNRU5UX0ZBSUxFRDogXCJlcnJvclwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBvbjoge1xuICAgICAgICBTVUJNSVQ6IFwibG9hZGluZ1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IHtcbiAgICAgIHR5cGU6IFwiZmluYWxcIixcbiAgICB9LFxuICB9LFxufSk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgW21hY2hpbmUsIHNlbmRdID0gdXNlTWFjaGluZShzdGF0ZU1hY2hpbmUpO1xuICBjb25zb2xlLmxvZyhtYWNoaW5lLnZhbHVlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+U3RhdGUgTWFjaGluZSBQYXltZW50PC9oMj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsPm5hbWUgb24gY2FyZDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVPbkNhcmRcIiBtYXhMZW5ndGg9XCIyNTVcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWw+Y2FyZCBudW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjcmVkaXRDYXJkTnVtYmVyXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cInBheUJ1dHRvblwiPlxuICAgICAgICAgICAgPHNwYW4+cGF5IG5vdzwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})