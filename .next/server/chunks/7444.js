exports.id = 7444;
exports.ids = [7444];
exports.modules = {

/***/ 6967:
/***/ ((module) => {

// Exports
module.exports = {
	"areaTeaserCarrosselCadaSorriso": "teaser-carrossel-cada-sorriso_areaTeaserCarrosselCadaSorriso__Dbia7",
	"container": "teaser-carrossel-cada-sorriso_container__LNnBU",
	"areaTitleTeaserCarrosselCadaSorriso": "teaser-carrossel-cada-sorriso_areaTitleTeaserCarrosselCadaSorriso__SPZ_e",
	"title": "teaser-carrossel-cada-sorriso_title__gLu_6",
	"description": "teaser-carrossel-cada-sorriso_description__eNulq"
};


/***/ }),

/***/ 7444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TeaserCarrosselCadaSorriso)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1790);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _teaserCarrosselBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6696);
/* harmony import */ var _teaser_carrossel_cada_sorriso_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6967);
/* harmony import */ var _teaser_carrossel_cada_sorriso_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_teaser_carrossel_cada_sorriso_module_scss__WEBPACK_IMPORTED_MODULE_5__);






function TeaserCarrosselCadaSorriso({ homeContent , colors , isMobile , isTeaser ,  }) {
    const colorTitle = {
        color: colors.colorFlat
    };
    function mappingItemImagesOfArray(homeContent) {
        const filterItens = homeContent.imagesCarrossel?.filter((item)=>{
            if (!isTeaser) {
                if (item.tipo == "secundario") {
                    return item;
                }
                if (item.tipo == "principal") {
                    return item;
                }
            } else {
                if (item.tipo == "principal") {
                    return item;
                }
            }
        });
        const mapArrayImages = filterItens.map((item)=>_Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_4__/* .ENDPOINT_BASE */ .GU + "/" + item.image);
        return mapArrayImages;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (_teaser_carrossel_cada_sorriso_module_scss__WEBPACK_IMPORTED_MODULE_5___default().areaTeaserCarrosselCadaSorriso),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Container, {
            className: (_teaser_carrossel_cada_sorriso_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                        xs: 12,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_teaser_carrossel_cada_sorriso_module_scss__WEBPACK_IMPORTED_MODULE_5___default().areaTitleTeaserCarrosselCadaSorriso),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: colorTitle,
                                    className: (_teaser_carrossel_cada_sorriso_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                                    children: homeContent.titleCadaSorriso
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: (_teaser_carrossel_cada_sorriso_module_scss__WEBPACK_IMPORTED_MODULE_5___default().description),
                                    dangerouslySetInnerHTML: {
                                        __html: homeContent.GaleriaImagemDescription
                                    }
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_teaser_carrossel_cada_sorriso_module_scss__WEBPACK_IMPORTED_MODULE_5___default().teaserCarrosselCadaSorriso),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_teaserCarrosselBase__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        colors: colors,
                        isMobile: isMobile,
                        imagesCadaSorriso: mappingItemImagesOfArray(homeContent)
                    })
                })
            ]
        })
    });
};


/***/ })

};
;