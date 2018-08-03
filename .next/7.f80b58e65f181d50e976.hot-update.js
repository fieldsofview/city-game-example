webpackHotUpdate(7,{

/***/ "./pages/session-setup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/rnegash/Documents/testprojects/with-redux-test/pages/session-setup.js";



function Context(_ref) {
  var context = _ref.context,
      createPlayers = _ref.createPlayers;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, context), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
    className: "form-label",
    htmlFor: "input-example-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Nr of players"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    className: "form-input",
    type: "number",
    placeholder: "Nr of players",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    className: "btn",
    onClick: function onClick() {
      createPlayers(new Array(10).fill("random"));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Start game"));
}

function mapStateToProps(state) {
  return {
    context: state.context
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createPlayers: function (_createPlayers) {
      function createPlayers(_x) {
        return _createPlayers.apply(this, arguments);
      }

      createPlayers.toString = function () {
        return _createPlayers.toString();
      };

      return createPlayers;
    }(function (players) {
      return dispatch(createPlayers(players));
    })
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Context));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/session-setup")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.f80b58e65f181d50e976.hot-update.js.map