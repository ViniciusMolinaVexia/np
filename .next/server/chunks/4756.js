"use strict";
exports.id = 4756;
exports.ids = [4756];
exports.modules = {

/***/ 7509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LinkCustom)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1790);
/* harmony import */ var _service_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1659);





class LinkCustom extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props){
        super(props);
        this.state = {
            externalLink: false,
            arrayLink: []
        };
    }
    async componentDidMount() {
        let link = await this.props.link;
        if (link) {
            link = link && link.startsWith("/") ? link.substr(1) : link;
            link = link && link.endsWith("/") ? link.substr(0, link.length - 1) : link;
        }
        let arrayLink = await this.props.arrayLink;
        arrayLink = arrayLink && arrayLink.length > 0 ? arrayLink : link.split("/");
        const target = this.props.target ? this.props.target : "_self";
        const externalLink = this.props.externalLink ? this.props.externalLink : false;
        let linkurl = arrayLink.join("/");
        if (_Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_4__/* .URL_DOMAIN.length */ .V3.length > 0 && !externalLink) {
            // regra para quando for / ou /home ficar em www-alphaville... e nao ww2-alphaville...
            const joinLink = arrayLink.join("/");
            linkurl = joinLink == "" || joinLink == "/" ? joinLink : _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_4__/* .URL_DOMAIN */ .V3 + "/" + arrayLink.join("/");
        }
        linkurl = linkurl.replace("/?", "?");
        this.setState({
            link: linkurl,
            target,
            externalLink
        });
    }
    dynamicAttributes(attribute, value) {
        var opts = {};
        if (typeof value !== "undefined" && value !== null) {
            opts[attribute] = value;
            return opts;
        }
        return false;
    }
    render() {
        const ariaLabel = this.props.ariaLabel || this.props.text || new _service_util__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z().getLabelFromChildren(this.props.children);
        if (_Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_4__/* .URL_DOMAIN.length */ .V3.length > 0 || this.state.externalLink) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: this.state.link,
                target: this.state.target,
                className: this.props.className,
                rel: "noreferrer",
                "aria-label": ariaLabel,
                ...this.dynamicAttributes("data-content", this.props.dataContent),
                children: this.props.children ? this.props.children : this.props.text
            });
        } else {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/" + this.state.link,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: this.props.className,
                    target: this.state.target,
                    ariaLabel: ariaLabel,
                    ...this.dynamicAttributes("data-content", this.props.dataContent),
                    children: this.props.children ? this.props.children : this.props.text
                })
            });
        }
    }
}


/***/ }),

/***/ 6635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ navMenu)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-bootstrap/Col"
var Col_ = __webpack_require__(7511);
var Col_default = /*#__PURE__*/__webpack_require__.n(Col_);
// EXTERNAL MODULE: ./_share/components/LinkCustom/LinkCustom.component.jsx
var LinkCustom_component = __webpack_require__(7509);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./Envirioment/Envirioment.js
var Envirioment = __webpack_require__(1790);
;// CONCATENATED MODULE: ./_share/components/navMenu/autoComplete.jsx



class AutoComplete extends external_react_.Component {
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: this.props.autocompletelist.map((val, idx)=>{
                let urlLink = "/";
                if (val.empreendimento.status_obra === "4") {
                    urlLink = "/teaser/" + val.empreendimento.slug;
                } else if (val.empreendimento.status_obra === "5") {
                    urlLink = "/residencia/" + val.empreendimento.slug;
                } else {
                    switch(val.empreendimento.type_id){
                        case "1":
                            urlLink = "/residencial/" + val.empreendimento.slug;
                            break;
                        case "2":
                            urlLink = "/cidade-alpha/" + val.empreendimento.slug;
                            break;
                        case "3":
                            urlLink = "/comercial/" + val.empreendimento.slug;
                            break;
                    }
                    if (val.empreendimento.status_obra === "1") {
                        urlLink = "/lancamento/" + val.empreendimento.slug;
                    }
                }
                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: val.empreendimento.status_obra === "4" || val.empreendimento.status_obra === "5" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: urlLink,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: val.type_lote.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: val.empreendimento.name
                            })
                        ]
                    }) : val.empreendimento.type_id == 1 || val.empreendimento.type_id == 2 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: urlLink,
                        children: [
                            val.type_lote.id == 4 ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Cidade Alpha"
                            }) : "",
                            val.type_lote.id != 4 ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: val.type_lote.title
                            }) : "",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: val.empreendimento.second_name
                            })
                        ]
                    }) : val.empreendimento.type_id == 3 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: urlLink,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: val.type.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: val.empreendimento.second_name
                            })
                        ]
                    }) : ""
                }, idx);
            })
        });
    }
}

// EXTERNAL MODULE: ./_share/service/storage.js + 3 modules
var service_storage = __webpack_require__(6008);
// EXTERNAL MODULE: ./_share/service/util.js
var util = __webpack_require__(1659);
;// CONCATENATED MODULE: ./_share/components/navMenu/searchMenu.jsx





// import Search from '../../service/search';


class SearchMenu extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            visible: false,
            open: false,
            searchValue: "",
            locationTxt: "S\xe3o Paulo",
            autoCompleteList: [],
            autoCompleteOutherStates: [],
            isMobile: props.isMobile ? props.isMobile : false,
            classPanel: [
                "hide"
            ],
            classCookie: ""
        };
        this.buscarEmpreendimento = /*#__PURE__*/ external_react_default().createRef();
    }
    async componentDidMount() {
        if (this.state.isMobile) {
            const locationTxt = await new service_storage/* default */.Z().getTxtLocation();
            const cookie = new util/* default */.Z().getCookie(Envirioment/* COOKIES_POLICY */.BT);
            const classCookie = cookie ? "" : " cookies";
            this.setState({
                locationTxt,
                classCookie
            });
            this.autoComplete();
        }
    }
    autoComplete = async (e)=>{
        if (e) {
            this.setState({
                searchValue: e.target.value
            });
            if (e.which === 13) {
                console.log("press ENTER");
            }
        }
        if (!this.state.searchValue) {
            this.setState({
                classPanel: [
                    "show"
                ]
            });
        }
        const generalResult = await new service_storage/* default */.Z().getGeneralSearch(1, 1);
        const uf = await new service_storage/* default */.Z().getLocationUf();
        const txtSearch = this.state.searchValue.toLowerCase();
        if (generalResult && generalResult.data.search.length > 0) {
            const li = generalResult.data.search.filter(function(value, index, arr) {
                return JSON.stringify(value).toLowerCase().indexOf(txtSearch.toLowerCase()) > -1;
            });
            // let liOutherStates = [];
            // if (generalResult && generalResult.data.search.length > 0) {
            //   liOutherStates = generalResult.data.search.filter(function(value, index, arr) {
            //     return (
            //       uf != value.uf.uf.toLowerCase() &&
            //       JSON.stringify(value)
            //         .toLowerCase()
            //         .indexOf(txtSearch.toLowerCase()) > -1
            //     );
            //   });
            // }
            this.setState({
                autoCompleteList: li,
                classPanel: generalResult.data.search.length > 0 && this.state.searchValue ? [
                    "show",
                    "autocomplete"
                ] : [
                    "show"
                ]
            });
        } else {
            this.setState({
                classPanel: [
                    "show"
                ]
            });
        }
    };
    btntoggle = ()=>{
        this.setState({
            open: !this.state.open
        });
        setTimeout(()=>{
            this.buscarEmpreendimento.current.focus();
        }, 500);
    };
    searchGoTo = (e)=>{
        if (e.which === 13 || e.type == "click") {
            if (this.state.searchValue.length > 1) {
                const hrefArray = [
                    "busca",
                    this.state.searchValue
                ];
                new util/* default */.Z().goToUrl(hrefArray, "_self", false, e);
            }
            this.setState({
                open: false
            });
        }
    };
    render() {
        if (this.state.isMobile) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "area-encontre",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        value: this.state.searchValue,
                                        name: "busca",
                                        className: "busca-menu-mobile",
                                        placeholder: "Encontre seu empreendimento",
                                        onChange: this.autoComplete,
                                        onKeyPress: this.searchGoTo
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "area-search-icon",
                                    onClick: this.searchGoTo,
                                    onKeyPress: this.searchGoTo,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "icon-search"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        xs: 12,
                        className: "container-fluid result-busca" + this.state.classCookie,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            children: this.state.autoCompleteList.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "termo-busca last",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Resultados:"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(AutoComplete, {
                                        autocompletelist: this.state.autoCompleteList
                                    })
                                ]
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "termo-busca",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "Nenhum resultado encontado"
                                })
                            })
                        })
                    })
                ]
            });
        } else {
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
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-1 hidden-md-down margin-desk-search np",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "area-search-icon",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                className: "btn-search",
                                onClick: (e)=>{
                                    this.setState({
                                        visible: !this.state.visible,
                                        classPanel: [
                                            "show"
                                        ]
                                    });
                                    this.autoComplete(null);
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "icon-search"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        id: "search-panel",
                        className: this.state.classPanel.join(" "),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: classesNames.join(" "),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "area-button-back",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        onClick: ()=>this.setState({
                                                open: false,
                                                visible: !this.state.visible,
                                                classPanel: [
                                                    "hide"
                                                ]
                                            }),
                                        onKeyPress: this.searchGoTo,
                                        className: "navbar-toggler navbar-toggler-left",
                                        type: "button",
                                        "aria-expanded": "true",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "navbar-toggler-icon"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "area-input-busca float-right",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            value: this.state.searchValue,
                                            type: "text",
                                            name: "busca",
                                            placeholder: "digite o nome do empreendimento ou estado que deseja",
                                            required: true,
                                            onChange: this.autoComplete,
                                            onKeyPress: this.searchGoTo,
                                            ref: this.buscarEmpreendimento
                                        }),
                                        (this.state.autoCompleteList.length > 0 || this.state.autoCompleteOutherStates.length > 0) && this.state.searchValue ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "container-fluid col-xs-12 result-busca",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(AutoComplete, {
                                                        autocompletelist: this.state.autoCompleteList
                                                    }),
                                                    this.state.autoCompleteOutherStates.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "termo-busca last",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: "Resultados em outros estados:"
                                                        })
                                                    }) : "",
                                                    /*#__PURE__*/ jsx_runtime_.jsx(AutoComplete, {
                                                        autocompletelist: this.state.autoCompleteOutherStates
                                                    })
                                                ]
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
}
/* harmony default export */ const searchMenu = (SearchMenu);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react-bootstrap/Row"
var Row_ = __webpack_require__(8907);
var Row_default = /*#__PURE__*/__webpack_require__.n(Row_);
// EXTERNAL MODULE: external "react-bootstrap/Modal"
var Modal_ = __webpack_require__(9306);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
;// CONCATENATED MODULE: ./_share/components/navMenu/map.jsx



// import './map-style.scss';
const SvgMap = (props)=>{
    const { 0: currentLocal , 1: setCurrentLocal  } = (0,external_react_.useState)(1);
    const { 0: svgProps , 1: setSvgProps  } = (0,external_react_.useState)({
        width: props.width,
        height: props.height,
        id: props.id,
        state: props.state
    });
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            const storage = new service_storage/* default */.Z();
            const localId = await storage.getLocalId(false);
            if (localId) setCurrentLocal(localId);
        })();
    }, []);
    const clickGo = (e, localId)=>{
        setCurrentLocal(localId);
        props.settextbtn(e, localId);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 450 460",
        ...svgProps,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#tocantins",
                onClick: (e)=>clickGo(e, 27),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: currentLocal === "27" ? "active" : "",
                        d: "M289.558 235.641c16.104.575 44.973-31.647 44.835-45.259-.136-13.612-17.227-58.446-22.349-66.088-5.122-7.628-37.905 2.506-37.905 2.506s-39.287 106.895 15.419 108.841z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(287.014 188.32)",
                        fill: "#FFF",
                        children: "TO"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#bahia",
                onClick: (e)=>clickGo(e, 6),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "6" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M313.276 197.775c2.084-2.739 3.506-7.012 6.464-8.764 1.641-.973 3.232-4.684 4.271-5.163 2.304-1.014 12.161-25.143 20.706-22.513 1.095.342 29.881 3.478 32.153 7.532 2.246-.506 17.582-8.804 25.829-4.999 9.172 4.246 11.225 20.679 11.2 20.843.107.328-.823 5.765-.985 5.929-1.15 1-5.258-.807-4.22 2.138 1.317 3.751 5.094 10.583 9.97 6.613-3.669 6.574-6.846 16.022-13.966 17.747-5.808 1.411-4.605 13.421-5.178 18.037-.465 3.75.192 8.448 1.014 12.117 1.148 4.959-.821 8.6-1.808 13.42-.822 4.162-.219 8.299-.987 12.297-.271 1.286-4.407 5.723-5.559 7.148-1.616-1.426-63.952-37.248-73.1-36.265 1.149-3.738 2.438-9.559-.741-12.723-8.625-8.572-.135-19.335-.162-19.432-.546-1.725-5.396-6.079-.026-7.175-3.175.959-1.944-4.027.875-3.012-2.3-.817-4.982-1.023-5.75-3.775z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(359.732 210.122)",
                        fill: "#FFF",
                        children: "BA"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#sergipe",
                onClick: (e)=>clickGo(e, 26),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "26" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M408.561 191.735c.521-1.505 2.465-.725 3.533-.794 2.273-.164.494-2.738 1.095-3.778 2.026-3.793-2.738-5.999-1.998-10.408 4.024 1.931 9.448 3.397 12.408 6.89 1.343 1.533 5.504 2.656 5.832 4.847-6.822.384-6.901 8.819-11.942 11.572-3.944 2.148-10.434-6.343-8.928-8.329z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "XXXXXXXXXXXXX" ? "active" : "",
                        className: "circle",
                        d: "M417.324 182.854c6.214 0 11.266 5.035 11.266 11.262 0 6.208-5.052 11.261-11.266 11.261-6.238 0-11.258-5.053-11.258-11.261a11.24 11.24 0 0111.258-11.262z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(408.912 198.669)",
                        fill: "#FFF",
                        children: "SE"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#pernambuco",
                onClick: (e)=>clickGo(e, 18),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "18" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M373.011 167.238c2.709-.795 6.218-14.106 8.325-15.106 4.136-1.986 17.255-1.437 17.8 4.903-.437-.068 8.189-2.273 7.479-1.466 1.7-.711 10.518-4.723 12.599-4.82.274-.013 4.603.905 3.068 2.315-.464.439 4.219 3.698 10.789 3.45 4.66-.176 5.179-3.436 8.627-4.409 5.89-1.67 4.737 3.698 5.589 6.943-1.182 2.684-1.646 5.586-2.74 8.285-1.533 3.792-9.804 9.791-13.39 12.119-7.287 4.778-21.802-4.067-22.762-5.67-.602-.985-2.55-5.121-3.178-5.107a2.806 2.806 0 00-1.287 1.519c-.904-.013-7.256-3.533-7.502-4.655-4.769-1.151-5.425 6.108-8.957 6.19.219.108-8.244 6.681-7.506 3.314 3.591-4.643-5.724-6.477-6.954-7.805z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(401.398 165.8)",
                        fill: "#FFF",
                        children: "PE"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#alagoas",
                onClick: (e)=>clickGo(e, 3),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "3" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M413.953 169.018c3.78 3.313 9.424 5.505 12.547 5.491 3.229-.013 5.009-3.328 7.421-4.794 1.177-.712 10.297-1.93 9.174 1.042-1.807 4.848-7.122 8.585-10.024 12.789-2.792 2-3.423 7.093-6.354 1.864-3.259.424-3.722-4.424-6.957-4.477-3.668-2.261-7.998-3.769-11.201-6.342 2.056-1.945 4.192-3.232 5.394-5.573z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "XXXXXXXXXXXXX" ? "active" : "",
                        className: "circle",
                        d: "M436.423 168.763c6.236 0 11.258 5.054 11.258 11.278 0 6.207-5.02 11.259-11.258 11.259-6.241 0-11.263-5.052-11.263-11.259 0-6.225 5.022-11.278 11.263-11.278z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(429.79 183.895)",
                        fill: "#FFF",
                        children: "AL"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#riograndedonorte",
                onClick: (e)=>clickGo(e, 21),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "21" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M404.698 138.795c2.383-4.027 6.574-6.123 8.49-11.149 1.973-5.107 3.834-5.818 8.764-4.642 5.041 1.207 9.339.837 14.57 1.671 7.534 1.193 6.848 10.968 9.206 16.516-1.919 1.096-13.972.521-15.064-1.657-1.041-2.067-2.904 7.107-5.094 7.3 1.532-5.847-12.654 1.78-5.424-8.683 2.545-3.67-6.302-.808-6.711.725-3.314 5.137-6.218.275-8.737-.081z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "XXXXXXXXXXXXX" ? "active" : "",
                        className: "circle",
                        d: "M430.827 107.798a11.245 11.245 0 0111.261 11.261c0 6.224-5.02 11.261-11.261 11.261-6.209 0-11.26-5.037-11.26-11.261 0-6.222 5.051-11.261 11.26-11.261z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(422.541 123.9)",
                        fill: "#FFF",
                        children: "RN"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#ceara",
                onClick: (e)=>clickGo(e, 7),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "7" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M372.379 104.409c.437-1.368 2.961-3.627 1.043-5.025 12.106-1.328 17.581-.849 27.66 6.723 4.026 3.054 6.822 5.574 10.571 9.147 1.317 1.273 7.614 4.313 7.914 6.164-.054-.316-5.396 3.696-5.997 5.217-1.066 2.684-2.659 6.093-4.3 8.298.025-.055-6.903 3.957-3.532 4.217-4.41 3.821-1.015 8.135-.797 11.517.196 2.767-4.38 7.587-6.765 5.422-2.244-1.999-3.998-5.711-7.779-5.094-1.998.329-5.476 2.189-7.612.479-2.52-2.054 3.669-5.162-.545-7.354-6.987-3.615-1.264-15.393-6.684-20.239-3.504-3.136 1.753-7.313.109-10.749-.713-1.452-1.971-7.888-3.286-8.723.656-2.095 2.436 1.562 0 0z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(386.838 129.035)",
                        fill: "#FFF",
                        children: "CE"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#piaui",
                onClick: (e)=>clickGo(e, 19),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "19" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M320.781 185.478c2.465-5.149-7.505-20.801-7.505-20.801s47.354-65.868 54.285-66.841c.299-.042 6.243 1.768 6.463 2.219.438.863-.821 5.244-.685 6.587.275 2.629 2.879 6.587 2.328 8.684-1.15 4.736-1.863 6.134 1.369 9.901 2.794 3.245.325 10.16 2.544 14.269-1.778 4.23 4.768 3.656 3.943 7.613-.655 3.163-5.424 7.655-1.176 10.312.274 4.642-4.685 4.983-6.79 7.818-2.631 2.835-5.535 5.013-7.999 7.888-.55.671-8.821 4.096-9.998 4.082.302-.301-17.665-6.449-11.967 2.354 2.463 3.808-1.505 5.56-3.177 8.778-.633 2.164-5.836.958-7.836 3.205-6.404 7.202-7.171-10.819-13.799-6.068z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(355.127 158.105)",
                        fill: "#FFF",
                        children: "PI"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#maranhao",
                onClick: (e)=>clickGo(e, 11),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "11" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M288.845 127.827c4.108-2.726 31.195-48.985 31.386-50.395 1.235.397 6.084 7.435 7.562 5.025.493.013-.328 2.15-.547 2.396-.054-.135 2.189-2.286 2.52-2.436.521-.233 1.948 1.903 3.451-.726 5.642 1.575 1.314 14.31 9.121 11.694-1.147.384 1.452.74.848 1.905 5.095-6.587 8.488-.027 15.337 1.491 2.025.466 6.243.575 8.162.207 3.808-.823-2.082 6.847-2.082 6.887-1.369 2.986-5.041 1.713-6.818 5.683-.684 1.549-3.506 4.327-3.042 6.148.494 1.781 2.081 2.863.274 4.629.603 2.793 3.066 7.109-.385 9.12-4.601 4.383 2.304 7.52 1.316 11.598-.9 3.726-6.244 5.725-9.147 2.78-4.847-.11-6.872 3.821-10.406 6.45-2.74 2.041-8.793 2.493-10.327 5.642-1.918 3.929-3.699 8.763-5.341 12.79-1.699 4.204 6.383 18.762-4.328 15.611-.932-.273-3.396-4.725-3.396-5.738-.081-3.739-2.738-4.176-4.821-7.477.356-3.025 2.466-6.929 4.766-8.052 3.342-1.63 1.919-6.629-2.466-4.465-3.505 1.726-4.709-2.794-6.958-5.287.548.59-3.064-4.696-3.146-3.697.19-1.89 2.876-5.833 3.341-8.448.575-3.259.52-6.764-.521-10.105-.63-2.068-4.656-4.521-6.518-4.437-1.289.287-2.443 0-3.427-.878-2.27-.067-2.27 2.302-4.408 2.085z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(318.275 126.704)",
                        fill: "#FFF",
                        children: "MA"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#amapa",
                onClick: (e)=>clickGo(e, 4),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "4" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M225.198 39.089c3.274 1.165 3.985-1.315 6.572-1.74 3.616-.603 5.683 2.725 9.037 2.067 4.055-.78 7.093-8.025 7.314-11.598 4.492-3.534 5.503-11.258 9.42-14.68 6.055 4.258 6.11 15.788 7.589 22.485-.164.083 6.57 7.998 7.944 8.682 3.396 1.657 3.366 6.203.078 9.34-3.777 3.587-7.449 34.275-7.449 34.275h-46.489s.932-50.366 0-51.449c2.6-.013 4.12 1.946 5.984 2.618z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(245.902 52.61)",
                        fill: "#FFF",
                        children: "AP"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#para",
                onClick: (e)=>clickGo(e, 15),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "15" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M173.378 50.619c2.259 2.63 5.629-4.478 7.901-3.82 3.19.918 1.478-1.108 5.026-1.752 1.931.806 3.096.273 3.519-1.631.535-1.26 1.453-1.726 2.725-1.384 1.768-1.684 13.558 3.603 14.68.384.629-1.821-4.287-5.709-.302-6.997 1.643-.533 6.012.808 8.75-.068 3.986-1.288 4.876 2.684 4.382 6.066.631 3.587 13.145 5.766 12.982 7.97 3.589-1.518 5.354 12.763 7.105 14.447.357 4.26 6.304 8.585 7.07 12.544.628 3.396 7.065 3.616 8.213.095 2.578-8.133 9.696-10.022 13.475-16.651 4.603-8.038 3.725 3.752 8.955 1.067 2.11.411 2.876 3.629 4.574 4.724 3.18 2.027 7.779.974 10.572 3.013-4.192 4.382 8.188 3.752 9.231 3.875 4.682.575 8.104 2.383 11.855 3.629-.164-.069 4.792.52 5.178 1.245 2.026 3.767-4.904 19.214-6.382 21.486-1.121 1.713-2.932 4.985-3.727 6.834-.902 2.026-4.764 7.313-4.655 9.229-1.888.972-2.248 4.835-5.012 4.328-3.096 3.026-8.187 4.999-10.27 8.956 2.057.781 8.325 1.041 5.311 4.272-.821.877-1.094 5.533-1.615 6.833-.575 1.384-4.464 4.779-6.108 5.34-4.107 1.426-2.736 4.135-4.271 7.655-.933 2.054-.546 3.491 1.756 4.339-.083 2.835-.988 5.575-2.385 7.998-3.041 5.245-9.009 9.818-10.079 16.27-3.261 3.408-87.066-1.22-87.464-2.644-1.423-5.012 1.508-24.006-2.808-27.88-.19-2.082-29.893-6.299-30.714-8.081-.83-1.831 22.327-83.749 22.532-91.691zm145.761 27.045c.163-.752.601 1.096 0 0z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(232.773 122.514)",
                        fill: "#FFF",
                        children: "PA"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#roraima",
                onClick: (e)=>clickGo(e, 24),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "24" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M113.18 24.107c-.972-2.753-7.861-5.889-6.999-8.984.068-.232 13.229 6.053 12.79 2.808.398 1.329 1.219 1.889 2.439 1.685 1.889-1.301 7.148 4.204 8.216 1.889.438-.959-1.657-3.753.74-3.848 1.026.438 1.534.164 1.52-.822.835-1.752 3.575.219 4.793.083.767-1.056 10.625-3.026 9.037-5.094 1.37.438 4.574.808 4.63-1.547 4.546-2.054 1.15-4.409 2.644-6.354 2.177-2.82 9.791.809 7.327 5.738-1.972 3.93 7.121 4.027 5.724 9.366-.452 1.686-2.479 2.724-3.423 3.971-1.179 1.546-1.836 9.243-1.356 11.53 1.041 4.889 3.231 8.695 6.134 12.16 1.712 2.027 5.614 2.261 5.724 4.369.164 2.945 1.165 6.177.329 9.092-1.547 5.424-36.618 30.471-36.618 30.471s-12.517-52.736-20.335-54.063c-1.235-.14-4.973-10.875-3.316-12.45z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(136.294 42.386)",
                        fill: "#FFF",
                        children: "RR"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#amazonas",
                onClick: (e)=>clickGo(e, 5),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "5" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M10.078 136.412c1.15-4.972 4.258-10.394 8.215-13.105 4.41-3.027 7.656-5.71 13.105-6.082 2.165-.149 10.216-5.75 11.983-2.984 3.711 5.765 4.998-3.739 5.574-7.025 1.726-9.667 3.697-19.322 4.86-29.086-.342-1.356-2.013-6.231-2.833-7.163-1.453-1.616-4.287-2.122-4.768-4.544-.272-1.452-.574-7.258 1.109-8.121 3.494-1.768 6.547-.042 9.737-.89-2.561-4.053.302-4.327-5.532-5.135-3.438-.466-3.971-2.466-2.738-6.368 1.053-3.3 15.898-1 19.088-1.396-1.534.178-1.11-2.479-.042-2.616 1.274-.165 1.576 2.684 3.165.998 1.286-1.395 3.189-2.915 4.6-3.751 2.438-1.45 4.533 8.217 4.465 9.833-.041.78-.137 2.438 1.177 2.246 3.012-.466 4.219 2.849 7.273 4.231 3.778 1.713 3.929-1.355 7.023-2.068 4.301-.985.711 3.396 2.383 3.793 1.589.385 3.806-4.969 4.821-5.572.93-.533 3.725-.753 4.846-1.602 3.013-2.245 1.933-1.686 3.492-1.206 3.478 1.041 2.233-8.367 6.491-7.066 1.822-.466 3.643-2.34 5.533-2.423 1.041-.043 6.066 2.287 6.544 3.147.589 1.465.316 2.795-.793 3.986a11.794 11.794 0 013.355 5.162c.904 2.862-1.286 6.807.588 9.299-.22 6.655 4.808 7.887-.396 12.597.192-.178 6.711 7.067 7.121 8.039.971-.711 4.066.849 4.381 1.535-1.658-3.629.547-17.09 6.628-10.915 7.203 7.327 5.491-3.615 9.148-8.627 2.834-3.875 14.597-3.136 14.077 3.246-1.082 3.273 6.271 14.256 9.667 11.436 2.26 5.737 6.889 4.285 10.407 8.051 5.094 5.464 4.37 3.396 11.313 2.848-2.259 3.602-3.425 4.808-5.272 8.86-3.149 6.862-6.15 13.776-9.204 20.678-2.437 5.505-14.843 23.471-11.105 28.442 4.806 6.395 9.339 30.183 11.324 29.934-6.162-.26-48.079-10.625-51.652-8.105-1.453 1.013-53.626 10.503-55.9 10.819-6.369.875-18.09-7.272-23.719-10.136-8.601-4.381-16.61-8.981-26.088-11.05-10.282-2.259-20.635-4.793-29.878-10.011.47-2.779 8.782-3.766 6.427-12.133z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(98.14 119.06)",
                        fill: "#FFF",
                        children: "AM"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#acre",
                onClick: (e)=>clickGo(e, 2),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "2" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M3.656 148.545c12.557 7.544 27.524 8.367 41.082 13.2 12.802 8.065 27.278 12.845 40.616 19.872-2.834 1.205-7.587 4.382-9.983 6.395-2.93 2.45-1.3 2.04-4.628 1.957-2.93-.069-3.957 4.615-7.203 5.259-2.999.603-7.161-1.958-10.995-1.697-1.905.136-11.969-.056-12.64.603.313-3.642-.385-7.299-.165-10.941.096-1.439 1.998-6.533 1.245-7.451-6.82 3.149-8.339 7.19-16.733 7.013-2.136-.042-2.562-2.492-3.081-4.001-1.247-3.572-7.218-3.422-10.559-3.778 6.299-3.41-3.107-11.9-5.216-15.679-.52-.918-3.588-4.655-3.629-5.957-.125-3.166 4.845-1.372 1.889-4.795z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(47.702 184.935)",
                        fill: "#FFF",
                        children: "AC"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#rondonia",
                onClick: (e)=>clickGo(e, 23),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "23" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M83.34 180.232c.931-1.574 5.341-4.668 6.312-4.656a10.066 10.066 0 013.958.603c3.012 1.44 2.039-1.135 5.341-.123-1.274-2.287 3.793-2.943 2.86-.315 3.068.247 2.725-4.683 6.668-5.12 4.438-.508 5.054-.646 7.122-4.534.135-.246 2.628-5.519 2.752-5.025 2.191-6.491 14.585-.878 15.638 3.355.397 1.615 1.834 3.137 3.642 4.369 1.246.862 6.327-3.999 6.134 1.314-.78 1.274 26.663 7.656 30.005 19.282 3.82 13.338-16.421 32.167-18.173 34.043-4.464 1.191-2.039 1.726-6.6.15-2.574-.875-6.422.986-9.08.289-2.409-.645-3.041-3.957-5.86-4.683-3.055-.78-5.423-1.795-7.654-3.93-4.041-3.876-8.983-2.645-14.475-3.808-1.835-.083-6.053-6.779-7.874-5.327-1.821-.438-5.381-9.094-3.397-11.204a7.381 7.381 0 00-1.163-4.627c-.986-2.644 1.041-5.026.863-7.806-.384-6.081-1.028-1.986-3.382-1.903-2.641.11-11.02 1.095-13.637-.344z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(118.13 195.32)",
                        fill: "#FFF",
                        children: "RO"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#matogrosso",
                onClick: (e)=>clickGo(e, 12),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "12" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M142.237 173.962c4-.316-1.888-6.452 5-5.738 7.914.808 16.295.328 24.279.218 1.629-.013 8.902 1.288 7.395-1.833-1.192-2.453 1.821-6.425.425-9.725 2.027-.864 1.289-3.807 2.629-5.107 1.151-1.123 4.176 7.244 4.436 7.819 1.097 2.451.398 5.478 1.932 7.654 1.41 1.987 4.574 2.136 5.889 4.259 3.136 5.136 10.845 4.137 17.13 4.657 20.159 1.656 40.356 2.669 60.486 4.752-3.48 7.763-3.999 14.912-5.122 22.552-.437 2.972 1.863 7.163-.056 10.065 1.945 1.287 1.346 2.753 1.424 4.409 1.151 25.129-20.429 60.186-33.548 58.569-10.914-1.369-45.3.058-46.928-3.396-1.165-3.944-6.136-2.658-8.395-6.603-2.301-4.051.684-6.299.737-10.242-6.997.603-14.09-.384-21.102-.324.793-5.016-3.725-9.288-2.929-13.809.519-3.025 2.726-2.916.932-6.79-1.206-2.589-.261-4.247-.699-6.382-.289-1.385-1.042-1.876-2.124-2.424-2.931-1.493 1.246-2.48 2.056-3.644 1.726-2.465 3.299-11.394 6.545-11.612 1.219-1.999-1.781-3.643-1.465-5.56-3.902-3.588.506-4.643.369-7.984-.151-3.627-9.654-3.944-12.256-3.751-1.821.137-4.109.562-5.888-.094.493-3.521-.521-6.054-.535-9.217-.014-2.286 1.288-5.177.835-7.45-.108-.613-1.752-2.517-1.452-3.269z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(200.024 218.417)",
                        fill: "#FFF",
                        children: "MT"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#matogrossodosul",
                onClick: (e)=>clickGo(e, 13),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "13" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M183.198 294.536c2.136-4.464 3.177-9.394 5.312-13.61 1.712-3.344-4.067-7.587-2.423-9.807.027-.026 2.738 3.641 3.917 3.725 3.204-1.534 4.807-2.272 6.984-5.228 2.615-3.59 10.832-3.014 14.051-.305 1.259 1.041 3.068 2.107 4.668 2.574 3.163.934 5.889-3.013 8.559-.873 3.724 2.982 4.626-1.862 7.86-3.509 1.945-1.012-1.768 8.465-2.244 7.781 2.463.959 4.285.901 6.82.959 3.504.081 1.805 1.205 2.436 3.339.466 1.564 28.948-5.997 29.416.578.302 3.837-.987 61.813-.987 61.813s-39.532 5.533-41.602 5.286c-3.889-.492-3.587-3.231-8.063-.933-2.028.329-6.012 1.205-5.177-2.409-2.013-4.354-.111-14.625-4.849-17.088-1.206-.659-7.092-2.36-7.504-1.945-1.699 1.777-3.739 1.562-6.121 1.121-2.904.027-5.629-1.614-8.243-1.203-4.178.656-.603-2.986-1.645-3.535.932-2.847 1.411-9.912.453-11.856-.165-.331-3.52-7.232-2.547-8.108 4.037-3.615.065-1.888.929-6.767z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(213.294 306.724)",
                        fill: "#FFF",
                        children: "MS"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#goias",
                onClick: (e)=>clickGo(e, 10),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "10" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M237.768 270.519c.628-2.904 1.835-7.396 4.709-8.766 1.015-1.644 1.754-5.147 2.275-5.586 2.408-2.247 3.889-3.783 6.63-4.656 3.723-1.205 3.338-5.342 4.846-8.165 1.504-2.845 4.736-1.15 5.942-3.382 1.479-2.834.741-6.161 2.189-8.874 2.902-5.531 1.862-17.363 8.656-20.567-4.878 7.641 3.698 4.971 7.201 9.449 2.273 1.738 2.164-1.822 2.71-3.055 1.618-3.533 2.878 2.247 4.52-1.533.413.37 4.136 5.765 3.427 5.601-.029-.931.326-1.408 1.037-1.438.108.534.274 1.013.602 1.452-.602-.261 9.697-.095 8.82 1.534.36-.657-.602-3.11.221-3.438 1.039-.411 3.971 1.368 6.351.438 1.045-.397 7.889-2.807 7.671-3.683.767.905 1.262 2.67 2.85 1.286-2.632 2.274-2.576 4.466 1.258 3.821-1.861 1.438-2.846 4.341-2.382 6.547.357 1.643 3.752 5.973 3.478 6.751-1.78.315.602 5.438-2.325 6.078-3.181.701-3.973-5.53-4.3.688-.164 1.48-1.097 1.67-2.768.576-3.288.327-.549 2.19-1.121 3.888-.988 2.902 2.792 6.437-2.411 6.764-3.586.219-2.682 1.341-2.682-2.739-.028-4.573-12.054-3.643-10.218.521-4.901 6.355 12.05-.326 9.668 6.355-1.313 3.752 15.83 28.211 10.406 25.416-1.944-.986-50.804 10.271-49.982 12.105-5.012-2.136-11.804-7.941-17.391-8.162-.438-2.189-3.618-1.284-5.095-1.533-3.724-.604 1.04-3.231.22-4.109-1.89-1.916-4.382 1.756-3.588-3.012.41-2.464-2.137-4.053-1.424-6.572z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(266.911 254.214)",
                        fill: "#FFF",
                        children: "GO"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#parana",
                onClick: (e)=>clickGo(e, 17),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "17" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M222.225 363.694c1.807-2.138 1.889-4.881 2.424-7.479.301-1.453.465-7.86 1.369-8.736 2.3-.684 2.3-3.315 2.726-5.204.616-2.738 2.821-2.958 3.984-5.616 4.369-9.91 38.947-9.529 46.476-9.227 4.658.193 15.775 34.563 17.916 33.794-1.728 2.19-5.754 8.929-8.41 8.984-4.054.057-14.215 14.68-14.215 14.68s-37.329-12.05-40.287-11.285c-3.875-1.449-2.698-6.491-6.054-8.216-1.491-.766-5.656 2.411-5.929-1.695z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(248.445 356.104)",
                        fill: "#FFF",
                        children: "PR"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#santacatarina",
                onClick: (e)=>clickGo(e, 25),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "25" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M231.029 383.959c1.669-3.338-.284-10.516 4.573-10.569 6.631-.109 13.639 3.559 20.402 3.888 1.317.055 5.231 2.163 4.357-1.15-1.095-4.164 3.945-1.863 5.67-3.179 2.274-1.724 8.187-4.106 11.311-1.367 1.423 1.809 20.05-5.395 13.284 3.946-1.368 1.395.713 10.789.466 10.734-3.449 4.438 1.726 11.666-5.096 15.334-2.901 1.536-7.284 7.779-9.64 9.995-.271.275-42.822-28.673-45.327-27.632z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(266.911 387.765)",
                        fill: "#FFF",
                        children: "SC"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#riograndedosul",
                onClick: (e)=>clickGo(e, 22),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "22" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M191.236 416.881c.52-2.684 7.38-8.409 9.477-10.351.37-.359 8.599-10.08 9.174-8.329-1.301-3.89 2.781-1.589 3.917-4.819.26-.521 7.04-4.821 7.109-4.795 1.436-.191 6.721-3.695 7.421-3.257 1.204-2.028 8.927-1.479 8.653-.824a17.516 17.516 0 003.326-1.479c.221-.821 22.459 7.533 24.319 11.531 2.523 5.34 12.217 2.822 13.15 5.563.106.275-5.809 9.339-3.89 9.173-.985.08 3.204-2.875 3.834.409-2.793 3.619-4.6 7.834-6.571 11.944-3.696 7.614-8.872 12.765-15.886 17.42-7.394 4.902-7.339 11.941-13.257 17.693-8.091 7.942-10.159-.574-4.08-5.752 3.806-3.231-22.527-19.746-25.578-22.732-1.918-1.862-2.384.274-4.219 1.15-2.547 1.205-1.917-2.822-3.588-4.273-2.3-1.999-4.793-5.479-7.737-6.68-3.478-1.367-5.615 5.145-9.052.821a7.009 7.009 0 003.478-2.413z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(231.031 414.466)",
                        fill: "#FFF",
                        children: "RS"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#saopaulo",
                onClick: (e)=>clickGo(e, 1),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "1" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M239.3 330.554c3.26-4.356 9.56-5.039 11.531-10.792 1.369-3.942 3.889-8.818 6.135-13.036 1.561-2.957 7.749-7.121 10.517-8.65.383-.196 32.974-6.138 42.234-1.701 20.265 9.724 26.017 33.879 27.854 33.304 4.408-1.425 5.34 3.778 2.106 4.49-1.754.413-6.519 1.479-6.49 3.399.027 3.448.521 1.615-2.931 3.639-2.189-1.42-3.34 4.111-4.763 3.426-4.271-2.244-6.958 2.96-9.258 1.918-4.271-1.918-16.98 13.092-19.638 15.336.245-.218-1.148-1.479-1.587-2.685-.466-1.369-2.658.385-4.025.082-.986-.192 1.751-4.079-2.303-4.52-1.369-.164-3.753.303-4.929.084-2.903-.547.108-2.41-.439-3.862-1.067-2.986-3.013-4.931-3.751-7.779-.52-1.945.165-7.531-3.615-7.395-.848-2.956-6.628-1.451-9.066-1.862-.162.163-8.846-2.684-10.079-2.684-1.616-.029-6.791-3.396-7.121-.274-1.7-.606-9.806.218-10.382-.438z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(280.682 327.32)",
                        fill: "#FFF",
                        children: "SP"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#minasgerais",
                onClick: (e)=>clickGo(e, 14),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "14" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M262.881 297.305c-1.696-5.094 15.531-19.882 18.844-13.421 5.531-7.367 15.886 1.588 19.773-3.944.988-1.367 3.015-1.453 3.725-2.957.326-.711-.493-2.793-.056-3.888 1.369-3.398-4.873-2.355-.109-6.603 4.547-4.053-1.917-4.739-1.204-8.186.957-4.604 1.807-4.713 5.613-6.027 1.943-.688.906-8.272.083-8.52-.108-2.699 1.974-2.546 3.782-1.617 2.188-.135-.276-3.695.957-4.243-.357.151 5.559 1.999 5.724 2.055.986.358-.52 3.534-.931 3.943 8.217-2.355 14.514-11.789 23.279-11.242 4.983.316-.327 4.339 5.367 5.544.684 1.234 3.34-1.054 4.054-1.189 2.876-.536 5.53 3.284 8.106 3.886 2.301 3.578 7.503.537 10.298 3.001 1.755 1.589 2.188 3.397 3.396 5.313 1.314 2.052 3.86-.465 5.726-.109 3.257.656 6.326 2.026 9.338 3.723 2.19 1.205.768 3.179-.548 4.573-.765.796-3.259 6.165-2.627 5.643-2.138 1.781-2.628-1.669-3.397 2.764-.628 3.674.164 4.714 3.149 7.015 4.901 3.229-6.765 3.12-6.71 3.504.22.601-2.846 41.96-3.835 42.179-6.737 1.562-14.513 5.311-21.744 7.012-12.736 2.985-24.295 3.778-29.471 4.656 0 1.452-5.367 6.872-8.518 1.259 0 0-3.041-7.285-2.821-7.229.105-.027 2.138-5.506 2.244-6.137.768-3.504-5.042-.765-5.749-2.188-.878-1.81-2.358-4.576-2.166-6.628 1.699-1.205 1.672-2.383-.08-3.562-1.04-1.095-1.205-2.303-.521-3.672-2.329-1.424-3.065-2.683-5.698-2.462-1.479.138-4.055 3.668-5.506.629.878 2.108-4.188.769-5.094 1.56-2.354-1.202-1.779 2.028-2.384 3.069-.137.22-1.014-2.904-1.065-2.961-1.149-1.175-2.767 4.165-3.505-.055.766-4.105-4.657-2.709-7.67-2.93-4.708-.353-5.53-1.613-9.858.631-2.079 1.068-2.736-.22-2.191-2.189z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(328.406 286.456)",
                        fill: "#FFF",
                        children: "MG"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#riodejaneiro",
                onClick: (e)=>clickGo(e, 20),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "20" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M332.886 337.429c-1.26-2.768 8.409-4.795 7.89-6.71-3.177-1.864-4.602 1.148-6.63-2.959 4.274-.686 9.533-4.49 13.831-3.562.548-.219 4.902-1.753 4.96.167 2.546-1.566 5.479-2.412 8.105-3.837 2.246-1.206.932-8.218 3.725-9.643 6.054-3.123 1.398 1.836 7.066 2.959 5.888 1.205 5.395 1.48 5.641 7.067.247 5.642-8.763 4.381-11.063 8.764-1.039 1.999 1.698 5.368-3.368 4.903-4.188-.413-10.628 2.355-9.285-3.18-1.039-.08-1.861.301-2.464 1.124 0 0 .105 2.767-.74 2.741-.766-.056-7.643 1.094-7.449.463 1.398-.359 2.708-.684 4.135-.794-1.667-.713-2.957-1.839-4.901-.142.465.195-4.227-.086-3.379-.113-.521 1.727-3.814.699-3.879 3.045 1.636.186-1.154 4.688-2.195-.293z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "XXXXXXXXXXXXX" ? "active" : "",
                        className: "circle",
                        d: "M355.094 318.613c6.209 0 11.263 5.021 11.263 11.259 0 6.208-5.056 11.264-11.263 11.264-6.211 0-11.263-5.054-11.263-11.264 0-6.238 5.052-11.259 11.263-11.259z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(347.465 334.68)",
                        fill: "#FFF",
                        children: "RJ"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#espiritosanto",
                onClick: (e)=>clickGo(e, 9),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "9" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M367.119 308.834c1.044-1.999-.298-5.451 1.841-6.326 3.697-1.453 3.858-.467 5.941-4.49.767-1.563 3.999-5.807 2.848-7.835-.439-.765-3.204-3.613-3.286-4.05 1.04-.249 2.079-.219 3.123.054 1.366-.654-6.465-10.519 2.137-8.054-1.204-.655-1.535-1.365-.932-2.135 4.358-.138 13.856.027 12.845 6.738-.577 3.835.933 8.079-.577 11.804-.218.576-5.861 8.954-5.831 8.954.985 3.289-5.18 5.808-6.054 8.165-1.313 3.56-2.135 3.013-5.614 2.573-1.64-.274-3.202-.768-4.736-1.451-.005-1.484.6-3.726-1.705-3.947z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "XXXXXXXXXXXXX" ? "active" : "",
                        className: "circle",
                        d: "M381.917 284.723c6.21 0 11.261 5.055 11.261 11.262 0 6.212-5.051 11.261-11.261 11.261-6.212 0-11.263-5.049-11.263-11.261 0-6.208 5.051-11.262 11.263-11.262z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(373.305 300.497)",
                        fill: "#FFF",
                        children: "ES"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#distritofederal",
                onClick: (e)=>clickGo(e, 8),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "8" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M292.461 246.197s12.929-2.903 14.188 0c1.233 2.903.659 10.683-1.424 11.504-2.08.849-14.296-1.806-14.023-3.313.301-1.535 1.259-8.191 1.259-8.191z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "XXXXXXXXXXXXX" ? "active" : "",
                        className: "circle",
                        d: "M300.735 238.34c6.212 0 11.26 5.035 11.26 11.258 0 6.21-5.048 11.263-11.26 11.263-6.209 0-11.261-5.053-11.261-11.263.001-6.221 5.049-11.258 11.261-11.258z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(292.414 254.214)",
                        fill: "#FFF",
                        children: "DF"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                xlinkHref: "#paraiba",
                onClick: (e)=>clickGo(e, 16),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "16" ? "active" : "",
                        stroke: "#FFF",
                        strokeWidth: 1.04,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M401.575 141.096c2.081-3.081 16.791-6.82 19.117-4.616 0 1.918 7.259 1.686 10.133 2.712-.492 3.038 12.652 1.533 14.408 2.259 1.421.589 3.833 11.983 1.421 12.202-.874-1.124-2.083-1.739-3.586-1.835-2.957-.027-2.546 1.863-4.383 3.108-2.626 1.767-6.571 1.917-9.558 2.109-.162 1.232-3.943 4.438-5.259 4.916-3.122 1.149-2.657-2.727-5.095-3.602.713-1.124 4.082-5.203 3.725-6.205-1.423-3.846-12.051 5.52-14.981 3.506-1.396-.973-6.218 1.493-3.476-2.588 1.533-2.286-3.643-10.173-2.466-11.966z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: currentLocal === "XXXXXXXXXXXXX" ? "active" : "",
                        className: "circle",
                        d: "M433.797 133.597c6.237 0 11.26 5.051 11.26 11.261a11.245 11.245 0 01-11.26 11.262c-6.208 0-11.257-5.036-11.257-11.262 0-6.211 5.049-11.261 11.257-11.261z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("text", {
                        transform: "translate(425.213 148.99)",
                        fill: "#FFF",
                        children: "PB"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const map = (SvgMap);

;// CONCATENATED MODULE: ./_share/components/navMenu/modal-map.jsx









// import './_modal.scss';
class ModalMap extends external_react_.Component {
    constructor(props){
        super(props);
        let locationStates = [];
        if (this.props && this.props.location && this.props.location.states) locationStates = this.props.location.states;
        let localTitle = "";
        if (this.props && this.props.location && this.props.location.localTitle) localTitle = this.props.location.localTitle;
        this.state = {
            brStates: locationStates,
            show: false,
            txtBtn: localTitle,
            operation: true
        };
    }
    _storage = new service_storage/* default */.Z();
    async componentDidMount() {
        const ulScroll = document.getElementById("scroll-list-states");
        if (ulScroll) ulScroll.addEventListener("scroll", this.onScroll);
        const locate = await this._storage.getStates(false);
        this.setState({
            brStates: locate.states,
            txtBtn: locate.localTitle,
            teste: 1
        });
        sessionStorage.setItem(Envirioment/* GEOLOCATION */.De, "undefined");
        this.timedCount();
    }
    componentDidUpdate() {
        const elem = this.ulScroll;
        if (elem) {
            elem.addEventListener("scroll", this.onScroll);
        }
    }
    timedCount = async ()=>{
        let t;
        let geolocation = sessionStorage.getItem(Envirioment/* GEOLOCATION */.De);
        if (geolocation == "undefined") {
            t = setTimeout(this.timedCount, 1000);
        } else if (geolocation == "true" || geolocation == "up") {
            console.log("clearTimeout");
            clearTimeout(t);
            const storage = new service_storage/* default */.Z();
            storage.setUpdateApi(true, true);
            const locate = await storage.getStates(true);
            this.setState({
                brStates: locate.states,
                txtBtn: locate.localTitle
            });
            if (geolocation == "true") {
                sessionStorage.setItem(Envirioment/* GEOLOCATION */.De, "up");
                const href = "/home";
                if (window.location.pathname == href) {
                    window.location = href + window.location.search;
                }
            // else {
            //   Router.push(href + window.location.search);
            // }
            }
        }
    };
    getLocalById = async (localId)=>{
        const local = await this._storage.getLocalById(localId);
        if (local) this.setState({
            txtBtn: local.title
        });
        return local;
    };
    handleClose = (evt)=>{
        if (evt) evt.preventDefault();
        this.setState({
            show: false
        });
    };
    handleShow = (evt)=>{
        if (evt) evt.preventDefault();
        this.setState({
            show: true
        });
    };
    handleToggle = (evt)=>{
        if (evt) evt.preventDefault();
        this.setState({
            show: !this.state.show
        });
    };
    setTextBtnAndGoto = (e, localId)=>{
        this.gotoLocal(e, localId);
    };
    gotoLocal = async (e, localId)=>{
        e.preventDefault();
        this._storage.setUpdateApi(true, true);
        const local = await this.getLocalById(localId);
        this._storage.setUpdateApi(true, false);
        const href = "/home";
        if (window.location.pathname == href) {
            window.location = href;
        } else {
        //Router.push(href);
        }
        this.setState({
            show: false
        });
    };
    scrollList = ()=>{
        const ulScroll = document.getElementById("scroll-list-states");
        let y = 0;
        if (ulScroll.scrollTop < 390 && this.state.operation) {
            y = ulScroll.scrollTop + 70;
        } else {
            y = ulScroll.scrollTop - 70;
        }
        ulScroll.scroll(0, y);
    };
    onScroll = (e)=>{
        if (e.target.scrollTop < 390 && this.state.operation) {
            if (e.target.scrollTop > 350) {
                this.setState({
                    operation: false
                });
            }
        } else {
            if (e.target.scrollTop < 40) {
                this.setState({
                    operation: true
                });
            } else {
                this.setState({
                    operation: false
                });
            }
        }
    };
    ///
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "state-select hidden-lg-up",
                    onClick: this.handleToggle
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-3 hidden-md-down np responsive-menu-md",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "area-local",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: "",
                            onClick: this.handleShow,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "icon-local"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: this.state.txtBtn
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
                    show: this.state.show,
                    onHide: this.handleClose,
                    backdrop: false,
                    animation: false,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "area-modal",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "modal-map",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Row_default()), {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                        md: 6,
                                        className: "info-state offset-md-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                            children: [
                                                "N\xe3o est\xe1 no ",
                                                this.state.txtBtn,
                                                "?"
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Row_default()), {
                                    className: "modal-map-container",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Col_default()), {
                                        md: 12,
                                        className: "content-map",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "close-modal",
                                                onClick: this.handleClose
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Row_default()), {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                                        md: 7,
                                                        className: "hidden-md-down",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(map, {
                                                            width: "30em",
                                                            height: "30em",
                                                            id: "svg-map",
                                                            state: "S\xe3o Paulo",
                                                            settextbtn: this.setTextBtnAndGoto
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Col_default()), {
                                                        md: 5,
                                                        className: "list-states",
                                                        onChange: this.onScroll,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Row_default()), {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "list-states-title",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        children: "Escolha sua localiza\xe7\xe3o"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                id: "scroll-list-states",
                                                                ref: (ulScroll)=>this.ulScroll = ulScroll,
                                                                children: this.state.brStates ? this.state.brStates.map((val, idx)=>{
                                                                    let clss = "col-12 float-left np";
                                                                    clss = val.status == "1" ? clss : clss + " without-link";
                                                                    const liClass = val.status != "1" ? "col-12 float-left np coming-soon" : "col-12 float-left np";
                                                                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        className: liClass,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                                            className: clss,
                                                                            onClick: (e)=>val.status == "1" ? this.gotoLocal(e, val.id) : e.preventDefault(),
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "float-left",
                                                                                    children: val.title
                                                                                }),
                                                                                " ",
                                                                                val.status == "0" ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "float-right",
                                                                                    children: "EM BREVE"
                                                                                }) : ""
                                                                            ]
                                                                        })
                                                                    }, idx);
                                                                }) : false
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                onClick: this.scrollList,
                                                                className: this.state.operation ? "scroll-list-states down" : "scroll-list-states up"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        });
    }
}
/* harmony default export */ const modal_map = (ModalMap);

;// CONCATENATED MODULE: ./_share/components/navMenu/navMenu-desktop.jsx





class navMenuDesktop extends external_react_.Component {
    constructor(props){
        super(props);
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "hidden-md-down content-menu col-9",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-8 np padding-none",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "area-itens-menu",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "btns-menu",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "col-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                        text: "Empreendimentos",
                                        arrayLink: [
                                            "busca/"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "item-sobre-nos col-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "Sobre N\xf3s"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "dropdown-sobre-nos",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                        text: "Nossa Hist\xf3ria",
                                                        arrayLink: [
                                                            "experiencia-alpha"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                        text: "Linha de Produtos",
                                                        arrayLink: [
                                                            "linha-de-produtos"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                        text: "Funda\xe7\xe3o Alphaville",
                                                        link: "https://fundacaoalphaville.org.br/",
                                                        target: "_blank",
                                                        externalLink: true
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                        text: "Blog",
                                                        link: "https://www.alphaville.com.br/blog/",
                                                        target: "_blank",
                                                        externalLink: true
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "text-compre item-compre-seu-alpha col-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "",
                                            children: "Contato"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "dropdown-compre-seu-alpha",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                        text: "Fale Conosco",
                                                        arrayLink: [
                                                            "fale-conosco"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                        text: "FAQ",
                                                        arrayLink: [
                                                            "faq"
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "text-cliente item-sou-cliente col-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "Sou Cliente"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "dropdown-sou-cliente",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                        text: "Portal Cliente Alpha",
                                                        link: "https://www.portalclientealpha.com.br/Account/LogIn?ReturnUrl=%2FHome%2FUnauthorized",
                                                        target: "_blank",
                                                        externalLink: true
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "SAC 0800 015 1963"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                        text: "Ouvidoria",
                                                        link: "https://alphaville.com.br/fale-conosco#ouvidoria",
                                                        target: "_blank",
                                                        externalLink: true
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(searchMenu, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(modal_map, {
                    coords: this.props.coords,
                    location: this.props.location
                })
            ]
        });
    }
}
/* harmony default export */ const navMenu_desktop = (navMenuDesktop);

// EXTERNAL MODULE: external "react-bootstrap/Accordion"
var Accordion_ = __webpack_require__(2423);
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_);
// EXTERNAL MODULE: external "react-bootstrap/Collapse"
var Collapse_ = __webpack_require__(128);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse_);
;// CONCATENATED MODULE: ./_share/components/navMenu/navMenu-mobile-expanded.jsx





class navMenuMobileExpanded extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            statusOne: true,
            statusTwo: false,
            clicked: false
        };
    }
    static getDerivedStateFromProps(props, state) {
        if (!state.clicked) {
            if (props.openSearch) {
                //executa quando abre pela tarja de busca na home (search.component). Abre o menu dentro de um modal.
                state.statusOne = false;
                state.statusTwo = true;
                state.clicked = true;
            } else {
                state.statusOne = true;
                state.statusTwo = false;
            }
        } else {
            state.clicked = false;
        }
        return state;
    }
    btntoggleStatusTwo = ()=>{
        this.setState({
            statusOne: !this.state.statusOne,
            statusTwo: !this.state.statusTwo,
            clicked: true
        });
    };
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "hidden-lg-up bg-menu-mobile",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Collapse_default()), {
                    className: "col-12",
                    in: this.state.statusOne,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "menu-status-one padding-none",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-12 padding-none",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "navbar-nav mr-auto",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item active",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                className: "nav-link",
                                                text: "Empreendimentos",
                                                arrayLink: [
                                                    "busca/"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                className: "nav-link",
                                                text: "Sobre N\xf3s",
                                                arrayLink: [
                                                    "experiencia-alpha"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                className: "nav-link",
                                                text: "Linha de Produtos",
                                                arrayLink: [
                                                    "linha-de-produtos"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                className: "nav-link",
                                                text: "Contato",
                                                arrayLink: [
                                                    "fale-conosco"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                className: "nav-link",
                                                text: "FAQ",
                                                arrayLink: [
                                                    "faq"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                className: "nav-link",
                                                text: "Funda\xe7\xe3o Alphaville",
                                                link: "https://fundacaoalphaville.org.br/",
                                                target: "_blank",
                                                externalLink: true
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                className: "nav-link",
                                                text: "Sou Cliente",
                                                link: "https://www.portalclientealpha.com.br/Account/LogIn?ReturnUrl=%2FHome%2FUnauthorized",
                                                target: "_blank",
                                                externalLink: true
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                className: "nav-link",
                                                text: "Blog",
                                                link: "https://www.alphaville.com.br/blog/",
                                                target: "_blank",
                                                externalLink: true
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container-fluid hidden-lg-up padding-none",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-md-12 content-flex padding-none",
                                    onClick: this.btntoggleStatusTwo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "area-encontre",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: "Encontre seu empreendimento"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "area-search-icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "icon-search"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Collapse_default()), {
                    in: this.state.statusTwo,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "menu-status-two",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(searchMenu, {
                            isMobile: true
                        })
                    })
                })
            ]
        });
    }
}
/* harmony default export */ const navMenu_mobile_expanded = (navMenuMobileExpanded);

;// CONCATENATED MODULE: ./_share/components/navMenu/navMenu-mobile.jsx









class navMenuMobile extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            localId: 0,
            statusOne: false,
            openStatusTwo: false,
            brStates: [],
            openStatesMenu: false,
            stateCurrentUf: ""
        };
    }
    _storage = new service_storage/* default */.Z();
    async componentDidMount() {
        const locate = await this._storage.getStates(true);
        this.setState({
            brStates: locate.states,
            stateCurrentUf: locate.uf,
            localId: locate.localId
        });
        if (this.props.openSearch) {
            //executa quando abre pela tarja de busca na home (search.component). Abre o menu dentro de um modal.
            this.setState({
                statusOne: true,
                openStatesMenu: false
            });
            this.props.setMenuOpenSearch();
        }
    }
    getLocalById = async (localId)=>{
        const local = await this._storage.getLocalById(localId);
        if (local) this.setState({
            txtBtn: local.title
        });
        return local;
    };
    gotoLocal = async (e, localId)=>{
        e.preventDefault();
        const local = await this.getLocalById(localId);
        this._storage.setUpdateApi(true, true);
        const href = "/";
        if (window.location.pathname == href) {
            window.location = href + window.location.search;
        } else {
            router_default().push(href + window.location.search);
        }
        this.setState({
            show: false
        });
    };
    handlerClickOne = ()=>{
        if (this.props.openSearch != undefined) {
            //fecha o modal (acionado pelo search.component)
            this.props.setCloseModal();
        }
        this.setState({
            statusOne: !this.state.statusOne,
            openStatesMenu: false
        });
    };
    toggleStatesMenu = ()=>{
        this.setState({
            statusOne: false,
            openStatesMenu: !this.state.openStatesMenu
        });
    };
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()), {
            className: "hidden-lg-up flex-menu",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "area-button-back col-12",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "navbar-toggler navbar-toggler-left responsive-icons",
                            type: "button",
                            "aria-expanded": this.state.statusOne,
                            onClick: this.handlerClickOne,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "navbar-toggler-icon"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                            className: "wdta np col-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "area-logo-menu",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                    className: "navbar-brand",
                                    arrayLink: [
                                        ""
                                    ],
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "logo-menu"
                                    })
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "state-select",
                    type: "button",
                    "data-state": this.state.stateCurrentUf,
                    "aria-expanded": this.state.openStatesMenu,
                    onClick: this.toggleStatesMenu
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()).Collapse, {
                    in: this.state.statusOne,
                    eventKey: "0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(navMenu_mobile_expanded, {
                        ...this.props
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()).Collapse, {
                    in: this.state.openStatesMenu,
                    eventKey: "1",
                    className: "hidden-lg-up bg-menu-mobile",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "menu-status-three",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container-fluid",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Row_default()), {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                        xs: 12,
                                        className: "area-title-states",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "Escolha onde ver empreendimentos"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                xs: 12,
                                className: "container-fluid result-states",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "col-xs-12 np",
                                    children: this.state.brStates.map((val, idx)=>{
                                        let clss = "col-12 float-left np";
                                        clss = val.status == "1" ? clss : clss + " without-link";
                                        clss = val.id == this.state.localId ? clss + " current" : " ";
                                        const liClass = val.status != "1" ? "col-12 float-left np coming-soon" : "col-12 float-left np";
                                        return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: liClass,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                onClick: (e)=>val.status == "1" ? this.gotoLocal(e, val.id) : e.preventDefault(),
                                                className: clss,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "float-left",
                                                        children: val.title
                                                    }),
                                                    " ",
                                                    val.status == "0" ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "float-right",
                                                        children: "EM BREVE"
                                                    }) : ""
                                                ]
                                            })
                                        }, idx);
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        });
    }
}
/* harmony default export */ const navMenu_mobile = (navMenuMobile);

;// CONCATENATED MODULE: ./_share/components/navMenu/navMenu.jsx






// import './menu.scss';
class NavMenu extends external_react_.Component {
    constructor(props){
        super(props);
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "menu-section",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "np navigation-content",
                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "content-full col-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(navMenu_mobile, {
                                ...this.props
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                md: 3,
                                className: "wdta np hidden-md-down margin-logo",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "area-logo-menu",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                        className: "navbar-brand",
                                        arrayLink: [
                                            "home"
                                        ],
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "logo-menu"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(navMenu_desktop, {
                                ...this.props
                            })
                        ]
                    })
                })
            })
        });
    }
}
/* harmony default export */ const navMenu = (NavMenu);


/***/ }),

/***/ 4756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_main)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./public/static/images/Favicon.png
/* harmony default export */ const Favicon = ({"src":"/_next/static/media/Favicon.dd8a1275.png","height":16,"width":16,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEXn5+f09PTg4ODT09PNzc3Z2dn+/v7BwcGtra2jo6O0rRZtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVQImR3Gxw3AQBADsZG06fpv2ID5Iom7mMFuUz0UUgjIu//06lZteKqVzdy9xiGDtNQHHYkA2oikL+AAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: external "react-bootstrap/Row"
var Row_ = __webpack_require__(8907);
var Row_default = /*#__PURE__*/__webpack_require__.n(Row_);
// EXTERNAL MODULE: external "react-bootstrap/Col"
var Col_ = __webpack_require__(7511);
var Col_default = /*#__PURE__*/__webpack_require__.n(Col_);
// EXTERNAL MODULE: ./_share/components/LinkCustom/LinkCustom.component.jsx
var LinkCustom_component = __webpack_require__(7509);
// EXTERNAL MODULE: ./_share/service/storage.js + 3 modules
var storage = __webpack_require__(6008);
// EXTERNAL MODULE: ./_share/service/util.js
var util = __webpack_require__(1659);
;// CONCATENATED MODULE: ./_share/components/footer/footer.jsx







// import styles from './_footer.scss';
class Footer extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            pathname: "",
            phoneSac: "SAC (0800...)"
        };
    }
    _storage = new storage/* default */.Z();
    async componentDidMount() {
        this.setState({
            pathname: window.location.pathname
        });
    }
    openAssessoria = ()=>{
        const accordion = [
            "activeQueroComprar=false",
            "activeSouCliente=false",
            "activeOfereca=false",
            "activeAssessoria=true",
            "activeCanalConfidencial=false",
            "activeSouFornecedor=false",
            "activeSugestao=false",
            "activeTrabalheConosco=false"
        ];
        return "?" + accordion.join("&");
    };
    openTrabalhe = ()=>{
        const accordion = [
            "activeQueroComprar=false",
            "activeSouCliente=false",
            "activeOfereca=false",
            "activeAssessoria=false",
            "activeCanalConfidencial=false",
            "activeSouFornecedor=false",
            "activeSugestao=false",
            "activeTrabalheConosco=true"
        ];
        return "?" + accordion.join("&");
    };
    openLinkTarget = async (target, event)=>{
        await this._storage.setTargetActivePage(target);
        new util/* default */.Z().goToUrl([
            "fale-conosco#" + target
        ], "_self", false, event);
    };
    openFornecedor = ()=>{
        const accordion = [
            "activeQueroComprar=false",
            "activeSouCliente=false",
            "activeOfereca=false",
            "activeAssessoria=false",
            "activeCanalConfidencial=false",
            "activeSouFornecedor=true",
            "activeSugestao=false",
            "activeTrabalheConosco=false"
        ];
        return "?" + accordion.join("&");
    };
    openConfidencial = ()=>{
        const accordion = [
            "activeQueroComprar=false",
            "activeSouCliente=false",
            "activeOfereca=false",
            "activeAssessoria=false",
            "activeCanalConfidencial=true",
            "activeSouFornecedor=false",
            "activeSugestao=false",
            "activeTrabalheConosco=false"
        ];
        return "?" + accordion.join("&");
    };
    backToTop = (e)=>{
        e.preventDefault();
        global.window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: this.props.pathname == "/fale-conosco" ? "footer-fale-conosco" : "",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "rainbow-border"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "hidden-lg-up",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                className: "logo-copyright",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Row_default()), {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                            xs: 12,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "logo-footer"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Row_default()), {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                            xs: 12,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                children: "2020 ALPHAVILLE S.A. TODOS OS DIREITOS RESERVADOS"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                className: "social-media",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Row_default()), {
                                    className: "social-align",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-xs-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                link: "https://www.instagram.com/grupoalphaville/?igshid=MzRlODBiNWFlZA%3D%3D",
                                                ariaLabel: "linkedin",
                                                target: "_blank",
                                                externalLink: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "icon-area icon-area-yt",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon-instagram"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-xs-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                link: "https://www.linkedin.com/company/alphaville-urbanismo",
                                                ariaLabel: "linkedin",
                                                target: "_blank",
                                                externalLink: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "icon-area icon-area-yt",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon-linkedin"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                className: "local",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("address", {
                                        children: [
                                            "Av. das Na\xe7\xf5es Unidas, 14.171",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "Vila Gertrudes, S\xe3o Paulo – SP,",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "04794-000, Brasil",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "Tel: +55 11 3030-5100"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                        text: "Portal de privacidade",
                                        arrayLink: [
                                            "lgpd/"
                                        ],
                                        target: "_self",
                                        externalLink: false
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                className: "back-to-top",
                                onClick: this.backToTop.bind(this),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xs-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "area-icon-arrow-up",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "icon-arrow-up"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xs-7 np",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: "Voltar ao topo"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "hidden-md-down",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Row_default()), {
                                className: "padding-margin-none",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Col_default()), {
                                        md: 4,
                                        className: "first-area-footer",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "area-logo-footer",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Row_default()), {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                                        md: 12,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "logo-footer"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "area-copyright-footer",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Row_default()), {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                                        md: 12,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                                            children: [
                                                                "2020 ALPHAVILLE S.A. ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                "TODOS OS DIREITOS RESERVADOS"
                                                            ]
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "area-address-footer",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Row_default()), {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                                        md: 12,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("address", {
                                                            children: [
                                                                "Av. das Na\xe7\xf5es Unidas, 14.171",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                "Vila Gertrudes, S\xe3o Paulo – SP,",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                "04794-000, Brasil",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                "Tel: +55 11 3030-5100"
                                                            ]
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "area-politica-footer",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                            text: "Portal de privacidade",
                                                            arrayLink: [
                                                                "lgpd/"
                                                            ],
                                                            target: "_self",
                                                            externalLink: false
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "area-media-footer",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Row_default()), {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                                        md: 12,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Row_default()), {
                                                            className: "social-margin",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                                                    md: 3,
                                                                    lg: 2,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                                        link: "https://www.instagram.com/grupoalphaville/?igshid=MzRlODBiNWFlZA%3D%3D",
                                                                        ariaLabel: "linkedin",
                                                                        target: "_blank",
                                                                        externalLink: true,
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "icon-area",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "icon-instagram"
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                                                    md: 3,
                                                                    lg: 2,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                                        link: "https://www.linkedin.com/company/alphaville-urbanismo",
                                                                        ariaLabel: "linkedin",
                                                                        target: "_blank",
                                                                        externalLink: true,
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "icon-area",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "icon-linkedin"
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                        md: 3,
                                        className: "second-area-footer",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "area-empresa-footer",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "head-list",
                                                        children: "Sobre a empresa"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                            text: "Nossa Hist\xf3ria",
                                                            arrayLink: [
                                                                "experiencia-alpha"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                            text: "Linha de Produtos",
                                                            arrayLink: [
                                                                "linha-de-produtos"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                            text: "Funda\xe7\xe3o Alphaville",
                                                            link: "https://fundacaoalphaville.org.br/",
                                                            target: "_blank",
                                                            externalLink: true
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                            text: "Rela\xe7\xf5es com investidores",
                                                            arrayLink: [
                                                                "ri"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                            text: "Assessoria de Imprensa",
                                                            arrayLink: [
                                                                "fale-conosco#assessoria"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                            text: "Trabalhe Conosco",
                                                            arrayLink: [
                                                                "fale-conosco#trabalhe-conosco"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                            text: "Blog",
                                                            link: "https://www.alphaville.com.br/blog/",
                                                            target: "_blank",
                                                            externalLink: true
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Col_default()), {
                                        md: 2,
                                        className: "third-area-footer",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "area-cliente-footer",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "head-list",
                                                            children: "Sou cliente"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                                text: "Portal Cliente Alpha",
                                                                link: "https://www.portalclientealpha.com.br/Account/LogIn?ReturnUrl=%2FHome%2FUnauthorized",
                                                                target: "_blank",
                                                                externalLink: true
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "",
                                                                className: "open-sac",
                                                                onClick: (e)=>{
                                                                    e.preventDefault();
                                                                    this.setState({
                                                                        phoneSac: "SAC 0800 015 1963"
                                                                    });
                                                                },
                                                                children: this.state.phoneSac
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                                text: "Ouvidoria",
                                                                link: "https://alphaville.com.br/fale-conosco#ouvidoria",
                                                                target: "_blank",
                                                                externalLink: true
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "area-fornecedor-footer sub-area",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "head-list",
                                                            children: "Sou fornecedor"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                                text: "Entre em contato",
                                                                arrayLink: [
                                                                    "fale-conosco#sou-fornecedor"
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Col_default()), {
                                        md: 3,
                                        className: "fourth-area-footer",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "area-comprar-footer",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "head-list",
                                                            children: "Quero comprar"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                                text: "Residencial",
                                                                arrayLink: [
                                                                    "fale-conosco"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                                text: "Comercial",
                                                                arrayLink: [
                                                                    "fale-conosco"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                                text: "Alphacasas",
                                                                link: "https://www.alphaville.com.br/alphacasas",
                                                                target: "_blank",
                                                                externalLink: true
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "area-fale-footer sub-area",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "head-list",
                                                            children: "Fale com a empresa"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                                text: "Ofere\xe7a sua \xe1rea",
                                                                link: "http://oferecasuaarea.alphaville.com.br/",
                                                                target: "_blank",
                                                                externalLink: true
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                                text: "Canal Confidencial",
                                                                arrayLink: [
                                                                    "fale-conosco#canal"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                                text: "FAQ",
                                                                arrayLink: [
                                                                    "faq"
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        });
    }
}

// EXTERNAL MODULE: ./Envirioment/Envirioment.js
var Envirioment = __webpack_require__(1790);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./_share/layouts/meta.component.jsx




const Meta = (props)=>{
    function setTitle(title) {
        if (title && title.indexOf("Alphaville") == -1) {
            title = "Alphaville - " + title;
        }
        return title ? title : "Alphaville";
    }
    const images = props.images || [
        {
            url: Envirioment/* URL_DOMAIN */.V3 + "/static/images/alphaville.jpg",
            type: "image/jpeg",
            width: "1200",
            height: "489",
            alt: "Alphaville"
        }, 
    ];
    function canonicalModel() {
        let url = "";
        if (props.homeContent?.statusObra?.id === "0" && !props.success) {
            url = `${Envirioment/* URL_DOMAIN */.V3}/teaser/${props.homeContent.slug}`;
        } else if (props.success) {
            url = `${Envirioment/* URL_DOMAIN */.V3}/teaser/${props.homeContent.slug}/agradecimento`;
        } else {
            url = `${Envirioment/* URL_DOMAIN */.V3}/`;
        }
        return url;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: setTitle(props.title)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "canonical",
                href: canonicalModel()
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: props.description
            }),
            props.showNoIndex && /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "robots",
                content: "noindex"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: setTitle(props.title)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: props.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:site_name",
                content: Envirioment/* SITE_NAME */.px
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:url",
                content: `${props.url}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "fb:pages",
                content: "324528367567890, 367538760111798, 1465526193740548"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "google-site-verification",
                content: "1HGfLvGNsR7Jd_Qc6IWM1RU5mD7JSYPKAGiWxnH1Cho"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msvalidate.01",
                content: "A71B78FF92B18270B1B4C3BA161BA9DD"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "shortcut icon",
                href: "/images/Favicon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                href: "/images/Favicon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                href: "/images/Favicon.png"
            }),
            props.css && /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: `${props.css}`
            }),
            images.map((img, idx)=>{
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:image",
                            content: img.url
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:image:type",
                            content: `${img.type}`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:image:width",
                            content: `${img.width}`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:image:height",
                            content: `${img.height}`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:image:alt",
                            content: `${img.alt}`
                        })
                    ]
                }, idx);
            }),
            props.images != null && props.images.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:image",
                content: `${props.images[0].url}`
            }),
            props.js && /*#__PURE__*/ jsx_runtime_.jsx("script", {
                type: "text/javascript",
                src: `${props.js}`
            }),
            props.children
        ]
    });
};
/* harmony default export */ const meta_component = (Meta);

// EXTERNAL MODULE: ./_share/components/navMenu/navMenu.jsx + 7 modules
var navMenu = __webpack_require__(6635);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
;// CONCATENATED MODULE: ./public/static/images/alphaville.jpg
/* harmony default export */ const alphaville = ({"src":"/_next/static/media/alphaville.7b4151fe.jpg","height":489,"width":1200,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAADAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAdEAACAgEFAAAAAAAAAAAAAAAAAwIEEgETITFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ALza97GpbZsSXjpLHfn3z6ACzI//2Q==","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./_share/layouts/layout-main.jsx




// import CookiesPolicy from '../components/cookiesPolicy/cookiesPolicy.component';





// import '../../public/static/main.scss';

const layout = ({ children , outContainer , outBottomContainer , metaProps , homeContent , active , location , cssClass , showNoIndex , success ,  })=>{
    (0,external_react_.useEffect)(()=>{
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "UA-27437785-3", {
            cookie_expires: 0
        });
        const mainUrl = "https://www.alphaville.com.br";
    // if (window.location.origin != mainUrl) {
    //   window.location.href = mainUrl + window.location.pathname;
    // }
    }, []);
    const defaultMetaProps = {
        image: {
            url: alphaville,
            type: "image/jpeg",
            width: "1200",
            height: "489",
            alt: "Alphaville"
        },
        title: "Alphaville - Residenciais e lotes comerciais \xe0 venda",
        description: "Bem vindo \xe0 Alphaville. Conhe\xe7a nossos lotes \xe0 venda",
        url: Envirioment/* URL_DOMAIN */.V3 + "/"
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(meta_component, {
                ...metaProps || defaultMetaProps,
                homeContent: homeContent,
                success: success,
                showNoIndex: showNoIndex,
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "facebook-domain-verification",
                    content: "ykvnn3gwiu4gqqg55k33ewhd68i3yc"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(navMenu/* default */.Z, {
                    location: location
                })
            }),
            outContainer,
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "layout",
                className: "layout " + active + " " + cssClass,
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                    className: "container-layout",
                    children: children
                })
            }),
            outBottomContainer,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};
/* harmony default export */ const layout_main = (layout);


/***/ })

};
;