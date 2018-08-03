webpackHotUpdate(5,{

/***/ "./components/counter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__("./store.js");
var _jsxFileName = "/Users/rnegash/Documents/testprojects/with-redux-test/components/counter.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Counter =
/*#__PURE__*/
function (_Component) {
  _inherits(Counter, _Component);

  function Counter() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Counter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Counter.__proto__ || Object.getPrototypeOf(Counter)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "increment", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var dispatch = _this.props.dispatch;
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__store__["b" /* incrementCount */])());
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "decrement", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var dispatch = _this.props.dispatch;
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__store__["a" /* decrementCount */])());
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "reset", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var dispatch = _this.props.dispatch;
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__store__["d" /* resetCount */])());
      }
    }), _temp));
  }

  _createClass(Counter, [{
    key: "render",
    value: function render() {
      var count = this.props.count;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "Count: ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, count)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn",
        onClick: this.increment,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "+1"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn",
        onClick: this.decrement,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "-1"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn",
        onClick: this.reset,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "Reset"));
    }
  }]);

  return Counter;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

function mapStateToProps(state) {
  var count = state.count;
  return {
    count: count
  };
}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps)(Counter));

/***/ }),

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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    // static getInitialProps({ reduxStore, req }) {
    //   const isServer = !!req;
    //   reduxStore.dispatch(serverRenderClock(isServer));
    //
    //   return {};
    // }
    //
    // componentDidMount() {
    //   const { dispatch } = this.props;
    //   this.timer = startClock(dispatch);
    // }
    //
    // componentWillUnmount() {
    //   clearInterval(this.timer);
    // }
    value: function render() {
      var context = this.props.context;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "column col-4 col-mx-auto login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "form-label",
        htmlFor: "input-example-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "email ", context), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        className: "form-input",
        type: "email",
        placeholder: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "form-label",
        htmlFor: "input-example-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "pw"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        className: "form-input",
        type: "password",
        placeholder: "pw",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
        href: "/context",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "link"))))));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

function mapStateToProps(state) {
  var context = state.context.context;
  console.log(state);
  return {
    context: context
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])()(Index));
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

/***/ }),

/***/ "./store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TICK */
/* unused harmony export INCREMENT */
/* unused harmony export DECREMENT */
/* unused harmony export RESET */
/* unused harmony export SET_CONTEXT */
/* unused harmony export reducer */
/* unused harmony export setContext */
/* unused harmony export serverRenderClock */
/* unused harmony export startClock */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return incrementCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decrementCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return resetCount; });
/* harmony export (immutable) */ __webpack_exports__["c"] = initializeStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__ = __webpack_require__("./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__("./node_modules/redux-thunk/es/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var initialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  context: "india"
};
var TICK = "TICK";
var INCREMENT = "INCREMENT";
var DECREMENT = "DECREMENT";
var RESET = "RESET";
var SET_CONTEXT = "SET_CONTEXT"; // REDUCERS

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_CONTEXT:
      return _objectSpread({
        context: action.context
      }, state);

    case TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });

    case INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      });

    case DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      });

    case RESET:
      return Object.assign({}, state, {
        count: initialState.count
      });

    default:
      return state;
  }
}; // ACTIONS

function setContext(context) {
  return {
    type: SET_CONTEXT,
    context: context
  };
}
var serverRenderClock = function serverRenderClock(isServer) {
  return function (dispatch) {
    return dispatch({
      type: TICK,
      light: !isServer,
      ts: Date.now()
    });
  };
};
var startClock = function startClock(dispatch) {
  return setInterval(function () {
    dispatch({
      type: TICK,
      light: true,
      ts: Date.now()
    });
  }, 1000);
};
var incrementCount = function incrementCount() {
  return function (dispatch) {
    return dispatch({
      type: INCREMENT
    });
  };
};
var decrementCount = function decrementCount() {
  return function (dispatch) {
    return dispatch({
      type: DECREMENT
    });
  };
};
var resetCount = function resetCount() {
  return function (dispatch) {
    return dispatch({
      type: RESET
    });
  };
};
function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(reducer, initialState, Object(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__["a" /* default */])));
}

/***/ })

})
//# sourceMappingURL=5.be689e834fdd31cab66e.hot-update.js.map