module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/rnegash/Documents/gitprojects/with-redux-test/components/Header.js";


var Header = function Header() {
  var styles = {
    marginBottom: "50px"
  };
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "column col-4 col-mx-auto login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "text-center",
    style: styles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "City game")));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./js/data.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //This is a realistic person generator
//This program creates persons and allows you to create links between
//categories
//import functions

var generateEntity = __webpack_require__("./js/entity-generator.js").generateEntity; //Data for generating a person


var ageGroups = ["Child", "Youth", "Adult", "Senior"]; //[0] in the following categories lets you set
//certain attributes as appliable to only selected ageGroup(s)
//* means appliable to all ageGroups

var races = [["*", "Indian"], ["*", "Chinese"], ["*", "Japanese"], ["*", "European"], ["*", "African"], ["*", "Latin"]];
var religions = [["*", "Hindu"], ["*", "Muslim"], ["*", "Christian"], ["*", "Buddhist"], ["*", "Atheist"], ["*", "Agnostic"]];
var dailyOccupations = [["Adult", "Cook"], ["Adult", "School teacher"], ["Youth Adult", "Rickshaw driver"], ["Senior Youth Adult", "Artist"], ["Youth", "High school student"], ["Child", "Kindergarten"], ["*", "Street dweller"], ["Adult", "Software developer"], ["Senior", "Retiree"]];
var categories = [races, religions, dailyOccupations];
var randomIndex = Math.floor(Math.random() * ageGroups.length);
var ageGroup = ageGroups[randomIndex];

module.exports = function generatePersona(nrOfPersonas) {
  var personas = new Array(nrOfPersonas);

  for (var i = 0; i < personas.length; i++) {
    personas[i] = generateEntity(ageGroup, categories);
  }

  return personas;
}; //Example output
//Youth [ 'Chinese', 'Muslim', 'Street dweller' ]

/***/ }),

/***/ "./js/entity-generator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //Takes specified ageGroup (String) and all categories (Array)

function generateEntity(ageGroup, categories) {
  var entity = new Array(categories.length - 1);

  for (var i = 0; i < categories.length; i++) {
    entity[i] = generateAttribute(ageGroup, categories[i]);
  }

  return entity;
}

function generateAttribute(key, arr) {
  var possibleAttributes = arr.filter(function (arr) {
    return arr[0].includes(key) || arr[0] == "*";
  });
  var randomIndex = Math.floor(Math.random() * possibleAttributes.length);
  var attribute = possibleAttributes[randomIndex][1];
  return attribute;
}

module.exports = {
  generateEntity: generateEntity
};

/***/ }),

/***/ "./pages/session-setup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_js__ = __webpack_require__("./store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Header_js__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_data_js__ = __webpack_require__("./js/data.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_data_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__js_data_js__);
var _jsxFileName = "/Users/rnegash/Documents/gitprojects/with-redux-test/pages/session-setup.js";






function Context(_ref) {
  var context = _ref.context,
      createPlayers = _ref.createPlayers;
  var styles = {
    btnLogin: {
      float: "right"
    }
  };
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "column col-8 col-mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "Context selected: ", context), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
    className: "form-label",
    htmlFor: "input-example-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Nr of players"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    min: "0",
    className: "form-input",
    id: "numberInput",
    type: "number",
    placeholder: "Eg. 5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    className: "btn",
    style: styles.btnLogin,
    onClick: function onClick(e) {
      var val = parseInt(document.getElementById("numberInput").value);
      createPlayers(__WEBPACK_IMPORTED_MODULE_4__js_data_js___default()(val));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "Start game"))));
}

function mapStateToProps(state) {
  return {
    context: state.context
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createPlayers: function createPlayers(players) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__store_js__["a" /* createPlayers */])(players));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Context));

/***/ }),

/***/ "./store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SET_CONTEXT */
/* unused harmony export CREATE_PLAYERS */
/* unused harmony export reducer */
/* unused harmony export setContext */
/* harmony export (immutable) */ __webpack_exports__["a"] = createPlayers;
/* harmony export (immutable) */ __webpack_exports__["b"] = initializeStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__ = __webpack_require__("redux-devtools-extension");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);



var initialState = {
  context: "none",
  players: []
};
var SET_CONTEXT = "SET_CONTEXT";
var CREATE_PLAYERS = "CREATE_PLAYERS"; // REDUCERS

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_CONTEXT:
      return Object.assign({}, state, {
        context: action.context
      });

    case CREATE_PLAYERS:
      return Object.assign({}, state, {
        players: action.players
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
function createPlayers(players) {
  return {
    type: CREATE_PLAYERS,
    players: players
  };
}
function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(reducer, initialState, Object(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a)));
}

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/session-setup.js");


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=session-setup.js.map