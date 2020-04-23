webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/comparison.js":
/*!**********************************!*\
  !*** ./components/comparison.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Comparison; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
var _jsxFileName = "/Users/passarellip/CODE/PERSONAL/stt-benchmark/components/comparison.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Comparison() {
  // Declare a new state variable, which we'll call "count"
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      comparisonData = _useState[0],
      setComparisonData = _useState[1];

  var addComparisonData = function addComparisonData(e) {
    var reader = new FileReader();

    reader.onload = function () {
      var text = reader.result; // const node = document.getElementById('output');
      // node.innerText = text;

      var tmpComparisonData = JSON.parse(text);
      setComparisonData(tmpComparisonData);
      console.log(reader.result.substring(0, 200));
    };

    reader.readAsText(e.target.files[0]);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Comparison"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].File, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].File.Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "Base text file input", __jsx("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 54
    }
  }, ".txt")), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].File.Input, {
    onChange: addComparisonData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  })), JSON.stringify(comparisonData));
}

/***/ })

})
//# sourceMappingURL=index.js.dcf407677d325fc29ae7.hot-update.js.map