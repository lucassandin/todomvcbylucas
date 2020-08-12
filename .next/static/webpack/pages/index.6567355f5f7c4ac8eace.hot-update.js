webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xstate */ \"./node_modules/xstate/es/index.js\");\n\n\nvar _s = $RefreshSig$(),\n    _jsxFileName = \"/Users/lucas/developments/reactjs/todomvccopy/pages/index.js\",\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// import React, { Component } from \"react\";\n// import Form from \"../components/form\";\n// import Footer from \"../components/footer\";\n// class Home extends Component {\n//   constructor(props) {\n//     super(props);\n//     this.state = {};\n//   }\n//   render() {\n//     return (\n//       <div>\n//         <Form />\n//         <Footer />\n//       </div>\n//     );\n//   }\n// }\n// export default Home;\n\n\n\nfunction useMachine(machine) {\n  _s();\n\n  const {\n    0: current,\n    1: setCurrent\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(machine.initialState);\n  const service = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(() => Object(xstate__WEBPACK_IMPORTED_MODULE_2__[\"interpret\"])(machine).onTransition(state => {\n    if (state.changed) {\n      setCurrent(state);\n    }\n  }).start(), []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    return () => service.stop();\n  }, []);\n  return [current, service.send];\n}\n\n_s(useMachine, \"N8luULfBWGYCeClt5AuKgM0ZvFA=\");\n\nconst stateMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_2__[\"Machine\"])({\n  initial: \"idle\",\n  states: {\n    idle: {\n      on: {\n        SUBMIT: [{\n          target: \"loading\",\n          cond: (context, event) => {\n            console.log(event.data);\n            return event.data.name !== \"\" && event.data.card !== \"\";\n          }\n        }, {\n          target: \"error\"\n        }]\n      }\n    },\n    loading: {\n      on: {\n        PAYMENT_RECEIVED: \"success\",\n        PAYMENT_FAILED: \"error\"\n      }\n    },\n    error: {\n      on: {\n        SUBMIT: \"loading\"\n      }\n    },\n    success: {\n      type: \"final\"\n    }\n  }\n});\n\nconst App = () => {\n  _s2();\n\n  const [machine, send] = useMachine(stateMachine);\n  const {\n    0: form,\n    1: updateForm\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    name: \"\",\n    card: \"\"\n  });\n  console.log(form);\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 9\n    }\n  }, \"State Machine Payment\")), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }\n  }, __jsx(\"form\", {\n    onSubmit: e => {\n      e.preventDefault();\n      send({\n        type: \"SUBMIT\",\n        data: _objectSpread({}, form)\n      });\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 13\n    }\n  }, \"name on card\"), __jsx(\"input\", {\n    type: \"text\",\n    id: \"nameOnCard\",\n    maxLength: \"255\",\n    value: form.name,\n    onChange: e => updateForm(_objectSpread(_objectSpread({}, form), {}, {\n      name: e.target.value\n    })),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 13\n    }\n  }, \"card number\"), __jsx(\"input\", {\n    type: \"text\",\n    id: \"creditCardNumber\",\n    value: form.card,\n    onChange: e => updateForm(_objectSpread(_objectSpread({}, form), {}, {\n      card: e.target.value\n    })),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 13\n    }\n  })), __jsx(\"button\", {\n    type: \"submit\",\n    id: \"payButton\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 13\n    }\n  }, \"pay now\")))));\n};\n\n_s2(App, \"iogDaXWqQ1sp5IFhTC/2KVjMWCs=\", false, function () {\n  return [useMachine];\n});\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJ1c2VNYWNoaW5lIiwibWFjaGluZSIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwidXNlU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJzZXJ2aWNlIiwidXNlTWVtbyIsImludGVycHJldCIsIm9uVHJhbnNpdGlvbiIsInN0YXRlIiwiY2hhbmdlZCIsInN0YXJ0IiwidXNlRWZmZWN0Iiwic3RvcCIsInNlbmQiLCJzdGF0ZU1hY2hpbmUiLCJNYWNoaW5lIiwiaW5pdGlhbCIsInN0YXRlcyIsImlkbGUiLCJvbiIsIlNVQk1JVCIsInRhcmdldCIsImNvbmQiLCJjb250ZXh0IiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm5hbWUiLCJjYXJkIiwibG9hZGluZyIsIlBBWU1FTlRfUkVDRUlWRUQiLCJQQVlNRU5UX0ZBSUxFRCIsImVycm9yIiwic3VjY2VzcyIsInR5cGUiLCJBcHAiLCJmb3JtIiwidXBkYXRlRm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsT0FBcEIsRUFBNkI7QUFBQTs7QUFDM0IsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDSCxPQUFPLENBQUNJLFlBQVQsQ0FBdEM7QUFFQSxRQUFNQyxPQUFPLEdBQUdDLHFEQUFPLENBQ3JCLE1BQ0VDLHdEQUFTLENBQUNQLE9BQUQsQ0FBVCxDQUNHUSxZQURILENBQ2lCQyxLQUFELElBQVc7QUFDdkIsUUFBSUEsS0FBSyxDQUFDQyxPQUFWLEVBQW1CO0FBQ2pCUixnQkFBVSxD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S0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUU7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLE1BQUUsRUFBQyxrQkFGTDtBQUdFLFNBQUssRUFBRUosSUFBSSxDQUFDUixJQUhkO0FBSUUsWUFBUSxFQUFHVSxDQUFELElBQU9ELFVBQVUsaUNBQU1ELElBQU47QUFBWVIsVUFBSSxFQUFFVSxDQUFDLENBQUNsQixNQUFGLENBQVNvQjtBQUEzQixPQUo3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FoQkYsRUF5QkU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixNQUFFLEVBQUMsV0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQXpCRixDQURGLENBTEYsQ0FERjtBQXVDRCxDQWhERDs7SUFBTUwsRztVQUNvQnRDLFU7OztLQURwQnNDLEc7QUFrRFNBLGtFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3JtXCI7XG4vLyBpbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3RlclwiO1xuXG4vLyBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbi8vICAgY29uc3RydWN0b3IocHJvcHMpIHtcbi8vICAgICBzdXBlcihwcm9wcyk7XG4vLyAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuLy8gICB9XG5cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8Rm9ybSAvPlxuLy8gICAgICAgICA8Rm9vdGVyIC8+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gICB9XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNYWNoaW5lLCBpbnRlcnByZXQgfSBmcm9tIFwieHN0YXRlXCI7XG5cbmZ1bmN0aW9uIHVzZU1hY2hpbmUobWFjaGluZSkge1xuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShtYWNoaW5lLmluaXRpYWxTdGF0ZSk7XG5cbiAgY29uc3Qgc2VydmljZSA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIGludGVycHJldChtYWNoaW5lKVxuICAgICAgICAub25UcmFuc2l0aW9uKChzdGF0ZSkgPT4ge1xuICAgICAgICAgIGlmIChzdGF0ZS5jaGFuZ2VkKSB7XG4gICAgICAgICAgICBzZXRDdXJyZW50KHN0YXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5zdGFydCgpLFxuICAgIFtdXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4gc2VydmljZS5zdG9wKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gW2N1cnJlbnQsIHNlcnZpY2Uuc2VuZF07XG59XG5cbmNvbnN0IHN0YXRlTWFjaGluZSA9IE1hY2hpbmUoe1xuICBpbml0aWFsOiBcImlkbGVcIixcbiAgc3RhdGVzOiB7XG4gICAgaWRsZToge1xuICAgICAgb246IHtcbiAgICAgICAgU1VCTUlUOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGFyZ2V0OiBcImxvYWRpbmdcIixcbiAgICAgICAgICAgIGNvbmQ6IChjb250ZXh0LCBldmVudCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC5kYXRhKTtcblxuICAgICAgICAgICAgICByZXR1cm4gZXZlbnQuZGF0YS5uYW1lICE9PSBcIlwiICYmIGV2ZW50LmRhdGEuY2FyZCAhPT0gXCJcIjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0YXJnZXQ6IFwiZXJyb3JcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGxvYWRpbmc6IHtcbiAgICAgIG9uOiB7XG4gICAgICAgIFBBWU1FTlRfUkVDRUlWRUQ6IFwic3VjY2Vzc1wiLFxuICAgICAgICBQQVlNRU5UX0ZBSUxFRDogXCJlcnJvclwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBvbjoge1xuICAgICAgICBTVUJNSVQ6IFwibG9hZGluZ1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IHtcbiAgICAgIHR5cGU6IFwiZmluYWxcIixcbiAgICB9LFxuICB9LFxufSk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgW21hY2hpbmUsIHNlbmRdID0gdXNlTWFjaGluZShzdGF0ZU1hY2hpbmUpO1xuICBjb25zdCBbZm9ybSwgdXBkYXRlRm9ybV0gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogXCJcIixcbiAgICBjYXJkOiBcIlwiLFxuICB9KTtcblxuICBjb25zb2xlLmxvZyhmb3JtKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+U3RhdGUgTWFjaGluZSBQYXltZW50PC9oMj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybVxuICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2VuZCh7IHR5cGU6IFwiU1VCTUlUXCIsIGRhdGE6IHsgLi4uZm9ybSB9IH0pO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsPm5hbWUgb24gY2FyZDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpZD1cIm5hbWVPbkNhcmRcIlxuICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIyNTVcIlxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5uYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUZvcm0oeyAuLi5mb3JtLCBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbD5jYXJkIG51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpZD1cImNyZWRpdENhcmROdW1iZXJcIlxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5jYXJkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUZvcm0oeyAuLi5mb3JtLCBjYXJkOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJwYXlCdXR0b25cIj5cbiAgICAgICAgICAgIDxzcGFuPnBheSBub3c8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})