webpackHotUpdate_N_E("pages/index",{

/***/ "./components/todos/index.js":
/*!***********************************!*\
  !*** ./components/todos/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xstate */ \"./node_modules/xstate/es/index.js\");\n\n\nvar _s = $RefreshSig$(),\n    _jsxFileName = \"/Users/lucas/developments/reactjs/todomvccopy/components/todos/index.js\",\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nconst useMachine = machine => {\n  _s();\n\n  const {\n    0: current,\n    1: setCurrent\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(machine.initialState);\n  const service = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(() => Object(xstate__WEBPACK_IMPORTED_MODULE_2__[\"interpret\"])(machine).onTransition(state => {\n    if (state.changed) {\n      setCurrent(state);\n    }\n  }).start(), []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    return () => service.stop();\n  }, []);\n  return [current, service.send];\n};\n\n_s(useMachine, \"N8luULfBWGYCeClt5AuKgM0ZvFA=\");\n\nconst todoMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_2__[\"Machine\"])({\n  initial: \"all\",\n  states: {\n    all: {// all\n    },\n    active: {// actives\n    },\n    complete: {// completes\n    }\n  }\n});\n\nconst Todos = () => {\n  _s2();\n\n  const [machine, send] = useMachine(todoMachine);\n  const {\n    0: todos,\n    1: setTodos\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    formulary: {\n      task: \"\"\n    },\n    list: [{\n      id: 1,\n      value: \"task 1\",\n      complete: false\n    }, {\n      id: 2,\n      value: \"task 2\",\n      complete: false\n    }, {\n      id: 3,\n      value: \"task 3\",\n      complete: false\n    }, {\n      id: 4,\n      value: \"task 4\",\n      complete: false\n    }]\n  });\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, __jsx(\"form\", {\n    onSubmit: e => {\n      e.preventDefault();\n      const formlary = [...todos.list, {\n        id: Math.floor(Math.random() * 1000 + 1),\n        value: e.target.value,\n        complete: false\n      }];\n      console.log(formlary);\n      setTodos(formlary);\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    id: \"todo\",\n    name: \"todo\",\n    placeholder: \"Task here\",\n    value: todos.formulary.task,\n    onChange: e => setTodos(_objectSpread(_objectSpread({}, todos.formulary), {}, {\n      task: e.target.value\n    })),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    type: \"submit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  }, \"save\")), todos.list && todos.list.map(t => __jsx(\"li\", {\n    key: t.id,\n    style: t.styled,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"checkbox\",\n    id: t.id,\n    name: \"register\",\n    value: t.value,\n    onChange: e => undefined.props.change(e),\n    checked: t.complete,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }\n  }), t.value)), __jsx(\"button\", {\n    type: \"button\",\n    onClick: {},\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }\n  }, \"All\"), __jsx(\"button\", {\n    type: \"button\",\n    onClick: {},\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }\n  }, \"Active\"), __jsx(\"button\", {\n    type: \"button\",\n    onClick: {},\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }\n  }, \"Complete\"));\n};\n\n_s2(Todos, \"t5tQHwInQ/Yn322YdPYgYeTFldU=\", false, function () {\n  return [useMachine];\n});\n\n_c = Todos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todos);\n\nvar _c;\n\n$RefreshReg$(_c, \"Todos\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b2Rvcy9pbmRleC5qcz9kZWUyIl0sIm5hbWVzIjpbInVzZU1hY2hpbmUiLCJtYWNoaW5lIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJ1c2VTdGF0ZSIsImluaXRpYWxTdGF0ZSIsInNlcnZpY2UiLCJ1c2VNZW1vIiwiaW50ZXJwcmV0Iiwib25UcmFuc2l0aW9uIiwic3RhdGUiLCJjaGFuZ2VkIiwic3RhcnQiLCJ1c2VFZmZlY3QiLCJzdG9wIiwic2VuZCIsInRvZG9NYWNoaW5lIiwiTWFjaGluZSIsImluaXRpYWwiLCJzdGF0ZXMiLCJhbGwiLCJhY3RpdmUiLCJjb21wbGV0ZSIsIlRvZG9zIiwidG9kb3MiLCJzZXRUb2RvcyIsImZvcm11bGFyeSIsInRhc2siLCJsaXN0IiwiaWQiLCJ2YWx1ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1sYXJ5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsIm1hcCIsInQiLCJzdHlsZWQiLCJwcm9wcyIsImNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFVBQVUsR0FBSUMsT0FBRCxJQUFhO0FBQUE7O0FBQzlCLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQ0gsT0FBTyxDQUFDSSxZQUFULENBQXRDO0FBRUEsUUFBTUMsT0FBTyxHQUFHQyxxREFBTyxDQUNyQixNQUNFQyx3REFBUyxDQUFDUCxPQUFELENBQVQsQ0FDR1EsWUFESCxDQUNpQkMsS0FBRCxJQUFXO0FBQ3ZCLFFBQUlBLEtBQUssQ0FBQ0MsT0FBVixFQUFtQjtBQUNqQlIsZ0JBQVUsQ0FBQ08sS0FBRCxDQUFWO0FBQ0Q7QUFDRixHQUxILEVBTUdFLEtBTkgsRUFGbUIsRUFTckIsRUFUcUIsQ0FBdkI7QUFZQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2Qs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QUFDRSxRQUFJLEVBQUMsVUFEUDtBQUVFLE1BQUUsRUFBRUQsQ0FBQyxDQUFDWixFQUZSO0FBR0UsUUFBSSxFQUFDLFVBSFA7QUFJRSxTQUFLLEVBQUVZLENBQUMsQ0FBQ1gsS0FKWDtBQUtFLFlBQVEsRUFBR0MsQ0FBRCxJQUFPLFNBQUksQ0FBQ1ksS0FBTCxDQUFXQyxNQUFYLENBQWtCYixDQUFsQixDQUxuQjtBQU1FLFdBQU8sRUFBRVUsQ0FBQyxDQUFDbkIsUUFOYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFTR21CLENBQUMsQ0FBQ1gsS0FUTCxDQURGLENBL0JKLEVBNkNFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsV0FBTyxFQUFFLEVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0E3Q0YsRUFnREU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLEVBQUUsRUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhERixFQW1ERTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFdBQU8sRUFBRSxFQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5ERixDQURGO0FBeURELENBdkVEOztJQUFNUCxLO1VBQ29CdkIsVTs7O0tBRHBCdUIsSztBQXlFU0Esb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3RvZG9zL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VNZW1vLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1hY2hpbmUsIGludGVycHJldCB9IGZyb20gXCJ4c3RhdGVcIjtcblxuY29uc3QgdXNlTWFjaGluZSA9IChtYWNoaW5lKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKG1hY2hpbmUuaW5pdGlhbFN0YXRlKTtcblxuICBjb25zdCBzZXJ2aWNlID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgaW50ZXJwcmV0KG1hY2hpbmUpXG4gICAgICAgIC5vblRyYW5zaXRpb24oKHN0YXRlKSA9PiB7XG4gICAgICAgICAgaWYgKHN0YXRlLmNoYW5nZWQpIHtcbiAgICAgICAgICAgIHNldEN1cnJlbnQoc3RhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXJ0KCksXG4gICAgW11cbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiBzZXJ2aWNlLnN0b3AoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBbY3VycmVudCwgc2VydmljZS5zZW5kXTtcbn07XG5cbmNvbnN0IHRvZG9NYWNoaW5lID0gTWFjaGluZSh7XG4gIGluaXRpYWw6IFwiYWxsXCIsXG4gIHN0YXRlczoge1xuICAgIGFsbDoge1xuICAgICAgLy8gYWxsXG4gICAgfSxcbiAgICBhY3RpdmU6IHtcbiAgICAgIC8vIGFjdGl2ZXNcbiAgICB9LFxuICAgIGNvbXBsZXRlOiB7XG4gICAgICAvLyBjb21wbGV0ZXNcbiAgICB9LFxuICB9LFxufSk7XG5cbmNvbnN0IFRvZG9zID0gKCkgPT4ge1xuICBjb25zdCBbbWFjaGluZSwgc2VuZF0gPSB1c2VNYWNoaW5lKHRvZG9NYWNoaW5lKTtcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZSh7XG4gICAgZm9ybXVsYXJ5OiB7XG4gICAgICB0YXNrOiBcIlwiLFxuICAgIH0sXG4gICAgbGlzdDogW1xuICAgICAgeyBpZDogMSwgdmFsdWU6IFwidGFzayAxXCIsIGNvbXBsZXRlOiBmYWxzZSB9LFxuICAgICAgeyBpZDogMiwgdmFsdWU6IFwidGFzayAyXCIsIGNvbXBsZXRlOiBmYWxzZSB9LFxuICAgICAgeyBpZDogMywgdmFsdWU6IFwidGFzayAzXCIsIGNvbXBsZXRlOiBmYWxzZSB9LFxuICAgICAgeyBpZDogNCwgdmFsdWU6IFwidGFzayA0XCIsIGNvbXBsZXRlOiBmYWxzZSB9LFxuICAgIF0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtXG4gICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBjb25zdCBmb3JtbGFyeSA9IFtcbiAgICAgICAgICAgIC4uLnRvZG9zLmxpc3QsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwICsgMSksXG4gICAgICAgICAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdO1xuXG4gICAgICAgICAgY29uc29sZS5sb2coZm9ybWxhcnkpO1xuICAgICAgICAgIHNldFRvZG9zKGZvcm1sYXJ5KTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlkPVwidG9kb1wiXG4gICAgICAgICAgbmFtZT1cInRvZG9cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGFzayBoZXJlXCJcbiAgICAgICAgICB2YWx1ZT17dG9kb3MuZm9ybXVsYXJ5LnRhc2t9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgc2V0VG9kb3MoeyAuLi50b2Rvcy5mb3JtdWxhcnksIHRhc2s6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgfVxuICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+c2F2ZTwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuXG4gICAgICB7dG9kb3MubGlzdCAmJlxuICAgICAgICB0b2Rvcy5saXN0Lm1hcCgodCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3QuaWR9IHN0eWxlPXt0LnN0eWxlZH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgaWQ9e3QuaWR9XG4gICAgICAgICAgICAgIG5hbWU9XCJyZWdpc3RlclwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0LnZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMucHJvcHMuY2hhbmdlKGUpfVxuICAgICAgICAgICAgICBjaGVja2VkPXt0LmNvbXBsZXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHt0LnZhbHVlfVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt7fX0+XG4gICAgICAgIEFsbFxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt7fX0+XG4gICAgICAgIEFjdGl2ZVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt7fX0+XG4gICAgICAgIENvbXBsZXRlXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9zO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/todos/index.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _defineProperty; });\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzP2FkZTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/defineProperty.js\n");

/***/ })

})