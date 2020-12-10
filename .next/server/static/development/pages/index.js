module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! copy-to-clipboard */ "copy-to-clipboard");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/brendanquinn/Projects/get-a-vin/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const GET_VIN_URL = "http://localhost:3001/api/random-vin";
const VIN_DETAILS_DOMAIN = "https://vpic.nhtsa.dot.gov";

const getVehicleByVin = vin => {
  const url = `${VIN_DETAILS_DOMAIN}/api/vehicles/DecodeVinExtended/${vin}?format=json`;
  console.log(`Fetching VIN info from: ${url}`);
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url).then(resp => resp.data.Results.filter(r => r.Variable).filter(r => r.Value)).then(results => results.reduce((sum, r) => _objectSpread({}, sum, {
    [r.Variable]: r.Value
  }), {}));
};

const getRandomVin = () => {
  console.log(`Fetching random VIN from: ${GET_VIN_URL}`);
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(GET_VIN_URL).then(resp => resp.data);
};

class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      vins: {},
      errorMessage: null
    });

    this.onSubmit = this.onSubmit.bind(this);
    this.copyVin = this.copyVin.bind(this);
    this.getVins = this.getVins.bind(this);
  }

  componentDidMount() {
    getRandomVin().then(data => data.vin).then(vin => {
      return getVehicleByVin(vin).then(vehicleInfo => {
        this.setState({
          vins: {
            [vin]: vehicleInfo
          },
          errorMessage: null
        });
      });
    }).catch(e => {
      console.error(e);
      this.setState({
        errorMessage: e.message
      });
    });
  }

  onSubmit(e) {
    e.preventDefault();
    getRandomVin().then(data => data.vin).then(vin => {
      return getVehicleByVin(vin).then(vehicleInfo => {
        this.setState({
          vins: _objectSpread({
            [vin]: vehicleInfo
          }, this.state.vins),
          errorMessage: null
        });
      }).then(() => copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default()(vin));
    }).catch(e => {
      console.error(e);
      this.setState({
        errorMessage: e.message
      });
    });
  }

  copyVin() {
    copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default()(this.getVins()[0]);
  }

  getVins() {
    return Object.keys(this.state.vins);
  }

  render() {
    return __jsx("main", {
      id: "main"
    }, __jsx("h1", null, "Generate a ", __jsx("abbr", {
      title: "Vehicle Identification Number"
    }, "VIN")), __jsx("p", null, "Making it easy to generate and copy ", __jsx("abbr", {
      title: "Vehicle Identification Numbers"
    }, "VINs")), __jsx("form", {
      onSubmit: this.onSubmit
    }, __jsx("h2", {
      "aria-live": "polite"
    }, "Result: ", __jsx("em", null, this.getVins()[0])), __jsx("button", {
      type: "button",
      onClick: this.copyVin
    }, "Copy to Clipboard"), __jsx("button", {
      type: "submit"
    }, "Get and Copy new VIN"), this.state.errorMessage ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h4", null, "Error:"), __jsx("p", null, this.state.errorMessage)) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h3", null, "Vehicle Info"), __jsx("pre", null, __jsx("code", null, (vehicleInfo => {
      return vehicleInfo ? JSON.stringify(vehicleInfo, null, 4) : 'Loading...';
    })(this.state.vins[this.getVins()[0]]))))), this.getVins().length > 1 ? __jsx("section", null, __jsx("h2", null, "History"), __jsx("dl", null, this.getVins().slice(1).map(v => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("dt", {
      key: `${v}-term`
    }, v), __jsx("dd", {
      key: `${v}-definition`
    }, __jsx("pre", null, __jsx("code", null, JSON.stringify(this.state.vins[v], null, 4)))))))) : null);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/brendanquinn/Projects/get-a-vin/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "copy-to-clipboard":
/*!************************************!*\
  !*** external "copy-to-clipboard" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("copy-to-clipboard");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map