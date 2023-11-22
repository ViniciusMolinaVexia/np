exports.id = 5129;
exports.ids = [5129];
exports.modules = {

/***/ 3457:
/***/ ((module) => {

// Exports
module.exports = {
	"bannerArea": "banner_bannerArea__L7Zq6",
	"logo": "banner_logo__gYBnD",
	"baseLogo": "banner_baseLogo__FHWpp",
	"logoJardim": "banner_logoJardim__N3lcY",
	"logoTerras": "banner_logoTerras__08f22",
	"logoEmpreendimentos": "banner_logoEmpreendimentos__2HNN3",
	"logoAntiga": "banner_logoAntiga__mirkA",
	"logoNova": "banner_logoNova__ASxmF",
	"AlphaVille": "banner_AlphaVille__e50IT",
	"logoAlphaCasas0": "banner_logoAlphaCasas0__e8Lb4",
	"bannerBaseContent": "banner_bannerBaseContent___FCry",
	"bannerTitleContainer": "banner_bannerTitleContainer__t0eX2",
	"bannerTitle": "banner_bannerTitle__3ET4Y",
	"bannerSubtitle": "banner_bannerSubtitle__8vIXE",
	"voceMereceContainer": "banner_voceMereceContainer__KCqWP",
	"desenhadoText": "banner_desenhadoText__4QI8O",
	"voceText": "banner_voceText__3BNvg",
	"bannerContentJardim": "banner_bannerContentJardim__796x8",
	"bannerContentTerras": "banner_bannerContentTerras__iTufi",
	"bannerContentEmpreendimentos": "banner_bannerContentEmpreendimentos__niUIH"
};


/***/ }),

/***/ 5129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Banner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3630);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2770);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_responsive_picture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8290);
/* harmony import */ var react_responsive_picture__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_responsive_picture__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3742);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _service_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1659);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _banner_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3457);
/* harmony import */ var _banner_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_banner_module_scss__WEBPACK_IMPORTED_MODULE_10__);









// import Swiper from 'react-id-swiper';

// import './banner.scss';
// import 'swiper/css/swiper.min.css';

swiper__WEBPACK_IMPORTED_MODULE_4___default().use([
    swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay
]);
class Banner extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
    constructor(props){
        super(props);
        this.state = {
            swiper: null,
            upBner: props.upBner,
            showButton: props.showButton != undefined ? props.showButton : true,
            showTexts: props.showTexts != undefined ? props.showTexts : true,
            titleTeaser: props.colors && props.colors.displayColor ? this.props.homeContent.banner[0].BannerTitle : "",
            subTitleTeaser: props.colors && props.colors.displayColor ? this.props.homeContent.banner[0].BannerLots : "",
            logoTeaser: props.colors && props.colors.displayColor ? (_banner_module_scss__WEBPACK_IMPORTED_MODULE_10___default())[this.handleSlugAlpha0Logo(this.props.homeContent.logoType || props.colors.displayColor, this.props.homeContent)] : "",
            contentTeaser: props.colors && props.colors.displayColor ? (_banner_module_scss__WEBPACK_IMPORTED_MODULE_10___default())[this.handleContentTeaser(props.colors.displayColor)] : ""
        };
        this.swiperRef = this.swiperRef.bind(this);
        this.setCurrentSlide = this.setCurrentSlide.bind(this);
        this.slideTo = this.slideTo.bind(this);
    }
    async componentDidMount() {
        const list = await this.props.bannerList;
        list.length > 0 ? this.setCurrentSlide(0) : false;
    }
    handleSlugAlpha0Logo(logoType, homeContent) {
        switch(homeContent.typeLote.id){
            case "1":
                logoType = "logoEmpreendimentos";
                break;
            case "2":
                logoType = "logoTerras";
                break;
            case "3":
                logoType = "logoJardim";
                break;
            case "4":
                logoType = "logoAntiga";
                break;
        }
        return homeContent.slug === "casas-alphaville-d-pedro-0" ? "logoAlphaCasas0" : logoType;
    }
    handleContentTeaser(key) {
        let styleName = "";
        switch(key){
            case "logoJardim":
                styleName = "bannerContentJardim";
                break;
            case "logoTerras":
                styleName = "bannerContentTerras";
                break;
            case "logoEmpreendimentos":
                styleName = "bannerContentEmpreendimentos";
                break;
        }
        return styleName;
    }
    getTitle(key) {
        let title = "";
        switch(key){
            case "logoJardim":
                title = "Vem a\xed mais um lan\xe7amento Grupo Alphaville em Bauru";
                break;
            case "logoTerras":
                title = "O Grupo Alphaville est\xe1 chegando a Uberaba";
                break;
            case "logoEmpreendimentos":
                title = "Vem a\xed mais um<br>lan\xe7amento no Paran\xe1";
                break;
            default:
                title = "";
                break;
        }
        return title;
    }
    getSubTitle(key) {
        let subTitle = "";
        switch(key){
            case "logoJardim":
                subTitle = "Seu novo horizonte de felicidade";
                break;
            case "logoTerras":
                subTitle = "Seu futuro<br>come\xe7a agora";
                break;
            case "logoEmpreendimentos":
                subTitle = "O Modo Alphaville de Viver";
                break;
            default:
                subTitle = "";
                break;
        }
        return subTitle;
    }
    swiperRef(ref) {
        // const swiper = useSwiper();
        if (ref) {
            this.setState({
                swiper: ref
            });
            this.setCurrentSlide(ref.realIndex);
        }
    }
    slideTo(slide) {
        if (this.state.swiper) this.state.swiper.slideTo(slide);
    }
    async setCurrentSlide(slide) {
        const list = await this.props.bannerList;
        if (list.length == 0) return;
        if (this.state.swiper) {
            this.setState({
                activeSlideIndex: slide,
                id: this.props.bannerList[slide].Id,
                displayREDevelopment: this.props.bannerList[slide].BannerCategory,
                displayTitle: this.props.bannerList[slide].BannerTitle,
                displaySubTitle: this.props.bannerList[slide].BannerLots,
                displayLink: this.props.bannerList[slide].Slug,
                displayColor: this.props.bannerList[slide].DisplayColor,
                btnText: this.props.bannerList[slide].BtnText
            });
        }
    }
    setColorDisplaySaibaMais(displayColor, teaser) {
        let textColor = "";
        if (teaser) {
            if (displayColor === "logoJardim") {
                textColor = "jardim";
            } else if (displayColor === "logoTerras") {
                textColor = "terras";
            } else {
                textColor = "alphaville";
            }
        }
        return textColor;
    }
    render() {
        const classSpacialPage = this.props.isTeaser ? "banner-jardim" : "";
        if (this.props.bannerList.length > 0 && this.props.upBner) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(classSpacialPage, "main-slider", "has-button", (_banner_module_scss__WEBPACK_IMPORTED_MODULE_10___default().bannerArea)),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                        modules: [
                            swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay,
                            swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination,
                            swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation
                        ],
                        loop: this.props.bannerList.length > 1,
                        allowTouchMove: this.props.bannerList.length > 1,
                        autoplay: {
                            delay: 5000,
                            disableOnInteraction: false
                        },
                        navigation: false,
                        onSwiper: (swiper)=>this.swiperRef(swiper),
                        onSlideChange: ()=>{
                            if (this.state.swiper) {
                                this.setCurrentSlide(this.state.swiper.realIndex);
                            }
                        },
                        children: this.props.bannerList.map((val, idx)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_9___default()("item banner-images", this.setColorDisplaySaibaMais(this.props.colors?.displayColor, this.props.isTeaser)),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_responsive_picture__WEBPACK_IMPORTED_MODULE_6__.Picture, {
                                            sources: [
                                                {
                                                    srcSet: val.ImageMobile,
                                                    media: "(max-width: 768px)"
                                                },
                                                {
                                                    srcSet: val.ImageDesktop
                                                }, 
                                            ]
                                        }),
                                        this.props.isTeaser && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_9___default()((_banner_module_scss__WEBPACK_IMPORTED_MODULE_10___default().bannerBaseContent), this.state.contentTeaser),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: classnames__WEBPACK_IMPORTED_MODULE_9___default()((_banner_module_scss__WEBPACK_IMPORTED_MODULE_10___default().logo), (_banner_module_scss__WEBPACK_IMPORTED_MODULE_10___default().baseLogo), this.state.logoTeaser),
                                                    children: this.props.title
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_10___default().bannerTitleContainer),
                                                    children: [
                                                        this.state.titleTeaser && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_10___default().bannerTitle),
                                                            dangerouslySetInnerHTML: {
                                                                __html: this.state.titleTeaser
                                                            }
                                                        }),
                                                        this.state.subTitleTeaser && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_10___default().bannerSubtitle),
                                                            dangerouslySetInnerHTML: {
                                                                __html: this.state.subTitleTeaser
                                                            }
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_10___default().voceMereceContainer),
                                                            children: this.props.homeContent.slug == "lancamento-teresina-2" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_10___default().voceText),
                                                                        children: "VOC\xca"
                                                                    }),
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_10___default().mereceText),
                                                                        children: "MERECE"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, idx);
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden-xs container-fluid",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "content-info " + this.state.displayColor,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    xs: 12,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "info",
                                                children: [
                                                    this.state.showTexts ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                children: this.state.displayREDevelopment
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                children: this.state.displayTitle
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                children: this.state.displaySubTitle
                                                            })
                                                        ]
                                                    }) : false,
                                                    this.state.showButton ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "btn-banner",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            onClick: (e)=>{
                                                                if (this.state.displayLink[0].indexOf("http") > -1) {
                                                                    new _service_util__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z().goToUrl(this.state.displayLink, "_self", true, e);
                                                                } else {
                                                                    new _service_util__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z().goToUrl(this.state.displayLink, "_self", false, e);
                                                                }
                                                            },
                                                            children: this.state.btnText
                                                        })
                                                    }) : false
                                                ]
                                            })
                                        }),
                                        this.props.bannerList.length > 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "owl-dots",
                                            children: this.props.bannerList.map((val, idx)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: this.state.id != val.Id ? "owl-dot active" : "owl-dot",
                                                    onClick: ()=>this.slideTo(idx + 1),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                                }, idx);
                                            })
                                        }) : false
                                    ]
                                })
                            })
                        })
                    })
                ]
            });
        } else {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-center load-banner",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7___default()), {
                    animation: "border",
                    role: "status",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "sr-only",
                        children: "Loading..."
                    })
                })
            });
        }
    }
}


/***/ })

};
;