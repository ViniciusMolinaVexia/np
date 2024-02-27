"use strict";
exports.id = 3001;
exports.ids = [3001];
exports.modules = {

/***/ 3001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_static_images_Favicon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5534);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3682);
/* harmony import */ var _meta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2685);
/* harmony import */ var _components_navMenu_navMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6635);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1790);
/* harmony import */ var _public_static_images_alphaville_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5175);




// import CookiesPolicy from '../components/cookiesPolicy/cookiesPolicy.component';





// import '../../public/static/main.scss';

const layout = ({ children , outContainer , outBottomContainer , metaProps , homeContent , active , location , cssClass , showNoIndex , success ,  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "UA-27437785-3", {
            cookie_expires: 0
        });
        const mainUrl = "https://qa.alphaville.com.br";
    // if (window.location.origin != mainUrl) {
    //   window.location.href = mainUrl + window.location.pathname;
    // }
    }, []);
    const defaultMetaProps = {
        image: {
            url: _public_static_images_alphaville_jpg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
            type: "image/jpeg",
            width: "1200",
            height: "489",
            alt: "Alphaville"
        },
        title: "Alphaville - Residenciais e lotes comerciais \xe0 venda",
        description: "Bem vindo \xe0 Alphaville. Conhe\xe7a nossos lotes \xe0 venda",
        url: _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_9__/* .URL_DOMAIN */ .V3 + "/"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_meta_component__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                ...metaProps || defaultMetaProps,
                homeContent: homeContent,
                success: success,
                showNoIndex: showNoIndex,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "facebook-domain-verification",
                    content: "ykvnn3gwiu4gqqg55k33ewhd68i3yc"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navMenu_navMenu__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    location: location
                })
            }),
            outContainer,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "layout",
                className: "layout " + active + " " + cssClass,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {
                    className: "container-layout",
                    children: children
                })
            }),
            outBottomContainer,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer_footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout);


/***/ })

};
;