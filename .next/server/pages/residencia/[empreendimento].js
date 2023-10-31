"use strict";
(() => {
var exports = {};
exports.id = 130;
exports.ids = [130];
exports.modules = {

/***/ 833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _share_components_alphaMenu_alphaMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3899);
/* harmony import */ var _share_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5129);
/* harmony import */ var _share_service_enterprises__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2750);
/* harmony import */ var _share_components_formSaibaMais__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3331);
/* harmony import */ var _share_layouts_layout_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4756);
/* harmony import */ var _share_components_teaserCarrosselCadaSorriso_teaser_carrossel_cada_sorriso__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7444);
/* harmony import */ var _share_components_teaserCarrosselSimples_teaser_carrossel_simples__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5298);
/* harmony import */ var _share_components_teaserMap_teaser_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2434);
/* harmony import */ var _share_components_teaserSuaSeguranca_teaser_sua_seguranca__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9123);
/* harmony import */ var _share_components_teaserVideo_teaser_video__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4079);
/* harmony import */ var _share_service_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1659);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
















const TeaserFloatModal = next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(null, {
    loadableGenerated: {
        modules: [
            "residencia\\[empreendimento]\\index.jsx -> " + "../../../_share/components/teaserFloatModal/teaser-float-modal"
        ]
    },
    ssr: false
});
const TeaserFooterText = next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(null, {
    loadableGenerated: {
        modules: [
            "residencia\\[empreendimento]\\index.jsx -> " + "../../../_share/components/teaserFooterText"
        ]
    },
    ssr: false
});
const ResidenciaPage = ({ homeContent , showAlphaMenu , slugDomPedro , location , empreendimentosjson , displayColor ,  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
    const { 0: isMobile , 1: setisMobile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { id , title , banner , metaProps  } = homeContent;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.outerWidth <= 768 ? setisMobile(true) : setisMobile(false);
    // console.log(window.outerWidth);
    }, []);
    const util = new _share_service_util__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_share_layouts_layout_main__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        metaProps: util.changeTitleMetaProps(metaProps, title),
        homeContent: homeContent,
        url: "/",
        active: "residencia",
        location: location,
        cssClass: displayColor + " teaserLayoutPage",
        outContainer: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_share_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    bannerList: banner,
                    upBner: true,
                    showButton: false,
                    showTexts: false,
                    isTeaser: true,
                    homeContent: homeContent,
                    title: homeContent.title,
                    colors: homeContent.displayColors
                }),
                !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TeaserFloatModal, {
                    isTeaser: false,
                    homeContent: homeContent,
                    colors: homeContent.displayColors
                })
            ]
        }),
        outBottomContainer: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "teaserLayoutPage",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        backgroundColor: "#F7F5F5",
                        position: "relative"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_share_components_teaserCarrosselCadaSorriso_teaser_carrossel_cada_sorriso__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            homeContent: homeContent,
                            isMobile: isMobile,
                            colors: homeContent.displayColors
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_share_components_formSaibaMais__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            isTeaser: false,
                            colors: homeContent.displayColors,
                            homeContent: homeContent
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: homeContent.statusStand == 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_share_components_teaserMap_teaser_map__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        isMobile: isMobile,
                        id: "nosso-stand",
                        colors: homeContent.displayColors,
                        standVendas: homeContent.standVendas
                    }) : null
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        backgroundColor: "#F7F5F5 !important",
                        paddingTop: "3rem"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TeaserFooterText, {
                        id: "footer"
                    })
                })
            ]
        }),
        children: [
            showAlphaMenu ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_share_components_alphaMenu_alphaMenu__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                isInternal: false,
                isTeaser: true,
                colors: homeContent.displayColors,
                homeContent: homeContent,
                isMobile: true,
                empreendimentosjson: empreendimentosjson,
                statusStand: homeContent.statusStand,
                linkStatus: homeContent.linkStandAtivo
            }) : "",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_share_components_teaserVideo_teaser_video__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                homeContent: homeContent,
                colors: homeContent.displayColors,
                isMobile: isMobile
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_share_components_teaserCarrosselSimples_teaser_carrossel_simples__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                homeContent: homeContent,
                colors: homeContent.displayColors,
                isMobile: isMobile
            })
        ]
    });
};
ResidenciaPage.getInitialProps = async (ctx)=>{
    const { req , res , query  } = ctx;
    // console.log('****************  query: ', query);
    let empreendimento = {};
    try {
        const enterpriseService = new _share_service_enterprises__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z();
        empreendimento = await enterpriseService.getEnterpriseBySlugTitle(query.empreendimento, true);
        if (empreendimento.statusObra.id != "5") {
            throw new Exception();
        }
    } catch (error) {
        const util = new _share_service_util__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z();
        if (ctx.query.utm_content && util.isTeaserRedirect(ctx.query.utm_content)) {
            res.writeHead(307, {
                Location: "https://api.whatsapp.com/send?phone=5519997188929",
                "Content-Type": "text/html; charset=utf-8"
            });
            res.end();
            return {};
        } else {
            res.writeHead(307, {
                Location: "/404",
                "Content-Type": "text/html; charset=utf-8"
            });
            res.end();
            return {};
        }
    }
    return {
        homeContent: empreendimento,
        showAlphaMenu: true,
        location: {},
        empreendimentosjson: {}
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResidenciaPage);


/***/ }),

/***/ 2433:
/***/ ((module) => {

module.exports = require("@react-google-maps/api");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 2423:
/***/ ((module) => {

module.exports = require("react-bootstrap/Accordion");

/***/ }),

/***/ 7511:
/***/ ((module) => {

module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ 128:
/***/ ((module) => {

module.exports = require("react-bootstrap/Collapse");

/***/ }),

/***/ 9306:
/***/ ((module) => {

module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ 8907:
/***/ ((module) => {

module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ 3742:
/***/ ((module) => {

module.exports = require("react-bootstrap/Spinner");

/***/ }),

/***/ 8290:
/***/ ((module) => {

module.exports = require("react-responsive-picture");

/***/ }),

/***/ 9294:
/***/ ((module) => {

module.exports = require("react-youtube");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2770:
/***/ ((module) => {

module.exports = require("swiper");

/***/ }),

/***/ 3630:
/***/ ((module) => {

module.exports = require("swiper/react");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,1270,1664,1890,5152,1790,5176,1659,4756,5129,3899,2750,3936], () => (__webpack_exec__(833)));
module.exports = __webpack_exports__;

})();