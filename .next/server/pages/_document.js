"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 3596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyDocument)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@babel/polyfill"
const polyfill_namespaceObject = require("@babel/polyfill");
;// CONCATENATED MODULE: external "react-app-polyfill/ie11"
const ie11_namespaceObject = require("react-app-polyfill/ie11");
;// CONCATENATED MODULE: external "react-app-polyfill/stable"
const stable_namespaceObject = require("react-app-polyfill/stable");
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(6859);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
;// CONCATENATED MODULE: ./pages/_document.js






//import backgroundSync from '../_share/service/backgroundSync';
class MyDocument extends next_document["default"] {
    // async componentDidMount(){
    //   backgroundSync.syncRoutes();
    // }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Html, {
            lang: "pt-br",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Head, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                            async: true,
                            src: "https://www.googletagmanager.com/gtag/js?id=UA-27437785-3"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                            id: "googletagmanager",
                            strategy: "afterInteractive",
                            children: `
                 (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                 new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0]
                 ,j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                 })(window,document,'script','dataLayer','GTM-NL67DPR');
            `
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                            id: "cookie-consent",
                            strategy: "afterInteractive",
                            children: `
              (function () {
                var s = document.createElement('script');
                s.src = 'https://cdn-prod.securiti.ai/consent/cookie-consent-sdk.js';
                s.setAttribute('data-tenant-uuid', '08bc6a4f-262d-41cf-a888-f7a13846ae79');
                s.setAttribute('data-domain-uuid', '3558c130-f4d7-40bd-a2fe-b6b20b2adb85');
                s.setAttribute('data-backend-url', 'https://app.securiti.ai');
                s.defer = true;
                var parent_node = document.head || document.body;
                parent_node.appendChild(s);
                s.addEventListener('load', function() { window.initCmp(); });
              })()
            `
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                            type: "text/javascript",
                            src: "https://cdn-prod.securiti.ai/consent/auto_blocking/08bc6a4f-262d-41cf-a888-f7a13846ae79/3558c130-f4d7-40bd-a2fe-b6b20b2adb85.js",
                            strategy: "beforeInteractive"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "stylesheet",
                            type: "text/css",
                            href: "https://cdn-prod.securiti.ai/consent/cookie-consent.css"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                            async: true,
                            src: "https://cdn.pn.vg/sites/df57351d-5a14-497d-b564-de6f407344d6.js",
                            strategy: "beforeInteractive"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("noscript", {
                            dangerouslySetInnerHTML: {
                                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NL67DPR" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.Main, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.NextScript, {})
                    ]
                })
            ]
        });
    }
}


/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [2952,1803], () => (__webpack_exec__(3596)));
module.exports = __webpack_exports__;

})();