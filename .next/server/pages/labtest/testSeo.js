"use strict";
(() => {
var exports = {};
exports.id = 2820;
exports.ids = [2820];
exports.modules = {

/***/ 1326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1790);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_1__/* .ENDPOINT_BASE */ .GU,
    responseType: "json"
}));


/***/ }),

/***/ 9590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1790);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1326);


class Home {
    getContent = async ()=>{
        const res = await _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(_Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_1__/* .ENDPOINT_HOME */ .dN);
        let homeModel = {};
        if (res.data) {
            homeModel = res.data;
        }
        return homeModel;
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ 8354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _share_service_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9590);
/* harmony import */ var _share_service_imageSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8224);
/* harmony import */ var _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1790);
// import { NextSeo } from 'next-seo';





function PageSeo(props) {
    function setTitle(title) {
        if (title && title.indexOf("Alphaville") == -1) {
            title = "Alphaville - " + title;
        }
        return title ? title : "Alphaville";
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "SEO Added to Page"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Take a look at the head to see what has been added."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "Or checkout how",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/jsonld",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: "JSON-LD"
                        })
                    }),
                    " ",
                    "(Structured Data) is added"
                ]
            })
        ]
    });
}
;
PageSeo.getInitialProps = async ({ req , query  })=>{
    let banner = [];
    let homeContent = {};
    let metaProps = {};
    const isServer = "undefined" === "undefined";
    if (isServer) {
        console.log("server");
    } else {
        console.log("browser");
    }
    if (isServer) {
        const homeService = new _share_service_home__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z();
        homeContent = await homeService.getContent();
        const imgSize = new _share_service_imageSize__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z();
        let imgUrl = homeContent.cid_alp_image_desktop || homeContent.cid_alp_image_mobile;
        const mainImg = await imgSize.generateImageMetaProps(imgUrl, homeContent.cid_alp_image_alt_text);
        let imgUrl1 = homeContent.exp_alp_image1_desktop || homeContent.exp_alp_image1_mobile;
        const img1 = await imgSize.generateImageMetaProps(imgUrl1, homeContent.exp_alp_image1_title);
        let imgUrl2 = homeContent.exp_alp_image2_desktop || homeContent.exp_alp_image2_mobile;
        const img2 = await imgSize.generateImageMetaProps(imgUrl2, homeContent.exp_alp_image2_title);
        let imgUrl3 = homeContent.exp_alp_image3_desktop || homeContent.exp_alp_image3_mobile;
        const img3 = await imgSize.generateImageMetaProps(imgUrl3, homeContent.exp_alp_image3_title);
        let imgUrl4 = homeContent.exp_alp_image4_desktop || homeContent.exp_alp_image4_mobile;
        const img4 = await imgSize.generateImageMetaProps(imgUrl4, homeContent.exp_alp_image4_title);
        metaProps = {
            images: [
                mainImg,
                img1,
                img2,
                img3,
                img4
            ],
            title: homeContent.meta_title,
            description: homeContent.meta_description,
            url: _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_4__/* .URL_DOMAIN */ .V3 + "/home"
        };
    }
    return {
        homeContent,
        metaProps,
        isServer
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageSeo);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9984:
/***/ ((module) => {

module.exports = require("imagesize");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,1270,1664,1790,8224], () => (__webpack_exec__(8354)));
module.exports = __webpack_exports__;

})();