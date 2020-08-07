module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/edit-products.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/edit-products.js":
/*!********************************!*\
  !*** ./pages/edit-products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const UPDATE_PRICE = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
  mutation productVariantUpdate($input: ProductVariantInput!) {
    productVariantUpdate(input: $input) {
      product {
        title
      }
      productVariant {
        id
        price
      }
    }
  }
`;

class EditProduct extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      discount: '',
      price: '',
      variantId: '',
      showToast: false
    });

    _defineProperty(this, "handleChange", field => {
      return value => this.setState({
        [field]: value
      });
    });

    _defineProperty(this, "itemToBeConsumed", () => {
      const item = store_js__WEBPACK_IMPORTED_MODULE_2___default.a.get('item');
      const price = item.variants.edges[0].node.price;
      const variantId = item.variants.edges[0].node.id;
      const discounter = price * 0.1;
      this.setState({
        price,
        variantId
      });
      return (price - discounter).toFixed(2);
    });
  }

  componentDidMount() {
    this.setState({
      discount: this.itemToBeConsumed()
    });
  }

  render() {
    const {
      name,
      price,
      discount,
      variantId
    } = this.state;
    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Mutation"], {
      mutation: UPDATE_PRICE
    }, (handleSubmit, {
      error,
      data
    }) => {
      const showError = error && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Banner"], {
        status: "critical"
      }, error.message);

      const showToast = data && data.productVariantUpdate && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Toast"], {
        content: "Sucessfully updated",
        onDismiss: () => this.setState({
          showToast: false
        })
      });

      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Frame"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, showToast, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, showError), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["DisplayText"], {
        size: "large"
      }, name), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
        prefix: "$",
        value: price,
        disabled: true,
        label: "Original price",
        type: "price"
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
        prefix: "$",
        value: discount,
        onChange: this.handleChange('discount'),
        label: "Discounted price",
        type: "discount"
      })), __jsx("p", null, "This sale price will expire in two weeks"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["PageActions"], {
        primaryAction: [{
          content: 'Save',
          onAction: () => {
            const productVariableInput = {
              id: variantId,
              price: discount
            };
            handleSubmit({
              variables: {
                input: productVariableInput
              }
            });
          }
        }],
        secondaryActions: [{
          content: 'Remove discount'
        }]
      }))))));
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EditProduct);

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("store-js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZWRpdC1wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFwb2xsb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0b3JlLWpzXCIiXSwibmFtZXMiOlsiVVBEQVRFX1BSSUNFIiwiZ3FsIiwiRWRpdFByb2R1Y3QiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRpc2NvdW50IiwicHJpY2UiLCJ2YXJpYW50SWQiLCJzaG93VG9hc3QiLCJmaWVsZCIsInZhbHVlIiwic2V0U3RhdGUiLCJpdGVtIiwic3RvcmUiLCJnZXQiLCJ2YXJpYW50cyIsImVkZ2VzIiwibm9kZSIsImlkIiwiZGlzY291bnRlciIsInRvRml4ZWQiLCJjb21wb25lbnREaWRNb3VudCIsIml0ZW1Ub0JlQ29uc3VtZWQiLCJyZW5kZXIiLCJuYW1lIiwic3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJlcnJvciIsImRhdGEiLCJzaG93RXJyb3IiLCJtZXNzYWdlIiwicHJvZHVjdFZhcmlhbnRVcGRhdGUiLCJoYW5kbGVDaGFuZ2UiLCJjb250ZW50Iiwib25BY3Rpb24iLCJwcm9kdWN0VmFyaWFibGVJbnB1dCIsInZhcmlhYmxlcyIsImlucHV0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNB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Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvZWRpdC1wcm9kdWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvZWRpdC1wcm9kdWN0cy5qc1wiKTtcbiIsImltcG9ydCB7XHJcbiAgICBCYW5uZXIsXHJcbiAgICBDYXJkLFxyXG4gICAgRGlzcGxheVRleHQsXHJcbiAgICBGb3JtLFxyXG4gICAgRm9ybUxheW91dCxcclxuICAgIEZyYW1lLFxyXG4gICAgTGF5b3V0LFxyXG4gICAgUGFnZSxcclxuICAgIFBhZ2VBY3Rpb25zLFxyXG4gICAgVGV4dEZpZWxkLFxyXG4gICAgVG9hc3QsXHJcbiAgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuICBpbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnO1xyXG4gIGltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG4gIGltcG9ydCB7IE11dGF0aW9uIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcclxuXHJcbiAgY29uc3QgVVBEQVRFX1BSSUNFID0gZ3FsYFxyXG4gIG11dGF0aW9uIHByb2R1Y3RWYXJpYW50VXBkYXRlKCRpbnB1dDogUHJvZHVjdFZhcmlhbnRJbnB1dCEpIHtcclxuICAgIHByb2R1Y3RWYXJpYW50VXBkYXRlKGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgfVxyXG4gICAgICBwcm9kdWN0VmFyaWFudCB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBwcmljZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4gIGNsYXNzIEVkaXRQcm9kdWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICBkaXNjb3VudDogJycsXHJcbiAgICAgIHByaWNlOiAnJyxcclxuICAgICAgdmFyaWFudElkOiAnJyxcclxuICAgICAgc2hvd1RvYXN0OiBmYWxzZSxcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc2NvdW50OiB0aGlzLml0ZW1Ub0JlQ29uc3VtZWQoKSB9KTtcclxuICAgIH1cclxuICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3QgeyBuYW1lLCBwcmljZSwgZGlzY291bnQsIHZhcmlhbnRJZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8TXV0YXRpb25cclxuICAgICAgICAgIG11dGF0aW9uPXtVUERBVEVfUFJJQ0V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyhoYW5kbGVTdWJtaXQsIHtlcnJvciwgZGF0YX0pID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2hvd0Vycm9yID0gZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEJhbm5lciBzdGF0dXM9XCJjcml0aWNhbFwiPntlcnJvci5tZXNzYWdlfTwvQmFubmVyPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNob3dUb2FzdCA9IGRhdGEgJiYgZGF0YS5wcm9kdWN0VmFyaWFudFVwZGF0ZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8VG9hc3RcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiU3VjZXNzZnVsbHkgdXBkYXRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1RvYXN0OiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYW1lPlxyXG4gICAgICAgIDxQYWdlPlxyXG4gICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAge3Nob3dUb2FzdH1cclxuICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgIHtzaG93RXJyb3J9XHJcbiAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICA8RGlzcGxheVRleHQgc2l6ZT1cImxhcmdlXCI+e25hbWV9PC9EaXNwbGF5VGV4dD5cclxuICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQuR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD1cIiRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk9yaWdpbmFsIHByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD1cIiRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGlzY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnZGlzY291bnQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEaXNjb3VudGVkIHByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRpc2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0Lkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVGhpcyBzYWxlIHByaWNlIHdpbGwgZXhwaXJlIGluIHR3byB3ZWVrc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPFBhZ2VBY3Rpb25zXHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnlBY3Rpb249e1tcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnU2F2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0VmFyaWFibGVJbnB1dCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB2YXJpYW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogZGlzY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogeyBpbnB1dDogcHJvZHVjdFZhcmlhYmxlSW5wdXQgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnlBY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1JlbW92ZSBkaXNjb3VudCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvUGFnZT5cclxuICAgIDwvRnJhbWU+XHJcbiAgICAgICk7XHJcbiAgICB9fVxyXG4gICAgPC9NdXRhdGlvbj5cclxuICApO1xyXG59XHJcbiAgXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZmllbGQpID0+IHtcclxuICAgICAgcmV0dXJuICh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xyXG4gICAgfTtcclxuICBcclxuICAgIGl0ZW1Ub0JlQ29uc3VtZWQgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBzdG9yZS5nZXQoJ2l0ZW0nKTtcclxuICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLnZhcmlhbnRzLmVkZ2VzWzBdLm5vZGUucHJpY2U7XHJcbiAgICAgIGNvbnN0IHZhcmlhbnRJZCA9IGl0ZW0udmFyaWFudHMuZWRnZXNbMF0ubm9kZS5pZDtcclxuICAgICAgY29uc3QgZGlzY291bnRlciA9IHByaWNlICogMC4xO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgcHJpY2UsIHZhcmlhbnRJZCB9KTtcclxuICAgICAgcmV0dXJuIChwcmljZSAtIGRpc2NvdW50ZXIpLnRvRml4ZWQoMik7XHJcbiAgICB9O1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBFZGl0UHJvZHVjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2hvcGlmeS9wb2xhcmlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdG9yZS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9