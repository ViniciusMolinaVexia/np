"use strict";
(() => {
var exports = {};
exports.id = 6284;
exports.ids = [6284];
exports.modules = {

/***/ 4728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Redirect": () => (/* binding */ Redirect),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1790);




class Redirect extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props){
        super();
        this.state = {
            ...props
        };
    }
    async componentDidMount() {
        try {
            const router = await (next_router__WEBPACK_IMPORTED_MODULE_2___default().router);
            if (router.asPath) {
                const urlRedirect = _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_3__/* .URL_DOMAIN */ .V3 + router.asPath;
            // window.location = urlRedirect;
            }
        } catch (error) {
            console.log("error: ", error);
        }
    }
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            children: "Loading..."
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Redirect);


/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1790], () => (__webpack_exec__(4728)));
module.exports = __webpack_exports__;

})();