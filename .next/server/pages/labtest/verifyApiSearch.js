"use strict";
(() => {
var exports = {};
exports.id = 2046;
exports.ids = [2046];
exports.modules = {

/***/ 4198:
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
        search: []
    });
    const { 0: api2 , 1: setApi2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        search: []
    });
    const { 0: api3 , 1: setApi3  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        search: []
    });
    const { 0: result , 1: setResult  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        search: []
    });
    const { 0: searchValue , 1: setSearchValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        query: ""
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const baseApi = "https://www.alphaville.com.br/be_alphaville/public/web/empreendimentos";
        const fetchData = async ()=>{
            const href1 = baseApi + "/search-by-location?latitude=-23.5431786&longitude=-46.6291845&where=destaque=1%20AND%20status_obra%20%3E%201&limit=4";
            const result1 = await axios__WEBPACK_IMPORTED_MODULE_2___default()(href1);
            setApi1({
                search: result1 ? result1.data.main_image : []
            });
            // ==========
            const href2 = baseApi + "/search-by-location?latitude=1&longitude=1&where=destaque=1%20AND%20status_obra=1&limit=6";
            const result2 = await axios__WEBPACK_IMPORTED_MODULE_2___default()(href2);
            setApi2({
                search: result2 ? result2.data.main_image : []
            });
            // ==========
            const href3 = baseApi + "/search-by-location?latitude=-23.5431786&longitude=-46.6291845&search=&orderby=status_obra%20ASC&where=";
            const result3 = await axios__WEBPACK_IMPORTED_MODULE_2___default()(href3);
            setApi3({
                search: result3 ? result3.data.search : []
            });
        };
        fetchData();
    }, []);
    const searchResult = (query)=>{
        const li = api3.search.filter((el)=>{
            return JSON.stringify(el).toLowerCase().indexOf(query.toLowerCase()) > -1;
        });
        setResult({
            search: li
        });
    };
    const autoComplete = async (e)=>{
        if (e) {
            setSearchValue({
                query: e.target.value
            });
        }
        searchResult(searchValue.query);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: " Teste API"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                    children: "TESTE BUSCA"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "area-encontre",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    value: searchValue.query,
                    name: "busca",
                    className: "busca-menu-mobile",
                    placeholder: "Encontre seu empreendimento",
                    onChange: autoComplete
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                children: [
                    "Total: ",
                    result.search.length
                ]
            }),
            result.search.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: item.empreendimento.slug,
                        children: [
                            "-",
                            item.type.title,
                            " - ",
                            item.empreendimento.name,
                            " - ",
                            item.empreendimento.second_name
                        ]
                    })
                }, item.empreendimento.id)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: "================================"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                    children: "API LINK 3"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                children: [
                    "Total: ",
                    api3.search.length
                ]
            }),
            api3.search.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: item.empreendimento.slug,
                        children: [
                            "-",
                            item.type.title,
                            " - ",
                            item.empreendimento.name,
                            " - ",
                            item.empreendimento.second_name
                        ]
                    })
                }, item.empreendimento.id))
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
var __webpack_exports__ = (__webpack_exec__(4198));
module.exports = __webpack_exports__;

})();