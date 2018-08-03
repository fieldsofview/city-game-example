webpackHotUpdate(5,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__("./store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_examples__ = __webpack_require__("./components/examples.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
var _jsxFileName = "/Users/rnegash/Documents/testprojects/with-redux-test/pages/index.js";






function Index(_ref) {
  var context = _ref.context;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "column col-4 col-mx-auto login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
    className: "form-label",
    htmlFor: "input-example-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "email ", context), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    className: "form-input",
    type: "email",
    placeholder: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
    className: "form-label",
    htmlFor: "input-example-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "pw"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    className: "form-input",
    type: "password",
    placeholder: "pw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
    href: "/context",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    className: "btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "link"))))));
}

function mapStateToProps(state) {
  return {
    context: state.context
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps)(Index));
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.c843d8bd3dc6c912b8a7.hot-update.js.map