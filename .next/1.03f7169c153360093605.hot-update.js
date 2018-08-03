webpackHotUpdate(1,{

/***/ "./store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TICK */
/* unused harmony export INCREMENT */
/* unused harmony export DECREMENT */
/* unused harmony export RESET */
/* unused harmony export SET_CONTEXT */
/* unused harmony export reducer */
/* harmony export (immutable) */ __webpack_exports__["b"] = setContext;
/* harmony export (immutable) */ __webpack_exports__["a"] = initializeStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__ = __webpack_require__("./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__("./node_modules/redux-thunk/es/index.js");



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
      return Object.assign({}, state, {
        context: action.context
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
function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(reducer, initialState, Object(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__["a" /* default */])));
}

/***/ })

})
//# sourceMappingURL=1.03f7169c153360093605.hot-update.js.map