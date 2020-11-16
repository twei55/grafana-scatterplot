define(["@grafana/data","@grafana/ui","d3","emotion","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_d3__, __WEBPACK_EXTERNAL_MODULE_emotion__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./ScatterplotPanel.tsx":
/*!******************************!*\
  !*** ./ScatterplotPanel.tsx ***!
  \******************************/
/*! exports provided: ScatterplotPanel, getValuesFromDataFrames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterplotPanel", function() { return ScatterplotPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValuesFromDataFrames", function() { return getValuesFromDataFrames; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helpers */ "./helpers.ts");







var ScatterplotPanel = function ScatterplotPanel(_a) {
  var _b;

  var options = _a.options,
      data = _a.data,
      width = _a.width,
      height = _a.height;
  var styles = Object(helpers__WEBPACK_IMPORTED_MODULE_6__["getStyles"])();
  var circleRadius = options.circleRadius;
  var allDataValues = [];
  var allDataTimes = [];
  _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(getValuesFromDataFrames(data.series), 2), allDataValues = _b[0], allDataTimes = _b[1]; // Define chart margins

  var margin = {
    left: 50,
    top: 30,
    right: 30,
    bottom: 50
  }; // Calculate dimensions for the inner chart by subtracting the margins.

  var chartWidth = width - (margin.left + margin.right);
  var chartHeight = height - (margin.top + margin.bottom); // Horizontal axis

  var xDomainMin = allDataValues.length > 1 ? d3__WEBPACK_IMPORTED_MODULE_5__["min"](allDataValues[0]) : 0;
  var xDomainMax = allDataValues.length > 1 ? d3__WEBPACK_IMPORTED_MODULE_5__["max"](allDataValues[0]) : 100;
  var xScale = Object(helpers__WEBPACK_IMPORTED_MODULE_6__["scale"])(options.scaleModeX)().domain([Object(helpers__WEBPACK_IMPORTED_MODULE_6__["domainMin"])(xDomainMin, options.scaleModeX), xDomainMax]).range([0, chartWidth]).clamp(true).nice();
  var xAxis = Object(helpers__WEBPACK_IMPORTED_MODULE_6__["getAxis"])('bottom', xScale, options.scaleModeX); // Vertical axis

  var yDomainMin = allDataValues.length > 1 ? d3__WEBPACK_IMPORTED_MODULE_5__["min"](allDataValues[1]) : 0;
  var yDomainMax = allDataValues.length > 1 ? d3__WEBPACK_IMPORTED_MODULE_5__["max"](allDataValues[1]) : 100;
  var yScale = Object(helpers__WEBPACK_IMPORTED_MODULE_6__["scale"])(options.scaleModeY)().domain([Object(helpers__WEBPACK_IMPORTED_MODULE_6__["domainMin"])(yDomainMin, options.scaleModeY), yDomainMax]).range([chartHeight, 0]).clamp(true);
  var yAxis = Object(helpers__WEBPACK_IMPORTED_MODULE_6__["getAxis"])('left', yScale, options.scaleModeY); // Color Gradient based on time range

  var timeMin = allDataTimes.length > 1 ? d3__WEBPACK_IMPORTED_MODULE_5__["min"](allDataTimes[0]) : 0;
  var timeMax = allDataTimes.length > 1 ? d3__WEBPACK_IMPORTED_MODULE_5__["max"](allDataTimes[0]) : 100;
  var colorScale = d3__WEBPACK_IMPORTED_MODULE_5__["scaleQuantize"]().range(Object(helpers__WEBPACK_IMPORTED_MODULE_6__["selectedColorRange"])(options.colorRange)).domain([timeMin, timeMax]); // Legend

  var legendBackgroundGradient = {
    background: 'linear-gradient(to top,' + Object(helpers__WEBPACK_IMPORTED_MODULE_6__["selectedColorRange"])(options.colorRange).join(',') + ')'
  }; // Modal

  var displayModal = Object(helpers__WEBPACK_IMPORTED_MODULE_6__["displayNegativeValueMessage"])(options.scaleModeX, allDataValues[0]) || Object(helpers__WEBPACK_IMPORTED_MODULE_6__["displayNegativeValueMessage"])(options.scaleModeY, allDataValues[1]);
  var modalBody = "One of your time series contains negative values and can't be displayed on a logarithmic scale. Please select a linear scale.";

  var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(displayModal), 2),
      modalIsOpen = _c[0],
      setModalIsOpen = _c[1];

  var onModalClose = function onModalClose() {
    setModalIsOpen(false);
  };

  var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    x: 0,
    y: 0,
    posLeft: 0,
    posTop: 0,
    dateTime: ''
  }), 2),
      tooltipProps = _d[0],
      setToolTipProps = _d[1];

  var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true), 2),
      tooltipIsHidden = _e[0],
      setTooltipIsHidden = _e[1];

  var showTooltip = function showTooltip(x, y, left, top, timestamp) {
    setToolTipProps({
      x: x,
      y: y,
      posLeft: left + 70,
      posTop: top + 20,
      dateTime: Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["dateTime"])(timestamp).format('Y-M-D HH:mm:ss')
    });
    setTooltipIsHidden(false);
  };

  var hideTooltip = function hideTooltip() {
    setTimeout(function () {
      return setTooltipIsHidden(true);
    }, 500);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(styles.wrapper, Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n          width: ", "px;\n          height: ", "px;\n        "], ["\n          width: ", "px;\n          height: ", "px;\n        "])), width, height))
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    className: "modal",
    title: "Warning",
    isOpen: modalIsOpen,
    onDismiss: onModalClose
  }, modalBody, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: styles.btnModalClose,
    variant: "primary",
    onClick: onModalClose
  }, "Close"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "graph-tooltip grafana-tooltip",
    hidden: tooltipIsHidden,
    style: {
      left: tooltipProps.posLeft + "px",
      top: tooltipProps.posTop + "px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "graph-tooltip-time"
  }, tooltipProps.dateTime), [tooltipProps.x, tooltipProps.y].map(function (name, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "graph-tooltip-list-item "
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "graph-tooltip-series-name"
    }, data.series[index].name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "graph-tooltip-value"
    }, name));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    className: styles.svg,
    width: width,
    height: height,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 " + width + " " + height
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    transform: "translate(" + margin.left + ", " + margin.top + ")"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, Object(helpers__WEBPACK_IMPORTED_MODULE_6__["renderPlot"])(allDataValues, allDataTimes) ? allDataValues[0].map(function (value, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
      key: 'circle-' + index,
      transform: "translate(" + xScale(value) + ", " + yScale(allDataValues[1][index]) + ")",
      style: {
        fill: "" + colorScale(allDataTimes[0][index])
      },
      "data-values": value + ", " + allDataValues[1][index],
      r: circleRadius,
      stroke: "white",
      strokeOpacity: "0",
      strokeWidth: "5",
      onMouseMove: function onMouseMove() {
        return showTooltip(value, allDataValues[1][index], xScale(value), yScale(allDataValues[1][index]), allDataTimes[0][index]);
      },
      onMouseOut: hideTooltip
    });
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
    transform: "translate(" + (chartWidth / 2 - 20) + ", " + (chartHeight / 2 - 20) + ")"
  }, "No data")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    transform: "translate(0, " + chartHeight + ")",
    ref: function ref(node) {
      d3__WEBPACK_IMPORTED_MODULE_5__["select"](node).call(xAxis);
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    ref: function ref(node) {
      d3__WEBPACK_IMPORTED_MODULE_5__["select"](node).call(yAxis);
    }
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "axisLabel left-yaxis-label"
  }, data.series.length > 1 ? data.series[0].name : ''), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "axisLabel " + styles.bottomXaxisLabel
  }, data.series.length > 1 ? data.series[1].name : ''), options.showLegend ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.legend,
    style: legendBackgroundGradient
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.legendLabel
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.legendLabelFrom
  }, data.timeRange.from.format('Y-M-D HH:mm:ss')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.legendLabelTo
  }, data.timeRange.to.format('Y-M-D HH:mm:ss')))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null));
};
var getValuesFromDataFrames = function getValuesFromDataFrames(dataSeries) {
  var allDataValues = [];
  var allDataTimes = [];
  dataSeries.forEach(function (series) {
    var dataValues = series.fields.find(function (field) {
      return field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_2__["FieldType"].number;
    });
    var dataTimes = series.fields.find(function (field) {
      return field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_2__["FieldType"].time;
    });

    if (dataValues && dataTimes) {
      allDataValues.push(dataValues.values.toArray());
      allDataTimes.push(dataTimes.values.toArray());
    }
  });
  return [allDataValues, allDataTimes];
};
var templateObject_1;

/***/ }),

/***/ "./helpers.ts":
/*!********************!*\
  !*** ./helpers.ts ***!
  \********************/
/*! exports provided: getAxis, selectedColorRange, domainMin, scale, getValuesFromDataFrames, renderPlot, displayNegativeValueMessage, getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAxis", function() { return getAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedColorRange", function() { return selectedColorRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domainMin", function() { return domainMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValuesFromDataFrames", function() { return getValuesFromDataFrames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderPlot", function() { return renderPlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayNegativeValueMessage", function() { return displayNegativeValueMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_4__);





var getAxis = function getAxis(orientation, scale, scaleMode) {
  var axis;

  if (orientation === 'bottom') {
    axis = d3__WEBPACK_IMPORTED_MODULE_4__["axisBottom"](scale);
  } else {
    axis = d3__WEBPACK_IMPORTED_MODULE_4__["axisLeft"](scale);
  }

  if (scaleMode === 'logarithmic') {
    axis = axis.ticks(10, '~s');
  }

  return axis;
};
var selectedColorRange = function selectedColorRange(selectedOption) {
  var colorRange = [];

  switch (selectedOption) {
    case 'plasma':
      colorRange = ['#0d0887', '#5302a3', '#8b0aa5', '#b83289', '#db5c68', '#f48849', '#febd2a', '#f0f921'];
      break;

    case 'turbo':
      colorRange = ['#23171b', '#4076f5', '#26d0cd', '#5ffc73', '#cbe839', '#ff9b21', '#d6390f', '#900c00'];
      break;

    case 'warm':
      colorRange = ['#6e40aa', '#a83cb3', '#df40a1', '#ff507a', '#ff704e', '#f89b31', '#d2c934', '#aff05b'];
      break;

    case 'spectral':
      colorRange = ['#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#e6f598', '#abdda4', '#66c2a5', '#3288bd'];
      break;
  }

  return colorRange;
}; // A log scale domain must not include or cross zero.
// https://stackoverflow.com/questions/40438911/logarithmic-scale-returns-nan

var domainMin = function domainMin(_domainMin, scaleMode) {
  return _domainMin === 0 && scaleMode === 'logarithmic' ? 1e-6 : _domainMin;
};
var scale = function scale(scaleMode) {
  return scaleMode === 'linear' ? d3__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"] : d3__WEBPACK_IMPORTED_MODULE_4__["scaleLog"];
};
var getValuesFromDataFrames = function getValuesFromDataFrames(dataSeries) {
  var allDataValues = [];
  var allDataTimes = [];
  dataSeries.forEach(function (series) {
    var dataValues = series.fields.find(function (field) {
      return field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_1__["FieldType"].number;
    });
    var dataTimes = series.fields.find(function (field) {
      return field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_1__["FieldType"].time;
    });

    if (dataValues && dataTimes) {
      allDataValues.push(dataValues.values.toArray());
      allDataTimes.push(dataTimes.values.toArray());
    }
  });
  return [allDataValues, allDataTimes];
};
var renderPlot = function renderPlot(values, times) {
  return values.length > 1 && times.length > 1;
};
var displayNegativeValueMessage = function displayNegativeValueMessage(scaleMode, timeseriesValues) {
  return scaleMode === 'logarithmic' && d3__WEBPACK_IMPORTED_MODULE_4__["min"](timeseriesValues) < 0;
};
var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["stylesFactory"])(function () {
  return {
    wrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: relative;\n    "], ["\n      position: relative;\n    "]))),
    svg: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "], ["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "]))),
    legend: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      height: 80%;\n      position: absolute;\n      right: 20px;\n      width: 12px;\n    "], ["\n      height: 80%;\n      position: absolute;\n      right: 20px;\n      width: 12px;\n    "]))),
    legendLabel: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      writing-mode: tb-rl;\n      transform: rotate(-180deg);\n      position: absolute;\n      left: 12px;\n      font-size: 0.8em;\n      height: 100%;\n    "], ["\n      writing-mode: tb-rl;\n      transform: rotate(-180deg);\n      position: absolute;\n      left: 12px;\n      font-size: 0.8em;\n      height: 100%;\n    "]))),
    legendLabelFrom: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: absolute;\n      text-align: start;\n      height: 100%;\n    "], ["\n      position: absolute;\n      text-align: start;\n      height: 100%;\n    "]))),
    legendLabelTo: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: absolute;\n      text-align: end;\n      height: 100%;\n    "], ["\n      position: absolute;\n      text-align: end;\n      height: 100%;\n    "]))),
    btnModalClose: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      margin-top: 20px;\n    "], ["\n      margin-top: 20px;\n    "]))),
    bottomXaxisLabel: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      bottom: 8px;\n      width: 100%;\n    "], ["\n      bottom: 8px;\n      width: 100%;\n    "])))
  };
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScatterplotPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScatterplotPanel */ "./ScatterplotPanel.tsx");


var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_ScatterplotPanel__WEBPACK_IMPORTED_MODULE_1__["ScatterplotPanel"]).setPanelOptions(function (builder) {
  return builder.addSelect({
    path: 'colorRange',
    defaultValue: 'warm',
    name: 'Color Range',
    settings: {
      options: [{
        value: 'plasma',
        label: 'Plasma'
      }, {
        value: 'spectral',
        label: 'Spectral'
      }, {
        value: 'turbo',
        label: 'Turbo'
      }, {
        value: 'warm',
        label: 'Warm'
      }]
    }
  }).addSelect({
    path: 'circleRadius',
    defaultValue: '1',
    name: 'Circle Radius',
    settings: {
      options: [{
        value: '1',
        label: '1'
      }, {
        value: '2',
        label: '2'
      }, {
        value: '3',
        label: '3'
      }, {
        value: '4',
        label: '4'
      }]
    }
  }).addRadio({
    path: 'scaleModeX',
    defaultValue: 'linear',
    name: 'X-Axis: Scale Mode',
    settings: {
      options: [{
        value: 'linear',
        label: 'Linear'
      }, {
        value: 'logarithmic',
        label: 'Logarithmic'
      }]
    }
  }).addRadio({
    path: 'scaleModeY',
    defaultValue: 'linear',
    name: 'Y-Axis: Scale Mode',
    settings: {
      options: [{
        value: 'linear',
        label: 'Linear'
      }, {
        value: 'logarithmic',
        label: 'Logarithmic'
      }]
    }
  }).addBooleanSwitch({
    path: 'showLegend',
    defaultValue: true,
    name: 'Show Legend'
  });
});

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "d3":
/*!*********************!*\
  !*** external "d3" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3__;

/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_emotion__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map