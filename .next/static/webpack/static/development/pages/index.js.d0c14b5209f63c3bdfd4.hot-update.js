webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/brendanquinn/Projects/get-a-vin/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var GET_VIN_URL = "http://localhost:3001/api/random-vin";
var VIN_DETAILS_DOMAIN = "https://vpic.nhtsa.dot.gov";

var getVehicleByVin = function getVehicleByVin(vin) {
  var url = "".concat(VIN_DETAILS_DOMAIN, "/api/vehicles/DecodeVinExtended/").concat(vin, "?format=json");
  console.log("Fetching VIN info from: ".concat(url));
  return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(url).then(function (resp) {
    return resp.data.Results.filter(function (r) {
      return r.Variable;
    }).filter(function (r) {
      return r.Value;
    });
  }).then(function (results) {
    return results.reduce(function (sum, r) {
      return _objectSpread({}, sum, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, r.Variable, r.Value));
    }, {});
  });
};

var getRandomVin = function getRandomVin() {
  console.log("Fetching random VIN from: ".concat(GET_VIN_URL));
  return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(GET_VIN_URL).then(function (resp) {
    return resp.data;
  });
};

var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      vins: {},
      errorMessage: null
    });

    _this.onSubmit = _this.onSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.copyVin = _this.copyVin.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.getVins = _this.getVins.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      getRandomVin().then(function (data) {
        return data.vin;
      }).then(function (vin) {
        return getVehicleByVin(vin).then(function (vehicleInfo) {
          _this2.setState({
            vins: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, vin, vehicleInfo),
            errorMessage: null
          });
        });
      })["catch"](function (e) {
        console.error(e);

        _this2.setState({
          errorMessage: e.message
        });
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      var _this3 = this;

      e.preventDefault();
      getRandomVin().then(function (data) {
        return data.vin;
      }).then(function (vin) {
        return getVehicleByVin(vin).then(function (vehicleInfo) {
          _this3.setState({
            vins: _objectSpread(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, vin, vehicleInfo), _this3.state.vins),
            errorMessage: null
          });
        }).then(function () {
          return copy_to_clipboard__WEBPACK_IMPORTED_MODULE_8___default()(vin);
        });
      })["catch"](function (e) {
        console.error(e);

        _this3.setState({
          errorMessage: e.message
        });
      });
    }
  }, {
    key: "copyVin",
    value: function copyVin() {
      copy_to_clipboard__WEBPACK_IMPORTED_MODULE_8___default()(this.getVins()[0]);
    }
  }, {
    key: "getVins",
    value: function getVins() {
      return Object.keys(this.state.vins);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

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
      }, "Get and Copy new VIN"), this.state.errorMessage ? __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("h4", null, "Error:"), __jsx("p", null, this.state.errorMessage)) : __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("h3", null, "Vehicle Info"), __jsx("pre", null, __jsx("code", null, function (vehicleInfo) {
        return vehicleInfo ? JSON.stringify(vehicleInfo, null, 4) : 'Loading...';
      }(this.state.vins[this.getVins()[0]]))))), this.getVins().length > 1 ? __jsx("section", null, __jsx("h2", null, "History"), __jsx("dl", null, this.getVins().slice(1).map(function (v) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("dt", {
          key: "".concat(v, "-term")
        }, v), __jsx("dd", {
          key: "".concat(v, "-definition")
        }, __jsx("pre", null, __jsx("code", null, JSON.stringify(_this4.state.vins[v], null, 4)))));
      }))) : null);
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.d0c14b5209f63c3bdfd4.hot-update.js.map