"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/shared/FrontLayout.tsx":
/*!***********************************************!*\
  !*** ./src/components/shared/FrontLayout.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ \"./src/components/shared/Footer.tsx\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./src/components/shared/Header.tsx\");\n/* eslint-disable react-hooks/exhaustive-deps */ var _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar FrontLayout = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), scrolled = ref1[0], setScrolled = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(920), pageWidth = ref2[0], setPageWidth = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (true) {\n            window.addEventListener(\"scroll\", function(e) {\n                var isMobile = pageWidth <= 768;\n                var pageHeight = window.scrollY;\n                if (pageHeight > 220) {\n                    setScrolled(true);\n                } else setScrolled(false);\n            });\n            window.addEventListener(\"resize\", function(e) {\n                var width = window.innerWidth;\n                if (width < 920) {\n                    setPageWidth(width);\n                } else {\n                    setPageWidth(920);\n                }\n            });\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"front-layout\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    scrolled: scrolled\n                }, void 0, false, {\n                    fileName: \"/home/peter/Desktop/projects/ububa/frontend/src/components/shared/FrontLayout.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 5\n                }, _this),\n                children,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/peter/Desktop/projects/ububa/frontend/src/components/shared/FrontLayout.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 5\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/peter/Desktop/projects/ububa/frontend/src/components/shared/FrontLayout.tsx\",\n            lineNumber: 35,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/peter/Desktop/projects/ububa/frontend/src/components/shared/FrontLayout.tsx\",\n        lineNumber: 34,\n        columnNumber: 3\n    }, _this);\n};\n_s(FrontLayout, \"WEdhsOVlzrDRWk1QEuU27FT82Ow=\");\n_c = FrontLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FrontLayout);\nvar _c;\n$RefreshReg$(_c, \"FrontLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvRnJvbnRMYXlvdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSw4Q0FBOEMsR0FDOUM7OztBQUFxRTtBQUN2QztBQUNBO0FBRTlCLElBQU1PLFdBQVcsR0FHWixnQkFBa0I7UUFBZkMsUUFBUSxTQUFSQSxRQUFROztJQUNmLElBQU1DLEdBQUcsR0FBR04sNkNBQU0sQ0FBaUIsSUFBSSxDQUFDO0lBQ3hDLElBQWdDQyxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXhDTSxRQUFRLEdBQWlCTixJQUFlLEdBQWhDLEVBQUVPLFdBQVcsR0FBSVAsSUFBZSxHQUFuQjtJQUM1QixJQUFrQ0EsSUFBYSxHQUFiQSwrQ0FBUSxDQUFDLEdBQUcsQ0FBQyxFQUF4Q1EsU0FBUyxHQUFrQlIsSUFBYSxHQUEvQixFQUFFUyxZQUFZLEdBQUlULElBQWEsR0FBakI7SUFFOUJGLGdEQUFTLENBQUMsV0FBTTtRQUNmLElBQUksSUFBNkIsRUFBRTtZQUNsQ1ksTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsU0FBQ0MsQ0FBQyxFQUFLO2dCQUN4QyxJQUFNQyxRQUFRLEdBQUdMLFNBQVMsSUFBSSxHQUFHO2dCQUNqQyxJQUFNTSxVQUFVLEdBQUdKLE1BQU0sQ0FBQ0ssT0FBTztnQkFDakMsSUFBSUQsVUFBVSxHQUFHLEdBQUcsRUFBRTtvQkFDckJQLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDbEIsTUFBTUEsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFCLENBQUMsQ0FBQztZQUNIRyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxTQUFDQyxDQUFDLEVBQUs7Z0JBQ3hDLElBQU1JLEtBQUssR0FBR04sTUFBTSxDQUFDTyxVQUFVO2dCQUMvQixJQUFJRCxLQUFLLEdBQUcsR0FBRyxFQUFFO29CQUNoQlAsWUFBWSxDQUFDTyxLQUFLLENBQUMsQ0FBQztpQkFDcEIsTUFBTTtvQkFDTlAsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNsQjthQUNELENBQUMsQ0FBQztTQUNIO0tBQ0QsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNQLHFCQUNDLDhEQUFDWiwyQ0FBUTtrQkFDUiw0RUFBQ3FCLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLGNBQWM7OzhCQUM1Qiw4REFBQ2pCLCtDQUFNO29CQUFDSSxRQUFRLEVBQUVBLFFBQVE7Ozs7O3lCQUFJO2dCQUM3QkYsUUFBUTs4QkFFVCw4REFBQ0gsK0NBQU07Ozs7eUJBQUc7Ozs7OztpQkFDTDs7Ozs7YUFDSSxDQUNWO0NBQ0Y7R0FyQ0tFLFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQXVDakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvRnJvbnRMYXlvdXQudHN4PzY0NmEiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5cbmNvbnN0IEZyb250TGF5b3V0OiBSZWFjdC5GQzx7XG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdEVsZW1lbnQ7XG5cdHNob3dIZWFkZXI/OiBib29sZWFuO1xufT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cdGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cdGNvbnN0IFtzY3JvbGxlZCwgc2V0U2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbcGFnZVdpZHRoLCBzZXRQYWdlV2lkdGhdID0gdXNlU3RhdGUoOTIwKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoZSkgPT4ge1xuXHRcdFx0XHRjb25zdCBpc01vYmlsZSA9IHBhZ2VXaWR0aCA8PSA3Njg7XG5cdFx0XHRcdGNvbnN0IHBhZ2VIZWlnaHQgPSB3aW5kb3cuc2Nyb2xsWTtcblx0XHRcdFx0aWYgKHBhZ2VIZWlnaHQgPiAyMjApIHtcblx0XHRcdFx0XHRzZXRTY3JvbGxlZCh0cnVlKTtcblx0XHRcdFx0fSBlbHNlIHNldFNjcm9sbGVkKGZhbHNlKTtcblx0XHRcdH0pO1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKGUpID0+IHtcblx0XHRcdFx0Y29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRcdFx0aWYgKHdpZHRoIDwgOTIwKSB7XG5cdFx0XHRcdFx0c2V0UGFnZVdpZHRoKHdpZHRoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZXRQYWdlV2lkdGgoOTIwKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCBbXSk7XG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmcm9udC1sYXlvdXRcIj5cblx0XHRcdFx0PEhlYWRlciBzY3JvbGxlZD17c2Nyb2xsZWR9IC8+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblxuXHRcdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0ZyYWdtZW50PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRnJvbnRMYXlvdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGcmFnbWVudCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiRm9vdGVyIiwiSGVhZGVyIiwiRnJvbnRMYXlvdXQiLCJjaGlsZHJlbiIsInJlZiIsInNjcm9sbGVkIiwic2V0U2Nyb2xsZWQiLCJwYWdlV2lkdGgiLCJzZXRQYWdlV2lkdGgiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImlzTW9iaWxlIiwicGFnZUhlaWdodCIsInNjcm9sbFkiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/shared/FrontLayout.tsx\n"));

/***/ })

});