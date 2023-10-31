"use strict";
exports.id = 964;
exports.ids = [964];
exports.modules = {

/***/ 964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./_share/components/alphaMenu/alphaMenu.jsx + 4 modules
var alphaMenu = __webpack_require__(3899);
// EXTERNAL MODULE: ./_share/components/banner/banner.component.jsx
var banner_component = __webpack_require__(5129);
;// CONCATENATED MODULE: ./_share/components/banner/banner-pre-load.component.jsx

class BannerPreLoad extends banner_component/* default */.Z {
}

// EXTERNAL MODULE: ./_share/components/LinkCustom/LinkCustom.component.jsx
var LinkCustom_component = __webpack_require__(7509);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./_share/service/storage.js + 3 modules
var service_storage = __webpack_require__(6008);
// EXTERNAL MODULE: external "react-id-swiper"
var external_react_id_swiper_ = __webpack_require__(4967);
var external_react_id_swiper_default = /*#__PURE__*/__webpack_require__.n(external_react_id_swiper_);
;// CONCATENATED MODULE: ./_share/components/blog/blog.component.jsx






// import './blog.scss';
class Blog extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            swiper: null,
            articles: []
        };
        this.swiperRef = this.swiperRef.bind(this);
    }
    async componentDidMount() {
        const storage = new service_storage/* default */.Z();
        const articles = await storage.getPosts(3);
        this.setState({
            articles
        });
    }
    swiperRef(ref) {
        this.setState({
            swiper: ref
        });
    }
    render() {
        const params = {
            slidesPerView: 3,
            spaceBetween: 10
        };
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: "hidden-md-down area-blog",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                md: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "\xdaltimas do blog"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                md: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_id_swiper_default()), {
                                    ...params,
                                    getSwiper: this.swiperRef,
                                    children: this.state.articles.map((item, objId)=>{
                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                                            className: "item",
                                            children: [
                                                item.image && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "area-blog-image",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: item.image,
                                                        className: "img-responsive",
                                                        alt: item.title
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "area-blog-title",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        children: item.title
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "area-blog-excerpt",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: item.excerpt
                                                        }
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "area-blog-more",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                        md: {
                                                            span: 10,
                                                            offset: 1
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                                    link: item.link,
                                                                    target: "_blank",
                                                                    externalLink: true,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "CONTINUAR LENDO"
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        }, objId);
                                    })
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid area-blog-sombra"
                })
            ]
        });
    }
}

// EXTERNAL MODULE: ./Envirioment/Envirioment.js
var Envirioment = __webpack_require__(1790);
;// CONCATENATED MODULE: ./_share/components/citiesAlpha/cities-alpha.jsx





// import './cities_alpha.scss';
class CitiesAlpha extends external_react_.Component {
    render() {
        if (!this.props.content) {
            return "";
        } else {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "area-cities-alpha",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden-lg-up",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "area-conteudo",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: "cities-title",
                                                children: this.props.content.cid_alp_title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "cities-subtitle",
                                                children: this.props.content.cid_alp_subtitle
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "cities-descricao",
                                                children: this.props.content.cid_alp_description
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                    xs: 6,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                        className: "btn-cities-alpha",
                                                        text: "CONHE\xc7A",
                                                        arrayLink: [
                                                            "experiencia-alpha"
                                                        ],
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "CONHE\xc7A"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "img-cities-alpha",
                                        title: this.props.content.cid_alp_image_alt_text,
                                        alt: this.props.content.cid_alp_image_alt_text,
                                        style: {
                                            backgroundImage: "url(" + Envirioment/* ENDPOINT_BASE */.GU + "/" + this.props.content.cid_alp_image_mobile + ")"
                                        }
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden-md-down",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "area-conceito-cities",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                            xs: 12,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "area-title-sub-cities",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        className: "title",
                                                        children: this.props.content.cid_alp_title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "subtitle",
                                                        children: this.props.content.cid_alp_subtitle
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "img-cities-alpha",
                                                title: this.props.content.cid_alp_image_alt_text,
                                                alt: this.props.content.cid_alp_image_alt_text,
                                                style: {
                                                    backgroundImage: "url(" + Envirioment/* ENDPOINT_BASE */.GU + "/" + this.props.content.cid_alp_image_desktop + ")"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                        xs: 6,
                                                        className: "wrapper-area-conteudo",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "area-conteudo",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "cities-descricao",
                                                                    children: this.props.content.cid_alp_description
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                                    className: "btn-cities-alpha",
                                                                    text: "CONHE\xc7A",
                                                                    arrayLink: [
                                                                        "experiencia-alpha"
                                                                    ],
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "CONHE\xc7A"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
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
}

// EXTERNAL MODULE: ./_share/service/empreendimentoHouseCRM.js + 1 modules
var empreendimentoHouseCRM = __webpack_require__(8372);
// EXTERNAL MODULE: external "react-responsive-picture"
var external_react_responsive_picture_ = __webpack_require__(8290);
;// CONCATENATED MODULE: ./_share/components/experienciaAlpha/experiencaAlpha.component.jsx







// import './experiencialpha.scss';
class ExperienciaAlpha extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            swiper: null
        };
        this.swiperRef = this.swiperRef.bind(this);
    }
    swiperRef(ref) {
        this.setState({
            swiper: ref
        });
    }
    render() {
        if (!this.props.content) {
            return "";
        } else {
            const params = {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                }
            };
            const imagesInsta = [];
            imagesInsta.push({
                image: this.props.content.exp_alp_image1_mobile,
                alt: this.props.content.exp_alp_image1_alt_text,
                title: this.props.content.exp_alp_image1_title
            });
            imagesInsta.push({
                image: this.props.content.exp_alp_image2_mobile,
                alt: this.props.content.exp_alp_image2_alt_text,
                title: this.props.content.exp_alp_image2_title
            });
            imagesInsta.push({
                image: this.props.content.exp_alp_image3_mobile,
                alt: this.props.content.exp_alp_image3_alt_text,
                title: this.props.content.exp_alp_image3_title
            });
            imagesInsta.push({
                image: this.props.content.exp_alp_image4_mobile,
                alt: this.props.content.exp_alp_image4_alt_text,
                title: this.props.content.exp_alp_image4_title
            });
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "area-experiencia-alpha-home",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden-lg-up",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "container-fluid",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                    className: "slider-insta",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_id_swiper_default()), {
                                        ...params,
                                        getSwiper: this.swiperRef,
                                        children: imagesInsta.map((obj, objId)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                    xs: 12,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "dark-expalpha",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: obj.title
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_responsive_picture_.Picture, {
                                                                className: "img-responsive",
                                                                alt: obj.alt,
                                                                sources: [
                                                                    {
                                                                        srcSet: Envirioment/* ENDPOINT_BASE */.GU + "/" + obj.image
                                                                    }
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            }, objId);
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                    className: "fundo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                        xs: 12,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "experiencia-alpha",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    className: "exp-alpha",
                                                    children: this.props.content.exp_alp_title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "txt-experiencia",
                                                    children: this.props.content.exp_alp_description
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "btn-leiamais hide",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        "ui-sref": "ExperienciaAlpha",
                                                        children: "Leia mais"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "hidden-md-down",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                className: "conteudo-expalpha",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                        md: 6,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "text-item",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    className: "title-expalpha",
                                                    children: this.props.content.exp_alp_title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "sub-txtd",
                                                    "ng-bind-html": "prmConteudo.exp_alp_description | TextFilter",
                                                    children: this.props.content.exp_alp_description
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                        md: 6,
                                        className: "np",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "dark-expalpha-coninst",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: this.props.content.exp_alp_image4_title
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                alt: this.props.content.exp_alp_image4_alt_text,
                                                title: this.props.content.exp_alp_image4_alt_text,
                                                className: "big-image-exlpha",
                                                style: {
                                                    backgroundImage: "url(" + Envirioment/* ENDPOINT_BASE */.GU + "/" + this.props.content.exp_alp_image4_desktop + ")"
                                                }
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                        md: 6,
                                        className: "gallery npl",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "area-img-1",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "img-gallery img-1",
                                                    alt: this.props.content.exp_alp_image1_alt_text,
                                                    title: this.props.content.exp_alp_image1_alt_text,
                                                    style: {
                                                        backgroundImage: "url(" + Envirioment/* ENDPOINT_BASE */.GU + "/" + this.props.content.exp_alp_image1_desktop + ")"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "area-img-2",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "img-gallery img-2",
                                                    alt: this.props.content.exp_alp_image2_alt_text,
                                                    title: this.props.content.exp_alp_image2_alt_text,
                                                    style: {
                                                        backgroundImage: "url(" + Envirioment/* ENDPOINT_BASE */.GU + "/" + this.props.content.exp_alp_image2_desktop + ")"
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "dark-expalpha",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: this.props.content.exp_alp_image2_title
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "area-img-3",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "img-gallery img-3",
                                                    alt: this.props.content.exp_alp_image3_alt_text,
                                                    title: this.props.content.exp_alp_image3_alt_text,
                                                    style: {
                                                        backgroundImage: "url(" + Envirioment/* ENDPOINT_BASE */.GU + "/" + this.props.content.exp_alp_image3_desktop + ")"
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "dark-expalpha",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: this.props.content.exp_alp_image3_title
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "tradicao",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                            md: 12,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "history",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        className: "title-expalpha stxtd",
                                                        children: this.props.content.tra_title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "sub-txtd stxtd",
                                                        children: this.props.content.tra_description
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                        className: "btn-expalpha btn-history",
                                                        arrayLink: [
                                                            "experiencia-alpha"
                                                        ],
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "NOSSA HIST\xd3RIA"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                        className: "area-images-tradicao",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                md: 4,
                                                lg: 5,
                                                className: "npl",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    alt: this.props.content.tra_image1_alt_text,
                                                    title: this.props.content.tra_image1_title,
                                                    className: "img-gallery-4",
                                                    style: {
                                                        backgroundImage: "url(" + Envirioment/* ENDPOINT_BASE */.GU + "/" + this.props.content.tra_image1 + ")"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                                md: 8,
                                                lg: 7,
                                                className: "npl",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        alt: this.props.content.tra_image2_alt_text,
                                                        title: this.props.content.tra_image2_title,
                                                        className: "img-6",
                                                        style: {
                                                            backgroundImage: "url(" + Envirioment/* ENDPOINT_BASE */.GU + "/" + this.props.content.tra_image2 + ")"
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "dark-expalpha",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: this.props.content.tra_image2_title
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        alt: this.props.content.tra_image3_alt_text,
                                                        title: this.props.content.tra_image3_title,
                                                        className: "img-7",
                                                        style: {
                                                            backgroundImage: "url(" + Envirioment/* ENDPOINT_BASE */.GU + "/" + this.props.content.tra_image3 + ")"
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "dark-expalpha",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: this.props.content.tra_image3_title
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        alt: this.props.content.tra_image4_alt_text,
                                                        title: this.props.content.tra_image4_title,
                                                        className: "area-img-gallery-5",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "img-gallery-5",
                                                            style: {
                                                                backgroundImage: "url(" + Envirioment/* ENDPOINT_BASE */.GU + "/" + this.props.content.tra_image4 + ")"
                                                            }
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            });
        }
    }
}

// EXTERNAL MODULE: ./_share/service/home.js
var home = __webpack_require__(9590);
// EXTERNAL MODULE: ./_share/service/imageSize.js
var imageSize = __webpack_require__(8224);
// EXTERNAL MODULE: ./_share/layouts/layout-main.jsx + 4 modules
var layout_main = __webpack_require__(4756);
// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(1937);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "react-bootstrap/Col"
var Col_ = __webpack_require__(7511);
var Col_default = /*#__PURE__*/__webpack_require__.n(Col_);
// EXTERNAL MODULE: external "react-bootstrap/Row"
var Row_ = __webpack_require__(8907);
var Row_default = /*#__PURE__*/__webpack_require__.n(Row_);
// EXTERNAL MODULE: ./_share/service/util.js
var util = __webpack_require__(1659);
;// CONCATENATED MODULE: ./_share/components/oferts/oferts.component.jsx











// import './oferts.scss';
class Oferts extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            swiper: null,
            isMobile: false
        };
        this.swiperRef = this.swiperRef.bind(this);
        this.slideTo = this.slideTo.bind(this);
    }
    async componentDidMount() {
        window.outerWidth <= 768 ? this.setState({
            isMobile: true,
            width: window.outerWidth
        }) : this.setState({
            isMobile: false,
            width: window.outerWidth
        });
    }
    swiperRef(ref) {
        this.setState({
            swiper: ref
        });
    }
    slideTo(slide) {
        if (this.state.swiper) this.state.swiper.slideTo(slide);
    }
    getBusca = async (e)=>{
        const uf = await new service_storage/* default */.Z().getLocationUf();
        const hrefArray = [
            "busca",
            uf
        ];
        new util/* default */.Z().goToUrl(hrefArray, "_self", false, e);
    };
    setClassOfBtn = (typeLote)=>{
        let classBtnColor = "btn-color-0";
        switch(typeLote){
            case 1:
            case 4:
                classBtnColor = "btn-color-0";
                break;
            case 2:
            case 5:
                classBtnColor = "btn-color-1";
                break;
            case 3:
                classBtnColor = "btn-color-2";
                break;
            default:
                classBtnColor = "btn-color-0";
                break;
        }
        return classBtnColor;
    };
    render() {
        const params = {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            }
        };
        const htmMobile = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "hidden-lg-up",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Row_default()), {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Col_default()), {
                        xs: 12,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: this.props.prmTitleMobile
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: this.props.prmDescription
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Row_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            width: this.state.width + "px"
                        },
                        children: this.props.prmItems ? /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                            xs: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_id_swiper_default()), {
                                ...params,
                                getSwiper: this.swiperRef,
                                children: this.props.prmItems.map((ofert, ofertId)=>{
                                    const imgBannerMobile = Envirioment/* ENDPOINT_BASE */.GU + "/" + ofert.images_default[0].image_mobile || Envirioment/* ENDPOINT_BASE */.GU + "/" + ofert.images_default[0].image;
                                    const classBtnColor = this.setClassOfBtn(ofert.empreendimento.type_lote);
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "banner-images",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_responsive_picture_.Picture, {
                                                sources: [
                                                    {
                                                        srcSet: imgBannerMobile
                                                    }, 
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: "title-ofetrs",
                                                children: ofert.empreendimento.name
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: ofert.empreendimento.description
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "btn-oferts",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                    className: classBtnColor,
                                                    arrayLink: [
                                                        ofert.type.title.toLowerCase(),
                                                        ofert.empreendimento.slug
                                                    ],
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "CONHE\xc7A"
                                                    })
                                                })
                                            })
                                        ]
                                    }, ofertId);
                                })
                            })
                        }) : ""
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Row_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                        xs: 12,
                        className: "btn-oferts all",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            onClick: (e)=>this.getBusca(e),
                            className: "no-color",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "VER TODOS"
                            })
                        })
                    })
                })
            ]
        });
        const htmlDesktop = /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "hidden-md-down",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container np",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "area-outros-emp-desc",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Row_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                    md: 9,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: "title",
                                                children: this.props.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "sub-title",
                                                children: this.props.content.out_emp_description
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                                    md: 3,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        onClick: ()=>this.getBusca(),
                                        className: "btn-ver-todos",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "VER TODOS"
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "area-outros-emp-carousel",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Row_default()), {
                            children: this.props.prmItems ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                children: this.props.prmItems.map((ofert, ofertId)=>{
                                    const classBtnColor = "btn-oferts " + this.setClassOfBtn(ofert.empreendimento.type_lote);
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Col_default()), {
                                        md: 6,
                                        className: "item-carousel",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_id_swiper_default()), {
                                                ...params,
                                                getSwiper: this.swiperRef,
                                                children: ofert.images_default.map((val, idx)=>{
                                                    const imgBanner = val.image_desktop || val.image;
                                                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        style: {
                                                            width: 580 + "px",
                                                            height: 430 + "px",
                                                            backgroundImage: "url(" + Envirioment/* ENDPOINT_BASE */.GU + "/" + imgBanner + ")",
                                                            backgroundSize: "cover"
                                                        }
                                                    }, idx);
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "info-oferts",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "title-oferts",
                                                        children: ofert.empreendimento.name
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "sub-conteudo text-center",
                                                        children: ofert.empreendimento.description
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                        className: classBtnColor,
                                                        arrayLink: [
                                                            ofert.type.title.toLowerCase(),
                                                            ofert.empreendimento.slug
                                                        ],
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "CONHE\xc7A"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }, ofertId);
                                })
                            }) : ""
                        })
                    })
                ]
            })
        });
        let sectionClasses = [
            "info-oferts",
            "np"
        ];
        if (this.props.prmContainer) sectionClasses.push("container");
        if (this.props.prmNostand) sectionClasses.push("no-stand");
        if (this.props.prmItems && this.props.prmItems.length > this.props.prmMin) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: sectionClasses.join(" "),
                children: [
                    htmMobile,
                    htmlDesktop
                ]
            });
        } else {
            return /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "info-oferts-null np",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Row_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                        md: 12
                    })
                })
            });
        }
    }
}

// EXTERNAL MODULE: ./_share/service/provider.js
var service_provider = __webpack_require__(4911);
;// CONCATENATED MODULE: ./_share/components/cookiesPolicy/cookiesPolicy.component.jsx






class CookiePolicy extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            showCookiesPolicy: false
        };
    }
    async componentDidMount() {
        const cookie = new util/* default */.Z().getCookie(Envirioment/* COOKIES_POLICY */.BT);
        this.setState({
            showCookiesPolicy: cookie ? false : true
        });
    }
    setBodyPadding = ()=>{
    //console.log(screen.width);
    // if (screen.width > 768) {
    //   document.querySelector('body').style.paddingTop = "50px";
    // } else if (screen.width > 480) {
    //   document.querySelector('body').style.paddingTop = "54px";
    // } else {
    //   document.querySelector('body').style.paddingTop = "135px";
    // }
    };
    setCookie = ()=>{
        this.setState({
            showCookiesPolicy: false
        });
        new util/* default */.Z().setCookie(Envirioment/* COOKIES_POLICY */.BT, "aceito", 100000);
        document.querySelector("body").style.paddingTop = "0";
        window.scrollBy(0, 1);
    };
    render() {
        if (!this.state.showCookiesPolicy) {
            return "";
        } else {
            this.setBodyPadding();
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "cookies-policy",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                md: 9,
                                className: "cookies-policy__description",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Utilizamos cookies e outras tecnologias para lhe oferecer uma experi\xeancia de navega\xe7\xe3o melhor, analisar o tr\xe1fego do site e personalizar o conte\xfado, de acordo com a nossa ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                            text: "Pol\xedtica de Privacidade",
                                            arrayLink: [
                                                "politica-de-privacidade"
                                            ]
                                        }),
                                        " e ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                            text: "Pol\xedtica de Cookies",
                                            arrayLink: [
                                                "politica-de-cookies"
                                            ]
                                        }),
                                        ". Ao continuar navegando, voc\xea concorda com estas condi\xe7\xf5es."
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                md: 3,
                                className: "cookies-policy__wrapper-button",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                    variant: "dark",
                                    size: "sm",
                                    onClick: this.setCookie,
                                    children: "PROSSEGUIR"
                                })
                            })
                        ]
                    })
                })
            });
        }
    }
}

// EXTERNAL MODULE: external "react-bootstrap/Modal"
var Modal_ = __webpack_require__(9306);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
// EXTERNAL MODULE: ./_share/components/navMenu/navMenu.jsx + 7 modules
var navMenu = __webpack_require__(6635);
;// CONCATENATED MODULE: ./_share/components/search/search.component.jsx








// import './search.scss';
class Busca extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            searchField: "",
            showModal: false,
            menuOpenSearch: true
        };
    }
    searchChange = async (e)=>{
        if (e) {
            this.setState({
                searchField: e.target.value
            });
            if (e.which === 13) {
                this.searchAction(e);
            }
        }
    };
    searchAction = async (e)=>{
        if (e.which === 13 || e.type == "click") {
            if (this.state.searchField.length > 1) {
                const hrefArray = [
                    "busca",
                    this.state.searchField
                ];
                new util/* default */.Z().goToUrl(hrefArray, "_self", false, e);
            }
        }
    };
    openSearch = async (evt)=>{
        if (evt) evt.preventDefault();
        window.scrollTo(0, 0);
        this.setState({
            showModal: !this.state.showModal,
            menuOpenSearch: true
        });
    };
    setMenuOpenSearch = ()=>{
        this.setState({
            menuOpenSearch: false
        });
    };
    setCloseModal = ()=>{
        window.scrollTo(0, 0);
        this.setState({
            showModal: false
        });
    };
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "hidden-lg-up",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                id: "open-search",
                                onClick: this.openSearch,
                                "ng-click": "menu.openBusca();goTop();menu.setFocus();",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "area-busca",
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
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                    xs: 12,
                                    className: "portal",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "portal-cliente",
                                            children: "J\xe1 \xe9 cliente?"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "col-xs-12 acesse-portal",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(LinkCustom_component/* default */.Z, {
                                                text: "ACESSE O PORTAL CLIENTE ALPHA",
                                                link: "https://www.portalclientealpha.com.br/Account/LogIn?ReturnUrl=%2FHome%2FUnauthorized",
                                                target: "_self",
                                                externalLink: true
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "icon-shape-mobile"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "insta-alpha",
                                        children: " Selecionada do concurso #olharalpha"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "hidden-md-down",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "img-background-busca",
                        alt: "Imagem Busca",
                        title: "Busca",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "title-busca pull-left",
                                        children: "Encontre seu empreendimento"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "content-search",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "text",
                                                className: "pull-right",
                                                value: this.state.searchField,
                                                onChange: this.searchChange,
                                                onKeyPress: this.searchAction,
                                                placeholder: "Digite o nome do empreendimento ou estado que deseja"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "btn-search",
                                                onClick: this.searchAction,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "icon-lupa"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()), {
                    show: this.state.showModal,
                    onHide: this.openSearch,
                    backdrop: true,
                    animation: false,
                    className: "modal-search",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(CookiePolicy, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(navMenu/* default */.Z, {
                            openSearch: this.state.menuOpenSearch,
                            setMenuOpenSearch: this.setMenuOpenSearch,
                            setCloseModal: this.setCloseModal
                        })
                    ]
                })
            ]
        });
    }
}

// EXTERNAL MODULE: ./_share/service/search.js
var service_search = __webpack_require__(398);
;// CONCATENATED MODULE: ./_share/components/testimonials/testimonials.component.jsx







// import './testimonials.scss';
class Testimonials extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            testimonials: [],
            swiper: null,
            isMobile: false,
            width: 0
        };
        this.swiperRef = this.swiperRef.bind(this);
        this.slideTo = this.slideTo.bind(this);
    }
    async componentDidMount() {
        const storage = new service_storage/* default */.Z();
        const testimonials = await storage.getTestimonials(4);
        window.outerWidth <= 768 ? this.setState({
            isMobile: true,
            testimonials,
            width: window.outerWidth
        }) : this.setState({
            isMobile: false,
            testimonials,
            width: window.outerWidth
        });
    }
    swiperRef(ref) {
        this.setState({
            swiper: ref
        });
    }
    slideTo(slide) {
        if (this.state.swiper) this.state.swiper.slideTo(slide);
    }
    render() {
        const params = {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            }
        };
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    className: "hidden-lg-up area-testimonials-mob hide",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                    xs: 12,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "title-testimonials",
                                        children: "Depoimentos"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                    xs: 12,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        style: {
                                            width: this.state.width + "px"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_id_swiper_default()), {
                                            ...params,
                                            getSwiper: this.swiperRef,
                                            children: this.state.testimonials.map((item, objId)=>{
                                                const classTextoLink = item.type_id == 1 ? "house-group-0" : item.type_id == 2 ? "house-group-1" : "house-group-2";
                                                if (this.state.isMobile) {}
                                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "area-avatar-image",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_responsive_picture_.Picture, {
                                                                alt: item.name,
                                                                title: item.name,
                                                                sources: [
                                                                    {
                                                                        srcSet: Envirioment/* ENDPOINT_BASE */.GU + "/" + item.avatar
                                                                    }
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                                            className: "avatar-gender",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "morador(a) do"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: item.link_empreendimento,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                        className: classTextoLink + " avatar-local",
                                                                        children: item.texto_link_empreendimento
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, objId);
                                            })
                                        })
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    className: "hidden-md-down area-testimonials",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                    md: 12,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Depoimentos"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                children: this.state.testimonials.map((avatar, avatarId)=>{
                                    const classTextoLink = avatar.type_id == 1 ? "house-group-0" : avatar.type_id == 2 ? "house-group-1" : "house-group-2";
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                        md: 3,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "area-avatar-image",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "img-responsive",
                                                    src: Envirioment/* ENDPOINT_BASE */.GU + "/" + avatar.avatar,
                                                    alt: avatar.name,
                                                    title: avatar.name
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "area-avatar-name",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    children: avatar.name
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "area-avatar-house",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "morador(a) do"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: avatar.link_empreendimento,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                className: classTextoLink,
                                                                children: avatar.texto_link_empreendimento
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "area-avatar-testimonial",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: avatar.description
                                                })
                                            })
                                        ]
                                    }, avatarId);
                                })
                            })
                        ]
                    })
                })
            ]
        });
    }
}

;// CONCATENATED MODULE: ./pages/index.jsx



















class Home extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            banner: this.props.banner,
            homeContent: {},
            otherVentures: this.props.otherVentures,
            location: this.props.location,
            isMobile: false,
            image: {},
            ofertsTitle: "Outros empreendimentos",
            showAlphaMenu: false,
            brStates: [],
            myLocation: {},
            upBner: false
        };
    }
    static async getInitialProps(ctx) {
        const empreendimentosjson = empreendimentoHouseCRM/* default.obterEmpreendimentosJson */.Z.obterEmpreendimentosJson();
        let banner = [];
        let otherVentures = [];
        let homeContent = {};
        let metaProps = {};
        const isServer = "undefined" === "undefined";
        if (isServer) {
            const homeService = new home/* default */.Z();
            homeContent = await homeService.getContent();
            let mainImg = {
                url: "https://www.alphaville.com.br/be_alphaville/public/uploads/home/cid_alp_image_desktop/graciosa-foto-04-tamanho-1180x350-1-2-3-4.jpeg",
                type: "image/jpeg",
                width: 1180,
                height: 350,
                alt: "Alphaville"
            };
            let img1 = mainImg;
            let img2 = mainImg;
            let img3 = mainImg;
            let img4 = mainImg;
            // try {
            //   const imgSize = new ImageSize();
            //   let imgUrl = homeContent.cid_alp_image_desktop || homeContent.cid_alp_image_mobile;
            //   mainImg = await imgSize.generateImageMetaProps(imgUrl, homeContent.cid_alp_image_alt_text);
            //   let imgUrl1 = homeContent.exp_alp_image1_desktop || homeContent.exp_alp_image1_mobile;
            //   img1 = await imgSize.generateImageMetaProps(imgUrl1, homeContent.exp_alp_image1_title);
            //   let imgUrl2 = homeContent.exp_alp_image2_desktop || homeContent.exp_alp_image2_mobile;
            //   img2 = await imgSize.generateImageMetaProps(imgUrl2, homeContent.exp_alp_image2_title);
            //   let imgUrl3 = homeContent.exp_alp_image3_desktop || homeContent.exp_alp_image3_mobile;
            //   img3 = await imgSize.generateImageMetaProps(imgUrl3, homeContent.exp_alp_image3_title);
            //   let imgUrl4 = homeContent.exp_alp_image4_desktop || homeContent.exp_alp_image4_mobile;
            //   img4 = await imgSize.generateImageMetaProps(imgUrl4, homeContent.exp_alp_image4_title);
            // } catch (error) {
            //   console.log('ImageSize', error);
            // }
            metaProps = {
                images: [
                    mainImg,
                    img1,
                    img2,
                    img3,
                    img4
                ],
                title: homeContent.meta_title,
                description: homeContent.meta_description,
                url: Envirioment/* URL_DOMAIN */.V3 + "/home"
            };
            const search = new service_search/* default */.Z();
            const searchByLocation = {
                latitude: -23.5431786,
                longitude: -46.6291845,
                query: "where=destaque=1 AND status_obra > 1",
                limit: 4
            };
            const contentBanners = await search.searchPreLoadBanners(searchByLocation.latitude, searchByLocation.longitude, searchByLocation.limit, searchByLocation.query, homeContent.campaings);
            banner = contentBanners.bannerList;
            otherVentures = contentBanners.otherVentures;
        }
        const provider = new service_provider/* default */.Z();
        const brStates = await provider.getStates();
        const location = {
            states: brStates,
            localId: 1,
            uf: "SP",
            localTitle: "S\xe3o Paulo"
        };
        return {
            homeContent,
            metaProps,
            banner,
            isServer,
            empreendimentosjson,
            otherVentures,
            location
        };
    }
    static async getDerivedStateFromProps(props, state) {
        state.homeContent = props.homeContent;
        return state;
    }
    async componentDidMount() {
        const storage = new service_storage/* default */.Z();
        const isMobile = window.outerWidth <= 768;
        let homeContent = {};
        setTimeout(()=>{
            this.setState({
                showAlphaMenu: true
            });
        }, 400);
        if (!this.props.isServer) {
            homeContent = await storage.getHomeContent();
            this.setState({
                homeContent: homeContent
            });
        }
        storage.setUpdateApi(null, false);
        //const localId = await storage.getLocalId(false);
        //const contentBanners = await storage.getBanners(localId, 4);
        const locate = await storage.getStates(false);
        this.setState({
            //banner: contentBanners.bannerList,
            //otherVentures: contentBanners.otherVentures,
            location: locate,
            isMobile: isMobile,
            upBner: true
        });
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout_main/* default */.Z, {
            metaProps: this.props.metaProps,
            url: "/",
            active: "home",
            location: this.state.location,
            outContainer: this.state.upBner ? /*#__PURE__*/ jsx_runtime_.jsx(banner_component/* default */.Z, {
                bannerList: this.state.banner,
                upBner: this.state.upBner
            }) : /*#__PURE__*/ jsx_runtime_.jsx(BannerPreLoad, {
                bannerList: this.state.banner,
                upBner: true
            }),
            outBottomContainer: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Busca, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(ExperienciaAlpha, {
                        content: this.state.homeContent
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Testimonials, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Blog, {})
                ]
            }),
            children: [
                this.state.showAlphaMenu ? /*#__PURE__*/ jsx_runtime_.jsx(alphaMenu/* default */.Z, {
                    displayColor: this.state.homeContent.displayColor,
                    isInternal: false,
                    empreendimentosjson: this.props.empreendimentosjson
                }) : "",
                /*#__PURE__*/ jsx_runtime_.jsx(CitiesAlpha, {
                    content: this.state.homeContent
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Oferts, {
                    content: this.state.homeContent,
                    prmContainer: false,
                    prmNostand: false,
                    prmMin: "0",
                    prmItems: this.state.otherVentures,
                    prmTitleMobile: "Outros empreendimentos",
                    prmSubTitleMobile: "",
                    title: this.state.ofertsTitle,
                    prmDescription: "Os empreendimentos da Alphaville s\xe3o desenvolvidos para oferecer conforto, seguran\xe7a e comodidade para sua fam\xedlia."
                })
            ]
        });
    }
}
/* harmony default export */ const pages = (Home);


/***/ })

};
;