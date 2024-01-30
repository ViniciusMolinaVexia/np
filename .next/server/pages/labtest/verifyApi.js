"use strict";
(() => {
var exports = {};
exports.id = 4703;
exports.ids = [4703];
exports.modules = {

/***/ 3548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



const VerifyApi = ()=>{
    const { 0: api1 , 1: setApi1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        banners: []
    });
    const { 0: api2 , 1: setApi2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        banners: []
    });
    const { 0: api3 , 1: setApi3  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        banners: []
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const baseApi = "https://www.alphaville.com.br/be_alphaville/public/web/empreendimentos";
        const fetchData = async ()=>{
            const href1 = baseApi + "/search-by-location?latitude=-23.5431786&longitude=-46.6291845&where=destaque=1%20AND%20status_obra%20%3E%201&limit=4";
            const result1 = await axios__WEBPACK_IMPORTED_MODULE_2___default()(href1);
            setApi1({
                banners: result1 ? result1.data.main_image : []
            });
            // ==========
            const href2 = baseApi + "/search-by-location?latitude=1&longitude=1&where=destaque=1%20AND%20status_obra=1&limit=6";
            const result2 = await axios__WEBPACK_IMPORTED_MODULE_2___default()(href2);
            setApi2({
                banners: result2 ? result2.data.main_image : []
            });
            // ==========
            const href3 = baseApi + "/search-by-location?latitude=-23.5431786&longitude=-46.6291845&search=&orderby=status_obra%20ASC&where=";
            const result3 = await axios__WEBPACK_IMPORTED_MODULE_2___default()(href3);
            setApi3({
                banners: result3 ? result3.data.main_image : []
            });
        };
        fetchData();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: " Teste API"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                    children: "API LINK 1"
                })
            }),
            api1.banners.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: item.slug,
                        children: item.banner_title
                    })
                }, item.empreendimento_id)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                    children: "API LINK 2"
                })
            }),
            api2.banners.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: item.slug,
                        children: item.banner_title
                    })
                }, item.empreendimento_id)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                    children: "API LINK 3"
                })
            }),
            api3.banners.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: item.slug,
                        children: item.banner_title
                    })
                }, item.empreendimento_id))
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VerifyApi);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3548));
module.exports = __webpack_exports__;

})();