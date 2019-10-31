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

/***/ "+Q8Q":
/***/ (function(module, exports) {

module.exports = require("react-scrollspy");

/***/ }),

/***/ "+b+P":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("zuNl");
var toObject = __webpack_require__("LEjr");
var IE_PROTO = __webpack_require__("3wzx")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

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

/***/ "/Rz5":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI1Ni4wMDEiPjxnIGRhdGEtbmFtZT0iVmVjdG9yIFNtYXJ0IE9iamVjdCI+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDcyIiBkPSJNMTcuNTI2IDI5LjY3MmwtMy44OC00Ljk1OGEzLjE2NyAzLjE2NyAwIDAwLTEuODA3LTEuMTU2bC0uMjM3LTMuNTM4IDUuNjU5LTEzLjQzNWEzLjkgMy45IDAgMDAtMS4zLTQuNjc5IDMuODQ1IDMuODQ1IDAgMDAtMS4zMTQgMS42NzFMOS4zIDE2LjYwNWEzMy41MTYgMzMuNTE2IDAgMDAtMi41MDUgMTIuNzJ2MTYuODg3aDEzLjU5NHYtOC4yMDdhMTMuNTIxIDEzLjUyMSAwIDAwLTIuODYzLTguMzMzeiIgZmlsbD0iI2ZjYzY5ZCIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCA3MyIgZD0iTTUwLjcgMTYuNjA1TDQ1LjM1NiAzLjU3NmEzLjg0NSAzLjg0NSAwIDAwLTEuMzE0LTEuNjcxIDMuOTA1IDMuOTA1IDAgMDAtMS4zIDQuNjc5bDUuNjU5IDEzLjQzNS0uMjM3IDMuNTM4YTMuMTY3IDMuMTY3IDAgMDAtMS44MDcgMS4xNTZsLTMuODggNC45NThhMTMuNTIxIDEzLjUyMSAwIDAwLTIuODY1IDguMzMxdjguMjFINTMuMlYyOS4zMjVhMzMuNTE2IDMzLjUxNiAwIDAwLTIuNS0xMi43MnoiIGZpbGw9IiNmY2M2OWQiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggNzQiIGQ9Ik0zOC40MzcgNTQuODE0di04LjZINTMuMnY4LjYiIGZpbGw9IiM3MmQ4ZmYiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggNzUiIGQ9Ik0yMS41NjIgNTQuODE0di04LjZINy4zMjR2OC42IiBmaWxsPSIjNzJkOGZmIi8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDc2IiBkPSJNMzQuNjQ4IDExLjk4NEE2LjEwOCA2LjEwOCAwIDAwMzAgMTQuMjA1YTYuNDc4IDYuNDc4IDAgMDAtMi4wNTUtMS42MSA3Ljk2NSA3Ljk2NSAwIDAwLTIuODY3IDYuMjI1YzAgMy42MjYgNC40NSA4LjEwNiA3LjkyOCAxMS4wNTMgMy4yNy0yLjY3NiA4LjA0LTcuMTk1IDguMDQtMTAuOCAwLTMuOTE1LTIuODY0LTcuMDg5LTYuMzk4LTcuMDg5eiIgZmlsbD0iI2ZmNWQ1ZCIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCA3NyIgZD0iTTU4LjgyOCA0NS4wMjZINDAuNzgxdi03LjAyMWExMi4zNzEgMTIuMzcxIDAgMDEyLjYxMS03LjU5M2wzLjg4LTQuOTU4YTIuMDM0IDIuMDM0IDAgMDEzLjUuNSAyLjEgMi4xIDAgMDEtLjE4OSAxLjkzbC00LjE1NiA2LjMzNWExLjIgMS4yIDAgMDAuMzI4IDEuNjQ0IDEuMTYzIDEuMTYzIDAgMDAxLjYyNC0uMzMybDQuMTU1LTYuMzM1YTQuNDg3IDQuNDg3IDAgMDAuNDA5LTQuMTM4IDQuMzY1IDQuMzY1IDAgMDAtNy41MDctMS4wODFsLTMuODggNC45NTlhMTQuNzcxIDE0Ljc3MSAwIDAwLTMuMTE4IDkuMDY3djcuMDIzYTEuMTc4IDEuMTc4IDAgMDAtMS4xNzEgMS4xODd2OC42YTEuMTcyIDEuMTcyIDAgMTAyLjM0MyAwdi03LjQxNWgxOC4wNDd2Ny40MTVhMS4xNzIgMS4xNzIgMCAxMDIuMzQ0IDB2LTguNmExLjE3OSAxLjE3OSAwIDAwLTEuMTczLTEuMTg3eiIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCA3OCIgZD0iTTU3LjY0NyAzOS45MDVhMS4xNjkgMS4xNjkgMCAwMC0uODI4LjM0NyAxLjE5NSAxLjE5NSAwIDAwMCAxLjY3OCAxLjE2MSAxLjE2MSAwIDAwMS42NTYgMCAxLjE5NSAxLjE5NSAwIDAwMC0xLjY3OCAxLjE3MiAxLjE3MiAwIDAwLS44MjgtLjM0N3oiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggNzkiIGQ9Ik00Ny4zMiAyMC40ODRhMS4xNjYgMS4xNjYgMCAwMDEuNTM4LjYyNyAxLjE5MyAxLjE5MyAwIDAwLjYxOC0xLjU1N0w0My44MTcgNi4xMTlBMi42OTIgMi42OTIgMCAwMTQ1IDIuNjk0YTIuNiAyLjYgMCAwMTIuMTUtLjE2NiAyLjY0MiAyLjY0MiAwIDAxMS41NjUgMS41bDUuMzQ0IDEzLjAyOWEzMi4xNzEgMzIuMTcxIDAgMDEyLjQxNSAxMi4yNjR2Ni44NmExLjE3MiAxLjE3MiAwIDEwMi4zNDQgMHYtNi44NmEzNC41MzcgMzQuNTM3IDAgMDAtMi42LTEzLjE3NEw1MC44NzQgMy4xMThhNS4wMzcgNS4wMzcgMCAwMC0yLjk0My0yLjgzIDQuOTU2IDQuOTU2IDAgMDAtNC4wNDguMzEzIDUuMDY5IDUuMDY5IDAgMDAtMi4yMjggNi40NDV6Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDgwIiBkPSJNNDUuMDQ0IDUwLjMzNGExLjE2MiAxLjE2MiAwIDAwLTEuNjU2LS4wNzMgMS4yIDEuMiAwIDAwLS4wNzMgMS42NzZsLjAxLjAxYTEuMTYgMS4xNiAwIDAwMS42NTUuMDc0IDEuMiAxLjIgMCAwMC4wNzMtMS42NzZ6Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDgxIiBkPSJNMjEuNTYyIDQ1LjAyNnYtNy4wMjFhMTQuNzcgMTQuNzcgMCAwMC0zLjExNy05LjA2N2wtMy44OC00Ljk1OWE0LjM2NSA0LjM2NSAwIDAwLTcuNTA3IDEuMDgxIDQuNDkgNC40OSAwIDAwLjQwOCA0LjEzOGw0LjE1NiA2LjMzNWExLjE2MyAxLjE2MyAwIDAwMS42MjQuMzMyIDEuMiAxLjIgMCAwMC4zMjgtMS42NDRsLTQuMTU2LTYuMzM1YTIuMDkyIDIuMDkyIDAgMDEtLjE4OS0xLjkzIDIuMDM0IDIuMDM0IDAgMDEzLjUtLjVsMy44OCA0Ljk1OGExMi4zNzEgMTIuMzcxIDAgMDEyLjYxMSA3LjU5M3Y3LjAyM0gzLjUyNXYtMTUuN0EzMi4xNzQgMzIuMTc0IDAgMDE1Ljk0IDE3LjA2Nmw1LjM0NC0xMy4wMjlhMi42NDIgMi42NDIgMCAwMTEuNTY1LTEuNSAyLjYgMi42IDAgMDEyLjE1LjE2NiAyLjY5MiAyLjY5MiAwIDAxMS4xODQgMy40MjRsLTUuNjU5IDEzLjQzNWExLjE5MyAxLjE5MyAwIDAwLjYxOCAxLjU1NyAxLjE2NyAxLjE2NyAwIDAwMS41MzgtLjYyN2w1LjY1OS0xMy40MzRBNS4wNjggNS4wNjggMCAwMDE2LjExMS42MTQgNC45NTMgNC45NTMgMCAwMDEyLjA2My4zIDUuMDQgNS4wNCAwIDAwOS4xMiAzLjEzTDMuNzc2IDE2LjE1OWEzNC41NCAzNC41NCAwIDAwLTIuNTk0IDEzLjE3NHYxNS43aC0uMDFBMS4xNzkgMS4xNzkgMCAwMDAgNDYuMjEydjguNmExLjE3MiAxLjE3MiAwIDEwMi4zNDQgMHYtNy40MTVoMTguMDQ3djcuNDE1YTEuMTcyIDEuMTcyIDAgMTAyLjM0MyAwdi04LjZhMS4xNzggMS4xNzggMCAwMC0xLjE3Mi0xLjE4NnoiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggODIiIGQ9Ik0xNC45NTYgNTAuMzM0bC0uMDA5LjAxMWExLjIgMS4yIDAgMDAuMDczIDEuNjc2IDEuMTYgMS4xNiAwIDAwMS42NTUtLjA3NGwuMDEtLjAxYTEuMiAxLjIgMCAwMC0uMDczLTEuNjc2IDEuMTYyIDEuMTYyIDAgMDAtMS42NTYuMDczeiIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCA4MyIgZD0iTTQyLjIxOCAxOS4wNzFjMC00LjU2MS0zLjQtOC4yNzMtNy41Ny04LjI3M0E3LjIgNy4yIDAgMDAzMCAxMi41NDJhNy4yIDcuMiAwIDAwLTQuNjQ4LTEuNzQzYy00LjE3NCAwLTcuNTcgMy43MTItNy41NyA4LjI3MyAwIDIuNjE4IDEuOTg1IDUuODA1IDUuOSA5LjQ3MmE1NC4zIDU0LjMgMCAwMDUuNjYgNC42IDEuMTU5IDEuMTU5IDAgMDAxLjMxOCAwIDU0LjMgNTQuMyAwIDAwNS42Ni00LjZjMy45MTMtMy42NjcgNS44OTgtNi44NTUgNS44OTgtOS40NzN6bS03LjQ3MSA3LjcxMUE1My4xMzkgNTMuMTM5IDAgMDEzMCAzMC43MDVhNTMuMzg0IDUzLjM4NCAwIDAxLTQuNzI3LTMuOWMtMy4zMTktMy4xMDktNS4xNDctNS44NTQtNS4xNDctNy43MyAwLTMuMjUzIDIuMzQ0LTUuOSA1LjIyNi01LjlhNC45MTggNC45MTggMCAwMTMuNzYyIDEuODA2IDEuMTYyIDEuMTYyIDAgMDAxLjc3MiAwIDQuOTE3IDQuOTE3IDAgMDEzLjc2Mi0xLjgwNmMyLjg4MiAwIDUuMjI2IDIuNjQ3IDUuMjI2IDUuOSAwIDEuODY4LTEuODIxIDQuNjA2LTUuMTI3IDcuNzA3eiIvPjwvZz48L3N2Zz4="

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

/***/ "0NR3":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("9TH4")('meta');
var isObject = __webpack_require__("32kt");
var has = __webpack_require__("zuNl");
var setDesc = __webpack_require__("GEZW").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("5gtE")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "1kO/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ContentArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DonationForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DonateButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_src_assets_image_charity_map_alt_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("3veN");
/* harmony import */ var _common_src_assets_image_charity_map_alt_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_map_alt_png__WEBPACK_IMPORTED_MODULE_2__);



const SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "donateSectionstyle__SectionWrapper",
  componentId: "sc-1eghrf3-0"
})(["width:100%;padding:130px 0 100px;margin:81px 0;background-color:", ";background-image:url(", ");background-repeat:no-repeat;background-size:contain;background-position:center;@media only screen and (max-width:1440px){margin:70px 0;padding:120px 0 90px;}@media only screen and (min-width:992px) and (max-width:1360px){margin:50px 0;padding:100px 0 70px;.row{> .col{&:first-child{width:53%;}&:last-child{width:47%;}}}}@media only screen and (max-width:991px){margin:40px 0;padding:80px 0 50px;}@media only screen and (max-width:667px){.row{> .col{width:100%;}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.heading', '#060F1E'), _common_src_assets_image_charity_map_alt_png__WEBPACK_IMPORTED_MODULE_2___default.a);
const ContentArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "donateSectionstyle__ContentArea",
  componentId: "sc-1eghrf3-1"
})(["padding-right:99px;@media only screen and (max-width:1440px){padding-right:40px;}@media only screen and (max-width:1360px){padding-right:0;}@media only screen and (max-width:667px){max-width:465px;}> p{color:", ";font-size:18px;@media only screen and (max-width:1440px){font-size:16px;}@media only screen and (max-width:1360px){font-size:15px;}@media only screen and (max-width:991px){line-height:30px;}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'));
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "donateSectionstyle__Heading",
  componentId: "sc-1eghrf3-2"
})(["font-size:40px;line-height:70px;font-weight:300;margin:0 0 20px;color:", ";@media only screen and (max-width:1440px){font-size:36px;line-height:54px;margin:0 0 27px;}@media only screen and (max-width:1360px){font-size:34px;line-height:52px;margin-bottom:25px;}@media only screen and (max-width:991px){font-size:30px;line-height:46px;margin-bottom:20px;}@media only screen and (max-width:767px){font-size:28px;line-height:40px;}span{color:", ";}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.primary', '#0071bc'));
const ButtonGroup = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "donateSectionstyle__ButtonGroup",
  componentId: "sc-1eghrf3-3"
})(["display:flex;align-items:center;margin-top:56px;@media only screen and (max-width:1360px){margin-top:50px;}@media only screen and (max-width:991px){margin-top:40px;align-items:flex-start;flex-direction:column;}@media only screen and (min-width:481px) and (max-width:667px){flex-direction:row;align-items:center;margin-bottom:30px;}@media only screen and (max-width:480px){margin-top:30px;}.learn__more-btn{color:", " !important;&::before{background-color:rgba(255,255,255,0.1) !important;}.hyphen{background-color:", "!important;}&:hover{color:", "!important;&::before{background-color:", "!important;}.hyphen{background-color:", "!important;}}&.alt{color:", "!important;&::before{width:100%;background-color:", "!important;}.hyphen{background-color:", "!important;}}}p{margin:0;color:", ";font-size:14px;font-weight:700;padding:0 22px;@media only screen and (max-width:991px){padding:7.5px 0;opacity:0;}@media only screen and (min-width:481px) and (max-width:667px){padding:0 20px;opacity:1;}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.primary', '#0071bc'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.primary', '#0071bc'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.heading', '#060F1E'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.primary', '#0071bc'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.heading', '#060F1E'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.heading', '#060F1E'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.primary', '#0071bc'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.heading', '#060F1E'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'));
const DonationForm = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "donateSectionstyle__DonationForm",
  componentId: "sc-1eghrf3-4"
})(["padding:50px;border-radius:10px;background-color:", ";@media only screen and (max-width:1440px){padding:50px 45px;}@media only screen and (max-width:1360px){padding:40px 35px;}@media only screen and (max-width:991px){padding:30px 20px;}@media only screen and (max-width:667px){max-width:448px;}@media only screen and (max-width:480px){margin-top:20px;}.input_group{input{@media only screen and (max-width:1360px){width:calc(100% - 140px);padding:0 15px;font-size:15px;height:56px;}@media only screen and (max-width:991px){border-top-left-radius:5px;border-bottom-left-radius:5px;}@media only screen and (max-width:480px){width:calc(100% - 110px);margin-bottom:10px;}}.select_wrapper{@media only screen and (max-width:1360px){width:140px;}@media only screen and (max-width:480px){width:110px;}.current_option{@media only screen and (max-width:1360px){height:56px;}@media only screen and (max-width:991px){border-top-right-radius:5px;border-bottom-right-radius:5px;}.text{@media only screen and (max-width:1360px){font-size:15px;margin-right:10px;}}svg{@media only screen and (max-width:1360px){width:12px;height:auto;}}}.dropdown{@media only screen and (max-width:1360px){top:56px;}@media only screen and (max-width:991px){border-radius:5px;}}}}.radio_group{margin-top:50px;@media only screen and (max-width:1440px){margin-top:45px;}@media only screen and (max-width:1360px){margin-top:35px;}@media only screen and (max-width:991px){margin-top:25px;}@media only screen and (max-width:480px){flex-direction:column;margin:0;}label{@media only screen and (max-width:1360px){padding:10px 15px;}@media only screen and (max-width:480px){width:100%;margin:10px 0;}&.active{border-color:", ";background-color:", ";}h4{font-size:20px;font-weight:600;@media only screen and (max-width:1440px){font-size:16px;margin-bottom:5px;}@media only screen and (max-width:1360px){font-size:15px;}}p{color:", ";font-size:14px;@media only screen and (max-width:1360px){font-size:13px;}}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#0071bc'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#0071bc'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text', '#294859'));
const DonateButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "donateSectionstyle__DonateButton",
  componentId: "sc-1eghrf3-5"
})(["display:flex;align-items:center;justify-content:center;width:100%;height:65px;border:0;font-size:20px;font-weight:700;border-radius:10px;cursor:pointer;color:", ";background-color:", ";position:relative;overflow:hidden;z-index:1;margin-top:50px;text-transform:uppercase;@media only screen and (max-width:1440px){font-size:18px;height:60px;margin-top:45px;}@media only screen and (max-width:1360px){font-size:16px;margin-top:35px;height:56px;}@media only screen and (max-width:991px){font-size:14px;margin-top:25px;height:54px;border-radius:5px;}@media only screen and (max-width:480px){margin-top:20px;}img{margin-left:13px;}&::before{content:'';display:block;width:100%;height:100%;position:absolute;top:0;left:-100%;z-index:-1;opacity:0;visibility:hidden;background:repeating-linear-gradient( -45deg,", ",", " 10px,", " 10px,", " 20px );transition:all 0.45s ease;@media only screen and (max-width:1440px){background:repeating-linear-gradient( -45deg,", ",", " 8px,", " 8px,", " 16px );}}&:hover{&::before{left:0;opacity:0.2;visibility:visible;}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondary', '#0071bc'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondary', '#0071bc'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondary', '#0071bc'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondaryHover', '#FF282F'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondaryHover', '#FF282F'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondary', '#0071bc'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondary', '#0071bc'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondaryHover', '#FF282F'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondaryHover', '#FF282F'));
/* harmony default export */ __webpack_exports__["f"] = (SectionWrapper);

/***/ }),

/***/ "1rcg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/pattern1-d8e90caa4dbf60fdd1783813bfa525d0.svg";

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

/***/ "2kA2":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAADBUlEQVQ4EZWUy0uVURTF17neq9n7aUalUYlo9lJBqKhBo2juIEwI6h/oMW3WRBoUQlSzRtGooiZNkgZRQlpaVvaQpKLEXtq7m9/ptz67UmRQBxZ7n/Pts/bae597g35Z/WqYn1fcGaRmKTzj075iZd9VqXO0ENajNWU5ZfdEqZqYJil28O3wKnU/KsRwf3zdUePGoOQku1rwBWS4tItLLVHhTJ26TkG4JKdcW1TczPdpYCZ4Aioh2l+r7iP4SknvqqGewHPsywEiVASsYPlPDGNbwW7QCL6Bci5fG1esBeyLwa7PCAg31JArVbzMwSZAmfEzud6ABN9K5oEsuA3KgKtYCC6AGlAPHoPZoAQ9VVkIt7Ix4QuQhyyH/SAlK/Cn4NOGlGgx1vul4BooEL7CdytmgOKM8lOyQaE1KhnCDlNKpKSP2A0EDAG3ZxbHn3C5GJ3USp2gAgwSMEJ8Jb6TvxxTmJWhl0w5lPLhKYfnsEuwY5xNxU7/6VOWzzKQqx+Y9DWwABO6uucgySAgy2Tfk60DFcs4NOF88BW84wx1Vij6675GBhToMVRpUWEuDpVoBLiqb2MqGc0ExdOglAOTrQWe4iAxHpj75ARWyosIXIxYVxWszK/FsyBWFbSwrU6dwxne1gB5ezh0SX4qDEmUHhdhrdBtMBnTt/Lo3vE60vf8Fkuf09fRmVf+AoEJSpUkKmon2INBZXyA/Q5cNn0slB6symopX+uAZV/FOt6JD6xVL/NJFdhI97R+S6JwHNdN96O3ar9PlzsAvJYBJ/LA3BajjLL31qrrGH66XEq6anTzCrUeYOOH7UmY3ISjKHK5lQA3PXcy93Eegz5Uoy6LmVgTpD5Zre6LBLXh+tz4CssDMrhcqzJRoTUu+VCJskeJce8nljP/sfrUsAOxJ/jQB/zz8/JLcF+d7Dqiz39Xvp0+fmT/25qU1BH+k8E08+PYDgHE0YQJ+4Psb9Wp+5LjJlt/JXVwr1bPKVKuCcJtbFsYyG6e4NnJiP777KFWltxXY/W/XvwBUsrkaD1uIP0AAAAASUVORK5CYII="

/***/ }),

/***/ "2t2b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.17.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var f,g,h,k,l;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0))};g=function(a,b){q=setTimeout(a,b)};h=function(){clearTimeout(q)};k=function(){return!1};l=exports.unstable_forceFrameRate=function(){}}else{var w=window.performance,x=window.Date,
y=window.setTimeout,z=window.clearTimeout,A=window.requestAnimationFrame,B=window.cancelAnimationFrame;"undefined"!==typeof console&&("function"!==typeof A&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof B&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));if("object"===typeof w&&
"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var C=x.now();exports.unstable_now=function(){return x.now()-C}}var D=!1,E=null,F=-1,G=5,H=0;k=function(){return exports.unstable_now()>=H};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):G=0<a?Math.floor(1E3/a):33.33};var I=new MessageChannel,J=I.port2;I.port1.onmessage=
function(){if(null!==E){var a=exports.unstable_now();H=a+G;try{E(!0,a)?J.postMessage(null):(D=!1,E=null)}catch(b){throw J.postMessage(null),b;}}else D=!1};f=function(a){E=a;D||(D=!0,J.postMessage(null))};g=function(a,b){F=y(function(){a(exports.unstable_now())},b)};h=function(){z(F);F=-1}}function K(a,b){var c=a.length;a.push(b);a:for(;;){var d=Math.floor((c-1)/2),e=a[d];if(void 0!==e&&0<L(e,b))a[d]=b,a[c]=e,c=d;else break a}}function M(a){a=a[0];return void 0===a?null:a}
function N(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>L(n,c))void 0!==r&&0>L(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>L(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function L(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var O=[],P=[],Q=1,R=null,S=3,T=!1,U=!1,V=!1;
function W(a){for(var b=M(P);null!==b;){if(null===b.callback)N(P);else if(b.startTime<=a)N(P),b.sortIndex=b.expirationTime,K(O,b);else break;b=M(P)}}function X(a){V=!1;W(a);if(!U)if(null!==M(O))U=!0,f(Y);else{var b=M(P);null!==b&&g(X,b.startTime-a)}}
function Y(a,b){U=!1;V&&(V=!1,h());T=!0;var c=S;try{W(b);for(R=M(O);null!==R&&(!(R.expirationTime>b)||a&&!k());){var d=R.callback;if(null!==d){R.callback=null;S=R.priorityLevel;var e=d(R.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?R.callback=e:R===M(O)&&N(O);W(b)}else N(O);R=M(O)}if(null!==R)var m=!0;else{var n=M(P);null!==n&&g(X,n.startTime-b);m=!1}return m}finally{R=null,S=c,T=!1}}
function Z(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var aa=l;exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=S;S=a;try{return b()}finally{S=c}};
exports.unstable_next=function(a){switch(S){case 1:case 2:case 3:var b=3;break;default:b=S}var c=S;S=b;try{return a()}finally{S=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Z(a)}else c=Z(a),e=d;c=e+c;a={id:Q++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,K(P,a),null===M(O)&&a===M(P)&&(V?h():V=!0,g(X,e-d))):(a.sortIndex=c,K(O,a),U||T||(U=!0,f(Y)));return a};exports.unstable_cancelCallback=function(a){a.callback=null};
exports.unstable_wrapCallback=function(a){var b=S;return function(){var c=S;S=b;try{return a.apply(this,arguments)}finally{S=c}}};exports.unstable_getCurrentPriorityLevel=function(){return S};exports.unstable_shouldYield=function(){var a=exports.unstable_now();W(a);var b=M(O);return b!==R&&null!==R&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<R.expirationTime||k()};exports.unstable_requestPaint=aa;exports.unstable_continueExecution=function(){U||T||(U=!0,f(Y))};
exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return M(O)};exports.unstable_Profiling=null;


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "32kt":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


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

/***/ "3EiS":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("YJ+P").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "3Of7":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "3saR":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("GEZW");
var anObject = __webpack_require__("fuSu");
var getKeys = __webpack_require__("NUOY");

module.exports = __webpack_require__("Sb4J") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "3veN":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/map-alt-168e7093d54fc81e20c945b97a3f3ee4.png";

/***/ }),

/***/ "3wzx":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("b1Ik")('keys');
var uid = __webpack_require__("9TH4");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

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

/***/ "5/jO":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("GEZW").f;
var has = __webpack_require__("zuNl");
var TAG = __webpack_require__("eMt4")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "5DhK":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("WD0w");
var $Object = __webpack_require__("RlXp").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


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

/***/ "5gtE":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "5l+C":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("GEZW");
var createDesc = __webpack_require__("DZbi");
module.exports = __webpack_require__("Sb4J") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "696L":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("TFPr");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "6jvx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-scrollspy"
var external_react_scrollspy_ = __webpack_require__("+Q8Q");
var external_react_scrollspy_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollspy_);

// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__("k094");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("qNsG");

// EXTERNAL MODULE: ./reusecore/node_modules/react/index.js
var react = __webpack_require__("beRW");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./reusecore/node_modules/rc-drawer/lib/index.js
var lib = __webpack_require__("z0eR");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./reusecore/node_modules/rc-drawer/assets/index.css
var assets = __webpack_require__("sdDh");

// CONCATENATED MODULE: ./reusecore/src/elements/Drawer/index.js


var __jsx = react_default.a.createElement;




const Drawer = (_ref) => {
  let {
    className,
    children,
    closeButton,
    closeButtonStyle,
    drawerHandler,
    toggleHandler,
    open
  } = _ref,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open"]);

  // Add all classs to an array
  const addAllClasses = ['reusecore__drawer']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(react["Fragment"], null, __jsx(lib_default.a, Object(esm_extends["a" /* default */])({
    open: open,
    onMaskClick: toggleHandler,
    className: addAllClasses.join(' ')
  }, props), __jsx("div", {
    className: "reusecore-drawer__close",
    onClick: toggleHandler,
    style: closeButtonStyle
  }, closeButton), children), __jsx("div", {
    className: "reusecore-drawer__handler",
    style: {
      display: 'inline-block'
    },
    onClick: toggleHandler
  }, drawerHandler));
};

Drawer.defaultProps = {
  width: '300px',
  handler: false,
  level: null
};
/* harmony default export */ var elements_Drawer = (Drawer);
// EXTERNAL MODULE: ./reusecore/src/elements/Image/index.js
var Image = __webpack_require__("ZyGw");

// EXTERNAL MODULE: ./common/src/contexts/DrawerContext.js
var DrawerContext = __webpack_require__("EnxY");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// EXTERNAL MODULE: ./containers/Charity/Navbar/navbar.style.js
var navbar_style = __webpack_require__("ugQH");

// CONCATENATED MODULE: ./containers/Charity/DrawerSection/drawerSection.style.js



const InnerWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "drawerSectionstyle__InnerWrapper",
  componentId: "j3eg0m-0"
})(["min-height:100vh;padding:30px;"]);
const SpreadButton = external_styled_components_default()(navbar_style["a" /* Button */]).withConfig({
  displayName: "drawerSectionstyle__SpreadButton",
  componentId: "j3eg0m-1"
})(["display:none;@media only screen and (max-width:991px){display:flex;width:calc(100% - 60px);width:calc(100% - 80px);position:absolute;left:40px;bottom:40px;min-height:54px;border-radius:10px;font-size:15px;overflow:hidden;z-index:1;img{margin-left:13px;}&::before{content:'';display:block;width:100%;height:100%;position:absolute;top:0;left:-100%;z-index:-1;opacity:0;visibility:hidden;background:repeating-linear-gradient( -45deg,", ",", " 10px,", " 10px,", " 20px );transition:all 0.45s ease;@media only screen and (max-width:1440px){background:repeating-linear-gradient( -45deg,", ",", " 8px,", " 8px,", " 16px );}}&:hover{background-color:", ";&::before{left:0;opacity:0.8;visibility:visible;}}}"], Object(external_styled_system_["themeGet"])('colors.primary', '#0071bc'), Object(external_styled_system_["themeGet"])('colors.primary', '#0071bc'), Object(external_styled_system_["themeGet"])('colors.primaryHover', '#ECF22B'), Object(external_styled_system_["themeGet"])('colors.primaryHover', '#ECF22B'), Object(external_styled_system_["themeGet"])('colors.primary', '#0071bc'), Object(external_styled_system_["themeGet"])('colors.primary', '#0071bc'), Object(external_styled_system_["themeGet"])('colors.primaryHover', '#ECF22B'), Object(external_styled_system_["themeGet"])('colors.primaryHover', '#ECF22B'), Object(external_styled_system_["themeGet"])('colors.primary', '#0071bc'));
/* harmony default export */ var drawerSection_style = (InnerWrapper);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./common/src/data/Charity/index.js
var Charity = __webpack_require__("szdJ");

// EXTERNAL MODULE: ./common/src/assets/image/charity/heart-red.png
var heart_red = __webpack_require__("2kA2");

// CONCATENATED MODULE: ./containers/Charity/DrawerSection/index.js
var DrawerSection_jsx = external_react_default.a.createElement;











const DrawerSection = () => {
  const {
    0: toggleState,
    1: setToggleState
  } = Object(external_react_["useState"])(false);
  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(DrawerContext["a" /* DrawerContext */]);

  const handleActiveClass = () => {
    setToggleState(!toggleState);
  };

  const handleDrawerToggle = () => {
    dispatch({
      type: 'TOGGLE'
    });
    handleActiveClass();
  };

  const scrollItems = [];
  Charity["f" /* menuItems */].forEach(item => {
    scrollItems.push(item.path.slice(1));
  });
  return DrawerSection_jsx(elements_Drawer, {
    width: "420px",
    placement: "right",
    drawerHandler: DrawerSection_jsx("button", {
      className: `drawer_btn ${toggleState ? 'active' : ''}`,
      onClick: handleActiveClass,
      "aria-label": "drawer toggle button"
    }, DrawerSection_jsx("ul", {
      className: "grid"
    }, DrawerSection_jsx("li", null), DrawerSection_jsx("li", null), DrawerSection_jsx("li", null), DrawerSection_jsx("li", null), DrawerSection_jsx("li", null), DrawerSection_jsx("li", null), DrawerSection_jsx("li", null), DrawerSection_jsx("li", null), DrawerSection_jsx("li", null)), DrawerSection_jsx("i", {
      className: "flaticon-plus-symbol "
    })),
    open: state.isOpen,
    toggleHandler: handleDrawerToggle
  }, DrawerSection_jsx(drawerSection_style, null, DrawerSection_jsx(external_react_scrollspy_default.a, {
    className: "scrollspy__menu",
    items: scrollItems,
    offset: -81,
    currentClassName: "active"
  }, Charity["f" /* menuItems */].map((menu, index) => DrawerSection_jsx("li", {
    key: `menu_key${index}`
  }, DrawerSection_jsx(link_default.a, {
    href: menu.path
  }, menu.label))))));
};

/* harmony default export */ var Charity_DrawerSection = __webpack_exports__["a"] = (DrawerSection);

/***/ }),

/***/ "6kqf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("Sb4J") && !__webpack_require__("5gtE")(function () {
  return Object.defineProperty(__webpack_require__("Ons/")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "7DIm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./common/src/theme/charity/colors.js
const colors = {
  transparent: 'transparent',
  lightGray: '#F0F0F0',
  primary: '#0071bc',
  primaryHover: '#ECF22F',
  primary2: 'rgba(252, 242, 43, 0.25)',
  secondary: '#0071bc',
  secondary2: '#EE2541',
  secondaryHover: '#FF282F',
  yellow: '#fdb32a',
  yellowHover: '#F29E02',
  border: '#dadada',
  black: '#000000',
  white: '#ffffff',
  heading: '#060F1E',
  text: '#060f1e',
  secondaryText: '#616970',
  lightText: 'rgba(41, 72, 89, 0.5)',
  linkedin: '#0077B5',
  facebook: '#3b5998',
  twitter: '#38A1F3',
  github: '#211f1f',
  select: '#525F7F'
};
/* harmony default export */ var charity_colors = (colors);
// CONCATENATED MODULE: ./common/src/theme/charity/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return charityTheme; });

const charityTheme = {
  breakpoints: [480, 768, 990, 1220],
  space: [0, 5, 10, 15, 20, 25, 30, 40, 56, 71, 91],
  fontSizes: [10, 12, 14, 15, 16, 20, 24, 36, 48, 55, 60, 81],
  fontWeights: [300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em'
  },
  fonts: {
    roboto: '"Roboto", sans-serif'
  },
  borders: [0, '1px solid', '2px solid', '4px solid'],
  radius: [0, 3, 5, 10, 15, 20, 25, 50, 60, '50%'],
  colors: charity_colors,
  colorStyles: {
    primary: {
      color: charity_colors.primary,
      borderColor: charity_colors.primary,
      '&:hover': {
        color: charity_colors.primaryHover,
        borderColor: charity_colors.primaryHover
      }
    },
    secondary: {
      color: charity_colors.secondary,
      borderColor: charity_colors.secondary,
      '&:hover': {
        color: charity_colors.secondaryHover,
        borderColor: charity_colors.secondaryHover
      }
    },
    warning: {
      color: charity_colors.yellow,
      borderColor: charity_colors.yellow,
      '&:hover': {
        color: charity_colors.yellowHover,
        borderColor: charity_colors.yellowHover
      }
    },
    error: {
      color: charity_colors.secondaryHover,
      borderColor: charity_colors.secondaryHover,
      '&:hover': {
        color: charity_colors.secondary,
        borderColor: charity_colors.secondary
      }
    },
    primaryWithBg: {
      color: charity_colors.heading,
      backgroundColor: charity_colors.primary,
      borderColor: charity_colors.primary,
      '&:hover': {
        backgroundColor: charity_colors.primaryHover,
        borderColor: charity_colors.primaryHover
      }
    },
    secondaryWithBg: {
      color: charity_colors.white,
      backgroundColor: charity_colors.secondary,
      borderColor: charity_colors.secondary,
      '&:hover': {
        backgroundColor: charity_colors.secondaryHover,
        borderColor: charity_colors.secondaryHover
      }
    },
    warningWithBg: {
      color: charity_colors.heading,
      backgroundColor: charity_colors.yellow,
      borderColor: charity_colors.yellow,
      '&:hover': {
        backgroundColor: charity_colors.yellowHover,
        borderColor: charity_colors.yellowHover
      }
    },
    errorWithBg: {
      color: charity_colors.white,
      backgroundColor: charity_colors.secondaryHover,
      borderColor: charity_colors.secondaryHover,
      '&:hover': {
        backgroundColor: charity_colors.secondary,
        borderColor: charity_colors.secondary
      }
    }
  },
  buttonStyles: {
    textButton: {
      border: 0,
      color: charity_colors.primary,
      padding: 0,
      height: 'auto',
      backgroundColor: `${charity_colors.transparent}`
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      backgroundColor: charity_colors.transparent
    },
    fab: {
      border: '0',
      width: '40px',
      height: '40px',
      padding: 0,
      borderRadius: '50%',
      justifyContent: 'center',
      'span.btn-icon': {
        paddingLeft: 0
      }
    },
    extendedFab: {
      border: '0',
      minWidth: '50px',
      height: '40px',
      borderRadius: '50px',
      justifyContent: 'center'
    }
  }
};

/***/ }),

/***/ "7aS1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: ./reusecore/src/elements/Text/index.js
var Text = __webpack_require__("+g4l");

// EXTERNAL MODULE: ./reusecore/src/elements/Heading/index.js
var Heading = __webpack_require__("3AUV");

// EXTERNAL MODULE: ./reusecore/src/elements/Image/index.js
var Image = __webpack_require__("ZyGw");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./common/src/components/Tabs/tabs.style.js

const TabWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "tabsstyle__TabWrapper",
  componentId: "sc-1lp8q6t-0"
})([""]);
const TabMenu = external_styled_components_default.a.ul.withConfig({
  displayName: "tabsstyle__TabMenu",
  componentId: "sc-1lp8q6t-1"
})([""]);
const MenuItem = external_styled_components_default.a.li.withConfig({
  displayName: "tabsstyle__MenuItem",
  componentId: "sc-1lp8q6t-2"
})(["cursor:pointer;&.active{font-weight:700;}"]);
const TabContent = external_styled_components_default.a.div.withConfig({
  displayName: "tabsstyle__TabContent",
  componentId: "sc-1lp8q6t-3"
})([""]);
const TabPanel = external_styled_components_default.a.div.withConfig({
  displayName: "tabsstyle__TabPanel",
  componentId: "sc-1lp8q6t-4"
})([""]);
/* harmony default export */ var tabs_style = (TabWrapper);
// CONCATENATED MODULE: ./common/src/components/Tabs/index.js
var __jsx = external_react_default.a.createElement;



const Tab = ({
  active,
  className,
  children
}) => {
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({
    active: active || 0
  });

  const handleChange = index => {
    setState({
      active: index
    });
  };

  const addAllClasses = ['rq_tab'];

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(tabs_style, {
    className: addAllClasses.join(' ')
  }, __jsx(TabMenu, {
    className: "tab_menu"
  }, children.map((element, index) => {
    let activeClass = index === state.active ? 'active' : '';
    return __jsx(MenuItem, {
      key: index,
      className: activeClass,
      onClick: () => handleChange(index)
    }, element.props.title);
  })), __jsx(TabContent, {
    className: "tab_content"
  }, children[state.active]));
};

const Panel = ({
  children
}) => __jsx(TabPanel, {
  className: "tab_panel"
}, children);
/* harmony default export */ var Tabs = (Tab);
// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// EXTERNAL MODULE: ./common/src/assets/image/charity/branch/highlight-pattern.svg
var highlight_pattern = __webpack_require__("PhQn");
var highlight_pattern_default = /*#__PURE__*/__webpack_require__.n(highlight_pattern);

// EXTERNAL MODULE: ./common/src/assets/image/charity/branch/highlight-pattern2.svg
var highlight_pattern2 = __webpack_require__("Aqjx");
var highlight_pattern2_default = /*#__PURE__*/__webpack_require__.n(highlight_pattern2);

// CONCATENATED MODULE: ./containers/Charity/BranchSection/branchSection.style.js




const SectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "branchSectionstyle__SectionWrapper",
  componentId: "bko0kt-0"
})(["width:100%;margin:81px 0;background-color:", ";@media only screen and (max-width:1440px){margin:70px 0;}@media only screen and (max-width:1360px){margin:50px 0;}@media only screen and (max-width:991px){margin:40px 0;}.rq_tab{display:flex;flex-direction:row-reverse;@media only screen and (max-width:667px){flex-direction:column;}.tab_menu{width:350px;display:flex;flex-direction:column;justify-content:center;padding-left:99px;@media only screen and (max-width:1440px){width:250px;padding-left:70px;}@media only screen and (max-width:1360px){width:250px;padding-left:50px;}@media only screen and (max-width:667px){width:100%;padding-left:30px;padding-top:20px;padding-bottom:20px;}li{font-size:18px;line-height:35px;font-weight:600;margin:21px 0;position:relative;color:", ";transition:color 0.325s ease;p{color:", ";}@media only screen and (max-width:1440px){font-size:16px;line-height:30px;margin:15px 0;}@media only screen and (max-width:1440px){font-size:14px;line-height:22px;margin:14px 0;}&:hover{color:", ";p{color:", ";}}&.active{font-size:30px;font-weight:600;color:", ";@media only screen and (max-width:1440px){font-size:24px;}@media only screen and (max-width:1360px){font-size:20px;}&::before{content:'';display:block;width:50px;height:2px;background-color:", ";position:absolute;left:-99px;top:calc(50% - 1px);@media only screen and (max-width:1440px){width:40px;left:-70px;}@media only screen and (max-width:1360px){width:28px;left:-50px;}@media only screen and (max-width:667px){width:18px;left:-30px;}}}}}.tab_content{width:calc(100% - 350px);@media only screen and (max-width:1440px){width:calc(100% - 250px);}@media only screen and (max-width:1360px){width:calc(100% - 250px);}@media only screen and (max-width:667px){width:100%;}}}"], Object(external_styled_system_["themeGet"])('colors.heading', '#060F1E'), Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'), Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'), Object(external_styled_system_["themeGet"])('colors.primary', '#0071bc'), Object(external_styled_system_["themeGet"])('colors.primary', '#0071bc'), Object(external_styled_system_["themeGet"])('colors.primary', '#0071bc'), Object(external_styled_system_["themeGet"])('colors.primary', '#0071bc'));
const ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "branchSectionstyle__ContentWrapper",
  componentId: "bko0kt-1"
})(["display:flex;@media only screen and (max-width:991px){flex-direction:column;}@media only screen and (max-width:667px){flex-wrap:wrap;}.image{width:calc(100% - 650px);overflow:hidden;@media only screen and (max-width:1440px){width:calc(100% - 500px);}@media only screen and (max-width:1360px){width:calc(100% - 432px);}@media only screen and (max-width:991px){width:100%;}@media only screen and (max-width:667px){order:2;}img{width:100%;height:100%;object-fit:cover;position:relative;right:-1px;}}.content{width:750px;padding:80px 86px 77px;background-color:", ";@media only screen and (max-width:1440px){width:600px;padding:70px 65px;}@media only screen and (max-width:1360px){width:482px;padding:56px 50px;}@media only screen and (max-width:991px){width:100%;padding:48px 40px;}@media only screen and (max-width:480px){order:1;padding:40px 30px;}h4{margin:0;font-size:16px;font-weight:600;@media only screen and (max-width:1360px){font-size:14px;}}h2{font-size:50px;line-height:70px;font-weight:300;margin:29px 0;@media only screen and (max-width:1440px){font-size:36px;line-height:54px;}@media only screen and (max-width:1360px){font-size:34px;line-height:50px;}@media only screen and (max-width:991px){font-size:30px;line-height:46px;margin:20px 0;}@media only screen and (max-width:767px){font-size:28px;line-height:40px;}strong{font-weight:300;background-repeat:no-repeat;background-size:contain;background-position:center;&:first-child{background-image:url(", ");}&:last-child{background-image:url(", ");}}}p{font-size:18px;line-height:30px;margin-bottom:30px;color:", ";@media only screen and (max-width:1440px){font-size:16px;margin-bottom:40px;}@media only screen and (max-width:1360px){font-size:15px;}@media only screen and (max-width:991px){margin-bottom:35px;}}.learn__more-btn{&::before{background-color:#38a1f3;}}}"], Object(external_styled_system_["themeGet"])('colors.primary', '#0071bc'), highlight_pattern_default.a, highlight_pattern2_default.a, Object(external_styled_system_["themeGet"])('colors.text', '#060f1e'));
/* harmony default export */ var branchSection_style = (SectionWrapper);
// EXTERNAL MODULE: ./common/src/data/Charity/index.js
var Charity = __webpack_require__("szdJ");

// CONCATENATED MODULE: ./containers/Charity/BranchSection/index.js
var BranchSection_jsx = external_react_default.a.createElement;










const BranchSection = () => {
  const title = text => {
    return {
      __html: text
    };
  };

  return BranchSection_jsx(branchSection_style, {
    id: "branch"
  }, BranchSection_jsx(Tabs, {
    active: 2
  }, Charity["b" /* branchData */].map(item => BranchSection_jsx(Panel, {
    title: BranchSection_jsx(Text["a" /* default */], {
      content: item.menuItem
    }),
    key: `tab_key${item.id}`
  }, BranchSection_jsx(ContentWrapper, null, BranchSection_jsx(Fade_default.a, null, BranchSection_jsx("div", {
    className: "image"
  }, BranchSection_jsx(Image["a" /* default */], {
    src: item.image,
    alt: "GIAD"
  }))), BranchSection_jsx("div", {
    className: "content"
  }, BranchSection_jsx(Heading["a" /* default */], {
    as: "h4",
    content: item.slogan
  }), BranchSection_jsx(Text["a" /* default */], {
    content: item.description
  })))))));
};

/* harmony default export */ var Charity_BranchSection = __webpack_exports__["a"] = (BranchSection);

/***/ }),

/***/ "7i3w":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTkiIGhlaWdodD0iMTciPjxpbWFnZSB3aWR0aD0iMTkiIGhlaWdodD0iMTciIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQk1BQUFBUkNBWUFBQUEvbUpmSEFBQUFBWE5TUjBJQXJzNGM2UUFBQWp4SlJFRlVPQkY5MDgxTFZGRVlnSEhIQ2NmTXVtSXArSUZXaGlsSkdVZ0lJaUhSQnlRRTdkMEZMbHE3Y09GV2RPZXFJR2dUUWZRWFNJRWd1akMwU0VGVGkyb21iZFFpSFVvc21XaDZuc3VkUUxJTy9EeG43ajMzUGU5OTMyc3NsOHNWT0JKbDlUVk1QWmpDTDJ3Z3ZadEpiVE9IZ3oyTkxLN0NlelBjZXgvZWlQN0VETWFtV242UG9CUUdlb05Lak9NeEQyWFkwOHJhUFduTW9oeWplTWI5WGVhQ1dGRlFkNVI1QUdld0ZmRmFnRVVzWVF5RGFNWWQrUEFGTE9BbnhnaTRXTWppSE5yeERSa1U0ekErdyt6Y1kwWnhMTU5oU1R5a0NOMjRUZWFCRzA5aUI5OFJnNi81R3Fjd0g4MmVYZ0l6WFVNTHpOeUN1NzZFMC9GNGNiREN3b0oyNGd2TXNCSFdyUUpsTUNPelNlRThEQzREbVowSFpjM01BTWV4aWEvd1lWL0pEWWRnSnRmd0ZKYmpCaEl3YzdPYlFEVXVHNndKVmZnQTYxVUtnM285alZva1lmRFdhTjNOYkswdGgyL2tjL2NLNmNJckZzL2hTUWRoMmcyd2c5YlFMbHM3bStKZUQzQ2R4QW1ZMVRCeDdwdVo0eVdtWU11UDRWUEVac3pDUTQ1Z0dsdDRBak90dzEwQzlUT0hiWGYyRlIvQVJ2akZ2OEFxL040c3RKK0J3VHpJWWRQY1o2YVBFSTR3TXlML2dOL1ZIQXhzcHI2ZVg3bUJzamdMNitrcldzOTE5T0V0d25FZ3Y0aG1UN0tUZHRSUFlRZG0ySVY2VEtJTkhqSk5BaW5tUHlQTUxQK0xtKzlZK3dra1lDUHNxdDBNWUpPdXdHczNNWVE5SS94SDMzT0ZIL3hybU5sMStBbDhoTmthYUEyM09EVEovTmZZTjFoK0YwSHRWaTg2Y0JITkJMS0crNDcvQnZNSkFwcVI5Y3NTNktIWC9qVitBNzhRdVo5bzNwakFBQUFBQUVsRlRrU3VRbUNDIi8+PC9zdmc+"

/***/ }),

/***/ "7uqm":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/thumb-2-5bcb162596af657b1ea0435b53e20989.png";

/***/ }),

/***/ "8iw8":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "9TH4":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "9gLy":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/twitter");

/***/ }),

/***/ "AXek":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/facebook");

/***/ }),

/***/ "Aqjx":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/highlight-pattern2-abb9e1a87a722892ccc62d3656452b60.svg";

/***/ }),

/***/ "B+4x":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/image5-2243e7df72f7e00a9dc06c9515b7e064.jpg";

/***/ }),

/***/ "BFE/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "Bo4g":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("fuSu");
var dPs = __webpack_require__("3saR");
var enumBugKeys = __webpack_require__("sejL");
var IE_PROTO = __webpack_require__("3wzx")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("Ons/")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("3EiS").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "Ceu2":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("HZWW");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("Bo4g") });


/***/ }),

/***/ "Ck0f":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/manufacturing-city-85c5e2b5056ce34921411f38f033f53e.jpg";

/***/ }),

/***/ "DZbi":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "Dgi7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("u7LC"), __esModule: true };

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

/***/ "EBGu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./reusecore/src/elements/Text/index.js
var Text = __webpack_require__("+g4l");

// EXTERNAL MODULE: ./reusecore/src/elements/Heading/index.js
var Heading = __webpack_require__("3AUV");

// EXTERNAL MODULE: ./common/src/components/BlogPost/index.js
var BlogPost = __webpack_require__("Z3R4");

// EXTERNAL MODULE: ./common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("y5yV");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// EXTERNAL MODULE: ./common/src/assets/image/charity/pattern1.svg
var pattern1 = __webpack_require__("1rcg");
var pattern1_default = /*#__PURE__*/__webpack_require__.n(pattern1);

// EXTERNAL MODULE: ./common/src/assets/image/charity/pattern2.svg
var pattern2 = __webpack_require__("kBrO");
var pattern2_default = /*#__PURE__*/__webpack_require__.n(pattern2);

// CONCATENATED MODULE: ./containers/Charity/WorkSection/workSection.style.js




const SectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "workSectionstyle__SectionWrapper",
  componentId: "sc-4zq1gy-0"
})(["width:100%;padding:81px 0;@media only screen and (max-width:1440px){padding:70px 0 50px;}@media only screen and (max-width:1360px){padding:45px 0 30px;}@media only screen and (max-width:991px){padding:40px 0 25px;}"]);
const SectionHeader = external_styled_components_default.a.header.withConfig({
  displayName: "workSectionstyle__SectionHeader",
  componentId: "sc-4zq1gy-1"
})(["text-align:center;margin-bottom:90px;@media only screen and (max-width:1440px){margin-bottom:70px;}@media only screen and (max-width:991px){margin-bottom:54px;}h2{font-size:50px;font-weight:300;margin-bottom:12px;@media only screen and (max-width:1440px){font-size:36px;}@media only screen and (max-width:1360px){font-size:34px;}@media only screen and (max-width:991px){font-size:30px;margin-bottom:10px;}@media only screen and (max-width:767px){font-size:28px;}}p{font-size:18px;line-height:40px;margin-bottom:0;@media only screen and (max-width:1440px){font-size:16px;line-height:32px;}@media only screen and (max-width:991px){font-size:15px;line-height:28px;}@media only screen and (min-width:668px) and (max-width:991px){padding:0 60px;}}"]);
const FeatureWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "workSectionstyle__FeatureWrapper",
  componentId: "sc-4zq1gy-2"
})(["display:flex;flex-wrap:wrap;margin:0 -25px;padding:0 51px;position:relative;z-index:1;@media only screen and (max-width:1440px){padding:0;}@media only screen and (max-width:1360px){margin:0 -15px;}&::before,&::after{content:'';display:block;width:422px;height:262px;background-repeat:no-repeat;position:absolute;z-index:-1;}&::before{top:8px;left:0;background-image:url(", ");}&::after{bottom:40px;right:0;background-image:url(", ");}.blog_post{width:calc(100% / 3 - 50px);border-radius:20px;padding:50px 37px 54px;box-shadow:0 0 100px rgba(175,182,194,0.2);background-color:", ";margin:0 25px 25px;text-align:center;@media only screen and (max-width:1360px){width:calc(100% / 3 - 30px);border-radius:15px;padding:45px 30px 40px;margin:0 15px 25px;}@media only screen and (max-width:991px){border-radius:10px;padding:30px 18px;}@media only screen and (max-width:767px){width:calc(100% / 2 - 30px);margin-bottom:30px;}@media only screen and (max-width:480px){width:100%;padding:45px 30px;}.thumbnail{img{height:100px;width:auto;margin-bottom:38px;@media only screen and (max-width:1440px){height:90px;margin-bottom:35px;}@media only screen and (max-width:1360px){height:80px;margin-bottom:27px;}@media only screen and (max-width:991px){height:67px;margin-bottom:20px;}}}.content{h3{margin:0 0 10px;font-size:20px;line-height:30px;font-weight:600;@media only screen and (max-width:1440px){font-size:18px;}@media only screen and (max-width:1360px){font-size:16px;line-height:28px;}@media only screen and (max-width:991px){font-size:15px;line-height:26px;margin-bottom:8px;}}p{margin:0;font-size:16px;line-height:28px;color:", ";@media only screen and (max-width:1360px){font-size:15px;}@media only screen and (max-width:991px){line-height:25px;}}}}"], pattern1_default.a, pattern2_default.a, Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'), Object(external_styled_system_["themeGet"])('colors.text', '#294859'));
/* harmony default export */ var workSection_style = (SectionWrapper);
// EXTERNAL MODULE: ./common/src/data/Charity/index.js
var Charity = __webpack_require__("szdJ");

// CONCATENATED MODULE: ./containers/Charity/WorkSection/index.js
var __jsx = external_react_default.a.createElement;








const WorkSection = () => {
  const {
    title,
    slogan,
    features
  } = Charity["k" /* workData */];
  return __jsx(workSection_style, {
    id: "work"
  }, __jsx(Container["a" /* default */], {
    width: "1260px"
  }, __jsx(SectionHeader, null, __jsx(Heading["a" /* default */], {
    content: title
  }), __jsx(Text["a" /* default */], {
    content: slogan
  })), __jsx(FeatureWrapper, null, features.map(item => __jsx(BlogPost["a" /* default */], {
    key: `feature_key${item.id}`,
    thumbUrl: item.icon,
    title: item.title,
    excerpt: item.description
  })))));
};

/* harmony default export */ var Charity_WorkSection = __webpack_exports__["a"] = (WorkSection);

/***/ }),

/***/ "EJYb":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/image-2a80df7320ed56a01226557d27b85a82.jpg";

/***/ }),

/***/ "EnxY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DrawerProvider; });
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







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const initialState = {
  isOpen: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return _objectSpread({}, state, {
        isOpen: !state.isOpen
      });

    default:
      return state;
  }
}

const DrawerContext = react__WEBPACK_IMPORTED_MODULE_7___default.a.createContext({});
const DrawerProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useReducer"])(reducer, initialState);
  return __jsx(DrawerContext.Provider, {
    value: {
      state,
      dispatch
    }
  }, children);
};

/***/ }),

/***/ "FGWk":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTkiIGhlaWdodD0iMTciPjxpbWFnZSB3aWR0aD0iMTkiIGhlaWdodD0iMTciIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQk1BQUFBUkNBWUFBQUEvbUpmSEFBQUFBWE5TUjBJQXJzNGM2UUFBQWhoSlJFRlVPQkY5MU10TFZWRVVnSEZ2V2ZiU0cxWkNLamZUU0tNd0d3Uk9ISVQ0QUFYbmdiTnEwclFHRGh3NmNOWXNFSnFJWVA0RGlVRWdEakxTVUVIeWhYcnoyVlZLS1ZIRDZQWjloM05DRGQzdzQreHo3amxycjczVzFsZzZuYzRJUndIWFpnemlEMUpZd1JhaWNaTkpIZnh0Q1BQNE4ySmhzRUtldk1BRkdHZ0dlZWhIRHpaUkFkOXhnVkhrb2hjZjhBc1pKM0FKenhESER5ekNMQy9qTmg2aUZLMXdnZmZZZ04vZHcyUGNRaERzTHRkSy9JUVpuRUUyMXVISExtaEdKekVGaDR0TjRqUWE4UlJ4WHl6R05uWVFnOXVjeGcyTWg5ZmZYTTloQXF1NEEzZGl3WjFYbzlTYVhXRlNoU2VZZzBGTmV4bW5ZS1krdncrM21JOU1mRU1SVENZSHI4MHNldmlkdVRXN0NMZGtKdWRoSnZWNEM4dlJoQ3lZdWRrTndBVnFERmFHcTFpQVdkaFJnL3A4QlhZNkNZTlhoSFByWkswdGg3dnl1dzZEZmNZd1hPa3NMR29KM3NFYTJsRnJaMU44MXdXY0ozRWRadFdPVndaempHQVFuaGVQeEZySVpvekNSYXpMUjJ5Z0QyYWF3RXUwSUdpN1Y3ZllpUlMyOEFsTDhDelpTWStCd1Z6SXNRamZNOU51QkNQS2JKYzd6OVVZREd5bWJzOVRicUE5bE1ONnVrWHIrUlhQTVl0Z1JNR2llMWQ2QTd2b3dkeUdHVDdBTld6Q090a1VnMzJCcFFoR1pqUUpyNTZuVlRURFJ0aFZQNHpESnRVaWlVZHdrUU1qK2tNLzhKQWJ6MW9EUEFJZVhzK2RnVnpJUUVuOFAveXZjWXdFdjdXaEg0NHlIUG4rVVpudFg5V01ySjlONk5yL3crSDVYd3Jxd29pblVJZGhBQUFBQUVsRlRrU3VRbUNDIi8+PC9zdmc+"

/***/ }),

/***/ "Fld6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__("Sb4J");
var getKeys = __webpack_require__("NUOY");
var gOPS = __webpack_require__("Paac");
var pIE = __webpack_require__("8iw8");
var toObject = __webpack_require__("LEjr");
var IObject = __webpack_require__("URMm");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("5gtE")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "FmMR":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "GEZW":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("fuSu");
var IE8_DOM_DEFINE = __webpack_require__("6kqf");
var toPrimitive = __webpack_require__("ZVDG");
var dP = Object.defineProperty;

exports.f = __webpack_require__("Sb4J") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "GPAc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("SzkQ"), __esModule: true };

/***/ }),

/***/ "H+Ez":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("NwPs")('observable');


/***/ }),

/***/ "HZWW":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("YJ+P");
var core = __webpack_require__("RlXp");
var ctx = __webpack_require__("t01e");
var hide = __webpack_require__("5l+C");
var has = __webpack_require__("zuNl");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


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

/***/ "Hc0C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./reusecore/src/elements/Box/index.js
var Box = __webpack_require__("usN7");

// EXTERNAL MODULE: ./reusecore/src/elements/Text/index.js
var Text = __webpack_require__("+g4l");

// EXTERNAL MODULE: ./reusecore/src/elements/Image/index.js
var Image = __webpack_require__("ZyGw");

// EXTERNAL MODULE: ./common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("y5yV");

// EXTERNAL MODULE: ./common/src/components/Input/index.js + 2 modules
var Input = __webpack_require__("RUdj");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./common/src/components/RadioGroup/radioGroup.style.js

const ComponentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "radioGroupstyle__ComponentWrapper",
  componentId: "sc-1ogtsv3-0"
})(["display:flex;align-items:flex-start;margin:0 -10px;h4,p{margin:0;}h4{margin-bottom:7px;}label{position:relative;padding:15px 25px;box-sizing:border-box;border:2px solid #f4f2fa;border-radius:10px;margin:0 10px;cursor:pointer;transition:all 0.3s ease;&.active{background-color:#f4f2fa;}input{visibility:hidden;opacity:0;position:absolute;}}"]);
/* harmony default export */ var radioGroup_style = (ComponentWrapper);
// CONCATENATED MODULE: ./common/src/components/RadioGroup/index.js







var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(source).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }




const RadioGroup = ({
  className,
  name,
  value,
  items,
  onUpdate
}) => {
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({
    value: value
  });

  const onChange = e => {
    const currentValue = e.target.value;
    setState(_objectSpread({}, state, {
      value: currentValue
    }));
    onUpdate(e.target.value);
  };

  const addAllClasses = ['radio_group'];

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(radioGroup_style, {
    className: addAllClasses.join(' ')
  }, items.map(item => __jsx("label", {
    htmlFor: item.title.toLowerCase().split(' ').join('-'),
    key: `radio__group-id${item.id}`,
    className: state.value === item.value ? 'active' : ''
  }, __jsx("input", {
    type: "radio",
    id: item.title.toLowerCase().split(' ').join('-'),
    name: name,
    onChange: onChange,
    value: item.value,
    checked: state.value === item.value,
    disabled: item.disabled
  }), item.title || item.text ? __jsx("div", {
    className: "content"
  }, __jsx("h4", null, item.title && item.title), __jsx("p", null, item.text && item.text)) : '')));
};

/** RadioGroup default type. */
RadioGroup.defaultProps = {
  onUpdate: () => {}
};
/* harmony default export */ var components_RadioGroup = (RadioGroup);
// EXTERNAL MODULE: ./containers/Charity/DonateSection/donateSection.style.js
var donateSection_style = __webpack_require__("1kO/");

// EXTERNAL MODULE: ./common/src/data/Charity/index.js
var Charity = __webpack_require__("szdJ");

// EXTERNAL MODULE: ./common/src/assets/image/charity/heart-alt.svg
var heart_alt = __webpack_require__("FGWk");

// CONCATENATED MODULE: ./containers/Charity/DonateSection/index.js








var DonateSection_jsx = external_react_default.a.createElement;

function DonateSection_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function DonateSection_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { DonateSection_ownKeys(source, true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { DonateSection_ownKeys(source).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }













const DonateSection = ({
  row,
  col
}) => {
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({
    price: '',
    currency: 'ngn',
    policy: 'oneTime',
    email: '',
    password: ''
  });

  const handleFormData = (value, name) => {
    setState(DonateSection_objectSpread({}, state, {
      [name]: value
    }));
  };

  const handleDonation = e => {
    e.preventDefault();
    console.log('Donation form data: ', state);
    setState(DonateSection_objectSpread({}, state, {
      price: ''
    }));
  };

  return DonateSection_jsx(donateSection_style["f" /* default */], {
    id: "signup"
  }, DonateSection_jsx(Container["a" /* default */], {
    width: "1260px"
  }, DonateSection_jsx(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "row"
  }, row), DonateSection_jsx(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "col"
  }, col), DonateSection_jsx(donateSection_style["b" /* ContentArea */], null, DonateSection_jsx(donateSection_style["e" /* Heading */], null, "Create an account", ' ', DonateSection_jsx("span", null, "or Sigin in with your exisiting account")), DonateSection_jsx(donateSection_style["a" /* ButtonGroup */], null, DonateSection_jsx(link_default.a, {
    href: "#"
  }, DonateSection_jsx("a", {
    className: "learn__more-btn alt"
  }, DonateSection_jsx("span", {
    className: "hyphen"
  }), DonateSection_jsx("span", {
    className: "btn_text"
  }, "Create an Account"))), DonateSection_jsx(Text["a" /* default */], {
    content: "or"
  }), DonateSection_jsx(link_default.a, {
    href: "#"
  }, DonateSection_jsx("a", {
    className: "learn__more-btn alt"
  }, DonateSection_jsx("span", {
    className: "hyphen"
  }), DonateSection_jsx("span", {
    className: "btn_text"
  }, "Singin with your acount")))))), DonateSection_jsx(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "col"
  }, col), DonateSection_jsx(donateSection_style["d" /* DonationForm */], {
    onSubmit: e => handleDonation(e)
  }, DonateSection_jsx(Input["a" /* default */], {
    inputType: "text",
    placeholder: "E-mail address",
    inputValue: state.email,
    inputOnChange: e => handleFormData(e.target.value, 'email')
  }), DonateSection_jsx("div", null, "\xA0"), DonateSection_jsx(Input["a" /* default */], {
    inputType: "password",
    placeholder: "password",
    inputValue: state.password,
    inputOnChange: e => handleFormData(e.target.value, 'password')
  }), DonateSection_jsx(donateSection_style["c" /* DonateButton */], {
    type: "submit"
  }, "Login "))))));
}; // DonateSection style props


// DonateSection default style
DonateSection.defaultProps = {
  // DonateSection row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  // DonateSection col default style
  col: {
    width: ['100%', '50%', '50%'],
    pl: '15px',
    pr: '15px',
    mb: '30px'
  }
};
/* harmony default export */ var Charity_DonateSection = (DonateSection);

/***/ }),

/***/ "I9JL":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("NUOY");
var gOPS = __webpack_require__("Paac");
var pIE = __webpack_require__("8iw8");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "IQ5s":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "IrP5":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "Irq/":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAMAAAAIG46tAAAASFBMVEUAAADf3+/X1+fV2uTX1+PW2eLX1+LW2OHW1uHV1+HW1uPV1+LW1+LW1uLV1uLW1+LW1+LV1uHV1+LW1+HW1uHV1uHW1+HW1+L73kjqAAAAF3RSTlMAECAwQFBgb3CAkJ+gr7C/wM/Q3+Dv8BOz1bsAAAEKSURBVCjPbZPbtoMgDEQHjVQ91Fov7P//0/MQLLXKC4mzNhlDkOrq3vA03a4EAPFO68l9aHpor1rYMUnqeF3FgcmDGbsBG4+M9QqmI5x/PVXwBv0CL+g3eEFP4A9awPjc16f9og6W9g1n1MGBxSTLmGS1TQ5m99Qxn9q0YVLL7BlIigcamSXZSXSg7uySpIbFiVRBaaFzA2NBmvrxKLOVy+5JkrEVXxmThqN0yASlz/9G1tDunykZ6bURakv/llJRkjEV524041b9XGblKmqkmDvIqeaR/DW2I1HGGo4stxEenrXkICXe5m8ht1KEl0mKu5+RgBcwBUlqF2Ctz8Im2NJnlOOUyamR9A8YQhMDKr8WfQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "JKTR":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/slide3-6f3d49b337d95832eb27c4faf14f31b3.jpg";

/***/ }),

/***/ "JlRd":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/slide4-ce445513d712d0819cff5784eacf4f13.jpg";

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

/***/ "KXwH":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/map-c492c2ecba63aff7ee19fe564eb3eed1.png";

/***/ }),

/***/ "L22g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,

  /**
   * BACKSPACE
   */
  BACKSPACE: 8,

  /**
   * TAB
   */
  TAB: 9,

  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac

  /**
   * ENTER
   */
  ENTER: 13,

  /**
   * SHIFT
   */
  SHIFT: 16,

  /**
   * CTRL
   */
  CTRL: 17,

  /**
   * ALT
   */
  ALT: 18,

  /**
   * PAUSE
   */
  PAUSE: 19,

  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,

  /**
   * ESC
   */
  ESC: 27,

  /**
   * SPACE
   */
  SPACE: 32,

  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST

  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST

  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST

  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST

  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST

  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH

  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST

  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH

  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,

  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT

  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE

  /**
   * ZERO
   */
  ZERO: 48,

  /**
   * ONE
   */
  ONE: 49,

  /**
   * TWO
   */
  TWO: 50,

  /**
   * THREE
   */
  THREE: 51,

  /**
   * FOUR
   */
  FOUR: 52,

  /**
   * FIVE
   */
  FIVE: 53,

  /**
   * SIX
   */
  SIX: 54,

  /**
   * SEVEN
   */
  SEVEN: 55,

  /**
   * EIGHT
   */
  EIGHT: 56,

  /**
   * NINE
   */
  NINE: 57,

  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization

  /**
   * A
   */
  A: 65,

  /**
   * B
   */
  B: 66,

  /**
   * C
   */
  C: 67,

  /**
   * D
   */
  D: 68,

  /**
   * E
   */
  E: 69,

  /**
   * F
   */
  F: 70,

  /**
   * G
   */
  G: 71,

  /**
   * H
   */
  H: 72,

  /**
   * I
   */
  I: 73,

  /**
   * J
   */
  J: 74,

  /**
   * K
   */
  K: 75,

  /**
   * L
   */
  L: 76,

  /**
   * M
   */
  M: 77,

  /**
   * N
   */
  N: 78,

  /**
   * O
   */
  O: 79,

  /**
   * P
   */
  P: 80,

  /**
   * Q
   */
  Q: 81,

  /**
   * R
   */
  R: 82,

  /**
   * S
   */
  S: 83,

  /**
   * T
   */
  T: 84,

  /**
   * U
   */
  U: 85,

  /**
   * V
   */
  V: 86,

  /**
   * W
   */
  W: 87,

  /**
   * X
   */
  X: 88,

  /**
   * Y
   */
  Y: 89,

  /**
   * Z
   */
  Z: 90,

  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT

  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,

  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,

  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,

  /**
   * NUM_ONE
   */
  NUM_ONE: 97,

  /**
   * NUM_TWO
   */
  NUM_TWO: 98,

  /**
   * NUM_THREE
   */
  NUM_THREE: 99,

  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,

  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,

  /**
   * NUM_SIX
   */
  NUM_SIX: 102,

  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,

  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,

  /**
   * NUM_NINE
   */
  NUM_NINE: 105,

  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,

  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,

  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,

  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,

  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,

  /**
   * F1
   */
  F1: 112,

  /**
   * F2
   */
  F2: 113,

  /**
   * F3
   */
  F3: 114,

  /**
   * F4
   */
  F4: 115,

  /**
   * F5
   */
  F5: 116,

  /**
   * F6
   */
  F6: 117,

  /**
   * F7
   */
  F7: 118,

  /**
   * F8
   */
  F8: 119,

  /**
   * F9
   */
  F9: 120,

  /**
   * F10
   */
  F10: 121,

  /**
   * F11
   */
  F11: 122,

  /**
   * F12
   */
  F12: 123,

  /**
   * NUMLOCK
   */
  NUMLOCK: 144,

  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization

  /**
   * DASH
   */
  DASH: 189,
  // needs localization

  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization

  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization

  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization

  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization

  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization

  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization

  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization

  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization

  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization

  /**
   * WIN_KEY
   */
  WIN_KEY: 224,

  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91

  /**
   * WIN_IME
   */
  WIN_IME: 229
};
/*
 whether text and modified key is entered at the same time.
 */

KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
  var keyCode = e.keyCode;

  if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
    return false;
  } // The following keys are quite harmless, even in combination with
  // CTRL, ALT or SHIFT.


  switch (keyCode) {
    case KeyCode.ALT:
    case KeyCode.CAPS_LOCK:
    case KeyCode.CONTEXT_MENU:
    case KeyCode.CTRL:
    case KeyCode.DOWN:
    case KeyCode.END:
    case KeyCode.ESC:
    case KeyCode.HOME:
    case KeyCode.INSERT:
    case KeyCode.LEFT:
    case KeyCode.MAC_FF_META:
    case KeyCode.META:
    case KeyCode.NUMLOCK:
    case KeyCode.NUM_CENTER:
    case KeyCode.PAGE_DOWN:
    case KeyCode.PAGE_UP:
    case KeyCode.PAUSE:
    case KeyCode.PRINT_SCREEN:
    case KeyCode.RIGHT:
    case KeyCode.SHIFT:
    case KeyCode.UP:
    case KeyCode.WIN_KEY:
    case KeyCode.WIN_KEY_RIGHT:
      return false;

    default:
      return true;
  }
};
/*
 whether character is entered.
 */


KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
    return true;
  }

  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
    return true;
  }

  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
    return true;
  } // Safari sends zero key code for non-latin characters.


  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
    return true;
  }

  switch (keyCode) {
    case KeyCode.SPACE:
    case KeyCode.QUESTION_MARK:
    case KeyCode.NUM_PLUS:
    case KeyCode.NUM_MINUS:
    case KeyCode.NUM_PERIOD:
    case KeyCode.NUM_DIVISION:
    case KeyCode.SEMICOLON:
    case KeyCode.DASH:
    case KeyCode.EQUALS:
    case KeyCode.COMMA:
    case KeyCode.PERIOD:
    case KeyCode.SLASH:
    case KeyCode.APOSTROPHE:
    case KeyCode.SINGLE_QUOTE:
    case KeyCode.OPEN_SQUARE_BRACKET:
    case KeyCode.BACKSLASH:
    case KeyCode.CLOSE_SQUARE_BRACKET:
      return true;

    default:
      return false;
  }
};

var _default = KeyCode;
exports.default = _default;

/***/ }),

/***/ "LEjr":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("fmBZ");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "LP4e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("Oxt6");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "LYUY":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("xx+m");
module.exports = __webpack_require__("RlXp").Object.assign;


/***/ }),

/***/ "LdqJ":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("mFw+");
var global = __webpack_require__("YJ+P");
var hide = __webpack_require__("5l+C");
var Iterators = __webpack_require__("FmMR");
var TO_STRING_TAG = __webpack_require__("eMt4")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "Lhn/":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("k04g");
var defined = __webpack_require__("fmBZ");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


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

/***/ "NM+w":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/search-icon-aefd38f20bf780e59ea5553d119d2fd4.svg";

/***/ }),

/***/ "NUOY":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("O4Se");
var enumBugKeys = __webpack_require__("sejL");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "NwPs":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("YJ+P");
var core = __webpack_require__("RlXp");
var LIBRARY = __webpack_require__("3Of7");
var wksExt = __webpack_require__("VrRS");
var defineProperty = __webpack_require__("GEZW").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "O4Se":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("zuNl");
var toIObject = __webpack_require__("SpVz");
var arrayIndexOf = __webpack_require__("yfv0")(false);
var IE_PROTO = __webpack_require__("3wzx")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "OdHS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("k094");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("lPez");
/* harmony import */ var _reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ZyGw");
/* harmony import */ var _common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("y5yV");
/* harmony import */ var _navbar_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ugQH");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_src_assets_image_charity_giadLogo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("sIDk");
/* harmony import */ var _common_src_assets_image_charity_giadLogo_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_giadLogo_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_src_assets_image_charity_heart_red_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("2kA2");
/* harmony import */ var _common_src_assets_image_charity_heart_red_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_heart_red_png__WEBPACK_IMPORTED_MODULE_8__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Navbar = () => {
  return __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_5__[/* default */ "c"], {
    className: "navbar"
  }, __jsx(_common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    fullWidth: true
  }, __jsx(_reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    logoWrapperStyle: {
      maxWidth: '170px'
    },
    href: "/",
    logoSrc: _common_src_assets_image_charity_giadLogo_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    className: "logo",
    title: "Global Initiative against Disasters"
  }), __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_5__[/* MenuWrapper */ "b"], null, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "smooth_scroll",
    href: "/join#signup",
    offset: 81
  }, __jsx("span", {
    style: {
      fontSize: '10px',
      width: '200px',
      textAlign: 'center',
      position: 'relative',
      top: '-35px',
      right: '-295px'
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/join"
  }, __jsx("span", null, "PEOPLE'S AUTOMOTIVE, CONSTRUCTION"))), __jsx("span", {
    style: {
      fontSize: '10px',
      width: '200px',
      textAlign: 'center',
      position: 'relative',
      top: '-20px',
      right: '-135px'
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/join"
  }, __jsx("span", null, "AND MANUFACTURING CITY"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/join"
  }, __jsx("span", null, "Join the Initiative"))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "Oi65":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "Ons/":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("32kt");
var document = __webpack_require__("YJ+P").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "Ov2E":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("2t2b");
} else {}


/***/ }),

/***/ "Oxt6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("5DhK"), __esModule: true };

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

/***/ "PVTl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("Oxt6");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "PWiz":
/***/ (function(module, exports) {



/***/ }),

/***/ "Paac":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "PhQn":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/highlight-pattern-63358744f124f02c45c67e58a4afced0.svg";

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "QUnu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getScrollBarSize;
var cached;

function getScrollBarSize(fresh) {
  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';
    var outer = document.createElement('div');
    var outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }

  return cached;
}

/***/ }),

/***/ "R8Xq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-icons-kit"
var external_react_icons_kit_ = __webpack_require__("Oi65");

// EXTERNAL MODULE: external "react-icons-kit/feather/chevronRight"
var chevronRight_ = __webpack_require__("VcVh");

// EXTERNAL MODULE: ./reusecore/src/elements/Text/index.js
var Text = __webpack_require__("+g4l");

// EXTERNAL MODULE: ./reusecore/src/elements/Heading/index.js
var Heading = __webpack_require__("3AUV");

// EXTERNAL MODULE: ./reusecore/src/elements/Image/index.js
var Image = __webpack_require__("ZyGw");

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

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "@glidejs/glide"
var glide_ = __webpack_require__("UbIB");
var glide_default = /*#__PURE__*/__webpack_require__.n(glide_);

// EXTERNAL MODULE: ./node_modules/@glidejs/glide/dist/css/glide.core.min.css
var glide_core_min = __webpack_require__("TSG6");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./common/src/components/GlideCarousel/glide.style.js

 // Glide wrapper style

const GlideWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "glidestyle__GlideWrapper",
  componentId: "sc-1df9bf1-0"
})(["", " ", " ", ""], external_styled_system_["width"], external_styled_system_["height"], external_styled_system_["space"]); // Glide slide wrapper style

const GlideSlideWrapper = external_styled_components_default.a.li.withConfig({
  displayName: "glidestyle__GlideSlideWrapper",
  componentId: "sc-1df9bf1-1"
})(["", " ", " ", " ", " ", ""], external_styled_system_["space"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["boxShadow"], external_styled_system_["borderRadius"]); // Button wrapper style

const ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "glidestyle__ButtonWrapper",
  componentId: "sc-1df9bf1-2"
})(["display:inline-block;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], external_styled_system_["display"], external_styled_system_["space"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["boxShadow"], external_styled_system_["borderRadius"], external_styled_system_["position"], external_styled_system_["top"], external_styled_system_["left"], external_styled_system_["right"], external_styled_system_["bottom"]); // ButtonControlWrapper style

const ButtonControlWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "glidestyle__ButtonControlWrapper",
  componentId: "sc-1df9bf1-3"
})(["", " ", " ", " ", " ", " ", " ", " ", " ", ""], external_styled_system_["display"], external_styled_system_["space"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], external_styled_system_["position"], external_styled_system_["top"], external_styled_system_["left"], external_styled_system_["right"], external_styled_system_["bottom"]); // BulletControlWrapper style

const BulletControlWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "glidestyle__BulletControlWrapper",
  componentId: "sc-1df9bf1-4"
})(["", " ", " ", " ", " ", ""], external_styled_system_["display"], external_styled_system_["space"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], external_styled_system_["flexWrap"]); // BulletButton style

const BulletButton = external_styled_components_default.a.button.withConfig({
  displayName: "glidestyle__BulletButton",
  componentId: "sc-1df9bf1-5"
})(["cursor:pointer;width:10px;height:10px;margin:4px;border:0;padding:0;outline:none;border-radius:50%;background-color:#D6D6D6;&:hover,&.glide__bullet--active{background-color:#869791;}", " ", " ", " ", " ", " ", " ", " ", ""], external_styled_system_["display"], external_styled_system_["space"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["boxShadow"], external_styled_system_["borderRadius"], external_styled_system_["width"], external_styled_system_["height"]); // default button style

const DefaultBtn = external_styled_components_default.a.button.withConfig({
  displayName: "glidestyle__DefaultBtn",
  componentId: "sc-1df9bf1-6"
})(["cursor:pointer;margin:10px 3px;"]);

/* harmony default export */ var glide_style = (GlideWrapper);
// CONCATENATED MODULE: ./common/src/components/GlideCarousel/index.js








var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(source).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }






const GlideCarousel = ({
  className,
  children,
  options,
  controls,
  prevButton,
  nextButton,
  prevWrapper,
  nextWrapper,
  bullets,
  numberOfBullets,
  buttonWrapperStyle,
  bulletWrapperStyle,
  bulletButtonStyle,
  carouselSelector
}) => {
  // Add all classs to an array
  const addAllClasses = ['glide']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // number of bullets loop


  const totalBullets = [];

  for (let i = 0; i < numberOfBullets; i++) {
    totalBullets.push(i);
  } // Load glide


  Object(external_react_["useEffect"])(() => {
    const glide = new glide_default.a(carouselSelector ? `#${carouselSelector}` : '#glide', _objectSpread({}, options));
    glide.mount();
  });
  return __jsx(glide_style, {
    className: addAllClasses.join(' '),
    id: carouselSelector || 'glide'
  }, __jsx("div", {
    className: "glide__track",
    "data-glide-el": "track"
  }, __jsx("ul", {
    className: "glide__slides"
  }, children)), controls && __jsx(ButtonControlWrapper, Object(esm_extends["a" /* default */])({
    className: "glide__controls",
    "data-glide-el": "controls"
  }, buttonWrapperStyle), __jsx(ButtonWrapper, Object(esm_extends["a" /* default */])({}, prevWrapper, {
    className: "glide__prev--area",
    "data-glide-dir": "<",
    "aria-label": "prev"
  }), prevButton ? prevButton : __jsx(DefaultBtn, null, "Prev")), __jsx(ButtonWrapper, Object(esm_extends["a" /* default */])({}, nextWrapper, {
    className: "glide__next--area",
    "data-glide-dir": ">",
    "aria-label": "next"
  }), nextButton ? nextButton : __jsx(DefaultBtn, null, "Next"))), bullets && __jsx(BulletControlWrapper, Object(esm_extends["a" /* default */])({
    className: "glide__bullets",
    "data-glide-el": "controls[nav]"
  }, bulletWrapperStyle), __jsx(external_react_["Fragment"], null, totalBullets.map(index => __jsx(BulletButton, Object(esm_extends["a" /* default */])({
    key: index,
    className: "glide__bullet",
    "data-glide-dir": `=${index}`,
    "aria-label": `bullet${index + 1}`
  }, bulletButtonStyle))))));
};

// GlideCarousel default props
GlideCarousel.defaultProps = {
  controls: true,
  bullets: false
};
/* harmony default export */ var components_GlideCarousel = (GlideCarousel);
// CONCATENATED MODULE: ./common/src/components/GlideCarousel/glideSlide.js
var glideSlide_jsx = external_react_default.a.createElement;

 // Glide Slide wrapper component

const GlideSlide = ({
  children
}) => {
  return glideSlide_jsx(GlideSlideWrapper, {
    className: "glide__slide"
  }, children);
};

/* harmony default export */ var glideSlide = (GlideSlide);
// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__("k094");
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);

// CONCATENATED MODULE: ./containers/Charity/BannerSection/leftBar.js
var leftBar_jsx = external_react_default.a.createElement;



const LeftBar = ({
  sectionId,
  offset,
  onClick,
  text
}) => {
  return leftBar_jsx("div", {
    className: "leftbar"
  }, leftBar_jsx(external_react_anchor_link_smooth_scroll_default.a, {
    className: "smooth_scroll",
    href: sectionId,
    offset: offset,
    onClick: onClick
  }, leftBar_jsx("i", {
    className: "flaticon-left-arrow"
  }), leftBar_jsx("span", {
    className: "btn_text"
  }, text)));
};

/* harmony default export */ var leftBar = (LeftBar);
// CONCATENATED MODULE: ./containers/Charity/BannerSection/bannerSection.style.js


const shake = Object(external_styled_components_["keyframes"])(["0%{transform:translateX(0);}50%{transform:translateX(8px);}100%{transform:translateX(0);}"]);
const BannerWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "bannerSectionstyle__BannerWrapper",
  componentId: "sc-1nkdffm-0"
})(["display:flex;height:100vh;margin-bottom:81px;@media only screen and (max-width:1360px){margin-bottom:50px;}@media only screen and (max-width:991px){min-height:580px;height:auto;margin-bottom:40px;}@media only screen and (max-width:667px){min-height:100vh;height:auto;}.leftbar{width:200px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;@media only screen and (max-width:1440px){width:170px;}@media only screen and (max-width:1360px){display:none;}.smooth_scroll{display:block;transform:rotate(-90deg);margin-bottom:74px;font-size:18px;font-weight:600;color:#93a2ab;transition:all 0.3s ease;@media only screen and (max-width:1440px){font-size:16px;margin-bottom:66px;}.btn_text{margin-left:20px;}i{display:inline-flex;}&:hover{color:", ";i{animation:", " 1s infinite;}}}}"], Object(external_styled_system_["themeGet"])('colors.text', '#294859'), shake);
const ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "bannerSectionstyle__ContentWrapper",
  componentId: "sc-1nkdffm-1"
})(["display:flex;width:calc(100% - 200px);@media only screen and (max-width:1440px){width:calc(100% - 170px);}@media only screen and (max-width:1360px){width:100%;}@media only screen and (max-width:667px){flex-direction:column;}"]);
const TextArea = external_styled_components_default.a.div.withConfig({
  displayName: "bannerSectionstyle__TextArea",
  componentId: "sc-1nkdffm-2"
})(["width:450px;align-self:center;padding-right:45px;@media only screen and (max-width:1440px){padding-top:30px;}@media only screen and (max-width:1360px){width:470px;margin-left:30px;padding-right:30px;}@media only screen and (max-width:991px){width:350px;}@media only screen and (max-width:667px){width:calc(100% - 30px);max-width:480px;align-self:flex-start;padding-top:160px;}h2{font-size:50px;line-height:70px;font-weight:900;margin-bottom:27px;@media only screen and (max-width:1440px){font-size:46px;line-height:64px;margin-bottom:20px;}@media only screen and (max-width:1360px){font-size:42px;line-height:50px;margin-bottom:25px;}@media only screen and (max-width:480px){font-size:36px;line-height:46px;margin-bottom:20px;}}h4{font-size:25px;line-height:40px;font-weight:400;color:", ";margin-bottom:22px;@media only screen and (max-width:1440px){font-size:22px;line-height:40px;}@media only screen and (max-width:1360px){font-size:18px;line-height:30px;}}p{font-size:18px;line-height:28px;margin-bottom:45px;@media only screen and (max-width:1440px){font-size:16px;margin-bottom:40px;}@media only screen and (max-width:1360px){font-size:15px;margin-bottom:40px;}&.highlighted_text{margin:0 0 40px;font-size:14px;line-height:17px;color:", ";@media only screen and (max-width:1440px){margin:0 0 30px;}}}"], Object(external_styled_system_["themeGet"])('colors.text', '#294859'), Object(external_styled_system_["themeGet"])('colors.heading', '#060F1E'));
const HighlightedText = external_styled_components_default.a.p.withConfig({
  displayName: "bannerSectionstyle__HighlightedText",
  componentId: "sc-1nkdffm-3"
})(["display:flex;align-items:center;max-width:320px;width:100%;min-height:28px;border-radius:80px;padding:3px 28px 3px 4px;background-color:#eff0f0;strong{display:inline-flex;align-items:center;min-width:51px;min-height:20px;padding:3px 11px;border-radius:30px;font-size:10px;text-transform:uppercase;color:", ";background-color:", ";margin-right:10px;}"], Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'), Object(external_styled_system_["themeGet"])('colors.secondary', '#0071bc'));
const ImageArea = external_styled_components_default.a.div.withConfig({
  displayName: "bannerSectionstyle__ImageArea",
  componentId: "sc-1nkdffm-4"
})(["width:calc(100% - 450px);@media only screen and (max-width:1360px){width:calc(100% - 500px);}@media only screen and (max-width:991px){width:calc(100% - 380px);}@media only screen and (max-width:667px){width:100%;padding:70px 0 40px;}#charitySlide{.glide__slides{height:100vh;@media only screen and (max-width:991px){height:762px;}@media only screen and (max-width:667px){height:380px;}.glide__slide{img{width:100%;height:100%;object-fit:cover;}}}.glide__controls{position:absolute;bottom:100px;right:calc(100% + 50px);display:flex;align-items:center;@media only screen and (max-width:1440px){bottom:50px;}@media only screen and (max-width:1360px){right:calc(100% + 40px);}@media only screen and (max-width:667px){width:100%;display:flex;align-items:center;justify-content:center;position:inherit;right:auto;bottom:-40px;}div{cursor:pointer;display:inline-flex;flex-direction:column;justify-content:center;min-height:17px;margin-left:20px;&:first-child{margin-left:0;}> span{display:inline-block;width:30px;height:2px;border-radius:4px;background-color:", ";position:relative;transition:all 0.3s ease;&::before,&::after{content:'';display:block;width:14px;height:2px;border-radius:4px;background-color:", ";position:absolute;z-index:1;transition:all 0.3s ease;}&.next_arrow{&::before{right:0;transform:rotate(42deg);transform-origin:top right;}&::after{right:0;transform:rotate(-42deg);transform-origin:14px 7px;width:11px;}}&.prev_arrow{&::before{left:0;transform:rotate(-42deg);transform-origin:top left;}&::after{left:0;transform:rotate(42deg);transform-origin:-3px 6px;width:11px;}}}&:hover{> span{width:100px;background-color:", ";@media only screen and (max-width:1440px){width:70px;}&::before,&::after{background-color:", ";}}}}}}"], Object(external_styled_system_["themeGet"])('colors.text', '#294859'), Object(external_styled_system_["themeGet"])('colors.text', '#294859'), Object(external_styled_system_["themeGet"])('colors.secondary', '#0071bc'), Object(external_styled_system_["themeGet"])('colors.secondary', '#0071bc'));
/* harmony default export */ var bannerSection_style = (BannerWrapper);
// EXTERNAL MODULE: ./common/src/data/Charity/index.js
var Charity = __webpack_require__("szdJ");

// CONCATENATED MODULE: ./containers/Charity/BannerSection/index.js
var BannerSection_jsx = external_react_default.a.createElement;













const BannerSection = () => {
  const glideOptions = {
    type: 'carousel',
    perView: 1,
    gap: 0,
    autoplay: 5000
  };
  return BannerSection_jsx(bannerSection_style, null, BannerSection_jsx(leftBar, {
    text: "SCROLL DOWN",
    offset: 81,
    sectionId: "#feature"
  }), BannerSection_jsx(ContentWrapper, null, BannerSection_jsx(TextArea, null, BannerSection_jsx(Heading["a" /* default */], {
    content: "Mitigating Disasters on a Global Scale."
  }), BannerSection_jsx(Heading["a" /* default */], {
    as: "h4",
    content: "Global Initiative Against Disasters (GIAD), an NGO was registered on 23rd of July, 2007"
  }), BannerSection_jsx(Text["a" /* default */], {
    content: "GIAD was a brain child of the personalities of some selected Nigerians with the aim of fronting a common platform to mitigate against disasters in Nigeria by whatever legitimate means possible. "
  }), BannerSection_jsx(link_default.a, {
    href: "#work"
  }, BannerSection_jsx("a", {
    className: "learn__more-btn"
  }, BannerSection_jsx("span", {
    className: "hyphen"
  }), BannerSection_jsx("span", {
    className: "btn_text"
  }, " Our Objectives")))), BannerSection_jsx(ImageArea, null, BannerSection_jsx(components_GlideCarousel, {
    carouselSelector: "charitySlide",
    options: glideOptions,
    nextButton: BannerSection_jsx("span", {
      className: "next_arrow"
    }),
    prevButton: BannerSection_jsx("span", {
      className: "prev_arrow"
    })
  }, BannerSection_jsx(external_react_["Fragment"], null, Charity["a" /* bannerSlides */].map(slide => BannerSection_jsx(glideSlide, {
    key: slide.id
  }, BannerSection_jsx(Image["a" /* default */], {
    src: slide.thumb_url,
    alt: "Charity Landing"
  }))))))));
};

/* harmony default export */ var Charity_BannerSection = __webpack_exports__["a"] = (BannerSection);

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-stickynode"
var external_react_stickynode_ = __webpack_require__("isz7");
var external_react_stickynode_default = /*#__PURE__*/__webpack_require__.n(external_react_stickynode_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./common/src/theme/charity/index.js + 1 modules
var charity = __webpack_require__("7DIm");

// EXTERNAL MODULE: ./common/src/assets/css/style.js
var style = __webpack_require__("XoTP");

// EXTERNAL MODULE: ./common/src/contexts/DrawerContext.js
var DrawerContext = __webpack_require__("EnxY");

// EXTERNAL MODULE: ./containers/Charity/Navbar/index.js
var Navbar = __webpack_require__("OdHS");

// EXTERNAL MODULE: ./containers/Charity/DrawerSection/index.js + 2 modules
var DrawerSection = __webpack_require__("6jvx");

// EXTERNAL MODULE: ./containers/Charity/BannerSection/index.js + 5 modules
var BannerSection = __webpack_require__("R8Xq");

// EXTERNAL MODULE: ./containers/Charity/FeatureSection/index.js + 1 modules
var FeatureSection = __webpack_require__("S/pY");

// EXTERNAL MODULE: ./containers/Charity/BranchSection/index.js + 3 modules
var BranchSection = __webpack_require__("7aS1");

// EXTERNAL MODULE: ./containers/Charity/WorkSection/index.js + 1 modules
var WorkSection = __webpack_require__("EBGu");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./reusecore/src/elements/Text/index.js
var Text = __webpack_require__("+g4l");

// EXTERNAL MODULE: ./reusecore/src/elements/Heading/index.js
var Heading = __webpack_require__("3AUV");

// EXTERNAL MODULE: ./common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("y5yV");

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// EXTERNAL MODULE: ./common/src/assets/image/charity/manufacturing-city.jpg
var manufacturing_city = __webpack_require__("Ck0f");
var manufacturing_city_default = /*#__PURE__*/__webpack_require__.n(manufacturing_city);

// CONCATENATED MODULE: ./containers/Charity/MilestoneBlock/milestoneBlock.style.js



const BlockWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "milestoneBlockstyle__BlockWrapper",
  componentId: "gup4pe-0"
})(["border:1px solid #0071bc;width:100%;margin:81px 0;padding:60px;background-image:url(", ");background-repeat:no-repeat;background-size:100%;border-radius:10px;@media only screen and (max-width:1440px){margin:70px 0;padding:50px;}@media only screen and (max-width:1360px){padding:30px;margin:50px 0;}@media only screen and (max-width:991px){margin:40px 0;padding-bottom:10px;}@media only screen and (max-width:480px){padding:10px;background-size:cover;margin-bottom:40px;}"], manufacturing_city_default.a);
const MilestoneCard = external_styled_components_default.a.div.withConfig({
  displayName: "milestoneBlockstyle__MilestoneCard",
  componentId: "gup4pe-1"
})(["max-width:323px;padding:62px 55px 70px;border-radius:10px;background-color:", ";text-align:center;@media only screen and (max-width:1440px){padding:56px 45px 56px;}@media only screen and (max-width:1360px){max-width:300px;padding:45px 30px;}@media only screen and (max-width:991px){max-width:280px;padding:40px 30px;}p{font-size:17px;line-height:32px;text-transform:uppercase;color:#fff;margin:0;@media only screen and (max-width:1440px){font-size:16px;line-height:30px;}@media only screen and (max-width:1360px){font-size:13px;line-height:28px;}}h2{font-size:80px;line-height:70px;font-weight:700;color:", ";margin:30px 0;@media only screen and (max-width:1440px){font-size:56px;line-height:56px;}@media only screen and (max-width:1360px){font-size:48px;line-height:40px;margin:28px 0;}@media only screen and (max-width:991px){font-size:44px;line-height:40px;margin:22px 0;}}.learn__more-btn{margin-top:40px;@media only screen and (max-width:1440px){margin-top:45px;}@media only screen and (max-width:1360px){margin-top:40px;}&::before{background-color:#38a1f3 !important;}}"], Object(external_styled_system_["themeGet"])('colors.primary', '#0071bc'), Object(external_styled_system_["themeGet"])('colors.heading', '#060F1E'));
const CounterWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "milestoneBlockstyle__CounterWrapper",
  componentId: "gup4pe-2"
})(["display:flex;justify-content:space-between;flex-wrap:wrap;max-width:920px;width:100%;margin:0 auto 75px;@media only screen and (max-width:1440px){margin:0 auto 70px;}@media only screen and (max-width:1360px){margin:0 auto 50px;}@media only screen and (max-width:991px){margin:0 auto 40px;}@media only screen and (max-width:480px){margin:0 auto 15px;}"]);
const CounterItem = external_styled_components_default.a.div.withConfig({
  displayName: "milestoneBlockstyle__CounterItem",
  componentId: "gup4pe-3"
})(["text-align:center;@media only screen and (max-width:480px){margin-bottom:30px;}h3{font-size:50px;line-height:60px;font-weight:300;@media only screen and (max-width:1440px){font-size:40px;line-height:46px;}@media only screen and (max-width:1360px){font-size:34px;line-height:40px;margin-bottom:13px;}@media only screen and (max-width:991px){font-size:30px;line-height:36px;margin-bottom:10px;}}p{font-size:20px;text-transform:capitalize;margin-bottom:0;@media only screen and (max-width:1440px){font-size:18px;}@media only screen and (max-width:1360px){font-size:16px;}@media only screen and (max-width:991px){font-size:15px;}}"]);
/* harmony default export */ var milestoneBlock_style = (BlockWrapper);
// EXTERNAL MODULE: ./common/src/data/Charity/index.js
var Charity = __webpack_require__("szdJ");

// CONCATENATED MODULE: ./containers/Charity/MilestoneBlock/index.js
var __jsx = external_react_default.a.createElement;








const MilestoneBlock = () => {
  const {
    title,
    amount,
    text,
    counterItems
  } = Charity["g" /* milestoneData */];
  return __jsx(Container["a" /* default */], {
    id: "milestone",
    width: "1260px"
  }, __jsx(milestoneBlock_style, null, __jsx(MilestoneCard, null, __jsx(Text["a" /* default */], {
    content: title
  }), __jsx(Heading["a" /* default */], {
    content: amount
  }), __jsx(Text["a" /* default */], {
    content: text
  }), __jsx(link_default.a, {
    href: "/join#signup"
  }, __jsx("a", {
    className: "learn__more-btn"
  }, __jsx("span", {
    className: "hyphen"
  }), __jsx("span", {
    className: "btn_text"
  }, "Join the Initiative"))))));
};

/* harmony default export */ var Charity_MilestoneBlock = (MilestoneBlock);
// EXTERNAL MODULE: ./containers/Charity/HumanityBlock/index.js + 1 modules
var HumanityBlock = __webpack_require__("XY6y");

// EXTERNAL MODULE: ./containers/Charity/PromotionBlock/index.js + 1 modules
var PromotionBlock = __webpack_require__("hl8p");

// EXTERNAL MODULE: ./containers/Charity/DonateSection/index.js + 2 modules
var DonateSection = __webpack_require__("Hc0C");

// EXTERNAL MODULE: ./reusecore/src/elements/Image/index.js
var Image = __webpack_require__("ZyGw");

// CONCATENATED MODULE: ./containers/Charity/MapSection/mapSection.style.js

const SectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "mapSectionstyle__SectionWrapper",
  componentId: "sc-14j939z-0"
})(["width:100%;padding:81px 0;@media only screen and (max-width:1440px){padding:70px 0;}@media only screen and (max-width:1360px){padding:45px 0 50px;}@media only screen and (max-width:991px){padding:40px 0;}"]);
const SectionHeader = external_styled_components_default.a.header.withConfig({
  displayName: "mapSectionstyle__SectionHeader",
  componentId: "sc-14j939z-1"
})(["text-align:center;margin-bottom:90px;@media only screen and (max-width:1440px){margin-bottom:70px;}@media only screen and (max-width:991px){margin-bottom:54px;}h2{font-size:50px;font-weight:300;margin-bottom:12px;@media only screen and (max-width:1440px){font-size:36px;}@media only screen and (max-width:1360px){font-size:34px;}@media only screen and (max-width:991px){font-size:30px;margin-bottom:10px;}@media only screen and (max-width:767px){font-size:28px;}}p{font-size:18px;line-height:40px;margin-bottom:0;@media only screen and (max-width:1440px){font-size:16px;line-height:32px;}@media only screen and (max-width:991px){font-size:15px;line-height:28px;}}"]);
const ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "mapSectionstyle__ImageWrapper",
  componentId: "sc-14j939z-2"
})(["display:flex;align-items:center;justify-content:center;"]);
/* harmony default export */ var mapSection_style = (SectionWrapper);
// EXTERNAL MODULE: ./common/src/assets/image/charity/map.png
var map = __webpack_require__("KXwH");
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// CONCATENATED MODULE: ./containers/Charity/MapSection/index.js
var MapSection_jsx = external_react_default.a.createElement;








const MapSection = () => {
  return MapSection_jsx(mapSection_style, null, MapSection_jsx(Container["a" /* default */], {
    width: "1200px"
  }, MapSection_jsx(SectionHeader, null, MapSection_jsx(Heading["a" /* default */], {
    content: "How Generous Is Your State"
  }), MapSection_jsx(Text["a" /* default */], {
    content: "Data from January 1 through November 30, 2018"
  })), MapSection_jsx(ImageWrapper, null, MapSection_jsx(Image["a" /* default */], {
    src: map_default.a,
    alt: "Charity Landing"
  }))));
};

/* harmony default export */ var Charity_MapSection = (MapSection);
// EXTERNAL MODULE: external "react-icons-kit"
var external_react_icons_kit_ = __webpack_require__("Oi65");

// EXTERNAL MODULE: external "react-icons-kit/fa/twitter"
var twitter_ = __webpack_require__("9gLy");

// EXTERNAL MODULE: external "react-icons-kit/fa/facebookSquare"
var facebookSquare_ = __webpack_require__("kcEG");

// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__("k094");
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);

// CONCATENATED MODULE: ./containers/Charity/FundraiserSection/fundraiserSection.style.js



const fundraiserSection_style_SectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "fundraiserSectionstyle__SectionWrapper",
  componentId: "sc-1yudwxk-0"
})(["width:100%;padding:81px 0;@media only screen and (max-width:1440px){padding:70px 0;}@media only screen and (max-width:1360px){padding:50px 0;}@media only screen and (max-width:991px){padding:40px 0;}"]);
const fundraiserSection_style_SectionHeader = external_styled_components_default.a.header.withConfig({
  displayName: "fundraiserSectionstyle__SectionHeader",
  componentId: "sc-1yudwxk-1"
})(["text-align:center;margin-bottom:90px;@media only screen and (max-width:1440px){margin-bottom:70px;}@media only screen and (max-width:991px){margin-bottom:54px;}h2{font-size:50px;font-weight:300;margin-bottom:12px;@media only screen and (max-width:1440px){font-size:36px;}@media only screen and (max-width:1360px){font-size:34px;}@media only screen and (max-width:991px){font-size:30px;margin-bottom:10px;}}p{font-size:18px;line-height:40px;margin-bottom:0;@media only screen and (max-width:1440px){font-size:16px;line-height:32px;}@media only screen and (max-width:991px){font-size:15px;line-height:28px;}}"]);
const ContentArea = external_styled_components_default.a.div.withConfig({
  displayName: "fundraiserSectionstyle__ContentArea",
  componentId: "sc-1yudwxk-2"
})(["display:flex;flex-wrap:wrap;width:100%;@media only screen and (max-width:480px){flex-direction:column;}"]);
const fundraiserSection_style_ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "fundraiserSectionstyle__ImageWrapper",
  componentId: "sc-1yudwxk-3"
})(["width:50%;@media only screen and (max-width:991px){width:42%;}@media only screen and (max-width:767px){width:100%;}"]);
const TextWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "fundraiserSectionstyle__TextWrapper",
  componentId: "sc-1yudwxk-4"
})(["width:50%;padding-left:100px;@media only screen and (max-width:1440px){padding-left:70px;}@media only screen and (max-width:1360px){padding-left:60px;}@media only screen and (max-width:991px){width:48%;padding-left:40px;}@media only screen and (max-width:767px){width:100%;padding-left:0;margin-top:30px;}h3{font-size:30px;font-weight:400;margin-bottom:22px;@media only screen and (max-width:1440px){font-size:26px;margin-bottom:20px;}@media only screen and (max-width:1360px){font-size:22px;margin-bottom:15px;}@media only screen and (max-width:991px){line-height:36px;margin-bottom:10px;}@media only screen and (max-width:480px){font-size:20px;line-height:30px;}}p{font-size:18px;line-height:28px;@media only screen and (max-width:1440px){font-size:16px;}@media only screen and (max-width:1360px){font-size:15px;}}"]);
const TextAndLink = external_styled_components_default.a.div.withConfig({
  displayName: "fundraiserSectionstyle__TextAndLink",
  componentId: "sc-1yudwxk-5"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:26px;@media only screen and (max-width:1440px){margin-bottom:20px;}@media only screen and (max-width:991px){margin-bottom:15px;}h4{color:", ";font-weight:600;font-size:18px;line-height:28px;margin:0;@media only screen and (max-width:1440px){font-size:16px;line-height:26px;}@media only screen and (max-width:1360px){font-size:14px;}@media only screen and (max-width:991px){font-size:13px;}}.text_btn{color:", ";font-weight:600;font-size:18px;@media only screen and (max-width:1440px){font-size:16px;}@media only screen and (max-width:1360px){font-size:14px;}@media only screen and (max-width:991px){font-size:13px;}i{margin-left:5px;}}"], Object(external_styled_system_["themeGet"])('colors.secondary', '#0071bc'), Object(external_styled_system_["themeGet"])('colors.heading', '#060F1E'));
const DonationProgressbar = external_styled_components_default.a.div.withConfig({
  displayName: "fundraiserSectionstyle__DonationProgressbar",
  componentId: "sc-1yudwxk-6"
})(["width:100%;margin-top:50px;@media only screen and (max-width:991px){margin-top:40px;}p{margin-top:0;@media only screen and (max-width:991px){margin:0 0 10px;}}h5{font-size:18px;line-height:31px;font-weight:400;margin-bottom:0;@media only screen and (max-width:1440px){font-size:16px;line-height:28px;}@media only screen and (max-width:1360px){font-size:15px;}}"]);
const BarArea = external_styled_components_default.a.div.withConfig({
  displayName: "fundraiserSectionstyle__BarArea",
  componentId: "sc-1yudwxk-7"
})(["display:flex;justify-content:space-between;position:relative;margin-bottom:23px;@media only screen and (max-width:991px){margin-bottom:20px;}&::before,&::after{display:block;content:'';width:100%;height:5px;border-radius:5px;background-color:", ";position:absolute;bottom:-7px;left:0;}&::after{width:56%;background-color:", ";}p{line-height:30px;&:last-child{@media only screen and (max-width:991px){display:none;}}}"], Object(external_styled_system_["themeGet"])('colors.lightGray', '#f0f0f0'), Object(external_styled_system_["themeGet"])('colors.secondary', '#0071bc'));
const CurrentStatus = external_styled_components_default.a.p.withConfig({
  displayName: "fundraiserSectionstyle__CurrentStatus",
  componentId: "sc-1yudwxk-8"
})(["color:", " !important;margin-top:-6px !important;strong{color:", ";font-size:40px;line-height:28px;font-weight:700;@media only screen and (max-width:991px){font-size:32px;}}"], Object(external_styled_system_["themeGet"])('colors.heading', '#060F1E'), Object(external_styled_system_["themeGet"])('colors.secondary', '#0071bc'));
const ShareArea = external_styled_components_default.a.div.withConfig({
  displayName: "fundraiserSectionstyle__ShareArea",
  componentId: "sc-1yudwxk-9"
})(["margin-top:50px;display:flex;align-items:center;justify-content:space-between;@media only screen and (max-width:1360px){margin-top:45px;}@media only screen and (min-width:768px) and (max-width:991px){margin-top:30px;flex-direction:column;align-items:flex-start;justify-content:flex-start;}@media only screen and (max-width:480px){margin-top:30px;flex-direction:column;align-items:flex-start;justify-content:flex-start;}"]);
const DonateButton = external_styled_components_default()(external_react_anchor_link_smooth_scroll_default.a).withConfig({
  displayName: "fundraiserSectionstyle__DonateButton",
  componentId: "sc-1yudwxk-10"
})(["display:flex;align-items:center;justify-content:center;min-width:230px;height:65px;border:0;font-size:18px;font-weight:700;border-radius:10px;cursor:pointer;color:", ";background-color:", ";position:relative;overflow:hidden;z-index:1;@media only screen and (max-width:1440px){font-size:15px;}@media only screen and (max-width:1360px){height:56px;min-width:200px;font-size:14px;}img{margin-left:13px;}&::before{content:'';display:block;width:100%;height:100%;position:absolute;top:0;left:-100%;z-index:-1;opacity:0;visibility:hidden;background:repeating-linear-gradient( -45deg,", ",", " 10px,", " 10px,", " 20px );transition:all 0.45s ease;@media only screen and (max-width:1440px){background:repeating-linear-gradient( -45deg,", ",", " 8px,", " 8px,", " 16px );}}&:hover{&::before{left:0;opacity:0.8;visibility:visible;}}"], Object(external_styled_system_["themeGet"])('colors.heading', '#060F1E'), Object(external_styled_system_["themeGet"])('colors.primary', '#0071bc'), Object(external_styled_system_["themeGet"])('colors.primary', '#0071bc'), Object(external_styled_system_["themeGet"])('colors.primary', '#0071bc'), Object(external_styled_system_["themeGet"])('colors.primaryHover', '#ECF22B'), Object(external_styled_system_["themeGet"])('colors.primaryHover', '#ECF22B'), Object(external_styled_system_["themeGet"])('colors.primary', '#0071bc'), Object(external_styled_system_["themeGet"])('colors.primary', '#0071bc'), Object(external_styled_system_["themeGet"])('colors.primaryHover', '#ECF22B'), Object(external_styled_system_["themeGet"])('colors.primaryHover', '#ECF22B'));
const ShareList = external_styled_components_default.a.ul.withConfig({
  displayName: "fundraiserSectionstyle__ShareList",
  componentId: "sc-1yudwxk-11"
})(["display:flex;align-items:center;@media only screen and (max-width:991px){margin-top:20px;}"]);
const Item = external_styled_components_default.a.li.withConfig({
  displayName: "fundraiserSectionstyle__Item",
  componentId: "sc-1yudwxk-12"
})(["margin-right:30px;font-size:20px;font-weight:400;color:", ";@media only screen and (max-width:1440px){font-size:18px;}@media only screen and (max-width:1360px){font-size:15px;margin-right:25px;}&:last-child{margin-right:0;}svg{width:20px;fill:", ";transition:all 0.3s ease;}a{&:hover{&.twitter{svg{fill:", ";}}&.facebook{svg{fill:", ";}}}}"], Object(external_styled_system_["themeGet"])('colors.heading', '#060F1E'), Object(external_styled_system_["themeGet"])('colors.heading', '#060F1E'), Object(external_styled_system_["themeGet"])('colors.twitter', '#38A1F3'), Object(external_styled_system_["themeGet"])('colors.facebook', '#38A1F3'));
/* harmony default export */ var fundraiserSection_style = (fundraiserSection_style_SectionWrapper);
// EXTERNAL MODULE: ./common/src/assets/image/charity/fundraisers.png
var fundraisers = __webpack_require__("dP+u");
var fundraisers_default = /*#__PURE__*/__webpack_require__.n(fundraisers);

// EXTERNAL MODULE: ./common/src/assets/image/charity/heart.svg
var heart = __webpack_require__("7i3w");
var heart_default = /*#__PURE__*/__webpack_require__.n(heart);

// CONCATENATED MODULE: ./containers/Charity/FundraiserSection/index.js
var FundraiserSection_jsx = external_react_default.a.createElement;













const FundraiserSection = () => {
  return FundraiserSection_jsx(fundraiserSection_style, {
    id: "fundraisers"
  }, FundraiserSection_jsx(Container["a" /* default */], {
    width: "1260px"
  }, FundraiserSection_jsx(fundraiserSection_style_SectionHeader, null, FundraiserSection_jsx(Heading["a" /* default */], {
    content: "Browse Fundraisers"
  }), FundraiserSection_jsx(Text["a" /* default */], {
    content: "People around the world are raising money for what they are passionate about. "
  })), FundraiserSection_jsx(ContentArea, null, FundraiserSection_jsx(fundraiserSection_style_ImageWrapper, null, FundraiserSection_jsx(Image["a" /* default */], {
    src: fundraisers_default.a,
    alt: "Charity"
  })), FundraiserSection_jsx(TextWrapper, null, FundraiserSection_jsx(TextAndLink, null, FundraiserSection_jsx(Heading["a" /* default */], {
    as: "h4",
    content: "START FUNDRAISING"
  }), FundraiserSection_jsx(link_default.a, {
    href: "#1"
  }, FundraiserSection_jsx("a", {
    className: "text_btn"
  }, "SEE ALL ", FundraiserSection_jsx("i", {
    className: "flaticon-next"
  })))), FundraiserSection_jsx(Heading["a" /* default */], {
    as: "h3",
    content: "Helping Hand For The Homeless"
  }), FundraiserSection_jsx(Text["a" /* default */], {
    content: "We are organizing a program on January 20, 2019 to help the homeless people. Our aim is to provide them a \r specific place to live.\r "
  }), FundraiserSection_jsx(DonationProgressbar, null, FundraiserSection_jsx(BarArea, null, FundraiserSection_jsx(CurrentStatus, null, FundraiserSection_jsx("strong", null, "$95"), " of $2,000 goal"), FundraiserSection_jsx(Text["a" /* default */], {
    content: "Last donation 9m ago"
  })), FundraiserSection_jsx(Heading["a" /* default */], {
    as: "h5",
    content: "Raised by 10 people in 1 month"
  })), FundraiserSection_jsx(ShareArea, null, FundraiserSection_jsx(DonateButton, {
    href: "#donate",
    offset: 81
  }, "DONATE NOW ", FundraiserSection_jsx(Image["a" /* default */], {
    src: heart_default.a,
    alt: "Charity Landing"
  })), FundraiserSection_jsx(ShareList, null, FundraiserSection_jsx(Item, null, "Share on"), FundraiserSection_jsx(Item, null, FundraiserSection_jsx(link_default.a, {
    href: "#1"
  }, FundraiserSection_jsx("a", {
    target: "_blank",
    className: "twitter",
    "aria-label": "social share link"
  }, FundraiserSection_jsx(external_react_icons_kit_["Icon"], {
    icon: twitter_["twitter"]
  })))), FundraiserSection_jsx(Item, null, FundraiserSection_jsx(link_default.a, {
    href: "#1"
  }, FundraiserSection_jsx("a", {
    target: "_blank",
    className: "facebook",
    "aria-label": "social share link"
  }, FundraiserSection_jsx(external_react_icons_kit_["Icon"], {
    icon: facebookSquare_["facebookSquare"]
  }))))))))));
};

/* harmony default export */ var Charity_FundraiserSection = (FundraiserSection);
// EXTERNAL MODULE: ./common/src/components/BlogPost/index.js
var BlogPost = __webpack_require__("Z3R4");

// CONCATENATED MODULE: ./containers/Charity/BlogSection/blogSection.style.js


const blogSection_style_SectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "blogSectionstyle__SectionWrapper",
  componentId: "yhi3i8-0"
})(["width:100%;padding:81px 0 50px;@media only screen and (max-width:1440px){padding:70px 0 50px;}@media only screen and (max-width:1360px){padding:50px 0 30px;}@media only screen and (max-width:991px){padding:40px 0 10px;}"]);
const blogSection_style_SectionHeader = external_styled_components_default.a.header.withConfig({
  displayName: "blogSectionstyle__SectionHeader",
  componentId: "yhi3i8-1"
})(["display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:90px;@media only screen and (max-width:1440px){margin-bottom:70px;}@media only screen and (max-width:991px){margin-bottom:54px;}@media only screen and (max-width:480px){flex-direction:column;align-items:self-start;}"]);
const TitleArea = external_styled_components_default.a.div.withConfig({
  displayName: "blogSectionstyle__TitleArea",
  componentId: "yhi3i8-2"
})(["max-width:631px;@media only screen and (max-width:991px){max-width:400px;}h2{font-size:50px;font-weight:300;@media only screen and (max-width:1440px){font-size:36px;margin-bottom:15px;}@media only screen and (max-width:1360px){font-size:34px;}@media only screen and (max-width:991px){font-size:30px;margin-bottom:10px;}@media only screen and (max-width:767px){font-size:28px;}}"]);
const blogSection_style_Text = external_styled_components_default.a.p.withConfig({
  displayName: "blogSectionstyle__Text",
  componentId: "yhi3i8-3"
})(["font-size:18px;line-height:40px;margin-bottom:0;@media only screen and (max-width:1440px){font-size:16px;line-height:32px;}@media only screen and (max-width:1360px){font-size:15px;line-height:30px;}@media only screen and (max-width:991px){font-size:15px;line-height:28px;}.link{color:", ";text-decoration:underline;margin-left:5px;}"], Object(external_styled_system_["themeGet"])('colors.secondary', '#0071bc'));
const LinkArea = external_styled_components_default.a.div.withConfig({
  displayName: "blogSectionstyle__LinkArea",
  componentId: "yhi3i8-4"
})([".text__btn{display:inline-flex;align-items:center;color:", ";font-size:17px;line-height:28px;@media only screen and (max-width:1440px){font-size:16px;}@media only screen and (max-width:1360px){font-size:15px;}@media only screen and (max-width:480px){margin:10px 0 0;}.arrow{width:60px;height:2px;border-radius:4px;margin-left:26px;position:relative;background-color:", ";@media only screen and (max-width:1440px){width:50px;margin-left:20px;}@media only screen and (max-width:1360px){width:35px;margin-left:15px;}&::before,&::after{content:'';display:block;width:14px;height:2px;border-radius:4px;background-color:", ";position:absolute;right:0;z-index:1;transition:all 0.3s ease;}&::before{transform:rotate(42deg);transform-origin:top right;}&::after{transform:rotate(-42deg);transform-origin:14px 7px;width:11px;}}&:hover{.arrow{&::before{width:11px;transform-origin:15px -3px;}&::after{transform-origin:top right;width:14px;}}}}"], Object(external_styled_system_["themeGet"])('colors.secondary', '#0071bc'), Object(external_styled_system_["themeGet"])('colors.secondary', '#0071bc'), Object(external_styled_system_["themeGet"])('colors.secondary', '#0071bc'));
const PostArea = external_styled_components_default.a.div.withConfig({
  displayName: "blogSectionstyle__PostArea",
  componentId: "yhi3i8-5"
})(["display:flex;flex-wrap:wrap;margin:0 -50px;@media only screen and (max-width:1440px){margin:0 -35px;}@media only screen and (max-width:1360px){margin:0 -30px;}@media only screen and (max-width:991px){margin:0 -20px;}.blog_post{width:calc(50% - 100px);margin:0 50px 30px;overflow:hidden;border-radius:10px;box-shadow:0 0 100px rgba(175,182,194,0.2);background-color:", ";@media only screen and (max-width:1440px){width:calc(50% - 70px);margin:0 35px 30px;}@media only screen and (max-width:1360px){width:calc(50% - 60px);margin:0 30px 30px;}@media only screen and (max-width:991px){width:calc(50% - 40px);margin:0 20px 30px;}@media only screen and (max-width:667px){width:100%;}.thumbnail{img{width:100%;object-fit:cover;}}.content{padding:42px 50px 50px;@media only screen and (max-width:1360px){padding:30px 40px 45px;}@media only screen and (max-width:991px){padding:20px 30px 35px;}.title{color:", ";font-size:24px;line-height:40px;font-weight:400;margin:0 0 24px;@media only screen and (max-width:1440px){font-size:22px;line-height:36px;}@media only screen and (max-width:1360px){font-size:20px;line-height:34px;}@media only screen and (max-width:991px){font-size:18px;line-height:30px;margin:0 0 15px;}}.excerpt{font-size:18px;line-height:32px;margin:0 0 27px;@media only screen and (max-width:1600px){font-size:17px;line-height:28px;}@media only screen and (max-width:1440px){font-size:16px;}@media only screen and (max-width:1360px){font-size:15px;}@media only screen and (max-width:991px){margin-bottom:20px;}}}&:nth-child(2){.content{.title{padding-right:78px;@media only screen and (max-width:991px){padding-right:0;}}}}.learn_more{padding-top:14px;.learn__more-btn{&::before{background-color:", ";}}}}"], Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'), Object(external_styled_system_["themeGet"])('colors.heading', '#060F1E'), Object(external_styled_system_["themeGet"])('colors.primary2', 'rgba(252, 242, 43, 0.25)'));
/* harmony default export */ var blogSection_style = (blogSection_style_SectionWrapper);
// CONCATENATED MODULE: ./containers/Charity/BlogSection/index.js
var BlogSection_jsx = external_react_default.a.createElement;








const BlogSection = () => {
  return BlogSection_jsx(blogSection_style, {
    id: "blog"
  }, BlogSection_jsx(Container["a" /* default */], {
    width: "1260px"
  }, BlogSection_jsx(blogSection_style_SectionHeader, null, BlogSection_jsx(TitleArea, null, BlogSection_jsx(Heading["a" /* default */], {
    content: "Blog & News Updates"
  }), BlogSection_jsx(blogSection_style_Text, null, "People around the world are raising money for what they are passionate about. Get The Latest PayBear Updates", BlogSection_jsx(link_default.a, {
    href: "#1"
  }, BlogSection_jsx("a", {
    className: "link"
  }, "Join us on Community")))), BlogSection_jsx(LinkArea, null, BlogSection_jsx(link_default.a, {
    href: "#1"
  }, BlogSection_jsx("a", {
    className: "text__btn"
  }, BlogSection_jsx("span", {
    className: "text"
  }, "View all blog posts"), BlogSection_jsx("span", {
    className: "arrow"
  }))))), BlogSection_jsx(PostArea, null, Charity["h" /* posts */].map(item => BlogSection_jsx(BlogPost["a" /* default */], {
    key: `blog__post-key${item.id}`,
    thumbUrl: item.thumbUrl,
    title: item.title,
    excerpt: item.excerpt,
    link: BlogSection_jsx("a", {
      className: "learn__more-btn",
      href: item.btnUrl
    }, BlogSection_jsx("span", {
      className: "hyphen"
    }), BlogSection_jsx("span", {
      className: "btn_text"
    }, item.btnText))
  })))));
};

/* harmony default export */ var Charity_BlogSection = (BlogSection);
// EXTERNAL MODULE: ./reusecore/src/elements/UI/Logo/index.js + 1 modules
var Logo = __webpack_require__("lPez");

// CONCATENATED MODULE: ./containers/Charity/ClientBlock/clientBlock.style.js

const slideShow = Object(external_styled_components_["keyframes"])(["from{transform:translateX(0);}to{transform:translateX(-100%);}"]);
const clientBlock_style_SectionWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "clientBlockstyle__SectionWrapper",
  componentId: "fah627-0"
})(["display:flex;align-items:center;justify-content:center;padding:81px 0;@media only screen and (max-width:1360px){padding:50px 0;}@media only screen and (max-width:991px){padding:30px 0 40px;}"]);
const ImageSlider = external_styled_components_default.a.div.withConfig({
  displayName: "clientBlockstyle__ImageSlider",
  componentId: "fah627-1"
})(["max-width:524px;width:100%;height:30px;display:flex;align-items:center;flex-wrap:nowrap;overflow:hidden;position:relative;@media only screen and (max-width:991px){max-width:600px;}@media only screen and (max-width:767px){width:calc(100% - 60px);margin:0 auto;}&::before,&::after{content:'';display:block;width:50px;height:100%;position:absolute;top:0;background:linear-gradient(to right,#fafbfe,rgba(255,255,255,0));z-index:1;}&::before{left:0;}&::after{right:0;transform:rotateZ(180deg);}"]);
const ImageSlide = external_styled_components_default.a.div.withConfig({
  displayName: "clientBlockstyle__ImageSlide",
  componentId: "fah627-2"
})(["height:30px;flex-shrink:0;animation:", " 20s linear infinite;a{margin:0 22px;transition:all 0.3s ease;filter:brightness(0.85);img{@media only screen and (max-width:1360px){max-width:90%;}@media only screen and (max-width:991px){max-width:80%;}}&:hover{filter:brightness(0.3);}}"], slideShow);
/* harmony default export */ var clientBlock_style = (clientBlock_style_SectionWrapper);
// CONCATENATED MODULE: ./containers/Charity/ClientBlock/index.js
var ClientBlock_jsx = external_react_default.a.createElement;





const ClientBlock = () => {
  return ClientBlock_jsx(clientBlock_style, null, ClientBlock_jsx(ImageSlider, null, ClientBlock_jsx(ImageSlide, null, Charity["c" /* clients */].map(item => ClientBlock_jsx(Logo["a" /* default */], {
    key: `slide1__key${item.id}`,
    href: item.link,
    logoSrc: item.logo,
    title: item.name
  }))), ClientBlock_jsx(ImageSlide, null, Charity["c" /* clients */].map(item => ClientBlock_jsx(Logo["a" /* default */], {
    key: `slide2__key${item.id}`,
    href: item.link,
    logoSrc: item.logo,
    title: item.name
  })))));
};

/* harmony default export */ var Charity_ClientBlock = (ClientBlock);
// EXTERNAL MODULE: ./containers/Charity/Footer/index.js + 1 modules
var Footer = __webpack_require__("b01i");

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");

// EXTERNAL MODULE: ./containers/Charity/charity.style.js
var charity_style = __webpack_require__("txJt");

// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;

























const Index = shows => {
  return pages_jsx(external_styled_components_["ThemeProvider"], {
    theme: charity["a" /* charityTheme */]
  }, pages_jsx(external_react_["Fragment"], null, pages_jsx(head_default.a, null, pages_jsx("title", null, "GIAD | Global Initiative Axgainst Disasters"), pages_jsx("meta", {
    name: "Description",
    content: "React next landing page"
  }), pages_jsx("meta", {
    name: "theme-color",
    content: "#0071bc"
  }), pages_jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), pages_jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap",
    rel: "stylesheet"
  })), pages_jsx(style["a" /* ResetCSS */], null), pages_jsx(charity_style["c" /* GlobalStyle */], null), pages_jsx(charity_style["a" /* CharityWrapper */], null, pages_jsx(external_react_stickynode_default.a, {
    top: 0,
    innerZ: 9999,
    activeClass: "sticky-nav-active"
  }, pages_jsx(Navbar["a" /* default */], null)), pages_jsx(DrawerContext["b" /* DrawerProvider */], null, pages_jsx(DrawerSection["a" /* default */], null)), pages_jsx(charity_style["b" /* ContentWrapper */], null, pages_jsx(BannerSection["a" /* default */], null), pages_jsx(FeatureSection["a" /* default */], null), pages_jsx(BranchSection["a" /* default */], null), pages_jsx(WorkSection["a" /* default */], null), pages_jsx(Charity_MilestoneBlock, null), pages_jsx("div", {
    id: "signup"
  })), pages_jsx(Footer["a" /* default */], null))));
}; // Index.getInitialProps = async function({ ctx }) {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();
//   console.log(`Show data fetched. Count: ${data.length}`);
//   return {
//     shows: data.map(entry => entry.show)
//   };
// };


/* harmony default export */ var pages = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "RUdj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// CONCATENATED MODULE: ./common/src/hooks/useOnClickOutside.js


function useOnClickOutside(ref, handler) {
  Object(external_react_["useEffect"])(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

/* harmony default export */ var hooks_useOnClickOutside = (useOnClickOutside);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./common/src/components/Input/input.style.js

const ComponentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "inputstyle__ComponentWrapper",
  componentId: "rbfkf4-0"
})(["display:flex;align-items:flex-start;"]);
const Input = external_styled_components_default.a.input.withConfig({
  displayName: "inputstyle__Input",
  componentId: "rbfkf4-1"
})(["width:calc(100% - 10px);height:65px;font-size:20px;font-weight:600;padding:0 20px;border:2px solid #f2f2f2;border-right-width:1px;border-radius:10px;color:#294859;@media only screen and (max-width:1440px){font-size:16px;height:60px;}&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{appearance:none;}&::placeholder{color:#616970;}"]);
const SelectWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "inputstyle__SelectWrapper",
  componentId: "rbfkf4-2"
})(["position:relative;width:180px;"]);
const CurrentOption = external_styled_components_default.a.div.withConfig({
  displayName: "inputstyle__CurrentOption",
  componentId: "rbfkf4-3"
})(["cursor:pointer;height:65px;display:flex;align-items:center;justify-content:center;padding:0 20px;border:2px solid #f2f2f2;border-left-width:1px;border-top-right-radius:10px;border-bottom-right-radius:10px;@media only screen and (max-width:1440px){height:60px;}.text{color:#294859;margin-right:20px;font-size:20px;font-weight:600;@media only screen and (max-width:1440px){font-size:16px;margin-right:15px;}}"]);
const Dropdown = external_styled_components_default.a.ul.withConfig({
  displayName: "inputstyle__Dropdown",
  componentId: "rbfkf4-4"
})(["position:absolute;left:0;top:65px;width:100%;border-radius:10px;opacity:0;visibility:hidden;background-color:#ffffff;box-shadow:0 3px 9px -2px rgba(0,0,0,0.2);overflow:hidden;z-index:2;&.active{opacity:1;visibility:visible;}li{cursor:pointer;font-size:18px;padding:15px 20px;color:#616970;border-bottom:2px solid #f2f2f2;transition:all 0.3s ease;@media only screen and (max-width:1440px){font-size:16px;}&:last-child{border-bottom:0;}&:hover{color:#294859;background-color:#f2f2f2;}&.selected{color:#294859;font-weight:600;}}"]);
/* harmony default export */ var input_style = (ComponentWrapper);
// CONCATENATED MODULE: ./common/src/components/Input/index.js







var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(source).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }






const InputComponent = ({
  className,
  inputType,
  placeholder,
  selectOptions,
  inputValue,
  inputOnChange,
  selectOnUpdate,
  selectedValue,
  currency
}) => {
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({
    open: false,
    currency,
    selectedValue
  });

  const handleDropdown = () => {
    setState(_objectSpread({}, state, {
      open: !state.open
    }));
  };

  const handleSelectedData = item => {
    setState(_objectSpread({}, state, {
      open: false,
      currency: item.title,
      selectedValue: item.value
    }));
    selectOnUpdate(item.value);
  };

  const dropdownRef = Object(external_react_["useRef"])(null);
  hooks_useOnClickOutside(dropdownRef, () => setState(_objectSpread({}, state, {
    open: false
  })));
  const addAllClasses = ['input_group'];

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(input_style, {
    className: addAllClasses.join(' ')
  }, __jsx(Input, {
    type: inputType,
    value: inputValue,
    placeholder: placeholder,
    onChange: inputOnChange,
    required: true,
    "aria-label": "input"
  }));
};

Input.propTypes = {
  /** className of the Input. */
  className: external_prop_types_default.a.string,

  /** inputType prop for input field type. This should be a number or text. */
  inputType: external_prop_types_default.a.oneOf(['number', 'text']),

  /** placeholder text for input field type. */
  placeholder: external_prop_types_default.a.string,

  /** Call back function for inout onChange event. */
  inputOnChange: external_prop_types_default.a.func,

  /** currency prop shoude be a string with currency name and symbol. */
  currency: external_prop_types_default.a.string,

  /** selectedValue pron shoube be a currency string without symbol but in lowercase. */
  selectedValue: external_prop_types_default.a.string,

  /** selectOptions prop contain a set of data in array of object form. It has 3 properties id, value and title. */
  selectOptions: external_prop_types_default.a.array,

  /** It contain selected data. */
  selectOnUpdate: external_prop_types_default.a.func
};
Input.defaultProps = {
  inputType: 'text',
  inputOnChange: () => {}
};
/* harmony default export */ var components_Input = __webpack_exports__["a"] = (InputComponent);

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

/***/ "RlXp":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.10' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "RxLT":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/image2-d536e2fff655f847bb3e6a28ac34b082.jpg";

/***/ }),

/***/ "S/pY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./reusecore/src/elements/Text/index.js
var Text = __webpack_require__("+g4l");

// EXTERNAL MODULE: ./reusecore/src/elements/Heading/index.js
var Heading = __webpack_require__("3AUV");

// EXTERNAL MODULE: ./common/src/components/BlogPost/index.js
var BlogPost = __webpack_require__("Z3R4");

// EXTERNAL MODULE: ./common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("y5yV");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./containers/Charity/FeatureSection/featureSection.style.js


const SectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "featureSectionstyle__SectionWrapper",
  componentId: "sc-1l5eqvv-0"
})(["width:100%;padding:81px 0;@media only screen and (max-width:1440px){padding:70px 0;}@media only screen and (max-width:1360px){padding:50px 0;}@media only screen and (max-width:991px){padding:40px 0;}"]);
const SectionHeader = external_styled_components_default.a.header.withConfig({
  displayName: "featureSectionstyle__SectionHeader",
  componentId: "sc-1l5eqvv-1"
})(["text-align:center;margin-bottom:90px;@media only screen and (max-width:1440px){margin-bottom:70px;}@media only screen and (max-width:991px){margin-bottom:54px;}h2{font-size:50px;font-weight:300;margin-bottom:12px;@media only screen and (max-width:1440px){font-size:36px;}@media only screen and (max-width:1360px){font-size:34px;}@media only screen and (max-width:991px){font-size:30px;margin-bottom:10px;}@media only screen and (max-width:767px){font-size:28px;}}p{font-size:18px;line-height:40px;margin-bottom:0;@media only screen and (max-width:1440px){font-size:16px;line-height:32px;}@media only screen and (max-width:991px){font-size:15px;line-height:28px;}}"]);
const FeatureWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "featureSectionstyle__FeatureWrapper",
  componentId: "sc-1l5eqvv-2"
})(["display:flex;flex-wrap:wrap;margin:-120px -35px 0;@media only screen and (max-width:1440px){margin:-70px -30px 0;}@media only screen and (max-width:1360px){margin:-50px -15px 0;}.blog_post{width:calc(100% / 3);padding:0 35px;display:flex;align-items:flex-start;margin-top:120px;@media only screen and (max-width:1440px){margin-top:70px;padding:0 30px;}@media only screen and (max-width:1360px){margin-top:50px;padding:0 15px;}@media only screen and (max-width:991px){width:calc(100% / 2);}@media only screen and (max-width:480px){width:100%;}.thumbnail{width:60px;margin-right:29px;flex-shrink:0;@media only screen and (max-width:1360px){width:42px;margin-right:20px;}}.content{h3{margin:0 0 14px;font-size:24px;font-weight:400;@media only screen and (max-width:1440px){font-size:22px;margin:0 0 10px;}@media only screen and (max-width:1360px){font-size:18px;}}p{margin:0;font-size:18px;line-height:28px;color:", ";@media only screen and (max-width:1440px){font-size:16px;}@media only screen and (max-width:1360px){font-size:15px;line-height:26px;}}}}"], Object(external_styled_system_["themeGet"])('colors.text', '#294859'));
/* harmony default export */ var featureSection_style = (SectionWrapper);
// EXTERNAL MODULE: ./common/src/data/Charity/index.js
var Charity = __webpack_require__("szdJ");

// CONCATENATED MODULE: ./containers/Charity/FeatureSection/index.js
var __jsx = external_react_default.a.createElement;








const FeatureSection = () => {
  const {
    title,
    slogan,
    features
  } = Charity["d" /* featureData */];
  return __jsx(featureSection_style, {
    id: "feature"
  }, __jsx(Container["a" /* default */], {
    width: "1260px"
  }, __jsx(SectionHeader, null, __jsx(Heading["a" /* default */], {
    content: title
  }), __jsx(Text["a" /* default */], {
    content: slogan
  })), __jsx(FeatureWrapper, null, features.map(item => __jsx(BlogPost["a" /* default */], {
    key: `option_key${item.id}`,
    thumbUrl: item.icon,
    title: item.title,
    excerpt: item.description
  })))));
};

/* harmony default export */ var Charity_FeatureSection = __webpack_exports__["a"] = (FeatureSection);

/***/ }),

/***/ "S2gz":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/slide1-f63e2859188e27a0efea6dc038be8ea2.jpg";

/***/ }),

/***/ "Sb4J":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("5gtE")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "SlSD":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("k04g");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "SpVz":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("URMm");
var defined = __webpack_require__("fmBZ");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "SzkQ":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("q+jx");
__webpack_require__("LdqJ");
module.exports = __webpack_require__("VrRS").f('iterator');


/***/ }),

/***/ "Szsc":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeBAMAAAAm3NivAAAAD1BMVEUAAADf3+/X1+PX1+PW1+KMwxDoAAAABHRSTlMAED9AgbeuRgAAACZJREFUGNNjcIEAYyjNwDCsBYwhQBBKMzAYKYGBIIRSGubeRxcAAGM1co2aYKfhAAAAAElFTkSuQmCC"

/***/ }),

/***/ "TFPr":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "TSG6":
/***/ (function(module, exports) {



/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "U6F6":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("O4Se");
var hiddenKeys = __webpack_require__("sejL").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "U7nQ":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1OS45OTkiIGhlaWdodD0iNTciPjxnIGRhdGEtbmFtZT0iVmVjdG9yIFNtYXJ0IE9iamVjdCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyNi4wMDEgLTIyOC44NDUpIj48ZWxsaXBzZSBkYXRhLW5hbWU9IkVsbGlwc2UgMiIgY3g9IjEzLjQwOSIgY3k9IjEzLjQ3OSIgcng9IjEzLjQwOSIgcnk9IjEzLjQ3OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQyLjU2IDIyOS42OTEpIiBmaWxsPSIjZmY1MDUwIi8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDUwIiBkPSJNMjQ0LjkgMjQzLjE3YTEzLjQ1MSAxMy40NTEgMCAwMTEyLjIzNy0xMy40MjdxLS41NzktLjA1MS0xLjE3MS0uMDUyYTEzLjQ3OSAxMy40NzkgMCAwMDAgMjYuOTU4cS41OTMgMCAxLjE3MS0uMDUyQTEzLjQ1MSAxMy40NTEgMCAwMTI0NC45IDI0My4xN3oiIGZpbGw9IiNlZTNlM2UiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggNTEiIGQ9Ik0yNjEuMjA3IDI0MS4wOTRIMjU4LjNhLjI0Ni4yNDYgMCAwMS0uMjQ1LS4yNDZ2LTIuOTI4YTIuMTE0IDIuMTE0IDAgMDAtMi4yNTktMi4xNTYgMi4wODkgMi4wODkgMCAwMC0xLjkgMi4wODZ2M2EuMjQ2LjI0NiAwIDAxLS4yNDYuMjQ3aC0yLjkxMmEyLjExNSAyLjExNSAwIDAwLTIuMTQ0IDIuMjcxIDIuMDg2IDIuMDg2IDAgMDAyLjA3NCAxLjkxNWgyLjg5NGEuMzM1LjMzNSAwIDAxLjMzNC4zMzZ2Mi44MzlhMi4xMTMgMi4xMTMgMCAwMDIuMjU4IDIuMTU1IDIuMDg4IDIuMDg4IDAgMDAxLjkwNi0yLjA4NXYtMi45MzJhLjMxMi4zMTIgMCAwMS4zMTEtLjMxM2gyLjkxNmEyLjA4NyAyLjA4NyAwIDAwMi4wNzUtMS45MTUgMi4xMTYgMi4xMTYgMCAwMC0yLjE1NS0yLjI3NHoiIGZpbGw9IiMwMGMzZmYiLz48ZyBkYXRhLW5hbWU9Ikdyb3VwIDUiIGZpbGw9IiMwNmIwZjIiPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCA1MiIgZD0iTTI1MC45MjYgMjQzLjM2NGEyLjExNiAyLjExNiAwIDAxMi4xNDUtMi4yNzFoLTIuMzQyYTIuMTE1IDIuMTE1IDAgMDAtMi4xNDUgMi4yNzEgMi4wODcgMi4wODcgMCAwMDIuMDc1IDEuOTE1SDI1M2EyLjA4NyAyLjA4NyAwIDAxLTIuMDc0LTEuOTE1eiIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCA1MyIgZD0iTTI1Ni4yMjggMjQwLjg0NnYtM2EyLjA5MiAyLjA5MiAwIDAxLjktMS43MjMgMi4wMjEgMi4wMjEgMCAwMC0xLjM0LS4zNjMgMi4wODkgMi4wODkgMCAwMC0xLjkgMi4wODZ2M2EuMjQ2LjI0NiAwIDAxLS4yNDYuMjQ3aDIuMzQyYS4yNDYuMjQ2IDAgMDAuMjQ0LS4yNDd6Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDU0IiBkPSJNMjU2LjIyOCAyNDguNDUzdi0yLjgzOGEuMzM0LjMzNCAwIDAwLS4zMzQtLjMzNmgtMi4zNDJhLjMzNS4zMzUgMCAwMS4zMzQuMzM2djIuODM4YTIuMTE0IDIuMTE0IDAgMDAyLjI1OSAyLjE1NiAyLjA1OSAyLjA1OSAwIDAwMS0uMzYzIDIuMTgzIDIuMTgzIDAgMDEtLjkxNy0xLjc5M3oiLz48L2c+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDU1IiBkPSJNMjMxLjg4OCAyNDYuODE5bDMuMzMzIDguMDUzYy4yODMtLjU3NS4yLS4yMjYuNzUyLTcuOTY3YTIuNDM2IDIuNDM2IDAgMDAtNC42My0xLjIzNiA0LjM0IDQuMzQgMCAwMS41NDUgMS4xNXoiIGZpbGw9IiNlNTk3NzAiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggNTYiIGQ9Ik0yMzMuODQgMjQ2LjgwOGMtLjAxMi0uMDM2LS4wMzUtLjExMi0uMDczLS4yMTRhMS43MjEgMS43MjEgMCAwMS43NzEtMi4xIDIuNDA3IDIuNDA3IDAgMDAtLjgyMi0uMjExIDIuNDM3IDIuNDM3IDAgMDAtMi4zNzQgMS4zODYgNC4zMjIgNC4zMjIgMCAwMS41NDYgMS4xNWwzLjMzMyA4LjA1M2MuMjctLjU0OS4yMjktLjY2My40NDMtMy42NTQtLjAwNi0uMDE4LTEuODE5LTQuMzk0LTEuODI0LTQuNDF6IiBmaWxsPSIjZGQ4NTVmIi8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDU3IiBkPSJNMjQwLjE3MyAyNzAuMTI5YTQuOTA4IDQuOTA4IDAgMDEuOTg2IDIuNjA5bC4xMDggMS42MDkgMTAuMTg3LS43NWEzNi43MjEgMzYuNzIxIDAgMDAtMS4wOTEtNi41NzRjLS42MzMtMi4zNjItMS4xNDUtMy4wNTQtMy45ODMtNi41OTEtLjk0OS0xLjEzOC0xLjY5My0xLjQzMS03LjE3OS00LjUwOWEyLjI3NiAyLjI3NiAwIDAwLTMuMTI3LjcyNmwtNC4wNjktOS44MjljLS4wNjgtLjItLjc4LTIuNzIxLTMuMTItMi4xNTctMi4xNDguNTkyLTEuODE4IDIuOTE1LTEuNzI2IDMuMzU1bDMuNzcyIDEzLjk0NGE2LjA0NiA2LjA0NiAwIDAwMi43MyAzLjgyN2M1LjEyNiAyLjg3NSA1LjM3OSAyLjg0NiA2LjUxMiA0LjM0eiIgZmlsbD0iI2YwYTQ3OSIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCA1OCIgZD0iTTI0My41IDI3Mi43MzhhNC45MDggNC45MDggMCAwMC0uOTg2LTIuNjA5Yy0xLjE0LTEuNS0xLjQ0NS0xLjUtNi41MTItNC4zNDFhNi4wMDggNi4wMDggMCAwMS0yLjczLTMuODI5bC0zLjc3Mi0xMy45NDJjLS4wODMtLjQtLjM1Ny0yLjMxOCAxLjE1Ny0zLjEyOWEyLjI2NCAyLjI2NCAwIDAwLTEuNzczLS4yMjVjLTIuMTQ4LjU5Mi0xLjgxOCAyLjkxNC0xLjcyNiAzLjM1NWwzLjc3MiAxMy45NDNhNi4wNDkgNi4wNDkgMCAwMDIuNzMgMy44MjdsNC40IDIuNDY2YTUuNzgyIDUuNzgyIDAgMDEzLjEgNC40ODNsLjEwOCAxLjYwOSAyLjMzMS0uMTcyeiIgZmlsbD0iI2U1OTc3MCIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCA1OSIgZD0iTTI0MC42NzIgMjg0LjkyNmgxMi44NzhhLjk5MS45OTEgMCAwMC45ODQtMS4wNjZsLS43LTkuNTczYS45NzkuOTc5IDAgMDAtMS4wNDUtLjkwN2wtMTIuODQ0Ljk0NmEuOTc5Ljk3OSAwIDAwLS45IDEuMDVsLjYyNyA4LjYxNmExIDEgMCAwMDEgLjkzNHoiIGZpbGw9IiNmZmM4NTAiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggNjAiIGQ9Ik0yNDIuMDY5IDI4NC40bC0uNjgxLTkuMzM5YTEuMDY0IDEuMDY0IDAgMDEuMzQ2LS44NjVsLTEuNzg2LjEzMWEuOTguOTggMCAwMC0uOSAxLjA1bC42MjggOC42MTZhMSAxIDAgMDAxIC45MzNoMS41NzhhMS4xIDEuMSAwIDAxLS4xODUtLjUyNnoiIGZpbGw9IiNmOWI5MzgiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggNjEiIGQ9Ik0yODAuNDgyIDI0Ni44MTlsLTMuMzM0IDguMDUzYTIuNDc4IDIuNDc4IDAgMDEtLjI0Ni0uOTA4bC0uNTA2LTcuMDU5YTIuNDM3IDIuNDM3IDAgMDE0LjYzMS0xLjIzNiA0LjMzOSA0LjMzOSAwIDAwLS41NDUgMS4xNXoiIGZpbGw9IiNlNTk3NzAiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggNjIiIGQ9Ik0yNzguNzE1IDI0Ni45MDZhMi40NTQgMi40NTQgMCAwMTEuMjczLTIuMzMyIDIuNDIxIDIuNDIxIDAgMDAtMS4zMzQtLjI5MSAyLjQ0OCAyLjQ0OCAwIDAwLTIuMjU4IDIuNjIzbC41MDYgNy4wNTlhMi40NzggMi40NzggMCAwMC4yNDYuOTA4bDEuODIyLTQuNHoiIGZpbGw9IiNkZDg1NWYiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggNjMiIGQ9Ik0yNzIuMiAyNzAuMTI5YTQuOTA2IDQuOTA2IDAgMDAtLjk4NSAyLjYwOWwtLjEwOSAxLjYwOS0xMC4xODctLjc1YTM2LjYzNSAzNi42MzUgMCAwMTEuMDkyLTYuNTc0Yy42MzMtMi4zNjIgMS4xNDQtMy4wNTQgMy45ODItNi41OTEuOTQ5LTEuMTM4IDEuNjk0LTEuNDMxIDcuMTgtNC41MDlhMi4yNzcgMi4yNzcgMCAwMTMuMTI3LjcyNmw0LjA2OS05LjgyOWMuMDY4LS4yLjc3OS0yLjcyMSAzLjExOS0yLjE1NyAyLjE0OC41OTIgMS44MTkgMi45MTUgMS43MjYgMy4zNTUgMCAuMDA3LTMuNzcgMTMuOTM5LTMuNzcyIDEzLjk0NWE2LjA0NiA2LjA0NiAwIDAxLTIuNzMgMy44MjdjLTUuMTI5IDIuODc0LTUuMzgyIDIuODQ1LTYuNTEyIDQuMzM5eiIgZmlsbD0iI2YwYTQ3OSIvPjxnIGRhdGEtbmFtZT0iR3JvdXAgNiIgZmlsbD0iI2U1OTc3MCI+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDY0IiBkPSJNMjc4LjE2OSAyNTcuMDY5bDQuMDY5LTkuODI5Yy4wNTYtLjE2OS41NTYtMS45MjggMi4wNTktMi4yYTIuNTY0IDIuNTY0IDAgMDAtLjgxMy0uMzc2Yy0yLjM0LS41NjQtMy4wNTEgMS45NTMtMy4xMiAyLjE1N2wtMy44IDkuMTg3YTIuNSAyLjUgMCAwMTEuNjA1IDEuMDYxeiIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCA2NSIgZD0iTTI2My44OCAyNjcuNDQzYy42MzMtMi4zNjIgMS4xNDQtMy4wNTQgMy45ODItNi41OTEuOTQ5LTEuMTM4IDEuNjk0LTEuNDMxIDcuMTgtNC41MDlhMi45IDIuOSAwIDAxLjctLjI4OCAyLjE2NCAyLjE2NCAwIDAwLTIuNTc0LS4xMzNjLTUuNDg2IDMuMDc3LTYuMjMxIDMuMzcxLTcuMTggNC41MDktMi44MzggMy41MzctMy4zNSA0LjIyOS0zLjk4MyA2LjU5MWEzNi43MiAzNi43MiAwIDAwLTEuMDkxIDYuNTc0bDEuOS4xNGEzNi40NzkgMzYuNDc5IDAgMDExLjA2Ni02LjI5M3oiLz48L2c+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDY2IiBkPSJNMjcxLjcgMjg0LjkyNmgtMTIuODhhLjk5MS45OTEgMCAwMS0uOTg1LTEuMDY2bC43LTkuNTczYS45NzguOTc4IDAgMDExLjA0NS0uOTA3bDEyLjg0NC45NDZhLjk4Ljk4IDAgMDEuOSAxLjA1bC0uNjI4IDguNjE2YTEgMSAwIDAxLS45OTYuOTM0eiIgZmlsbD0iI2ZmYzg1MCIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCA2NyIgZD0iTTI2MC4xNzcgMjgzLjg2bC43LTkuNTczYS45OC45OCAwIDAxLjQ4Mi0uNzc1bC0xLjc4LS4xMzJhLjk3OC45NzggMCAwMC0xLjA0NC45MDhsLS43IDkuNTcyYS45OTEuOTkxIDAgMDAuOTg0IDEuMDY2aDIuMzQzYS45OTEuOTkxIDAgMDEtLjk4NS0xLjA2NnoiIGZpbGw9IiNmOWI5MzgiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggNjgiIGQ9Ik0yNTQuNTI4IDI3NC4yNmExLjg1NiAxLjg1NiAwIDAwLTEuOTg1LTEuNzIzbC0uNDc1LjAzNGEzNi4yODYgMzYuMjg2IDAgMDAtMS4wNDEtNS43NDJjLS42NzktMi41MzQtMS4zLTMuMzczLTQuMTQ3LTYuOTE2bC0uMDExLS4wMTNjLTEuMDY5LTEuMjgtMS44NzktMS42LTcuNDI1LTQuNzEyYTMuMDcyIDMuMDcyIDAgMDAtMy4yMjgtLjAxM2wtLjExMi0uMjY5YTMuMzM3IDMuMzM3IDAgMDAuMTcyLS44NDFsLjUwNi03LjA1OWEzLjMyNyAzLjMyNyAwIDAwLTMuMDctMy41NjYgMy4yODUgMy4yODUgMCAwMC0yLjUyMy45MDdjLTIuMDktMS41NjYtNS45LS4wMzgtNS4wNzMgMy44ODkuMDA4LjAzOCAzLjc2NyAxMy45MzMgMy43NzcgMTMuOTdhNi45OTIgNi45OTIgMCAwMDMuMTIgNC4zNjljLjA5NC4wNTggMi4wODYgMS4xNjMgMi4xODMgMS4yMTcgMy4wMTIgMS42NzEgMy4yNTggMS44MDcgNC4wOTQgMi45MDlhNC41MDcgNC41MDcgMCAwMS44NTMgMi43NDhsLS40NDQuMDMzYTEuODYzIDEuODYzIDAgMDAtMS43MTMgMmwuNjI3IDguNjE1YTEuODkxIDEuODkxIDAgMDAxLjg3NCAxLjc1MWgxMi44NzhhMS44NzMgMS44NzMgMCAwMDEuODYxLTIuMDEzem0tMTkuNS0yNy4zODFsLS4zMzIgNC42MjljLTIuNC01LjgwNy0yLjE3MS01LjM1NC0yLjM5MS01Ljc4NWExLjU2MiAxLjU2MiAwIDAxMi43MjUgMS4xNTZ6bS0xLjEwNiAxOC4xODZhNS4wOSA1LjA5IDAgMDEtMi4zMy0zLjNsLTMuNzY0LTEzLjkxN2MtLjA3My0uMzY0LS4yOTEtMS45IDEuMDktMi4yOTRhMS40MTggMS40MTggMCAwMTEuNjMzLjY1NGMuMTgxLjI2My0uMjQ3LS43MTQgNC4zNjUgMTAuNDI4YTIuNjg4IDIuNjg4IDAgMDAuODU4IDMuMzM4YzEuNDE4IDEuMDggNC43ODYgMy42NjcgNC44MiAzLjY5M2EuODc0Ljg3NCAwIDAwMS4yMzEtLjE2NS44ODcuODg3IDAgMDAtLjE2NC0xLjIzOGMtLjAzNC0uMDI2LTMuNC0yLjYxNS00LjgyNi0zLjctLjgzNi0uNjM3LS4yODctMS41MzcuMzI0LTEuOWExLjMyIDEuMzIgMCAwMTEuNDI4LjA2NmM1LjM5MiAzLjAyNSA2LjEgMy4zMDggNi45MjkgNC4zIDIuODQ0IDMuNTQ2IDMuMjQgNC4xMjUgMy44MTMgNi4yNjFhMzQuMjIzIDM0LjIyMyAwIDAxLjk4NCA1LjQxMWwtOC40Mi42MmE2LjE4NyA2LjE4NyAwIDAwLTEuMjA4LTMuNjljLTEuMjU1LTEuNjU5LTEuNjg1LTEuNzItNi43NjEtNC41Njd6bTE5LjUyMSAxOC45NzhhLjEuMSAwIDAxLS4wOC4wMzVoLTEyLjg3NmEuMTIzLjEyMyAwIDAxLS4xMjItLjExNGwtLjYyOC04LjYxNmEuMS4xIDAgMDEuMDkxLS4xbDEyLjg0NC0uOTQ2aC4wMDhhLjA5NC4wOTQgMCAwMS4wNjMuMDI0LjEuMSAwIDAxLjAzMy4wNjdsLjcgOS41NzJhLjEwOC4xMDggMCAwMS0uMDMxLjA3OHoiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggNjkiIGQ9Ik0yODAuODEyIDI0NC4zNDdhMy4zMiAzLjMyIDAgMDAtNS41OTMgMi42NTlsLjUwNiA3LjA1OWEzLjMzNSAzLjMzNSAwIDAwLjE3MS44NDFsLS4xMTEuMjY5YTMuMDcyIDMuMDcyIDAgMDAtMy4yMjkuMDEzYy01LjU1MiAzLjExMy02LjM1OCAzLjQzNC03LjQyNCA0LjcxMmwtLjAxMS4wMTNjLTIuODQzIDMuNTQzLTMuNDY4IDQuMzgyLTQuMTQ3IDYuOTE2YTM2LjI2NiAzNi4yNjYgMCAwMC0xLjA0MSA1Ljc0MmwtLjQ3Ni0uMDM1YTEuODU2IDEuODU2IDAgMDAtMS45ODQgMS43MjNsLS43IDkuNTczYTEuODczIDEuODczIDAgMDAxLjg2MSAyLjAxM2g0LjcxYS44ODMuODgzIDAgMDAwLTEuNzY2aC00LjcxYS4xLjEgMCAwMS0uMDgtLjAzNS4xLjEgMCAwMS0uMDI5LS4wODJsLjctOS41NzNhLjEuMSAwIDAxLjAzMy0uMDY2LjEuMSAwIDAxLjA3MS0uMDI0bDEyLjg0NC45NDZhLjEuMSAwIDAxLjA5LjEwNmwtLjYyNyA4LjYxNmEuMTI0LjEyNCAwIDAxLS4xMjIuMTE0aC00LjA2OWEuODgzLjg4MyAwIDAwMCAxLjc2Nmg0LjA2OWExLjg4OSAxLjg4OSAwIDAwMS44NzMtMS43NTFsLjYyOC04LjYxNmExLjg2MyAxLjg2MyAwIDAwLTEuNzEzLTJsLS40NDQtLjAzMi4wNDQtLjYxMWE0LjAxOSA0LjAxOSAwIDAxLjgwOS0yLjEzOGMxLjAwOC0xLjMyOSAxLjE2OC0xLjI1OSA2LjI0MS00LjFsLjAzNi0uMDIyYTYuOTg5IDYuOTg5IDAgMDAzLjEyLTQuMzY5bDMuNzY2LTEzLjkyMWMwLS4wMTYuMDA4LS4wMzIuMDExLS4wNDkuODI2LTMuOTM4LTIuOTg1LTUuNDU2LTUuMDczLTMuODkxem0tMy44NDIgMi41MzJhMS41NjIgMS41NjIgMCAwMTIuNzIzLTEuMTU2Yy0uMTg5LjM3My4xOTQtLjQ1OC0yLjM5IDUuNzg1em03LjIuOTY5Yy0uMDExLjA0LTMuNzY4IDEzLjkyOC0zLjc3NyAxMy45NjhhNS4xMjEgNS4xMjEgMCAwMS0yLjMxNyAzLjI0OWMtNS4wNzggMi44NDctNS41MDYgMi45MDgtNi43NjQgNC41NjZhNi4yIDYuMiAwIDAwLTEuMjA3IDMuNjlsLTguNDIxLS42MmEzNC4zNyAzNC4zNyAwIDAxLjk4NS01LjQxMmMuNTcyLTIuMTM2Ljk2OC0yLjcxNCAzLjgxMy02LjI2LjgyOC0uOTkgMS41MzctMS4yNzQgNi45MjktNC4zYTEuMzY4IDEuMzY4IDAgMDExLjk1NS40MjRsLjAwNS4wMDcuMDA5LjAxNWEuOTUxLjk1MSAwIDAxLS4yMTggMS4zOTEgMTUwNS41OCAxNTA1LjU4IDAgMDAtNC44MjUgMy43Ljg4Ni44ODYgMCAwMC0uMTY1IDEuMjM3Ljg3Ni44NzYgMCAwMDEuMjMxLjE2NmMuMDM0LS4wMjYgMy40LTIuNjE0IDQuODItMy42OTRhMi42ODYgMi42ODYgMCAwMC44NTktMy4zMzdjNS4zLTEyLjgwOSAzLjkzLTkuNTg2IDQuNDE5LTEwLjUyMS45NDEtMS4yNDggMy4xMjktLjU3MSAyLjY3IDEuNzMxeiIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCA3MCIgZD0iTTI1Ni4wMDUgMjUxLjUzNmEyLjk3MSAyLjk3MSAwIDAwMi45Ni0yLjk3NnYtMi4zNmgyLjM0OWEyLjk3NiAyLjk3NiAwIDAwMC01Ljk1MmgtMi4zNDl2LTIuMzYxYTIuOTYxIDIuOTYxIDAgMTAtNS45MjEgMHYyLjM2MUgyNTAuN2EyLjk3NiAyLjk3NiAwIDAwMCA1Ljk1MmgyLjM0OXYyLjM2MWEyLjk3MiAyLjk3MiAwIDAwMi45NTYgMi45NzV6bS01LjMxLTcuMWExLjIxIDEuMjEgMCAwMTAtMi40MjFoMy4yMjdhLjg4Ljg4IDAgMDAuODc5LS44ODN2LTMuMjQ0YTEuMiAxLjIgMCAxMTIuNDA3IDB2My4yNDRhLjg4Ljg4IDAgMDAuODc5Ljg4M2gzLjIyN2ExLjIxIDEuMjEgMCAwMTAgMi40MjFoLTMuMjI3YS44ODEuODgxIDAgMDAtLjg3OS44ODN2My4yNDVhMS4yIDEuMiAwIDExLTIuNDA3IDB2LTMuMjQ1YS44OC44OCAwIDAwLS44NzgtLjg4M3oiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggNzEiIGQ9Ik0yNzAuMTI3IDI0NS4zOTFhLjg3OS44NzkgMCAxMC0xLjczNy0uMjY2IDEyLjU5NCAxMi41OTQgMCAxMTAtMy44NTIuODc4Ljg3OCAwIDEwMS43MzYtLjI2OSAxNC40MDcgMTQuNDA3IDAgMTAwIDQuMzg4eiIvPjwvZz48L3N2Zz4="

/***/ }),

/***/ "UEkk":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/slide2-6ad0d5b2004cafb7a851bd13b94da4b6.jpg";

/***/ }),

/***/ "URMm":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("TFPr");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "UbIB":
/***/ (function(module, exports) {

module.exports = require("@glidejs/glide");

/***/ }),

/***/ "UoEw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataToArray = dataToArray;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.transformArguments = transformArguments;
function dataToArray(vars) {
  if (Array.isArray(vars)) {
    return vars;
  }
  return [vars];
}
var transitionEndObject = {
  transition: 'transitionend',
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'oTransitionEnd otransitionend'
};
var transitionStr = exports.transitionStr = Object.keys(transitionEndObject).filter(function (key) {
  if (typeof document === 'undefined') {
    return false;
  }
  var html = document.getElementsByTagName('html')[0];
  return key in (html ? html.style : {});
})[0];
var transitionEnd = exports.transitionEnd = transitionEndObject[transitionStr];

function addEventListener(target, eventType, callback, options) {
  if (target.addEventListener) {
    target.addEventListener(eventType, callback, options);
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, callback);
  }
}

function removeEventListener(target, eventType, callback, options) {
  if (target.removeEventListener) {
    target.removeEventListener(eventType, callback, options);
  } else if (target.attachEvent) {
    target.detachEvent('on' + eventType, callback);
  }
}

function transformArguments(arg, cb) {
  var result = void 0;
  if (typeof arg === 'function') {
    result = arg(cb);
  } else {
    result = arg;
  }
  if (Array.isArray(result)) {
    if (result.length === 2) {
      return result;
    }
    return [result[0], result[1]];
  }
  return [result];
}

var isNumeric = exports.isNumeric = function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value); // eslint-disable-line
};

/***/ }),

/***/ "UsSw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__("Dgi7");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__("bVxY");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__("zj13");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "V5GS":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "VcVh":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/feather/chevronRight");

/***/ }),

/***/ "VrRS":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("eMt4");


/***/ }),

/***/ "W4SU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("YJ+P");
var has = __webpack_require__("zuNl");
var DESCRIPTORS = __webpack_require__("Sb4J");
var $export = __webpack_require__("HZWW");
var redefine = __webpack_require__("cXwa");
var META = __webpack_require__("0NR3").KEY;
var $fails = __webpack_require__("5gtE");
var shared = __webpack_require__("b1Ik");
var setToStringTag = __webpack_require__("5/jO");
var uid = __webpack_require__("9TH4");
var wks = __webpack_require__("eMt4");
var wksExt = __webpack_require__("VrRS");
var wksDefine = __webpack_require__("NwPs");
var enumKeys = __webpack_require__("I9JL");
var isArray = __webpack_require__("696L");
var anObject = __webpack_require__("fuSu");
var isObject = __webpack_require__("32kt");
var toObject = __webpack_require__("LEjr");
var toIObject = __webpack_require__("SpVz");
var toPrimitive = __webpack_require__("ZVDG");
var createDesc = __webpack_require__("DZbi");
var _create = __webpack_require__("Bo4g");
var gOPNExt = __webpack_require__("pzkD");
var $GOPD = __webpack_require__("WiEA");
var $GOPS = __webpack_require__("Paac");
var $DP = __webpack_require__("GEZW");
var $keys = __webpack_require__("NUOY");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("U6F6").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("8iw8").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("3Of7")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("5l+C")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "WD0w":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("HZWW");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("Sb4J"), 'Object', { defineProperty: __webpack_require__("GEZW").f });


/***/ }),

/***/ "WiEA":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("8iw8");
var createDesc = __webpack_require__("DZbi");
var toIObject = __webpack_require__("SpVz");
var toPrimitive = __webpack_require__("ZVDG");
var has = __webpack_require__("zuNl");
var IE8_DOM_DEFINE = __webpack_require__("6kqf");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("Sb4J") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


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

/***/ "X42j":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI1NyI+PGcgZGF0YS1uYW1lPSJWZWN0b3IgU21hcnQgT2JqZWN0Ij48cGF0aCBkYXRhLW5hbWU9IlBhdGggMSIgZD0iTTM2LjAwMSAyMC4zYTggOCAwIDExLTE0LjU3OS00LjYwOCA3LjkzOSA3LjkzOSAwIDAxNi4zOS0zLjUxMWguMTg5YTcuOTkzIDcuOTkzIDAgMDExLjAxLjA2MSAyLjk4OCAyLjk4OCAwIDAwMi44IDEuOTY5aDEuNDhhOC4xNDYgOC4xNDYgMCAwMTIuNzEgNi4wODl6IiBmaWxsPSIjZmZkNDIyIi8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDIiIGQ9Ik0xMy4zMTQgNTMuMjA2bC0yLjA5Ljc3MS01LjQzIDIuMDEtNC43OTMtMTMuMzUzIDUuNDI5LTIuMDEgMi4wOS0uNzcxeiIgZmlsbD0iIzVhYWFlNyIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAzIiBkPSJNMjAuNDgzIDQ5LjQ3bC42OSAxLjkwOS03LjUxOSAyLjc4LS4zNC0uOTU0LTQuNzktMTMuMzU3LS4zNC0uOTU0IDcuNTA5LTIuNzcuNjkgMS45MDd6IiBmaWxsPSIjMWU4MWNlIi8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDQiIGQ9Ik01OS4wMDEgMS4wMTV2MTYuMjM5aC02VjEuMDE1eiIgZmlsbD0iIzNkOWFlMiIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCA1IiBkPSJNMzkuODYxIDQwLjE1M2w3LjE5LTIuNjQ4YTIuODgzIDIuODgzIDAgMDEyLjI4OS4xIDMuMDYzIDMuMDYzIDAgMDEtLjIzOSA1LjYxM2wtMTcuODQ5IDYuNi0yLjgyIDEuMDQ0LTYuMDY5LTIuMDgtMS44OC42ODktNC4xLTExLjQzOSA3LjQ3LTIuNzYgMi4zMjkuNDE2IDExLjI2IDIuMDE5YTMuMDE0IDMuMDE0IDAgMDEyLjMgMS45NTkgMi42NDYgMi42NDYgMCAwMS4xMTkuNDg3eiIgZmlsbD0iI2ZmZGFhYSIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCA2IiBkPSJNNTMuMDAxIDQuMDYxdjEwLjE1aC0yLjE5YzAgMi4yNDItMyA0LjA1OS02IDQuMDU5cy02LTEuODE3LTYtNC4wNTloLTdhMi45ODggMi45ODggMCAwMS0yLjgtMS45NjkgNy45OTMgNy45OTMgMCAwMC0xLjAxLS4wNjFoLS4xODlhNy45MzkgNy45MzkgMCAwMC02LjM5IDMuNTExIDIuODE0IDIuODE0IDAgMDEtMS0uOTUzIDMuMDI4IDMuMDI4IDAgMDEuNDktMy42ODVsOC4xMzktOC4yNTNhNS45MzIgNS45MzIgMCAwMTQuMjQtMS43ODZoMTAuNTJsNyAzLjA0NXoiIGZpbGw9IiNmZmRhYWEiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggNyIgZD0iTTUxLjAwMSA0LjA2MWgydjEwLjE1aC0yeiIgZmlsbD0iI2YxY2ZhMiIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCA4IiBkPSJNMTMuMzE0IDUzLjIwNmwtMi4wOS43NzEtNC43LTEzLjExNC0uMDktLjI0NCAyLjA5LS43NzF6IiBmaWxsPSIjM2Q5YWUyIi8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDkiIGQ9Ik01OS4wMDEgMGgtNmExLjAwOCAxLjAwOCAwIDAwLTEgMS4wMTV2Mi4wM2gtLjk4NEw0NC4yMDIuMDgyYS45NzUuOTc1IDAgMDAtLjM5LS4wODJoLTEwLjUyYTYuOTY5IDYuOTY5IDAgMDAtNC45NDcgMi4wODJsLTguMTQ0IDguMjUyYTQuMDU0IDQuMDU0IDAgMDAtLjYxOSA0Ljk2IDQuMTYgNC4xNiAwIDAwLjUzMy42NDcgOS4xNzYgOS4xNzYgMCAwMDQuOTg3IDEzLjAyOCA4LjkyMiA4LjkyMiAwIDAwMTAuMDQ0LTMuMDk1IDkuMjQ3IDkuMjQ3IDAgMDAuMzIzLTEwLjY0OWgyLjQ4M2MuNzE1IDIuNDM1IDMuOTMgNC4wNTkgNi44NTIgNC4wNTlzNi4xMzctMS42MjQgNi44NTMtNC4wNTloLjM0NHYyLjAyOWExLjAwNyAxLjAwNyAwIDAwMSAxLjAxNWg2YTEuMDA3IDEuMDA3IDAgMDAxLTEuMDE1VjEuMDE1YTEuMDA4IDEuMDA4IDAgMDAtMS0xLjAxNXptLTI0IDIwLjNhNyA3IDAgMTEtMTIuNzU0LTQuMDM0IDYuOTQ3IDYuOTQ3IDAgMDE1LjU2NS0zLjA3MWguMTg5Yy4xMjUgMCAuMjQ4LjAxNi4zNzMuMDIyYTMuODkgMy44OSAwIDAwMy40MzIgMi4wMDhoMS4wNzlhNy4xNCA3LjE0IDAgMDEyLjExNiA1LjA3NXptMTUuOC03LjFhMS4wMDcgMS4wMDcgMCAwMC0xIDEuMDE1YzAgMS41MzctMi40NzUgMy4wNDQtNSAzLjA0NHMtNS0xLjUwNy01LTMuMDQ0YTEuMDA3IDEuMDA3IDAgMDAtMS0xLjAxNWgtN2EyLjAzIDIuMDMgMCAwMTAtNC4wNmgxMVY3LjExaC0xMWE0LjAzMSA0LjAzMSAwIDAwLTQgNC4wNmgtLjAxNmE4Ljk0NyA4Ljk0NyAwIDAwLTYuNSAzLjA1NmMtLjAwOC0uMDEtLjAxOC0uMDE4LS4wMjYtLjAzYTIuMDE1IDIuMDE1IDAgMDEuMzU1LTIuNDE5bDguMTQyLTguMjU3YTQuOTYyIDQuOTYyIDAgMDEzLjUzLTEuNDg1aDEwLjMxNWw2LjgxIDIuOTYyYS45ODEuOTgxIDAgMDAuMzk1LjA4MmgxLjE5NVYxMy4yem03LjIgMy4wNDRoLTRWMi4wMzRoNHoiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggMTAiIGQ9Ik0yNy4wMDEgMTcuMjU1aDJhMS4wMDcgMS4wMDcgMCAwMTEgMS4wMTVoMmEzLjAyMiAzLjAyMiAwIDAwLTMtMy4wNDR2LTEuMDE1aC0ydjEuMDE1YTMuMDQ1IDMuMDQ1IDAgMDAwIDYuMDg5aDJhMS4wMTUgMS4wMTUgMCAwMTAgMi4wM2gtMmExLjAwNyAxLjAwNyAwIDAxLTEtMS4wMTVoLTJhMy4wMjMgMy4wMjMgMCAwMDMgMy4wNDV2MS4wMTVoMnYtMS4wMTVhMy4wNDYgMy4wNDYgMCAwMDAtNi4wOWgtMmExLjAxNSAxLjAxNSAwIDAxMC0yLjAzeiIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAxMSIgZD0iTTQ5Ljc2NSAzNi42ODNhMy45MTEgMy45MTEgMCAwMC0zLjA1Ny0uMTM3bC02LjIzMyAyLjNhNC4wMjEgNC4wMjEgMCAwMC0yLjg2My0yLjE0NmwtMTMuNTg5LTIuNDM2YS45NTQuOTU0IDAgMDAtLjUxNC4wNDZsLTYuNTMxIDIuNDEzLS4zNDMtLjk1NGEuOTk0Ljk5NCAwIDAwLTEuMjgtLjYwOWwtNy41MTggMi43ODNhMS4wMiAxLjAyIDAgMDAtLjYgMS4zTC42NiA0MS42NzlhMS4wMTkgMS4wMTkgMCAwMC0uNiAxLjNsNC43OTQgMTMuMzVhMSAxIDAgMDAuOTM5LjY2OC45NTMuOTUzIDAgMDAuMzQxLS4wNTlsNi41NzgtMi40MzZhMS4wMSAxLjAxIDAgMDAuNTE2LjU3NS45ODYuOTg2IDAgMDAuNzY1LjAzNWw3LjUxNy0yLjc3OGExLjAyIDEuMDIgMCAwMC42LTEuM2wtLjM0Mi0uOTU0LjYxLS4yMjQgNS43MzMgMS45NjVhMSAxIDAgMDAuNjYzLS4wMDhsMi44MTgtMS4wNDEgMTcuODUzLTYuNmE0LjA4MyA0LjA4MyAwIDAwLjMyMi03LjQ5MnpNMTIuMDI4IDUyLjU5OEw2LjM5IDU0LjY4MSAyLjI4NiA0My4yMzRsNS42MzgtMi4wODZ6bTIuMjIyLjI2TDkuNDYxIDM5LjUwNWw1LjY0My0yLjA4MiA0Ljc4OCAxMy4zNTF6bTM0LjUwOS0xMC41ODlMMjguNDE3IDQ5Ljc4bC01LjczMy0xLjk2NWEuOTg4Ljk4OCAwIDAwLS42NjIuMDA3bC0uOTQuMzQ4LTMuNDItOS41NDEgNi4yNzktMi4zMTkgMTMuMzI1IDIuMzg1YTEuOTg3IDEuOTg3IDAgMDExLjUzNSAxLjMxMyAyLjk3MiAyLjk3MiAwIDAxLjA4NS4zNTYgMS45IDEuOSAwIDAxLjAwOS42ODggMi4wMTMgMi4wMTMgMCAwMS0yLjMyIDEuNjUybC0xMS4yNi0yLjAxNi0uMzQ3IDIgMTEuMjU4IDIuMDE1YTQuMDE3IDQuMDE3IDAgMDA0LjYzNS0zLjMwNyA0LjE0MSA0LjE0MSAwIDAwLjA0Mi0uNTQ1bDYuNDg5LTIuNGExLjk5NCAxLjk5NCAwIDAxMi41NjQgMS4yMTQgMi4wNCAyLjA0IDAgMDEtMS4xOTcgMi42MDR6Ii8+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ "XY6y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./reusecore/src/elements/Box/index.js
var Box = __webpack_require__("usN7");

// EXTERNAL MODULE: ./reusecore/src/elements/Image/index.js
var Image = __webpack_require__("ZyGw");

// EXTERNAL MODULE: ./reusecore/src/elements/Text/index.js
var Text = __webpack_require__("+g4l");

// EXTERNAL MODULE: ./reusecore/src/elements/Heading/index.js
var Heading = __webpack_require__("3AUV");

// EXTERNAL MODULE: ./common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("y5yV");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./containers/Charity/HumanityBlock/humanityBlock.style.js


const BlockWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "humanityBlockstyle__BlockWrapper",
  componentId: "azh5d5-0"
})(["width:100%;padding:81px 0 51px;@media only screen and (max-width:1440px){padding:70px 0 40px;}@media only screen and (max-width:1360px){padding:50px 0 20px;}@media only screen and (max-width:991px){padding:40px 0 20px;}.row{align-items:center;}"]);
const ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "humanityBlockstyle__ImageWrapper",
  componentId: "azh5d5-1"
})(["padding-right:20px;@media only screen and (max-width:1360px){padding-right:0;}img{max-width:100%;height:auto;}"]);
const ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "humanityBlockstyle__ContentWrapper",
  componentId: "azh5d5-2"
})(["padding-left:37px;@media only screen and (max-width:1360px){padding-left:30px;}@media only screen and (max-width:991px){padding-left:0;}@media only screen and (max-width:480px){margin-top:10px;}h5{font-size:16px;line-height:14px;font-weight:600;text-transform:uppercase;color:", ";margin-bottom:30px;@media only screen and (max-width:1440px){margin-bottom:27px;}@media only screen and (max-width:1360px){font-size:14px;margin-bottom:20px;}@media only screen and (max-width:991px){font-size:13px;margin-bottom:15px;}}h2{font-size:50px;line-height:70px;font-weight:300;margin-bottom:40px;@media only screen and (max-width:1440px){font-size:40px;line-height:60px;}@media only screen and (max-width:1360px){font-size:34px;line-height:50px;margin-bottom:27px;}@media only screen and (max-width:991px){font-size:30px;line-height:46px;margin-bottom:20px;}@media only screen and (max-width:767px){font-size:28px;line-height:40px;}}p{font-size:18px;line-height:28px;margin-bottom:29px;color:", ";@media only screen and (max-width:1440px){font-size:16px;margin-bottom:27px;}@media only screen and (max-width:1360px){font-size:15px;}@media only screen and (max-width:991px){margin-bottom:20px;}}.learn__more-btn{&::before{background-color:", ";}}"], Object(external_styled_system_["themeGet"])('colors.secondary2', '#EE2541'), Object(external_styled_system_["themeGet"])('colors.text', '#294859'), Object(external_styled_system_["themeGet"])('colors.primary', '#0071bc'));
const List = external_styled_components_default.a.ul.withConfig({
  displayName: "humanityBlockstyle__List",
  componentId: "azh5d5-3"
})(["margin-bottom:50px;padding-top:5px;@media only screen and (max-width:1440px){padding-top:0;margin-bottom:45px;}@media only screen and (max-width:1360px){margin-bottom:40px;}@media only screen and (max-width:991px){margin-bottom:30px;}"]);
const Item = external_styled_components_default.a.li.withConfig({
  displayName: "humanityBlockstyle__Item",
  componentId: "azh5d5-4"
})(["font-size:20px;list-style-type:square;line-height:40px;padding:10px 0;color:", ";@media only screen and (max-width:1440px){font-size:18px;line-height:30px;}@media only screen and (max-width:1360px){font-size:16px;line-height:24px;}@media only screen and (max-width:991px){font-size:15px;line-height:20px;}"], Object(external_styled_system_["themeGet"])('colors.heading', '#060F1E'));
/* harmony default export */ var humanityBlock_style = (BlockWrapper);
// EXTERNAL MODULE: ./common/src/data/Charity/index.js
var Charity = __webpack_require__("szdJ");

// CONCATENATED MODULE: ./containers/Charity/HumanityBlock/index.js

var __jsx = external_react_default.a.createElement;










const HumanityBlock = ({
  row,
  col
}) => {
  const {
    slogan,
    title,
    text,
    lists,
    image
  } = Charity["e" /* humanityData */];
  return __jsx(humanityBlock_style, {
    id: "socialFundraising"
  }, __jsx(Container["a" /* default */], {
    width: "1260px"
  }, __jsx(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "row"
  }, row), __jsx(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "col"
  }, col), __jsx(ImageWrapper, null, __jsx(Image["a" /* default */], {
    src: image,
    alt: "Charity Landing"
  }))), __jsx(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "col"
  }, col), __jsx(ContentWrapper, null, __jsx(Heading["a" /* default */], {
    as: "h5",
    content: slogan
  }), __jsx(Heading["a" /* default */], {
    content: title
  }), __jsx(Text["a" /* default */], {
    content: text
  }), __jsx(List, null, lists.map(item => __jsx(Item, {
    key: `list_key${item.id}`
  }, item.text))), __jsx(link_default.a, {
    href: "/join#signup"
  }, __jsx("a", {
    className: "learn__more-btn"
  }, __jsx("span", {
    className: "hyphen"
  }), __jsx("span", {
    className: "btn_text"
  }, "Get started "))))))));
}; // HumanityBlock style props


// HumanityBlock default style
HumanityBlock.defaultProps = {
  // HumanityBlock row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  // HumanityBlock col default style
  col: {
    width: ['100%', '50%', '50%'],
    pl: '15px',
    pr: '15px',
    mb: '30px'
  }
};
/* harmony default export */ var Charity_HumanityBlock = __webpack_exports__["a"] = (HumanityBlock);

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

/***/ "YDmi":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAeCAMAAABdem3zAAAAS1BMVEUAAADf3+/X1+fV2uTX1+PX1+PW2eLX1+HX1+LW1uHX1+PV1+HW1uPV1+LW1+LW1uLV1uLW1+LV1uHV1+LW1+HW1uHV1uHW1+HW1+LBXnrvAAAAGHRSTlMAECAwP0BQX2Bwf4CQn6CvsMDP0N/g7/BODfGUAAAA/klEQVQYGcXBW3aDIBQF0HOhIBE1IkrO/EdaXyXY1SSm/ejeeMBrvMVwFLxjJD3e4DlTOE0SZx1Oc1wpnDVy1eAkzU3CT651pXDkubM4UlV9RSCZWoNC4K5BwbSJZEDH1Vgh45cBWTVy1eHC3WiwUcywMyN3DppZK1gYZhoLaZkpYGI2aMwsM4OZHphFAA3vkgbgmRkAOvHuAkCxkDTgmRlAJxYUZk0o9AIXMg3pQ8Hjd0xdcqrOxNUlg43cWDLMDEs3wc6yNETu4sCSxR+oj5cUShL5QhQcSMenOsG/cBM3diKj4WZyeMz2XHhDas9F7/Cc2CZED+fgY2is4JtPSnQuP++c910AAAAASUVORK5CYII="

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YJ+P":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


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

/***/ "Z3R4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const BlogPost = ({
  className,
  thumbUrl,
  title,
  excerpt,
  link
}) => {
  // Add all classs to an array
  const addAllClasses = ['blog_post']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx("div", {
    className: addAllClasses.join(' ')
  }, __jsx("div", {
    className: "thumbnail"
  }, __jsx("img", {
    src: thumbUrl,
    alt: title
  })), __jsx("div", {
    className: "content"
  }, __jsx("h3", {
    className: "title"
  }, title), __jsx("p", {
    className: "excerpt"
  }, excerpt), link && __jsx("div", {
    className: "learn_more"
  }, link)));
};

/* harmony default export */ __webpack_exports__["a"] = (BlogPost);

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "ZQQg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("g4UU"), __esModule: true };

/***/ }),

/***/ "ZVDG":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("32kt");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


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

/***/ "aMHs":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__("HZWW");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__("aUeW").set });


/***/ }),

/***/ "aUeW":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("32kt");
var anObject = __webpack_require__("fuSu");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("t01e")(Function.call, __webpack_require__("WiEA").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "afdj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("3Of7");
var $export = __webpack_require__("HZWW");
var redefine = __webpack_require__("cXwa");
var hide = __webpack_require__("5l+C");
var Iterators = __webpack_require__("FmMR");
var $iterCreate = __webpack_require__("nY09");
var setToStringTag = __webpack_require__("5/jO");
var getPrototypeOf = __webpack_require__("+b+P");
var ITERATOR = __webpack_require__("eMt4")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "amke":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/map-pin-60ddee45b11ffca4946a417a391574c0.svg";

/***/ }),

/***/ "axM+":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/image4-e64bd2356caaa35db21662eab86e8c80.jpg";

/***/ }),

/***/ "b01i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./reusecore/src/elements/Box/index.js
var Box = __webpack_require__("usN7");

// EXTERNAL MODULE: ./reusecore/src/elements/Text/index.js
var Text = __webpack_require__("+g4l");

// EXTERNAL MODULE: ./reusecore/src/elements/Heading/index.js
var Heading = __webpack_require__("3AUV");

// EXTERNAL MODULE: ./reusecore/src/elements/UI/Logo/index.js + 1 modules
var Logo = __webpack_require__("lPez");

// EXTERNAL MODULE: ./common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("y5yV");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./containers/Charity/Footer/footer.style.js


const FooterWrapper = external_styled_components_default.a.footer.withConfig({
  displayName: "footerstyle__FooterWrapper",
  componentId: "mw4ta7-0"
})(["width:100%;padding:90px 0 40px;@media only screen and (max-width:1360px){padding:60px 0 30px;}@media only screen and (max-width:991px){padding:50px 0 30px;}.col-one{.logo{width:110px;margin:0 0 45px;@media only screen and (max-width:1440px){margin-bottom:40px;}@media only screen and (max-width:1360px){margin-bottom:30px;}@media only screen and (max-width:991px){margin-bottom:20px;}}.mail{font-size:18px;color:", ";@media only screen and (max-width:1440px){font-size:16px;}@media only screen and (max-width:1360px){font-size:15px;}}}.widget_title{color:", ";font-size:20px;font-weight:400;margin-bottom:24px;@media only screen and (max-width:1440px){font-size:18px;margin-bottom:20px;}@media only screen and (max-width:1360px){font-size:16px;margin-bottom:15px;}}.text{color:", ";font-size:18px;margin-bottom:20px;@media only screen and (max-width:1440px){font-size:16px;margin-bottom:15px;}@media only screen and (max-width:1360px){font-size:15px;}}.copyright{align-items:center;justify-content:space-between;padding-top:156px;@media only screen and (max-width:1360px){padding-top:125px;}@media only screen and (max-width:991px){padding-top:60px;}@media only screen and (max-width:480px){padding-top:30px;}}"], Object(external_styled_system_["themeGet"])('colors.secondary', '#0071bc'), Object(external_styled_system_["themeGet"])('colors.heading', '#060F1E'), Object(external_styled_system_["themeGet"])('colors.secondaryText', '#616970'));
const SelectWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "footerstyle__SelectWrapper",
  componentId: "mw4ta7-1"
})(["display:flex;align-items:center;width:104px;margin-top:45px;position:relative;min-height:24px;@media only screen and (max-width:1440px){margin-top:40px;}@media only screen and (max-width:1360px){margin-top:30px;}@media only screen and (max-width:991px){margin-top:20px;}select{border:0;outline:none;background:transparent;appearance:none;color:", ";font-size:18px;cursor:pointer;position:absolute;top:0;left:0;width:100%;height:24px;z-index:1;@media only screen and (max-width:1440px){font-size:16px;}@media only screen and (max-width:1360px){font-size:15px;}}svg{position:absolute;top:1px;right:10px;path{fill:", ";}}"], Object(external_styled_system_["themeGet"])('colors.select', '#525F7F'), Object(external_styled_system_["themeGet"])('colors.secondaryText', '#616970'));
const List = external_styled_components_default.a.ul.withConfig({
  displayName: "footerstyle__List",
  componentId: "mw4ta7-2"
})(["width:100%;"]);
const ListItem = external_styled_components_default.a.li.withConfig({
  displayName: "footerstyle__ListItem",
  componentId: "mw4ta7-3"
})(["a{color:", ";font-size:18px;line-height:38px;transition:all 0.3s ease;@media only screen and (max-width:1440px){font-size:16px;line-height:36px;}@media only screen and (max-width:1360px){font-size:15px;}&:hover,&:focus{outline:0;text-decoration:none;color:", ";}}"], Object(external_styled_system_["themeGet"])('colors.secondaryText', '#616970'), Object(external_styled_system_["themeGet"])('colors.text', '#294859'));
const CopyrightText = external_styled_components_default.a.div.withConfig({
  displayName: "footerstyle__CopyrightText",
  componentId: "mw4ta7-4"
})(["display:flex;align-items:center;@media only screen and (max-width:480px){width:100%;justify-content:center;margin-bottom:10px;}p{margin-bottom:0 !important;}"]);
const SocialList = external_styled_components_default.a.ul.withConfig({
  displayName: "footerstyle__SocialList",
  componentId: "mw4ta7-5"
})(["display:flex;align-items:center;@media only screen and (max-width:480px){margin:0 auto;}li{margin:0 5px;a{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;overflow:hidden;line-height:1;color:", ";position:relative;@media only screen and (max-width:480px){width:20px;heigt:40px;margin-bottom:10px;}&::before{content:'';display:block;width:100%;height:100%;background-color:", ";position:absolute;z-index:0;opacity:0;transform:scale(0.01);transition:all 0.35s ease;}i{position:relative;z-index:1;svg{width:18px;height:auto;@media only screen and (max-width:1360px){width:16px;}@media only screen and (max-width:580){width:14px;}}}}&.linkedin{a{&::before{background-color:", ";}}}&.facebook{a{&::before{background-color:", ";}}}&.twitter{a{&::before{background-color:", ";}}}&.github{a{&::before{background-color:", ";}}}&:hover{a{color:", ";&::before{opacity:1;transform:scale(1);}}}}"], Object(external_styled_system_["themeGet"])('colors.secondaryText', '#616970'), Object(external_styled_system_["themeGet"])('colors.text', '#294859'), Object(external_styled_system_["themeGet"])('colors.linkedin', '#0077B5'), Object(external_styled_system_["themeGet"])('colors.facebook', '#3b5998'), Object(external_styled_system_["themeGet"])('colors.twitter', '#38A1F3'), Object(external_styled_system_["themeGet"])('colors.github', '#211f1f'), Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'));
/* harmony default export */ var footer_style = (FooterWrapper);
// EXTERNAL MODULE: ./common/src/assets/image/charity/giadLogo.png
var giadLogo = __webpack_require__("sIDk");
var giadLogo_default = /*#__PURE__*/__webpack_require__.n(giadLogo);

// EXTERNAL MODULE: ./common/src/data/Charity/index.js
var Charity = __webpack_require__("szdJ");

// CONCATENATED MODULE: ./containers/Charity/Footer/index.js

var __jsx = external_react_default.a.createElement;











const Footer = ({
  row,
  col,
  colOne,
  colTwo
}) => {
  return __jsx(footer_style, null, __jsx(Container["a" /* default */], {
    width: "1260px"
  }, __jsx(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "row"
  }, row), __jsx(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "col-one"
  }, colOne), __jsx(Logo["a" /* default */], {
    className: "logo",
    href: "/charity",
    logoSrc: giadLogo_default.a,
    title: "Agency"
  }), __jsx(Text["a" /* default */], {
    className: "text",
    content: "Ground Floor Mortgage house, Plot 226 Central Business District Abuja"
  }), __jsx(Text["a" /* default */], {
    className: "text",
    content: "PHONE: 0703 481 0526, 0817 150 3550, 0803 452 4432"
  }), __jsx(link_default.a, {
    href: "#1"
  }, __jsx("a", {
    className: "mail"
  }, "info@rpacmgiad.org")), __jsx(SelectWrapper, null, __jsx("select", {
    "aria-label": "language switcher"
  }, __jsx("option", {
    value: "english"
  }, "English")), __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "21.994",
    height: "21.991",
    viewBox: "0 0 21.994 21.991"
  }, __jsx("path", {
    d: "M424,10280a10.931,10.931,0,0,1,2.3-6.712,11.244,11.244,0,0,1,1.255-1.372,10.982,10.982,0,0,1,14.843-.046c.173.157.338.322.5.49l.17.179a11.007,11.007,0,0,1,2.061,3.187v0l.058.023.034.186h-.008a10.921,10.921,0,0,1,.726,2.993c.031.315.049.636.052.956,0,.039,0,.075,0,.113a11.22,11.22,0,0,1-.17,1.922c-.039.22-.085.437-.137.653A11,11,0,0,1,424,10280Zm2.071-4.7-.362.439v.315a10.088,10.088,0,0,0,17.116,10.31h-.333v-.672l-.385-.516v-.809l-.294-.292-.026-.336.375-.713-.71-1.25.085-.85-.638-.064-.235-.235h-.429l-.217.2h-.754l-.026.066h-.418l-.963-1.1.008-.857.158-.057.059-.328h-.225l-.093-.344,1.116-.806v-.57l.545-.3.222.023h.449l.351-.19,1.131-.086v.579l.894.225.176.126h.165v-.314l.514-.052.491.366h.806l.054-.052c-.08-.271-.17-.537-.271-.8l-.527.008-.263-.289-.052-.465-.269.147-.145.568-.39-.416-.018-.393-.377-.323-.139-.14h-.436l.139.391.524.294.093.1-.114.057.005.311-.256.105-.22-.049-.137-.191.356.019.1-.13-.788-.531-.059-.226-.32.287-.325-.064-.493.641-.1.253-.315.028-.467,0-.279-.132-.083-.556.1-.266.475-.1.519.1.062-.284-.22-.055.075-.446.522-.083.367-.514.377-.064.338.049h.127l-.07-.483-.413.168-.145-.361-.24-.033-.046-.248.2-.215.465-.181.121-.214a10.063,10.063,0,0,0-12.593-.592l.509,0,.227.127.429.093.034.165.679.026-.093-.217-.6-.019.142-.132-.049-.16H429.8l.594-.444h.571l.269.37.444.025.269-.261.2.1-.369.361-.486.008a1.813,1.813,0,0,1,.041.352l.62-.016.067-.168.426-.025.052-.251-.251-.044.083-.225.194-.057.669.031-.369.336.059.261.387.057-.026-.468.369-.193.653-.075.948.419v.361l.3.075-.152.286h-.426l-.127.325-.979-.229.77-.411-.294-.247-.661.082-.059.06h0l-.01.016-.189.2-.315.028.023.157.111.044-.005.052-.256.039-.018.147-.245.013-.044-.295-.442.132-.9.527.1.369.251.165.5.07v.57l.232-.036.214-.447.535-.17V10273l.3-.225.718.168-.049.452h.191l.529-.259.026.6.385.232-.018.354-.367.126.023.116.447.2-.01.243-.129.013v-.008l-.56-.173-.026-.181.165-.111v-.165l-.178-.044-.044.152-.307.047-.031-.011v.016l-.108.016-.085-.176-.1-.044h-.22l-.1.08v.181l.191.064.183.026-.041.018-.168.188-.075-.093-.165-.044-.447.421.059.047-.661.366-.62.646-.041.286-.622.408-.31.313.034.62-.426-.2,0-.364-1.191,0-.617.31-.269.493-.1.393.173.38.486.06.772-.517.067.256-.235.444.586.1.059.906.8.137.511-.589.622.124.217.3.6-.036.016-.176.328.158.367.581.638.008.235.41.034.5.705.269.888.008.261.426.393.127-.075.354-.431.548-.127,1.214-.39.31-.579-.018-.194.336.145.63-.63.806-.2.369-.6.287-.4.06-.015.167.276.078-.034.181-.248.24.152.188.3.008-.016.232-.08.225-.026.184.442.372-.059.193-.6-.011-.6-.521-.467-.818.065-.791-.351-.47.142-.795-.209-.06v-1.729s-.586-.441-.62-.441-.31-.077-.31-.077l-.059-.328-.764-.956.077-.343.023-.561.529-.372-.077-.628-.77-.059-.6-.687-.429-.116-.276-.049.034-.253-.351-.05v.143l-.881-.22-.354-.54.142-.266-.558-.813-.093-.594h-.227l.075.578.387.6-.044.232-.325-.049-.4-.685v-.8l-.418-.2v-.573c.046-.11.1-.22.146-.327-.051.108-.1.217-.148.327v-.315l.362-.439.421-.509-.018-.184.015.184-.418.509Zm18.714,2.42.072.135Zm-.865-1.779.2-.025.106,0-.106,0Zm-12.784-.149h.323l.145-.145v0l-.147.145h-.32Zm-.6-.24.178.093.426-.6-.426.6Zm1.317.025h.32v0Zm-.511-.2.189-.033.152-.1v0l-.152.1-.189.033Zm.535-.269.124.1.121-.1-.121.1Zm.245,0-.152-.1h0Zm-.61-.145.207-.052Zm-.937-.064.227.064h.6v0h-.6Zm.741-.145h0v-.119h0Zm-1.312-.757.163.336Zm11.9-.2.044.145.692,0,.2-.294-.2.294-.692,0ZM430.5,10273.927Zm-1.433-.986.1.111.5-.031s.008-.095.008-.159c0,.064-.008.159-.008.159l-.5.031Zm0-.39h.5l.1-.14v0l-.1.14Zm4.347,2.673.093-.119.127.1-.021.146-.209.019Zm.465.031h-.067v-.15h.287l.062-.152.114,0,.132.025-.057.116-.142.013-.028.14-.111.069-.178.014C433.886,10275.285,433.881,10275.255,433.881,10275.255Zm5.891-.8.034-.349.245-.052-.021-.163-.23-.142-.158-.108v-.16l.093-.143.331-.067.083.4.178.284.116.137.214.08-.2.24-.39.039Zm-.674-.135v-.209l.2-.323.271-.064.194.083-.018.22-.413.294Z",
    transform: "translate(-424.002 -10269.002)"
  }))))), __jsx(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "row copyright"
  }, row), __jsx(CopyrightText, null, __jsx(Text["a" /* default */], {
    className: "text",
    content: "\xA9 2019 GIAD . All Rights Reserved"
  })), __jsx(SocialList, null, Charity["j" /* socialLinks */].map(item => __jsx("li", {
    className: item.name,
    key: `social__link-key${item.id}`
  }, __jsx(link_default.a, {
    href: item.link
  }, __jsx("a", {
    "aria-label": "social share link"
  }, item.icon))))))));
}; // Footer style props


// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  // Footer col one style
  colOne: {
    width: ['100%', '30%', '35%', '30%'],
    mt: [0, '13px', '0'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0]
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '70%', '65%', '70%'],
    flexBox: true,
    flexWrap: 'wrap'
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '33.33%'],
    pl: '15px',
    pr: '15px',
    mb: '30px'
  }
};
/* harmony default export */ var Charity_Footer = __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "b1Ik":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("RlXp");
var global = __webpack_require__("YJ+P");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("3Of7") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "bVxY":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("kzIj"), __esModule: true };

/***/ }),

/***/ "bXSe":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2OCI+PGcgZGF0YS1uYW1lPSJWZWN0b3IgU21hcnQgT2JqZWN0Ij48cGF0aCBkYXRhLW5hbWU9IlBhdGggMzkiIGQ9Ik0yMC41MTQgNjIuMTE0djQuNTU4SDU4LjY5VjQ1LjMzNmgtOS4wNUwzNi40NzMgNTUuNjUxeiIgZmlsbD0iI2ZmYjk1NCIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCA0MCIgZD0iTTUzLjk0MSA0MC4xMDlWMjcuMzU2YTEwLjI2OCAxMC4yNjggMCAwMC0zLjU3NC03LjhsLTQuODA2IDMuOTE5YTYuMTUgNi4xNSAwIDAxMi4zODcgNC44NzNWNDAuMTF6IiBmaWxsPSIjNmE4MGZmIi8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDQxIiBkPSJNNy43ODcgNDUuMjQ5bDUuOTI0LTQuMDc2YTQuNzY1IDQuNzY1IDAgMDEyLjctLjg0MiA0Ljg0NCA0Ljg0NCAwIDAxNC44MSA0Ljg3N3Y5LjEyOWwtNi4yODkgMi41NTF2LTguNjFsLTYuNjM3IDQuMDI2YTEuNDYgMS40NiAwIDAwLS43IDEuMjQ5djEzLjEySDUuMDE5VjQ1LjI0OXoiIGZpbGw9IiM2YTgwZmYiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggNDIiIGQ9Ik0yNC4zMzYgMjUuMTE4bC0xNC4wNjQgNS4wODhhNC43OCA0Ljc4IDAgMDAtMy4xMzIgNC41MDV2MTAuNTM3aDEuNDE3YTMuMjU2IDMuMjU2IDAgMDEzLjIzMy0zLjI3OVYzNC44NGwxMS41NDQtOC4wNDJhMi4zODYgMi4zODYgMCAwMDEuMDAyLTEuNjh6IiBmaWxsPSIjYTBlNTU3Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDQzIiBkPSJNMzcuNTU2IDE1LjU2N2wtMTIuMTE4IDkuMjU2YTIuMzA5IDIuMzA5IDAgMDAxLjU4Ni0uMDY5bDEyLjcwOS01LjI3NiA1LjgyOCAzLjk5MSA1LjI0Mi00LjI3NC01LjU5MS0zLjgyOGE2LjUxNiA2LjUxNiAwIDAwLTcuNjU2LjJ6IiBmaWxsPSIjNzJkOGZmIi8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDQ0IiBkPSJNOC41NzUgMTYuNjc0YTQuOTMgNC45MyAwIDAwLTIuODM2IDQuNDc5di44NDlhNC45MyA0LjkzIDAgMDAyLjgzNiA0LjQ3OSA0LjkzIDQuOTMgMCAwMDIuODM1LTQuNDc5di0uODQ5YTQuOTMgNC45MyAwIDAwLTIuODM1LTQuNDc5eiIgZmlsbD0iI2ZjYzY5ZCIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCA0NSIgZD0iTTM1Ljc2OSAxMS42MDdhNC45NzkgNC45NzkgMCAwMC0uODU3LTUuNzkybC0uNTkzLS42YTQuODEgNC44MSAwIDAwLTQuNzE3LTEuMjY3IDQuOTc4IDQuOTc4IDAgMDAuODU4IDUuNzkybC41OTIuNmE0LjgxMSA0LjgxMSAwIDAwNC43MTcgMS4yNjd6IiBmaWxsPSIjZmNjNjlkIi8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDQ2IiBkPSJNMS4zMSA1NS45MTVhMS4zMTMgMS4zMTMgMCAwMC45MjYtLjM4OSAxLjM0MSAxLjM0MSAwIDAwMC0xLjg3OSAxLjMgMS4zIDAgMDAtMS44NTIgMCAxLjM0MSAxLjM0MSAwIDAwMCAxLjg3OSAxLjMxMyAxLjMxMyAwIDAwLjkyNi4zODl6Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDQ3IiBkPSJNNTQuODQyIDE1LjQwNWwtOC43MzMtNS45OEE3LjgxMiA3LjgxMiAwIDAwNDAuNTMgOC4xNGE2LjQxMiA2LjQxMiAwIDAwLjEzLTEuMjgyIDYuMjYgNi4yNiAwIDAwLTEuODA3LTQuNDIybC0uNTkzLS42YTYuMTEgNi4xMSAwIDAwLTguNzI1IDAgNi4zMTYgNi4zMTYgMCAwMDAgOC44NDVsLjU5My42YTYuMTE4IDYuMTE4IDAgMDAyLjYyIDEuNTc4bC04LjgxNSA2LjczNGEzLjY4MyAzLjY4MyAwIDAwLTEuMjA3IDEuNjEzIDMuNTgzIDMuNTgzIDAgMDAtMS45NS4xMzlsLTguNTM4IDMuMDg5YTYuMzEgNi4zMSAwIDAwLjQ4NC0yLjQyOXYtLjg1YTYuMTcgNi4xNyAwIDEwLTEyLjMzOSAwdi44NWE2LjI3MSA2LjI3MSAwIDAwMy4zIDUuNTM1QTYuMTI3IDYuMTI3IDAgMDAwIDMzLjE2N3YxNS44NDFhMS4zMSAxLjMxIDAgMTAyLjYyIDB2LTIuNDNoNS4xNjdhMS4yOSAxLjI5IDAgMDAuNzM2LS4yMjlsNS45MjQtNC4wNzdhMy40NTQgMy40NTQgMCAwMTEuOTY1LS42MTIgMy41MjggMy41MjggMCAwMTMuNSAzLjU0OHY4LjIzbC0zLjY2OCAxLjQ4OHYtNi42NDhhMS4zMzMgMS4zMzMgMCAwMC0uNjY0LTEuMTU2IDEuMyAxLjMgMCAwMC0xLjMxOS4wMTZsLTYuNjM4IDQuMDI1YTIuODA5IDIuODA5IDAgMDAtMS4zMzYgMi4zOXYxMS43OTJIMi42MnYtNS41NzhhMS4zMSAxLjMxIDAgMTAtMi42MiAwdjYuOWExLjMxOCAxLjMxOCAwIDAwMS4zMSAxLjMyOEg3LjZhMS4zMTggMS4zMTggMCAwMDEuMzEtMS4zMjh2LTEzLjEyYS4xMjguMTI4IDAgMDEuMDYyLS4xMDlsNC42NTQtMi44MjN2MTYuMDUzYTEuMzE5IDEuMzE5IDAgMDAxLjMxIDEuMzI4SDU4LjY5QTEuMzE4IDEuMzE4IDAgMDA2MCA2Ni42NjhWMjUuMDY3YTExLjUzOCAxMS41MzggMCAwMC01LjE1OC05LjY2MnptMi41MzggOS42NnYxMy43MTdoLTIuNjJWMjguMzA3YTEuMzEgMS4zMSAwIDEwLTIuNjIgMHYxMC40NzVoLTIuODgyVjI4LjM0N2E3LjU1MiA3LjU1MiAwIDAwLTEuNzItNC43ODJsNi42MS01LjM4OWE4Ljg5MSA4Ljg5MSAwIDAxMy4yMzIgNi44OTF6TTMxLjM4NiA4LjhhMy42MzIgMy42MzIgMCAwMTAtNS4wODggMy41MTUgMy41MTUgMCAwMTUuMDIgMGwuNTkyLjZhMy42MzggMy42MzggMCAwMTAgNS4wODkgMy41MiAzLjUyIDAgMDEtNS4wMiAwem0tNS44NzggMTIuOTEzbDEzLTkuOTI4YTUuMjI3IDUuMjI3IDAgMDE2LjEzNS0uMTZsNy4yNjMgNC45NzQtNi40MSA1LjIyNy01LjAyNi0zLjQ0M2ExLjI5MyAxLjI5MyAwIDAwLTEuMjMtLjEyOGwtMTIuNzA5IDUuMjc2YTEuMDM4IDEuMDM4IDAgMDEtMS4yODUtLjQzNHYtLjAwNmExLjA2MiAxLjA2MiAwIDAxLjI2Mi0xLjM3OXpNMyAyMS4xNTNhMy41NSAzLjU1IDAgMTE3LjEgMHYuODVhMy41NSAzLjU1IDAgMTEtNy4xIDB6bS0uMzggMTIuMDE0YTMuNDYgMy40NiAwIDAxMi4yNjMtMy4yNTRsMTYuNzcyLTYuMDY5YTEuMDM1IDEuMDM1IDAgMDExLjI0My40NTUgMS4wNjYgMS4wNjYgMCAwMS0uMzA2IDEuNDA1bC0xMS41NDQgOC4wNDJhMS4zMzQgMS4zMzQgMCAwMC0uNTY4IDEuMDk1djYuOTVsLTMuMSAyLjEzSDIuNjJ6bTEzLjc5MyA1LjgzNmE2LjAzNyA2LjAzNyAwIDAwLTMuMzEzLjk4OHYtNC40NTJsMTAuOTc2LTcuNjQ3YTMuNjc2IDMuNjc2IDAgMDAxLjMzMy0xLjcxIDMuNjI4IDMuNjI4IDAgMDAuNzQxLjA3OCAzLjU1OCAzLjU1OCAwIDAwMS4zNzEtLjI3NGwxMi4wNi01LjAwNiA1LjIwNiAzLjU2NWE0Ljg0MiA0Ljg0MiAwIDAxMS44NTEgMy44djEwLjQzNGgtMi41NzdhMS4zIDEuMyAwIDAwLS44LjI3N2wtMTMuMDIyIDEwLjItNy43MDUgMy4xMnYtNy4xNzNhNi4xNyA2LjE3IDAgMDAtNi4xMjEtNi4yek01Ny4zOCA2NS4zNDRIMTYuMjQ1di03LjU1NmwxNS4xMzUtNi4xM2ExLjI3MyAxLjI3MyAwIDAwLjMxNS0uMTgybDEyLjgxMy0xMC4wMzhINTcuMzh6Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDQ4IiBkPSJNNDkuMzQ1IDQ5LjQ1MWgxLjc0N3Y1LjEzNmExLjMxIDEuMzEgMCAxMDIuNjIgMHYtNi40NjRhMS4zMiAxLjMyIDAgMDAtMS4zMS0xLjMyOGgtMy4wNTdhMS4zMjggMS4zMjggMCAwMDAgMi42NTZ6Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDQ5IiBkPSJNNTIuNCA1OC40NGExLjMxMSAxLjMxMSAwIDAwLS45MjYuMzg5IDEuMzQxIDEuMzQxIDAgMDAwIDEuODc5IDEuMyAxLjMgMCAwMDEuODUyIDAgMS4zNDEgMS4zNDEgMCAwMDAtMS44NzkgMS4zMTUgMS4zMTUgMCAwMC0uOTI2LS4zODl6Ii8+PC9nPjwvc3ZnPg=="

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

/***/ "c8qU":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAeCAMAAACVFoclAAAAV1BMVEUAAADf3+/X1+fV2uTX1+PX1+PV2OLW2eLX1+HX1+LW2OHW1uHX1+PV1+HW1uLW1uPV1+LW1+LW1uLV1uLW1+LW1+LV1uHV1+LW1+HW1uHV1uHW1+HW1+Kyk1TJAAAAHHRSTlMAECAwP0BPUF9gb3B/gI+Qn6CvsL/Az9Df4O/wQqu59AAAAPlJREFUGBmtwVtiwiAQBdALSDXWSYIBE8Ld/zo70fqo4F/PwR+2jyt5GR3azJl3PVrMwqcBDYGbeeaVRcVQFQ+4QtWh4qk6qEAlqDkvYqCESvDZbqQSNLk+8pegwUc+CWqem5IkUQkqZqUSAEIlqAhVgBIqQSVR7aEClaCyUHmohWpCZaYKAAZuVoN3Ezf9buRNxLuOD5lqRiXwpjhXyGBQk0wVLNCVAW3WW/wzezgdLYLHBybmlEnYOXp8NhTADLwcLRq+xoxpgvKZvJx2Bi/sYVyZHFaPqy5TLbE/XZ3jSjJ5YJ9wtw+Fr/LgoDqDF16mRDWn8O3w8AOiqh6mG80fFgAAAABJRU5ErkJggg=="

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

/***/ "cXTp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__("zj13");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "cXwa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5l+C");


/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dP+u":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/fundraisers-4ac592caf1eae618ec3f1049500dae16.png";

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

/***/ "eMt4":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("b1Ik")('wks');
var uid = __webpack_require__("9TH4");
var Symbol = __webpack_require__("YJ+P").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


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

/***/ "f4p5":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "fmBZ":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "fuSu":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("32kt");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


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

/***/ "g4UU":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("W4SU");
__webpack_require__("PWiz");
__webpack_require__("mm6w");
__webpack_require__("H+Ez");
module.exports = __webpack_require__("RlXp").Symbol;


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

/***/ "hNMr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "hl8p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");

// EXTERNAL MODULE: ./reusecore/src/elements/Box/index.js
var Box = __webpack_require__("usN7");

// EXTERNAL MODULE: ./reusecore/src/elements/Image/index.js
var Image = __webpack_require__("ZyGw");

// EXTERNAL MODULE: ./reusecore/src/elements/Text/index.js
var Text = __webpack_require__("+g4l");

// EXTERNAL MODULE: ./reusecore/src/elements/Heading/index.js
var Heading = __webpack_require__("3AUV");

// EXTERNAL MODULE: ./common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("y5yV");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./containers/Charity/PromotionBlock/promotionBlock.style.js


const BlockWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "promotionBlockstyle__BlockWrapper",
  componentId: "sc-1w1z5wi-0"
})(["width:100%;padding:81px 0 51px;@media only screen and (max-width:1440px){padding:70px 0 40px;}@media only screen and (max-width:1360px){padding:50px 0 20px;}@media only screen and (max-width:991px){padding:40px 0 10px;}.row{align-items:center;.col{@media only screen and (max-width:480px){&:first-child{order:2;margin-top:15px;}}}}"]);
const ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "promotionBlockstyle__ContentWrapper",
  componentId: "sc-1w1z5wi-1"
})(["padding-right:50px;@media only screen and (max-width:1440px){padding-right:40px;}@media only screen and (max-width:991px){padding-right:0;}h5{font-size:16px;line-height:14px;font-weight:600;text-transform:uppercase;color:", ";margin-bottom:30px;@media only screen and (max-width:1440px){margin-bottom:27px;}@media only screen and (max-width:1360px){font-size:14px;margin-bottom:20px;}@media only screen and (max-width:991px){font-size:13px;margin-bottom:15px;}}h2{font-size:50px;line-height:70px;font-weight:300;margin-bottom:40px;@media only screen and (max-width:1440px){font-size:40px;line-height:60px;}@media only screen and (max-width:1360px){font-size:34px;line-height:50px;margin-bottom:27px;}@media only screen and (max-width:991px){font-size:30px;line-height:46px;margin-bottom:20px;}@media only screen and (max-width:767px){font-size:28px;line-height:40px;}}p{font-size:18px;line-height:28px;margin-bottom:29px;color:", ";@media only screen and (max-width:1440px){font-size:16px;margin-bottom:27px;}@media only screen and (max-width:1360px){font-size:15px;}@media only screen and (max-width:991px){margin-bottom:20px;}}.learn__more-btn{&::before{background-color:", ";}}"], Object(external_styled_system_["themeGet"])('colors.secondary2', '#EE2541'), Object(external_styled_system_["themeGet"])('colors.text', '#294859'), Object(external_styled_system_["themeGet"])('colors.primary', '#0071bc'));
const List = external_styled_components_default.a.ul.withConfig({
  displayName: "promotionBlockstyle__List",
  componentId: "sc-1w1z5wi-2"
})(["margin-bottom:50px;padding-top:5px;@media only screen and (max-width:1440px){padding-top:0;margin-bottom:45px;}@media only screen and (max-width:1360px){margin-bottom:40px;}@media only screen and (max-width:991px){margin-bottom:30px;}"]);
const Item = external_styled_components_default.a.li.withConfig({
  displayName: "promotionBlockstyle__Item",
  componentId: "sc-1w1z5wi-3"
})(["font-size:20px;line-height:40px;padding:10px 0;color:", ";@media only screen and (max-width:1440px){font-size:18px;line-height:30px;}@media only screen and (max-width:1360px){font-size:16px;line-height:24px;}@media only screen and (max-width:991px){font-size:15px;line-height:20px;}"], Object(external_styled_system_["themeGet"])('colors.heading', '#060F1E'));
const ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "promotionBlockstyle__ImageWrapper",
  componentId: "sc-1w1z5wi-4"
})(["padding-left:37px;@media only screen and (max-width:1360px){padding-left:30px;}@media only screen and (max-width:991px){padding-left:0;}img{max-width:100%;height:auto;}"]);
/* harmony default export */ var promotionBlock_style = (BlockWrapper);
// EXTERNAL MODULE: ./common/src/data/Charity/index.js
var Charity = __webpack_require__("szdJ");

// CONCATENATED MODULE: ./containers/Charity/PromotionBlock/index.js

var __jsx = external_react_default.a.createElement;










const PromotionBlock = ({
  row,
  col
}) => {
  const {
    slogan,
    title,
    text1,
    text2,
    lists,
    image
  } = Charity["i" /* promotionData */];
  return __jsx(promotionBlock_style, {
    id: "ourCommunity"
  }, __jsx(Container["a" /* default */], {
    width: "1260px"
  }, __jsx(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "row"
  }, row), __jsx(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "col"
  }, col), __jsx(ContentWrapper, null, __jsx(Heading["a" /* default */], {
    as: "h5",
    content: slogan
  }), __jsx(Heading["a" /* default */], {
    content: title
  }), __jsx(Text["a" /* default */], {
    content: text1
  }), __jsx(Text["a" /* default */], {
    content: text2
  }))), __jsx(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    className: "col"
  }, col), __jsx(ImageWrapper, null, __jsx(Image["a" /* default */], {
    src: image,
    alt: "Manufacturing city"
  }))))));
}; // PromotionBlock style props


// PromotionBlock default style
PromotionBlock.defaultProps = {
  // PromotionBlock row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  // PromotionBlock col default style
  col: {
    width: ['100%', '50%', '50%'],
    pl: '15px',
    pr: '15px',
    mb: '30px'
  }
};
/* harmony default export */ var Charity_PromotionBlock = __webpack_exports__["a"] = (PromotionBlock);

/***/ }),

/***/ "hpZ2":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/image3-9340828c45f03c79a509281d805ac40d.jpg";

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

/***/ "i/zz":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/footer-bg-80ec60b245effe69fbaa3bdcd8a45385.png";

/***/ }),

/***/ "i5Ih":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/image1-30c3ffd8fde7bbc3cbddf8e4bb6c61a3.jpg";

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

/***/ "isz7":
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "jBKJ":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAeCAMAAACxDwjlAAAAQlBMVEUAAADf3+/X1+fV2uTX1+PW2eLX1+LW1uHV1+HW1uPV1+LW1+LW1uLV1uLW1+LV1uHV1+LW1+HW1uHV1uHW1+HW1+KHSKcdAAAAFXRSTlMAECAwQFBgcICQn6CvsMDP0N/g7/AvSmoMAAAA2UlEQVRIx92VzRKCMBCDP7RiFflT8/6v6gGq3WUYxZM1tzYlQwLZIoNIkEN/DgDEbO/EjCo/CW/FJF0qJ3ZLYrUV+118YlNSbWxK1SLHTzOT1LkHawBGlZIZQDdbTJithoxUTiSfY5bCFrHBi/Vm1VEAVmyaX2ZBjEHakNkLjSXaKbVJ5o8yO1uC5sns4+bM3Adgn/avxOIzy+vUG5vslEoWv+imrBhDanshmfnpvDq2g53P7TzT4vod0K1fKE6slu54sbIzayvbMQAOd9ic2dAEX9jpNY4LsQf3nkLbnHHVmgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "jYbd":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/thumb-1-d2eb8a0780a0825077eb2a4d7c8f61aa.png";

/***/ }),

/***/ "jf08":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAATlBMVEUAAADf3+/X1+fV2uTX1+PW2eLX1+HX1+LW1uHX1+PV1+HW1uLW1uPV1+LW1+LW1uLV1uLW1+LW1+LV1uHV1+LW1+HW1uHV1uHW1+HW1+JVpLTfAAAAGXRSTlMAECAwQFBfYHB/gI+Qn6CvsL/Az9Df4O/wlFIZWAAAAM1JREFUKM+lk0sSgyAQRAfREJVowITP/S+acgYQVNikV9Q8C5qmBUgSs/Leb2rkcBGbrU/6Pk5UZHCX6nK6+LNs36Le8RvqtLnQIbIJDxyWgrLgamFx0pvsalOgcC+H9F2hdLJjFSybW4NGHEPgKpcEIGPJdBldG/t/8cmaDsKprl2MR0yx2K7ElPQzhboWtKNn4seTvPLiKRwZXLvAU+xso4ko6mBHNMBjZ821amo71rxRxbh1jYviN3DVHpNbmX3gppvyCLkn/dEy+0F+nW8qLNpz4RMAAAAASUVORK5CYII="

/***/ }),

/***/ "k04g":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "k094":
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "k2NH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__("rIwS");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
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

/***/ }),

/***/ "kBrO":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/pattern2-e68c2ab1ca713fe20bcafb7655f3fd31.svg";

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

/***/ "kcEG":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/facebookSquare");

/***/ }),

/***/ "kn0i":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMjU2LjAwMSAwYzE0MS4zODMgMCAyNTUuOTk4IDExNC42MTQgMjU1Ljk5OCAyNTZTMzk3LjM4NSA1MTIgMjU2LjAwMSA1MTJjLTE0MS4zODYgMC0yNTYtMTE0LjYxNC0yNTYtMjU2IDAtMTQxLjM4MyAxMTQuNjE0LTI1NiAyNTYtMjU2eiIgZmlsbD0iI2ZmNzU3YyIvPjxwYXRoIGQ9Ik04Mi43NDcgMzYuMjI2aDIxNS40MjZjNi4zNTQgMCAxMS41NTEgNS4xOTkgMTEuNTUxIDExLjU1MXYyODYuMDI4YzAgNi4zNTQtNS4xOTkgMTEuNTUxLTExLjU1MSAxMS41NTFIODIuNzQ3Yy02LjM1NCAwLTExLjU1MS01LjE5OS0xMS41NTEtMTEuNTUxVjQ3Ljc3N2MwLTYuMzU1IDUuMTk5LTExLjU1MSAxMS41NTEtMTEuNTUxeiIgZmlsbD0iIzgwN2Q3ZCIvPjxwYXRoIGQ9Ik04MC43NTYgNjIuMDYyaDIxOS40MDZ2MjU3LjQ2SDgwLjc1NlY2Mi4wNjJ6IiBmaWxsPSIjMjBkMGMyIi8+PHBhdGggZD0iTTE5MC40NTggMzIzLjMwMWE4LjgwNyA4LjgwNyAwIDAxOC44MDYgOC44MDggOC44MDcgOC44MDcgMCAwMS0xNy42MTIgMCA4LjgwNyA4LjgwNyAwIDAxOC44MDYtOC44MDh6IiBmaWxsPSIjYzhjYWNjIi8+PHBhdGggZD0iTTQ4MC43OTYgODAuNDExSDMwOS44NTd2MjI3LjE1OGgxNzAuOTM5VjgwLjQxMXoiIGZpbGw9IiNkZmUxZTMiLz48cGF0aCBkPSJNNDc0LjY0MiA4MC40MTFjLTU1Ljg3NSAwLTEwOS4yNDYtMjMuODI2LTE2Ny42MyAwdjIxMi43ODNoMTY3LjYzVjgwLjQxMXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTMzLjIyNCA4MC40MTFoMTY2LjYwNXYyMjcuMTU4SDEzMy4yMjRWODAuNDExeiIgZmlsbD0iI2RmZTFlMyIvPjxwYXRoIGQ9Ik0xMzkuMzc4IDgwLjQxMWM1NS44NzcgMCAxMzYuNjI1LTIzLjQxMSAxNjcuNjM0IDB2MjEyLjc4M0gxMzkuMzc4VjgwLjQxMXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMzA0LjE2OCA4MC40MTFoNS42ODR2MjEyLjc4M2gtNS42ODRWODAuNDExeiIgZmlsbD0iI2VjZjBmMSIvPjxwYXRoIGQ9Ik0xNTMuNzAzIDk4LjM3OEgyMTguNHY4Ljg4OGgtNjQuNjk3di04Ljg4OHoiIGZpbGw9IiNmYmI0MjkiLz48cGF0aCBkPSJNMTUzLjcwMyAyNDIuNzhoMTI5LjM5M3Y0LjIwNUgxNTMuNzAzdi00LjIwNXptMC04LjQ3OGgxMjkuMzkzdjQuMjA1SDE1My43MDN2LTQuMjA1em0wLTU1LjQ1MmgxMjkuMzkzdjQuMjAySDE1My43MDN2LTQuMjAyem0wIDQyLjM5NWg1Ni42NTh2NC4yMDVoLTU2LjY1OHYtNC4yMDV6bTAtOC40OGgxMjkuMzkzdjQuMjAySDE1My43MDN2LTQuMjAyem0wLTguNDhoMTI5LjM5M3Y0LjIwNUgxNTMuNzAzdi00LjIwNXptMC04LjQ3N2gxMjkuMzkzdjQuMjAySDE1My43MDN2LTQuMjAyem0wLTguNDgyaDEyOS4zOTN2NC4yMDVIMTUzLjcwM3YtNC4yMDV6bTAgODkuMzY5aDQ0LjUzM3Y0LjIwNWgtNDQuNTMzdi00LjIwNXptMC04LjQ4aDEyOS4zOTN2NC4yMDVIMTUzLjcwM3YtNC4yMDV6bTAtOC40OGgxMjkuMzkzdjQuMjA1SDE1My43MDN2LTQuMjA1em0wLTguNDc4aDEyOS4zOTN2NC4yMDJIMTUzLjcwM3YtNC4yMDJ6bTE3Mi40MjgtNjguMjAyaDEyOS4zOTN2NC4yMDJIMzI2LjEzMXYtNC4yMDJ6bTAtOC40OGgxMjkuMzkzdjQuMjA1SDMyNi4xMzF2LTQuMjA1em0wLTU1LjQ1MmgxMjkuMzkzdjQuMjAySDMyNi4xMzF2LTQuMjAyem0wIDQyLjM5N2g1Ni42NTN2NC4yMDJoLTU2LjY1M3YtNC4yMDJ6bTAtOC40ODJoMTI5LjM5M3Y0LjIwN0gzMjYuMTMxdi00LjIwN3ptMC04LjQ3N2gxMjkuMzkzdjQuMjAySDMyNi4xMzF2LTQuMjAyem0wLTguNDhoNTYuNjUzdjQuMjAyaC01Ni42NTN2LTQuMjAyem0wLTguNDhoMTI5LjM5M3Y0LjIwMkgzMjYuMTMxdi00LjIwMnptMCA4OS4zNjdoNDQuNTMxdjQuMjA1aC00NC41MzF2LTQuMjA1em0wLTguNDc4aDEyOS4zOTN2NC4yMDVIMzI2LjEzMXYtNC4yMDV6bTAtOC40OGgxMjkuMzkzdjQuMjAySDMyNi4xMzF2LTQuMjAyem0wLTguNDhoMTI5LjM5M3Y0LjIwNUgzMjYuMTMxdi00LjIwNXoiIGZpbGw9IiNkZmUxZTMiLz48cGF0aCBkPSJNMzM5LjQ3NCA3MS4xMjJsMTcuNTA2LTEuNTA0djkwLjg3N2wtOC44MTEtNi40MTItOC42OTYgNi40MTJWNzEuMTIyeiIgZmlsbD0iI2ZmNWI2MSIvPjxwYXRoIGQ9Ik0xNjMuMjcgNDcuMzE2aDU0LjM3NGEzLjI1NyAzLjI1NyAwIDAxMy4yNDggMy4yNDhjMCAxLjc5LTEuNDYgMy4yNDgtMy4yNDggMy4yNDhIMTYzLjI3Yy0xLjc4NiAwLTMuMjQ4LTEuNDYtMy4yNDgtMy4yNDhzMS40Ni0zLjI0OCAzLjI0OC0zLjI0OHoiIGZpbGw9IiNjOGNhY2MiLz48cGF0aCBkPSJNMzU5LjM2MiAyNTguMTIzbDEuMDg3IDIwLjcwMSA1Ljk3NSA3LjU0OS4xODMtNDEuMzM0LTEuNzczLTQwLjMxNi00LjY0My00Mi4xNzRjLS45ODEtOC45MDUgMTUuMTYzLTExLjI1NiAxNy43MjktLjQxNWw4Ljg2MSAzNy40MTYgMi4zMDIgMzMuODIyIDMuMDE4LjEwOC0xLjA3OC0xNS45NjNjLS40MjEtNi4yNCA0LjgyMi0xMS41IDExLjA3MS0xMS42NjQgNi4yNTMtLjE2MyAxMS4yNDUgNC44MzMgMTEuNjY0IDExLjA3MWw0LjU5NSAxNy40NzEtLjk1NS0xMS4xODNjLS41MzEtNi4yNCA0LjkzMi0xMS42NjQgMTEuMDc1LTExLjY2NCAxMC45ODkgMCAxMy4xODkgMTQuODI1IDE2LjgzMiAyMy43ODhsLS4xOTgtNC42MDJjLS4yNjktNi4yNDYgNi4zNzItMTAuMDY1IDEyLjQzMy04LjUzNyA2LjUyOSAxLjY0NSAxMS44MiAyNS4wMTYgMTIuMjM3IDM0LjY5M2wtMy45MzYgNjIuMzY0Yy0uNjE1IDkuNzMtNC4zMDggMTQuNDMxLTguNjE3IDE5LjIwOWwtMS40NTcgNzcuNjA0YTI1Ny41MjMgMjU3LjUyMyAwIDAxLTI4LjkxMiAzMC41NDhjLTEzLjQ2MSAyLjc5MS0yNy43OTkgMy4yMjYtNDMuMDc4IDkuOTk1bDEuMDAzLTExOC43ODhjLTEzLjEzNi01LjgyMS00NS42NDUtMzguMTIyLTQ1LjY1MS0zOC4xMDlsMS4wOTQtNTEuNjYyYy4wNzEtMy4yMjYgMTkuNDY5LTEuOTM0IDE5LjEzNiAxMC4wN2guMDAzeiIgZmlsbD0iI2ZlZDE5OCIvPjxwYXRoIGQ9Ik0zNzUuMTQ5IDE2Mi42MDVsMS4yMDQgNS45NC0xMS4xMy4zNDQtMS4yMDQtNS45NGMtMS40NzUtNy4yNjMgMTAuMjI4LTcuNTM4IDExLjEzLS4zNDR6bS0yOS41MTQgODcuNTVjLS4wNTUuMjU2Ljg5MSAxMi4wOTYuODkxIDEyLjA5NmwtNS43NjEtLjA5OS4zMjYtMTIuNTM5Yy0uMDAxIDAgMy4zMDUtMS40ODQgNC41NDQuNTQyeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0zNzguMDEzIDM2NC42NjZsODcuMDQzLTEuNDc1IDEuNDI3IDM4LjUzMmMtMjMuNzk3IDM0LjMxLTU1Ljc2IDYyLjUyMS05My4wODQgODEuODIybDQuNjE3LTExOC44NzYtLjAwMy0uMDAzeiIgZmlsbD0iIzBlNzg4NiIvPjxwYXRoIGQ9Ik0zODAuNDE4IDM1My41NjdsODIuMTI2LS41MzQtLjA4MiAxMC4yMDItODIuMTE3IDEuMzkxLjA3My0xMS4wNTl6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTQ1MC4wMjEgMzkyLjcxOGMzLjM4Ny0uMDI5IDYuMTYgMi42MjQgNi4xOTYgNS45MjQuMDMzIDMuMzAxLTIuNjg2IDYuMDA0LTYuMDc0IDYuMDM1LTMuMzg3LjAzMS02LjE2LTIuNjE5LTYuMTk2LTUuOTJzMi42ODUtNi4wMDQgNi4wNzQtNi4wMzl6bTAtMTcuMThjMy4zODctLjAyOSA2LjE2IDIuNjI0IDYuMTk2IDUuOTI0LjAzMyAzLjMwMS0yLjY4NiA2LjAwNC02LjA3NCA2LjAzNS0zLjM4Ny4wMzEtNi4xNi0yLjYxOS02LjE5Ni01LjkyLS4wMzYtMy4zMDMgMi42ODUtNi4wMDQgNi4wNzQtNi4wMzl6IiBmaWxsPSIjYzhjYWNjIi8+PHBhdGggZD0iTTEwMy41MSAxNTkuNDU5bC01NC4wMzIgMTkuMTQ5LTE4Ljk1MSAzOS40NjRzLTMuNjkzIDkuMjY5IDIuNTM4IDI3LjIxN2wyMy45MDUgNjguODU1LTIuMDI0IDMxLjIxMmgzNi4yNXM1LjgxLTgzLjY1LTUuMTMzLTEwMy4xNDNjLTEwLjk0My0xOS40OTEtMTIuODIxLTQ0Ljc5OC0xMi44MjEtNDQuNzk4czMzLjczMi05Ljc1IDM1Ljc4LTIzLjQyNmMyLjA1My0xMy42NzktNS41MTItMTQuNTMtNS41MTItMTQuNTN6IiBmaWxsPSIjZmVkMTk4Ii8+PHBhdGggZD0iTTk0LjI1OCAxNjkuNjkxbDEwLjUxNS0zLjcyYy45OTctMi4zMjItMS40NTctNS4wOTMtMi4yODktNS4xMDlsLTkuNjIyIDMuNTg5IDEuMzkzIDUuMjM3LjAwMy4wMDN6TTUxLjk2NSAzNDUuMzU2aDc0LjY5OHYxMS44MjVINTEuOTY1di0xMS44MjV6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTQ3LjUxMyAzNTUuNDY5aDgyLjc0Nmw2LjkxNCAxMjcuMzE5Yy0zNS42NzQtMTguNzMtNjYuMzkyLTQ1LjYyMy04OS42Ni03OC4yMDZ2LTQ5LjExM3oiIGZpbGw9IiMwZTc4ODYiLz48cGF0aCBkPSJNOTYuOTI0IDQ1LjA5M2MzLjAyMyAwIDUuNDcgMi40NDcgNS40NyA1LjQ3cy0yLjQ0NyA1LjQ3Mi01LjQ3IDUuNDcyYTUuNDcgNS40NyAwIDExMC0xMC45NDJ6IiBmaWxsPSIjYzhjYWNjIi8+PHBhdGggZD0iTTk2LjkyNCA0NS44MjNhNC43NDEgNC43NDEgMCAxMS0uMDAyIDkuNDgyIDQuNzQxIDQuNzQxIDAgMDEuMDAyLTkuNDgyeiIgZmlsbD0iIzgwN2Q3ZCIvPjxwYXRoIGQ9Ik05Ni45MjQgNDkuMTU5YTEuNDAzIDEuNDAzIDAgMTEuMDAyIDIuODA2IDEuNDAzIDEuNDAzIDAgMDEtLjAwMi0yLjgwNnptMjIuMDM1IDMzNS41MDVjMy4zODktLjAyOSA2LjE2MyAyLjYyNCA2LjE5OCA1LjkyMi4wMzMgMy4zMDEtMi42ODUgNi4wMDQtNi4wNzQgNi4wMzUtMy4zODcuMDMzLTYuMTYtMi42MTctNi4xOTYtNS45MThzMi42ODUtNi4wMDQgNi4wNzItNi4wMzl6bTAtMTcuMThjMy4zODktLjAyOSA2LjE2MyAyLjYyNCA2LjE5OCA1LjkyNC4wMzMgMy4zMDEtMi42ODUgNi4wMDQtNi4wNzQgNi4wMzUtMy4zODcuMDMxLTYuMTYtMi42MTktNi4xOTYtNS45Mi0uMDM1LTMuMzAzIDIuNjg1LTYuMDA0IDYuMDcyLTYuMDM5eiIgZmlsbD0iI2M4Y2FjYyIvPjxwYXRoIGQ9Ik0xNTMuNzAzIDExNS4zNzVoMTI5LjA3MnY1NS42MTNIMTUzLjcwM3YtNTUuNjEzeiIgZmlsbD0iI2VjZjBmMSIvPjwvc3ZnPg=="

/***/ }),

/***/ "kzIj":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Ceu2");
var $Object = __webpack_require__("RlXp").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "lNxm":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/linkedin");

/***/ }),

/***/ "lPez":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("qNsG");

// EXTERNAL MODULE: ./reusecore/node_modules/react/index.js
var react = __webpack_require__("beRW");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./reusecore/src/elements/Text/index.js
var Text = __webpack_require__("+g4l");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./reusecore/src/elements/base.js
var base = __webpack_require__("4teO");

// CONCATENATED MODULE: ./reusecore/src/elements/Link/index.js

var __jsx = react_default.a.createElement;



const LinkWrapper = external_styled_components_default()('a').withConfig({
  displayName: "Link__LinkWrapper",
  componentId: "efswp7-0"
})({
  textDecoration: 'none'
}, base["a" /* base */], Object(base["b" /* themed */])('Link'));

const Link = (_ref) => {
  let {
    children
  } = _ref,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["children"]);

  return __jsx(LinkWrapper, props, children);
};

/* harmony default export */ var elements_Link = (Link);
Link.defaultProps = {
  as: 'a',
  m: 0,
  display: 'inline-block'
};
// EXTERNAL MODULE: ./reusecore/src/elements/Image/index.js
var Image = __webpack_require__("ZyGw");

// CONCATENATED MODULE: ./reusecore/src/elements/UI/Logo/index.js


var Logo_jsx = react_default.a.createElement;





const Logo = (_ref) => {
  let {
    logoWrapperStyle,
    logoStyle,
    titleStyle,
    withAchor,
    anchorProps,
    logoSrc,
    title
  } = _ref,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["logoWrapperStyle", "logoStyle", "titleStyle", "withAchor", "anchorProps", "logoSrc", "title"]);

  return Logo_jsx(elements_Link, Object(esm_extends["a" /* default */])({}, props, logoWrapperStyle), withAchor ? Logo_jsx("a", anchorProps, logoSrc ? Logo_jsx(Image["a" /* default */], Object(esm_extends["a" /* default */])({
    src: logoSrc,
    alt: title
  }, logoStyle)) : Logo_jsx(Text["a" /* default */], Object(esm_extends["a" /* default */])({
    content: title
  }, titleStyle))) : Logo_jsx(react_default.a.Fragment, null, logoSrc ? Logo_jsx(Image["a" /* default */], Object(esm_extends["a" /* default */])({
    src: logoSrc,
    alt: title
  }, logoStyle)) : Logo_jsx(Text["a" /* default */], Object(esm_extends["a" /* default */])({
    content: title
  }, titleStyle))));
};

Logo.defaultProps = {
  logoWrapperStyle: {
    display: 'inline-block',
    mr: '1rem',
    'a:hover,a:focus': {
      textDecoration: 'none'
    }
  },
  titleStyle: {
    display: 'inline-block',
    fontSize: '2rem',
    lineHeight: 'inherit',
    whiteSpace: 'nowrap'
  }
};
/* harmony default export */ var UI_Logo = __webpack_exports__["a"] = (Logo);

/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "mFw+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("V5GS");
var step = __webpack_require__("IQ5s");
var Iterators = __webpack_require__("FmMR");
var toIObject = __webpack_require__("SpVz");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("afdj")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "mm6w":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("NwPs")('asyncIterator');


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

/***/ "nY09":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("Bo4g");
var descriptor = __webpack_require__("DZbi");
var setToStringTag = __webpack_require__("5/jO");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("5l+C")(IteratorPrototype, __webpack_require__("eMt4")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "omwB":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI3NiI+PGcgZGF0YS1uYW1lPSJWZWN0b3IgU21hcnQgT2JqZWN0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjI2LjAwMSAtMjIwLjAyNSkiPjxlbGxpcHNlIGRhdGEtbmFtZT0iRWxsaXBzZSAxIiBjeD0iMTkuMjY1IiBjeT0iMjQuOTg2IiByeD0iMTkuMjY1IiByeT0iMjQuOTg2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNDYuMzIxIDIyNy45ODMpIiBmaWxsPSIjMDBjM2ZmIi8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDEyIiBkPSJNMjQ5LjI2MSAyNTIuOTY5YzAtMTMuMTU4IDcuODQyLTIzLjk0MSAxNy43OTQtMjQuOTE0cS0uNzI3LS4wNzEtMS40Ny0uMDcyYy0xMC42NCAwLTE5LjI2NSAxMS4xODctMTkuMjY1IDI0Ljk4NnM4LjYyNSAyNC45ODcgMTkuMjY1IDI0Ljk4N2MuNDk1IDAgLjk4NS0uMDI1IDEuNDctLjA3My05Ljk1NS0uOTczLTE3Ljc5NC0xMS43NTUtMTcuNzk0LTI0LjkxNHoiIGZpbGw9IiMwNmIwZjIiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggMTMiIGQ9Ik0yNjQuODk0IDI3Ny44MDdoMS4zODJhMi43NzMgMi43NzMgMCAwMTIuNzU0IDIuNzc2djIuMTk0YS40NTkuNDU5IDAgMDEtLjQ1Ny40NjFIMjYyLjZhLjQ1OS40NTkgMCAwMS0uNDU3LS40NjF2LTIuMTk0YTIuNzczIDIuNzczIDAgMDEyLjc1MS0yLjc3NnoiIGZpbGw9IiMwMGMzZmYiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggMTQiIGQ9Ik0yNjUuMDg2IDI4Mi43Nzd2LTIuMTk0YTIuNzgxIDIuNzgxIDAgMDExLjk3Mi0yLjY1OSAyLjcxMSAyLjcxMSAwIDAwLS43ODItLjExN2gtMS4zODJhMi43NzMgMi43NzMgMCAwMC0yLjc1NCAyLjc3NnYyLjE5NGEuNDU5LjQ1OSAwIDAwLjQ1Ny40NjFoMi45NDZhLjQ1OS40NTkgMCAwMS0uNDU3LS40NjF6IiBmaWxsPSIjMDZiMGYyIi8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDE1IiBkPSJNMjQ3LjAxMSAyNzAuOTE2aC0xLjM4MmEyLjc3MyAyLjc3MyAwIDAwLTIuNzU0IDIuNzc2djIuMTk0YS40NTkuNDU5IDAgMDAuNDU3LjQ2MWg1Ljk3NmEuNDU5LjQ1OSAwIDAwLjQ1Ny0uNDYxdi0yLjE5NGEyLjc3MyAyLjc3MyAwIDAwLTIuNzU0LTIuNzc2eiIgZmlsbD0iI2ZmYzg1MCIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAxNiIgZD0iTTI0NS44MjEgMjc1Ljg4NnYtMi4xOTRhMi43ODEgMi43ODEgMCAwMTEuOTcyLTIuNjU5IDIuNzA4IDIuNzA4IDAgMDAtLjc4MS0uMTE3aC0xLjM4M2EyLjc3NCAyLjc3NCAwIDAwLTIuNzU0IDIuNzc2djIuMTk0YS40Ni40NiAwIDAwLjQ1OC40NjFoMi45NDVhLjQ1OS40NTkgMCAwMS0uNDU3LS40NjF6IiBmaWxsPSIjZjliOTM4Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDE3IiBkPSJNMjQ2LjMyIDI1Mi45NjljMC0xMS40MzYgNS45MjMtMjEuMDc2IDE0LjAwNy0yNC4wNDUtMy41MTItNC44MjMtOC40ODgtNy44MzItMTQuMDA3LTcuODMyLTEwLjYzOSAwLTE5LjI2NCAxMS4xODctMTkuMjY0IDI0Ljk4NnM4LjYyNSAyNC45ODcgMTkuMjY0IDI0Ljk4N2ExNS4xOTEgMTUuMTkxIDAgMDA1LjI1OC0uOTQyIDI5LjI0OSAyOS4yNDkgMCAwMS01LjI1OC0xNy4xNTR6IiBmaWxsPSIjZmZjODUwIi8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDE4IiBkPSJNMjMwIDI0Ni4wNzhjMC0xMy4xNTQgNy44MzgtMjMuOTM1IDE3Ljc4Ny0yNC45MTNhMTUuMTg5IDE1LjE4OSAwIDAwLTEuNDY4LS4wNzNjLTEwLjYzOSAwLTE5LjI2NCAxMS4xODctMTkuMjY0IDI0Ljk4NnM4LjYyNSAyNC45ODcgMTkuMjY0IDI0Ljk4N2MuNDkzIDAgLjk4LS4wMjYgMS40NjMtLjA3NEMyMzcuODM2IDI3MC4wMSAyMzAgMjU5LjIzIDIzMCAyNDYuMDc4eiIgZmlsbD0iI2Y5YjkzOCIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAxOSIgZD0iTTI3MC43MDkgMjQ2LjlhNS4xODMgNS4xODMgMCAwMC00LjQ3MSAyLjYzNy44LjggMCAwMS0xLjMyMi0uMDA5IDUuMTIzIDUuMTIzIDAgMDAtOS41ODEgMi41NTRjLjAwNiA1Ljc3OCA1LjA2MSAxMC4zNCAxMC4wMjcgMTIuN2EuNTQ0LjU0NCAwIDAwLjQ3IDAgMjMuODkxIDIzLjg5MSAwIDAwNC45MDktMy4xODljMy4zODMtMi44NjUgNS4xLTYuMDc0IDUuMDk0LTkuNTM1YTUuMTUzIDUuMTUzIDAgMDAtNS4xMjYtNS4xNTh6IiBmaWxsPSIjZmY4MGJkIi8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDIwIiBkPSJNMjU4LjI4MSAyNTIuMDgxYTUuMTQ5IDUuMTQ5IDAgMDExLjUtMy42NTQgNS4xIDUuMSAwIDAxMi4xNDgtMS4zIDUuMDc0IDUuMDc0IDAgMDAtNS4wOTMgMS4zIDUuMTU1IDUuMTU1IDAgMDAtMS41IDMuNjU0Yy4wMDYgNS43NzggNS4wNjEgMTAuMzQgMTAuMDI4IDEyLjdhLjU0NC41NDQgMCAwMC4yMzQuMDUzLjU1My41NTMgMCAwMC4yMzYtLjA1M2MuMjczLS4xMzEuNy0uMzQ3IDEuMjI2LS42NDItNC41MzEtMi40OTMtOC43NzQtNi43NjUtOC43NzktMTIuMDU4eiIgZmlsbD0iI2Y2NmZiMiIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyMSIgZD0iTTI2OC40IDIyNy4xNTVhMS4xMTMgMS4xMTMgMCAwMC0uMzc1IDIuMTk0YzguOTkxIDEuNTU5IDE1Ljc3IDExLjczMyAxNS43NyAyMy42NjYgMCAxMy4xNjQtOC4xNDcgMjMuODczLTE4LjE2IDIzLjg3M3MtMTguMTYtMTAuNzI0LTE4LjE2LTIzLjg3M2MwLTEwLjQ2OSA1LjczMS0yMS45MjQgMTUuNzctMjMuNjY2YTEuMTEzIDEuMTEzIDAgMDAtLjM3NS0yLjE5NCAxNi4xNiAxNi4xNiAwIDAwLTIuMDkzLjUwOWMtNy44Ny0xMC4wNzMtMjAuODQ5LTEwLjMzNC0yOC45LjEwOS0xMS4zODYgMTQuNzY4LTUuMzMgNDAuMDQ2IDEwLjU4MyA0My45NzRhMy44OSAzLjg5IDAgMDAtLjYzOCAyLjE0djIuMTkzYTEuNTcgMS41NyAwIDAwMS41NjIgMS41NzRoMS44ODN2MTAuMzY2YTEuMSAxLjEgMCAxMDIuMjA5IDB2LTEwLjM2NmgxLjg4M2ExLjU2OSAxLjU2OSAwIDAwMS41NjItMS41NzR2LTIuMTkzYTMuODg4IDMuODg4IDAgMDAtLjY0Mi0yLjE0NWMuMzE5LS4wOC42MzYtLjE2Ni45NS0uMjY0YTE5LjMwOCAxOS4zMDggMCAwMDEwLjUgNy4xNiAzLjg5IDMuODkgMCAwMC0uNjM4IDIuMTR2Mi4xOTNhMS41NyAxLjU3IDAgMDAxLjU2MiAxLjU3NGgxLjg4M3YxMC4zNjZhMS4xIDEuMSAwIDEwMi4yMDkgMHYtMTAuMzY2aDEuODgzYTEuNTcgMS41NyAwIDAwMS41NjItMS41NzR2LTIuMTkzYTMuODkgMy44OSAwIDAwLS42MzgtMi4xNEMyNzkuMDI5IDI3Ni4zIDI4NiAyNjUuNTk0IDI4NiAyNTMuMDE1YzAtMTMuMDMtNy41LTI0LjEwOC0xNy42LTI1Ljg2em0tNDAuMTg5IDE4Ljk3YzAtMTMuMTY0IDguMTQ2LTIzLjg3MyAxOC4xNi0yMy44NzMgNC41ODQgMCA4Ljg4NyAyLjIwOCAxMi4yNDIgNi4yNTQtOC44NDIgNC4xNjctMTMuMzQ3IDE0Ljc0OS0xMy4zNDcgMjQuNTA5YTMwLjgwNyAzMC44MDcgMCAwMDQuNiAxNi41MzljLTExLjI5MSAyLjkwMy0yMS42NTktOC41MzQtMjEuNjU5LTIzLjQyOXptMTguODUxIDI2LjFhMS42NTcgMS42NTcgMCAwMTEuNjQ5IDEuNjYydjEuNTQxaC00LjY4MXYtMS41NDFhMS42NTggMS42NTggMCAwMTEuNjQ5LTEuNjYyem0xOS4yNjQgNi44OWExLjY1NyAxLjY1NyAwIDAxMS42NDkgMS42NjN2MS41NDFoLTQuNjh2LTEuNTQxYTEuNjU4IDEuNjU4IDAgMDExLjY0OS0xLjY2M3oiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggMjIiIGQ9Ik0yNTYuMSAyNDcuNjg3YTYuMjU5IDYuMjU5IDAgMDAtMS44MjIgNC40NDFjLjAwNiA2LjM3MiA1LjUxMSAxMS4yNTkgMTAuNjYgMTMuNzA5YTEuNjQyIDEuNjQyIDAgMDAxLjQxNSAwYzMuOTE1LTEuODczIDguNjI4LTUuNTY5IDEwLjExNS0xMC4zMjZhMS4xMTYgMS4xMTYgMCAwMC0uNzIyLTEuNCAxLjEgMS4xIDAgMDAtMS4zODUuNzI4Yy0xLjI0NSAzLjk4My01LjI3MyA3LjE2NS04LjcxNyA4Ljg2OC00LjQ2OC0yLjE5MS05LjE1Mi02LjM0My05LjE1Ny0xMS41ODJhNC4wMTkgNC4wMTkgMCAwMTcuNTE2LTIgMi4wNCAyLjA0IDAgMDAxLjY4My45MTQgMS45ODEgMS45ODEgMCAwMDEuNTg4LS45NDQgNCA0IDAgMDE3LjE0NC4zNDggMS4xIDEuMSAwIDAwMS40NjMuNTUxIDEuMTE4IDEuMTE4IDAgMDAuNTQ4LTEuNDc1IDYuMiA2LjIgMCAwMC0xMC44LS45NjEgNi4yIDYuMiAwIDAwLTkuNTI5LS44NzF6Ii8+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "ptrp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("k2NH");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("PVTl");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("hNMr");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__("BFE/");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("LP4e");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("cXTp");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("UsSw");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("beRW");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("y3XM");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__("27nJ");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("f4p5");

var _classnames3 = _interopRequireDefault(_classnames2);

var _ContainerRender = __webpack_require__("yRBM");

var _ContainerRender2 = _interopRequireDefault(_ContainerRender);

var _getScrollBarSize = __webpack_require__("QUnu");

var _getScrollBarSize2 = _interopRequireDefault(_getScrollBarSize);

var _KeyCode = __webpack_require__("L22g");

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _utils = __webpack_require__("UoEw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var IS_REACT_16 = 'createPortal' in _reactDom2['default'];

var currentDrawer = {};
var windowIsUndefined = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var Drawer = function (_React$PureComponent) {
  (0, _inherits3['default'])(Drawer, _React$PureComponent);

  function Drawer(props) {
    (0, _classCallCheck3['default'])(this, Drawer);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call(this, props));

    _initialiseProps.call(_this);

    _this.levelDom = [];
    _this.contentDom = null;
    _this.maskDom = null;
    _this.handlerDom = null;
    _this.firstEnter = props.firstEnter; // 记录首次进入.
    _this.timeout = null;
    _this.drawerId = Number((Date.now() + Math.random()).toString().replace('.', Math.round(Math.random() * 9))).toString(16);
    var open = props.open !== undefined ? props.open : !!props.defaultOpen;
    currentDrawer[_this.drawerId] = open;
    _this.state = {
      open: open
    };
    return _this;
  }

  (0, _createClass3['default'])(Drawer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!windowIsUndefined) {
        var passiveSupported = false;
        window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
          get: function get() {
            passiveSupported = true;
            return null;
          }
        }));
        this.passive = passiveSupported ? { passive: false } : false;
      }
      var open = this.getOpen();
      if (this.props.handler || open || this.firstEnter) {
        this.getDefault(this.props);
        if (open) {
          this.isOpenChange = true;
        }
        this.forceUpdate();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var open = nextProps.open,
          placement = nextProps.placement,
          getContainer = nextProps.getContainer;

      if (open !== undefined && open !== this.props.open) {
        this.isOpenChange = true;
        // 没渲染 dom 时，获取默认数据;
        var getContainerBool = typeof getContainer === 'function' && typeof this.props.getContainer === 'function' ? this.props.getContainer() === getContainer() : this.props.getContainer === getContainer;
        if (!this.container || !getContainerBool) {
          this.getDefault(nextProps);
        }
        var focus = open && !this.props.open;
        this.setState({
          open: open
        }, function () {
          _this2.domFocus(focus);
        });
      }
      if (placement !== this.props.placement) {
        // test 的 bug, 有动画过场，删除 dom
        this.contentDom = null;
      }
      if (this.props.level !== nextProps.level) {
        this.getParentAndLevelDom(nextProps);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // dom 没渲染时，重走一遍。
      if (!this.firstEnter && this.container) {
        this.forceUpdate();
        this.firstEnter = true;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      delete currentDrawer[this.drawerId];
      delete this.isOpenChange;
      if (this.container) {
        if (this.state.open) {
          this.setLevelDomTransform(false, true);
        }
        document.body.style.overflow = '';
        // 拦不住。。直接删除；
        if (this.props.getContainer) {
          this.container.parentNode.removeChild(this.container);
        }
      }
      this.firstEnter = false;
      clearTimeout(this.timeout);
      // suppport react15
      // 需要 didmount 后也会渲染，直接 unmount 将不会渲染，加上判断.
      if (this.renderComponent && !IS_REACT_16) {
        this.renderComponent({
          afterClose: this.removeContainer,
          onClose: function onClose() {},

          visible: false
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          getContainer = _props.getContainer,
          wrapperClassName = _props.wrapperClassName;

      var open = this.getOpen();
      currentDrawer[this.drawerId] = open ? this.container : open;
      var children = this.getChildToRender(this.firstEnter ? open : false);
      if (!getContainer) {
        return _react2['default'].createElement(
          'div',
          {
            className: wrapperClassName,
            ref: function ref(c) {
              if (_this3.props.getContainer) {
                return;
              }
              _this3.container = c;
            }
          },
          children
        );
      }
      if (!this.container || !open && !this.firstEnter) {
        return null;
      }
      // suppport react15
      if (!IS_REACT_16) {
        return _react2['default'].createElement(
          _ContainerRender2['default'],
          {
            parent: this,
            visible: true,
            autoMount: true,
            autoDestroy: false,
            getComponent: function getComponent() {
              return children;
            },
            getContainer: this.getContainer
          },
          function (_ref) {
            var renderComponent = _ref.renderComponent,
                removeContainer = _ref.removeContainer;

            _this3.renderComponent = renderComponent;
            _this3.removeContainer = removeContainer;
            return null;
          }
        );
      }
      return _reactDom2['default'].createPortal(children, this.container);
    }
  }]);
  return Drawer;
}(_react2['default'].PureComponent);

Drawer.propTypes = {
  wrapperClassName: _propTypes2['default'].string,
  className: _propTypes2['default'].string,
  children: _propTypes2['default'].node,
  style: _propTypes2['default'].object,
  width: _propTypes2['default'].any,
  height: _propTypes2['default'].any,
  defaultOpen: _propTypes2['default'].bool,
  firstEnter: _propTypes2['default'].bool,
  open: _propTypes2['default'].bool,
  prefixCls: _propTypes2['default'].string,
  placement: _propTypes2['default'].string,
  level: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].array]),
  levelMove: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].func, _propTypes2['default'].array]),
  ease: _propTypes2['default'].string,
  duration: _propTypes2['default'].string,
  getContainer: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].func, _propTypes2['default'].object, _propTypes2['default'].bool]),
  handler: _propTypes2['default'].any,
  onChange: _propTypes2['default'].func,
  afterVisibleChange: _propTypes2['default'].func,
  onMaskClick: _propTypes2['default'].func,
  onHandleClick: _propTypes2['default'].func,
  showMask: _propTypes2['default'].bool,
  maskStyle: _propTypes2['default'].object,
  keyboard: _propTypes2['default'].bool
};
Drawer.defaultProps = {
  prefixCls: 'drawer',
  placement: 'left',
  getContainer: 'body',
  level: 'all',
  duration: '.3s',
  ease: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  onChange: function onChange() {},
  afterVisibleChange: function afterVisibleChange() {},
  handler: _react2['default'].createElement(
    'div',
    { className: 'drawer-handle' },
    _react2['default'].createElement('i', { className: 'drawer-handle-icon' })
  ),
  firstEnter: false,
  showMask: true,
  maskStyle: {},
  wrapperClassName: '',
  className: '',
  keyboard: true
};

var _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.onMaskTouchEnd = function (e) {
    var onMaskClick = _this4.props.onMaskClick;

    if (onMaskClick) {
      onMaskClick(e);
    }
    _this4.onTouchEnd(e, true);
  };

  this.onIconTouchEnd = function (e) {
    var onHandleClick = _this4.props.onHandleClick;

    if (onHandleClick) {
      onHandleClick(e);
    }
    _this4.onTouchEnd(e);
  };

  this.onTouchEnd = function (e, close) {
    if (_this4.props.open !== undefined) {
      return;
    }
    var open = close || _this4.state.open;
    _this4.isOpenChange = true;
    _this4.setState({
      open: !open
    }, function () {
      _this4.domFocus(!open);
    });
  };

  this.onKeyDown = function (e) {
    if (e.keyCode === _KeyCode2['default'].ESC) {
      var _props2 = _this4.props,
          onMaskClick = _props2.onMaskClick,
          onHandleClick = _props2.onHandleClick;

      e.stopPropagation();
      var onClose = onHandleClick || onMaskClick;
      if (onClose) {
        onClose(e);
      } else {
        _this4.onTouchEnd(e, true);
      }
    }
  };

  this.onWrapperTransitionEnd = function (e) {
    if (e.target === _this4.contentWrapper && e.propertyName.match(/transform$/)) {
      _this4.dom.style.transition = '';
      if (!_this4.state.open && _this4.getCurrentDrawerSome()) {
        document.body.style.overflowX = '';
        if (_this4.maskDom) {
          _this4.maskDom.style.left = '';
          _this4.maskDom.style.width = '';
        }
      }
      var afterVisibleChange = _this4.props.afterVisibleChange;
      var open = _this4.state.open;

      afterVisibleChange(open);
    }
  };

  this.getDefault = function (props) {
    _this4.getParentAndLevelDom(props);
    if (props.getContainer || props.parent) {
      _this4.container = _this4.defaultGetContainer();
    }
  };

  this.getCurrentDrawerSome = function () {
    return !Object.keys(currentDrawer).some(function (key) {
      return currentDrawer[key];
    });
  };

  this.getContainer = function () {
    return _this4.container;
  };

  this.getParentAndLevelDom = function (props) {
    if (windowIsUndefined) {
      return;
    }
    var level = props.level,
        getContainer = props.getContainer;

    _this4.levelDom = [];
    if (getContainer) {
      if (typeof getContainer === 'string') {
        var dom = document.querySelectorAll(getContainer)[0];
        _this4.parent = dom;
      }
      if (typeof getContainer === 'function') {
        _this4.parent = getContainer();
      }
      if (typeof getContainer === 'object' && getContainer instanceof window.HTMLElement) {
        _this4.parent = getContainer;
      }
    }
    if (!getContainer && _this4.container) {
      _this4.parent = _this4.container.parentNode;
    }
    if (level === 'all') {
      var children = Array.prototype.slice.call(_this4.parent.children);
      children.forEach(function (child) {
        if (child.nodeName !== 'SCRIPT' && child.nodeName !== 'STYLE' && child.nodeName !== 'LINK' && child !== _this4.container) {
          _this4.levelDom.push(child);
        }
      });
    } else if (level) {
      (0, _utils.dataToArray)(level).forEach(function (key) {
        document.querySelectorAll(key).forEach(function (item) {
          _this4.levelDom.push(item);
        });
      });
    }
  };

  this.setLevelDomTransform = function (open, openTransition, placementName, value) {
    var _props3 = _this4.props,
        placement = _props3.placement,
        levelMove = _props3.levelMove,
        duration = _props3.duration,
        ease = _props3.ease,
        onChange = _props3.onChange,
        getContainer = _props3.getContainer,
        showMask = _props3.showMask;

    if (!windowIsUndefined) {
      var right = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth ? (0, _getScrollBarSize2['default'])(1) : 0;
      _this4.levelDom.forEach(function (dom) {
        if (_this4.isOpenChange || openTransition) {
          /* eslint no-param-reassign: "error" */
          dom.style.transition = 'transform ' + duration + ' ' + ease;
          (0, _utils.addEventListener)(dom, _utils.transitionEnd, _this4.transitionEnd);
          var levelValue = open ? value : 0;
          if (levelMove) {
            var $levelMove = (0, _utils.transformArguments)(levelMove, { target: dom, open: open });
            levelValue = open ? $levelMove[0] : $levelMove[1] || 0;
          }
          var $value = typeof levelValue === 'number' ? levelValue + 'px' : levelValue;
          var placementPos = placement === 'left' || placement === 'top' ? $value : '-' + $value;
          var mark = placement === 'left' || placement === 'top' ? '-' : '+';
          placementPos = showMask && (placement === 'left' || placement === 'right') && right ? 'calc(' + placementPos + ' ' + mark + ' ' + right + 'px)' : placementPos;
          dom.style.transform = levelValue ? placementName + '(' + placementPos + ')' : '';
          dom.style.msTransform = levelValue ? placementName + '(' + placementPos + ')' : '';
        }
      });
      // 处理 body 滚动
      if (getContainer === 'body' && showMask) {
        var eventArray = ['touchstart'];
        var domArray = [document.body, _this4.maskDom, _this4.handlerDom, _this4.contentDom];
        var widthTransition = 'width ' + duration + ' ' + ease;
        var transformTransition = 'transform ' + duration + ' ' + ease;
        if (open && document.body.style.overflow !== 'hidden') {
          document.body.style.overflow = 'hidden';
          document.body.style.touchAction = 'none';
          if (right) {
            document.body.style.position = 'relative';
            document.body.style.width = 'calc(100% - ' + right + 'px)';
            _this4.dom.style.transition = 'none';
            switch (placement) {
              case 'right':
                _this4.dom.style.transform = 'translateX(-' + right + 'px)';
                _this4.dom.style.msTransform = 'translateX(-' + right + 'px)';
                break;
              case 'top':
              case 'bottom':
                _this4.dom.style.width = 'calc(100% - ' + right + 'px)';
                _this4.dom.style.transform = 'translateZ(0)';
                break;
              default:
                break;
            }
            clearTimeout(_this4.timeout);
            _this4.timeout = setTimeout(function () {
              _this4.dom.style.transition = transformTransition + ',' + widthTransition;
              _this4.dom.style.width = '';
              _this4.dom.style.transform = '';
              _this4.dom.style.msTransform = '';
            });
          }
          // 手机禁滚
          domArray.forEach(function (item, i) {
            if (!item) {
              return;
            }
            (0, _utils.addEventListener)(item, eventArray[i] || 'touchmove', i ? _this4.removeMoveHandler : _this4.removeStartHandler, _this4.passive);
          });
        } else if (_this4.getCurrentDrawerSome()) {
          document.body.style.overflow = '';
          document.body.style.touchAction = '';
          if ((_this4.isOpenChange || openTransition) && right) {
            document.body.style.position = '';
            document.body.style.width = '';
            if (_utils.transitionStr) {
              document.body.style.overflowX = 'hidden';
            }
            _this4.dom.style.transition = 'none';
            var heightTransition = void 0;
            switch (placement) {
              case 'right':
                {
                  _this4.dom.style.transform = 'translateX(' + right + 'px)';
                  _this4.dom.style.msTransform = 'translateX(' + right + 'px)';
                  _this4.dom.style.width = '100%';
                  widthTransition = 'width 0s ' + ease + ' ' + duration;
                  if (_this4.maskDom) {
                    _this4.maskDom.style.left = '-' + right + 'px';
                    _this4.maskDom.style.width = 'calc(100% + ' + right + 'px)';
                  }
                  break;
                }
              case 'top':
              case 'bottom':
                {
                  _this4.dom.style.width = 'calc(100% + ' + right + 'px)';
                  _this4.dom.style.height = '100%';
                  _this4.dom.style.transform = 'translateZ(0)';
                  heightTransition = 'height 0s ' + ease + ' ' + duration;
                  break;
                }
              default:
                break;
            }
            clearTimeout(_this4.timeout);
            _this4.timeout = setTimeout(function () {
              _this4.dom.style.transition = transformTransition + ',' + (heightTransition ? heightTransition + ',' : '') + widthTransition;
              _this4.dom.style.transform = '';
              _this4.dom.style.msTransform = '';
              _this4.dom.style.width = '';
              _this4.dom.style.height = '';
            });
          }
          domArray.forEach(function (item, i) {
            if (!item) {
              return;
            }
            (0, _utils.removeEventListener)(item, eventArray[i] || 'touchmove', i ? _this4.removeMoveHandler : _this4.removeStartHandler, _this4.passive);
          });
        }
      }
    }
    if (_this4.isOpenChange && _this4.firstEnter) {
      onChange(open);
      _this4.isOpenChange = false;
    }
  };

  this.getChildToRender = function (open) {
    var _classnames;

    var _props4 = _this4.props,
        $wrapperClass = _props4.wrapperClassName,
        className = _props4.className,
        children = _props4.children,
        style = _props4.style,
        width = _props4.width,
        height = _props4.height,
        defaultOpen = _props4.defaultOpen,
        firstEnter = _props4.firstEnter,
        $open = _props4.open,
        prefixCls = _props4.prefixCls,
        placement = _props4.placement,
        level = _props4.level,
        levelMove = _props4.levelMove,
        ease = _props4.ease,
        duration = _props4.duration,
        getContainer = _props4.getContainer,
        handler = _props4.handler,
        onChange = _props4.onChange,
        afterVisibleChange = _props4.afterVisibleChange,
        onMaskClick = _props4.onMaskClick,
        onHandleClick = _props4.onHandleClick,
        showMask = _props4.showMask,
        maskStyle = _props4.maskStyle,
        keyboard = _props4.keyboard,
        props = (0, _objectWithoutProperties3['default'])(_props4, ['wrapperClassName', 'className', 'children', 'style', 'width', 'height', 'defaultOpen', 'firstEnter', 'open', 'prefixCls', 'placement', 'level', 'levelMove', 'ease', 'duration', 'getContainer', 'handler', 'onChange', 'afterVisibleChange', 'onMaskClick', 'onHandleClick', 'showMask', 'maskStyle', 'keyboard']);

    var wrapperClassName = (0, _classnames3['default'])(prefixCls, (_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-' + placement, true), (0, _defineProperty3['default'])(_classnames, prefixCls + '-open', open), (0, _defineProperty3['default'])(_classnames, className, !!className), (0, _defineProperty3['default'])(_classnames, 'no-mask', !showMask), _classnames));
    var isOpenChange = _this4.isOpenChange;
    var isHorizontal = placement === 'left' || placement === 'right';
    var placementName = 'translate' + (isHorizontal ? 'X' : 'Y');
    // 百分比与像素动画不同步，第一次打用后全用像素动画。
    // const defaultValue = !this.contentDom || !level ? '100%' : `${value}px`;
    var placementPos = placement === 'left' || placement === 'top' ? '-100%' : '100%';
    var transform = open ? '' : placementName + '(' + placementPos + ')';
    if (isOpenChange === undefined || isOpenChange) {
      var contentValue = _this4.contentDom ? _this4.contentDom.getBoundingClientRect()[isHorizontal ? 'width' : 'height'] : 0;
      var value = (isHorizontal ? width : height) || contentValue;
      _this4.setLevelDomTransform(open, false, placementName, value);
    }
    var handlerChildren = handler && _react2['default'].cloneElement(handler, {
      onClick: function onClick(e) {
        if (handler.props.onClick) {
          handler.props.onClick();
        }
        _this4.onIconTouchEnd(e);
      },
      ref: function ref(c) {
        _this4.handlerDom = c;
      }
    });
    return _react2['default'].createElement(
      'div',
      (0, _extends3['default'])({}, props, {
        tabIndex: -1,
        className: wrapperClassName,
        style: style,
        ref: function ref(c) {
          _this4.dom = c;
        },
        onKeyDown: open && keyboard ? _this4.onKeyDown : null,
        onTransitionEnd: _this4.onWrapperTransitionEnd
      }),
      showMask && _react2['default'].createElement('div', {
        className: prefixCls + '-mask',
        onClick: _this4.onMaskTouchEnd,
        style: maskStyle,
        ref: function ref(c) {
          _this4.maskDom = c;
        }
      }),
      _react2['default'].createElement(
        'div',
        {
          className: prefixCls + '-content-wrapper',
          style: {
            transform: transform,
            msTransform: transform,
            width: (0, _utils.isNumeric)(width) ? width + 'px' : width,
            height: (0, _utils.isNumeric)(height) ? height + 'px' : height
          },
          ref: function ref(c) {
            _this4.contentWrapper = c;
          }
        },
        _react2['default'].createElement(
          'div',
          {
            className: prefixCls + '-content',
            ref: function ref(c) {
              _this4.contentDom = c;
            },
            onTouchStart: open && showMask ? _this4.removeStartHandler : null // 跑用例用
            , onTouchMove: open && showMask ? _this4.removeMoveHandler : null // 跑用例用
          },
          children
        ),
        handlerChildren
      )
    );
  };

  this.getOpen = function () {
    return _this4.props.open !== undefined ? _this4.props.open : _this4.state.open;
  };

  this.getTouchParentScroll = function (root, currentTarget, differX, differY) {
    if (!currentTarget || currentTarget === document) {
      return false;
    }
    // root 为 drawer-content 设定了 overflow, 判断为 root 的 parent 时结束滚动；
    if (currentTarget === root.parentNode) {
      return true;
    }

    var isY = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differY);
    var isX = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differX);

    var scrollY = currentTarget.scrollHeight - currentTarget.clientHeight;
    var scrollX = currentTarget.scrollWidth - currentTarget.clientWidth;
    /**
     * <div style="height: 300px">
     *   <div style="height: 900px"></div>
     * </div>
     * 在没设定 overflow: auto 或 scroll 时，currentTarget 里获取不到 scrollTop 或 scrollLeft,
     * 预先用 scrollTo 来滚动，如果取出的值跟滚动前取出不同，则 currnetTarget 被设定了 overflow; 否则就是上面这种。
     */
    var t = currentTarget.scrollTop;
    var l = currentTarget.scrollLeft;
    currentTarget.scrollTop += 1;
    currentTarget.scrollLeft += 1;
    var currentT = currentTarget.scrollTop;
    var currentL = currentTarget.scrollLeft;
    currentTarget.scrollTop -= 1;
    currentTarget.scrollLeft -= 1;
    if (isY && (!scrollY || !(currentT - t) || scrollY && (currentTarget.scrollTop >= scrollY && differY < 0 || currentTarget.scrollTop <= 0 && differY > 0)) || isX && (!scrollX || !(currentL - l) || scrollX && (currentTarget.scrollLeft >= scrollX && differX < 0 || currentTarget.scrollLeft <= 0 && differX > 0))) {
      return _this4.getTouchParentScroll(root, currentTarget.parentNode, differX, differY);
    }
    return false;
  };

  this.domFocus = function (focus) {
    if (_this4.dom && focus) {
      _this4.dom.focus();
    }
  };

  this.removeStartHandler = function (e) {
    if (e.touches.length > 1) {
      return;
    }
    _this4.startPos = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
  };

  this.removeMoveHandler = function (e) {
    if (e.changedTouches.length > 1) {
      return;
    }
    var currentTarget = e.currentTarget;
    var differX = e.changedTouches[0].clientX - _this4.startPos.x;
    var differY = e.changedTouches[0].clientY - _this4.startPos.y;
    if (currentTarget === _this4.maskDom || currentTarget === _this4.handlerDom || currentTarget === _this4.contentDom && _this4.getTouchParentScroll(currentTarget, e.target, differX, differY)) {
      e.preventDefault();
    }
  };

  this.transitionEnd = function (e) {
    (0, _utils.removeEventListener)(e.target, _utils.transitionEnd, _this4.transitionEnd);
    e.target.style.transition = '';
  };

  this.defaultGetContainer = function () {
    if (windowIsUndefined) {
      return null;
    }
    var container = document.createElement('div');
    _this4.parent.appendChild(container);
    if (_this4.props.wrapperClassName) {
      container.className = _this4.props.wrapperClassName;
    }
    return container;
  };
};

exports['default'] = Drawer;
module.exports = exports['default'];

/***/ }),

/***/ "pzkD":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("SpVz");
var gOPN = __webpack_require__("U6F6").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "q+6x":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/github");

/***/ }),

/***/ "q+jx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("Lhn/")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("afdj")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "qIQb":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2NiI+PGcgZGF0YS1uYW1lPSJWZWN0b3IgU21hcnQgT2JqZWN0Ij48ZyBkYXRhLW5hbWU9Ikdyb3VwIDQiPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyMyIgZD0iTTQ5Ljg3NiAyOS4xNjhjLS4xMjcgMC0uMjUzIDAtLjM3OC4wMWE5LjMyMSA5LjMyMSAwIDAwLTEuODgyIDE4LjMxIDkuMDIzIDkuMDIzIDAgMDAyLjI2LjI4NiA5LjMwMyA5LjMwMyAwIDAwMC0xOC42MDZ6bTAgMTQuMjY4YTQuNzE5IDQuNzE5IDAgMDEtLjgtLjA2NyA0Ljk3MyA0Ljk3MyAwIDAxLjQyMS05Ljg0N2MuMTI1LS4wMDkuMjUxLS4wMTQuMzc4LS4wMTRhNC45NjQgNC45NjQgMCAwMTAgOS45Mjh6IiBmaWxsPSIjZmVlNmNjIi8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDI0IiBkPSJNNDQuOTgzIDM4LjQ3MmE0Ljk0NCA0Ljk0NCAwIDAwNC4wOTQgNC45IDE3LjYyNiAxNy42MjYgMCAwMS0xLjQ2MSA0LjEyIDkuMzIxIDkuMzIxIDAgMDExLjg4Mi0xOC4zMXY0LjM0NGE0LjkzNSA0LjkzNSAwIDAwLTQuNTE1IDQuOTQ2eiIgZmlsbD0iI2ZjY2U5OSIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNSIgZD0iTTQ3LjEzMSAyNy44MTN2MTEuNDg2YTE3LjY5MyAxNy42OTMgMCAwMS0xNy4zMTQgMTcuODhBMTcuMiAxNy4yIDAgMDEyNCA1Ni4yMTNhMTcuNjM4IDE3LjYzOCAwIDAxLTExLjQ4NS0xMy42NSAxOC4wMDUgMTguMDA1IDAgMDEtLjI2My0zLjA3NVYyNy44MTNhMS4yNjkgMS4yNjkgMCAwMTEuMjU5LTEuMjc3aDMyLjM2MWExLjI2OSAxLjI2OSAwIDAxMS4yNTkgMS4yNzd6IiBmaWxsPSIjZmVlNmNjIi8+PGcgZGF0YS1uYW1lPSJHcm91cCAxIiBmaWxsPSIjZmNjZTk5Ij48cGF0aCBkYXRhLW5hbWU9IlBhdGggMjYiIGQ9Ik0yNC43MTMgNTUuMDk2QTcuNDIxIDcuNDIxIDAgMDEyNCA1Ni4yMTNhMTcuNjM5IDE3LjYzOSAwIDAxLTExLjQ4NS0xMy42NSA1LjcgNS43IDAgMDExLjIyMS42MjYgNS45NzkgNS45NzkgMCAwMTIuMTE3IDIuNiAxMC45NTkgMTAuOTU5IDAgMDExLjctLjEzN2MzLjk1MiAwIDcuMTQ5IDIuMjI1IDcuNzcyIDUuNDA5YTYuMTQ4IDYuMTQ4IDAgMDEtLjYxMiA0LjAzNXoiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggMjciIGQ9Ik00Ny4xMzEgMzUuODQzdjMuNjQ2YTE3LjQ0MSAxNy40NDEgMCAxMS0zNC44NzkgMHYtMy42NDZhMTcuNDQxIDE3LjQ0MSAwIDEwMzQuODc5IDB6Ii8+PHBhdGggZGF0YS1uYW1lPSJSZWN0YW5nbGUgMSIgZD0iTTE1Ljc0MyA2MC4zOEg0My42NHY0LjY1NEgxNS43NDN6Ii8+PC9nPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyOCIgZD0iTTIyLjY0NCA1NC4wMDFhNy4xNSA3LjE1IDAgMDEtNSAzLjM5M2MtMy40NzcuNy02LjctLjc4OC03LjItMy4zMjkgMC0uMDIxLS4wMDctLjA0My0uMDExLS4wNjQtLjQ0Ni0yLjUxOSAxLjk1OS01LjEwOCA1LjQtNS44IDMuNDc2LS43IDYuNy43ODkgNy4yIDMuMzI5YTMuNzcxIDMuNzcxIDAgMDEtLjM4OSAyLjQ3MXoiIGZpbGw9IiNlMjc4MGUiLz48ZyBkYXRhLW5hbWU9Ikdyb3VwIDIiIGZpbGw9IiNhODUwMDAiPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyOSIgZD0iTTIyLjY0NCA1NC4wMDFhNy4xNSA3LjE1IDAgMDEtNSAzLjM5M2MtMy40NzcuNy02LjctLjc4OC03LjItMy4zMjkgMC0uMDIxLS4wMDctLjA0My0uMDExLS4wNjR6Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDMwIiBkPSJNMTcuNjQ0IDU3LjM5NGMtMy40NzUuNy02LjctLjc4OS03LjE5NC0zLjMyOGEzLjQ4MyAzLjQ4MyAwIDAxLS4wNDYtMS4wMjNjMS4wMjMgMS45MzkgMy44NDMgMi45NzMgNi44NTIgMi4zNjdzNS4yMjMtMi42NTcgNS40MzgtNC44NDVhMy40MTMgMy40MTMgMCAwMS4zNDIuOTYzYy40OTggMi41MzktMS45MTYgNS4xNjUtNS4zOTIgNS44NjZ6Ii8+PC9nPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAzMSIgZD0iTTEyLjcxNiA1My4xNzRhOS4zNjEgOS4zNjEgMCAwMS0uNjE1LjgyN2MtMS45OTIgMi4zODItNC44NzkgMy4yNzktNi43OTIgMS45OGEzLjcwOCAzLjcwOCAwIDAxLTEuNDMxLTEuOTggNy4zMSA3LjMxIDAgMDExLjE1NC02LjAzNmMxLjk2OS0yLjk4OSA1LjI4NS00LjI0NSA3LjQwNy0yLjgwN3MyLjI0NiA1LjAyOC4yNzcgOC4wMTZ6IiBmaWxsPSIjZTI3ODBlIi8+PGcgZGF0YS1uYW1lPSJHcm91cCAzIiBmaWxsPSIjYTg1MDAwIj48cGF0aCBkYXRhLW5hbWU9IlBhdGggMzIiIGQ9Ik0xMi4xIDU0LjAwMWMtMS45OTIgMi4zODItNC44NzkgMy4yNzktNi43OTIgMS45OGEzLjcwOCAzLjcwOCAwIDAxLTEuNDMxLTEuOTh6Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDMzIiBkPSJNMTIuNzE2IDUzLjE3NGMtMS45NjkgMi45ODgtNS4yODYgNC4yNDUtNy40MDggMi44MDdhMy4zNzQgMy4zNzQgMCAwMS0uNzQ1LS42OWMyLjA3NS42MzcgNC43OS0uNjU0IDYuNDk1LTMuMjQxczEuODQxLTUuNjI1LjQ2OC03LjMyNmEzLjMyOSAzLjMyOSAwIDAxLjkxMy40MzRjMi4xMjIgMS40MzkgMi4yNDYgNS4wMjguMjc3IDguMDE2eiIvPjwvZz48cGF0aCBkYXRhLW5hbWU9IlBhdGggMzQiIGQ9Ik0uOTUyIDU2LjIxM3YyLjMxMmwxNC43NDEgMi44NGgyOGwxNC43NDEtMi44NHYtMi4zMTJ6IiBmaWxsPSIjZmVlNmNjIi8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDM1IiBkPSJNNTguNDMyIDU1LjI0NGgtOS4yYS45NjcuOTY3IDAgMDAwIDEuOTMzaDguMjQ5di41NDVMNDMuNiA2MC4zOTZIMTUuNzgzTDEuOTA2IDU3LjcyMnYtLjU0NWg0My43ODNhLjk2Ny45NjcgMCAwMDAtMS45MzNoLTYuMTQ3YTE4LjYxMyAxOC42MTMgMCAwMDYuNTMtNy4yNTMgOS45IDkuOSAwIDAwMy44MDUuNzUxIDEwLjI3IDEwLjI3IDAgMDAwLTIwLjUzOSAxMC4wNiAxMC4wNiAwIDAwLTEuNzkzLjE2MnYtLjU1MmEyLjIzMSAyLjIzMSAwIDAwLTIuMjEzLTIuMjQ0aC00LjUwN2EuOTY3Ljk2NyAwIDAwMCAxLjkzM2g0LjUwN2EuMzA4LjMwOCAwIDAxLjMwNi4zMXYxLjY0M0gxMy4yMDV2LTEuNjQyYS4zMDguMzA4IDAgMDEuMzA2LS4zMWgyNC4zMTJhLjk2Ny45NjcgMCAwMDAtMS45MzNIMTMuNTExYTIuMjMgMi4yMyAwIDAwLTIuMjExIDIuMjQzVjM5LjQ5YTE4LjkzNSAxOC45MzUgMCAwMC41IDQuMzA3IDUuOTg2IDUuOTg2IDAgMDAtNS4wODcgMS4wNy45NzYuOTc2IDAgMDAtLjI0OCAxLjM0NC45NDQuOTQ0IDAgMDAxLjMyNS4yNTIgNC4zMSA0LjMxIDAgMDEzLjIyNC0uODcybC0zLjQ3MSA1LjI2OGEuOTc1Ljk3NSAwIDAwLjI2MiAxLjM0MS45NDQuOTQ0IDAgMDAxLjMyMi0uMjY2bDMuNDczLTUuMjcxYTMuODE2IDMuODE2IDAgMDEuNTY3IDIuMDh2LjAwNWE3LjA4NiA3LjA4NiAwIDAxLTEuMjM5IDMuODkgNy41MzggNy41MzggMCAwMS0xLjYyOSAxLjc5MSA1Ljk5MSA1Ljk5MSAwIDAxLTEuMzQyLjgxNUg1Ljk0NmExLjIzNiAxLjIzNiAwIDAxLS4xLS4wNjZjLTEuNTg3LTEuMDc1LTEuNjg3LTMuODU2LS4yMjktNi4zM2EuOTc0Ljk3NCAwIDAwLS4zMjgtMS4zMjYuOTQ1Ljk0NSAwIDAwLTEuMzA3LjMzNCA4Ljc5MSA4Ljc5MSAwIDAwLTEuMjc5IDQuOTQ4IDUuNzU5IDUuNzU5IDAgMDAuNjg1IDIuNDM5SC45NjFhLjk2Ljk2IDAgMDAtLjk1My45Njh2Mi4zMTJhLjk2NC45NjQgMCAwMC43NzUuOTUxbDE0LjAxNSAyLjd2Mi44NjJhLjk2Ljk2IDAgMDAuOTUzLjk2N2gyNy45YS45Ni45NiAwIDAwLjk1My0uOTY3di0yLjg2MmwxNC4wMTYtMi43YS45NjUuOTY1IDAgMDAuNzc2LS45NTF2LTIuMzFhLjk2Ljk2IDAgMDAtLjk2NC0uOTY5ek00OC4wODQgMzQuOTEzYTMuODc3IDMuODc3IDAgMDExLjc5My0uNDQgNCA0IDAgMDEwIDcuOTk1IDMuODY1IDMuODY1IDAgMDEtMS45NTEtLjUyNSAxOS4yMTMgMTkuMjEzIDAgMDAuMTU3LTIuNDU1di00LjU3NXptMS43OTMtNC43NzhhOC4zMzcgOC4zMzcgMCAwMTAgMTYuNjcyIDguMDI3IDguMDI3IDAgMDEtMy4wMjItLjU4NSAxOC44MyAxOC44MyAwIDAwLjcwOS0yLjMgNS43NiA1Ljc2IDAgMDAyLjMxMy40ODMgNS45MzIgNS45MzIgMCAwMDAtMTEuODYyIDUuNzY1IDUuNzY1IDAgMDAtMS43OTMuMjg1VjMwLjM0YTguMDg2IDguMDg2IDAgMDExLjc5My0uMjA0em0tMy43IDEuMjUzdjguMWExNi43NDEgMTYuNzQxIDAgMDEtNC44MjcgMTEuODI1IDE2LjU3NCAxNi41NzQgMCAwMS02LjExNyAzLjkyOUgyNC4xNTJjLS4zMDctLjExMi0uNjEzLS4yMy0uOTE1LS4zNjFhNC44ODggNC44ODggMCAwMC43MzUtMy41Mzl2LS4wMDVhNS4wNDMgNS4wNDMgMCAwMC0zLjAxOC0zLjU2NSA4LjY0MyA4LjY0MyAwIDAwLTUuMy0uNTE5cS0uMjU3LjA1Mi0uNTA4LjExOGExNi45MDcgMTYuOTA3IDAgMDEtMS45NDMtNy44Nzl2LTguMXpNMTMuNTA4IDUzLjcxM2E5LjI4MyA5LjI4MyAwIDAwMS41MzQtNC4zIDcuODQ1IDcuODQ1IDAgMDEuOTg1LS4yNjljMi40MjUtLjQ4OSA0Ljc2NC4yNTIgNS43IDEuNjZsLTYuMTI1IDEuMjM2YS45NjguOTY4IDAgMDAuMTg1IDEuOTE1LjkxNS45MTUgMCAwMC4xODctLjAxOWw2LjEyOC0xLjIzNmEzLjc2NSAzLjc2NSAwIDAxLTEuMDMxIDEuODU5IDUuNzYgNS43NiAwIDAxLS43ODUuNjc3aC04LjAxNGE5LjcgOS43IDAgMDAxLjIzNi0xLjUyM3ptMjkuMTc5IDEwLjM1NUgxNi43VjYyLjMzaDI1Ljk5MXoiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggMzYiIGQ9Ik0zMi4xODUgMTkuMzIyYS45NzQuOTc0IDAgMDAtLjMgMS4zMzMuOTQ1Ljk0NSAwIDAwMS4zMTQuMyA2LjY4NCA2LjY4NCAwIDAwMS4wMzYtMTAuNCA2LjY4NCA2LjY4NCAwIDAwLTEuMDM2LTEwLjQuOTQ1Ljk0NSAwIDAwLTEuMzE1LjMuOTc1Ljk3NSAwIDAwLjMgMS4zMzMgNC43MjkgNC43MjkgMCAwMTAgNy45NS45ODQuOTg0IDAgMDAwIDEuNjM2IDQuNzI5IDQuNzI5IDAgMDEwIDcuOTV6Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDM3IiBkPSJNMzguODkyIDE5LjMyMmEuOTc0Ljk3NCAwIDAwLS4zIDEuMzMzLjk0NS45NDUgMCAwMDEuMzE0LjMgNi42NzggNi42NzggMCAwMDAtMTEuMjIzLjk0Ni45NDYgMCAwMC0xLjMxNC4zLjk3NC45NzQgMCAwMC4zIDEuMzMzIDQuNzI5IDQuNzI5IDAgMDEwIDcuOTV6Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDM4IiBkPSJNMjQuOTI4IDE5LjMyMmEuOTc2Ljk3NiAwIDAwLS4zIDEuMzMzLjk0OS45NDkgMCAwMC44MDguNDUyLjkzNy45MzcgMCAwMC41MDYtLjE0OCA2LjY3NyA2LjY3NyAwIDAwMC0xMS4yMjMuOTQ2Ljk0NiAwIDAwLTEuMzE0LjMuOTc1Ljk3NSAwIDAwLjMgMS4zMzMgNC43MjggNC43MjggMCAwMTAgNy45NXoiLz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qN4F":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("k04g");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


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

/***/ "qzJh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.11.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__("beRW"),n=__webpack_require__("N8cu"),q=__webpack_require__("Ov2E");function u(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(u(227));var ba=null,ca={};
function da(){if(ba)for(var a in ca){var b=ca[a],c=ba.indexOf(a);if(!(-1<c))throw Error(u(96,a));if(!ea[c]){if(!b.extractEvents)throw Error(u(97,a));ea[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(fa.hasOwnProperty(h))throw Error(u(99,h));fa[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ha(k[e],g,h);e=!0}else f.registrationName?(ha(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(u(98,d,a));}}}}
function ha(a,b,c){if(ia[a])throw Error(u(100,a));ia[a]=b;ja[a]=b.eventTypes[c].dependencies}var ea=[],fa={},ia={},ja={};function ka(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var la=!1,ma=null,na=!1,oa=null,pa={onError:function(a){la=!0;ma=a}};function qa(a,b,c,d,e,f,g,h,k){la=!1;ma=null;ka.apply(pa,arguments)}
function ra(a,b,c,d,e,f,g,h,k){qa.apply(this,arguments);if(la){if(la){var l=ma;la=!1;ma=null}else throw Error(u(198));na||(na=!0,oa=l)}}var sa=null,ua=null,va=null;function wa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=va(c);ra(d,b,void 0,a);a.currentTarget=null}function xa(a,b){if(null==b)throw Error(u(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function ya(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var za=null;function Aa(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)wa(a,b[d],c[d]);else b&&wa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Ba(a){null!==a&&(za=xa(za,a));a=za;za=null;if(a){ya(a,Aa);if(za)throw Error(u(95));if(na)throw a=oa,na=!1,oa=null,a;}}
var Ca={injectEventPluginOrder:function(a){if(ba)throw Error(u(101));ba=Array.prototype.slice.call(a);da()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!ca.hasOwnProperty(c)||ca[c]!==d){if(ca[c])throw Error(u(102,c));ca[c]=d;b=!0}}b&&da()}};
function Da(a,b){var c=a.stateNode;if(!c)return null;var d=sa(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw Error(u(231,b,typeof c));
return c}var Ea=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Ea.hasOwnProperty("ReactCurrentDispatcher")||(Ea.ReactCurrentDispatcher={current:null});Ea.hasOwnProperty("ReactCurrentBatchConfig")||(Ea.ReactCurrentBatchConfig={suspense:null});
var Fa=/^(.*)[\\\/]/,w="function"===typeof Symbol&&Symbol.for,Ga=w?Symbol.for("react.element"):60103,Ha=w?Symbol.for("react.portal"):60106,Ia=w?Symbol.for("react.fragment"):60107,Ja=w?Symbol.for("react.strict_mode"):60108,Ka=w?Symbol.for("react.profiler"):60114,La=w?Symbol.for("react.provider"):60109,Ma=w?Symbol.for("react.context"):60110,Na=w?Symbol.for("react.concurrent_mode"):60111,Oa=w?Symbol.for("react.forward_ref"):60112,Pa=w?Symbol.for("react.suspense"):60113,Qa=w?Symbol.for("react.suspense_list"):
60120,Ra=w?Symbol.for("react.memo"):60115,Sa=w?Symbol.for("react.lazy"):60116;w&&Symbol.for("react.fundamental");w&&Symbol.for("react.responder");w&&Symbol.for("react.scope");var Ta="function"===typeof Symbol&&Symbol.iterator;function Ua(a){if(null===a||"object"!==typeof a)return null;a=Ta&&a[Ta]||a["@@iterator"];return"function"===typeof a?a:null}
function Va(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}}
function Wa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Ia:return"Fragment";case Ha:return"Portal";case Ka:return"Profiler";case Ja:return"StrictMode";case Pa:return"Suspense";case Qa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ma:return"Context.Consumer";case La:return"Context.Provider";case Oa:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case Ra:return Wa(a.type);case Sa:if(a=1===a._status?a._result:null)return Wa(a)}return null}function Xa(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=Wa(a.type);c=null;d&&(c=Wa(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Fa,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
var Ya=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Za=null,$a=null,ab=null;function bb(a){if(a=ua(a)){if("function"!==typeof Za)throw Error(u(280));var b=sa(a.stateNode);Za(a.stateNode,a.type,b)}}function cb(a){$a?ab?ab.push(a):ab=[a]:$a=a}function db(){if($a){var a=$a,b=ab;ab=$a=null;bb(a);if(b)for(a=0;a<b.length;a++)bb(b[a])}}function eb(a,b){return a(b)}function fb(a,b,c,d){return a(b,c,d)}function gb(){}
var hb=eb,ib=!1,jb=!1;function kb(){if(null!==$a||null!==ab)gb(),db()}new Map;var lb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mb=Object.prototype.hasOwnProperty,nb={},ob={};
function pb(a){if(mb.call(ob,a))return!0;if(mb.call(nb,a))return!1;if(lb.test(a))return ob[a]=!0;nb[a]=!0;return!1}function qb(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function rb(a,b,c,d){if(null===b||"undefined"===typeof b||qb(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1)});var sb=/[\-:]([a-z])/g;function tb(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(sb,
tb);D[b]=new B(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(sb,tb);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(sb,tb);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1)});
D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0)});function ub(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}
function vb(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(rb(b,c,e,d)&&(c=null),d||null===e?pb(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function wb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function xb(a){var b=wb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function yb(a){a._valueTracker||(a._valueTracker=xb(a))}function zb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=wb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Ab(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Bb(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=ub(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Cb(a,b){b=b.checked;null!=b&&vb(a,"checked",b,!1)}
function Eb(a,b){Cb(a,b);var c=ub(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Fb(a,b.type,c):b.hasOwnProperty("defaultValue")&&Fb(a,b.type,ub(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Gb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Fb(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Hb(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Ib(a,b){a=n({children:void 0},b);if(b=Hb(b.children))a.children=b;return a}
function Jb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+ub(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Kb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(u(91));return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Lb(a,b){var c=b.value;if(null==c){c=b.defaultValue;b=b.children;if(null!=b){if(null!=c)throw Error(u(92));if(Array.isArray(b)){if(!(1>=b.length))throw Error(u(93));b=b[0]}c=b}null==c&&(c="")}a._wrapperState={initialValue:ub(c)}}
function Mb(a,b){var c=ub(b.value),d=ub(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Nb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var Ob={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Pb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Pb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Rb,Sb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Ob.svg||"innerHTML"in a)a.innerHTML=b;else{Rb=Rb||document.createElement("div");Rb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Rb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Tb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}function Ub(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Vb={animationend:Ub("Animation","AnimationEnd"),animationiteration:Ub("Animation","AnimationIteration"),animationstart:Ub("Animation","AnimationStart"),transitionend:Ub("Transition","TransitionEnd")},Wb={},Xb={};
Ya&&(Xb=document.createElement("div").style,"AnimationEvent"in window||(delete Vb.animationend.animation,delete Vb.animationiteration.animation,delete Vb.animationstart.animation),"TransitionEvent"in window||delete Vb.transitionend.transition);function Yb(a){if(Wb[a])return Wb[a];if(!Vb[a])return a;var b=Vb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Xb)return Wb[a]=b[c];return a}var Zb=Yb("animationend"),$b=Yb("animationiteration"),ac=Yb("animationstart"),bc=Yb("transitionend"),dc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
function ec(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function fc(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function gc(a){if(ec(a)!==a)throw Error(u(188));}
function hc(a){var b=a.alternate;if(!b){b=ec(a);if(null===b)throw Error(u(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return gc(e),a;if(f===d)return gc(e),b;f=f.sibling}throw Error(u(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(u(189));}}if(c.alternate!==d)throw Error(u(190));}if(3!==c.tag)throw Error(u(188));return c.stateNode.current===c?a:b}function ic(a){a=hc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var jc,kc,lc,mc=!1,nc=[],oc=null,pc=null,qc=null,rc=new Map,sc=new Map,tc=[],uc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),vc="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
function wc(a){var b=xc(a);uc.forEach(function(c){yc(c,a,b)});vc.forEach(function(c){yc(c,a,b)})}function zc(a,b,c,d){return{blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:d}}function Ac(a,b){switch(a){case "focus":case "blur":oc=null;break;case "dragenter":case "dragleave":pc=null;break;case "mouseover":case "mouseout":qc=null;break;case "pointerover":case "pointerout":rc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":sc.delete(b.pointerId)}}
function Bc(a,b,c,d,e){if(null===a||a.nativeEvent!==e)return a=zc(b,c,d,e),null!==b&&(b=Cc(b),null!==b&&kc(b)),a;a.eventSystemFlags|=d;return a}function Dc(a,b,c,d){switch(b){case "focus":return oc=Bc(oc,a,b,c,d),!0;case "dragenter":return pc=Bc(pc,a,b,c,d),!0;case "mouseover":return qc=Bc(qc,a,b,c,d),!0;case "pointerover":var e=d.pointerId;rc.set(e,Bc(rc.get(e)||null,a,b,c,d));return!0;case "gotpointercapture":return e=d.pointerId,sc.set(e,Bc(sc.get(e)||null,a,b,c,d)),!0}return!1}
function Ec(a){var b=Fc(a.target);if(null!==b){var c=ec(b);if(null!==c)if(b=c.tag,13===b){if(b=fc(c),null!==b){a.blockedOn=b;q.unstable_runWithPriority(a.priority,function(){lc(c)});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Gc(a){if(null!==a.blockedOn)return!1;var b=Hc(a.topLevelType,a.eventSystemFlags,a.nativeEvent);if(null!==b){var c=Cc(b);null!==c&&kc(c);a.blockedOn=b;return!1}return!0}
function Ic(a,b,c){Gc(a)&&c.delete(b)}function Jc(){for(mc=!1;0<nc.length;){var a=nc[0];if(null!==a.blockedOn){a=Cc(a.blockedOn);null!==a&&jc(a);break}var b=Hc(a.topLevelType,a.eventSystemFlags,a.nativeEvent);null!==b?a.blockedOn=b:nc.shift()}null!==oc&&Gc(oc)&&(oc=null);null!==pc&&Gc(pc)&&(pc=null);null!==qc&&Gc(qc)&&(qc=null);rc.forEach(Ic);sc.forEach(Ic)}function Kc(a,b){a.blockedOn===b&&(a.blockedOn=null,mc||(mc=!0,q.unstable_scheduleCallback(q.unstable_NormalPriority,Jc)))}
function Lc(a){function b(b){return Kc(b,a)}if(0<nc.length){Kc(nc[0],a);for(var c=1;c<nc.length;c++){var d=nc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==oc&&Kc(oc,a);null!==pc&&Kc(pc,a);null!==qc&&Kc(qc,a);rc.forEach(b);sc.forEach(b);for(c=0;c<tc.length;c++)d=tc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<tc.length&&(c=tc[0],null===c.blockedOn);)Ec(c),null===c.blockedOn&&tc.shift()}
function Mc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Nc(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Oc(a,b,c){if(b=Da(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a)}
function Pc(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Nc(b);for(b=c.length;0<b--;)Oc(c[b],"captured",a);for(b=0;b<c.length;b++)Oc(c[b],"bubbled",a)}}function Qc(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Da(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a))}function Rc(a){a&&a.dispatchConfig.registrationName&&Qc(a._targetInst,null,a)}
function Sc(a){ya(a,Pc)}function Tc(){return!0}function Uc(){return!1}function E(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?Tc:Uc;this.isPropagationStopped=Uc;return this}
n(E.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=Tc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=Tc)},persist:function(){this.isPersistent=Tc},isPersistent:Uc,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=Uc;this._dispatchInstances=this._dispatchListeners=null}});E.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
E.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;Vc(c);return c};Vc(E);function Wc(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function Xc(a){if(!(a instanceof this))throw Error(u(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function Vc(a){a.eventPool=[];a.getPooled=Wc;a.release=Xc}var Yc=E.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Zc=E.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),$c=E.extend({view:null,detail:null}),ad=$c.extend({relatedTarget:null});
function bd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var cd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ed={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=fd[a])?!!b[a]:!1}function hd(){return gd}
var id=$c.extend({key:function(a){if(a.key){var b=cd[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=bd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?ed[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:hd,charCode:function(a){return"keypress"===a.type?bd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?bd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),jd=0,kd=0,ld=!1,md=!1,nd=$c.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:hd,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=jd;jd=a.screenX;return ld?"mousemove"===a.type?a.screenX-
b:0:(ld=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;var b=kd;kd=a.screenY;return md?"mousemove"===a.type?a.screenY-b:0:(md=!0,0)}}),od=nd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),pd=nd.extend({dataTransfer:null}),qd=$c.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:hd}),rd=E.extend({propertyName:null,
elapsedTime:null,pseudoElement:null}),sd=nd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),td=[["blur","blur",0],["cancel","cancel",0],["click","click",0],["close","close",0],["contextmenu","contextMenu",0],["copy","copy",0],["cut","cut",0],["auxclick","auxClick",0],["dblclick","doubleClick",0],["dragend","dragEnd",
0],["dragstart","dragStart",0],["drop","drop",0],["focus","focus",0],["input","input",0],["invalid","invalid",0],["keydown","keyDown",0],["keypress","keyPress",0],["keyup","keyUp",0],["mousedown","mouseDown",0],["mouseup","mouseUp",0],["paste","paste",0],["pause","pause",0],["play","play",0],["pointercancel","pointerCancel",0],["pointerdown","pointerDown",0],["pointerup","pointerUp",0],["ratechange","rateChange",0],["reset","reset",0],["seeked","seeked",0],["submit","submit",0],["touchcancel","touchCancel",
0],["touchend","touchEnd",0],["touchstart","touchStart",0],["volumechange","volumeChange",0],["drag","drag",1],["dragenter","dragEnter",1],["dragexit","dragExit",1],["dragleave","dragLeave",1],["dragover","dragOver",1],["mousemove","mouseMove",1],["mouseout","mouseOut",1],["mouseover","mouseOver",1],["pointermove","pointerMove",1],["pointerout","pointerOut",1],["pointerover","pointerOver",1],["scroll","scroll",1],["toggle","toggle",1],["touchmove","touchMove",1],["wheel","wheel",1],["abort","abort",
2],[Zb,"animationEnd",2],[$b,"animationIteration",2],[ac,"animationStart",2],["canplay","canPlay",2],["canplaythrough","canPlayThrough",2],["durationchange","durationChange",2],["emptied","emptied",2],["encrypted","encrypted",2],["ended","ended",2],["error","error",2],["gotpointercapture","gotPointerCapture",2],["load","load",2],["loadeddata","loadedData",2],["loadedmetadata","loadedMetadata",2],["loadstart","loadStart",2],["lostpointercapture","lostPointerCapture",2],["playing","playing",2],["progress",
"progress",2],["seeking","seeking",2],["stalled","stalled",2],["suspend","suspend",2],["timeupdate","timeUpdate",2],[bc,"transitionEnd",2],["waiting","waiting",2]],ud={},vd={},xd=0;for(;xd<td.length;xd++){var yd=td[xd],zd=yd[0],Ad=yd[1],Bd=yd[2],Cd="on"+(Ad[0].toUpperCase()+Ad.slice(1)),Dd={phasedRegistrationNames:{bubbled:Cd,captured:Cd+"Capture"},dependencies:[zd],eventPriority:Bd};ud[Ad]=Dd;vd[zd]=Dd}
var Ed={eventTypes:ud,getEventPriority:function(a){a=vd[a];return void 0!==a?a.eventPriority:2},extractEvents:function(a,b,c,d){var e=vd[a];if(!e)return null;switch(a){case "keypress":if(0===bd(c))return null;case "keydown":case "keyup":a=id;break;case "blur":case "focus":a=ad;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=nd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
pd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=qd;break;case Zb:case $b:case ac:a=Yc;break;case bc:a=rd;break;case "scroll":a=$c;break;case "wheel":a=sd;break;case "copy":case "cut":case "paste":a=Zc;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=od;break;default:a=E}b=a.getPooled(e,b,c,d);Sc(b);return b}},Fd=q.unstable_UserBlockingPriority,
Gd=q.unstable_runWithPriority,Hd=Ed.getEventPriority,Id=10,Jd=[];
function Kd(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=Fc(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Mc(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=a.eventSystemFlags,h=null,k=0;k<ea.length;k++){var l=ea[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=xa(h,l))}Ba(h)}}
var Ld=!0;function F(a,b){Md(b,a,!1)}function Md(a,b,c){switch(Hd(b)){case 0:var d=Nd.bind(null,b,1);break;case 1:d=Od.bind(null,b,1);break;default:d=Pd.bind(null,b,1)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function Nd(a,b,c){ib||gb();var d=Pd,e=ib;ib=!0;try{fb(d,a,b,c)}finally{(ib=e)||kb()}}function Od(a,b,c){Gd(Fd,Pd.bind(null,a,b,c))}
function Qd(a,b,c,d){if(Jd.length){var e=Jd.pop();e.topLevelType=a;e.eventSystemFlags=b;e.nativeEvent=c;e.targetInst=d;a=e}else a={topLevelType:a,eventSystemFlags:b,nativeEvent:c,targetInst:d,ancestors:[]};try{if(b=Kd,c=a,jb)b(c,void 0);else{jb=!0;try{hb(b,c,void 0)}finally{jb=!1,kb()}}}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,Jd.length<Id&&Jd.push(a)}}
function Pd(a,b,c){if(Ld)if(0<nc.length&&-1<uc.indexOf(a))a=zc(null,a,b,c),nc.push(a);else{var d=Hc(a,b,c);null===d?Ac(a,c):-1<uc.indexOf(a)?(a=zc(d,a,b,c),nc.push(a)):Dc(d,a,b,c)||(Ac(a,c),Qd(a,b,c,null))}}function Hc(a,b,c){var d=Mc(c);d=Fc(d);if(null!==d){var e=ec(d);if(null===e)d=null;else{var f=e.tag;if(13===f){d=fc(e);if(null!==d)return d;d=null}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;d=null}else e!==d&&(d=null)}}Qd(a,b,c,d);return null}
function Rd(a){if(!Ya)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var Sd=new ("function"===typeof WeakMap?WeakMap:Map);function xc(a){var b=Sd.get(a);void 0===b&&(b=new Set,Sd.set(a,b));return b}
function yc(a,b,c){if(!c.has(a)){switch(a){case "scroll":Md(b,"scroll",!0);break;case "focus":case "blur":Md(b,"focus",!0);Md(b,"blur",!0);c.add("blur");c.add("focus");break;case "cancel":case "close":Rd(a)&&Md(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===dc.indexOf(a)&&F(a,b)}c.add(a)}}
var Td={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ud=["Webkit","ms","Moz","O"];Object.keys(Td).forEach(function(a){Ud.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Td[b]=Td[a]})});function Vd(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||Td.hasOwnProperty(a)&&Td[a]?(""+b).trim():b+"px"}
function Wd(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=Vd(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var Xd=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function Yd(a,b){if(b){if(Xd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(u(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(u(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(u(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(u(62,""));}}
function Zd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}function $d(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=xc(a);b=ja[b];for(var d=0;d<b.length;d++)yc(b[d],a,c)}function ae(){}
function be(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ce(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function de(a,b){var c=ce(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=ce(c)}}
function ee(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?ee(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function fe(){for(var a=window,b=be();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=be(a.document)}return b}
function ge(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}var he="$",ie="/$",je="$?",ke="$!",le=null,me=null;function ne(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function oe(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var pe="function"===typeof setTimeout?setTimeout:void 0,qe="function"===typeof clearTimeout?clearTimeout:void 0;function re(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}
function se(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===he||c===ke||c===je){if(0===b)return a;b--}else c===ie&&b++}a=a.previousSibling}return null}var te=Math.random().toString(36).slice(2),ue="__reactInternalInstance$"+te,ve="__reactEventHandlers$"+te,we="__reactContainere$"+te;
function Fc(a){var b=a[ue];if(b)return b;for(var c=a.parentNode;c;){if(b=c[we]||c[ue]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=se(a);null!==a;){if(c=a[ue])return c;a=se(a)}return b}a=c;c=a.parentNode}return null}function Cc(a){a=a[ue]||a[we];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function xe(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(u(33));}function ye(a){return a[ve]||null}var ze=null,Ae=null,Be=null;
function Ce(){if(Be)return Be;var a,b=Ae,c=b.length,d,e="value"in ze?ze.value:ze.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return Be=e.slice(a,1<d?1-d:void 0)}var De=E.extend({data:null}),Ee=E.extend({data:null}),Fe=[9,13,27,32],Ge=Ya&&"CompositionEvent"in window,He=null;Ya&&"documentMode"in document&&(He=document.documentMode);
var Ie=Ya&&"TextEvent"in window&&!He,Je=Ya&&(!Ge||He&&8<He&&11>=He),Ke=String.fromCharCode(32),Le={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Me=!1;
function Ne(a,b){switch(a){case "keyup":return-1!==Fe.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function Oe(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var Pe=!1;function Qe(a,b){switch(a){case "compositionend":return Oe(b);case "keypress":if(32!==b.which)return null;Me=!0;return Ke;case "textInput":return a=b.data,a===Ke&&Me?null:a;default:return null}}
function Re(a,b){if(Pe)return"compositionend"===a||!Ge&&Ne(a,b)?(a=Ce(),Be=Ae=ze=null,Pe=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return Je&&"ko"!==b.locale?null:b.data;default:return null}}
var Se={eventTypes:Le,extractEvents:function(a,b,c,d){var e;if(Ge)b:{switch(a){case "compositionstart":var f=Le.compositionStart;break b;case "compositionend":f=Le.compositionEnd;break b;case "compositionupdate":f=Le.compositionUpdate;break b}f=void 0}else Pe?Ne(a,c)&&(f=Le.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=Le.compositionStart);f?(Je&&"ko"!==c.locale&&(Pe||f!==Le.compositionStart?f===Le.compositionEnd&&Pe&&(e=Ce()):(ze=d,Ae="value"in ze?ze.value:ze.textContent,Pe=!0)),f=De.getPooled(f,
b,c,d),e?f.data=e:(e=Oe(c),null!==e&&(f.data=e)),Sc(f),e=f):e=null;(a=Ie?Qe(a,c):Re(a,c))?(b=Ee.getPooled(Le.beforeInput,b,c,d),b.data=a,Sc(b)):b=null;return null===e?b:null===b?e:[e,b]}},Te={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ue(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Te[a.type]:"textarea"===b?!0:!1}
var Ve={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function We(a,b,c){a=E.getPooled(Ve.change,a,b,c);a.type="change";cb(c);Sc(a);return a}var Xe=null,Ye=null;function Ze(a){Ba(a)}function $e(a){var b=xe(a);if(zb(b))return a}function af(a,b){if("change"===a)return b}var bf=!1;Ya&&(bf=Rd("input")&&(!document.documentMode||9<document.documentMode));
function cf(){Xe&&(Xe.detachEvent("onpropertychange",df),Ye=Xe=null)}function df(a){if("value"===a.propertyName&&$e(Ye))if(a=We(Ye,a,Mc(a)),ib)Ba(a);else{ib=!0;try{eb(Ze,a)}finally{ib=!1,kb()}}}function ef(a,b,c){"focus"===a?(cf(),Xe=b,Ye=c,Xe.attachEvent("onpropertychange",df)):"blur"===a&&cf()}function ff(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return $e(Ye)}function gf(a,b){if("click"===a)return $e(b)}function hf(a,b){if("input"===a||"change"===a)return $e(b)}
var jf={eventTypes:Ve,_isInputEventSupported:bf,extractEvents:function(a,b,c,d){var e=b?xe(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=af;else if(Ue(e))if(bf)g=hf;else{g=ff;var h=ef}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=gf);if(g&&(g=g(a,b)))return We(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Fb(e,"number",e.value)}},kf={mouseEnter:{registrationName:"onMouseEnter",
dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},lf,mf={eventTypes:kf,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;
e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?Fc(b):null,null!==b&&(f=ec(b),b!==f||5!==b.tag&&6!==b.tag))b=null}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===a){var h=nd;var k=kf.mouseLeave;var l=kf.mouseEnter;var m="mouse"}else if("pointerout"===a||"pointerover"===a)h=od,k=kf.pointerLeave,l=kf.pointerEnter,m="pointer";a=null==g?e:xe(g);e=null==b?e:xe(b);k=h.getPooled(k,g,c,d);k.type=m+"leave";k.target=
a;k.relatedTarget=e;d=h.getPooled(l,b,c,d);d.type=m+"enter";d.target=e;d.relatedTarget=a;h=g;m=b;if(h&&m)a:{l=h;a=m;g=0;for(b=l;b;b=Nc(b))g++;b=0;for(e=a;e;e=Nc(e))b++;for(;0<g-b;)l=Nc(l),g--;for(;0<b-g;)a=Nc(a),b--;for(;g--;){if(l===a||l===a.alternate)break a;l=Nc(l);a=Nc(a)}l=null}else l=null;a=l;for(l=[];h&&h!==a;){g=h.alternate;if(null!==g&&g===a)break;l.push(h);h=Nc(h)}for(h=[];m&&m!==a;){g=m.alternate;if(null!==g&&g===a)break;h.push(m);m=Nc(m)}for(m=0;m<l.length;m++)Qc(l[m],"bubbled",k);for(m=
h.length;0<m--;)Qc(h[m],"captured",d);if(c===lf)return lf=null,[k];lf=c;return[k,d]}};function nf(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var of="function"===typeof Object.is?Object.is:nf,pf=Object.prototype.hasOwnProperty;function qf(a,b){if(of(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!pf.call(b,c[d])||!of(a[c[d]],b[c[d]]))return!1;return!0}
var rf=Ya&&"documentMode"in document&&11>=document.documentMode,sf={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},tf=null,uf=null,vf=null,wf=!1;
function xf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(wf||null==tf||tf!==be(c))return null;c=tf;"selectionStart"in c&&ge(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return vf&&qf(vf,c)?null:(vf=c,a=E.getPooled(sf.select,uf,a,b),a.type="select",a.target=tf,Sc(a),a)}
var yf={eventTypes:sf,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=xc(e);f=ja.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?xe(b):window;switch(a){case "focus":if(Ue(e)||"true"===e.contentEditable)tf=e,uf=b,vf=null;break;case "blur":vf=uf=tf=null;break;case "mousedown":wf=!0;break;case "contextmenu":case "mouseup":case "dragend":return wf=!1,xf(c,d);case "selectionchange":if(rf)break;
case "keydown":case "keyup":return xf(c,d)}return null}};Ca.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));var zf=Cc;sa=ye;ua=zf;va=xe;Ca.injectEventPluginsByName({SimpleEventPlugin:Ed,EnterLeaveEventPlugin:mf,ChangeEventPlugin:jf,SelectEventPlugin:yf,BeforeInputEventPlugin:Se});new Set;var Af=[],Bf=-1;function G(a){0>Bf||(a.current=Af[Bf],Af[Bf]=null,Bf--)}
function I(a,b){Bf++;Af[Bf]=a.current;a.current=b}var Cf={},J={current:Cf},K={current:!1},Df=Cf;function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L(a){a=a.childContextTypes;return null!==a&&void 0!==a}
function Ff(a){G(K,a);G(J,a)}function Gf(a){G(K,a);G(J,a)}function Hf(a,b,c){if(J.current!==Cf)throw Error(u(168));I(J,b,a);I(K,c,a)}function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(u(108,Wa(b)||"Unknown",e));return n({},c,{},d)}function Jf(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Cf;Df=J.current;I(J,b,a);I(K,K.current,a);return!0}
function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(u(169));c?(b=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=b,G(K,a),G(J,a),I(J,b,a)):G(K,a);I(K,c,a)}
var Lf=q.unstable_runWithPriority,Mf=q.unstable_scheduleCallback,Nf=q.unstable_cancelCallback,Of=q.unstable_shouldYield,Pf=q.unstable_requestPaint,Qf=q.unstable_now,Rf=q.unstable_getCurrentPriorityLevel,Sf=q.unstable_ImmediatePriority,Tf=q.unstable_UserBlockingPriority,Uf=q.unstable_NormalPriority,Vf=q.unstable_LowPriority,Wf=q.unstable_IdlePriority,Xf={},Yf=void 0!==Pf?Pf:function(){},Zf=null,$f=null,ag=!1,bg=Qf(),cg=1E4>bg?Qf:function(){return Qf()-bg};
function dg(){switch(Rf()){case Sf:return 99;case Tf:return 98;case Uf:return 97;case Vf:return 96;case Wf:return 95;default:throw Error(u(332));}}function eg(a){switch(a){case 99:return Sf;case 98:return Tf;case 97:return Uf;case 96:return Vf;case 95:return Wf;default:throw Error(u(332));}}function fg(a,b){a=eg(a);return Lf(a,b)}function gg(a,b,c){a=eg(a);return Mf(a,b,c)}function hg(a){null===Zf?(Zf=[a],$f=Mf(Sf,ig)):Zf.push(a);return Xf}function jg(){if(null!==$f){var a=$f;$f=null;Nf(a)}ig()}
function ig(){if(!ag&&null!==Zf){ag=!0;var a=0;try{var b=Zf;fg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Zf=null}catch(c){throw null!==Zf&&(Zf=Zf.slice(a+1)),Mf(Sf,jg),c;}finally{ag=!1}}}var kg=3;function lg(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function mg(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}var ng={current:null},og=null,pg=null,qg=null;function rg(){qg=pg=og=null}
function sg(a,b){var c=a.type._context;I(ng,c._currentValue,a);c._currentValue=b}function tg(a){var b=ng.current;G(ng,a);a.type._context._currentValue=b}function ug(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}
function vg(a,b){og=a;qg=pg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(wg=!0),a.firstContext=null)}function xg(a,b){if(qg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)qg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===pg){if(null===og)throw Error(u(308));pg=b;og.dependencies={expirationTime:0,firstContext:b,responders:null}}else pg=pg.next=b}return a._currentValue}var yg=!1;
function zg(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Ag(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function Bg(a,b){return{expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function Cg(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function Dg(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=zg(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=zg(a.memoizedState),e=c.updateQueue=zg(c.memoizedState)):d=a.updateQueue=Ag(e):null===e&&(e=c.updateQueue=Ag(d));null===e||d===e?Cg(d,b):null===d.lastUpdate||null===e.lastUpdate?(Cg(d,b),Cg(e,b)):(Cg(d,b),e.lastUpdate=b)}
function Eg(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=zg(a.memoizedState):Fg(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function Fg(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=Ag(b));return b}
function Gg(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-4097|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case 2:yg=!0}return d}
function Hg(a,b,c,d,e){yg=!1;b=Fg(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,l=f;null!==k;){var m=k.expirationTime;m<e?(null===g&&(g=k,f=l),h<m&&(h=m)):(Ig(m,k.suspenseConfig),l=Gg(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k)));k=k.next}m=null;for(k=b.firstCapturedUpdate;null!==k;){var C=k.expirationTime;C<e?(null===m&&(m=k,null===g&&(f=l)),h<C&&(h=C)):(l=Gg(a,b,k,l,c,d),null!==
k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k)));k=k.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=l);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;Jg(h);a.expirationTime=h;a.memoizedState=l}
function Kg(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);Lg(b.firstEffect,c);b.firstEffect=b.lastEffect=null;Lg(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function Lg(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;if("function"!==typeof c)throw Error(u(191,c));c.call(d)}a=a.nextEffect}}
var Mg=Ea.ReactCurrentBatchConfig,Ng=(new aa.Component).refs;function Og(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var Sg={isMounted:function(a){return(a=a._reactInternalFiber)?ec(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Pg(),e=Mg.suspense;d=Qg(d,a,e);e=Bg(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Dg(a,e);Rg(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Pg(),e=Mg.suspense;d=Qg(d,a,e);e=Bg(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Dg(a,e);Rg(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Pg(),d=Mg.suspense;
c=Qg(c,a,d);d=Bg(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);Dg(a,d);Rg(a,c)}};function Tg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!qf(c,d)||!qf(e,f):!0}
function Ug(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=xg(f):(e=L(b)?Df:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Sg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Vg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Sg.enqueueReplaceState(b,b.state,null)}
function Wg(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Ng;var f=b.contextType;"object"===typeof f&&null!==f?e.context=xg(f):(f=L(b)?Df:J.current,e.context=Ef(a,f));f=a.updateQueue;null!==f&&(Hg(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(Og(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==
typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Sg.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(Hg(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Xg=Array.isArray;
function Yg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(u(309));var d=c.stateNode}if(!d)throw Error(u(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Ng&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(u(284));if(!c._owner)throw Error(u(290,a));}return a}
function Zg(a,b){if("textarea"!==a.type)throw Error(u(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}
function $g(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=ah(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=bh(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=Yg(a,b,c),d.return=a,d;d=ch(c.type,c.key,c.props,null,a.mode,d);d.ref=Yg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=dh(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=eh(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function C(a,b,c){if("string"===typeof b||"number"===typeof b)return b=bh(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Ga:return c=ch(b.type,b.key,b.props,null,a.mode,c),c.ref=Yg(a,null,b),c.return=a,c;case Ha:return b=dh(b,a.mode,c),b.return=a,b}if(Xg(b)||
Ua(b))return b=eh(b,a.mode,c,null),b.return=a,b;Zg(a,b)}return null}function y(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Ga:return c.key===e?c.type===Ia?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case Ha:return c.key===e?l(a,b,c,d):null}if(Xg(c)||Ua(c))return null!==e?null:m(a,b,c,d,null);Zg(a,c)}return null}function H(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Ga:return a=a.get(null===d.key?c:d.key)||null,d.type===Ia?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case Ha:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Xg(d)||Ua(d))return a=a.get(c)||null,m(b,a,d,e,null);Zg(b,d)}return null}function z(e,g,h,k){for(var l=null,m=null,r=g,x=g=0,A=null;null!==r&&x<h.length;x++){r.index>x?(A=r,r=null):A=r.sibling;var p=y(e,r,h[x],k);if(null===p){null===r&&(r=A);break}a&&
r&&null===p.alternate&&b(e,r);g=f(p,g,x);null===m?l=p:m.sibling=p;m=p;r=A}if(x===h.length)return c(e,r),l;if(null===r){for(;x<h.length;x++)r=C(e,h[x],k),null!==r&&(g=f(r,g,x),null===m?l=r:m.sibling=r,m=r);return l}for(r=d(e,r);x<h.length;x++)A=H(r,e,x,h[x],k),null!==A&&(a&&null!==A.alternate&&r.delete(null===A.key?x:A.key),g=f(A,g,x),null===m?l=A:m.sibling=A,m=A);a&&r.forEach(function(a){return b(e,a)});return l}function ta(e,g,h,k){var l=Ua(h);if("function"!==typeof l)throw Error(u(150));h=l.call(h);
if(null==h)throw Error(u(151));for(var m=l=null,r=g,x=g=0,A=null,p=h.next();null!==r&&!p.done;x++,p=h.next()){r.index>x?(A=r,r=null):A=r.sibling;var z=y(e,r,p.value,k);if(null===z){null===r&&(r=A);break}a&&r&&null===z.alternate&&b(e,r);g=f(z,g,x);null===m?l=z:m.sibling=z;m=z;r=A}if(p.done)return c(e,r),l;if(null===r){for(;!p.done;x++,p=h.next())p=C(e,p.value,k),null!==p&&(g=f(p,g,x),null===m?l=p:m.sibling=p,m=p);return l}for(r=d(e,r);!p.done;x++,p=h.next())p=H(r,e,x,p.value,k),null!==p&&(a&&null!==
p.alternate&&r.delete(null===p.key?x:p.key),g=f(p,g,x),null===m?l=p:m.sibling=p,m=p);a&&r.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===Ia&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Ga:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===Ia:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===Ia?f.props.children:f.props,h);d.ref=Yg(a,k,f);d.return=a;a=d;break a}else{c(a,
k);break}else b(a,k);k=k.sibling}f.type===Ia?(d=eh(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=ch(f.type,f.key,f.props,null,a.mode,h),h.ref=Yg(a,d,f),h.return=a,a=h)}return g(a);case Ha:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=dh(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===
typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=bh(f,a.mode,h),d.return=a,a=d),g(a);if(Xg(f))return z(a,d,f,h);if(Ua(f))return ta(a,d,f,h);l&&Zg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(u(152,a.displayName||a.name||"Component"));}return c(a,d)}}var fh=$g(!0),gh=$g(!1),hh={},ih={current:hh},jh={current:hh},kh={current:hh};function lh(a){if(a===hh)throw Error(u(174));return a}
function mh(a,b){I(kh,b,a);I(jh,a,a);I(ih,hh,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Qb(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=Qb(b,c)}G(ih,a);I(ih,b,a)}function nh(a){G(ih,a);G(jh,a);G(kh,a)}function oh(a){lh(kh.current);var b=lh(ih.current);var c=Qb(b,a.type);b!==c&&(I(jh,a,a),I(ih,c,a))}function ph(a){jh.current===a&&(G(ih,a),G(jh,a))}var M={current:0};
function qh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===je||c.data===ke))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function rh(a,b){return{responder:a,props:b}}
var sh=Ea.ReactCurrentDispatcher,N=Ea.ReactCurrentBatchConfig,th=0,uh=null,O=null,vh=null,wh=null,P=null,xh=null,yh=0,zh=null,Ah=0,Bh=!1,Ch=null,Gh=0;function Q(){throw Error(u(321));}function Hh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!of(a[c],b[c]))return!1;return!0}
function Ih(a,b,c,d,e,f){th=f;uh=b;vh=null!==a?a.memoizedState:null;sh.current=null===vh?Jh:Kh;b=c(d,e);if(Bh){do Bh=!1,Gh+=1,vh=null!==a?a.memoizedState:null,xh=wh,zh=P=O=null,sh.current=Kh,b=c(d,e);while(Bh);Ch=null;Gh=0}sh.current=Lh;a=uh;a.memoizedState=wh;a.expirationTime=yh;a.updateQueue=zh;a.effectTag|=Ah;a=null!==O&&null!==O.next;th=0;xh=P=wh=vh=O=uh=null;yh=0;zh=null;Ah=0;if(a)throw Error(u(300));return b}
function Mh(){sh.current=Lh;th=0;xh=P=wh=vh=O=uh=null;yh=0;zh=null;Ah=0;Bh=!1;Ch=null;Gh=0}function Nh(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===P?wh=P=a:P=P.next=a;return P}function Oh(){if(null!==xh)P=xh,xh=P.next,O=vh,vh=null!==O?O.next:null;else{if(null===vh)throw Error(u(310));O=vh;var a={memoizedState:O.memoizedState,baseState:O.baseState,queue:O.queue,baseUpdate:O.baseUpdate,next:null};P=null===P?wh=a:P.next=a;vh=O.next}return P}
function Ph(a,b){return"function"===typeof b?b(a):b}
function Qh(a){var b=Oh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;if(0<Gh){var d=c.dispatch;if(null!==Ch){var e=Ch.get(c);if(void 0!==e){Ch.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);of(f,b.memoizedState)||(wg=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var g=b.baseUpdate;f=b.baseState;null!==g?(null!==d&&(d.next=null),d=g.next):d=null!==d?d.next:null;if(null!==
d){var h=e=null,k=d,l=!1;do{var m=k.expirationTime;m<th?(l||(l=!0,h=g,e=f),m>yh&&(yh=m,Jg(yh))):(Ig(m,k.suspenseConfig),f=k.eagerReducer===a?k.eagerState:a(f,k.action));g=k;k=k.next}while(null!==k&&k!==d);l||(h=g,e=f);of(f,b.memoizedState)||(wg=!0);b.memoizedState=f;b.baseUpdate=h;b.baseState=e;c.lastRenderedState=f}return[b.memoizedState,c.dispatch]}
function Rh(a){var b=Nh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={last:null,dispatch:null,lastRenderedReducer:Ph,lastRenderedState:a};a=a.dispatch=Sh.bind(null,uh,a);return[b.memoizedState,a]}function Th(a){return Qh(Ph,a)}function Uh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===zh?(zh={lastEffect:null},zh.lastEffect=a.next=a):(b=zh.lastEffect,null===b?zh.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,zh.lastEffect=a));return a}
function Vh(a,b,c,d){var e=Nh();Ah|=a;e.memoizedState=Uh(b,c,void 0,void 0===d?null:d)}function Wh(a,b,c,d){var e=Oh();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&Hh(d,g.deps)){Uh(0,c,f,d);return}}Ah|=a;e.memoizedState=Uh(b,c,f,d)}function Xh(a,b){return Vh(516,192,a,b)}function Yh(a,b){return Wh(516,192,a,b)}
function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function $h(){}function ai(a,b){Nh().memoizedState=[a,void 0===b?null:b];return a}function bi(a,b){var c=Oh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Hh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Sh(a,b,c){if(!(25>Gh))throw Error(u(301));var d=a.alternate;if(a===uh||null!==d&&d===uh)if(Bh=!0,a={expirationTime:th,suspenseConfig:null,action:c,eagerReducer:null,eagerState:null,next:null},null===Ch&&(Ch=new Map),c=Ch.get(b),void 0===c)Ch.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}else{var e=Pg(),f=Mg.suspense;e=Qg(e,a,f);f={expirationTime:e,suspenseConfig:f,action:c,eagerReducer:null,eagerState:null,next:null};var g=b.last;if(null===g)f.next=f;else{var h=g.next;null!==h&&
(f.next=h);g.next=f}b.last=f;if(0===a.expirationTime&&(null===d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var k=b.lastRenderedState,l=d(k,c);f.eagerReducer=d;f.eagerState=l;if(of(l,k))return}catch(m){}finally{}Rg(a,e)}}
var Lh={readContext:xg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useResponder:Q,useDeferredValue:Q,useTransition:Q},Jh={readContext:xg,useCallback:ai,useContext:xg,useEffect:Xh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,36,Zh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Vh(4,36,a,b)},useMemo:function(a,b){var c=Nh();b=void 0===b?null:b;a=a();c.memoizedState=
[a,b];return a},useReducer:function(a,b,c){var d=Nh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Sh.bind(null,uh,a);return[d.memoizedState,a]},useRef:function(a){var b=Nh();a={current:a};return b.memoizedState=a},useState:Rh,useDebugValue:$h,useResponder:rh,useDeferredValue:function(a,b){var c=Rh(a),d=c[0],e=c[1];Xh(function(){q.unstable_next(function(){var c=N.suspense;N.suspense=void 0===b?null:b;try{e(a)}finally{N.suspense=
c}})},[a,b]);return d},useTransition:function(a){var b=Rh(!1),c=b[0],d=b[1];return[ai(function(b){d(!0);q.unstable_next(function(){var c=N.suspense;N.suspense=void 0===a?null:a;try{d(!1),b()}finally{N.suspense=c}})},[a,c]),c]}},Kh={readContext:xg,useCallback:bi,useContext:xg,useEffect:Yh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Wh(4,36,Zh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Wh(4,36,a,b)},useMemo:function(a,b){var c=Oh();b=void 0===b?
null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Hh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:Qh,useRef:function(){return Oh().memoizedState},useState:Th,useDebugValue:$h,useResponder:rh,useDeferredValue:function(a,b){var c=Th(a),d=c[0],e=c[1];Yh(function(){q.unstable_next(function(){var c=N.suspense;N.suspense=void 0===b?null:b;try{e(a)}finally{N.suspense=c}})},[a,b]);return d},useTransition:function(a){var b=Th(!1),c=b[0],d=b[1];return[bi(function(b){d(!0);q.unstable_next(function(){var c=
N.suspense;N.suspense=void 0===a?null:a;try{d(!1),b()}finally{N.suspense=c}})},[a,c]),c]}},ci=null,di=null,ei=!1;function fi(a,b){var c=gi(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function hi(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function ii(a){if(ei){var b=di;if(b){var c=b;if(!hi(a,b)){b=re(c.nextSibling);if(!b||!hi(a,b)){a.effectTag=a.effectTag&-1025|2;ei=!1;ci=a;return}fi(ci,c)}ci=a;di=re(b.firstChild)}else a.effectTag=a.effectTag&-1025|2,ei=!1,ci=a}}function ji(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;ci=a}
function ki(a){if(a!==ci)return!1;if(!ei)return ji(a),ei=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!oe(b,a.memoizedProps))for(b=di;b;)fi(a,b),b=re(b.nextSibling);ji(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(u(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===ie){if(0===b){di=re(a.nextSibling);break a}b--}else c!==he&&c!==ke&&c!==je||b++}a=a.nextSibling}di=null}}else di=ci?re(a.stateNode.nextSibling):null;return!0}
function li(){di=ci=null;ei=!1}var mi=Ea.ReactCurrentOwner,wg=!1;function R(a,b,c,d){b.child=null===a?gh(b,null,c,d):fh(b,a.child,c,d)}function ni(a,b,c,d,e){c=c.render;var f=b.ref;vg(b,e);d=Ih(a,b,c,d,f,e);if(null!==a&&!wg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),oi(a,b,e);b.effectTag|=1;R(a,b,d,e);return b.child}
function pi(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!qi(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ri(a,b,g,d,e,f);a=ch(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:qf,c(e,d)&&a.ref===b.ref))return oi(a,b,f);b.effectTag|=1;a=ah(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function ri(a,b,c,d,e,f){return null!==a&&qf(a.memoizedProps,d)&&a.ref===b.ref&&(wg=!1,e<f)?oi(a,b,f):si(a,b,c,d,f)}function ti(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function si(a,b,c,d,e){var f=L(c)?Df:J.current;f=Ef(b,f);vg(b,e);c=Ih(a,b,c,d,f,e);if(null!==a&&!wg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),oi(a,b,e);b.effectTag|=1;R(a,b,c,e);return b.child}
function ui(a,b,c,d,e){if(L(c)){var f=!0;Jf(b)}else f=!1;vg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Ug(b,c,d,e),Wg(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=xg(l):(l=L(c)?Df:J.current,l=Ef(b,l));var m=c.getDerivedStateFromProps,C="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;C||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Vg(b,g,d,l);yg=!1;var y=b.memoizedState;k=g.state=y;var H=b.updateQueue;null!==H&&(Hg(b,H,d,g,e),k=b.memoizedState);h!==d||y!==k||K.current||yg?("function"===typeof m&&(Og(b,c,m,d),k=b.memoizedState),(h=yg||Tg(b,c,h,d,y,k,l))?(C||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:mg(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=xg(l):(l=L(c)?Df:J.current,l=Ef(b,l)),m=c.getDerivedStateFromProps,(C=
"function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Vg(b,g,d,l),yg=!1,k=b.memoizedState,y=g.state=k,H=b.updateQueue,null!==H&&(Hg(b,H,d,g,e),y=b.memoizedState),h!==d||k!==y||K.current||yg?("function"===typeof m&&(Og(b,c,m,d),y=b.memoizedState),(m=yg||Tg(b,c,h,d,k,y,l))?(C||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||
("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,y,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,y,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=
d,b.memoizedState=y),g.props=d,g.state=y,g.context=l,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return vi(a,b,c,d,f,e)}
function vi(a,b,c,d,e,f){ti(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Kf(b,c,!1),oi(a,b,f);d=b.stateNode;mi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=fh(b,a.child,null,f),b.child=fh(b,null,h,f)):R(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function wi(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);mh(a,b.containerInfo)}
var xi={dehydrated:null,retryTime:0};
function yi(a,b,c){var d=b.mode,e=b.pendingProps,f=M.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);I(M,f&1,b);if(null===a){void 0!==e.fallback&&ii(b);if(g){g=e.fallback;e=eh(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=eh(g,d,c,null);c.return=
b;e.sibling=c;b.memoizedState=xi;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=gh(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=ah(a,a.pendingProps,0);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=ah(d,e,d.expirationTime);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=xi;b.child=c;return d}c=fh(b,a.child,e.children,c);b.memoizedState=
null;return b.child=c}a=a.child;if(g){g=e.fallback;e=eh(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=eh(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=xi;b.child=e;return c}b.memoizedState=null;return b.child=fh(b,a,e.children,c)}
function zi(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);ug(a.return,b)}function Ai(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f)}
function Bi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&zi(a,c);else if(19===a.tag)zi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(M,d,b);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===qh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);Ai(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===qh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}Ai(b,!0,c,null,f,b.lastEffect);break;case "together":Ai(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function oi(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Jg(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(u(153));if(null!==b.child){a=b.child;c=ah(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=ah(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}function Ci(a){a.effectTag|=4}var Hi,Ii,Ji,Ki;
Hi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Ii=function(){};
Ji=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;lh(ih.current);a=null;switch(c){case "input":f=Ab(g,f);d=Ab(g,d);a=[];break;case "option":f=Ib(g,f);d=Ib(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=Kb(g,f);d=Kb(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=ae)}Yd(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===
h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(ia.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
c[k]=l[k])}else c||(a||(a=[]),a.push(h,c)),c=l;else"dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,""+l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(ia.hasOwnProperty(h)?(null!=l&&$d(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l))}c&&(a=a||[]).push("style",c);e=a;(b.updateQueue=e)&&Ci(b)}};Ki=function(a,b,c,d){c!==d&&Ci(b)};
function Li(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function Mi(a){switch(a.tag){case 1:L(a.type)&&Ff(a);var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:nh(a);Gf(a);b=a.effectTag;if(0!==(b&64))throw Error(u(285));a.effectTag=b&-4097|64;return a;case 5:return ph(a),null;case 13:return G(M,a),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return G(M,a),null;case 4:return nh(a),null;case 10:return tg(a),null;default:return null}}function Ni(a,b){return{value:a,source:b,stack:Xa(b)}}
var Oi="function"===typeof WeakSet?WeakSet:Set;function Pi(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=Xa(c));null!==c&&Wa(c.type);b=b.value;null!==a&&1===a.tag&&Wa(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Qi(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Ri(a,c)}}function Si(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Ri(a,c)}else b.current=null}
function Ti(a,b){switch(b.tag){case 0:case 11:case 15:Ui(2,0,b);break;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:mg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}break;case 3:case 5:case 6:case 4:case 17:break;default:throw Error(u(163));}}
function Ui(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if(0!==(d.tag&a)){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}0!==(d.tag&b)&&(e=d.create,d.destroy=e());d=d.next}while(d!==c)}}
function Vi(a,b,c){"function"===typeof Wi&&Wi(b);switch(b.tag){case 0:case 11:case 14:case 15:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;fg(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c()}catch(h){Ri(g,h)}}a=a.next}while(a!==d)})}break;case 1:Si(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&Qi(b,c);break;case 5:Si(b);break;case 4:Xi(a,b,c)}}
function Yi(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;null!==b&&Yi(b)}function Zi(a){return 5===a.tag||3===a.tag||4===a.tag}
function $i(a){a:{for(var b=a.return;null!==b;){if(Zi(b)){var c=b;break a}b=b.return}throw Error(u(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(u(161));}c.effectTag&16&&(Tb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Zi(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){var f=5===e.tag||6===e.tag;if(f){var g=f?e.stateNode:e.stateNode.instance;if(c)if(d){f=b;var h=g;g=c;8===f.nodeType?f.parentNode.insertBefore(h,g):f.insertBefore(h,g)}else b.insertBefore(g,c);else d?(h=b,8===h.nodeType?(f=h.parentNode,f.insertBefore(g,h)):(f=h,f.appendChild(g)),h=h._reactRootContainer,null!==h&&void 0!==h||null!==f.onclick||(f.onclick=ae)):b.appendChild(g)}else if(4!==
e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function Xi(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(u(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Vi(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else{if(m===k)break;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return}m.sibling.return=m.return;m=m.sibling}g?(h=
f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode)}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Vi(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function aj(a,b){switch(b.tag){case 0:case 11:case 14:case 15:Ui(4,8,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[ve]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Cb(c,d);Zd(a,e);b=Zd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?Wd(c,h):"dangerouslySetInnerHTML"===g?Sb(c,h):"children"===g?Tb(c,h):vb(c,g,h,b)}switch(a){case "input":Eb(c,d);break;case "textarea":Mb(c,
d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Jb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Jb(c,!!d.multiple,d.defaultValue,!0):Jb(c,!!d.multiple,d.multiple?[]:"",!1))}}}break;case 6:if(null===b.stateNode)throw Error(u(162));b.stateNode.nodeValue=b.memoizedProps;break;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,Lc(b.containerInfo));break;case 12:break;case 13:c=b;null===b.memoizedState?d=!1:(d=!0,c=b.child,bj=cg());
if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=Vd("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=f;continue}else if(null!==a.child){a.child.return=
a;a=a.child;continue}if(a===c)break a;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}cj(b);break;case 19:cj(b);break;case 17:break;case 20:break;case 21:break;default:throw Error(u(163));}}function cj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Oi);b.forEach(function(b){var d=dj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}var ej="function"===typeof WeakMap?WeakMap:Map;
function fj(a,b,c){c=Bg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){gj||(gj=!0,hj=d);Pi(a,b)};return c}
function ij(a,b,c){c=Bg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Pi(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===jj?jj=new Set([this]):jj.add(this),Pi(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var kj=Math.ceil,lj=Ea.ReactCurrentDispatcher,mj=Ea.ReactCurrentOwner,S=0,nj=8,oj=16,pj=32,qj=0,rj=1,sj=2,tj=3,uj=4,vj=5,T=S,U=null,V=null,W=0,X=qj,wj=null,xj=1073741823,yj=1073741823,zj=null,Aj=0,Bj=!1,bj=0,Cj=500,Y=null,gj=!1,hj=null,jj=null,Dj=!1,Ej=null,Fj=90,Gj=null,Hj=0,Ij=null,Jj=0;function Pg(){return(T&(oj|pj))!==S?1073741821-(cg()/10|0):0!==Jj?Jj:Jj=1073741821-(cg()/10|0)}
function Qg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=dg();if(0===(b&4))return 99===d?1073741823:1073741822;if((T&oj)!==S)return W;if(null!==c)a=lg(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=lg(a,150,100);break;case 97:case 96:a=lg(a,5E3,250);break;case 95:a=2;break;default:throw Error(u(326));}null!==U&&a===W&&--a;return a}
function Rg(a,b){if(50<Hj)throw Hj=0,Ij=null,Error(u(185));a=Kj(a,b);if(null!==a){var c=dg();1073741823===b?(T&nj)!==S&&(T&(oj|pj))===S?Lj(a):(Z(a),T===S&&jg()):Z(a);(T&4)===S||98!==c&&99!==c||(null===Gj?Gj=new Map([[a,b]]):(c=Gj.get(a),(void 0===c||c>b)&&Gj.set(a,b)))}}
function Kj(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(U===e&&(Jg(b),X===uj&&Mj(e,W)),Nj(e,b));return e}
function Oj(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Pj(a,b))return b;b=a.lastPingedTime;a=a.nextKnownPendingLevel;return b>a?b:a}
function Z(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=hg(Lj.bind(null,a));else{var b=Oj(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=Pg();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Xf&&Nf(c)}a.callbackExpirationTime=
b;a.callbackPriority=d;b=1073741823===b?hg(Lj.bind(null,a)):gg(d,Qj.bind(null,a),{timeout:10*(1073741821-b)-cg()});a.callbackNode=b}}}
function Qj(a,b){Jj=0;if(b)return b=Pg(),Rj(a,b),Z(a),null;var c=Oj(a);if(0!==c){b=a.callbackNode;if((T&(oj|pj))!==S)throw Error(u(327));Sj();a===U&&c===W||Tj(a,c);if(null!==V){var d=T;T|=oj;var e=Uj(a);do try{Vj();break}catch(h){Wj(a,h)}while(1);rg();T=d;lj.current=e;if(X===rj)throw b=wj,Tj(a,c),Mj(a,c),Z(a),b;if(null===V)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=X,U=null,d){case qj:case rj:throw Error(u(345));case sj:Rj(a,2<c?2:c);break;case tj:Mj(a,c);d=a.lastSuspendedTime;
c===d&&(a.nextKnownPendingLevel=Xj(e));if(1073741823===xj&&(e=bj+Cj-cg(),10<e)){if(Bj){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Tj(a,c);break}}f=Oj(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=pe(Yj.bind(null,a),e);break}Yj(a);break;case uj:Mj(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Xj(e));if(Bj&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Tj(a,c);break}e=Oj(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=
d;break}1073741823!==yj?d=10*(1073741821-yj)-cg():1073741823===xj?d=0:(d=10*(1073741821-xj)-5E3,e=cg(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*kj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=pe(Yj.bind(null,a),d);break}Yj(a);break;case vj:if(1073741823!==xj&&null!==zj){f=xj;var g=zj;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=cg()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){Mj(a,c);a.timeoutHandle=
pe(Yj.bind(null,a),d);break}}Yj(a);break;default:throw Error(u(329));}Z(a);if(a.callbackNode===b)return Qj.bind(null,a)}}return null}
function Lj(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if(a.finishedExpirationTime===b)Yj(a);else{if((T&(oj|pj))!==S)throw Error(u(327));Sj();a===U&&b===W||Tj(a,b);if(null!==V){var c=T;T|=oj;var d=Uj(a);do try{Zj();break}catch(e){Wj(a,e)}while(1);rg();T=c;lj.current=d;if(X===rj)throw c=wj,Tj(a,b),Mj(a,b),Z(a),c;if(null!==V)throw Error(u(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;U=null;Yj(a);Z(a)}}return null}
function ak(){if(null!==Gj){var a=Gj;Gj=null;a.forEach(function(a,c){Rj(c,a);Z(c)});jg()}}function bk(a,b){var c=T;T|=1;try{return a(b)}finally{T=c,T===S&&jg()}}function ck(a,b){var c=T;T&=-2;T|=nj;try{return a(b)}finally{T=c,T===S&&jg()}}
function Tj(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,qe(c));if(null!==V)for(c=V.return;null!==c;){var d=c;switch(d.tag){case 1:var e=d.type.childContextTypes;null!==e&&void 0!==e&&Ff(d);break;case 3:nh(d);Gf(d);break;case 5:ph(d);break;case 4:nh(d);break;case 13:G(M,d);break;case 19:G(M,d);break;case 10:tg(d)}c=c.return}U=a;V=ah(a.current,null,b);W=b;X=qj;wj=null;yj=xj=1073741823;zj=null;Aj=0;Bj=!1}
function Wj(a,b){do{try{rg();Mh();if(null===V||null===V.return)return X=rj,wj=b,null;a:{var c=a,d=V.return,e=V,f=b;b=W;e.effectTag|=2048;e.firstEffect=e.lastEffect=null;if(null!==f&&"object"===typeof f&&"function"===typeof f.then){var g=f,h=0!==(M.current&1),k=d;do{var l;if(l=13===k.tag){var m=k.memoizedState;if(null!==m)l=null!==m.dehydrated?!0:!1;else{var C=k.memoizedProps;l=void 0===C.fallback?!1:!0!==C.unstable_avoidThisFallback?!0:h?!1:!0}}if(l){var y=k.updateQueue;if(null===y){var H=new Set;
H.add(g);k.updateQueue=H}else y.add(g);if(0===(k.mode&2)){k.effectTag|=64;e.effectTag&=-2981;if(1===e.tag)if(null===e.alternate)e.tag=17;else{var z=Bg(1073741823,null);z.tag=2;Dg(e,z)}e.expirationTime=1073741823;break a}f=void 0;e=b;var ta=c.pingCache;null===ta?(ta=c.pingCache=new ej,f=new Set,ta.set(g,f)):(f=ta.get(g),void 0===f&&(f=new Set,ta.set(g,f)));if(!f.has(e)){f.add(e);var r=dk.bind(null,c,g,e);g.then(r,r)}k.effectTag|=4096;k.expirationTime=b;break a}k=k.return}while(null!==k);f=Error((Wa(e.type)||
"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+Xa(e))}X!==vj&&(X=sj);f=Ni(f,e);k=d;do{switch(k.tag){case 3:g=f;k.effectTag|=4096;k.expirationTime=b;var x=fj(k,g,b);Eg(k,x);break a;case 1:g=f;var A=k.type,p=k.stateNode;if(0===(k.effectTag&64)&&("function"===typeof A.getDerivedStateFromError||null!==p&&"function"===typeof p.componentDidCatch&&
(null===jj||!jj.has(p)))){k.effectTag|=4096;k.expirationTime=b;var t=ij(k,g,b);Eg(k,t);break a}}k=k.return}while(null!==k)}V=ek(V)}catch(v){b=v;continue}break}while(1)}function Uj(){var a=lj.current;lj.current=Lh;return null===a?Lh:a}function Ig(a,b){a<xj&&2<a&&(xj=a);null!==b&&a<yj&&2<a&&(yj=a,zj=b)}function Jg(a){a>Aj&&(Aj=a)}function Zj(){for(;null!==V;)V=fk(V)}function Vj(){for(;null!==V&&!Of();)V=fk(V)}
function fk(a){var b=gk(a.alternate,a,W);a.memoizedProps=a.pendingProps;null===b&&(b=ek(a));mj.current=null;return b}
function ek(a){V=a;do{var b=V.alternate;a=V.return;if(0===(V.effectTag&2048)){a:{var c=b;b=V;var d=W;var e=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:L(b.type)&&Ff(b);break;case 3:nh(b);Gf(b);e=b.stateNode;e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null);(null===c||null===c.child)&&ki(b)&&Ci(b);Ii(b);break;case 5:ph(b);d=lh(kh.current);var f=b.type;if(null!==c&&null!=b.stateNode)Ji(c,b,f,e,d),c.ref!==b.ref&&(b.effectTag|=128);else if(e){var g=
lh(ih.current);if(ki(b)){e=b;var h=e.stateNode;c=e.type;var k=e.memoizedProps,l=d;h[ue]=e;h[ve]=k;f=void 0;d=h;switch(c){case "iframe":case "object":case "embed":F("load",d);break;case "video":case "audio":for(h=0;h<dc.length;h++)F(dc[h],d);break;case "source":F("error",d);break;case "img":case "image":case "link":F("error",d);F("load",d);break;case "form":F("reset",d);F("submit",d);break;case "details":F("toggle",d);break;case "input":Bb(d,k);F("invalid",d);$d(l,"onChange");break;case "select":d._wrapperState=
{wasMultiple:!!k.multiple};F("invalid",d);$d(l,"onChange");break;case "textarea":Lb(d,k),F("invalid",d),$d(l,"onChange")}Yd(c,k);h=null;for(f in k)k.hasOwnProperty(f)&&(g=k[f],"children"===f?"string"===typeof g?d.textContent!==g&&(h=["children",g]):"number"===typeof g&&d.textContent!==""+g&&(h=["children",""+g]):ia.hasOwnProperty(f)&&null!=g&&$d(l,f));switch(c){case "input":yb(d);Gb(d,k,!0);break;case "textarea":yb(d);Nb(d,k);break;case "select":case "option":break;default:"function"===typeof k.onClick&&
(d.onclick=ae)}f=h;e.updateQueue=f;e=null!==f?!0:!1;e&&Ci(b)}else{c=b;l=f;k=e;h=9===d.nodeType?d:d.ownerDocument;g===Ob.html&&(g=Pb(l));g===Ob.html?"script"===l?(k=h.createElement("div"),k.innerHTML="<script>\x3c/script>",h=k.removeChild(k.firstChild)):"string"===typeof k.is?h=h.createElement(l,{is:k.is}):(h=h.createElement(l),"select"===l&&(l=h,k.multiple?l.multiple=!0:k.size&&(l.size=k.size))):h=h.createElementNS(g,l);k=h;k[ue]=c;k[ve]=e;Hi(k,b,!1,!1);b.stateNode=k;l=f;c=e;var m=d,C=Zd(l,c);switch(l){case "iframe":case "object":case "embed":F("load",
k);d=c;break;case "video":case "audio":for(d=0;d<dc.length;d++)F(dc[d],k);d=c;break;case "source":F("error",k);d=c;break;case "img":case "image":case "link":F("error",k);F("load",k);d=c;break;case "form":F("reset",k);F("submit",k);d=c;break;case "details":F("toggle",k);d=c;break;case "input":Bb(k,c);d=Ab(k,c);F("invalid",k);$d(m,"onChange");break;case "option":d=Ib(k,c);break;case "select":k._wrapperState={wasMultiple:!!c.multiple};d=n({},c,{value:void 0});F("invalid",k);$d(m,"onChange");break;case "textarea":Lb(k,
c);d=Kb(k,c);F("invalid",k);$d(m,"onChange");break;default:d=c}Yd(l,d);h=void 0;g=l;var y=k,H=d;for(h in H)if(H.hasOwnProperty(h)){var z=H[h];"style"===h?Wd(y,z):"dangerouslySetInnerHTML"===h?(z=z?z.__html:void 0,null!=z&&Sb(y,z)):"children"===h?"string"===typeof z?("textarea"!==g||""!==z)&&Tb(y,z):"number"===typeof z&&Tb(y,""+z):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(ia.hasOwnProperty(h)?null!=z&&$d(m,h):null!=z&&vb(y,h,z,C))}switch(l){case "input":yb(k);
Gb(k,c,!1);break;case "textarea":yb(k);Nb(k,c);break;case "option":null!=c.value&&k.setAttribute("value",""+ub(c.value));break;case "select":d=k;d.multiple=!!c.multiple;k=c.value;null!=k?Jb(d,!!c.multiple,k,!1):null!=c.defaultValue&&Jb(d,!!c.multiple,c.defaultValue,!0);break;default:"function"===typeof d.onClick&&(k.onclick=ae)}(e=ne(f,e))&&Ci(b)}null!==b.ref&&(b.effectTag|=128)}else if(null===b.stateNode)throw Error(u(166));break;case 6:if(c&&null!=b.stateNode)Ki(c,b,c.memoizedProps,e);else{if("string"!==
typeof e&&null===b.stateNode)throw Error(u(166));d=lh(kh.current);lh(ih.current);ki(b)?(e=b,f=e.stateNode,d=e.memoizedProps,f[ue]=e,(e=f.nodeValue!==d)&&Ci(b)):(f=b,e=(9===d.nodeType?d:d.ownerDocument).createTextNode(e),e[ue]=f,b.stateNode=e)}break;case 11:break;case 13:G(M,b);e=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=d;break a}e=null!==e;f=!1;null===c?void 0!==b.memoizedProps.fallback&&ki(b):(d=c.memoizedState,f=null!==d,e||null===d||(d=c.child.sibling,null!==d&&(k=b.firstEffect,
null!==k?(b.firstEffect=d,d.nextEffect=k):(b.firstEffect=b.lastEffect=d,d.nextEffect=null),d.effectTag=8)));if(e&&!f&&0!==(b.mode&2))if(null===c&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M.current&1))X===qj&&(X=tj);else{if(X===qj||X===tj)X=uj;0!==Aj&&null!==U&&(Mj(U,W),Nj(U,Aj))}if(e||f)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:nh(b);Ii(b);break;case 10:tg(b);break;case 9:break;case 14:break;case 17:L(b.type)&&Ff(b);break;case 19:G(M,b);e=b.memoizedState;if(null===
e)break;f=0!==(b.effectTag&64);k=e.rendering;if(null===k)if(f)Li(e,!1);else{if(X!==qj||null!==c&&0!==(c.effectTag&64))for(c=b.child;null!==c;){k=qh(c);if(null!==k){b.effectTag|=64;Li(e,!1);f=k.updateQueue;null!==f&&(b.updateQueue=f,b.effectTag|=4);null===e.lastEffect&&(b.firstEffect=null);b.lastEffect=e.lastEffect;e=d;for(f=b.child;null!==f;)d=f,c=e,d.effectTag&=2,d.nextEffect=null,d.firstEffect=null,d.lastEffect=null,k=d.alternate,null===k?(d.childExpirationTime=0,d.expirationTime=c,d.child=null,
d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null):(d.childExpirationTime=k.childExpirationTime,d.expirationTime=k.expirationTime,d.child=k.child,d.memoizedProps=k.memoizedProps,d.memoizedState=k.memoizedState,d.updateQueue=k.updateQueue,c=k.dependencies,d.dependencies=null===c?null:{expirationTime:c.expirationTime,firstContext:c.firstContext,responders:c.responders}),f=f.sibling;I(M,M.current&1|2,b);b=b.child;break a}c=c.sibling}}else{if(!f)if(c=qh(k),null!==c){if(b.effectTag|=
64,f=!0,d=c.updateQueue,null!==d&&(b.updateQueue=d,b.effectTag|=4),Li(e,!0),null===e.tail&&"hidden"===e.tailMode){b=b.lastEffect=e.lastEffect;null!==b&&(b.nextEffect=null);break}}else cg()>e.tailExpiration&&1<d&&(b.effectTag|=64,f=!0,Li(e,!1),b.expirationTime=b.childExpirationTime=d-1);e.isBackwards?(k.sibling=b.child,b.child=k):(d=e.last,null!==d?d.sibling=k:b.child=k,e.last=k)}if(null!==e.tail){0===e.tailExpiration&&(e.tailExpiration=cg()+500);d=e.tail;e.rendering=d;e.tail=d.sibling;e.lastEffect=
b.lastEffect;d.sibling=null;e=M.current;e=f?e&1|2:e&1;I(M,e,b);b=d;break a}break;case 20:break;case 21:break;default:throw Error(u(156,b.tag));}b=null}e=V;if(1===W||1!==e.childExpirationTime){f=0;for(d=e.child;null!==d;)c=d.expirationTime,k=d.childExpirationTime,c>f&&(f=c),k>f&&(f=k),d=d.sibling;e.childExpirationTime=f}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=V.firstEffect),null!==V.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=V.firstEffect),
a.lastEffect=V.lastEffect),1<V.effectTag&&(null!==a.lastEffect?a.lastEffect.nextEffect=V:a.firstEffect=V,a.lastEffect=V))}else{b=Mi(V,W);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048)}b=V.sibling;if(null!==b)return b;V=a}while(null!==V);X===qj&&(X=vj);return null}function Xj(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Yj(a){var b=dg();fg(99,ik.bind(null,a,b));return null}
function ik(a,b){Sj();if((T&(oj|pj))!==S)throw Error(u(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(u(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Xj(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=d-1);d<=a.lastPingedTime&&
(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===U&&(V=U=null,W=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=T;T|=pj;mj.current=null;le=Ld;var g=fe();if(ge(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,m=k.focusNode;k=k.focusOffset;
try{h.nodeType,m.nodeType}catch(Db){h=null;break a}var C=0,y=-1,H=-1,z=0,ta=0,r=g,x=null;b:for(;;){for(var A;;){r!==h||0!==l&&3!==r.nodeType||(y=C+l);r!==m||0!==k&&3!==r.nodeType||(H=C+k);3===r.nodeType&&(C+=r.nodeValue.length);if(null===(A=r.firstChild))break;x=r;r=A}for(;;){if(r===g)break b;x===h&&++z===l&&(y=C);x===m&&++ta===k&&(H=C);if(null!==(A=r.nextSibling))break;r=x;x=r.parentNode}r=A}h=-1===y||-1===H?null:{start:y,end:H}}else h=null}h=h||{start:0,end:0}}else h=null;me={focusedElem:g,selectionRange:h};
Ld=!1;Y=e;do try{jk()}catch(Db){if(null===Y)throw Error(u(330));Ri(Y,Db);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(g=a,h=b;null!==Y;){var p=Y.effectTag;p&16&&Tb(Y.stateNode,"");if(p&128){var t=Y.alternate;if(null!==t){var v=t.ref;null!==v&&("function"===typeof v?v(null):v.current=null)}}switch(p&1038){case 2:$i(Y);Y.effectTag&=-3;break;case 6:$i(Y);Y.effectTag&=-3;aj(Y.alternate,Y);break;case 1024:Y.effectTag&=-1025;break;case 1028:Y.effectTag&=-1025;aj(Y.alternate,Y);break;case 4:aj(Y.alternate,
Y);break;case 8:l=Y,Xi(g,l,h),Yi(l)}Y=Y.nextEffect}}catch(Db){if(null===Y)throw Error(u(330));Ri(Y,Db);Y=Y.nextEffect}while(null!==Y);v=me;t=fe();p=v.focusedElem;h=v.selectionRange;if(t!==p&&p&&p.ownerDocument&&ee(p.ownerDocument.documentElement,p)){null!==h&&ge(p)&&(t=h.start,v=h.end,void 0===v&&(v=t),"selectionStart"in p?(p.selectionStart=t,p.selectionEnd=Math.min(v,p.value.length)):(v=(t=p.ownerDocument||document)&&t.defaultView||window,v.getSelection&&(v=v.getSelection(),l=p.textContent.length,
g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!v.extend&&g>h&&(l=h,h=g,g=l),l=de(p,g),m=de(p,h),l&&m&&(1!==v.rangeCount||v.anchorNode!==l.node||v.anchorOffset!==l.offset||v.focusNode!==m.node||v.focusOffset!==m.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),v.removeAllRanges(),g>h?(v.addRange(t),v.extend(m.node,m.offset)):(t.setEnd(m.node,m.offset),v.addRange(t))))));t=[];for(v=p;v=v.parentNode;)1===v.nodeType&&t.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===
typeof p.focus&&p.focus();for(p=0;p<t.length;p++)v=t[p],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}me=null;Ld=!!le;le=null;a.current=c;Y=e;do try{for(p=d;null!==Y;){var Dh=Y.effectTag;if(Dh&36){var cc=Y.alternate;t=Y;v=p;switch(t.tag){case 0:case 11:case 15:Ui(16,32,t);break;case 1:var dd=t.stateNode;if(t.effectTag&4)if(null===cc)dd.componentDidMount();else{var hk=t.elementType===t.type?cc.memoizedProps:mg(t.type,cc.memoizedProps);dd.componentDidUpdate(hk,cc.memoizedState,dd.__reactInternalSnapshotBeforeUpdate)}var Eh=
t.updateQueue;null!==Eh&&Kg(t,Eh,dd,v);break;case 3:var Fh=t.updateQueue;if(null!==Fh){g=null;if(null!==t.child)switch(t.child.tag){case 5:g=t.child.stateNode;break;case 1:g=t.child.stateNode}Kg(t,Fh,g,v)}break;case 5:var xk=t.stateNode;null===cc&&t.effectTag&4&&ne(t.type,t.memoizedProps)&&xk.focus();break;case 6:break;case 4:break;case 12:break;case 13:if(null===t.memoizedState){var Di=t.alternate;if(null!==Di){var Ei=Di.memoizedState;if(null!==Ei){var Fi=Ei.dehydrated;null!==Fi&&Lc(Fi)}}}break;
case 19:case 17:case 20:case 21:break;default:throw Error(u(163));}}if(Dh&128){t=void 0;var wd=Y.ref;if(null!==wd){var Gi=Y.stateNode;switch(Y.tag){case 5:t=Gi;break;default:t=Gi}"function"===typeof wd?wd(t):wd.current=t}}Y=Y.nextEffect}}catch(Db){if(null===Y)throw Error(u(330));Ri(Y,Db);Y=Y.nextEffect}while(null!==Y);Y=null;Yf();T=f}else a.current=c;if(Dj)Dj=!1,Ej=a,Fj=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0===b&&(jj=null);1073741823===b?a===Ij?Hj++:(Hj=
0,Ij=a):Hj=0;"function"===typeof kk&&kk(c.stateNode,d);Z(a);if(gj)throw gj=!1,a=hj,hj=null,a;if((T&nj)!==S)return null;jg();return null}function jk(){for(;null!==Y;){var a=Y.effectTag;0!==(a&256)&&Ti(Y.alternate,Y);0===(a&512)||Dj||(Dj=!0,gg(97,function(){Sj();return null}));Y=Y.nextEffect}}function Sj(){if(90!==Fj){var a=97<Fj?97:Fj;Fj=90;return fg(a,lk)}}
function lk(){if(null===Ej)return!1;var a=Ej;Ej=null;if((T&(oj|pj))!==S)throw Error(u(331));var b=T;T|=pj;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:Ui(128,0,c),Ui(0,64,c)}}catch(d){if(null===a)throw Error(u(330));Ri(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}T=b;jg();return!0}function mk(a,b,c){b=Ni(c,b);b=fj(a,b,1073741823);Dg(a,b);a=Kj(a,1073741823);null!==a&&Z(a)}
function Ri(a,b){if(3===a.tag)mk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){mk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===jj||!jj.has(d))){a=Ni(b,a);a=ij(c,a,1073741823);Dg(c,a);c=Kj(c,1073741823);null!==c&&Z(c);break}}c=c.return}}
function dk(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);U===a&&W===c?X===uj||X===tj&&1073741823===xj&&cg()-bj<Cj?Tj(a,W):Bj=!0:Pj(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,a.finishedExpirationTime===c&&(a.finishedExpirationTime=0,a.finishedWork=null),Z(a)))}function dj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=Pg(),b=Qg(b,a,null));a=Kj(a,b);null!==a&&Z(a)}var gk;
gk=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||K.current)wg=!0;else{if(d<c){wg=!1;switch(b.tag){case 3:wi(b);li();break;case 5:oh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:L(b.type)&&Jf(b);break;case 4:mh(b,b.stateNode.containerInfo);break;case 10:sg(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return yi(a,b,c);I(M,M.current&
1,b);b=oi(a,b,c);return null!==b?b.sibling:null}I(M,M.current&1,b);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return Bi(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);I(M,M.current,b);if(!d)return null}return oi(a,b,c)}wg=!1}}else wg=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Ef(b,J.current);vg(b,c);e=Ih(null,b,d,a,e,c);b.effectTag|=1;if("object"===
typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;Mh();if(L(d)){var f=!0;Jf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&Og(b,d,g,a);e.updater=Sg;b.stateNode=e;e._reactInternalFiber=b;Wg(b,d,a,c);b=vi(null,b,d,!0,f,c)}else b.tag=0,R(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;Va(e);if(1!==e._status)throw e._result;
e=e._result;b.type=e;f=b.tag=nk(e);a=mg(e,a);switch(f){case 0:b=si(null,b,e,a,c);break;case 1:b=ui(null,b,e,a,c);break;case 11:b=ni(null,b,e,a,c);break;case 14:b=pi(null,b,e,mg(e.type,a),d,c);break;default:throw Error(u(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:mg(d,e),si(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:mg(d,e),ui(a,b,d,e,c);case 3:wi(b);d=b.updateQueue;if(null===d)throw Error(u(282));e=b.memoizedState;e=null!==e?e.element:
null;Hg(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)li(),b=oi(a,b,c);else{if(e=b.stateNode.hydrate)di=re(b.stateNode.containerInfo.firstChild),ci=b,e=ei=!0;if(e)for(c=gh(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else R(a,b,d,c),li();b=b.child}return b;case 5:return oh(b),null===a&&ii(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,oe(d,e)?g=null:null!==f&&oe(d,f)&&(b.effectTag|=16),ti(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=
b.childExpirationTime=1,b=null):(R(a,b,g,c),b=b.child),b;case 6:return null===a&&ii(b),null;case 13:return yi(a,b,c);case 4:return mh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=fh(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:mg(d,e),ni(a,b,d,e,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,b,b.pendingProps.children,c),b.child;case 12:return R(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;
e=b.pendingProps;g=b.memoizedProps;f=e.value;sg(b,f);if(null!==g){var h=g.value;f=of(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!K.current){b=oi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=Bg(c,null),l.tag=2,Dg(h,l));h.expirationTime<c&&(h.expirationTime=
c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);ug(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}}R(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,vg(b,c),e=xg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R(a,b,d,c),b.child;
case 14:return e=b.type,f=mg(e,b.pendingProps),f=mg(e.type,f),pi(a,b,e,f,d,c);case 15:return ri(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:mg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L(d)?(a=!0,Jf(b)):a=!1,vg(b,c),Ug(b,d,e,c),Wg(b,d,e,c),vi(null,b,d,!0,a,c);case 19:return Bi(a,b,c)}throw Error(u(156,b.tag));};var kk=null,Wi=null;
function ok(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);kk=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};Wi=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function pk(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function gi(a,b,c,d){return new pk(a,b,c,d)}
function qi(a){a=a.prototype;return!(!a||!a.isReactComponent)}function nk(a){if("function"===typeof a)return qi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Oa)return 11;if(a===Ra)return 14}return 2}
function ah(a,b){var c=a.alternate;null===c?(c=gi(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function ch(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)qi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case Ia:return eh(c.children,e,f,b);case Na:g=8;e|=7;break;case Ja:g=8;e|=1;break;case Ka:return a=gi(12,c,b,e|8),a.elementType=Ka,a.type=Ka,a.expirationTime=f,a;case Pa:return a=gi(13,c,b,e),a.type=Pa,a.elementType=Pa,a.expirationTime=f,a;case Qa:return a=gi(19,c,b,e),a.elementType=Qa,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case La:g=
10;break a;case Ma:g=9;break a;case Oa:g=11;break a;case Ra:g=14;break a;case Sa:g=16;d=null;break a}throw Error(u(130,null==a?a:typeof a,""));}b=gi(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function eh(a,b,c,d){a=gi(7,a,d,b);a.expirationTime=c;return a}function bh(a,b,c){a=gi(6,a,null,b);a.expirationTime=c;return a}
function dh(a,b,c){b=gi(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function qk(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}
function Pj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function Mj(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}
function Nj(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b))}function Rj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}
function rk(a,b,c,d){var e=b.current,f=Pg(),g=Mg.suspense;f=Qg(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(ec(c)!==c||1!==c.tag)throw Error(u(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(L(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(u(171));}if(1===c.tag){var k=c.type;if(L(k)){c=If(c,k,h);break a}}c=h}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=Bg(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);Dg(e,b);Rg(e,f);return f}function sk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function tk(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b)}function uk(a,b){tk(a,b);(a=a.alternate)&&tk(a,b)}
function vk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Ha,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}jc=function(a){if(13===a.tag){var b=lg(Pg(),150,100);Rg(a,b);uk(a,b)}};kc=function(a){if(13===a.tag){Pg();var b=kg++;Rg(a,b);uk(a,b)}};lc=function(a){if(13===a.tag){var b=Pg();b=Qg(b,a,null);Rg(a,b);uk(a,b)}};
Za=function(a,b,c){switch(b){case "input":Eb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=ye(d);if(!e)throw Error(u(90));zb(d);Eb(d,e)}}}break;case "textarea":Mb(a,c);break;case "select":b=c.value,null!=b&&Jb(a,!!c.multiple,b,!1)}};
function wk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new qk(a,b,c),e=gi(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;a[we]=d.current;c&&0!==b&&wc(9===a.nodeType?a:a.ownerDocument);this._internalRoot=d}wk.prototype.render=function(a,b){var c=this._internalRoot;rk(a,c,null,void 0===b?null:b)};wk.prototype.unmount=function(a){var b=this._internalRoot;rk(null,b,null,void 0===a?null:a)};
function yk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}eb=bk;fb=function(a,b,c,d){var e=T;T|=4;try{return fg(98,a.bind(null,b,c,d))}finally{T=e,T===S&&jg()}};gb=function(){(T&(1|oj|pj))===S&&(ak(),Sj())};hb=function(a,b){var c=T;T|=2;try{return a(b)}finally{T=c,T===S&&jg()}};
function zk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new wk(a,0,b?{hydrate:!0}:void 0)}
function Ak(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=sk(g);h.call(a)}}rk(b,g,a,e)}else{f=c._reactRootContainer=zk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=sk(g);k.call(a)}}ck(function(){rk(b,g,a,e)})}return sk(g)}function Bk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!yk(b))throw Error(u(200));return vk(a,b,null,c)}
var Ck={createPortal:Bk,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u(188));throw Error(u(268,Object.keys(a)));}a=ic(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){if(!yk(b))throw Error(u(200));return Ak(null,a,b,!0,c)},render:function(a,b,c){if(!yk(b))throw Error(u(200));return Ak(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){if(!yk(c))throw Error(u(200));
if(null==a||void 0===a._reactInternalFiber)throw Error(u(38));return Ak(a,b,c,!1,d)},unmountComponentAtNode:function(a){if(!yk(a))throw Error(u(40));return a._reactRootContainer?(ck(function(){Ak(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Bk.apply(void 0,arguments)},unstable_batchedUpdates:bk,flushSync:function(a,b){if((T&(oj|pj))!==S)throw Error(u(187));var c=T;T|=1;try{return fg(99,a.bind(null,b))}finally{T=c,jg()}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Cc,
xe,ye,Ca.injectEventPluginsByName,fa,Sc,function(a){ya(a,Rc)},cb,db,Pd,Ba,Sj,{current:!1}]}};
(function(a){var b=a.findFiberByHostInstance;return ok(n({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ea.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=ic(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:Fc,bundleType:0,version:"16.11.0",
rendererPackageName:"react-dom"});var Dk={default:Ck},Ek=Dk&&Ck||Dk;module.exports=Ek.default||Ek;


/***/ }),

/***/ "rIwS":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("LYUY"), __esModule: true };

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "s/bQ":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "sClA":
/***/ (function(module, exports) {



/***/ }),

/***/ "sIDk":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA5IAAAE8CAMAAACFJn6XAAAAb1BMVEX///8nExUAcbwnExUAcbwnExUAcbwnExUnExUnExUnExUAcbwnExUnExUnExUnExUAcbwnExUnExUnExUAcbwResAihMUnExUzjclEl85VoNJmqtd3s9uIveCZxuSq0Om72e3M4/Ld7Pbu9vv///9XIRkaAAAAFHRSTlMAESAiMDNARFVmd4CImaq7wMzd7uTifrIAABywSURBVHja7Z1pe6O4EkbNMAygATSAE3c6ztJJ///feL1hs2ipEhLmtt/zpfO0bZUkOFAIITYbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADASvj7nyN/nf7+Z2WcKvXX6c+/saXAg/Df9si/p7+3K+NUqX9Pf/6HLQWgJJQEAEpCSQAloSQAUBJKAgAlAYCSUBIAKAkAlISSAEBJAKAklAQASkJJACWhJABQEkoCACUBgJJQEgAoCQCUhJIAQEkAoCSUBABKAgAloSQAUBJKAigJJQGAklASACgJAJSEkgBASQCgJJQEAEoCACXH/Hh9//z6feD782P/AiUBuKeSz/uTjTe+35+hJAB3UvL5/feUdygJwH2U3H8rjPz9CiUBuIeSTx+dhJ/715cDP/cfxyz2CUoCcAcln36dffx67Tv44+0DwzsA3EHJi5Hfr7gJAsAalDwP7Px62kJJAFag5Ot5cNWrkVASQEnntPXb/zkSSgIo6X7743Qd+byFkgCsQcnzSXKPOa4ArEPJ80nyCUoCsA4lTzdA3vAkCADrUPL5NNz6A0oCsA4lf55m7eB5SQBWouTpUvIDSgKwEiU/g4y3QkkAJeeM7rxCSQBWouRpdOcFSgKwXiUHDzFDSQCgJABQEkoCsAolv6YjrlASgPsp+amfTwclAVheybfTGlhQEoCVKHleUuAJSgKwDiWf9eu1QkkAllfyPH3nC0oCsBIlz5nrHkoCsA4lz7dBvn9ASQDWoeSrbhVXKAnAPZQ835r8/esHlARgFUqe16j7/b2HkgCsQcntj2/VW3qgJAB3UnL7/Gv0LruXl/37N5QE4E5Kbp/efmuAkgDcQcnt9uUTSgKwIiUPUr6Pdfx+f32CkgDcScmjlfuPz9Ml5Pfn4aJy1pt7oCSAkqsCSgIoCSUBgJJQEoBHUDLORSXb3ZFaliKN5vZVlB0KbA7FSVmIBPsOgJIMsrLZjanFyMrzf0uaj7kcltYWWiuTTAgpL4eDXSulyAkGZ13J+u9yKmz60c5W0PlzoStlR0KSKq1ptnuIrkDTIVhc9ghrqBRKelEyEq26g9uhlPQ9XF2iTA3784imiC0xyu6rxVJKDpy7l5KaZs8IcdlUmaFP6n4DoWRoJaOC2sXkPVyn+K6KqEoeKM1SXmM0iynZRvdXUtPsGSGqS3cbrmkuP4+h5BJKZq2hhxuXPTyS+gLbjK6k8svTBM6QufpWclfdXUlds2eEyC+9bc1bqw2UDK9kVI222YnalBzZ9vCkd1XaVEKIQvatF3QlDZliL4EzZK7eldTtcsspqWv2jBDRzpa5XvaHHEqGVzKp+1dv2S0vi7OimWwl0h6e3DIrcc08k6LVC9Rdt4r0RC56Z9ncnrcaMlf/SjaRi5JyxHUca0BBqbSu2XNCVJYjWzwcAFIXfSaBkvOUvOmzK6edGRcNfw+/FtnmowEfrWbTYqO8sSWl5wSuMB+b/SupOW9blGTVy/ghqdncELnlyDbMW916FUoyjSxjx511kgi32oGcW0KbEootdpQELpPGkYkASqqPEYspSWo2N0RkOfzVw8QWSgZTMuqy1jZ13lk1W0+5t9ziRYRixWCUT5PAXc697SJKSn1piylJajY7hDlzjUfDP1AymJLdJVsdbXwpKXamAfWrkxWl2NqUKWaXW9epcWTCr5KpvkJLKUlrNjtE3p8JMKEYbVMoGUpJwTXSvi3i1vyV7nPS7c7cVFbZOWC8p+ZXycsxTHVzciklac1mh4iMGUkz2mZQMpCSnR5NtPGm5GWEvo1tNxMlpVjDoEN03UsqUwrnWclUe3NyISWJzeaHkIaMJBlvBygZSMnSOkOUvYfH9ruJUnGa1BV7yVxVxeTXPVKYUji/SsZd7dN7KUlsNj+EMGSuxfhC889WctZaO7OUTOz6sPfw0jbB7WZtRShW6pWsroXEphTO87Vkd5qcJhYLKUlsNj9EbJh63owP3VAyjJIEfbh7eHcDJKecnCOqkq0+gctv59J2ESW1Cd4ySlKb7RCi1m66Sd4KJcMoGe0I+jD38NwyN/tEOj0764pttOHyntamFM67kokm219GSWqzHUII7WVyQd5eUHKWksLhJGnbFvYnCnp5UGUtNtZn1lXvyseUwnlXsjvJy7soSW22Qwh95tpMBmOhZBAla/6VpHVbWGcv94+6O2uxhXZgPhpU3pDC+VdSM4K1iJLkZruE0GWuyXTgB0qGUDLiD7dat0W60w/HKL5mGy5I9KeBfCCrIYXzr2QXTTkBKbCS5Ga7hBCa7i6mqkLJEEpmLnmrZVsI4qaaXMUqf3eZ6aO8xVkNDtyGFC6Akt0YVrW8kuRmu4SINQ9NNtOEFkqGUFKQLvt4e3hFzIUno5aqYtNGP/wUjQrQp3B+lcz75yrVBKSwStKb7RSiUZ51E8UBCEqGUFK6XEpatoUkjuEW42KmxSalaUA4Hx249SmcXyXFoJ1NtLCS9GY7hSiUR2lF3golgyjZOD0Dbt4W1OfKhVrJOr0gikb9yOXwdFyNc65yISVVkyyWUJLebKcQifJaplVcOUPJEEo6je7QlLQ+eZmp50wqVqWITUNT+WS0MFpGyeuYcbKokoxmu4VoFPtEptJ+Xet8/GFKbjwqGVHLnIzMahaz023efLInCl2WG0bJaPq8ywJKMprtFqJQPDRZqpJjKBlAyUSrTyrGUDdz6lnJRrcUczUZcIh1U0/CKHkd4RFLKslotlsIVebaqoaQoGQAJfX6iEkv30vJY6SElLfqU7hASnYjPLdLrPBKcprtGGI6TydTrjYAJR9XSeWQcK7YD3UpXCglk/HzLOGV5DTbMcR0NmupHHKAkn+okrWu2DQvbktZysiewOlTuFBKXrspXUxJTrMdQ0znzrXKCSXdkqAKYijpqGQUQMmI8LaX/vHedF9yE19XEB4vQxIpzwyaFC6YklEzvPAKriSr2a7x21Hmqs5bcRMk5Ihr6lHJufclR8XGmrXucuVeKKgrxHpScvyMWXAlWc12jV+OiivVt7WgZAglW4I+0k3JzNaFJWVC3e17o0pWpuXvq8WU7OpxmYMrQyvJarZr/GxUXKte/QNK3mtCHVdJ6iQ9SVSyW2JSqtJjDdFiSnariZWLKMlrtnP8drDJU+MSClDSr5IloVu5Spbml0vpE1xdsalijpEw75v5YkoOR3hCK8lrtnP84cwA3QOrUDLgkyCtTyUpZSpHZrXFKp6zrs37ZrWckpv+STy0krxmO8cfzp9rfE7AgJKWZiSECz+ukglt4mwxGWrXFiu0K6kRU7igSqa9PgysJLPZ7vH7dz0Sr9MUoaStHY39gUmukt2VSEGKXBCKTSdTvC6SinSCcqGKoEp2B5cmvJLMZrvH788NKLxO5oeSxGFP011EtpIlJXNNdY9RSEqOq78RJxhvG/GkZG+RzDKsksxmu8fPei2tnXJiKOmqZEpemJy+LTLKQpSK9WPpSsb6GiiXWAurZO+9jCKoktxmz4h/+yT2+2A4lLQ2pLG9voOv5Kahr3YuGMfsZpLAqUpWrbkXWMnb/ZywSnKbPSN+dd3owu/yKVDS2pB8Z+tZvpKCfOptScsrTZYEqQ1PSateaxFayesaUmGV5DZ7Rvz8em6s/C4yBiWtDelmaer94SvZXVzZ35xFO5c1oy/HptcgxopVDUIreZ3RloVUkt3sGfGj6+Cbfn4XlAyj5PU0qb304yt5e2WlLm1td4y1XPLxSJAwHkRq5kRTH0peDmxNGlJJdrPnxK8GL5VtNlByOSWv75XTOemgpPG96L23MGeUTRxNLk1r4+o+wtO63BwluxGooCOu7GbPid/Nbxf6G1pQMpSS11cia46/Lkp2Y6RKJzXvRdc9Rl+Pjxix5RS88/P2CpaSg/ngYZTkN3tO/EvmmtX6aR9QMpSS1ws7zYoaLkreJmNOnz1OGs0jkMpi03Yy/iQsF7+1n3c88ZSM2tBK8ps9K37VO+03Gyi5qJK3y8nDJkj8KHmdgzBehDW6ytom1k0c5desujdUVFtWpRT0qXr+lOzPCA+jJL/Zs+Ln5nVWoGRQJQfdX4v+6FqUlbpHmFupJBk7uWtu6z4kRas18rpwxHVpZXmrVe/blgROlcKRKjxTyd6U8CBKOjR7Vvz+fNrY8GtNr+ZQcpaSm6wdzF6uZSHEQQnZGlYVsK2EVPZXfqxO5fWKaxLNJlavHJlQBx6VKRytwjOVTMIq6dDsefFvh5ja9Gv6AmZQkqPkJpa2hwzYShof7qsiziYuo+muklgvZOtllbyufh5GSYdmz4svdpaheCgZVMlD8tr4VnKT6B7vazLOJh6udx7TZ+vFyyp5HeEJoaRLs+fFj02LFUDJBZQ8SKl/QLYpMwclNZ43IqJvYjlegFAQHv0ap3DLKKmck+RLSZdmz4u/qXfm9SGgZHAlD6c1obDycB2YMLbFaA/PyvE5T3vhL4SUsrldz0ohUu2OkhBuwdQLK6ladsiXki7NnqmksEzr+rOV9Iq7ksfs6zjSeRrXaeRJimh2X6WiPJnWyFLcYxls8BD8sUoCACWhJABQEgAoCSUBgJIAQEkoCQCUhJIASkJJAKAklAQASgIAJaEkAPdUcn+aeP4FJQFYh5K/Tkr+/gElAViDks9nI3+/QUkA1qDk/qLkF5QEYA1KHvPWL1+ZK5QEUNJH3vrqK3OFkgBK+shbt1+eMlcoCaCkh7z1c/vuKXOFkgBKeshb91tfmSuUBFDSQ976cjbzC0oCcG8lf12WjPzlJ3OFkgBKzs9bPw9/vPnJXKEkgJLz89b94Y8ffjJXKAmg5Cw+jyY+H//yM1sASgIoOYeno4e/Tn/6yVyhJICSc3jt8tbt9sVL5golAZScw0cvW/32kblCSQAl5+at3Znx3UfmCiUBlJybt3YW/vSRuUJJACU95a1+MlcoCaCkp7z1IugblATgXkqO5pq/eshcoSSAkjPz1pfhSXNm5golAZScl7d+jxV9g5IA3EfJ198qvqAkAPdR8kOp5LzMFUoCKDkrb1XwBiUBuIeSp7z1+7PP1+zMdVkl41xUst0dqWUp0mhlWyoRpZSHyklZiSxa594Upo7rbrn32nlS8uM25Xzbn8AzK3OdoWS2u5AQv182uzG1iGYFOH8uJ/8z+C/VT4TieFG0w8pV+bBMC9qQcZoLIaWsr9887Fl5augqbYH6Os7ZQoZSWU03faXX3CQ7dUe3N9gOzrw2L6nkOW99Hv7n99zMdYaSZddFBeHLkWjVm6rVS0kIoFVS5ZxRybhUVK5JPSip/4FIeEqa6ui+hYylBlBS/bnOM26bl1Ty9fao5I23uZnrDCWvjjV2IQva8ZMdQK9kG7GUzNVHjDqkkseWqQ9I6gKNdXTeQuZSF1PyeHBm1+7OSiry1styH3MyV3cls1sH2TLXrDXtlXMC6JXcVRwlS03l8sBKarIEZYHmOrpuIUupCyp5EC1m1u6+Sirz1styH2/3ULLXW+bMNapG2+9Ebf0xJYBBSd3ZV6Wk6NWuFIcrna52UXAlD8ekjKSkpY6OHWgrdVEld22ymdnmJZVU5q3zM1d3JVvCie50MV/3vlj0xsvirDhe4WdzApiUbCKqktfTSXWrTHqs3OVMK0dc9p/R/xZmJY/7VHriOLoxyBtKgpK2Orp1oLVUVtPVH55JRo1rq0t3ZP3OaOOZbV5SSWXeOj9zdVby3F2F5XLwYOStv8tEMZrWzApgUlIzwjP9LLpUsR1FSWXOHBBlfDsRvUNVHdl+wq4jqQP5pRqbTusX1fFGqlINhzYvqaR2ivmXWtXgSp6zoktflgQjy3jjP4BRSfUV1FRJYRkQCqLksW9KnZPTn7DrSOpAfqlhlOwNN+Sz2rykktoHsd7UCW1wJc9dGJ27rdVeR3angpY9bE0KoFNS6neOqZKN9VQfRsnD8b5WX4hO/49dR1IH8ksNpeT12N3MavOSSmoX2vmhHvYJrWR2GYtOz92muyCUmszMVwCdkqk+dZ18kuwsZ/pwSupuHU5+wq8jpQMdSg2mZFfPW2rjULtFldQv6jEvc3VVsux2bGO/CWcjiQF0Sl6OBW1EUFKYjyphldzkqgHiyU/4daR0oEOp4ZTcVKMt41C7JZU0LH01L3N1VDK67kaVIS+KW+PY5/wAeiVT7c3JiZIFe1zdp5LXw1Zj+gm/jpQO5JcaUsls9EHh535HuBHXQDgqmV83s+lYVvImwfIDaJWMu5Q5tSt5+ebmTkp2Z4f+wMbkJ/w6UjqQX2pIJTejQ5ND7R5Zyep6Dor1eVFim246N4DhWrI7TU5P0KtTMmomp0kPSlI6cGVK1sPqQEmOklHvuF5r86KSOgXWNYBJyW6LCqqSyb2UvF5O5lYlE78dyG95UCWlUskEStKzonOar82LohnzEUkBzEommqxZdy0p7qZkN9pfWa8lhd8O5Ld8SSUL9xzrAZWsetPxtXmRcD9J0gKYlexO0tKmZM6up28lxXjm5uQn7DqSOpDf8gUSVzmjdo+rZDTYrXV5Ue1+lKMFsCgZqy9lJ/8ZMx77DKNkV4NM+xNuHWkdyG/5AsM75YzaPa6SeTesabp/FLkPt9IC2JTUTMiaelpzh6F8Kzk5ek1/wqwjsQPZLV/gJkg+o3aPq2Q1eIxUkxdlnvJWY+ZqVLKbtlxZlLzerS+jOylZjL4z/QmzjsQOZLc8pJJyfB+SX7uHVTIa7dXqvEi4z4eiBTApmQ+2aWpW8jrtb9fm91FyfNmk+AmrjuQO5LY8oJLZdH9h1+5hlcxHhzN1XiTdsw5aAJOSYlCHwc1JRbXi2wNkTX4PJbv5nYafsOpI7kBuy4NPOx9cZbBr97BKVqN0UJ0XzZjHTwtAUFI1WUF1pEj6T/uKeHElI7uSrDrSO5DZ8mBKpq2H7fKwSkaT2421ajai++gOMQBBye4irV8L5ck7GTzlX6ULK7kZZdjKn9DryOhAZsspStrWPFOlAKVmfQVm7R5VyXyyeYVqTsDOeT4UMQBFyW6ER1qUHCxHYs2T7qMkvY6MDmS2PICSUSoq7YonzNo9qpLVZBgzVoxsJlolUzHGKQBJyesIj7Aoedhrh8voyXR1SpLryOhAZsv9KalaDCufW7sHVTJSHHAVeVGqVVJMtoVTAJqS3QhPG9mUnCziW6xPSVodOR3IbHlIJSvNtSKjdg+qZK7YuIq8yF1JYgCiksl4WVfDQPBoqfs6WlrJyP4TQh05HchseTglK8PgDbl2D6pkpUiBFHmRu5LEAEQlr+FSu5KHE0wud9ZlJ/0rGRNGXOl15HQgs+UUJRuhILYp2RjvlhFr95hKRsrD7TQvilyVpAagKjl+HNF2u7SfJ9XRau5L0uvI6kBmy/3dBFGsdW4WjVK7x1QyV25aRV6kXXPcoiQ5AFHJ6/4uaEoONn61jJK5dUIdo46sDmS23J+SddqtM12r11V2qd1jKlmZVpnv91RLmCqgenCcHICqZFfiZYtLwqSi29B7uoiShfJ6V7rVkdWBzJYHmSpwVc368h1b7RZW8uXnfn98zetxrbqvw7/71x93UDIyvxwimugmmErSA5CV7OZllWQlb+8xkYsoKa1PgtDryOtAZssDzd7Jqc98WGq3sJKKV6J/v/9cWklh3uC9vKik74puAchKDkd4JG3jS8PsI99KRuNDPzGAso68DmS2PNSEupz8+h0545m/BZQ8Wrl/WlTJ2rzBq8mu0TKVpAegK9kVKhlKRq1tdWZ/SubjriIGUNaR14HMlgeb41pRH1Iw1u5OSh6T1s+elF8/F1Qytr3WLJrcEMxYSjICMJRMe3UhKtkdUqoFlKzG08moARR1ZHYgs+XBlIzJT9cKHwM8HpV8uV1a7j86KRd8MfqlPy5vZetTT/Kixv7A5FRJTgC6kt34ScNQMtYPOXhWcrLOBzmAoo7MDmS2PNzDWZI6bBMTh4KWUnLwP0/777OT74spqb+7NT14lfbD8lRJTgCGkl26k/cW5rfRaOfNe1aytK/jSq8jswOZLQ+nZE6eLdd4WN81lJIHKS9nyqVeZhfrOz2eCJjah9EmSrICMJTsPbcvqErKhZRUPNRJDjC7A5ktD6dkRD75yVUreXnJ3Yx3vvKUFAbJpgvSNdY7wJPe5QVgKHm7z7A2Jbv3/fWfp3dXktuBq1GSMr3o/0PJi5OfyyhZDxY+U+paT0e2Jb13eQE4SsbdqCZTySa0kuVON/NJOtSR24HMlgdUsqBeTEoPy7sGVfL8xvTeuE9AJY1X1l1edNsbutml+v1/rCQzAEfJ64yyjKqkfgfzqaTYkY40xLLZHcitcfDlsMTcQ9wKlHz6nnOaZCkpjL1W69YR14/yjZXkBuAoeTlANClxy2eL3JcslfM7qQEmdWR3ILPlAZWMiY3OVnZfUvXBfs57mFlK1sajrCIvkhYnx0qyAzCU7IabSt4FVRZSyUjTQdQAkzqyO5DZ8pDruBJHUqWPN8EGVvJpzqArR0nLHSFFXnRb9U9QlOQH4Cg5mI9tVdL0RgpfSt7WsMidAkzqyO9AZstDKlmSLib9vCkksJLnq8n38EoKy96syIuy25opiV1JfgCWklGrVDJTPdCe7VyzN+q3I9FoDxCTnxDryOxAfstDKjmuvEPtVqPkXv/WdK9K1pZjrCovym8WlIlNSX4AlpL9GdnDl9lNqiaMz6/PVzIRlWkquOpldpQ6MjuQ3/KQSiajDxxqtxolX/Qf+VTSOpNJmRfl/efGRT8ribJy+AizQwCekr0p2ePbp01xq1p8O3+lG19KtrLsFr2QcrjERWoPQKsjtwP5Laco2UolubWIdniAdqjdapR8njG+w1BSWFMG5YheNlz0r5bFYa8spGwnqwo4BGAqmSiUTIZVK2RjfZLJRUktRWQPQKwjswMdWu68HBblYdByMHDjUrvVKLmdcWeSoWRtfVBNPaIXS9vDCe4BmEpeVz+fXn9xni30qGQZUwIQ68jsQIeWB1VyOM3VpXYPpiTh8RndiF7eUJR0CcBV8jrCI5TjsLaE0rOS2tdcjAPQ6sjtQIeWB1UyGtTfpXYPpqQgTNXX3ovO9Q/WNmXmHoCrpGrETn3AaEW0CapkJRJ6AFId2R3Ib3lQJTsLE9ft8mhK2rMi473oRCisbPr7pUsAtpLKJYGSYrz1a+OG5ykpRCll70pIylJkCXdQklBHhw7ktjyskvnoCVt27Vaj5NMywzuzidLjsM5xXKc5/CNEGm1WQ5SJ6jQSeqxZtqKKBa/julseqHZ/yE0QAP4UQiv5utBUAQCgJEnJt+MnH1ASgJUo+bXQtHMAoCRFyec5S31ASQAlfSv5PuNSEkoCKOlbyefvOWvUQUkAJUOsvfP9BCUBWIWSr/MWcoWSAEp6VfLn+b0gT1ASgDUoeVlZ+WULJQG4v5LPs98/ACUBlPSm5PP79+JvzgIASg6fwDo/7/H88vr21b309XULJQG4k5JTPp+3UBKAtSj5+bLdQkkA1qHkr/3zdgslAbiPkvuPz8/P7uT4+b5/edp6AEoCKLkqoCSAklASACgJJQGAkgBASSgJAJQEAEpCSQCgJABQEkoCACUBgJJQEgAoCSUBlISSAEBJKAkAlAQASkJJAKAkAFASSgIAJQGAklASACgJAJSEkgBASSgJoCSUBABKQkkAoCQAUBJKAgAlAYCSUBIAKAkAlISSAATi73+O/HX6+5+VcarUX6c//8aWAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgOf4H8jHAAHK/wbgAAAAASUVORK5CYII="

/***/ }),

/***/ "sdDh":
/***/ (function(module, exports) {



/***/ }),

/***/ "sejL":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "szdJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return menuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bannerSlides; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return featureData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return branchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return workData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return milestoneData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return humanityData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return promotionData; });
/* unused harmony export paymentPolicy */
/* unused harmony export currencyOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return posts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clients; });
/* unused harmony export menuWidgets */
/* unused harmony export copyright */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return socialLinks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_src_assets_image_charity_banner_slide1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("S2gz");
/* harmony import */ var _common_src_assets_image_charity_banner_slide1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_banner_slide1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_src_assets_image_charity_banner_slide2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("UEkk");
/* harmony import */ var _common_src_assets_image_charity_banner_slide2_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_banner_slide2_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_src_assets_image_charity_banner_slide3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("JKTR");
/* harmony import */ var _common_src_assets_image_charity_banner_slide3_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_banner_slide3_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_src_assets_image_charity_banner_slide4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("JlRd");
/* harmony import */ var _common_src_assets_image_charity_banner_slide4_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_banner_slide4_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_src_assets_image_charity_feature_1_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("X42j");
/* harmony import */ var _common_src_assets_image_charity_feature_1_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_feature_1_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_src_assets_image_charity_feature_2_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("omwB");
/* harmony import */ var _common_src_assets_image_charity_feature_2_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_feature_2_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_src_assets_image_charity_feature_3_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("qIQb");
/* harmony import */ var _common_src_assets_image_charity_feature_3_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_feature_3_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_src_assets_image_charity_feature_4_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("bXSe");
/* harmony import */ var _common_src_assets_image_charity_feature_4_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_feature_4_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_src_assets_image_charity_feature_5_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("U7nQ");
/* harmony import */ var _common_src_assets_image_charity_feature_5_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_feature_5_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_src_assets_image_charity_feature_6_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("/Rz5");
/* harmony import */ var _common_src_assets_image_charity_feature_6_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_feature_6_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_src_assets_image_charity_branch_image_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("EJYb");
/* harmony import */ var _common_src_assets_image_charity_branch_image_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_branch_image_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_src_assets_image_charity_branch_image1_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("i5Ih");
/* harmony import */ var _common_src_assets_image_charity_branch_image1_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_branch_image1_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_src_assets_image_charity_branch_image2_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("RxLT");
/* harmony import */ var _common_src_assets_image_charity_branch_image2_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_branch_image2_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _common_src_assets_image_charity_branch_image3_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("hpZ2");
/* harmony import */ var _common_src_assets_image_charity_branch_image3_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_branch_image3_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _common_src_assets_image_charity_branch_image4_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("axM+");
/* harmony import */ var _common_src_assets_image_charity_branch_image4_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_branch_image4_jpg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _common_src_assets_image_charity_branch_image5_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("B+4x");
/* harmony import */ var _common_src_assets_image_charity_branch_image5_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_branch_image5_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _common_src_assets_image_charity_map_pin_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("amke");
/* harmony import */ var _common_src_assets_image_charity_map_pin_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_map_pin_svg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _common_src_assets_image_charity_search_icon_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("NM+w");
/* harmony import */ var _common_src_assets_image_charity_search_icon_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_search_icon_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _common_src_assets_image_charity_studying_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("kn0i");
/* harmony import */ var _common_src_assets_image_charity_studying_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_studying_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _common_src_assets_image_charity_city2_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("vpV/");
/* harmony import */ var _common_src_assets_image_charity_city2_jpg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_city2_jpg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _common_src_assets_image_charity_manufacturing_city_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("Ck0f");
/* harmony import */ var _common_src_assets_image_charity_manufacturing_city_jpg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_manufacturing_city_jpg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _common_src_assets_image_charity_blog_thumb_1_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("jYbd");
/* harmony import */ var _common_src_assets_image_charity_blog_thumb_1_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_blog_thumb_1_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _common_src_assets_image_charity_blog_thumb_2_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("7uqm");
/* harmony import */ var _common_src_assets_image_charity_blog_thumb_2_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_blog_thumb_2_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _common_src_assets_image_charity_clients_1_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("Szsc");
/* harmony import */ var _common_src_assets_image_charity_clients_1_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_clients_1_png__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _common_src_assets_image_charity_clients_2_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("Irq/");
/* harmony import */ var _common_src_assets_image_charity_clients_2_png__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_clients_2_png__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _common_src_assets_image_charity_clients_3_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("YDmi");
/* harmony import */ var _common_src_assets_image_charity_clients_3_png__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_clients_3_png__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _common_src_assets_image_charity_clients_4_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("jBKJ");
/* harmony import */ var _common_src_assets_image_charity_clients_4_png__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_clients_4_png__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _common_src_assets_image_charity_clients_5_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("c8qU");
/* harmony import */ var _common_src_assets_image_charity_clients_5_png__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_clients_5_png__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _common_src_assets_image_charity_clients_6_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("jf08");
/* harmony import */ var _common_src_assets_image_charity_clients_6_png__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_clients_6_png__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("Oi65");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var react_icons_kit_fa_linkedin__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("lNxm");
/* harmony import */ var react_icons_kit_fa_linkedin__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_linkedin__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var react_icons_kit_fa_facebook__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("AXek");
/* harmony import */ var react_icons_kit_fa_facebook__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_facebook__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var react_icons_kit_fa_twitter__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("9gLy");
/* harmony import */ var react_icons_kit_fa_twitter__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_twitter__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var react_icons_kit_fa_github__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("q+6x");
/* harmony import */ var react_icons_kit_fa_github__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_github__WEBPACK_IMPORTED_MODULE_34__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* charity dummy data list :-
- Navbar
- Banner section
- Feature section
- Branch section
- Work section
- Milestone block
- Humanity block
- Promotion block
- Donation section
- Blog section
- Client block
- Footer
  - menu widget
  - copyright 
  - social links
*/

/* ------------------------------------ */
// Navbar menu

/* ------------------------------------ */
const menuItems = [{
  label: 'About Us',
  path: '/#feature',
  offset: '81'
}, {
  label: 'Our Work',
  path: '/#branch',
  offset: '100'
}, {
  label: 'Our Board Members',
  path: '/#work',
  offset: '81'
}, {
  label: 'Our Milestone',
  path: '/#milestone',
  offset: '81'
}, {
  label: 'Join the Initiative',
  path: '/join#signup',
  offset: '81'
} // ,
// {
//   label: 'Our Blog',
//   path: '#blog',
//   offset: '81'
// }
];
/* ------------------------------------ */
// Banner section data

/* ------------------------------------ */





const bannerSlides = [{
  id: 1,
  thumb_url: _common_src_assets_image_charity_banner_slide1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a
}, {
  id: 2,
  thumb_url: _common_src_assets_image_charity_banner_slide2_jpg__WEBPACK_IMPORTED_MODULE_2___default.a
}, {
  id: 3,
  thumb_url: _common_src_assets_image_charity_banner_slide3_jpg__WEBPACK_IMPORTED_MODULE_3___default.a
}, {
  id: 4,
  thumb_url: _common_src_assets_image_charity_banner_slide4_jpg__WEBPACK_IMPORTED_MODULE_4___default.a
}];
/* ------------------------------------ */
// Feature section data

/* ------------------------------------ */







const featureData = {
  title: 'Our Projects',
  slogan: 'The organisation has carried out the following activities',
  features: [{
    id: 1,
    icon: _common_src_assets_image_charity_feature_1_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    title: 'Establishment of manufacturing city',
    description: 'Design and developed project proposal for the establishment of manufacturing city with a view reducing avoidable disasters of youths unemployment, grassroots crisis and attainment of sustainable development goals in Nigeria.'
  }, {
    id: 2,
    icon: _common_src_assets_image_charity_feature_2_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    title: 'Promotion of affordable education',
    description: 'Promotion of affordable education through Edupark project (on-going).'
  }, {
    id: 3,
    icon: _common_src_assets_image_charity_feature_6_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    title: 'Environmental protection and awareness campaign',
    description: 'Carried out environmental awareness campaign on the need to save the world environment through direct contact too market places, circulation of hand bills, posters and car sticker bringing information for grassroots awareness'
  }, {
    id: 4,
    icon: _common_src_assets_image_charity_feature_4_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    title: 'Reduction of youth restiveness',
    description: 'Reduction of youth restiveness through Sports park initiative '
  }, {
    id: 5,
    icon: _common_src_assets_image_charity_feature_5_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    title: 'Promotion of skills gap bridge ',
    description: 'Promotion of skills gap bridge through Industrial skills initiative .'
  }, {
    id: 6,
    icon: _common_src_assets_image_charity_feature_3_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    title: 'Promotion of health of citizen',
    description: 'Promotion of health of citizen through establishment of Medical Park (on-going).'
  }]
};
/* ------------------------------------ */
// Branch section data

/* ------------------------------------ */







const branchData = [{
  id: 1,
  menuItem: 'Manufacturing',
  image: _common_src_assets_image_charity_branch_image5_jpg__WEBPACK_IMPORTED_MODULE_16___default.a,
  slogan: 'Capitalize on Growth Opportunities in the Nigerian Economy',
  title: `We’ve funded <strong>12,925</strong> 
    water projects for 
    <strong>5.2 million</strong> people
    around the world.`,
  description: `Nigeria's population is an estimated 187 million people. This population suggests a massive potential workforce as well as a huge consumer base. For  a manufacturer, this is an ideal scenario, not only do you have potential customers, but you also have potential employees. The Nigerian government is eager to expand the manufacturing capability in the country, and to that end, they are offering incentives for manufacturers that are able to locally source their raw materials, for example, agro-allied manufacturers processing foodstuffs such as fruit juices and vegetable oils. Any manufacturing industry that provides multiplier effect solutions for the economy is also looked upon favorably. An example of this would be machine tools, flat sheet metal, and spare parts manufacturing.
      Finally, any investment in research institutes, especially those that focus on adaptive research and commercialization of local inventions, is looked upon favorably by the Nigerian government.
      `,
  linkUrl: '#1',
  linkText: 'SEE MORE OF OUR IMPACT'
}, {
  id: 2,
  menuItem: 'Agriculture',
  image: _common_src_assets_image_charity_branch_image2_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
  slogan: 'Capitalize on Growth Opportunities in the Nigerian Economy',
  title: `We’ve funded <strong>19,571</strong> 
    water projects for 
    <strong>6.7 million</strong> people
    around the world.`,
  description: `Nearly one-third of all employed Nigerians find themselves working in the agricultural sector, which is one of the country's main foreign exchange earners. The Nigerian government has set up incentives to help modernize and mechanize their agricultural industry. Not only will locally grow foodstuffs be promoted on behalf of the investor, business and enabling companies may receive the pioneer company status and qualify for tax incentives. Subsidies on fertilizer and zero import duties on raw materials needed to manufacture livestock feed are some of the other incentives to attract investors to this sector. Another is the release of grants from the Raw Materials Research and Development Council for research and development that leads to the greater domestic use of Nigeria's raw materials.`,
  linkUrl: '#1',
  linkText: 'SEE MORE OF OUR IMPACT'
}, {
  id: 3,
  menuItem: 'Investments',
  image: _common_src_assets_image_charity_branch_image_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
  slogan: 'Capitalize on Growth Opportunities in the Nigerian Economy',
  title: `We’ve funded <strong>29,725</strong> 
    water projects for 
    <strong>8.4 million</strong> people
    around the world.`,
  description: `The Nigerian economy is poised for unprecedented growth. With the rebasing of the Gross Domestic Product (GDP), the Federal Government of Nigeria is encouraging the private sector to take the lead in investment. With improvements in key economic indicators and Nigeria's status as a relatively stable economic center in Africa, the importance of improvements to Nigeria's requires little explanation. Nigeria, with its large economy, oil and gas resources and access to international capital flows, provides an ideal base from which to acquire additional investments in the region.
      The past years have been one of economic progress in Nigeria, with Africa's largest economy managing to crawl back into growth territory in the second quarter of 2017. The Nigerian government has realized that they need to make the country as attractive and lucrative as possible for offshore investors to bring their capital, skills and business trade into the country`,
  linkUrl: '#1',
  linkText: 'SEE MORE OF OUR IMPACT'
}, {
  id: 4,
  menuItem: 'ICT',
  image: _common_src_assets_image_charity_branch_image3_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
  slogan: 'Capitalize on Growth Opportunities in the Nigerian Economy',
  title: `We’ve funded <strong>10,792</strong> 
    water projects for 
    <strong>4.9 million</strong> people
    around the world.`,
  description: 'Nigeria is one of the fastest growing internet users in the world. According to Statistics by a global statistics company, there are approximately 76.2 million Nigerian internet users as of 2017. This is an increase of nearly 50 percent from the 2013 figure of 51.8 million. There are millions of Nigerians who are interested in involving themselves in Information Communications and Technology Services (ICTS). This new economy does not require someone to be in a specific location to provide the service needed, rather they can be located anywhere in the world.',
  linkUrl: '#1',
  linkText: 'SEE MORE OF OUR IMPACT'
}, {
  id: 5,
  menuItem: 'Education',
  image: _common_src_assets_image_charity_branch_image4_jpg__WEBPACK_IMPORTED_MODULE_15___default.a,
  slogan: 'Capitalize on Growth Opportunities in the Nigerian Economy',
  title: `We’ve funded <strong>10,071</strong> 
    water projects for 
    <strong>3.7 million</strong> people
    around the world.`,
  description: `The need for skilled tradespersons, computer programmers, and agricultural workers will only increase in demand as Nigeria transforms it's economy and becomes an international economic power. At present, there is an opportunity for private education to offer specific programs that are in demand in the country. Nigeria is a country with vast underemployment and by offering distance learning or night schools, there is potential for strong investment returns in for profit education.
      As an example, one can look at the success of Curro in South Africa, which began as a private for-profit primary and secondary schools but now even has a post-secondary offering. If a Nigerian model were created that focused on skills development, the potential returns could be very lucrative. Nigeria is in the fortunate position to offer investment opportunities to both local and international persons and companies. The need to develop the Nigerian economy offers lucrative potential returns for those looking to invest in the above sectors, including manufacturing and private education. These areas are in some ways interconnected, and by increasing the investment and development in one area, there is tremendous potential for spillover into the other, sectors.
      `,
  linkUrl: '#1',
  linkText: 'SEE MORE OF OUR IMPACT'
}];
/* ------------------------------------ */
// Work feature data

/* ------------------------------------ */




const workData = {
  title: 'Our Key Objectives',
  slogan: `The general objectives include: promotion of disaster prevention, reduction and management, good environment in Africa. To lend credence to government efforts towards a better and safer environment or advocate for safer and friendly environment. Al so to promote, encourage, sponsor and/or subsidize the development and dissemination of knowledge, technology and education`,
  features: [{
    id: 1,
    icon: _common_src_assets_image_charity_map_pin_svg__WEBPACK_IMPORTED_MODULE_17___default.a,
    title: 'Prevention of Disasters',
    description: `specific objectives include amongst other, prevention of violent crimes, corruption, cultural erosion, desertification, harmful traditional practice, child labor, industrial dumping, pollution, vandalization of public property `
  }, {
    id: 2,
    icon: _common_src_assets_image_charity_search_icon_svg__WEBPACK_IMPORTED_MODULE_18___default.a,
    title: 'Research and Development',
    description: `To sensitize the manufacturers and all producers to improve their environmental performances. We also conduct research and disseminate information on trends and technologies for sound environmental control and management`
  }, {
    id: 3,
    icon: _common_src_assets_image_charity_studying_svg__WEBPACK_IMPORTED_MODULE_19___default.a,
    title: 'Public education and information Dissemination',
    description: ` GIAD is commited to continiously  publishing educative booklets or pamphlets relative to these objectives for the purpose of educating or counselling the need of the society`
  }]
};
/* ------------------------------------ */
// Milestone block data

/* ------------------------------------ */

const milestoneData = {
  title: `People's Automotive,
   Construction and Manufacturing City`,
  amount: '₦725B',
  text: 'A Private Initiative for the development of 2000 Hectares Property',
  counterItems: [{
    id: 1,
    amount: '15',
    title: 'SKills Upgrade Tracks'
  }, {
    id: 2,
    amount: '53',
    title: 'Industries Developments'
  }, {
    id: 3,
    amount: '71',
    title: 'New Products Developed'
  }, {
    id: 4,
    amount: '18K',
    title: 'Potential Jobs Cerated  '
  }]
};
/* ------------------------------------ */
// Humanity block data

/* ------------------------------------ */


const humanityData = {
  image: _common_src_assets_image_charity_city2_jpg__WEBPACK_IMPORTED_MODULE_20___default.a,
  slogan: `THE PEOPLE'S AUTOMOTIVE, CONSTRUCTION AND MANUFACTURING CITY`,
  title: 'Join the Initiative',
  text: `Become an Investor in the Largest Technology and manufacturing project in Africa. By following the steps below`,
  lists: [{
    id: 1,
    text: 'Create an investors account'
  }, {
    id: 2,
    text: 'Pay the application fee and submit your application form'
  }, {
    id: 3,
    text: 'Start investing'
  }]
};
/* ------------------------------------ */
// Promotion block data

/* ------------------------------------ */


const promotionData = {
  slogan: 'Become an Investor',
  title: 'Fill the form below to create your investors profile',
  text1: 'Investors have full access to all project documents, progress reports and updates',
  text2: 'To become an investor, fill the form below and pay the registration fee of ₦ 50,000.00.',
  lists: [{
    id: 1,
    text: 'Let them drink pure'
  }, {
    id: 2,
    text: 'Ensure them medicare'
  }, {
    id: 3,
    text: 'create opportunity of education'
  }],
  image: _common_src_assets_image_charity_manufacturing_city_jpg__WEBPACK_IMPORTED_MODULE_21___default.a
};
/* ------------------------------------ */
// Donation form data

/* ------------------------------------ */

const paymentPolicy = [{
  id: 1,
  title: 'One Time',
  value: 'oneTime',
  text: 'One Time donation given'
}, {
  id: 2,
  title: 'Ongoing',
  value: 'ongoing',
  text: 'Everymonth donation given'
}];
const currencyOptions = [{
  id: 1,
  value: 'ngn',
  title: '₦ NGN'
}, {
  id: 2,
  value: 'usd',
  title: '$ USD'
}];
/* ------------------------------------ */
// Blog post data

/* ------------------------------------ */



const posts = [{
  id: 1,
  title: 'Uganda Embraces South Sudanese Refugees, For Now',
  excerpt: '72 million children around the world are not enrolled in school. Concern Worldwide focuses on providing basic education to those…',
  thumbUrl: _common_src_assets_image_charity_blog_thumb_1_png__WEBPACK_IMPORTED_MODULE_22___default.a,
  btnText: 'Learn More ',
  btnUrl: '#1'
}, {
  id: 2,
  title: 'BRITs Week 2019 together with O2 is here',
  excerpt: '72 million children around the world are not enrolled in school. Concern Worldwide focuses on providing basic education to those…',
  thumbUrl: _common_src_assets_image_charity_blog_thumb_2_png__WEBPACK_IMPORTED_MODULE_23___default.a,
  btnText: 'Learn More ',
  btnUrl: '#1'
}];
/* ------------------------------------ */
// Client block data

/* ------------------------------------ */







const clients = [{
  id: 1,
  logo: _common_src_assets_image_charity_clients_1_png__WEBPACK_IMPORTED_MODULE_24___default.a,
  name: 'windows',
  link: '#1'
}, {
  id: 2,
  logo: _common_src_assets_image_charity_clients_2_png__WEBPACK_IMPORTED_MODULE_25___default.a,
  name: 'airbnb',
  link: '#2'
}, {
  id: 3,
  logo: _common_src_assets_image_charity_clients_3_png__WEBPACK_IMPORTED_MODULE_26___default.a,
  name: 'adidas',
  link: '#3'
}, {
  id: 4,
  logo: _common_src_assets_image_charity_clients_4_png__WEBPACK_IMPORTED_MODULE_27___default.a,
  name: 'ibm',
  link: '#4'
}, {
  id: 5,
  logo: _common_src_assets_image_charity_clients_5_png__WEBPACK_IMPORTED_MODULE_28___default.a,
  name: 'amazon',
  link: '#5'
}, {
  id: 6,
  logo: _common_src_assets_image_charity_clients_6_png__WEBPACK_IMPORTED_MODULE_29___default.a,
  name: 'google',
  link: '#6'
}];
/* ------------------------------------ */
// Footer data section

/* ------------------------------------ */

const menuWidgets = [{
  id: 1,
  title: 'FUNDRAISE FOR',
  menu: [{
    id: 1,
    text: 'Medical',
    link: '#1'
  }, {
    id: 2,
    text: 'Emergency',
    link: '#1'
  }, {
    id: 3,
    text: 'Memorial',
    link: '#1'
  }, {
    id: 4,
    text: 'Education',
    link: '#1'
  }, {
    id: 5,
    text: 'Charity',
    link: '#1'
  }, {
    id: 6,
    text: 'Nonprofit organization',
    link: '#1'
  }]
}, {
  id: 2,
  title: 'LEARN MORE',
  menu: [{
    id: 1,
    text: 'How invisiblechildren works',
    link: '#1'
  }, {
    id: 2,
    text: 'Pricing and Fees',
    link: '#1'
  }, {
    id: 3,
    text: 'Common questions',
    link: '#1'
  }, {
    id: 4,
    text: 'Success stories',
    link: '#1'
  }, {
    id: 5,
    text: 'Supported countries',
    link: '#1'
  }]
}, {
  id: 3,
  title: 'RESOURCES',
  menu: [{
    id: 1,
    text: 'Help center',
    link: '#1'
  }, {
    id: 2,
    text: 'Blog',
    link: '#1'
  }, {
    id: 3,
    text: 'GoFundMe Stories',
    link: '#1'
  }, {
    id: 4,
    text: 'Press center',
    link: '#1'
  }, {
    id: 5,
    text: 'Careers',
    link: '#1'
  }, {
    id: 6,
    text: 'About',
    link: '#1'
  }]
}];
const copyright = [{
  id: 1,
  text: 'Privacy Policy',
  link: '1#'
}, {
  id: 2,
  text: 'Terms and Conditions',
  link: '1#'
}];





const socialLinks = [{
  id: 1,
  icon: __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_30__["Icon"], {
    icon: react_icons_kit_fa_linkedin__WEBPACK_IMPORTED_MODULE_31__["linkedin"]
  }),
  name: 'linkedin',
  link: '1#'
}, {
  id: 2,
  icon: __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_30__["Icon"], {
    icon: react_icons_kit_fa_facebook__WEBPACK_IMPORTED_MODULE_32__["facebook"]
  }),
  name: 'facebook',
  link: '2#'
}, {
  id: 3,
  icon: __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_30__["Icon"], {
    icon: react_icons_kit_fa_twitter__WEBPACK_IMPORTED_MODULE_33__["twitter"]
  }),
  name: 'twitter',
  link: '3#'
}];

/***/ }),

/***/ "t01e":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("s/bQ");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


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

/***/ "txJt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharityWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ContentWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_src_assets_image_charity_footer_bg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("i/zz");
/* harmony import */ var _common_src_assets_image_charity_footer_bg_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_src_assets_image_charity_footer_bg_png__WEBPACK_IMPORTED_MODULE_2__);



const shake = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{transform:translateX(-1px);}50%{transform:translateX(5px);}100%{transform:translateX(0);}"]);
/* Charity global style */

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  body {
    font-family: 'Open Sans', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.heading', '#060F1E')};
    font-family: 'Open Sans', sans-serif;
  }

  section {
    position: relative;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  p {
    color: ${Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondaryText', '#616970')};
  }

  /* Drawer menu style */
  .drawer {
    .drawer-content-wrapper {
      @media only screen and (max-width: 480px) {
        width: 320px !important;
      }

      .reusecore-drawer__close {
        position: absolute;
        top: 20px;
        right: 30px;

        > button {
          box-shadow: 0px 8px 38px 0px rgba(16, 172, 132, 0.5);
          transition: all 0.3s ease;

          svg {
            width: 22px;
            height: 22px;
          }

          &:hover {
            opacity: 0.9;
          }
        }
      }

      .scrollspy__menu {
        padding: 50px 40px;
        max-height: 505px;
        overflow-x: auto;

        @media only screen and (max-width: 480px) {
          padding: 30px 10px;
        }

        @media only screen and (max-width: 320px) {
          max-height: 380px;
        }

        li {
          margin: 35px 0;
          @media only screen and (max-width: 480px) {
            margin: 25px 0;
          }

          &:first-child {
            margin-top: 0;
          }

          &:last-child {
            margin-bottom: 0;
          }

          a {
            display: block;
            color: ${Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.heading', '#060F1E')};
            font-size: 18px;
            font-weight: 600;
            transition: all 0.3s ease;
            @media only screen and (max-width: 480px) {
              font-size: 16px;
            }
            &:hover {
              color: ${Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondary', '#0071bc')};
            }
          }

          &.active {
            a {
              color: ${Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondary', '#0071bc')};
              position: relative;
              &:before {
                content: '';
                display: block;
                width: 20px;
                height: 2px;
                border-radius: 5px;
                background-color: ${Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondary', '#0071bc')};
                position: absolute;
                top: calc(50% - 1px);
                left: -30px;
              }
            }
          }
        }
      }
    }
  }
`;
/* Charity wrapper style */

const CharityWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "charitystyle__CharityWrapper",
  componentId: "sc-1ggtki4-0"
})(["overflow:hidden;display:flex;flex-direction:column;min-height:100vh;background-image:url(", ");background-repeat:no-repeat;background-size:100% 1310px;background-position:bottom center;overflow-x:hidden;.container{@media only screen and (min-width:1220px) and (max-width:1440px){max-width:1170px;}}.navbar{width:100%;position:fixed;left:0;top:0;padding:22px 0;transition:padding 0.2s ease,background-color 0.1s ease;&::before{width:calc(100% - 650px);content:'';display:block;height:100%;position:absolute;background:linear-gradient(#0000006e,rgba(0,0,0,0));right:0;top:0;z-index:-1;@media only screen and (max-width:1440px){width:calc(100% - 620px);}@media only screen and (max-width:1360px){width:calc(100% - 500px);}@media only screen and (max-width:991px){display:none;}}}.sticky-nav-active{.navbar{padding:16px 0;background-color:", ";box-shadow:0 0 20px rgba(0,0,0,0.1);&::before{display:none;}.smooth_scroll{color:", ";transition:color 0.3s ease;&:hover{color:", ";}}}}.learn__more-btn{display:inline-flex;align-items:center;font-family:'Open Sans',sans-serif;color:", ";font-size:14px;font-weight:700;letter-spacing:0;height:50px;min-width:151px;padding:0 20px;position:relative;@media only screen and (max-width:1360px){font-size:13px;}&::before{content:'';display:block;position:absolute;top:0;left:0;height:100%;border-radius:40px;width:72px;background-color:", ";transition:all 0.3s ease-out;}.btn_text{z-index:1;}.hyphen{width:20px;height:2px;margin-right:9px;background-color:", ";transform-origin:50% 50%;z-index:1;}&:hover{&::before{width:100%;}.hyphen{animation:", " 1s linear;}}}.reusecore-drawer__handler{.drawer_btn{border:0;width:80px;height:100px;padding:0;display:flex;align-items:center;justify-content:center;cursor:pointer;position:fixed;top:0;right:60px;z-index:99999;background-color:", ";transition:background-color 0.2s ease;@media only screen and (max-width:1440px){width:75px;}@media only screen and (max-width:1360px){right:30px;}&:hover{background-color:#e00032;}&:hover,&:focus{outline:0;}ul{display:grid;grid-template-columns:auto auto auto;grid-gap:5px;height:22px;width:26px;transition:all 0.35s ease;@media only screen and (max-width:1440px){transform:scale(0.9);}@media only screen and (max-width:667px){transform:scale(0.8);}li{width:5px;height:4px;background-color:", ";}}i{font-size:22px;position:absolute;font-weight:900;color:", ";transform:scale(0.1);opacity:0;visibility:hidden;transition:all 0.35s ease;}&.active{ul{opacity:0;transform:scale(0.1);}i{opacity:1;transform:rotate(45deg) scale(1);visibility:visible;}}}}"], _common_src_assets_image_charity_footer_bg_png__WEBPACK_IMPORTED_MODULE_2___default.a, Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.heading', '#060F1E'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text', '#294859'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.heading', '#060F1E'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#0071bc'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.heading', '#060F1E'), shake, Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondary', '#0071bc'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'));
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "charitystyle__ContentWrapper",
  componentId: "sc-1ggtki4-1"
})(["flex:1 0 auto;width:100%;overflow:hidden;"]);


/***/ }),

/***/ "u7LC":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("aMHs");
module.exports = __webpack_require__("RlXp").Object.setPrototypeOf;


/***/ }),

/***/ "ugQH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MenuWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


const NavbarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "navbarstyle__NavbarWrapper",
  componentId: "sc-1t7ubrx-0"
})([".container{padding:0 200px;display:flex;align-items:center;justify-content:space-between;@media only screen and (min-width:1220px) and (max-width:1440px){max-width:1170px !important;}@media only screen and (max-width:1440px){padding:0 30px;}}.logo{max-width:170px;width:100%;}"]);
const MenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "navbarstyle__MenuWrapper",
  componentId: "sc-1t7ubrx-1"
})(["display:flex;align-items:center;@media only screen and (max-width:1440px){padding-right:20px;}@media only screen and (max-width:1360px){padding-right:calc(75px + 20px);}@media only screen and (max-width:1260px){padding-right:calc(75px + 30px);}@media only screen and (max-width:991px){display:none;}a{font-size:16px;font-weight:600;margin-right:46px;color:", ";transition:all 0.25s ease;@media only screen and (max-width:1440px){margin-right:40px;}@media only screen and (max-width:1360px){margin-right:30px;}&:hover{color:", ";}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#0071bc'));
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "navbarstyle__Button",
  componentId: "sc-1t7ubrx-2"
})(["border:0;padding:0;min-width:150px;min-height:50px;display:flex;align-items:center;justify-content:center;border-radius:50px;font-size:14px;font-weight:600;cursor:pointer;color:", ";background-color:", ";transition:all 0.3s ease;@media only screen and (max-width:1440px){font-size:15px;}@media only screen and (max-width:1360px){font-size:14px;}&:hover{background-color:", ";}img{margin-left:11px;@media only screen and (max-width:1440px){margin-left:10px;}}&:hover,&:focus{content:0;box-shadow:none;}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.heading', '#060F1E'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#0071bc'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primaryHover', '#ECF22F'));
/* harmony default export */ __webpack_exports__["c"] = (NavbarWrapper);

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

/***/ "vpV/":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/city2-d483a1e17cdc5592b490782366a5efbe.jpg";

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "xx+m":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("HZWW");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("Fld6") });


/***/ }),

/***/ "y3XM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__("qzJh");
} else {}


/***/ }),

/***/ "y5yV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./common/src/components/UI/Container/style.js

const ContainerWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "style__ContainerWrapper",
  componentId: "sc-1gre7ok-0"
})(["margin-left:auto;margin-right:auto;", ";", ";@media (min-width:768px){max-width:750px;width:100%;}@media (min-width:992px){max-width:970px;width:100%;}@media (min-width:1220px){max-width:", ";width:100%;}@media (max-width:767px){", "}"], props => props.fullWidth && Object(external_styled_components_["css"])(["width:100%;max-width:none !important;"]), props => props.noGutter && Object(external_styled_components_["css"])(["padding-left:0;padding-right:0;"]) || Object(external_styled_components_["css"])(["padding-left:30px;padding-right:30px;"]), props => props.width || '1170px', props => props.mobileGutter && Object(external_styled_components_["css"])(["padding-left:20px;padding-right:20px;"]));
/* harmony default export */ var style = (ContainerWrapper);
// CONCATENATED MODULE: ./common/src/components/UI/Container/index.js
var __jsx = external_react_default.a.createElement;



const Container = ({
  children,
  className,
  fullWidth,
  mobileGutter,
  noGutter,
  width,
  id
}) => {
  const addAllClasses = ['container'];

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(style, {
    id: id,
    className: addAllClasses.join(' '),
    fullWidth: fullWidth,
    noGutter: noGutter,
    mobileGutter: mobileGutter,
    width: width
  }, children);
};

/* harmony default export */ var UI_Container = __webpack_exports__["a"] = (Container);

/***/ }),

/***/ "yRBM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("beRW"));

var _reactDom = _interopRequireDefault(__webpack_require__("y3XM"));

var _propTypes = _interopRequireDefault(__webpack_require__("27nJ"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ContainerRender =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContainerRender, _React$Component);

  function ContainerRender() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ContainerRender);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContainerRender)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.removeContainer = function () {
      if (_this.container) {
        _reactDom.default.unmountComponentAtNode(_this.container);

        _this.container.parentNode.removeChild(_this.container);

        _this.container = null;
      }
    };

    _this.renderComponent = function (props, ready) {
      var _this$props = _this.props,
          visible = _this$props.visible,
          getComponent = _this$props.getComponent,
          forceRender = _this$props.forceRender,
          getContainer = _this$props.getContainer,
          parent = _this$props.parent;

      if (visible || parent._component || forceRender) {
        if (!_this.container) {
          _this.container = getContainer();
        }

        _reactDom.default.unstable_renderSubtreeIntoContainer(parent, getComponent(props), _this.container, function callback() {
          if (ready) {
            ready.call(this);
          }
        });
      }
    };

    return _this;
  }

  _createClass(ContainerRender, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoMount) {
        this.renderComponent();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.autoMount) {
        this.renderComponent();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.autoDestroy) {
        this.removeContainer();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children({
        renderComponent: this.renderComponent,
        removeContainer: this.removeContainer
      });
    }
  }]);

  return ContainerRender;
}(_react.default.Component);

exports.default = ContainerRender;
ContainerRender.propTypes = {
  autoMount: _propTypes.default.bool,
  autoDestroy: _propTypes.default.bool,
  visible: _propTypes.default.bool,
  forceRender: _propTypes.default.bool,
  parent: _propTypes.default.any,
  getComponent: _propTypes.default.func.isRequired,
  getContainer: _propTypes.default.func.isRequired,
  children: _propTypes.default.func.isRequired
};
ContainerRender.defaultProps = {
  autoMount: true,
  autoDestroy: true,
  forceRender: false
};

/***/ }),

/***/ "yfv0":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("SpVz");
var toLength = __webpack_require__("qN4F");
var toAbsoluteIndex = __webpack_require__("SlSD");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "z0eR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Drawer = __webpack_require__("ptrp");

var _Drawer2 = _interopRequireDefault(_Drawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _Drawer2['default']; // export this package's api

module.exports = exports['default'];

/***/ }),

/***/ "zj13":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("GPAc");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("ZQQg");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "zuNl":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ })

/******/ });