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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+g4l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("qNsG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("beRW");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tvz8");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4teO");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()('p').withConfig({
  displayName: "Text__TextWrapper",
  componentId: "sc-15lufec-0"
})(_base__WEBPACK_IMPORTED_MODULE_4__[/* base */ "a"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_3__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_4__[/* themed */ "b"])('Text'));

const Text = (_ref) => {
  let {
    content
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref, ["content"]);

  return __jsx(TextWrapper, props, content);
};

/* harmony default export */ __webpack_exports__["a"] = (Text);
Text.defaultProps = {
  as: 'p',
  mt: 0,
  mb: '1rem'
};

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextType = _router.RouterContext;
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouteWrapper;
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Y0NT");


/***/ }),

/***/ "27nJ":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("Rh0Y")();
}


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "3AUV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("qNsG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("beRW");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tvz8");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4teO");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()('p').withConfig({
  displayName: "Heading__HeadingWrapper",
  componentId: "vaqy1n-0"
})(_base__WEBPACK_IMPORTED_MODULE_4__[/* base */ "a"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_3__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_4__[/* themed */ "b"])('Heading'));

const Heading = (_ref) => {
  let {
    content
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref, ["content"]);

  return __jsx(HeadingWrapper, props, content);
};

/* harmony default export */ __webpack_exports__["a"] = (Heading);
Heading.defaultProps = {
  as: 'h2',
  mt: 0,
  mb: '1rem',
  fontWeight: 'bold'
};

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "4teO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return themed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return base; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Eek");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XoMD");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Jo+v");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4mXO");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vYYK");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("tvz8");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_7__);








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

/** this is our Base Component every components must be Extend it */

const themed = key => props => props.theme[key];
const base = Object(styled_system__WEBPACK_IMPORTED_MODULE_7__["compose"])(() => ({
  boxSizing: 'border-box'
}), styled_system__WEBPACK_IMPORTED_MODULE_7__["space"], styled_system__WEBPACK_IMPORTED_MODULE_7__["width"], styled_system__WEBPACK_IMPORTED_MODULE_7__["minWidth"], styled_system__WEBPACK_IMPORTED_MODULE_7__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_7__["height"], styled_system__WEBPACK_IMPORTED_MODULE_7__["minHeight"], styled_system__WEBPACK_IMPORTED_MODULE_7__["maxHeight"], styled_system__WEBPACK_IMPORTED_MODULE_7__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_7__["color"], styled_system__WEBPACK_IMPORTED_MODULE_7__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_7__["order"], styled_system__WEBPACK_IMPORTED_MODULE_7__["alignSelf"], styled_system__WEBPACK_IMPORTED_MODULE_7__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_7__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_7__["display"]);
base.propTypes = _objectSpread({}, styled_system__WEBPACK_IMPORTED_MODULE_7__["display"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_7__["space"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_7__["borders"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_7__["borderColor"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_7__["width"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_7__["height"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_7__["fontSize"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_7__["color"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_7__["flex"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_7__["order"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_7__["alignSelf"].propTypes);

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

var _WeakMap = __webpack_require__("G4HQ");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "DmBq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.11.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var h=__webpack_require__("N8cu"),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113;n&&Symbol.for("react.suspense_list");
var z=n?Symbol.for("react.memo"):60115,aa=n?Symbol.for("react.lazy"):60116;n&&Symbol.for("react.fundamental");n&&Symbol.for("react.responder");n&&Symbol.for("react.scope");var A="function"===typeof Symbol&&Symbol.iterator;
function B(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
function E(a,b,c){this.props=a;this.context=b;this.refs=D;this.updater=c||C}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(B(85));this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,c){this.props=a;this.context=b;this.refs=D;this.updater=c||C}var H=G.prototype=new F;
H.constructor=G;h(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,l=null;if(null!=b)for(e in void 0!==b.ref&&(l=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var k=Array(f),m=0;m<f;m++)k[m]=arguments[m+2];d.children=k}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:l,props:d,_owner:J.current}}
function ba(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,c,e){if(P.length){var d=P.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var l=0;l<a.length;l++){d=a[l];var f=b+T(d,l);g+=S(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=A&&a[A]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),l=
0;!(d=a.next()).done;)d=d.value,f=b+T(d,l++),g+=S(d,f,c,e);else if("object"===d)throw c=""+a,Error(B(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function U(a,b,c){return null==a?0:S(a,"",b,c)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ca(a,b){a.func.call(a.context,b,a.count++)}
function da(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,e,c,function(a){return a}):null!=a&&(N(a)&&(a=ba(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+c)),e.push(a))}function V(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(O,"$&/")+"/");b=Q(b,g,e,d);U(a,da,b);R(b)}function W(){var a=I.current;if(null===a)throw Error(B(321));return a}
var X={Children:{map:function(a,b,c){if(null==a)return a;var e=[];V(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=Q(null,null,b,c);U(a,ca,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){if(!N(a))throw Error(B(143));return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:x,render:a}},lazy:function(a){return{$$typeof:aa,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
b,c){return W().useImperativeHandle(a,b,c)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,c){return W().useReducer(a,b,c)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,Profiler:u,StrictMode:t,Suspense:y,createElement:M,cloneElement:function(a,b,c){if(null===a||void 0===a)throw Error(B(267,a));var e=h({},a.props),d=a.key,g=a.ref,l=a._owner;
if(null!=b){void 0!==b.ref&&(g=b.ref,l=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(k in b)K.call(b,k)&&!L.hasOwnProperty(k)&&(e[k]=void 0===b[k]&&void 0!==f?f[k]:b[k])}var k=arguments.length-2;if(1===k)e.children=c;else if(1<k){f=Array(k);for(var m=0;m<k;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,key:d,ref:g,props:e,_owner:l}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.11.0",
__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:h}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "Had4":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "N8cu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "Oi65":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "P5f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "QkGq":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/entypo/home");

/***/ }),

/***/ "Rh0Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__("Wtm3");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "SwrX":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/entypo/ccw");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Wtm3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "XoTP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetCSS; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _flaticon_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sClA");
/* harmony import */ var _flaticon_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_flaticon_css__WEBPACK_IMPORTED_MODULE_1__);


const ResetCSS = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  ::selection {
    background: #333333;
    color: #ffffff;
  }

  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *:focus {
    outline: none;
  }

  html,
  html a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  dl,
  th,
  dt,
  input,
  textarea,
  span,
  div {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  .reuseModalHolder {
    padding: 0 !important;
    &.demo_switcher_modal {
      border: 0 !important;
      background-color: rgba(16, 30, 77, 0.9) !important;
      .innerRndComponent {
        border-radius: 8px !important;
      }
    }
  }

  button.modalCloseBtn {
    position: fixed !important;
    z-index: 999991 !important;
    background-color: transparent !important;
    top: 10px !important;
    right: 10px !important;
    min-width: 34px !important;
    min-height: 34px !important;
    padding: 0 !important;
    span.btn-icon {
      font-size: 22px !important;
      transform: rotate(45deg) !important;
    }

    &.alt {
      border-radius: 50% !important;
      z-index: 999999 !important;
      padding: 0 !important;
      transition: all 0.3s ease !important;
      top: 25px !important;
      right: 30px !important;
      min-width: 40px !important;
      min-height: 40px !important;

      span.btn-icon {
        font-size: 20px !important;
      }

      &:hover {
        opacity: 0.88 !important;
      }
    }
  }
`;

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "Y0NT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-icons-kit"
var external_react_icons_kit_ = __webpack_require__("Oi65");
var external_react_icons_kit_default = /*#__PURE__*/__webpack_require__.n(external_react_icons_kit_);

// EXTERNAL MODULE: ./reusecore/src/elements/Box/index.js
var Box = __webpack_require__("usN7");

// EXTERNAL MODULE: ./reusecore/src/elements/Text/index.js
var Text = __webpack_require__("+g4l");

// EXTERNAL MODULE: ./reusecore/src/elements/Heading/index.js
var Heading = __webpack_require__("3AUV");

// EXTERNAL MODULE: ./reusecore/src/elements/Image/index.js
var Image = __webpack_require__("ZyGw");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("qNsG");

// EXTERNAL MODULE: ./reusecore/node_modules/react/index.js
var react = __webpack_require__("beRW");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("XoMD");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./reusecore/node_modules/styled-system/dist/index.cjs.js
var index_cjs = __webpack_require__("tvz8");

// CONCATENATED MODULE: ./reusecore/src/theme/customVariant.js

const buttonStyle = Object(index_cjs["variant"])({
  key: 'buttonStyles'
});
const colorStyle = Object(index_cjs["variant"])({
  key: 'colorStyles',
  prop: 'colors'
});
const sizeStyle = Object(index_cjs["variant"])({
  key: 'sizeStyles',
  prop: 'size'
});
const cards = Object(index_cjs["variant"])({
  key: 'cards'
});

// EXTERNAL MODULE: ./reusecore/src/elements/base.js
var base = __webpack_require__("4teO");

// CONCATENATED MODULE: ./reusecore/src/elements/Button/button.style.js








function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(source).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }





const ButtonStyle = external_styled_components_default.a.button.withConfig({
  displayName: "buttonstyle__ButtonStyle",
  componentId: "ntq24p-0"
})(["cursor:pointer;display:inline-flex;align-items:center;justify-content:center;color:", ";background-color:", ";min-height:", "px;min-width:", "px;border-radius:", "px;font-family:inherit;font-size:", "px;font-weight:", ";text-decoration:none;text-transform:capitalize;padding-top:", "px;padding-bottom:", "px;padding-left:", "px;padding-right:", "px;border:0;transition:all 0.3s ease;span.btn-text{padding-left:", "px;padding-right:", "px;}span.btn-icon{display:flex;> div{display:flex !important;}}&:focus{outline:none;}&.is-material{box-shadow:0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12);}&.is-loading{.btn-text{padding-left:", "px;padding-right:", "px;}}", " ", " ", " ", " ", " ", ""], Object(index_cjs["themeGet"])('colors.white', '#ffffff'), Object(index_cjs["themeGet"])('colors.primary', '#028489'), Object(index_cjs["themeGet"])('heights.3', '48'), Object(index_cjs["themeGet"])('widths.3', '48'), Object(index_cjs["themeGet"])('radius.0', '3'), Object(index_cjs["themeGet"])('fontSizes.4', '16'), Object(index_cjs["themeGet"])('fontWeights.4', '500'), Object(index_cjs["themeGet"])('space.2', '8'), Object(index_cjs["themeGet"])('space.2', '8'), Object(index_cjs["themeGet"])('space.4', '15'), Object(index_cjs["themeGet"])('space.4', '15'), Object(index_cjs["themeGet"])('space.1', '4'), Object(index_cjs["themeGet"])('space.1', '4'), Object(index_cjs["themeGet"])('space.2', '8'), Object(index_cjs["themeGet"])('space.2', '8'), index_cjs["alignItems"], index_cjs["boxShadow"], buttonStyle, colorStyle, sizeStyle, base["a" /* base */]); // prop types can also be added from the style functions

ButtonStyle.propTypes = _objectSpread({}, index_cjs["alignItems"].propTypes, {}, index_cjs["boxShadow"].propTypes, {}, index_cjs["variant"].propTypes);
ButtonStyle.displayName = 'ButtonStyle';
/* harmony default export */ var button_style = (ButtonStyle);
// CONCATENATED MODULE: ./reusecore/src/elements/Animation/index.js

const spinner = Object(external_styled_components_["keyframes"])(["0%{transform:rotate(0deg);}50%{transform:rotate(180deg);opacity:0.5;}100%{transform:rotate(360deg);}"]);
const AnimSpinner = Object(external_styled_components_["css"])(["animation:", " 1s linear infinite;"], spinner);

// CONCATENATED MODULE: ./reusecore/src/elements/Loader/loader.style.js








function loader_style_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function loader_style_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { loader_style_ownKeys(source, true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { loader_style_ownKeys(source).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }






const LoaderStyle = external_styled_components_default.a.span.withConfig({
  displayName: "loaderstyle__LoaderStyle",
  componentId: "sc-6byg9m-0"
})(["display:inline-flex;width:14px;height:14px;border-radius:50%;overflow:hidden;border-width:2px;border-style:solid;border-color:", ";border-top-color:transparent !important;", " ", " ", ""], props => props.loaderColor ? props.loaderColor : '#000000', AnimSpinner, colorStyle, base["a" /* base */]); // prop types can also be added from the style functions

LoaderStyle.propTypes = loader_style_objectSpread({}, index_cjs["variant"].propTypes);
LoaderStyle.displayName = 'LoaderStyle';
/* harmony default export */ var loader_style = (LoaderStyle);
// CONCATENATED MODULE: ./reusecore/src/elements/Loader/index.js


var __jsx = react_default.a.createElement;



const Loader = (_ref) => {
  let {
    loaderColor,
    className
  } = _ref,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["loaderColor", "className"]);

  // Add all classs to an array
  const addAllClasses = ['reusecore__loader']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(loader_style, Object(esm_extends["a" /* default */])({
    className: addAllClasses.join(' '),
    loaderColor: loaderColor
  }, props));
};

Loader.defaultProps = {};
/* harmony default export */ var elements_Loader = (Loader);
// CONCATENATED MODULE: ./reusecore/src/elements/Button/index.js


var Button_jsx = react_default.a.createElement;




const Button = (_ref) => {
  let {
    type,
    title,
    icon,
    disabled,
    iconPosition,
    onClick,
    loader,
    loaderColor,
    isMaterial,
    isLoading,
    className
  } = _ref,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["type", "title", "icon", "disabled", "iconPosition", "onClick", "loader", "loaderColor", "isMaterial", "isLoading", "className"]);

  // Add all classs to an array
  const addAllClasses = ['reusecore__button']; // isLoading prop checking

  if (isLoading) {
    addAllClasses.push('is-loading');
  } // isMaterial prop checking


  if (isMaterial) {
    addAllClasses.push('is-material');
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // Checking button loading state


  const buttonIcon = isLoading !== false ? Button_jsx(react["Fragment"], null, loader ? loader : Button_jsx(elements_Loader, {
    loaderColor: loaderColor || '#30C56D'
  })) : icon && Button_jsx("span", {
    className: "btn-icon"
  }, icon); // set icon position

  const position = iconPosition || 'right';
  return Button_jsx(button_style, Object(esm_extends["a" /* default */])({
    type: type,
    className: addAllClasses.join(' '),
    icon: icon,
    disabled: disabled,
    "icon-position": position,
    onClick: onClick
  }, props), position === 'left' && buttonIcon, title && Button_jsx("span", {
    className: "btn-text"
  }, title), position === 'right' && buttonIcon);
};

Button.defaultProps = {
  disabled: false,
  isMaterial: false,
  isLoading: false,
  type: 'button'
};
/* harmony default export */ var elements_Button = (Button);
// EXTERNAL MODULE: ./common/src/assets/image/404.svg
var _404 = __webpack_require__("k+0i");
var _404_default = /*#__PURE__*/__webpack_require__.n(_404);

// EXTERNAL MODULE: external "react-icons-kit/entypo/home"
var home_ = __webpack_require__("QkGq");

// EXTERNAL MODULE: external "react-icons-kit/entypo/ccw"
var ccw_ = __webpack_require__("SwrX");

// CONCATENATED MODULE: ./containers/Error/error.style.js

const ErrorWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "errorstyle__ErrorWrapper",
  componentId: "sc-1yedwaf-0"
})(["padding:80px 15px;height:100vh;display:flex;align-items:center;"]);
const ErrorConatent = external_styled_components_default.a.div.withConfig({
  displayName: "errorstyle__ErrorConatent",
  componentId: "sc-1yedwaf-1"
})(["width:450px;max-width:100%;margin:0 auto;.image-wrapper{@media (max-width:1480px){max-width:80%;margin-left:auto;margin-right:auto;}}"]);
const ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "errorstyle__ButtonWrapper",
  componentId: "sc-1yedwaf-2"
})(["font-family:'roboto';text-align:center;> *{margin:0 8px;}"]);
// CONCATENATED MODULE: ./containers/Error/index.js

var Error_jsx = external_react_default.a.createElement;













const ErrorSec = ({
  imageWrapper,
  title,
  text,
  reloadButton,
  homeButton
}) => {
  const pageReload = () => {
    window.location.reload();
  };

  return Error_jsx(ErrorWrapper, null, Error_jsx(ErrorConatent, null, Error_jsx(Box["a" /* default */], Object(esm_extends["a" /* default */])({}, imageWrapper, {
    className: "image-wrapper"
  }), Error_jsx(Image["a" /* default */], {
    src: _404_default.a,
    alt: "404"
  })), Error_jsx(Heading["a" /* default */], Object(esm_extends["a" /* default */])({}, title, {
    content: "Page not found!"
  })), Error_jsx(Text["a" /* default */], Object(esm_extends["a" /* default */])({}, text, {
    content: "Looks like the page you're trying to visit dosen't exist. Please check the URL and try your luck again."
  })), Error_jsx(ButtonWrapper, null, Error_jsx(elements_Button, Object(esm_extends["a" /* default */])({}, reloadButton, {
    title: "Reload Page",
    icon: Error_jsx(external_react_icons_kit_default.a, {
      icon: ccw_["ccw"],
      size: 24
    }),
    className: "domain_search_button",
    onClick: pageReload
  })), Error_jsx(link_default.a, {
    href: "/"
  }, Error_jsx("a", null, Error_jsx(elements_Button, Object(esm_extends["a" /* default */])({}, homeButton, {
    title: "Go Home",
    icon: Error_jsx(external_react_icons_kit_default.a, {
      icon: home_["home"],
      size: 24
    }),
    className: "domain_search_button"
  })))))));
};

ErrorSec.defaultProps = {
  imageWrapper: {
    mb: ['40px', '55px']
  },
  title: {
    fontSize: ['26px', '32px', '38px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px', '25px', '25px', '35px'],
    lineHeight: '1.31',
    textAlign: 'center',
    fontFamily: 'poppins',
    fontWeight: '600'
  },
  text: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#343d48',
    lineHeight: '2',
    mb: ['30px', '40px', '50px', '60px'],
    textAlign: 'center',
    fontFamily: 'lato'
  },
  reloadButton: {
    type: 'button',
    fontSize: '16px',
    fontWeight: '500',
    color: '#fff',
    pl: ['15px', '22px'],
    pr: ['15px', '22px'],
    iconPosition: 'left',
    bg: '#eaa03b',
    fontFamily: 'lato'
  },
  homeButton: {
    type: 'button',
    fontSize: '16px',
    fontWeight: '500',
    color: '#0f2137',
    pl: ['15px', '22px'],
    pr: ['15px', '22px'],
    iconPosition: 'left',
    bg: '#e2e7f0',
    fontFamily: 'lato'
  }
};
/* harmony default export */ var containers_Error = (ErrorSec);
// EXTERNAL MODULE: ./common/src/assets/css/style.js
var style = __webpack_require__("XoTP");

// CONCATENATED MODULE: ./pages/_error.js
var _error_jsx = external_react_default.a.createElement;





class _error_Error extends external_react_default.a.Component {
  static async getInitialProps({
    res,
    err
  }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return {
      statusCode
    };
  }

  render() {
    return _error_jsx(external_react_default.a.Fragment, null, _error_jsx(head_default.a, null, _error_jsx("title", null, "404: Not found"), _error_jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Lato:400,700|Poppins:400,500,600,700|Roboto:400,500,700&display=swap",
      rel: "stylesheet"
    })), _error_jsx(style["a" /* ResetCSS */], null), _error_jsx("div", null, this.props.statusCode ? `An error ${this.props.statusCode} occurred on server` : _error_jsx(containers_Error, null)));
  }

}

/* harmony default export */ var _error = __webpack_exports__["default"] = (_error_Error);

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "ZyGw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qNsG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("beRW");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4teO");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()('img').withConfig({
  displayName: "Image__ImageWrapper",
  componentId: "xwdy9p-0"
})({
  display: 'block',
  maxWidth: '100%',
  height: 'auto'
}, _base__WEBPACK_IMPORTED_MODULE_4__[/* base */ "a"], Object(_base__WEBPACK_IMPORTED_MODULE_4__[/* themed */ "b"])('Image'));

const Image = (_ref) => {
  let {
    src,
    alt
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["src", "alt"]);

  return __jsx(ImageWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    src: src,
    alt: alt
  }, props));
};

/* harmony default export */ __webpack_exports__["a"] = (Image);
Image.defaultProps = {
  m: 0
};

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "beRW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("DmBq");
} else {}


/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("P5f7");

var _utils = __webpack_require__("g/15");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) { var exact, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__("SqZg");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__("eVuF");

var _Object$assign = __webpack_require__("UXZV");

var _Object$defineProperty = __webpack_require__("hfKm");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const rewrite_url_for_export_1 = __webpack_require__("P5f7");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const is_dynamic_1 = __webpack_require__("/jkW");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (false) {} else {
            console.error(error);
          }

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (false) {} // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "production" !== 'production') && Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "icxN":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "k+0i":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjIuODcgMTk2LjM0Ij48ZGVmcz48c3R5bGU+LmNscy05e2ZpbGw6I2VlYmQ0Zn0uY2xzLTEwe2ZpbGw6I2Y3ZWM0MX0uY2xzLTExe2ZpbGw6I2U5YTcyN308L3N0eWxlPjwvZGVmcz48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iT0JKRUNUUyI+PGNpcmNsZSBjeD0iMTMxLjYxIiBjeT0iMTAzLjE5IiByPSI5My4xNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1IDEzMS42MTQgMTAzLjE5NCkiIG9wYWNpdHk9Ii4xIiBmaWxsPSIjZjFjYjZmIi8+PHBhdGggZD0iTTAgMTIzLjU5YTYgNiAwIDAxLjcyLTNMNDUuNiAzMi4yM2E1Ljg1IDUuODUgMCAwMTUuNTQtMy41N0E2LjMgNi4zIDAgMDE1NSAzMC4wOWE0LjIxIDQuMjEgMCAwMTEuODggMy40IDUuODkgNS44OSAwIDAxLS41NCAyLjMyTDE1IDExNy4zNmgzNS4wN1Y4Mi41M1E1MC4wNyA3OCA1NiA3OGE3LjM4IDcuMzggMCAwMTQuMTIgMS4xNyAzLjc2IDMuNzYgMCAwMTEuNzggMy4zNHYzNC44M2g5Ljg0QTMuODMgMy44MyAwIDAxNzUgMTE5YTYuMzUgNi4zNSAwIDAxMS4xNiAzLjczIDYuMjUgNi4yNSAwIDAxLTEuMjUgMy44OSAzLjg4IDMuODggMCAwMS0zLjIyIDEuNjVoLTkuODJ2MjYuNDFhNCA0IDAgMDEtMS43OCAzLjQ0IDcgNyAwIDAxLTQuMDkgMS4yNiA2Ljg0IDYuODQgMCAwMS00LjItMS4yNiA0LjA4IDQuMDggMCAwMS0xLjctMy40NHYtMjYuNDFINC42NXEtNC42NSAwLTQuNjUtNC42OHptMTg2LjY5IDBhNiA2IDAgMDEuNzItM2w0NC44OC04OC4zM2E1Ljg1IDUuODUgMCAwMTUuNTQtMy41NyA2LjMgNi4zIDAgMDEzLjg1IDEuNDMgNC4yMSA0LjIxIDAgMDExLjg4IDMuNCA1Ljg5IDUuODkgMCAwMS0uNTQgMi4zMmwtNDEuMzEgODEuNTVoMzVWODIuNTNxMC00LjUyIDUuOS00LjUxYTcuMzggNy4zOCAwIDAxNC4xMiAxLjE3IDMuNzYgMy43NiAwIDAxMS43OCAzLjM0djM0LjgzaDkuODRhMy44MyAzLjgzIDAgMDEzLjMxIDEuNjQgNi4zNSA2LjM1IDAgMDExLjE2IDMuNzMgNi4yNSA2LjI1IDAgMDEtMS4yNSAzLjg5IDMuODggMy44OCAwIDAxLTMuMjIgMS42NWgtOS44NHYyNi40MWE0IDQgMCAwMS0xLjc4IDMuNDQgNyA3IDAgMDEtNC4xMiAxLjI2IDYuODQgNi44NCAwIDAxLTQuMi0xLjI2IDQuMDggNC4wOCAwIDAxLTEuNy0zLjQ0di0yNi40MWgtNDUuMzdxLTQuNjUgMC00LjY1LTQuNjh6IiBmaWxsPSIjMzYzNjM2Ii8+PHBhdGggZmlsbD0iI2Q4YTA0NSIgZD0iTTE2Ny4yIDU5Ljk4bC0xMC4xMiA4Ljg3LTcuNTMtMTIuNDctMTEuNDIgOC44My0yLjM4IDEzLjUtMTUuMDIgNi41djI4LjU2aDI2Ljc0bDEyLjczLTE1LjMyIDEwLjY0LTIxLjU1LTMuNjQtMTYuOTJ6Ii8+PHBhdGggZD0iTTkzLjUgNzIuODlzLTIuNSAxMi4xOSAxNC42OSAzNi41N2MwIDAgNS42MyA2Ljg4IDQuNjkgMTguNDUgMCAwIC44IDExIDcgMTEuMzlzMzAuMTMgMCAzMC4xMyAwYTkuNCA5LjQgMCAwMDcuNjQtOS4xOWMuMzQtOC4wNSA3LjU0LTI1LjM1IDEwLjc5LTI5LjI5czEzLjg4LTIyLjEgNy44OC00MC43N2MwIDAtNy44OC0xNi43OS0xMS42NS0xNy42NWwzLjc3IDI2LjM5LTIuOTEgNS4xM2gtNC4xMWwtOS41OSAxNC4yMi0xNS4yNSAxLjU0LTcuNTQgMTMtNC4yOC0zLjc2LTEuMi05Ljc3LTE0LjIxLS4xNS02Ljg1LTEyLjE2eiIgZmlsbD0iI2YxY2I2ZiIvPjxwYXRoIGQ9Ik0xMjkuMDUgMTAxLjY5bDIuNTYgNi45OS0xLjI4IDcuNzJtMS4yOC04LjU3bDkuNTkgNC4yNy00Ljc5IDE5LjQybTE1LjQzLTQzLjM4bDMuMTggMTAuNDQtMS41OSA5LjI1bTEuNTktOS4yNWw2LjUzLTcuNjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBvcGFjaXR5PSIuNSIvPjxwYXRoIGQ9Ik0xNDkuNDIgMTQ2LjQ5aC0yNy4zM2EzIDMgMCAwMS0zLTMgMyAzIDAgMDEzLTNoMjcuMzNhMyAzIDAgMDEzIDMgMyAzIDAgMDEtMyAzem0wIDEwLjU4aC0yNy4zM2EzIDMgMCAwMS0zLTMgMyAzIDAgMDEzLTNoMjcuMzNhMyAzIDAgMDEzIDMgMyAzIDAgMDEtMyAzeiIgZmlsbD0iIzY2NiIvPjxwYXRoIGQ9Ik0xMjEuOSAxNDUuNjVoMjcuN2EyLjgzIDIuODMgMCAwMTIuODMgMi44MyAyLjg0IDIuODQgMCAwMS0yLjgzIDIuODNoLTI3LjdhMi44NSAyLjg1IDAgMDEtMi44My0yLjgzIDIuODQgMi44NCAwIDAxMi44My0yLjgzem0yLjE3IDEyLjczSDE0OHMtMTAuNTggMTQuOTMtMjMuOTMgMHoiIGZpbGw9IiM3ZjdmN2YiLz48cGF0aCBjbGFzcz0iY2xzLTkiIGQ9Ik0xMTUuNjYgNjEuMTVzLS4zOS0uMjEtMS0uNTljLS4zMi0uMTktLjczLS40MS0xLjE3LS42OHMtMS0uNTYtMS40OC0uOWMtMS4xLS42NC0yLjMzLTEuNDMtMy42Ni0yLjIzbC0xLS42MmMtLjM0LS4yLS42OS0uNC0xLS42Mi0uNjktLjQzLTEuNDEtLjgxLTIuMTItMS4yM3MtMS40NC0uNzctMi4xMy0xLjE4TDk5LjkzIDUybC0yLS45MWMtLjY1LS4yNS0xLjI2LS41Mi0xLjg0LS43NnMtMS4wOS0uMzMtMS42LS41MS0uOTItLjI0LTEuMjgtLjM2Yy0uNzItLjE5LTEuMTUtLjMzLTEuMTUtLjMzcy40Mi0uMTIgMS4xOC0uMjVhNy4xNCA3LjE0IDAgMDExLjM4LS4xOGgxLjgyYy42NyAwIDEuMzguMTYgMi4xNC4yOHMxLjUxLjM4IDIuMzIuNjEgMS41OC41OCAyLjM4LjkyIDEuNTcuNzYgMi4zMyAxLjIgMS41MS44OCAyLjIgMS4zOWEyNC41IDI0LjUgMCAwMTIgMS41MSAyOC40MSAyOC40MSAwIDAxMy4yMyAzLjA2IDIzLjc4IDIzLjc4IDAgMDEyIDIuNDYgMTEuODEgMTEuODEgMCAwMS42MiAxLjAyeiIvPjxwYXRoIGNsYXNzPSJjbHMtMTAiIGQ9Ik0xNDAuODYgNTZhMTIuNzEgMTIuNzEgMCAwMS4zNS0xLjY4Yy4xMy0uNTQuMzMtMS4xNy41Ny0xLjg5YTI0IDI0IDAgMDEuOTUtMi4zOGMuMTktLjQzLjM5LS44OC42MS0xLjM0cy40OS0uOTEuNzUtMS4zOGMuNS0xIDEuMTUtMS45IDEuNzktMi45LjM0LS40OC43Mi0uOTUgMS4wOS0xLjQ0YTE3LjU0IDE3LjU0IDAgMDExLjE4LTEuNDMgMzAuNzcgMzAuNzcgMCAwMTIuNjYtMi43bDEuNDMtMS4yNSAxLjU0LTEuMTJhMjIuMyAyMi4zIDAgMDEzLjEzLTEuOTIgMjAuNDMgMjAuNDMgMCAwMTMuMDktMS40NWMuNTEtLjE5IDEtLjQxIDEuNDgtLjU3bDEuNDQtLjM2YTIzLjIxIDIzLjIxIDAgMDEyLjUtLjU2Yy43Ni0uMDkgMS40My0uMTQgMi0uMTkgMS4wOS0uMDkgMS43MS0uMSAxLjcxLS4xcy0uNTguMjctMS41Ny42OGMtLjUuMi0xLjEuNDUtMS44LjdzLTEuNDEuNy0yLjIzIDEuMDZsLTEuMjYuNi0xLjMuNzRhMjkuMDYgMjkuMDYgMCAwMC0yLjczIDEuNjdsLTEuMzkuOTRjLS40OS4yOS0uOS43LTEuMzcgMWwtMS4zOCAxLjA3LTEuMzEgMS4yYy0uOTEuNzUtMS43IDEuNjMtMi41MyAyLjQ0UzE0OC43MSA0NS4xOCAxNDggNDZzLTEuNDMgMS42Ny0yIDIuNTEtMS4yMiAxLjYtMS43MyAyLjM1LTEgMS40NC0xLjQxIDItLjc3IDEuMTctMSAxLjYzYy0uNjkuOTQtMSAxLjUxLTEgMS41MXptLTE1Ljk2LTMuNTFsLTUuMTMtNS4zOC0yLjQ4LTIuNTYtMi44LTIuODFjLS45NC0xLTItMS45My0zLTNzLTIuMTEtMi0zLjItMy0yLjE1LTItMy4yNi0yLjg4LTIuMTQtMS44OC0zLjI0LTIuNjktMi4wOC0xLjcxLTMuMTItMi40MWwtMS40OC0xLjA4YTE3IDE3IDAgMDAtMS4zOS0xYy0uOTItLjU5LTEuNzUtMS4xNy0yLjUtMS42OHMtMS40My0uODctMi0xLjIxYy0xLjExLS42OC0xLjc0LTEuMS0xLjc0LTEuMXMuNzMuMTggMiAuNTZjLjYzLjIgMS40MS40IDIuMjYuNzRzMS44Ljc1IDIuODMgMS4yMkEzNS4yOCAzNS4yOCAwIDAxOTkuODYgMjZhMzguMTggMzguMTggMCAwMTMuNDYgMi4xNmMxLjE5Ljc3IDIuMzQgMS42NiAzLjUxIDIuNTdzMi4yOCAxLjkzIDMuNDMgMi45MSAyLjE3IDIuMDkgMy4yMiAzLjEzIDIgMi4xNCAyLjkxIDMuMjEgMS43OCAyLjEyIDIuNTYgMy4xNSAxLjQ5IDIgMi4xMyAyLjkzYTUzLjE4IDUzLjE4IDAgMDEyLjkyIDQuNmMuNTkgMS4xNC45IDEuODMuOSAxLjgzeiIvPjxwYXRoIGNsYXNzPSJjbHMtOSIgZD0iTTEzMC43MSA0MS4xN3YtMS41NmE0MC4yOSA0MC4yOSAwIDAxLjQzLTQuMDljLjE0LS44NC4yNy0xLjc1LjQ5LTIuN3MuNDEtMiAuNjktMyAuNTgtMi4wOC45Mi0zLjE1Ljc1LTIuMTIgMS4xMy0zLjE5Ljg4LTIuMSAxLjM0LTMuMTIgMS0yIDEuNS0yLjkzYTQxLjA3IDQxLjA3IDAgMDEzLjIzLTQuODljLjU0LS42NyAxLjA3LTEuMjYgMS41My0xLjc4YTEzLjQ4IDEzLjQ4IDAgMDExLjI5LTEuMjZjLjczLS42OCAxLjE4LTEgMS4xOC0xcy0uMjUuNTMtLjcyIDEuNGMtLjIyLjQ0LS41NC45My0uODMgMS41NXMtLjYyIDEuMy0xIDItLjcxIDEuNTgtMS4xMyAyLjQyLS43NSAxLjgtMS4xOSAyLjcyLS44MSAxLjkzLTEuMjIgMi45M2wtMS4yMiAzYy0xLjU4IDQuMTMtMy4xNiA4LjI3LTQuMzUgMTEuMzctLjU5IDEuNTctMS4xMiAyLjg3LTEuNDkgMy43OHMtLjU4IDEuNS0uNTggMS41eiIvPjxwYXRoIGNsYXNzPSJjbHMtMTAiIGQ9Ik04Ny4zIDI3LjM5QTIxLjMxIDIxLjMxIDAgMDE4Ni4xIDI0YTMzLjcgMzMuNyAwIDAxLS43Ni0zLjQyIDM0LjIyIDM0LjIyIDAgMDEtLjQxLTMuNDkgMjAuMTggMjAuMTggMCAwMTAtMy41NiAyMC4zNSAyMC4zNSAwIDAxMS4yIDMuMzUgMzQuODMgMzQuODMgMCAwMTEuMTcgNi45MSAyMC4xOCAyMC4xOCAwIDAxMCAzLjZ6Ii8+PHBhdGggY2xhc3M9ImNscy0xMCIgZD0iTTc5LjgyIDIzLjY0YTIwLjE5IDIwLjE5IDAgMDEyLjg4LTIuMTMgMzQuOCAzNC44IDAgMDE2LjMtMy4xNiAyMC4zIDIwLjMgMCAwMTMuNDMtMSAyMC42OSAyMC42OSAwIDAxLTIuODcgMi4xMyAzMi4yNCAzMi4yNCAwIDAxLTMuMDggMS43MyAzMy4yNiAzMy4yNiAwIDAxLTMuMjMgMS40MiAyMS42IDIxLjYgMCAwMS0zLjQzIDEuMDF6Ii8+PHBhdGggY2xhc3M9ImNscy0xMSIgZD0iTTkxLjQ4IDUzLjgzYTEyLjEgMTIuMSAwIDAxLTEuMTktMS40Yy0uMzQtLjQzLS43LTEtMS4wNy0xLjUxcy0uNzMtMS4yLTEuMDktMS44MmEyNi44OSAyNi44OSAwIDAxLTEuNjYtMy42IDEyLjM0IDEyLjM0IDAgMDEtLjU0LTEuNzYgMTMuMjkgMTMuMjkgMCAwMTEuMTkgMS40IDI2LjA5IDI2LjA5IDAgMDEyLjE1IDMuMzNjLjM0LjY0LjY4IDEuMjggMSAxLjg5cy41MyAxLjIuNzIgMS43MmExNC40IDE0LjQgMCAwMS40OSAxLjc1eiIvPjxwYXRoIGNsYXNzPSJjbHMtMTEiIGQ9Ik04NC42NiA1Mi45NGExMi43NiAxMi43NiAwIDAxMS0xLjU2Yy4zMi0uNDUuNzEtMSAxLjE1LTEuNDdzLjkzLTEgMS40My0xLjU4YTMwLjIzIDMwLjIzIDAgMDEzLTIuNjYgMTIuNTcgMTIuNTcgMCAwMTEuNTQtMSAxMy43MyAxMy43MyAwIDAxLTEgMS41NiAyOC41NSAyOC41NSAwIDAxLTIuNTggM2MtLjUyLjUxLTEgMS0xLjU0IDEuNDdzLTEgLjg2LTEuNDQgMS4xOWExNC4xIDE0LjEgMCAwMS0xLjU2IDEuMDV6bTU1LjUtNDcuMThhMTMuNDEgMTMuNDEgMCAwMTItLjI3Yy41OSAwIDEuMjktLjA4IDItLjA4czEuNTMgMCAyLjMyLjA3YTMwLjU3IDMwLjU3IDAgMDE0LjMxLjYxIDE0LjMyIDE0LjMyIDAgMDEyIC41NSAxNS42MSAxNS42MSAwIDAxLTIgLjI3IDMxLjU5IDMxLjU5IDAgMDEtNC4zNiAwYy0uNzkgMC0xLjU3LS4xNC0yLjMxLS4yNXMtMS40Mi0uMjItMi0uMzZhMTQuOSAxNC45IDAgMDEtMS45Ni0uNTR6Ii8+PHBhdGggY2xhc3M9ImNscy0xMSIgZD0iTTE0NSAwYTE0LjYgMTQuNiAwIDAxLjg0IDEuODUgMjAuNCAyMC40IDAgMDEuNjcgMS45M2MuMjIuNzIuNDMgMS40OC42MSAyLjI2YTI5Ljg0IDI5Ljg0IDAgMDEuNjggNC4zMyAxNC4zMiAxNC4zMiAwIDAxMCAyIDE0LjgyIDE0LjgyIDAgMDEtLjg0LTEuODQgMzEuNTUgMzEuNTUgMCAwMS0xLjI4LTQuMTljLS4xNy0uNzgtLjMyLTEuNTYtLjQzLTIuM3MtLjItMS40My0uMjUtMkExNC40NyAxNC40NyAwIDAxMTQ1IDB6Ii8+PHBhdGggY2xhc3M9ImNscy0xMCIgZD0iTTE2Ny42NSAyNmExOSAxOSAwIDAxMyAxLjY3QTM0LjczIDM0LjczIDAgMDExNzYgMzJhMTkuODMgMTkuODMgMCAwMTIuMjggMi42MSAxOS44MSAxOS44MSAwIDAxLTMtMS42NyAzMC40IDMwLjQgMCAwMS0yLjc2LTIgMzAuNTMgMzAuNTMgMCAwMS0yLjU2LTIuMjcgMjAuNCAyMC40IDAgMDEtMi4zMS0yLjY3eiIvPjxwYXRoIGNsYXNzPSJjbHMtMTAiIGQ9Ik0xNzUuNTMgMjMuOTJhMjAgMjAgMCAwMS0uNzIgMy40MWMtLjMyIDEuMTEtLjcgMi4xOS0xLjEyIDMuMjVhMzIuNiAzMi42IDAgMDEtMS40NCAzLjEyIDE5LjkyIDE5LjkyIDAgMDEtMS44NCAzIDIwLjI0IDIwLjI0IDAgMDEuNzItMy40MWMuMzEtMS4xLjctMi4xOCAxLjEyLTMuMjVhMzMuNzcgMzMuNzcgMCAwMTEuNDQtMy4xMiAxOS45MiAxOS45MiAwIDAxMS44NC0zeiIvPjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

exports.RouterContext = _routerContext.RouterContext;

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qNsG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sClA":
/***/ (function(module, exports) {



/***/ }),

/***/ "tvz8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("Had4");

exports.__esModule = true;
exports.mixed = exports.styles = exports.buttonStyle = exports.colorStyle = exports.textStyle = exports.left = exports.bottom = exports.right = exports.top = exports.zIndex = exports.position = exports.backgroundRepeat = exports.backgroundPosition = exports.backgroundSize = exports.backgroundImage = exports.background = exports.overflow = exports.opacity = exports.boxShadow = exports.borderRadius = exports.borderColor = exports.borders = exports.borderLeft = exports.borderBottom = exports.borderRight = exports.borderTop = exports.border = exports.gridArea = exports.gridTemplateAreas = exports.gridTemplateRows = exports.gridTemplateColumns = exports.gridAutoRows = exports.gridAutoColumns = exports.gridAutoFlow = exports.gridRow = exports.gridColumn = exports.gridRowGap = exports.gridColumnGap = exports.gridGap = exports.order = exports.alignSelf = exports.justifySelf = exports.flex = exports.flexDirection = exports.flexBasis = exports.flexWrap = exports.justifyContent = exports.justifyItems = exports.alignContent = exports.alignItems = exports.verticalAlign = exports.ratio = exports.ratioPadding = exports.size = exports.sizeHeight = exports.sizeWidth = exports.minHeight = exports.maxHeight = exports.height = exports.minWidth = exports.maxWidth = exports.display = exports.letterSpacing = exports.fontStyle = exports.fontWeight = exports.lineHeight = exports.textAlign = exports.fontFamily = exports.color = exports.bgColor = exports.textColor = exports.fontSize = exports.width = exports.space = exports.util = exports.variant = exports.getWidth = exports.style = exports.createMediaQuery = exports.compose = exports.merge = exports.cloneFunc = exports.themeGet = exports.get = exports.isObject = exports.isArray = exports.px = exports.num = exports.is = exports.defaultBreakpoints = exports.propTypes = void 0;

var _extends3 = _interopRequireDefault(__webpack_require__("icxN"));

var _propTypes = _interopRequireDefault(__webpack_require__("27nJ"));

// utils
var noop = function noop(n) {
  return n;
};

var propTypes = {
  numberOrString: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  responsive: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string, _propTypes.default.array, _propTypes.default.object])
};
exports.propTypes = propTypes;
var defaultBreakpoints = [40, 52, 64].map(function (n) {
  return n + 'em';
});
exports.defaultBreakpoints = defaultBreakpoints;

var is = function is(n) {
  return n !== undefined && n !== null;
};

exports.is = is;

var num = function num(n) {
  return typeof n === 'number' && !isNaN(n);
};

exports.num = num;

var px = function px(n) {
  return num(n) ? n + 'px' : n;
};

exports.px = px;
var isArray = Array.isArray;
exports.isArray = isArray;

var isObject = function isObject(n) {
  return typeof n === 'object' && n !== null;
};

exports.isObject = isObject;

var get = function get(obj) {
  for (var _len = arguments.length, paths = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    paths[_key - 1] = arguments[_key];
  }

  return paths.join('.').split('.').reduce(function (a, b) {
    return a && a[b] ? a[b] : null;
  }, obj);
};

exports.get = get;

var themeGet = function themeGet(paths, fallback) {
  return function (props) {
    return get(props.theme, paths) || fallback;
  };
};

exports.themeGet = themeGet;

var cloneFunc = function cloneFunc(fn) {
  return function () {
    return fn.apply(void 0, arguments);
  };
};

exports.cloneFunc = cloneFunc;

var merge = function merge(a, b) {
  return Object.assign({}, a, b, Object.keys(b || {}).reduce(function (obj, key) {
    var _Object$assign;

    return Object.assign(obj, (_Object$assign = {}, _Object$assign[key] = a[key] !== null && typeof a[key] === 'object' ? merge(a[key], b[key]) : b[key], _Object$assign));
  }, {}));
};

exports.merge = merge;

var compose = function compose() {
  for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    funcs[_key2] = arguments[_key2];
  }

  var fn = function fn(props) {
    return funcs.map(function (fn) {
      return fn(props);
    }).filter(Boolean).reduce(merge, {});
  };

  fn.propTypes = funcs.map(function (fn) {
    return fn.propTypes;
  }).reduce(merge, {});
  return fn;
};

exports.compose = compose;

var createMediaQuery = function createMediaQuery(n) {
  return "@media screen and (min-width: " + px(n) + ")";
};

exports.createMediaQuery = createMediaQuery;

var getStyles = function getStyles(_ref) {
  var props = _ref.props,
      style = _ref.style,
      value = _ref.value;

  if (!isObject(value)) {
    return style(value);
  } // how to hoist this up??


  var breakpoints = get(props.theme, 'breakpoints') || defaultBreakpoints;

  if (isArray(value)) {
    var _styles = style(value[0]) || {};

    for (var i = 1; i < value.length; i++) {
      var rule = style(value[i]);

      if (rule) {
        var media = createMediaQuery(breakpoints[i - 1]);
        _styles[media] = rule;
      }
    }

    return _styles;
  }

  var styles = {};

  for (var breakpoint in value) {
    var _minWidth = breakpoints[breakpoint];

    if (!_minWidth) {
      Object.assign(styles, style(value[breakpoint]));
    } else {
      var _rule = style(value[breakpoint]);

      var _media = createMediaQuery(_minWidth);

      styles[_media] = _rule;
    }
  }

  return styles;
};

var style = function style(_ref2) {
  var _fn$propTypes;

  var prop = _ref2.prop,
      cssProperty = _ref2.cssProperty,
      key = _ref2.key,
      getter = _ref2.getter,
      transformValue = _ref2.transformValue,
      _ref2$scale = _ref2.scale,
      defaultScale = _ref2$scale === void 0 ? {} : _ref2$scale;
  var css = cssProperty || prop;
  var transform = transformValue || getter || noop;

  var fn = function fn(props) {
    var value = props[prop];
    if (!is(value)) return null;
    var scale = get(props.theme, key) || defaultScale;

    var style = function style(n) {
      var _ref3;

      return is(n) ? (_ref3 = {}, _ref3[css] = transform(get(scale, n) || n), _ref3) : null;
    };

    return getStyles({
      props: props,
      style: style,
      value: value
    });
  };

  fn.propTypes = (_fn$propTypes = {}, _fn$propTypes[prop] = cloneFunc(propTypes.responsive), _fn$propTypes);
  fn.propTypes[prop].meta = {
    prop: prop,
    themeKey: key,
    styleType: 'responsive'
  };
  return fn;
};

exports.style = style;

var getWidth = function getWidth(n) {
  return !num(n) || n > 1 ? px(n) : n * 100 + '%';
}; // variant


exports.getWidth = getWidth;

var variant = function variant(_ref4) {
  var _fn$propTypes2;

  var key = _ref4.key,
      _ref4$prop = _ref4.prop,
      prop = _ref4$prop === void 0 ? 'variant' : _ref4$prop;

  var fn = function fn(props) {
    return get(props.theme, key, props[prop]) || null;
  };

  fn.propTypes = (_fn$propTypes2 = {}, _fn$propTypes2[prop] = propTypes.numberOrString, _fn$propTypes2);
  return fn;
};

exports.variant = variant;
var util = {
  propTypes: propTypes,
  defaultBreakpoints: defaultBreakpoints,
  is: is,
  num: num,
  px: px,
  get: get,
  themeGet: themeGet,
  cloneFunc: cloneFunc,
  merge: merge,
  compose: compose,
  createMediaQuery: createMediaQuery,
  style: style // space

};
exports.util = util;

var isNegative = function isNegative(n) {
  return n < 0;
};

var REG = /^[mp][trblxy]?$/;
var properties = {
  m: 'margin',
  p: 'padding'
};
var directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};

var getProperties = function getProperties(key) {
  var _key$split = key.split(''),
      a = _key$split[0],
      b = _key$split[1];

  var property = properties[a];
  var direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(function (dir) {
    return property + dir;
  }) : [property + direction];
};

var getValue = function getValue(scale) {
  return function (n) {
    if (!num(n)) {
      return px(get(scale, n) || n);
    }

    var abs = Math.abs(n);
    var neg = isNegative(n);
    var value = scale[abs] || abs;

    if (!num(value)) {
      return neg ? '-' + value : value;
    }

    return px(value * (neg ? -1 : 1));
  };
};

var defaultScale = [0, 4, 8, 16, 32, 64, 128, 256, 512];

var space = function space(props) {
  var keys = Object.keys(props).filter(function (key) {
    return REG.test(key);
  }).sort();
  var scale = get(props.theme, 'space') || defaultScale;
  var getStyle = getValue(scale);
  return keys.map(function (key) {
    var value = props[key];
    var properties = getProperties(key);

    var style = function style(n) {
      return is(n) ? properties.reduce(function (a, prop) {
        var _extends2;

        return (0, _extends3.default)({}, a, (_extends2 = {}, _extends2[prop] = getStyle(n), _extends2));
      }, {}) : null;
    };

    return getStyles({
      props: props,
      style: style,
      value: value
    });
  }).reduce(merge, {});
};

exports.space = space;
space.propTypes = {
  m: cloneFunc(propTypes.responsive),
  mt: cloneFunc(propTypes.responsive),
  mr: cloneFunc(propTypes.responsive),
  mb: cloneFunc(propTypes.responsive),
  ml: cloneFunc(propTypes.responsive),
  mx: cloneFunc(propTypes.responsive),
  my: cloneFunc(propTypes.responsive),
  p: cloneFunc(propTypes.responsive),
  pt: cloneFunc(propTypes.responsive),
  pr: cloneFunc(propTypes.responsive),
  pb: cloneFunc(propTypes.responsive),
  pl: cloneFunc(propTypes.responsive),
  px: cloneFunc(propTypes.responsive),
  py: cloneFunc(propTypes.responsive)
};

var meta = function meta(prop) {
  return {
    prop: prop,
    themeKey: 'space',
    styleType: 'responsive'
  };
};

Object.keys(space.propTypes).forEach(function (prop) {
  space.propTypes[prop].meta = meta(prop);
}); // styles

var width = style({
  prop: 'width',
  transformValue: getWidth
});
exports.width = width;
var fontSize = style({
  prop: 'fontSize',
  key: 'fontSizes',
  transformValue: px,
  scale: [12, 14, 16, 20, 24, 32, 48, 64, 72]
});
exports.fontSize = fontSize;
var textColor = style({
  prop: 'color',
  key: 'colors'
});
exports.textColor = textColor;
var bgColor = style({
  prop: 'bg',
  cssProperty: 'backgroundColor',
  key: 'colors'
});
exports.bgColor = bgColor;
var color = compose(textColor, bgColor); // typography

exports.color = color;
var fontFamily = style({
  prop: 'fontFamily',
  key: 'fonts'
});
exports.fontFamily = fontFamily;
var textAlign = style({
  prop: 'textAlign'
});
exports.textAlign = textAlign;
var lineHeight = style({
  prop: 'lineHeight',
  key: 'lineHeights'
});
exports.lineHeight = lineHeight;
var fontWeight = style({
  prop: 'fontWeight',
  key: 'fontWeights'
});
exports.fontWeight = fontWeight;
var fontStyle = style({
  prop: 'fontStyle'
});
exports.fontStyle = fontStyle;
var letterSpacing = style({
  prop: 'letterSpacing',
  key: 'letterSpacings',
  transformValue: px
}); // layout

exports.letterSpacing = letterSpacing;
var display = style({
  prop: 'display'
});
exports.display = display;
var maxWidth = style({
  prop: 'maxWidth',
  key: 'maxWidths',
  transformValue: px
});
exports.maxWidth = maxWidth;
var minWidth = style({
  prop: 'minWidth',
  key: 'minWidths',
  transformValue: px
});
exports.minWidth = minWidth;
var height = style({
  prop: 'height',
  key: 'heights',
  transformValue: px
});
exports.height = height;
var maxHeight = style({
  prop: 'maxHeight',
  key: 'maxHeights',
  transformValue: px
});
exports.maxHeight = maxHeight;
var minHeight = style({
  prop: 'minHeight',
  key: 'minHeights',
  transformValue: px
});
exports.minHeight = minHeight;
var sizeWidth = style({
  prop: 'size',
  cssProperty: 'width',
  transformValue: px
});
exports.sizeWidth = sizeWidth;
var sizeHeight = style({
  prop: 'size',
  cssProperty: 'height',
  transformValue: px
});
exports.sizeHeight = sizeHeight;
var size = compose(sizeHeight, sizeWidth);
exports.size = size;
var ratioPadding = style({
  prop: 'ratio',
  cssProperty: 'paddingBottom',
  transformValue: function transformValue(n) {
    return n * 100 + '%';
  }
});
exports.ratioPadding = ratioPadding;

var ratio = function ratio(props) {
  return props.ratio ? (0, _extends3.default)({
    height: 0
  }, ratioPadding(props)) : null;
};

exports.ratio = ratio;
ratio.propTypes = (0, _extends3.default)({}, ratioPadding.propTypes);
var verticalAlign = style({
  prop: 'verticalAlign'
}); // flexbox

exports.verticalAlign = verticalAlign;
var alignItems = style({
  prop: 'alignItems'
});
exports.alignItems = alignItems;
var alignContent = style({
  prop: 'alignContent'
});
exports.alignContent = alignContent;
var justifyItems = style({
  prop: 'justifyItems'
});
exports.justifyItems = justifyItems;
var justifyContent = style({
  prop: 'justifyContent'
});
exports.justifyContent = justifyContent;
var flexWrap = style({
  prop: 'flexWrap'
});
exports.flexWrap = flexWrap;
var flexBasis = style({
  prop: 'flexBasis',
  transformValue: getWidth
});
exports.flexBasis = flexBasis;
var flexDirection = style({
  prop: 'flexDirection'
});
exports.flexDirection = flexDirection;
var flex = style({
  prop: 'flex'
});
exports.flex = flex;
var justifySelf = style({
  prop: 'justifySelf'
});
exports.justifySelf = justifySelf;
var alignSelf = style({
  prop: 'alignSelf'
});
exports.alignSelf = alignSelf;
var order = style({
  prop: 'order'
}); // grid

exports.order = order;
var gridGap = style({
  prop: 'gridGap',
  transformValue: px,
  key: 'space'
});
exports.gridGap = gridGap;
var gridColumnGap = style({
  prop: 'gridColumnGap',
  transformValue: px,
  key: 'space'
});
exports.gridColumnGap = gridColumnGap;
var gridRowGap = style({
  prop: 'gridRowGap',
  transformValue: px,
  key: 'space'
});
exports.gridRowGap = gridRowGap;
var gridColumn = style({
  prop: 'gridColumn'
});
exports.gridColumn = gridColumn;
var gridRow = style({
  prop: 'gridRow'
});
exports.gridRow = gridRow;
var gridAutoFlow = style({
  prop: 'gridAutoFlow'
});
exports.gridAutoFlow = gridAutoFlow;
var gridAutoColumns = style({
  prop: 'gridAutoColumns'
});
exports.gridAutoColumns = gridAutoColumns;
var gridAutoRows = style({
  prop: 'gridAutoRows'
});
exports.gridAutoRows = gridAutoRows;
var gridTemplateColumns = style({
  prop: 'gridTemplateColumns'
});
exports.gridTemplateColumns = gridTemplateColumns;
var gridTemplateRows = style({
  prop: 'gridTemplateRows'
});
exports.gridTemplateRows = gridTemplateRows;
var gridTemplateAreas = style({
  prop: 'gridTemplateAreas'
});
exports.gridTemplateAreas = gridTemplateAreas;
var gridArea = style({
  prop: 'gridArea'
}); // borders

exports.gridArea = gridArea;

var getBorder = function getBorder(n) {
  return num(n) && n > 0 ? n + 'px solid' : n;
};

var border = style({
  prop: 'border',
  key: 'borders',
  transformValue: getBorder
});
exports.border = border;
var borderTop = style({
  prop: 'borderTop',
  key: 'borders',
  transformValue: getBorder
});
exports.borderTop = borderTop;
var borderRight = style({
  prop: 'borderRight',
  key: 'borders',
  transformValue: getBorder
});
exports.borderRight = borderRight;
var borderBottom = style({
  prop: 'borderBottom',
  key: 'borders',
  transformValue: getBorder
});
exports.borderBottom = borderBottom;
var borderLeft = style({
  prop: 'borderLeft',
  key: 'borders',
  transformValue: getBorder
});
exports.borderLeft = borderLeft;
var borders = compose(border, borderTop, borderRight, borderBottom, borderLeft);
exports.borders = borders;
var borderColor = style({
  prop: 'borderColor',
  key: 'colors'
});
exports.borderColor = borderColor;
var borderRadius = style({
  prop: 'borderRadius',
  key: 'radii',
  transformValue: px
});
exports.borderRadius = borderRadius;
var boxShadow = style({
  prop: 'boxShadow',
  key: 'shadows'
});
exports.boxShadow = boxShadow;
var opacity = style({
  prop: 'opacity'
});
exports.opacity = opacity;
var overflow = style({
  prop: 'overflow'
}); // backgrounds

exports.overflow = overflow;
var background = style({
  prop: 'background'
});
exports.background = background;
var backgroundImage = style({
  prop: 'backgroundImage'
});
exports.backgroundImage = backgroundImage;
var backgroundSize = style({
  prop: 'backgroundSize'
});
exports.backgroundSize = backgroundSize;
var backgroundPosition = style({
  prop: 'backgroundPosition'
});
exports.backgroundPosition = backgroundPosition;
var backgroundRepeat = style({
  prop: 'backgroundRepeat'
}); // position

exports.backgroundRepeat = backgroundRepeat;
var position = style({
  prop: 'position'
});
exports.position = position;
var zIndex = style({
  prop: 'zIndex'
});
exports.zIndex = zIndex;
var top = style({
  prop: 'top',
  transformValue: px
});
exports.top = top;
var right = style({
  prop: 'right',
  transformValue: px
});
exports.right = right;
var bottom = style({
  prop: 'bottom',
  transformValue: px
});
exports.bottom = bottom;
var left = style({
  prop: 'left',
  transformValue: px
});
exports.left = left;
var textStyle = variant({
  prop: 'textStyle',
  key: 'textStyles'
});
exports.textStyle = textStyle;
var colorStyle = variant({
  prop: 'colors',
  key: 'colorStyles'
});
exports.colorStyle = colorStyle;
var buttonStyle = variant({
  key: 'buttons'
});
exports.buttonStyle = buttonStyle;
var styles = {
  space: space,
  width: width,
  fontSize: fontSize,
  textColor: textColor,
  bgColor: bgColor,
  color: color,
  fontFamily: fontFamily,
  textAlign: textAlign,
  lineHeight: lineHeight,
  fontWeight: fontWeight,
  fontStyle: fontStyle,
  letterSpacing: letterSpacing,
  display: display,
  maxWidth: maxWidth,
  minWidth: minWidth,
  height: height,
  maxHeight: maxHeight,
  minHeight: minHeight,
  sizeWidth: sizeWidth,
  sizeHeight: sizeHeight,
  size: size,
  ratioPadding: ratioPadding,
  ratio: ratio,
  verticalAlign: verticalAlign,
  alignItems: alignItems,
  alignContent: alignContent,
  justifyItems: justifyItems,
  justifyContent: justifyContent,
  flexWrap: flexWrap,
  flexBasis: flexBasis,
  flexDirection: flexDirection,
  flex: flex,
  justifySelf: justifySelf,
  alignSelf: alignSelf,
  order: order,
  gridGap: gridGap,
  gridColumnGap: gridColumnGap,
  gridRowGap: gridRowGap,
  gridColumn: gridColumn,
  gridRow: gridRow,
  gridAutoFlow: gridAutoFlow,
  gridAutoColumns: gridAutoColumns,
  gridAutoRows: gridAutoRows,
  gridTemplateColumns: gridTemplateColumns,
  gridTemplateRows: gridTemplateRows,
  gridTemplateAreas: gridTemplateAreas,
  gridArea: gridArea,
  // borders
  border: border,
  borderTop: borderTop,
  borderRight: borderRight,
  borderBottom: borderBottom,
  borderLeft: borderLeft,
  borders: borders,
  borderColor: borderColor,
  borderRadius: borderRadius,
  boxShadow: boxShadow,
  opacity: opacity,
  overflow: overflow,
  background: background,
  backgroundImage: backgroundImage,
  backgroundPosition: backgroundPosition,
  backgroundRepeat: backgroundRepeat,
  backgroundSize: backgroundSize,
  position: position,
  zIndex: zIndex,
  top: top,
  right: right,
  bottom: bottom,
  left: left,
  textStyle: textStyle,
  colorStyle: colorStyle,
  buttonStyle: buttonStyle // mixed

};
exports.styles = styles;

var omit = function omit(obj, blacklist) {
  var next = {};

  for (var key in obj) {
    if (blacklist.indexOf(key) > -1) continue;
    next[key] = obj[key];
  }

  return next;
};

var funcs = Object.keys(styles).map(function (key) {
  return styles[key];
}).filter(function (fn) {
  return typeof fn === 'function';
});
var blacklist = funcs.reduce(function (a, fn) {
  return a.concat(Object.keys(fn.propTypes || {}));
}, ['theme']);

var mixed = function mixed(props) {
  return funcs.map(function (fn) {
    return fn(props);
  }).reduce(merge, omit(props, blacklist));
};

exports.mixed = mixed;


/***/ }),

/***/ "usN7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("qNsG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("beRW");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tvz8");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4teO");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const BoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()('div').withConfig({
  displayName: "Box__BoxWrapper",
  componentId: "m50ttq-0"
})(_base__WEBPACK_IMPORTED_MODULE_4__[/* base */ "a"], Object(_base__WEBPACK_IMPORTED_MODULE_4__[/* themed */ "b"])('Box'), props => props.flexBox && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])({
  display: 'flex'
}, styled_system__WEBPACK_IMPORTED_MODULE_3__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_3__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_3__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_3__["justifyContent"], Object(_base__WEBPACK_IMPORTED_MODULE_4__[/* themed */ "b"])('FlexBox')));

const Box = (_ref) => {
  let {
    children
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref, ["children"]);

  return __jsx(BoxWrapper, props, children);
};

/* harmony default export */ __webpack_exports__["a"] = (Box);
Box.defaultProps = {
  as: 'div'
};

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });