"use strict";
(() => {
var exports = {};
exports.id = 3106;
exports.ids = [3106];
exports.modules = {

/***/ 6720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _share_components_teaserAgradecimento__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3817);
/* harmony import */ var _share_components_backButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4066);
/* harmony import */ var _share_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5129);
/* harmony import */ var _share_service_enterprises__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2750);
/* harmony import */ var _share_layouts_layout_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4756);
/* harmony import */ var _share_service_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1659);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);









const TeaserAgradecimento = ({ homeContent , location , displayColor  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const { success  } = router.query;
    const sendSuccess = success == "true";
    const { id , title , banner , metaProps  } = homeContent;
    const { 0: isMobile , 1: setIsMobile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        resizeIsMobile(null);
        window.addEventListener("resize", resizeIsMobile);
        return ()=>window.removeEventListener("resize", resizeIsMobile);
    }, []);
    const resizeIsMobile = (event)=>{
        setIsMobile(window.outerWidth <= 768);
    };
    const util = new _share_service_util__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_share_layouts_layout_main__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        metaProps: util.changeTitleMetaProps(metaProps, title, success),
        homeContent: homeContent,
        success: success,
        url: "/",
        active: "teaser",
        location: location,
        cssClass: displayColor,
        showNoIndex: true,
        outContainer: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_share_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            homeContent: homeContent,
            bannerList: banner,
            upBner: true,
            showButton: false,
            showTexts: false,
            isTeaser: true,
            title: homeContent.title,
            colors: homeContent.displayColors
        }),
        children: [
            !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_share_components_backButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                link: `teaser/${homeContent.slug}`,
                colors: homeContent.displayColors
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_share_components_teaserAgradecimento__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                colors: homeContent.displayColors,
                success: sendSuccess,
                showButton: isMobile,
                link: `teaser/${homeContent.slug}`
            })
        ]
    });
};
TeaserAgradecimento.getInitialProps = async ({ req , query  })=>{
    const enterpriseService = new _share_service_enterprises__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z();
    const empreendimento = await enterpriseService.getEnterpriseBySlugTitle(query.empreendimento, true);
    const jsonEmpreendimentos = [
        {
            slug: "lancamento-ceara-5",
            bannerTitle: "Novo residencial do Grupo Alphaville no Cear\xe1",
            logoJson: "LogoCeara5"
        },
        {
            slug: "lancamento-sergipe-3",
            bannerTitle: "Novo residencial do Grupo Alphaville em Sergipe",
            logoJson: "logoSergipe3"
        },
        {
            slug: "lancamento-teresina-2",
            bannerTitle: "Novo residencial do Grupo Alphaville em Teresina",
            logoJson: "logoTeresina2"
        }, 
    ];
    const jsonFilter = jsonEmpreendimentos.filter((item)=>item.slug == query.empreendimento);
    let jsonEmp = null;
    if (jsonFilter.length > 0) {
        jsonEmp = jsonFilter[0];
        empreendimento.banner[0].title = jsonEmp.bannerTitle;
        empreendimento.banner[0].logo = jsonEmp.logoJson;
    }
    return {
        homeContent: empreendimento,
        showAlphaMenu: true,
        location: {},
        empreendimentosjson: {}
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeaserAgradecimento);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,1270,1664,1890,1790,5176,1659,4756,5129,2750,3817], () => (__webpack_exec__(6720)));
module.exports = __webpack_exports__;

})();