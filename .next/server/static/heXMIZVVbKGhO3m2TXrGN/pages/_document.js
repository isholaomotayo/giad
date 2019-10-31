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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+oT+":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("eVuF");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5w0S");


/***/ }),

/***/ "2+G7":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

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

/***/ "5w0S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomDocument; });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("8cZr");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_src_assets_image_favicon_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("YRFv");
/* harmony import */ var _common_src_assets_image_favicon_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_favicon_png__WEBPACK_IMPORTED_MODULE_10__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }




class CustomDocument extends next_document__WEBPACK_IMPORTED_MODULE_8___default.a {
  static async getInitialProps(ctx) {
    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_9__["ServerStyleSheet"]();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(__jsx(App, props))
      });

      const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_8___default.a.getInitialProps(ctx);
      return _objectSpread({}, initialProps, {
        styles: __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, initialProps.styles, sheet.getStyleElement())
      });
    } finally {
      sheet.seal();
    }
  }

  render() {
    return __jsx("html", {
      lang: "en"
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_8__["Head"], null, __jsx("link", {
      rel: "shortcut icon",
      type: "image/x-icon",
      href: _common_src_assets_image_favicon_png__WEBPACK_IMPORTED_MODULE_10___default.a
    })), __jsx("body", null, __jsx(next_document__WEBPACK_IMPORTED_MODULE_8__["Main"], null), __jsx(next_document__WEBPACK_IMPORTED_MODULE_8__["NextScript"], null)));
  }

}

/***/ }),

/***/ "8cZr":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("VDXt")


/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "AXZJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}

/***/ }),

/***/ "Cg2A":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("y6vh");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

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

/***/ "PRL6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__("w7wo");
const internalPrefixes = [/^\/_next\//, /^\/static\//];
function isInternalUrl(url) {
    for (const prefix of internalPrefixes) {
        if (prefix.test(url)) {
            return true;
        }
    }
    return false;
}
exports.isInternalUrl = isInternalUrl;
function isBlockedPage(pathname) {
    return constants_1.BLOCKED_PAGES.indexOf(pathname) !== -1;
}
exports.isBlockedPage = isBlockedPage;
function cleanAmpPath(pathname) {
    if (pathname.match(/\?amp=(y|yes|true|1)/)) {
        pathname = pathname.replace(/\?amp=(y|yes|true|1)/, '?');
    }
    if (pathname.match(/&amp=(y|yes|true|1)/)) {
        pathname = pathname.replace(/\?amp=(y|yes|true|1)/, '');
    }
    pathname = pathname.replace(/\?$/, '');
    return pathname;
}
exports.cleanAmpPath = cleanAmpPath;


/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "VDXt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.middleware = middleware;
exports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _isArray = _interopRequireDefault(__webpack_require__("p0XB"));

var _keys = _interopRequireDefault(__webpack_require__("pLtp"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _now = _interopRequireDefault(__webpack_require__("Cg2A"));

var _set = _interopRequireDefault(__webpack_require__("ttDY"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _utils = __webpack_require__("PRL6");

var _utils2 = __webpack_require__("g/15");

exports.DocumentContext = _utils2.DocumentContext;
exports.DocumentInitialProps = _utils2.DocumentInitialProps;
exports.DocumentProps = _utils2.DocumentProps;

var _htmlescape = __webpack_require__("AXZJ");

var _server = _interopRequireDefault(__webpack_require__("2+G7"));

var _constants = __webpack_require__("w7wo");

var _documentContext = __webpack_require__("nRxi");
/* eslint-disable */


function middleware(_x) {
  return _middleware.apply(this, arguments);
}

function _middleware() {
  _middleware = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      req,
      res
    } = _ref;
  });
  return _middleware.apply(this, arguments);
}

function dedupe(bundles) {
  var files = new _set.default();
  var kept = [];

  for (var bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static getInitialProps(_ref2) {
    return (0, _asyncToGenerator2.default)(function* () {
      var {
        renderPage
      } = _ref2;
      var {
        html,
        head,
        dataOnly
      } = yield renderPage();
      var styles = (0, _server.default)();
      return {
        html,
        head,
        styles,
        dataOnly
      };
    })();
  }

  static renderDocument(Document, props) {
    return _react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: {
        _documentProps: props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/zeit/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString:  false ? undefined : ''
      }
    }, _react.default.createElement(Document, props));
  }

  render() {
    return _react.default.createElement(Html, null, _react.default.createElement(Head, null), _react.default.createElement("body", null, _react.default.createElement(Main, null), _react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;

class Html extends _react.Component {
  constructor() {
    super(...arguments);
    this.context = void 0;
  }

  render() {
    var {
      inAmpMode
    } = this.context._documentProps;
    return _react.default.createElement("html", (0, _extends2.default)({}, this.props, {
      amp: inAmpMode ? '' : undefined,
      "data-ampdevmode": inAmpMode && "production" !== 'production' ? '' : undefined
    }));
  }

}

exports.Html = Html;
Html.contextType = _documentContext.DocumentContext;
Html.propTypes = {
  children: _propTypes.default.node.isRequired
};

class Head extends _react.Component {
  constructor() {
    super(...arguments);
    this.context = void 0;
  }

  getCssLinks() {
    var {
      assetPrefix,
      files
    } = this.context._documentProps;
    var cssFiles = files && files.length ? files.filter(f => /\.css$/.test(f)) : [];
    var cssLinkElements = [];
    cssFiles.forEach(file => {
      cssLinkElements.push(_react.default.createElement("link", {
        key: "${file}-preload",
        nonce: this.props.nonce,
        rel: "preload",
        href: assetPrefix + "/_next/" + encodeURI(file),
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), _react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: assetPrefix + "/_next/" + encodeURI(file),
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    var {
      dynamicImports,
      assetPrefix
    } = this.context._documentProps;
    var {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return _react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: assetPrefix + "/_next/" + encodeURI(bundle.file) + _devOnlyInvalidateCacheQueryString,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks() {
    var {
      assetPrefix,
      files
    } = this.context._documentProps;
    var {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    var preloadFiles = files && files.length ? files.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      //
      // Also filter out _buildManifest because it should not be
      // preloaded for performance reasons.
      return file.endsWith(getOptionalModernScriptVariant('.js')) && !file.includes('_buildManifest');
    }) : [];
    return preloadFiles.length === 0 ? null : preloadFiles.map(file => {
      return _react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "preload",
        href: assetPrefix + "/_next/" + encodeURI(file) + _devOnlyInvalidateCacheQueryString,
        as: "script",
        crossOrigin: this.props.crossOrigin || undefined
      });
    });
  }

  render() {
    var {
      styles,
      ampPath,
      inAmpMode,
      assetPrefix,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath
    } = this.context._documentProps;
    var {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    var {
      page,
      buildId
    } = __NEXT_DATA__;
    var {
      head
    } = this.context._documentProps;
    var children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (false) {}

    var hasAmphtmlRel = false;
    var hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      var {
        type,
        props
      } = child;

      if (inAmpMode) {
        var badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            (0, _keys.default)(props).forEach(prop => {
              badProp += " " + prop + "=\"" + props[prop] + "\"";
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn("Found conflicting amp tag \"" + child.type + "\" with conflicting prop " + badProp + " in " + __NEXT_DATA__.page + ". https://err.sh/next.js/conflicting-amp-tag");
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    var curStyles = (0, _isArray.default)(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    (0, _isArray.default)(styles.props.children)) {
      var hasStyles = el => el && el.props && el.props.dangerouslySetInnerHTML && el.props.dangerouslySetInnerHTML.__html; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.map(child => {
        if ((0, _isArray.default)(child)) {
          child.map(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    return _react.default.createElement("head", this.props, this.context._documentProps.isDevelopment && this.context._documentProps.hasCssMode && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("style", {
      "data-next-hide-fouc": true,
      dangerouslySetInnerHTML: {
        __html: "body{display:none}"
      }
    }), _react.default.createElement("noscript", {
      "data-next-hide-fouc": true
    }, _react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: "body{display:block}"
      }
    }))), children, head, _react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && _react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils.cleanAmpPath)(dangerousAsPath)
    }), _react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && _react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), _react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: "body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}"
      }
    }), _react.default.createElement("noscript", null, _react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: "body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}"
      }
    })), _react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && _react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && _react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), page !== '/_error' && _react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI("/_next/static/" + buildId + "/pages" + getPageFile(page))) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), _react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI("/_next/static/" + buildId + "/pages/_app.js")) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), this.getPreloadDynamicChunks(), this.getPreloadMainLinks(), this.context._documentProps.isDevelopment && this.context._documentProps.hasCssMode && // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), this.getCssLinks(), styles || null));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

class Main extends _react.Component {
  constructor() {
    super(...arguments);
    this.context = void 0;
  }

  render() {
    var {
      inAmpMode,
      html
    } = this.context._documentProps;
    if (inAmpMode) return '__NEXT_AMP_RENDER_TARGET__';
    return _react.default.createElement("div", {
      id: "__next",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }

}

exports.Main = Main;
Main.contextType = _documentContext.DocumentContext;

class NextScript extends _react.Component {
  constructor() {
    super(...arguments);
    this.context = void 0;
  }

  getDynamicChunks() {
    var {
      dynamicImports,
      assetPrefix,
      files
    } = this.context._documentProps;
    var {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      var modernProps = {};

      if (false) {}

      if (!/\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;
      return _react.default.createElement("script", (0, _extends2.default)({
        defer: false,
        async: !false,
        key: bundle.file,
        src: assetPrefix + "/_next/" + encodeURI(bundle.file) + _devOnlyInvalidateCacheQueryString,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts() {
    var {
      assetPrefix,
      files
    } = this.context._documentProps;

    if (!files || files.length === 0) {
      return null;
    }

    var {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return files.map(file => {
      // Only render .js files here
      if (!/\.js$/.test(file)) {
        return null;
      }

      var modernProps = {};

      if (false) {}

      return _react.default.createElement("script", (0, _extends2.default)({
        key: file,
        src: assetPrefix + "/_next/" + encodeURI(file) + _devOnlyInvalidateCacheQueryString,
        nonce: this.props.nonce,
        defer: false,
        async: !false,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  static getInlineScriptSource(documentProps) {
    var {
      __NEXT_DATA__
    } = documentProps;

    try {
      var data = (0, _stringify.default)(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error("Circular structure in \"getInitialProps\" result of page \"" + __NEXT_DATA__.page + "\". https://err.sh/zeit/next.js/circular-structure");
      }

      throw err;
    }
  }

  render() {
    var {
      staticMarkup,
      assetPrefix,
      inAmpMode,
      devFiles,
      __NEXT_DATA__
    } = this.context._documentProps;
    var deferScripts = false;
    var {
      _devOnlyInvalidateCacheQueryString
    } = this.context;

    if (inAmpMode) {
      if (true) {
        return null;
      }

      var _devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
      return _react.default.createElement(_react.default.Fragment, null, staticMarkup ? null : _react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        },
        "data-ampdevmode": true
      }), _devFiles ? _devFiles.map(file => _react.default.createElement("script", {
        key: file,
        src: assetPrefix + "/_next/" + file + _devOnlyInvalidateCacheQueryString,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })) : null);
    }

    var {
      page,
      buildId
    } = __NEXT_DATA__;

    if (false) {}

    var pageScript = [_react.default.createElement("script", (0, _extends2.default)({
      defer: deferScripts,
      async: !deferScripts,
      "data-next-page": page,
      key: page,
      src: assetPrefix + encodeURI("/_next/static/" + buildId + "/pages" + getPageFile(page)) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && false];
    var appScript = [_react.default.createElement("script", (0, _extends2.default)({
      defer: deferScripts,
      async: !deferScripts,
      "data-next-page": "/_app",
      src: assetPrefix + ("/_next/static/" + buildId + "/pages/_app.js") + _devOnlyInvalidateCacheQueryString,
      key: "_app",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && false];
    return _react.default.createElement(_react.default.Fragment, null, devFiles ? devFiles.map(file => !file.match(/\.js\.map/) && _react.default.createElement("script", {
      key: file,
      src: assetPrefix + "/_next/" + encodeURI(file) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, staticMarkup ? null : _react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context._documentProps)
      }
    }),  false ? undefined : null, page !== '/_error' && pageScript, appScript, staticMarkup ? null : this.getDynamicChunks(), staticMarkup ? null : this.getScripts());
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath ? ampPath : "" + asPath + (asPath.includes('?') ? '&' : '?') + "amp=1";
}

function getPageFile(page, buildId) {
  if (page === '/') {
    return buildId ? "/index." + buildId + ".js" : '/index.js';
  }

  return buildId ? page + "." + buildId + ".js" : page + ".js";
}

/***/ }),

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "YRFv":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

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

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "nRxi":
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

exports.DocumentContext = React.createContext(null);

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "ttDY":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("zQQD");

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

/***/ "w7wo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.PHASE_EXPORT = 'phase-export';
exports.PHASE_PRODUCTION_BUILD = 'phase-production-build';
exports.PHASE_PRODUCTION_SERVER = 'phase-production-server';
exports.PHASE_DEVELOPMENT_SERVER = 'phase-development-server';
exports.PAGES_MANIFEST = 'pages-manifest.json';
exports.BUILD_MANIFEST = 'build-manifest.json';
exports.PRERENDER_MANIFEST = 'prerender-manifest.json';
exports.REACT_LOADABLE_MANIFEST = 'react-loadable-manifest.json';
exports.SERVER_DIRECTORY = 'server';
exports.SERVERLESS_DIRECTORY = 'serverless';
exports.CONFIG_FILE = 'next.config.js';
exports.BUILD_ID_FILE = 'BUILD_ID';
exports.BLOCKED_PAGES = ['/_document', '/_app'];
exports.CLIENT_PUBLIC_FILES_PATH = 'public';
exports.CLIENT_STATIC_FILES_PATH = 'static';
exports.CLIENT_STATIC_FILES_RUNTIME = 'runtime';
exports.CLIENT_STATIC_FILES_RUNTIME_PATH = `${exports.CLIENT_STATIC_FILES_PATH}/${exports.CLIENT_STATIC_FILES_RUNTIME}`; // static/runtime/main.js

exports.CLIENT_STATIC_FILES_RUNTIME_MAIN = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/main.js`; // static/runtime/amp.js

exports.CLIENT_STATIC_FILES_RUNTIME_AMP = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/amp.js`; // static/runtime/webpack.js

exports.CLIENT_STATIC_FILES_RUNTIME_WEBPACK = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/webpack.js`; // matches static/<buildid>/pages/<page>.js

exports.IS_BUNDLED_PAGE_REGEX = /^static[/\\][^/\\]+[/\\]pages.*\.js$/; // matches static/<buildid>/pages/:page*.js

exports.ROUTE_NAME_REGEX = /^static[/\\][^/\\]+[/\\]pages[/\\](.*)\.js$/;
exports.SERVERLESS_ROUTE_NAME_REGEX = /^pages[/\\](.*)\.js$/;

/***/ }),

/***/ "y6vh":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "zQQD":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/set");

/***/ })

/******/ });