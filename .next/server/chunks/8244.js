exports.id = 8244;
exports.ids = [8244];
exports.modules = {

/***/ 7734:
/***/ ((module) => {

// Exports
module.exports = {
	"areaTeaserMap": "teaser-map_areaTeaserMap__LBKvT",
	"areaTitle": "teaser-map_areaTitle__THKog",
	"title": "teaser-map_title__aR6Ob",
	"containerConteudoMap": "teaser-map_containerConteudoMap__su5np",
	"boxConteudoMap": "teaser-map_boxConteudoMap__zb_66",
	"conteudoMap": "teaser-map_conteudoMap__DYfsv",
	"dadosEndereco": "teaser-map_dadosEndereco___O9f9",
	"map": "teaser-map_map__fk_dl",
	"enderecoStand": "teaser-map_enderecoStand__Ct_Rw",
	"horarioFuncionamento": "teaser-map_horarioFuncionamento__ukazM"
};


/***/ }),

/***/ 8244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TeaserMap)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_google_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2070);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _teaser_map_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7734);
/* harmony import */ var _teaser_map_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_teaser_map_module_scss__WEBPACK_IMPORTED_MODULE_4__);





function TeaserMap({ colors , standVendas , isMobile , id  }) {
    const colorTitle = {
        color: colors.colorFlat
    };
    const defaultProps = {
        center: {
            lat: standVendas.stdLatitude,
            lng: standVendas.stdLongitude
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (_teaser_map_module_scss__WEBPACK_IMPORTED_MODULE_4___default().areaTeaserMap),
        id: id,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Container, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                    className: (_teaser_map_module_scss__WEBPACK_IMPORTED_MODULE_4___default().areaTitle),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        style: colorTitle,
                        className: (_teaser_map_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
                        dangerouslySetInnerHTML: {
                            __html: standVendas.title
                        }
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_teaser_map_module_scss__WEBPACK_IMPORTED_MODULE_4___default().containerConteudoMap),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_teaser_map_module_scss__WEBPACK_IMPORTED_MODULE_4___default().boxConteudoMap),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_teaser_map_module_scss__WEBPACK_IMPORTED_MODULE_4___default().conteudoMap),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_teaser_map_module_scss__WEBPACK_IMPORTED_MODULE_4___default().map),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_google_maps_google_map__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        isMobile: isMobile,
                                        objLatLng: defaultProps.center
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_teaser_map_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dadosEndereco),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                            className: (_teaser_map_module_scss__WEBPACK_IMPORTED_MODULE_4___default().enderecoStand),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    className: (_teaser_map_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
                                                    style: colorTitle,
                                                    children: "Endere\xe7o do Stand:"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: standVendas.endereco
                                                    }
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                            className: (_teaser_map_module_scss__WEBPACK_IMPORTED_MODULE_4___default().enderecoStand),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    className: (_teaser_map_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
                                                    style: colorTitle,
                                                    children: "Hor\xe1rio de Funcionamento:"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: standVendas.hfuncionamento
                                                    }
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}


/***/ })

};
;