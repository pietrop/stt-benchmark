webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/diff.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./pages/diff.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".equal{\n    cursor: pointer;\n}\n\n.delete {\n    display: inline-block;\n    position: relative;\n    /* // background-color: #ffe5e5; */\n    /* // background-color: #ff0000; */\n    /* // color: white; */\n    cursor: no-drop;\n}\n\n.delete:before {\n    content: \"~~~~~~~~~~~~\";\n    font-size: 0.6em;\n    font-weight: 700;\n    font-family: Times New Roman, Serif;\n    color: red;\n    width: 100%;\n    position: absolute;\n    top: 12px;\n    left: -1px;\n    overflow: hidden;\n}\n\n.insert{\n    -webkit-text-decoration-line: line-through;\n            text-decoration-line: line-through;\n    background-color: #e5e5ff;\n    cursor: pointer;\n}\n\n.insert {\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n}\n\n.insert:before {\n    content: \"~~~~~~~~~~~~\";\n    font-size: 0.6em;\n    font-weight: 700;\n    font-family: Times New Roman, Serif;\n    color: blue;\n    width: 100%;\n    position: absolute;\n    top: 12px;\n    left: -1px;\n    overflow: hidden;\n}\n\n.replaceStt{\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n}\n\n.replaceStt:before {\n    content: \"~~~~~~~~~~~~\";\n    font-size: 0.6em;\n    font-weight: 700;\n    font-family: Times New Roman, Serif;\n    color:  red;\n    width: 100%;\n    position: absolute;\n    top: 12px;\n    left: -1px;\n    overflow: hidden;\n}\n\n\n.replaceBaseText{\n    display: inline-block;\n    position: relative;\n    /* // background-color: #99cc99; */\n    cursor: no-drop;\n}\n\n.replaceBaseText:before {\n    content: \"~~~~~~~~~~~~\";\n    font-size: 0.6em;\n    font-weight: 700;\n    font-family: Times New Roman, Serif;\n    color:  #99cc99;\n    width: 100%;\n    position: absolute;\n    top: 12px;\n    left: -1px;\n    overflow: hidden;\n}\n\nspan.replaceBaseTextLine.line{\n    background-color: #e5f2e5;\n}\n\nspan.replaceBaseTextLine.line:after{\n    content: \"]\";\n    color: #99cc99;\n}\n\nspan.replaceBaseTextLine.line:before{\n    content: \"[\";\n    color: #99cc99;\n}\n\nspan.replaceSttLine.line{\n    background-color: #ffe5e5;\n}\n\nspan.replaceSttLine.line:after{\n    content: \"]\";\n    color: red;\n}\nspan.replaceSttLine.line:before{\n    content: \"[\";\n    color: red;\n}\n\n.unplayedWord{\n    color:grey!important;\n}\n\nvideo.videoPreview {\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n}", "",{"version":3,"sources":["/Users/passarellip/CODE/PERSONAL/stt-benchmark/pages/diff.css"],"names":[],"mappings":"AAAA;IACI,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,kCAAkC;IAClC,kCAAkC;IAClC,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,gBAAgB;IAChB,mCAAmC;IACnC,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,0CAAkC;YAAlC,kCAAkC;IAClC,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,gBAAgB;IAChB,mCAAmC;IACnC,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,gBAAgB;IAChB,mCAAmC;IACnC,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,gBAAgB;AACpB;;;AAGA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,kCAAkC;IAClC,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,gBAAgB;IAChB,mCAAmC;IACnC,eAAe;IACf,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,UAAU;AACd;AACA;IACI,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;AAClB","file":"diff.css","sourcesContent":[".equal{\n    cursor: pointer;\n}\n\n.delete {\n    display: inline-block;\n    position: relative;\n    /* // background-color: #ffe5e5; */\n    /* // background-color: #ff0000; */\n    /* // color: white; */\n    cursor: no-drop;\n}\n\n.delete:before {\n    content: \"~~~~~~~~~~~~\";\n    font-size: 0.6em;\n    font-weight: 700;\n    font-family: Times New Roman, Serif;\n    color: red;\n    width: 100%;\n    position: absolute;\n    top: 12px;\n    left: -1px;\n    overflow: hidden;\n}\n\n.insert{\n    text-decoration-line: line-through;\n    background-color: #e5e5ff;\n    cursor: pointer;\n}\n\n.insert {\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n}\n\n.insert:before {\n    content: \"~~~~~~~~~~~~\";\n    font-size: 0.6em;\n    font-weight: 700;\n    font-family: Times New Roman, Serif;\n    color: blue;\n    width: 100%;\n    position: absolute;\n    top: 12px;\n    left: -1px;\n    overflow: hidden;\n}\n\n.replaceStt{\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n}\n\n.replaceStt:before {\n    content: \"~~~~~~~~~~~~\";\n    font-size: 0.6em;\n    font-weight: 700;\n    font-family: Times New Roman, Serif;\n    color:  red;\n    width: 100%;\n    position: absolute;\n    top: 12px;\n    left: -1px;\n    overflow: hidden;\n}\n\n\n.replaceBaseText{\n    display: inline-block;\n    position: relative;\n    /* // background-color: #99cc99; */\n    cursor: no-drop;\n}\n\n.replaceBaseText:before {\n    content: \"~~~~~~~~~~~~\";\n    font-size: 0.6em;\n    font-weight: 700;\n    font-family: Times New Roman, Serif;\n    color:  #99cc99;\n    width: 100%;\n    position: absolute;\n    top: 12px;\n    left: -1px;\n    overflow: hidden;\n}\n\nspan.replaceBaseTextLine.line{\n    background-color: #e5f2e5;\n}\n\nspan.replaceBaseTextLine.line:after{\n    content: \"]\";\n    color: #99cc99;\n}\n\nspan.replaceBaseTextLine.line:before{\n    content: \"[\";\n    color: #99cc99;\n}\n\nspan.replaceSttLine.line{\n    background-color: #ffe5e5;\n}\n\nspan.replaceSttLine.line:after{\n    content: \"]\";\n    color: red;\n}\nspan.replaceSttLine.line:before{\n    content: \"[\";\n    color: red;\n}\n\n.unplayedWord{\n    color:grey!important;\n}\n\nvideo.videoPreview {\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n}"]}]);


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_css_only__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-css-only */ "./node_modules/bootstrap-css-only/css/bootstrap.min.css");
/* harmony import */ var bootstrap_css_only__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_css_only__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _diff_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./diff.css */ "./pages/diff.css");
/* harmony import */ var _diff_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_diff_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/passarellip/CODE/PERSONAL/stt-benchmark/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// import App from 'next/app'



function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 12
    }
  }));
} // Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }


/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./pages/diff.css":
/*!************************!*\
  !*** ./pages/diff.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./diff.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/diff.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./diff.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/diff.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./diff.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/diff.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ })

})
//# sourceMappingURL=_app.js.a4e5ac09edbb28da6687.hot-update.js.map