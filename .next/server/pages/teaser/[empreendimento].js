"use strict";
(() => {
var exports = {};
exports.id = 9948;
exports.ids = [9948];
exports.modules = {

/***/ 8273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _empreendimento_)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./_share/components/alphaMenu/alphaMenu.jsx + 4 modules
var alphaMenu = __webpack_require__(3899);
// EXTERNAL MODULE: ./_share/components/banner/banner.component.jsx
var banner_component = __webpack_require__(5129);
// EXTERNAL MODULE: ./_share/service/enterprises.js + 1 modules
var enterprises = __webpack_require__(2750);
// EXTERNAL MODULE: ./_share/components/formSaibaMais/index.jsx
var formSaibaMais = __webpack_require__(3331);
// EXTERNAL MODULE: ./_share/layouts/layout-main.jsx + 4 modules
var layout_main = __webpack_require__(4756);
;// CONCATENATED MODULE: external "fs/promises"
const promises_namespaceObject = require("fs/promises");
var promises_default = /*#__PURE__*/__webpack_require__.n(promises_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./_share/service/redirects.service.js


class RedirectService {
    UploadJsonFile = async ()=>{
        try {
            const filePath = external_path_default().join(process.cwd(), "runserver/redirects.json");
            const jsonData = await promises_default().readFile(filePath);
            const objectData = JSON.parse(jsonData);
            return objectData;
        } catch (error) {
            console.log("error:", error);
        }
    };
    TeaserRedirectObject = async (param)=>{
        const objectData = await this.UploadJsonFile();
        let arrayobjRedirect = {};
        objectData.redirects.map((item)=>{
            if (item.from == param.asPath) {
                arrayobjRedirect = item;
            }
        });
        if (arrayobjRedirect) {
            return {
                ...arrayobjRedirect,
                isTeaserRedirect: true
            };
        } else {
            return {};
        }
    };
}
/* harmony default export */ const redirects_service = (RedirectService);

// EXTERNAL MODULE: ./_share/components/teaserCarrosselCadaSorriso/teaser-carrossel-cada-sorriso.jsx
var teaser_carrossel_cada_sorriso = __webpack_require__(7444);
// EXTERNAL MODULE: ./_share/components/teaserCarrosselSimples/teaser-carrossel-simples.jsx + 31 modules
var teaser_carrossel_simples = __webpack_require__(5298);
// EXTERNAL MODULE: ./_share/components/teaserMap/teaser-map.jsx + 1 modules
var teaser_map = __webpack_require__(2434);
// EXTERNAL MODULE: ./_share/components/teaserSuaSeguranca/teaser-sua-seguranca.jsx
var teaser_sua_seguranca = __webpack_require__(9123);
// EXTERNAL MODULE: ./_share/components/teaserVideo/teaser-video.jsx + 1 modules
var teaser_video = __webpack_require__(4079);
// EXTERNAL MODULE: ./_share/service/util.js
var service_util = __webpack_require__(1659);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/teaser/[empreendimento]/index.jsx

















const TeaserFloatModal = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "teaser\\[empreendimento]\\index.jsx -> " + "../../../_share/components/teaserFloatModal/teaser-float-modal"
        ]
    },
    ssr: false
});
const TeaserPage = ({ homeContent , showAlphaMenu , slugDomPedro , location , empreendimentosjson , displayColor ,  })=>{
    const router = (0,router_.useRouter)();
    const { 0: isMobile , 1: setisMobile  } = (0,external_react_.useState)(false);
    const { id , title , banner , metaProps  } = homeContent;
    (0,external_react_.useEffect)(()=>{
        window.outerWidth <= 768 ? setisMobile(true) : setisMobile(false);
    // console.log(window.outerWidth);
    }, []);
    const util = new service_util/* default */.Z();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout_main/* default */.Z, {
        metaProps: util.changeTitleMetaProps(metaProps, title),
        homeContent: homeContent,
        url: "/",
        active: "teaser",
        location: location,
        cssClass: displayColor + " teaserLayoutPage",
        outContainer: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(banner_component/* default */.Z, {
                    bannerList: banner,
                    upBner: true,
                    showButton: false,
                    showTexts: false,
                    isTeaser: true,
                    homeContent: homeContent,
                    title: homeContent.title,
                    colors: homeContent.displayColors
                }),
                !isMobile && /*#__PURE__*/ jsx_runtime_.jsx(TeaserFloatModal, {
                    isTeaser: true,
                    homeContent: homeContent,
                    colors: homeContent.displayColors
                })
            ]
        }),
        outBottomContainer: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "teaserLayoutPage",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        backgroundColor: "#F7F5F5",
                        position: "relative"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(teaser_carrossel_cada_sorriso/* default */.Z, {
                            isTeaser: true,
                            homeContent: homeContent,
                            isMobile: isMobile,
                            colors: homeContent.displayColors
                        }),
                        homeContent.slug != "casas-alphaville-d-pedro-0" || homeContent.slug != "casas-alphaville-d-pedro-1" && /*#__PURE__*/ jsx_runtime_.jsx(teaser_sua_seguranca/* default */.Z, {
                            homeContent: homeContent,
                            isMobile: isMobile,
                            colors: homeContent.displayColors
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(formSaibaMais/* default */.Z, {
                            isTeaser: true,
                            colors: homeContent.displayColors,
                            homeContent: homeContent
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: homeContent.statusStand == 1 ? /*#__PURE__*/ jsx_runtime_.jsx(teaser_map/* default */.Z, {
                        isMobile: isMobile,
                        id: "nosso-stand",
                        colors: homeContent.displayColors,
                        standVendas: homeContent.standVendas
                    }) : null
                })
            ]
        }),
        children: [
            showAlphaMenu ? /*#__PURE__*/ jsx_runtime_.jsx(alphaMenu/* default */.Z, {
                isInternal: false,
                isTeaser: true,
                colors: homeContent.displayColors,
                homeContent: homeContent,
                isMobile: true,
                empreendimentosjson: empreendimentosjson,
                statusStand: homeContent.statusStand,
                linkStatus: homeContent.linkStandAtivo
            }) : "",
            /*#__PURE__*/ jsx_runtime_.jsx(teaser_video/* default */.Z, {
                isTeaser: true,
                homeContent: homeContent,
                colors: homeContent.displayColors,
                isMobile: isMobile
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(teaser_carrossel_simples/* default */.Z, {
                homeContent: homeContent,
                colors: homeContent.displayColors,
                isMobile: isMobile
            })
        ]
    });
};
TeaserPage.getInitialProps = async (ctx)=>{
    const { req , res , query  } = ctx;
    // console.log('****************  query: ', query);
    let empreendimento = {};
    try {
        const enterpriseService = new enterprises/* default */.Z();
        empreendimento = await enterpriseService.getEnterpriseBySlugTitle(query.empreendimento, true);
        if (empreendimento.statusObra.id != "4") {
            throw new Exception();
        }
    } catch (error1) {
        try {
            let objRedirect = null;
            var i = 0;
            while(i <= 3){
                const redirect = new redirects_service();
                objRedirect = await redirect.TeaserRedirectObject(ctx);
                if (objRedirect != {}) {
                    i = 4;
                }
                i++;
            }
            if (objRedirect && objRedirect?.isTeaserRedirect) {
                res.writeHead(301, {
                    Location: objRedirect?.to
                });
                res.end();
            } else {
                throw new Exception();
            }
            return {
                props: {}
            };
        } catch (error) {
            res.writeHead(301, {
                Location: "/404"
            });
            res.end();
        }
    }
    return {
        homeContent: empreendimento,
        showAlphaMenu: true,
        location: {},
        empreendimentosjson: {}
    };
};
/* harmony default export */ const _empreendimento_ = (TeaserPage);


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
var __webpack_exports__ = __webpack_require__.X(0, [2952,1270,1664,1890,5152,1790,5176,1659,4756,5129,3899,2750,3936], () => (__webpack_exec__(8273)));
module.exports = __webpack_exports__;

})();