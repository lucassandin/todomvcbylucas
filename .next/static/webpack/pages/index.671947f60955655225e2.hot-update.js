webpackHotUpdate_N_E("pages/index",{

/***/ "./components/todos/index.js":
/*!***********************************!*\
  !*** ./components/todos/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xstate */ \"./node_modules/xstate/es/index.js\");\nvar _s = $RefreshSig$(),\n    _jsxFileName = \"/Users/lucas/developments/reactjs/todomvccopy/components/todos/index.js\",\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst useMachine = machine => {\n  _s();\n\n  const {\n    0: current,\n    1: setCurrent\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(machine.initialState);\n  const service = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => Object(xstate__WEBPACK_IMPORTED_MODULE_1__[\"interpret\"])(machine).onTransition(state => {\n    if (state.changed) {\n      setCurrent(state);\n    }\n  }).start(), []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    return () => service.stop();\n  }, []);\n  return [current, service.send];\n};\n\n_s(useMachine, \"N8luULfBWGYCeClt5AuKgM0ZvFA=\");\n\nconst todoMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_1__[\"Machine\"])({\n  initial: \"all\",\n  states: {\n    all: {// all\n    },\n    active: {// actives\n    },\n    complete: {// completes\n    }\n  }\n});\n\nconst Todos = () => {\n  _s2();\n\n  const [machine, send] = useMachine(todoMachine);\n  const {\n    0: todos,\n    1: setTodos\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    list: [{\n      id: 1,\n      value: \"task 1\",\n      complete: false\n    }, {\n      id: 2,\n      value: \"task 2\",\n      complete: false\n    }, {\n      id: 3,\n      value: \"task 3\",\n      complete: false\n    }, {\n      id: 4,\n      value: \"task 4\",\n      complete: false\n    }]\n  });\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, __jsx(\"form\", {\n    onSubmit: e => {\n      e.preventDefault();\n      let teste = [...todos.list, {\n        id: Math.floor(Math.random() * 1000 + 1),\n        value: e.target.value,\n        complete: false\n      }];\n      console.log();\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    id: \"todo\",\n    name: \"todo\",\n    placeholder: \"Task here\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    type: \"submit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, \"save\")), todos.list && todos.list.map(t => __jsx(\"li\", {\n    key: t.id,\n    style: t.styled,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"checkbox\",\n    id: t.id,\n    name: \"register\",\n    value: t.value,\n    onChange: e => undefined.props.change(e),\n    checked: t.complete,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  }), t.value)), __jsx(\"button\", {\n    type: \"button\",\n    onClick: {},\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }\n  }, \"All\"), __jsx(\"button\", {\n    type: \"button\",\n    onClick: {},\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }\n  }, \"Active\"), __jsx(\"button\", {\n    type: \"button\",\n    onClick: {},\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }\n  }, \"Complete\"));\n};\n\n_s2(Todos, \"VaPzmxBsjJ/mktGAN2Bkp1gZ4EU=\", false, function () {\n  return [useMachine];\n});\n\n_c = Todos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todos);\n\nvar _c;\n\n$RefreshReg$(_c, \"Todos\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b2Rvcy9pbmRleC5qcz9kZWUyIl0sIm5hbWVzIjpbInVzZU1hY2hpbmUiLCJtYWNoaW5lIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJ1c2VTdGF0ZSIsImluaXRpYWxTdGF0ZSIsInNlcnZpY2UiLCJ1c2VNZW1vIiwiaW50ZXJwcmV0Iiwib25UcmFuc2l0aW9uIiwic3RhdGUiLCJjaGFuZ2VkIiwic3RhcnQiLCJ1c2VFZmZlY3QiLCJzdG9wIiwic2VuZCIsInRvZG9NYWNoaW5lIiwiTWFjaGluZSIsImluaXRpYWwiLCJzdGF0ZXMiLCJhbGwiLCJhY3RpdmUiLCJjb21wbGV0ZSIsIlRvZG9zIiwidG9kb3MiLCJzZXRUb2RvcyIsImxpc3QiLCJpZCIsInZhbHVlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGVzdGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwibWFwIiwidCIsInN0eWxlZCIsInByb3BzIiwiY2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFVBQVUsR0FBSUMsT0FBRCxJQUFhO0FBQUE7O0FBQzlCLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQ0gsT0FBTyxDQUFDSSxZQUFULENBQXRDO0FBRUEsUUFBTUMsT0FBTyxHQUFHQyxxREFBTyxDQUNyQixNQUNFQyx3REFBUyxDQUFDUCxPQUFELENBQVQsQ0FDR1EsWUFESCxDQUNpQkMsS0FBRCxJQUFXO0FBQ3ZCLFFBQUlBLEtBQUssQ0FBQ0MsT0FBVixFQUFtQjtBQUNqQlIsZ0JBQVUsQ0FBQ08sS0FBRCxDQUFWO0FBQ0Q7QUFDRixHQUxILEVBTUdFLEtBTkgsRUFGbUIsRUFTckIsRUFUcUIsQ0FBdkI7QUFZQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsV0FBTyxNQUFNUCxPQUFPLENBQUNRLElBQVIsRUFB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S0FUTCxDQURGLENBMUJKLEVBd0NFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsV0FBTyxFQUFFLEVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0F4Q0YsRUEyQ0U7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLEVBQUUsRUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNDRixFQThDRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFdBQU8sRUFBRSxFQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTlDRixDQURGO0FBb0RELENBL0REOztJQUFNTCxLO1VBQ29CdkIsVTs7O0tBRHBCdUIsSztBQWlFU0Esb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3RvZG9zL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VNZW1vLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1hY2hpbmUsIGludGVycHJldCB9IGZyb20gXCJ4c3RhdGVcIjtcblxuY29uc3QgdXNlTWFjaGluZSA9IChtYWNoaW5lKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKG1hY2hpbmUuaW5pdGlhbFN0YXRlKTtcblxuICBjb25zdCBzZXJ2aWNlID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgaW50ZXJwcmV0KG1hY2hpbmUpXG4gICAgICAgIC5vblRyYW5zaXRpb24oKHN0YXRlKSA9PiB7XG4gICAgICAgICAgaWYgKHN0YXRlLmNoYW5nZWQpIHtcbiAgICAgICAgICAgIHNldEN1cnJlbnQoc3RhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXJ0KCksXG4gICAgW11cbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiBzZXJ2aWNlLnN0b3AoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBbY3VycmVudCwgc2VydmljZS5zZW5kXTtcbn07XG5cbmNvbnN0IHRvZG9NYWNoaW5lID0gTWFjaGluZSh7XG4gIGluaXRpYWw6IFwiYWxsXCIsXG4gIHN0YXRlczoge1xuICAgIGFsbDoge1xuICAgICAgLy8gYWxsXG4gICAgfSxcbiAgICBhY3RpdmU6IHtcbiAgICAgIC8vIGFjdGl2ZXNcbiAgICB9LFxuICAgIGNvbXBsZXRlOiB7XG4gICAgICAvLyBjb21wbGV0ZXNcbiAgICB9LFxuICB9LFxufSk7XG5cbmNvbnN0IFRvZG9zID0gKCkgPT4ge1xuICBjb25zdCBbbWFjaGluZSwgc2VuZF0gPSB1c2VNYWNoaW5lKHRvZG9NYWNoaW5lKTtcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZSh7XG4gICAgbGlzdDogW1xuICAgICAgeyBpZDogMSwgdmFsdWU6IFwidGFzayAxXCIsIGNvbXBsZXRlOiBmYWxzZSB9LFxuICAgICAgeyBpZDogMiwgdmFsdWU6IFwidGFzayAyXCIsIGNvbXBsZXRlOiBmYWxzZSB9LFxuICAgICAgeyBpZDogMywgdmFsdWU6IFwidGFzayAzXCIsIGNvbXBsZXRlOiBmYWxzZSB9LFxuICAgICAgeyBpZDogNCwgdmFsdWU6IFwidGFzayA0XCIsIGNvbXBsZXRlOiBmYWxzZSB9LFxuICAgIF0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtXG4gICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBsZXQgdGVzdGUgPSBbXG4gICAgICAgICAgICAuLi50b2Rvcy5saXN0LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCArIDEpLFxuICAgICAgICAgICAgICB2YWx1ZTogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXTtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKCk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBpZD1cInRvZG9cIlxuICAgICAgICAgIG5hbWU9XCJ0b2RvXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRhc2sgaGVyZVwiXG4gICAgICAgID48L2lucHV0PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5zYXZlPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIHt0b2Rvcy5saXN0ICYmXG4gICAgICAgIHRvZG9zLmxpc3QubWFwKCh0KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17dC5pZH0gc3R5bGU9e3Quc3R5bGVkfT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBpZD17dC5pZH1cbiAgICAgICAgICAgICAgbmFtZT1cInJlZ2lzdGVyXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3QudmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5wcm9wcy5jaGFuZ2UoZSl9XG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3QuY29tcGxldGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3QudmFsdWV9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3t9fT5cbiAgICAgICAgQWxsXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3t9fT5cbiAgICAgICAgQWN0aXZlXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3t9fT5cbiAgICAgICAgQ29tcGxldGVcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb3M7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/todos/index.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false

})