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

/***/ "./app/javascript/modals/index.js":
/*!****************************************!*\
  !*** ./app/javascript/modals/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/tomspencer/Training/bank/app/javascript/modals/index.js: Unexpected token (28:12)\n\n  26 |     render () {\n  27 |         return (\n> 28 |             <div>\n     |             ^\n  29 |                 { this.state.isShowing ? <div onClick={this.closeModalHandler} className=\"back-drop\"></div> : null }\n  30 | \n  31 |                 <button className=\"open-modal-btn\" onClick={this.openModalHandler}>Open Modal</button>\n    at Parser.raise (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:6322:17)\n    at Parser.unexpected (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:7638:16)\n    at Parser.parseExprAtom (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:8799:20)\n    at Parser.parseExprSubscripts (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:8385:23)\n    at Parser.parseMaybeUnary (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:8365:21)\n    at Parser.parseExprOps (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:8252:23)\n    at Parser.parseMaybeConditional (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:8225:23)\n    at Parser.parseMaybeAssign (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:8172:21)\n    at Parser.parseParenAndDistinguishExpression (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:8937:28)\n    at Parser.parseExprAtom (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:8731:21)\n    at Parser.parseExprSubscripts (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:8385:23)\n    at Parser.parseMaybeUnary (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:8365:21)\n    at Parser.parseExprOps (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:8252:23)\n    at Parser.parseMaybeConditional (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:8225:23)\n    at Parser.parseMaybeAssign (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:8172:21)\n    at Parser.parseExpression (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:8120:23)\n    at Parser.parseReturnStatement (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:10132:28)\n    at Parser.parseStatementContent (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:9811:21)\n    at Parser.parseStatement (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:9763:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:10340:25)\n    at Parser.parseBlockBody (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:10327:10)\n    at Parser.parseBlock (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:10311:10)\n    at Parser.parseFunctionBody (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:9382:24)\n    at Parser.parseFunctionBodyAndFinish (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:9352:10)\n    at Parser.parseMethod (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:9306:10)\n    at Parser.pushClassMethod (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:10743:30)\n    at Parser.parseClassMemberWithIsStatic (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:10668:12)\n    at Parser.parseClassMember (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:10607:10)\n    at /Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:10562:14\n    at Parser.withTopicForbiddingContext (/Users/tomspencer/Training/bank/node_modules/@babel/parser/lib/index.js:9657:14)");

/***/ }),

/***/ "./app/javascript/packs/modal.js":
/*!***************************************!*\
  !*** ./app/javascript/packs/modal.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modals_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modals/index */ "./app/javascript/modals/index.js");
/* harmony import */ var _modals_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modals_index__WEBPACK_IMPORTED_MODULE_0__);


/***/ })

/******/ });
//# sourceMappingURL=modal-2cbd8d52128cd93952a0.js.map