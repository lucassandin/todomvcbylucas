webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xstate */ \"./node_modules/xstate/es/index.js\");\n// import React, { Component } from \"react\";\n// import Form from \"../components/form\";\n// import Footer from \"../components/footer\";\n// class Home extends Component {\n//   constructor(props) {\n//     super(props);\n//     this.state = {};\n//   }\n//   render() {\n//     return (\n//       <div>\n//         <Form />\n//         <Footer />\n//       </div>\n//     );\n//   }\n// }\n// export default Home;\n\nconst machine = Object(xstate__WEBPACK_IMPORTED_MODULE_0__[\"Machine\"])({\n  id: \"trafficlights\",\n  initial: \"green\",\n  states: {\n    green: {\n      on: {\n        TIMER: \"yellow\"\n      }\n    },\n    yellow: {\n      on: {\n        TIMER: \"red\"\n      }\n    },\n    red: {\n      on: {\n        TIMER: \"green\"\n      }\n    }\n  }\n});\nconst currentState = machine.initialState.value;\nconst newState = machine.transition(currentState, \"TIMER\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJtYWNoaW5lIiwiTWFjaGluZSIsImlkIiwiaW5pdGlhbCIsInN0YXRlcyIsImdyZWVuIiwib24iLCJUSU1FUiIsInllbGxvdyIsInJlZCIsImN1cnJlbnRTdGF0ZSIsImluaXRpYWxTdGF0ZSIsInZhbHVlIiwibmV3U3RhdGUiLCJ0cmFuc2l0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQSxNQUFNQSxPQUFPLEdBQUdDLHNEQUFPLENBQUM7QUFDdEJDLElBQUUsRUFBRSxlQURrQjtBQUV0QkMsU0FBTyxFQUFFLE9BRmE7QUFHdEJDLFFBQU0sRUFBRTtBQUNOQyxTQUFLLEVBQUU7QUFDTEMsUUFBRSxFQUFFO0FBQ0ZDLGFBQUssRUFBRTtBQURMO0FBREMsS0FERDtBQU1OQyxVQUFNLEVBQUU7QUFDTkYsUUFBRSxFQUFFO0FBQ0ZDLGFBQUssRUFBRTtBQURMO0FBREUsS0FORjtBQVdORSxPQUFHLEVBQUU7QUFDSEgsUUFBRSxFQUFFO0FBQ0ZDLGFBQUssRUFBRTtBQURMO0FBREQ7QUFYQztBQUhjLENBQUQsQ0FBdkI7QUFzQkEsTUFBTUcsWUFBWSxHQUFHVixPQUFPLENBQUNXLFlBQVIsQ0FBcUJDLEtBQTFDO0FBQ0EsTUFBTUMsUUFBUSxHQUFHYixPQUFPLENBQUNjLFVBQVIsQ0FBbUJKLFlBQW5CLEVBQWlDLE9BQWpDLENBQWpCIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3JtXCI7XG4vLyBpbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3RlclwiO1xuXG4vLyBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbi8vICAgY29uc3RydWN0b3IocHJvcHMpIHtcbi8vICAgICBzdXBlcihwcm9wcyk7XG4vLyAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuLy8gICB9XG5cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8Rm9ybSAvPlxuLy8gICAgICAgICA8Rm9vdGVyIC8+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gICB9XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbmltcG9ydCB7IE1hY2hpbmUsIGludGVycHJldCB9IGZyb20gXCJ4c3RhdGVcIjtcblxuY29uc3QgbWFjaGluZSA9IE1hY2hpbmUoe1xuICBpZDogXCJ0cmFmZmljbGlnaHRzXCIsXG4gIGluaXRpYWw6IFwiZ3JlZW5cIixcbiAgc3RhdGVzOiB7XG4gICAgZ3JlZW46IHtcbiAgICAgIG9uOiB7XG4gICAgICAgIFRJTUVSOiBcInllbGxvd1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHllbGxvdzoge1xuICAgICAgb246IHtcbiAgICAgICAgVElNRVI6IFwicmVkXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcmVkOiB7XG4gICAgICBvbjoge1xuICAgICAgICBUSU1FUjogXCJncmVlblwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG5cbmNvbnN0IGN1cnJlbnRTdGF0ZSA9IG1hY2hpbmUuaW5pdGlhbFN0YXRlLnZhbHVlO1xuY29uc3QgbmV3U3RhdGUgPSBtYWNoaW5lLnRyYW5zaXRpb24oY3VycmVudFN0YXRlLCBcIlRJTUVSXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})