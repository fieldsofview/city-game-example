webpackHotUpdate(5,{

/***/ "./store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TICK */
/* unused harmony export INCREMENT */
/* unused harmony export DECREMENT */
/* unused harmony export RESET */
/* unused harmony export reducer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return serverRenderClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return startClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return incrementCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decrementCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return resetCount; });
/* harmony export (immutable) */ __webpack_exports__["c"] = initializeStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__ = __webpack_require__("./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__("./node_modules/redux-thunk/es/index.js");



var initialState = {
  lastUpdate: 0,
  light: false,
  count: 0
};
var TICK = "TICK";
var INCREMENT = "INCREMENT";
var DECREMENT = "DECREMENT";
var RESET = "RESET"; // REDUCERS

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
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
    // Dispatch `TICK` every 1 second
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
//# sourceMappingURL=5.56f7e15b355f7db59632.hot-update.js.map