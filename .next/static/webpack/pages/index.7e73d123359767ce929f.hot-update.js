webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xstate */ \"./node_modules/xstate/es/index.js\");\nvar _jsxFileName = \"/Users/lucas/developments/reactjs/todomvccopy/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// import React, { Component } from \"react\";\n// import Form from \"../components/form\";\n// import Footer from \"../components/footer\";\n// class Home extends Component {\n//   constructor(props) {\n//     super(props);\n//     this.state = {};\n//   }\n//   render() {\n//     return (\n//       <div>\n//         <Form />\n//         <Footer />\n//       </div>\n//     );\n//   }\n// }\n// export default Home;\n\n\nconst lighMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_1__[\"Machine\"])({\n  // id\n  id: \"light\",\n  // initial state\n  initial: \"green\",\n  // context\n  context: {\n    // decorrido\n    elapsed: 0,\n    direction: \"east\"\n  },\n  // state definitions\n  states: {\n    green: {\n      //\n      entry: \"alertGreen\"\n    },\n    yellow: {//\n    },\n    red: {//\n    }\n  }\n}, {\n  actions: {\n    // action implementation\n    alertGreen: (context, event) => {\n      alert(\"green!\");\n    }\n  }\n});\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 12\n      }\n    }, \"testes\");\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJsaWdoTWFjaGluZSIsIk1hY2hpbmUiLCJpZCIsImluaXRpYWwiLCJjb250ZXh0IiwiZWxhcHNlZCIsImRpcmVjdGlvbiIsInN0YXRlcyIsImdyZWVuIiwiZW50cnkiLCJ5ZWxsb3ciLCJyZWQiLCJhY3Rpb25zIiwiYWxlcnRHcmVlbiIsImV2ZW50IiwiYWxlcnQiLCJIb21lIiwiQ29tcG9uZW50IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBV0EsTUFBTUEsV0FBVyxHQUFHQyxzREFBTyxDQUN6QjtBQUNFO0FBQ0FDLElBQUUsRUFBRSxPQUZOO0FBSUU7QUFDQUMsU0FBTyxFQUFFLE9BTFg7QUFPRTtBQUNBQyxTQUFPLEVBQUU7QUFDUDtBQUNBQyxXQUFPLEVBQUUsQ0FGRjtBQUdQQyxhQUFTLEVBQUU7QUFISixHQVJYO0FBY0U7QUFDQUMsUUFBTSxFQUFFO0FBQ05DLFNBQUssRUFBRTtBQUNMO0FBQ0FDLFdBQUssRUFBRTtBQUZGLEtBREQ7QUFLTkMsVUFBTSxFQUFFLENBQ047QUFETSxLQUxGO0FBUU5DLE9BQUcsRUFBRSxDQUNIO0FBREc7QUFSQztBQWZWLENBRHlCLEVBNkJ6QjtBQUNFQyxTQUFPLEVBQUU7QUFDUDtBQUNBQyxjQUFVLEVBQUUsQ0FBQ1QsT0FBRCxFQUFVVSxLQUFWLEtBQW9CO0FBQzlCQyxXQUFLLENBQUMsUUFBRCxDQUFMO0FBQ0Q7QUFKTTtBQURYLENBN0J5QixDQUEzQjs7QUF1Q0EsTUFBTUMsSUFBTixTQUFtQkMsK0NBQW5CLENBQTZCO0FBQzNCQyxRQUFNLEdBQUc7QUFDUCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVA7QUFDRDs7QUFIMEI7O0FBTWRGLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3JtXCI7XG4vLyBpbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3RlclwiO1xuXG4vLyBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbi8vICAgY29uc3RydWN0b3IocHJvcHMpIHtcbi8vICAgICBzdXBlcihwcm9wcyk7XG4vLyAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuLy8gICB9XG5cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8Rm9ybSAvPlxuLy8gICAgICAgICA8Rm9vdGVyIC8+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gICB9XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIE1hY2hpbmUsXG4gIFN0YXRlLFxuICBhY3Rpb25zLFxuICBhc3NpZ24sXG4gIHNlbmQsXG4gIHNlbmRQYXJlbnQsXG4gIGludGVycHJldCxcbiAgc3Bhd24sXG59IGZyb20gXCJ4c3RhdGVcIjtcblxuY29uc3QgbGlnaE1hY2hpbmUgPSBNYWNoaW5lKFxuICB7XG4gICAgLy8gaWRcbiAgICBpZDogXCJsaWdodFwiLFxuXG4gICAgLy8gaW5pdGlhbCBzdGF0ZVxuICAgIGluaXRpYWw6IFwiZ3JlZW5cIixcblxuICAgIC8vIGNvbnRleHRcbiAgICBjb250ZXh0OiB7XG4gICAgICAvLyBkZWNvcnJpZG9cbiAgICAgIGVsYXBzZWQ6IDAsXG4gICAgICBkaXJlY3Rpb246IFwiZWFzdFwiLFxuICAgIH0sXG5cbiAgICAvLyBzdGF0ZSBkZWZpbml0aW9uc1xuICAgIHN0YXRlczoge1xuICAgICAgZ3JlZW46IHtcbiAgICAgICAgLy9cbiAgICAgICAgZW50cnk6IFwiYWxlcnRHcmVlblwiLFxuICAgICAgfSxcbiAgICAgIHllbGxvdzoge1xuICAgICAgICAvL1xuICAgICAgfSxcbiAgICAgIHJlZDoge1xuICAgICAgICAvL1xuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgYWN0aW9uczoge1xuICAgICAgLy8gYWN0aW9uIGltcGxlbWVudGF0aW9uXG4gICAgICBhbGVydEdyZWVuOiAoY29udGV4dCwgZXZlbnQpID0+IHtcbiAgICAgICAgYWxlcnQoXCJncmVlbiFcIik7XG4gICAgICB9LFxuICAgIH0sXG4gIH1cbik7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXY+dGVzdGVzPC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})