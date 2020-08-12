webpackHotUpdate_N_E("pages/index",{

/***/ "./components/todos/index.js":
/*!***********************************!*\
  !*** ./components/todos/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/lucas/developments/reactjs/todomvccopy/components/todos/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Todos = () => {\n  const [todos, getTodos] = [];\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"form\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    id: \"todo\",\n    name: \"todo\",\n    placeholder: \"Task here\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  })), todos && todos.map(t => __jsx(\"li\", {\n    key: t.id,\n    style: t.styled,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"checkbox\",\n    id: t.id,\n    name: \"register\",\n    value: t.value,\n    onChange: e => undefined.props.change(e),\n    checked: t.complete,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }), t.value)), __jsx(\"button\", {\n    type: \"button\",\n    onClick: {},\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, \"All\"), __jsx(\"button\", {\n    type: \"button\",\n    onClick: {},\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, \"Active\"), __jsx(\"button\", {\n    type: \"button\",\n    onClick: {},\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, \"Complete\"));\n};\n\n_c = Todos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todos);\n\nvar _c;\n\n$RefreshReg$(_c, \"Todos\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b2Rvcy9pbmRleC5qcz9kZWUyIl0sIm5hbWVzIjpbIlRvZG9zIiwidG9kb3MiLCJnZXRUb2RvcyIsIm1hcCIsInQiLCJpZCIsInN0eWxlZCIsInZhbHVlIiwiZSIsInByb3BzIiwiY2hhbmdlIiwiY29tcGxldGUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLE1BQU07QUFDbEIsUUFBTSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsSUFBb0IsRUFBMUI7QUFFQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLE1BQUUsRUFBQyxNQUZMO0FBR0UsUUFBSSxFQUFDLE1BSFA7QUFJRSxlQUFXLEVBQUMsV0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVVHRCxLQUFLLElBQ0pBLEtBQUssQ0FBQ0UsR0FBTixDQUFXQyxDQUFELElBQ1I7QUFBSSxPQUFHLEVBQUVBLENBQUMsQ0FBQ0MsRUFBWDtBQUFlLFNBQUssRUFBRUQsQ0FBQyxDQUFDRSxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsVUFEUDtBQUVFLE1BQUUsRUFBRUYsQ0FBQyxDQUFDQyxFQUZSO0FBR0UsUUFBSSxFQUFDLFVBSFA7QUFJRSxTQUFLLEVBQUVELENBQUMsQ0FBQ0csS0FKWDtBQUtFLFlBQVEsRUFBR0MsQ0FBRCxJQUFPLFNBQUksQ0FBQ0MsS0FBTCxDQUFXQyxNQUFYLENBQWtCRixDQUFsQixDQUxuQjtBQU1FLFdBQU8sRUFBRUosQ0FBQyxDQUFDTyxRQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVNHUCxDQUFDLENBQUNHLEtBVEwsQ0FERixDQVhKLEVBeUJFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsV0FBTyxFQUFFLEVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0F6QkYsRUE0QkU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLEVBQUUsRUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVCRixFQStCRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFdBQU8sRUFBRSxFQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9CRixDQURGO0FBcUNELENBeENEOztLQUFNUCxLO0FBMENTQSxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdG9kb3MvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZU1lbW8sIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBUb2RvcyA9ICgpID0+IHtcbiAgY29uc3QgW3RvZG9zLCBnZXRUb2Rvc10gPSBbXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlkPVwidG9kb1wiXG4gICAgICAgICAgbmFtZT1cInRvZG9cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGFzayBoZXJlXCJcbiAgICAgICAgPjwvaW5wdXQ+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIHt0b2RvcyAmJlxuICAgICAgICB0b2Rvcy5tYXAoKHQpID0+IChcbiAgICAgICAgICA8bGkga2V5PXt0LmlkfSBzdHlsZT17dC5zdHlsZWR9PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGlkPXt0LmlkfVxuICAgICAgICAgICAgICBuYW1lPVwicmVnaXN0ZXJcIlxuICAgICAgICAgICAgICB2YWx1ZT17dC52YWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnByb3BzLmNoYW5nZShlKX1cbiAgICAgICAgICAgICAgY2hlY2tlZD17dC5jb21wbGV0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7dC52YWx1ZX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cblxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17e319PlxuICAgICAgICBBbGxcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17e319PlxuICAgICAgICBBY3RpdmVcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17e319PlxuICAgICAgICBDb21wbGV0ZVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/todos/index.js\n");

/***/ })

})