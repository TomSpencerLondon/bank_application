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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/modal.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/modals/index.jsx":
/*!*****************************************!*\
  !*** ./app/javascript/modals/index.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/tomspencer/Training/bank/app/javascript/modals/index.jsx: Identifier 'Modal' has already been declared (5:7)\n\n  3 | import { Container, Button, Alert, Modal, modalHeader, modalBody, modalFooter } from 'reactstrap';\n  4 | \n> 5 | import Modal from './modal';\n    |        ^\n  6 | class App extends Component {\n  7 | \n  8 |     state = {\n    at Object.raise (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:6322:17)\n    at ScopeHandler.checkRedeclarationInScope (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:3754:12)\n    at ScopeHandler.declareName (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:3720:12)\n    at Object.checkLVal (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:8006:22)\n    at Object.parseImportSpecifierLocal (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:11126:10)\n    at Object.maybeParseDefaultImportSpecifier (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:11132:12)\n    at Object.parseImport (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:11103:31)\n    at Object.parseStatementContent (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:9861:27)\n    at Object.parseStatement (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:9763:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:10340:25)\n    at Object.parseBlockBody (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:10327:10)\n    at Object.parseTopLevel (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:9692:10)\n    at Object.parse (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:11209:17)\n    at parse (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:11245:38)\n    at parser (/Users/tomspencer/Training/bank/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\n    at normalizeFile (/Users/tomspencer/Training/bank/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\n    at runSync (/Users/tomspencer/Training/bank/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/Users/tomspencer/Training/bank/node_modules/@babel/core/lib/transformation/index.js:35:14)\n    at /Users/tomspencer/Training/bank/node_modules/@babel/core/lib/transform.js:34:34\n    at processTicksAndRejections (internal/process/task_queues.js:82:9)");

/***/ }),

/***/ "./app/javascript/packs/modal.js":
/*!***************************************!*\
  !*** ./app/javascript/packs/modal.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modals_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modals/index */ "./app/javascript/modals/index.jsx");
/* harmony import */ var _modals_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modals_index__WEBPACK_IMPORTED_MODULE_0__);


/***/ })

/******/ });
//# sourceMappingURL=modal-f257007a0c6cf02d07a7.js.map