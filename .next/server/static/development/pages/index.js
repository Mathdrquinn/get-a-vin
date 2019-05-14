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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/NotificationBar.jsx":
/*!****************************************!*\
  !*** ./components/NotificationBar.jsx ***!
  \****************************************/
/*! exports provided: NotificationBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationBar", function() { return NotificationBar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "/Users/brendanquinn/Documents/Development/vin/components/NotificationBar.jsx";

var NotificationBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NotificationBar, _React$Component);

  function NotificationBar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NotificationBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NotificationBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      notifications: []
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NotificationBar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        role: "alert",
        style: {
          position: 'fixed',
          padding: '1rem 2rem',
          display: 'flex',
          flexFlow: 'row nowrap',
          width: '100%',
          boxSizing: 'border-box'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        style: {
          flexBasis: '6rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "Success!"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "Vin was copied!"));
    }
  }]);

  return NotificationBar;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/***/ }),

/***/ "./data/vins.js":
/*!**********************!*\
  !*** ./data/vins.js ***!
  \**********************/
/*! exports provided: vins, getRandomVin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vins", function() { return vins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomVin", function() { return getRandomVin; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

var vins = {
  "1J4PP2GK1AW132691": null,
  "WDBFA76F2VF143787": null,
  "KMHTC6AD4DU114344": null,
  "2HGFB2F52CH563104": null,
  "1GTR1TEH8FZ193779": null,
  "1GTEC19Z16E176006": null,
  "1GCEC14T75Z176831": null,
  "1NXBR32E17Z783711": null,
  "1FMZU83P9YUA52049": null,
  "2HGFB2F58DH602814": null,
  "KMHCT4AEXDU431266": null,
  "1GNEC13V43R306054": null,
  "1N4AL3AP3FN319953": null,
  "KL5JD56Z77K524522": null,
  "1FUYYCYB6HP317134": null,
  "1FTRX17L83NA32971": null,
  "1FMCU9GX5EUA42703": null,
  "1GTHK231X3F144301": null,
  "1FMJU1J54CEF17278": null,
  "1M2N136Y7BA006792": null,
  "1FTNE2429XHC32395": null,
  "KL8CC6S93DC560501": null,
  "1GBHC29U43E217798": null,
  "1GYS4CKJ2FR299624": null,
  "1C4BJWEG1EL245541": null,
  "WDDHF5KB8EA880692": null,
  "1BAAGCSA1MF039491": null,
  "1FADP5BU0EL505090": null,
  "4S4BRBLC2B3334804": null,
  "KNDJT2A59C7477751": null,
  "2C4RC1BG9ER126627": null,
  "3D4PG4FB4AT195814": null,
  "JF2GPAGC4D2889316": null,
  "5TFBT54187X008221": null,
  "2FWYGDYB6XAA51645": null,
  "3VWAL7AJ0AM026752": null,
  "1GNET16S866168669": null,
  "KMHHU6KH8BU054652": null,
  "5FNRL5H60FB045275": null,
  "5GZER13728J306552": null,
  "JTHBK1GG9E2149173": null,
  "1GYFK43579R134526": null,
  "1J4RR4GG9BC736745": null,
  "1GKLVNED2AJ190293": null,
  "1C4PJLAK7CW126595": null,
  "1GNDS13S052146545": null,
  "5GAKRBKD0FJ103482": null,
  "1FTPW145X4FA30697": null,
  "5YFBURHE6EP123025": null,
  "JTJZK1BA5D2007210": null,
  "2GCEC19M1T1128569": null,
  "5J6RE4H70BL111807": null,
  "19UUA66256A058412": null,
  "1N4AL3AP7FC146529": null,
  "1N6BD06T26C472168": null,
  "1B3CB4HA1AD663813": null,
  "1G8ZV57B89F121604": null,
  "WVWPD63B94P101666": null,
  "W04GR5EC9B1111870": null,
  "1N4AL2AP8AC192812": null,
  "1FT8X3B68FEA25662": null,
  "1GBHC34J5LE164743": null,
  "1FTSW21R09EA67651": null,
  "5J6RM4H78EL055221": null,
  "3GCPKTE77CG175166": null,
  "1N4AL2AP0CN468892": null,
  "1FTNX21L14EB57003": null,
  "5XYZK3AB7BG089842": null,
  "1GYFK66827R197631": null,
  "3GNEC16T91G171399": null,
  "3C4PDCABXET308291": null,
  "3FA6P0HDXER342906": null,
  "1C4HJWDG3EL165475": null,
  "1GNSCBE07ER249202": null,
  "5N1AT2MT6FC753045": null,
  "JHMGE8H5XDC066735": null,
  "KM8SR4HF1FU091842": null,
  "1P4GP44G8XB537170": null,
  "1HGCP36768A017911": null,
  "WVGAV7AX8CW606797": null,
  "JF2SJGMC2EH538177": null,
  "1C4HJWDG3CL214249": null,
  "1J4HR58285C523083": null,
  "1FTRF12247KD47579": null,
  "2FMDK4KC7EBA11962": null,
  "1N4AA5AP4AC864405": null,
  "4T1FA38P66U100563": null,
  "1GNDV23127D138782": null,
  "1D7HA16D65J606006": null,
  "3GTU2UEC9EG542321": null,
  "1FADP3F26DL302068": null,
  "JTDZN3EU7D3208225": null,
  "4S4BRBCC8D3315094": null,
  "JTLZE4FE0A1109819": null,
  "1G2NW52E7XM861208": null,
  "1YVHP80C555M75557": null,
  "3N1CE2CPXEL393487": null,
  "4T1BE46K97U096316": null,
  "1GC1KXE81EF158681": null,
  "1G1ND52J516142932": null,
  "2HGFG126X6H570266": null,
  "2CTALUEC0B6476060": null,
  "1C3CDZAB1DN645209": null,
  "1HGCM56756A134669": null,
  "5J6YH28644L039253": null,
  "1C4RDHDG4EC508253": null,
  "3GNBABFW7BS517005": null,
  "2HNYD18211H523067": null,
  "3VWJP7AT2CM623314": null,
  "1D7RE3GK6BS520976": null,
  "1GKS2CKJ0FR552522": null,
  "1G3WS52H4XF365051": null,
  "2T3ZFREVXEW081896": null,
  "KNAGM4A73B5143825": null,
  "1FTFW1EV4AFD21766": null,
  "5UXWX9C52F0D47079": null,
  "JN1CV6AR9DM760539": null,
  "KNDJT2A53C7417058": null,
  "1HTSHAAR4RH580052": null,
  "3GNFK16R7XG215940": null,
  "JN8AS5MV0BW315029": null,
  "WBA1J7C50EVX33643": null,
  "3GCUKSEC8EG122246": null,
  "3GYFNBEY2BS527582": null,
  "4USFE83577LY63771": null,
  "1Z7HC28K66S581999": null,
  "WBA1J7C58FV253741": null,
  "3VWSE69M84M071921": null,
  "2T1BURHE8EC136827": null,
  "1J4FA54187L129095": null,
  "1FMEU73E67UB53877": null,
  "1FTPW14505KB45138": null,
  "4S4BP62C377338679": null,
  "2C3AK53G95H671887": null,
  "1ZVHT88S775367955": null,
  "JM1BL1SF8A1127629": null,
  "1J4GR48K96C277880": null,
  "1C4PJLAB7FW554235": null,
  "5TEWN72N13Z189470": null,
  "VNKKTUD34EA007215": null,
  "5NPEB4AC0CH449511": null,
  "1GNDT33S792107353": null,
  "4T1BD1FK3FU152802": null,
  "KNDJN2A2XF7766254": null,
  "1N6AD0ER7BC429523": null,
  "2A4GP54L87R156535": null,
  "1G4CU541324196718": null,
  "1B3HB48B38D724149": null,
  "1FTRX17L5YNB43517": null,
  "3FADP4AJ8DM108743": null,
  "2B3HD56M83H541930": null,
  "1GTZGGBA7A1108015": null,
  "1FTRW08L92KA41318": null,
  "1HD1BZB1X6Y079646": null,
  "1Y1SK5388RZ017389": null,
  "1Y1SK526XTZ042558": null,
  "WMWRE33505TD99614": null,
  "YV4902DZ4C2292415": null,
  "JT2AT00N8R0023734": null,
  "1GCFG29T451133702": null,
  "1GCDC14K2RZ182822": null,
  "4S3BE645516202124": null,
  "1N4AA5AP5EC473396": null,
  "2C8GP74L11R294361": null,
  "3GCUKTEC0EG436012": null,
  "1GNSCJE05BR359185": null,
  "KL1TJ62674B227833": null,
  "1G1PA5SH6D7192638": null,
  "1FAFP55U4YA219408": null,
  "1C4RJFDJ3FC632573": null,
  "1FTFX1EF0DKD15402": null,
  "1FTEW1EF7FFA01997": null,
  "2FMDK36C87BA45934": null,
  "JM1BL1L77D1791237": null,
  "WDBUF56J36A829398": null,
  "5NPEB4AC3CH345806": null,
  "WAUFFAFL6BN025584": null,
  "2C4RDGCG7CR154227": null,
  "1HGCS1B83CA002857": null,
  "3GYFNEE35ES664073": null,
  "2GCEK13MX71629140": null,
  "3N1AB7AP6EY230497": null,
  "1G1JC5SB9C4202476": null,
  "2T3BFREV2DW071007": null,
  "1FMRU17L42LA16085": null,
  "1FADP3K24DL345054": null,
  "2C4RDGCG7ER123028": null,
  "2G1WT55K469340526": null,
  "JM1BJ245321598539": null,
  "2FMZA5143YBC10231": null,
  "1YVHZ8CB5A5M11834": null,
  "4T1BE46K49U400929": null,
  "1FM5K8GT4EGB37824": null,
  "5N1AL0MM5FC509917": null,
  "YV1CZ592751152647": null,
  "1G4PP5SK3C4226743": null,
  "JT2AW15C3H0101470": null,
  "1D4GP45R56B674508": null,
  "1C3CDZAB5DN519225": null,
  "1GTHK23638F114429": null,
  "1B3HB48B17D146406": null,
  "JN8AS5MV0BW683565": null,
  "KMHDH4AH4FU250683": null,
  "1J4RS4GG6BC533901": null,
  "1HGCP2F85AA038497": null,
  "2GTEK13T861169580": null,
  "1FUYSSEB9WP890221": null,
  "1G4HD57MX9U121519": null,
  "1N6DD26T44C410188": null,
  "1GKDT13S942112404": null,
  "1FUYDZYB6VP752570": null,
  "4V4M19GFX2N335306": null,
  "5TFUY5F16CX252385": null,
  "1D7HU18227J638117": null,
  "3FA6P0H96ER152595": null,
  "4T1BG22K1WU381403": null,
  "2G4WS52M0W1571319": null,
  "5FYD4FV178B034026": null,
  "5YFBURHE8FP247136": null,
  "1G6KD54YXXU738288": null,
  "WDBUF56X89B437293": null,
  "1FTFW1EF4CFB28559": null,
  "1G2ZM551964265466": null,
  "1C6RR7GT5ES280023": null,
  "1C4RDHAG7EC445945": null,
  "JTJBC1BA7D2063728": null,
  "WVWNM7AJ6DW126957": null,
  "3GCEC13C09G176483": null,
  "WA1KK78R39A039164": null,
  "YV4902BZ4B1105925": null,
  "1N6BD0CT5BC450583": null,
  "1FTRW08L22KE28437": null,
  "JM1BK32F791252163": null,
  "1B3EL36X84N389273": null,
  "WMWZG3C50ETY33375": null,
  "4T3BK3BB6BU063556": null,
  "3FA6P0K95DR222885": null,
  "1HGCP2F65BA060483": null,
  "4T1BF3EK9AU096901": null,
  "1GNDV23L65D272984": null,
  "1G1ZU648X4F160140": null,
  "1G6KD57Y28U130407": null,
  "JNKCA21A9XT755801": null,
  "1C4BJWDG7CL184176": null,
  "JT8BH68X6Y0022018": null,
  "3VWRL7AJXAM091952": null,
  "1J4AA2D19BL569294": null,
  "WBAVC53578FZ82679": null,
  "JHMZE2H53BS003856": null,
  "5LMJJ3JT5FEJ05374": null,
  "1FM5K7F89DGA20424": null,
  "YV1TS91D921260773": null,
  "1XP7D49X4AD793726": null,
  "4S6CM58W8X4415094": null,
  "3C63RRGL4DG533484": null,
  "JN1CV6AP7BM500281": null,
  "1C4BJWEG5DL674874": null,
  "KMHTC6ADXDU155349": null,
  "1FUJBBAV33LJ88822": null,
  "5XXGN4A71FG426273": null,
  "4T1BG22K31U088448": null,
  "5GAKVBKD5EJ280619": null,
  "1LNHM86S03Y681034": null,
  "2FMDK4KC8DBC30783": null,
  "1FMFU17506LA40717": null,
  "4T1SK12E6SU636396": null,
  "1D7HU18298J149943": null,
  "1FTMF1CF4DFE09370": null,
  "1G11E5SA4DF333824": null,
  "5N1ED28Y11C520672": null,
  "JM1BL1TG4D1745977": null,
  "NM0LS7E71E1135699": null,
  "3FA6P0H70ER373592": null,
  "KNAGD128445343380": null,
  "1G1PC5SB5E7158312": null,
  "1GTJK33D77F111151": null,
  "KNDJD733945206630": null,
  "1J4FT48S2YL172114": null,
  "1FAFP53245A139846": null,
  "1B7GG12XX2S523480": null,
  "5Y2SL62893Z464541": null,
  "1G1PF5SC1C7307702": null,
  "5GRGN23U23H114483": null,
  "1C4BJWDG2CL289921": null,
  "1G2ZG57BX84188476": null,
  "1C3CCBCB2CN278021": null,
  "1FTRW12W07FA10810": null,
  "YV1672MC3BJ109226": null,
  "1C3CDZAG8EN154097": null,
  "1FDXB80C1TVA08970": null,
  "1FMCU9H93DUC56829": null,
  "1N4AL2AP6BN502266": null,
  "2GKFLXE32D6321732": null,
  "1D7HU182X6S552224": null,
  "1J8FF47W37D140890": null,
  "1FAFP40491F164271": null,
  "5FNRL5H94DB080232": null,
  "1FTNX21L92EC07546": null,
  "1C3BC1FB9BN576338": null,
  "5NPDH4AE1DH289121": null,
  "3VW217AU6FM011233": null,
  "1FADP3F24DL292012": null,
  "3GTU2UEC5EG266753": null,
  "4T3ZK3BB0DU060475": null,
  "JTHCE96S570008342": null,
  "19XFB4F2XDE000556": null,
  "JTEGF21A910005159": null,
  "YV1CZ852951216663": null,
  "3GNMCFE07BG272703": null,
  "1GCDC14K8KZ116135": null,
  "1GNKRGKD0EJ125161": null,
  "5N1AZ2MH6FN202242": null,
  "1N4AA5AP8DC839527": null,
  "5XXGM4A75CG043354": null,
  "1GBE5C1265F528286": null,
  "1GKDT13S922295817": null,
  "3GCPCREA5BG371052": null,
  "WAUVGAFH2BN005708": null,
  "JN8AE2KP7C9043752": null,
  "1G8ZS57N37F210450": null,
  "2FMDK4KC4DBC53316": null,
  "1FT8W3BT7EEB02321": null,
  "2C3CDYAG5CH124815": null,
  "JF2SJGWC0FH544767": null,
  "5N1AN08U76C535567": null,
  "JS2YB5A37A6302568": null,
  "WAUVGAFH3BN000954": null,
  "1G2AL18F787208376": null,
  "JT6HF10U5X0027819": null,
  "1N4AB41D6WC728877": null,
  "3GCDA15D68S520854": null,
  "2FMZA52225BA76692": null,
  "WMWSV3C57DT479960": null,
  "1G2JB5244Y7345647": null,
  "JA4JZ4AX9FZ001899": null,
  "WVWFD7AJ9CW288021": null,
  "1FAFP36N26W243511": null,
  "2V4RW3DG3BR766978": null,
  "1FAHP3K21CL476197": null,
  "KMHCT4AE9CU194431": null,
  "3GNEC16R7XG243276": null,
  "YV1CZ852951195264": null,
  "1LNHM94RX9G626546": null,
  "2GTEK13V961305801": null,
  "1HGCT1B81FA001692": null,
  "1FMFU17539EA64289": null,
  "1HTMKAAM22H371865": null,
  "5S3ET13S652801229": null,
  "1FTFW1CT0EKF55045": null,
  "3FADP4EJ7EM234698": null,
  "5XXGR4A66FG368009": null,
  "5NPDH4AE4DH345195": null,
  "1FAHP3M21CL416451": null,
  "1B3HB48B48D678993": null,
  "4T1BF3EK3AU088633": null,
  "KMHDH4AH4EU171349": null,
  "JT3GN86R910186244": null,
  "1G11B5SL5FF248780": null,
  "1G11B5SA6DF270489": null,
  "1FMCU0EG6CKA70842": null,
  "1M2AV02C99M004661": null,
  "JTHBK1EG3B2469443": null,
  "2HGFG12629H523754": null,
  "1GNDT13WXW2279489": null,
  "JHLRD1867WC071944": null,
  "1FMRU17L7XLC50339": null,
  "1HGCT2B80FA002824": null,
  "3TMLU4EN4EM137587": null,
  "2G1FA1E38D9158817": null,
  "1J4GS48K15C553942": null,
  "1C3CCBCG5EN198484": null,
  "5TDKK3DC0BS097483": null,
  "1G4HR54K82U201475": null,
  "JN8AF5MR3ET359460": null,
  "JF1GG68606G807419": null,
  "WDBJF55F8VA403298": null,
  "1GKFK66U65J164909": null,
  "1FAHP3FN7AW265991": null,
  "5N1AT2MV5FC761039": null,
  "1G4PR5SKXD4186155": null,
  "3D4PH5FV7AT196372": null,
  "JTDKDTB35E1565187": null,
  "WVWBW7AH7CV007202": null,
  "1N4AL3AP5FN352341": null,
  "2HGEJ1220SH570734": null,
  "2CNDL63F666023368": null,
  "1J4GA59148L608662": null,
  "2T1BU4EE0AC335565": null,
  "4JGBB72E18A410022": null,
  "KMHHU6KJ4FU123572": null,
  "1FTFX1EF6DFC86111": null,
  "1FMZU62K73UB94564": null,
  "JA4LS31HXYP813372": null,
  "1GKS2HE32BR154992": null,
  "1FTSW21506EC43901": null,
  "5TDDK3DC5CS034292": null,
  "JTEZU5JRXB5032588": null,
  "1YVHP80C075M24647": null,
  "5TDZK3EH7AS023999": null,
  "5FNYF4H5XDB054096": null,
  "2M2P267Y4MC009883": null,
  "1FMYU02Z77KB69672": null,
  "1HGCR2F5XEA036489": null,
  "1FMCU9G96DUA13985": null,
  "2C3LA43R68H160567": null,
  "1HVBBABP81H400811": null,
  "KNAGM4A70C5279685": null,
  "19XFB2F9XDE264863": null,
  "1N6SD11S0LC413300": null,
  "JA4LS21H02J067227": null,
  "1FMJK1H58EEF28847": null,
  "KMHDN46D15U008544": null,
  "JTDDY38TX20053978": null,
  "1FMCU9H97DUD42256": null,
  "5FNRL5H65FB011106": null,
  "1FTNE2EL5EDA02784": null,
  "1FA6P0HD8F5105500": null,
  "1D7RV1CT8BS561919": null,
  "3N1BC1AP2BL447892": null,
  "1GCKTBD96A8144286": null,
  "1GDER16K2MF527322": null,
  "1J8GN28K98W157271": null,
  "1FTEW1E84AFB62687": null,
  "2T1BU4EE1AC469582": null,
  "1FAHP38Z05W153927": null,
  "1GKS1HKC5FR547186": null,
  "1FTFX1EF2FFA38599": null,
  "3C3CFFAR4DT677996": null,
  "1J4GA2D14AL130075": null,
  "1FASP11J5SW296446": null,
  "1GNSCKE08DR320681": null,
  "1FVACXBS59HAD5136": null,
  "5UXWX9C56E0D30199": null,
  "1ZVBP8CH3A5164283": null,
  "2G1FP22KX22110953": null,
  "2G1WF52E459359985": null,
  "1C3BC1FB4BN569135": null,
  "1G1JC524827441628": null,
  "1FMCU9EG5CKA39621": null,
  "1GNEC13T85R195154": null,
  "4T1BE30KX2U633948": null,
  "2C4RC1BG8ER342789": null,
  "JA32U2FU1DU020628": null,
  "WP0CA29843S620082": null,
  "1G8AF52F95Z100872": null,
  "1G3WS52K5WF365960": null,
  "1LNHL9FT7CG801418": null,
  "1D7RV1GT9BS565715": null,
  "2T3DFREVXFW242064": null,
  "JF1ZCAB12E9601736": null,
  "3D7JB1EP0BG534825": null,
  "1FMCU9EG7CKA77495": null,
  "ZAM45KLA9C0061818": null,
  "5NPEB4AC2DH728038": null,
  "JNKCV54E05M410216": null,
  "1FTFW1ET0DKE44488": null,
  "1NXBR32EX7Z928292": null,
  "JTEBU4BF3DK173054": null,
  "JTHCL5EF8D5019322": null,
  "WA1LFAFP8EA083131": null,
  "5FNYF18417B028206": null,
  "WMWMF73578TV36015": null,
  "1FTFW1EF3EKF15369": null,
  "2GKFLVEK5F6166091": null,
  "1G11C5SLXEF250309": null,
  "2HGFB2F56CH516125": null,
  "1G4HG5EM7AU113747": null,
  "1G2JB54H8R7599668": null,
  "1FTPW14V78KB17955": null,
  "1XP5DU9X6YD479108": null,
  "2B4GH25K4PR389493": null,
  "3GTP1VE01DG134387": null,
  "ZFBCFAAHXEZ017108": null,
  "1N4BA41E67C860619": null,
  "1N4BA41E96C865134": null,
  "3D7MS48C05G787347": null,
  "1FAFP34N95W263711": null,
  "2HGFA1F5XAH307447": null,
  "1G2ZG57BX84104057": null,
  "1J8FF48W18D775400": null,
  "WDDGF8AB2DR253839": null,
  "2FMZA52295BA30289": null,
  "JN8AE2KP3E9103481": null,
  "3GYT4NEFXDG305187": null,
  "2C3KA53G46H387561": null,
  "SAJDA42C932A33833": null,
  "KMHDH4AE2FU222368": null,
  "KMHTC6ADXFU223376": null,
  "WAUAFAFH0BN015431": null,
  "KNDJF724467164640": null,
  "4T1BE32K96U684070": null,
  "1FT7W2BTXFEC31144": null,
  "1GYEE637070154084": null,
  "5NPE24AF0FH057014": null,
  "3VWDZ7AJ8BM320011": null,
  "1G1ZC5E08AF189430": null,
  "2GKALMEK8E6134206": null,
  "3GNFC16FXXG116273": null,
  "5N1AL0MM3FC502741": null,
  "3G5DB03E32S593553": null,
  "JF1GR8H65BL812591": null,
  "JNRAS08W98X203351": null,
  "3N1AB7AP9EL609104": null,
  "1GBFG15W1Y1208987": null,
  "1M1AA13Y11W138640": null,
  "JF2GPACC5E8264802": null,
  "SALME15489A300132": null,
  "JN8AS5MV1DW108314": null,
  "2G4WB55K3Y1328889": null,
  "KMHFH4JGXEA420478": null,
  "1G1ZE5EU9BF246278": null,
  "3N1AB6AP3BL677842": null,
  "1FTRF14V57KC72589": null,
  "2G4WS52J531158507": null,
  "5N1AR18W85C732113": null,
  "JM1BL1K30B1355311": null,
  "3C4PDCGGXFT529698": null,
  "1G6DN56S850180671": null,
  "WBANB535X6CP02108": null,
  "JTDKN3DU4F0415873": null,
  "1GCDT136958183499": null,
  "2B3HD46R02H108333": null,
  "2G1WC5E30D1112544": null,
  "1GNFK16357J192247": null,
  "5TDDK3DC1BS009050": null,
  "3N1BC1CP9BL374968": null,
  "5Y2SP6E82AZ406882": null,
  "1GTG6BE38F1124354": null,
  "1FDWE30F6XHB99239": null,
  "KNDJT2A5XD7510225": null,
  "1B3LC46B79N556635": null,
  "3C8FY68B12T282343": null,
  "1N4BA41E74C877747": null,
  "2T2ZK1BA0AC021642": null,
  "2HKYF18433H519842": null,
  "3TMJU62N18M066439": null,
  "4S3BP626566314578": null,
  "JM3KE4DY8E0319503": null,
  "3GNEC16R4XG211661": null,
  "1FTDF15N7JNA94666": null,
  "JTDKN3DU2F1899374": null,
  "5UXFG2C52E0H11460": null,
  "WBAKA8C59CDS99509": null,
  "JF1GE75628G509487": null,
  "5TDZA3EH6CS018136": null,
  "1FMYU03114KA20047": null,
  "JHMCP26308C074856": null,
  "1GT020C85DF213590": null,
  "3N1CN7AP4CL896901": null,
  "5TFRU5F18EX032556": null,
  "1FMZU73K43UB46721": null,
  "KMHDB8AEXAU083270": null,
  "4T1BG12K8TU760694": null,
  "1XPCDB9X5KD280926": null,
  "KNDJN2A21E7002128": null,
  "KM8JU3AC2BU258031": null,
  "JM1BM1L79E1194251": null,
  "1N4AL3AP5FC210647": null,
  "KMHDN46D14U719885": null,
  "3C6UR5FLXEG218303": null,
  "5UXZV4C50D0E04804": null,
  "1J4NT1FB8BD190292": null,
  "1FTVX14527NA38971": null,
  "5TDBT48A75S250411": null,
  "1M1AA13YXYW125475": null,
  "1FUJBBCKX6LW24539": null,
  "1FT7W2BT4EEB22113": null,
  "2G1WF5E33C1249533": null,
  "2G2WP552381160083": null,
  "1C3CDZAB0EN188247": null,
  "1FAHP3H22CL339809": null,
  "3GCUKTEJ2EG295569": null,
  "3D7KU28D14G106982": null,
  "1ZVBP8AM5D5268472": null,
  "5TDKK3DC8DS345062": null,
  "2HNYD28227H513047": null,
  "JTNBK3EK9B3050665": null,
  "1N4AL3AP3DC901494": null,
  "SALHV1240NA615703": null,
  "3C4PDDGG9FT512364": null,
  "4T1BG12KXTU789873": null,
  "1FTFX1CF2DFD74706": null,
  "1N4AL11DX5C179923": null,
  "JTEBT14R848014455": null,
  "1FMJU1J52AEB21198": null,
  "KMHFG4JG6CA121554": null,
  "1G4HD57227U116326": null,
  "1G6AR5SX8E0180856": null,
  "3N1AB7AP0EY207703": null,
  "1N6BF0LX9EN101626": null,
  "5FNYF3H46CB043404": null,
  "3N6CM0KN0FK693550": null,
  "4T1BG22K8WU214374": null,
  "1G4AG54N1P6442209": null,
  "KNDMB233266022424": null,
  "3FA6P0HD0ER170966": null,
  "1G1ZB5EB5AF230262": null,
  "5N1AR1NN0BC633180": null,
  "4T1BF1FK5DU676072": null,
  "3GCPCRECXEG100803": null,
  "2MEFM75WX6X601753": null,
  "WA1UFAFL5EA096386": null,
  "1GC1KXC85EF189077": null,
  "3FADP4BJ1EM136321": null,
  "1FTEX1CM1EKD11793": null,
  "1ZVFT84N055248276": null,
  "WP1AB29P63LA60179": null,
  "1N4BA41E86C827992": null,
  "3GTU2UEH5EG490472": null,
  "1FTPX14V28FB47967": null,
  "1G1ZC5E04CF232812": null,
  "1G6DF577X90134952": null,
  "1MEHM40137G606688": null,
  "5NPEB4AC3BH206113": null,
  "1N6BD06T27C405930": null,
  "1FTRX18L5XNA68380": null,
  "1G11B5SL1FF206428": null,
  "WMWRC33445TC59028": null,
  "WA1KK78RX9A019381": null,
  "WBAPH7C54BE675442": null,
  "1GYEE637080104254": null,
  "KL5JD86Z37K492914": null,
  "SAJWA0ES5DPS82149": null,
  "1FMPU18L34LA97282": null,
  "3FADP4EJ5DM227215": null,
  "1FAFP34374W112315": null,
  "1G1ZD5E13BF327253": null,
  "KMHWF35H85A197585": null,
  "5TEUU42N67Z408065": null,
  "1C4RJFAG2CC105161": null,
  "2G4GN5EC5B9186137": null,
  "1FTPW12584KB32235": null,
  "JN8AS5MV9CW707881": null,
  "1HGCP3F84CA032327": null,
  "1C4SDJCT8EC576580": null,
  "55SWF4KB6FU009292": null,
  "2C4RC1CG7ER164923": null,
  "2GCFC29K7N1178436": null,
  "1N4BA41EX5C839222": null,
  "3FA6P0H70FR219787": null,
  "WBALM7C54DE385568": null,
  "KNAGE124185253300": null,
  "5TDZT34A94S214992": null,
  "1FUJA6CK93LM05335": null,
  "WAUAFAFL2EN043823": null,
  "2HKRL18691H577806": null,
  "1G1AF5F59A7211301": null,
  "1GNDX03E1XD124325": null,
  "1FM5K7F86FGB46470": null,
  "1GKES16S536204345": null,
  "1FM5K8B86DGB99713": null,
  "1G1JC5SB3E4143220": null,
  "2D4RN5DX3AR203553": null,
  "KMHDU4AD6AU138369": null,
  "2HNYD18864H510730": null,
  "1N4AA5AP6CC812809": null,
  "2C4RC1HG8ER464592": null,
  "1J4BA3H16BL629455": null,
  "1GNKRGKD6EJ129764": null,
  "2HNYD188X5H542047": null,
  "3VWRL71K09M120721": null,
  "1GKKVRKD0EJ336543": null,
  "JTDKN3DU0A1301226": null,
  "JTLKT324X64093830": null,
  "1FTPW14V88FA58519": null,
  "1G11G5SX2FF114538": null,
  "1GCEC19077E555790": null,
  "2G1WT55K089197349": null,
  "KMHFC46F48A301263": null,
  "4V1WDBCH4SN701594": null,
  "JTDBT4K38C1416889": null,
  "1N4AA5AP3BC850481": null,
  "JHMFA3F20BS000006": null,
  "2C3CA6CT2BH518200": null,
  "1FMJU1K5XCEF12603": null,
  "KMHGC46E79U069074": null,
  "1G1JC524727222319": null,
  "1GMDV33L45D221526": null,
  "1G1JE6SB3E4213573": null,
  "2C4RDGBG8CR349478": null,
  "3TMJU4GN6DM153650": null,
  "JN1BY1AR6FM560775": null,
  "JN8AZ1MWXBW160311": null,
  "1GTEC14X19Z150945": null,
  "4T1BD1FK3EU121208": null,
  "KMHTC6AD4DU141009": null,
  "1FTNW21F13EA05282": null,
  "1C3CCCCG4FN643899": null,
  "WDBUF82J85X178966": null,
  "2LMDJ8JK1FBL33635": null,
  "JNKCV51F76M605521": null,
  "1C4PJMCB6EW171842": null,
  "2T2HA31U16C097772": null,
  "2MEFM75V17X620765": null,
  "1N4AL3AP2EC165018": null,
  "1G8ZJ5276WZ183480": null,
  "JTHCF1D25E5013011": null,
  "3VW817AU3FM024693": null,
  "JM3KE4CY4F0454111": null,
  "1C4NJRFB8CD696183": null
};
var getRandomVin = function getRandomVin() {
  var vinsArray = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(vins);

  return vinsArray[Math.floor(Math.random() * vinsArray.length)];
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! copy-to-clipboard */ "copy-to-clipboard");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _data_vins_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../data/vins.js */ "./data/vins.js");
/* harmony import */ var _components_NotificationBar_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/NotificationBar.jsx */ "./components/NotificationBar.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);










var _jsxFileName = "/Users/brendanquinn/Documents/Development/vin/pages/index.jsx";






var getVehicleByVin = function getVehicleByVin(vin) {
  return axios__WEBPACK_IMPORTED_MODULE_14___default.a.get("https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/".concat(vin, "?format=json")).then(function (resp) {
    return resp.data.Results.filter(function (r) {
      return r.Variable;
    }).filter(function (r) {
      return r.Value;
    });
  }).then(function (results) {
    return results.reduce(function (sum, r) {
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_9__["default"])({}, sum, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, r.Variable, r.Value));
    }, {});
  });
};

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      vins: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, Object(_data_vins_js__WEBPACK_IMPORTED_MODULE_12__["getRandomVin"])(), null)
    });

    _this.onSubmit = _this.onSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.copyVin = _this.copyVin.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.getVins = _this.getVins.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var vin = this.getVins()[0];
      getVehicleByVin(vin).then(function (vehicleInfo) {
        _this2.setState({
          vins: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, vin, vehicleInfo)
        });
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      var _this3 = this;

      e.preventDefault();
      var vin = Object(_data_vins_js__WEBPACK_IMPORTED_MODULE_12__["getRandomVin"])();
      getVehicleByVin(vin).then(function (vehicleInfo) {
        _this3.setState({
          vins: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, vin, vehicleInfo), _this3.state.vins)
        });
      }).then(function () {
        return copy_to_clipboard__WEBPACK_IMPORTED_MODULE_11___default()(vin);
      });
    }
  }, {
    key: "copyVin",
    value: function copyVin() {
      copy_to_clipboard__WEBPACK_IMPORTED_MODULE_11___default()(this.getVins()[0]);
    }
  }, {
    key: "getVins",
    value: function getVins() {
      return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(this.state.vins);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("main", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Generate a ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("abbr", {
        title: "Vehicle Identification Number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "VIN")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Making it easy to generate and copy ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("abbr", {
        title: "Vehicle Identification Numbers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "VINs")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("form", {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        "aria-live": "polite",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Result: ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, this.getVins()[0])), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        type: "button",
        onClick: this.copyVin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Copy to Clipboard"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Get and Copy new VIN"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Vehicle Info"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, function (vehicleInfo) {
        return vehicleInfo ? _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(vehicleInfo, null, 4) : 'Loading...';
      }(this.state.vins[this.getVins()[0]])))), this.getVins().length > 1 ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "History"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dl", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, this.getVins().slice(1).map(function (v) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dt", {
          key: "".concat(v, "-term"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, v), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("dd", {
          key: "".concat(v, "-definition"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("pre", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("code", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(_this4.state.vins[v], null, 4)))));
      }))) : null);
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/brendanquinn/Documents/Development/vin/pages/index.jsx */"./pages/index.jsx");


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

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

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