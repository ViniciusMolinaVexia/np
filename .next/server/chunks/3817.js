exports.id = 3817;
exports.ids = [3817];
exports.modules = {

/***/ 8362:
/***/ ((module) => {

// Exports
module.exports = {
	"backButtonArea": "back-button_backButtonArea__HSq9b",
	"jardim": "back-button_jardim__C2q1n",
	"saibaMais": "back-button_saibaMais__1IFxZ",
	"terras": "back-button_terras__BrxEF",
	"alphaville": "back-button_alphaville__y6MUD"
};


/***/ }),

/***/ 5707:
/***/ ((module) => {

// Exports
module.exports = {
	"areaTeaserVideoJardimAlpha": "teaser-agradecimento_areaTeaserVideoJardimAlpha__iZAlC",
	"areaTeaserVideo": "teaser-agradecimento_areaTeaserVideo__tYXpS",
	"container": "teaser-agradecimento_container__Xi5_t",
	"areaTitleTeaserVideo": "teaser-agradecimento_areaTitleTeaserVideo__N8R1X",
	"title": "teaser-agradecimento_title__WBUcd",
	"description": "teaser-agradecimento_description__u24Bw",
	"teaserVideoPlayerContainer": "teaser-agradecimento_teaserVideoPlayerContainer__rNow9",
	"btnTeaserVideo": "teaser-agradecimento_btnTeaserVideo__D86OW"
};


/***/ }),

/***/ 4066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LinkCustom_LinkCustom_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7509);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _back_button_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8362);
/* harmony import */ var _back_button_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_back_button_module_scss__WEBPACK_IMPORTED_MODULE_4__);





function BackButton({ link , colors  }) {
    function setColorNextAndPrev(displayColor, style) {
        let colorType = "";
        if (displayColor === "logoJardim") {
            colorType = style.jardim;
        } else if (displayColor === "logoTerras") {
            colorType = style.terras;
        } else {
            colorType = style.alphaville;
        }
        return colorType;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LinkCustom_LinkCustom_component__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_back_button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().backButtonArea), setColorNextAndPrev(colors.displayColor, (_back_button_module_scss__WEBPACK_IMPORTED_MODULE_4___default())), (_back_button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().saibaMais)),
        text: "VOLTAR A NAVEGAR",
        arrayLink: [
            link
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackButton);


/***/ }),

/***/ 3817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _backButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4066);
/* harmony import */ var _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1790);
/* harmony import */ var _teaserAgradecimento_teaser_agradecimento_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5707);
/* harmony import */ var _teaserAgradecimento_teaser_agradecimento_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_teaserAgradecimento_teaser_agradecimento_module_scss__WEBPACK_IMPORTED_MODULE_5__);






function TeaserAgradecimento({ homeContent , colors , success , showButton , link ,  }) {
    const colorTitle = {
        color: colors.colorFlat
    };
    const { 0: NameFormulario , 1: setNameFormulario  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: AgradecimentoMessage , 1: setAgradecimentoMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: Slug , 1: setSlug  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const formContent = JSON.parse(sessionStorage.getItem(_Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_4__/* .FORM_LP_CONTENT */ .zg));
        if (formContent && formContent.Name) {
            const { Name , MessageAgradecimento , Slug  } = formContent;
            setNameFormulario(Name);
            setAgradecimentoMessage(MessageAgradecimento);
            setSlug(Slug);
        }
    }, [
        NameFormulario,
        AgradecimentoMessage,
        Slug
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (_teaserAgradecimento_teaser_agradecimento_module_scss__WEBPACK_IMPORTED_MODULE_5___default().areaTeaserVideoJardimAlpha),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_teaserAgradecimento_teaser_agradecimento_module_scss__WEBPACK_IMPORTED_MODULE_5___default().areaTeaserVideo),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Container, {
                    className: (_teaserAgradecimento_teaser_agradecimento_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                            xs: 12,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_teaserAgradecimento_teaser_agradecimento_module_scss__WEBPACK_IMPORTED_MODULE_5___default().areaTitleTeaserVideo),
                                children: [
                                    success ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            Slug != "casas-alphaville-d-pedro-0" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                style: colorTitle,
                                                className: (_teaserAgradecimento_teaser_agradecimento_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                                                children: `${NameFormulario}, agradecemos o seu interesse pelo residencial da maior urbanizadora do Brasil.`
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                style: colorTitle,
                                                className: (_teaserAgradecimento_teaser_agradecimento_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                                                children: `${NameFormulario}, agradecemos o seu interesse.`
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                style: colorTitle,
                                                className: (_teaserAgradecimento_teaser_agradecimento_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                                                children: AgradecimentoMessage
                                            })
                                        ]
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        style: colorTitle,
                                        className: (_teaserAgradecimento_teaser_agradecimento_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                                        children: "Erro ao enviar contato."
                                    }),
                                    showButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_backButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        link: link,
                                        colors: colors
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeaserAgradecimento);


/***/ })

};
;