"use strict";
(() => {
var exports = {};
exports.id = 437;
exports.ids = [437];
exports.modules = {

/***/ 1365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelHorizontal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);



// import './labtest.scss';
class PanelHorizontal extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props){
        super(props);
        this.state = {
            visible: false,
            open: false,
            searchValue: "",
            autoCompleteList: [],
            autoCompleteOutherStates: [],
            isMobile: props.isMobile ? props.isMobile : false,
            classPanel: "hide"
        };
    }
    searchGoTo = (e)=>{
        if (e.which === 13 || e.type == "click") {
            if (this.state.searchValue.length > 1) {
                const href = "/busca/" + this.state.searchValue;
                Router.push(href);
            }
            this.setState({
                open: false,
                visible: !this.state.visible,
                classPanel: "show"
            });
        }
    };
    render() {
        const classesNames = [
            "panelHorizontal",
            "col-12",
            "np",
            "busca-menu"
        ];
        if (this.state.visible) {
            classesNames.push("slideIn");
        } else {
            classesNames.push("slideOut");
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-1 hidden-md-down margin-desk-search np",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "area-search-icon",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: "btn-search",
                            onClick: ()=>this.setState({
                                    visible: !this.state.visible,
                                    classPanel: "show"
                                }),
                            onMouseOver: ()=>this.setState({
                                    classPanel: "show"
                                }),
                            onMouseOut: ()=>this.setState({
                                    classPanel: "hide"
                                }),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "icon-search"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    id: "search-panel",
                    className: this.state.classPanel,
                    onMouseOver: ()=>this.setState({
                            classPanel: "show"
                        }),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classesNames.join(" "),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "area-button-back",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: this.searchGoTo,
                                    onKeyPress: this.searchGoTo,
                                    className: "navbar-toggler navbar-toggler-left",
                                    type: "button",
                                    "aria-expanded": "true",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "navbar-toggler-icon"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "area-input-busca float-right",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        value: this.state.searchValue,
                                        type: "text",
                                        name: "busca",
                                        placeholder: "digite o nome do empreendimento ou estado que deseja",
                                        required: true,
                                        onChange: this.autoComplete,
                                        onKeyPress: this.searchGoTo
                                    }),
                                    this.state.autoCompleteList.length > 0 && this.state.searchValue ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "container-fluid col-xs-12 result-busca",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "termo-busca last",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: "Resultados em outros estados:"
                                                })
                                            })
                                        })
                                    }) : ""
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    }
}


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1937:
/***/ ((module) => {

module.exports = require("react-bootstrap/Button");

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
var __webpack_exports__ = (__webpack_exec__(1365));
module.exports = __webpack_exports__;

})();