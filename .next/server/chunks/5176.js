"use strict";
exports.id = 5176;
exports.ids = [5176];
exports.modules = {

/***/ 7483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1790);

class BannerModel {
    constructor(){
        this.Id;
        this.AltDesktop;
        this.AltMobile;
        this.AtmImageAltText;
        this.BannerLots;
        this.BannerTitle;
        this.logoJson;
        this.BannerCategory;
        this.ImageDesktop;
        this.ImageMobile;
        this.Slug;
        this.BtnText;
        this.DisplayColor;
    }
    setAPI(data, isTeaser) {
        if (!data) return this;
        this.Id = data.id;
        this.AltDesktop = data.alt_desktop;
        this.AltMobile = data.alt_mobile;
        this.AtmImageAltText = data.atm_image_alt_text;
        this.BannerLots = data.banner_lots;
        this.BannerTitle = data.banner_title;
        this.BannerCategory = data.banner_type_lote ? data.banner_type_lote.title : "";
        this.ImageDesktop = _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_0__/* .ENDPOINT_BASE */ .GU + "/" + data.image_desktop;
        this.ImageMobile = _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_0__/* .ENDPOINT_BASE */ .GU + "/" + data.image_mobile;
        this.Slug = [
            "lancamento",
            data.slug
        ];
        this.BtnText = "CONHE\xc7A";
        this.DisplayColor = this.setDisplayColor(data.banner_type.id, data.banner_type_lote.id, data.isCampaign || false, isTeaser || false);
        return this;
    }
    setAPICAmpaign(data) {
        this.Id = data.id;
        this.AltDesktop = data.image_alt_text;
        this.AltMobile = data.image_alt_text;
        this.AtmImageAltText = data.image_alt_text;
        this.BannerLots = data.description;
        this.BannerTitle = data.title;
        this.BannerCategory = "";
        this.ImageDesktop = _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_0__/* .ENDPOINT_BASE */ .GU + "/" + data.image_desktop;
        this.ImageMobile = _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_0__/* .ENDPOINT_BASE */ .GU + "/" + data.image_mobile;
        this.Slug = [
            data.link
        ]; //[data.link.replace('https://www.alphaville.com.br/', '')];
        this.BtnText = data.texto_botao;
        this.DisplayColor = this.setDisplayColor(0, 0, true);
        return this;
    }
    setDisplayColor(bannerTypeId, bannerLoteTypeId, isCampaign, isTeaser) {
        let displayColor = "no-shadow";
        if (bannerTypeId == 3 || bannerTypeId == 2) {
            displayColor = "shadow";
        } else if (bannerLoteTypeId == 2 || bannerLoteTypeId == 5) {
            displayColor = isTeaser ? "shadow-teaser-terras" : "shadow-two";
        } else if (bannerLoteTypeId == 3) {
            displayColor = "shadow-jardim";
        } else if (bannerTypeId == 1) {
            displayColor = isTeaser ? "shadow-teaser-empreendimentos" : "shadow-empreendimentos";
        } else if (isCampaign) {
            displayColor = "shadow-campaign";
        }
        return displayColor;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerModel);


/***/ }),

/***/ 1326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1790);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_1__/* .ENDPOINT_BASE */ .GU,
    responseType: "json"
}));


/***/ }),

/***/ 9590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1790);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1326);


class Home {
    getContent = async ()=>{
        const res = await _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(_Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_1__/* .ENDPOINT_HOME */ .dN);
        let homeModel = {};
        if (res.data) {
            homeModel = res.data;
        }
        return homeModel;
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ 4911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1326);
/* harmony import */ var _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1790);


class Provider {
    getStates = async ()=>{
        const res = await _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(_Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_1__/* .ENDPOINT_STATES */ .NA);
        return res.data;
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Provider);


/***/ }),

/***/ 398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1326);
/* harmony import */ var _models_banner_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7483);
/* harmony import */ var _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1790);
/* harmony import */ var _service_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6008);




class Search {
    searchLocations = async (latitude, longitude, term, where)=>{
        latitude = latitude || "-23.5400516";
        longitude = longitude || "-46.3834606";
        where = where || "";
        let urlSearch = _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_2__/* .ENDPOINT_SEARCH_LOCATION */ .YO;
        urlSearch = urlSearch + `?latitude=${latitude}&longitude=${longitude}&search=${term}&orderby=status_obra ASC&where=${where}`;
        return await _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(urlSearch);
    };
    generalSearch = async (latitude, longitude)=>{
        latitude = latitude || "-23.5400516";
        longitude = longitude || "-46.3834606";
        const urlSearch = _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_2__/* .ENDPOINT_SEARCH_LOCATION */ .YO + `?latitude=${latitude}&longitude=${longitude}&search=&orderby=status_obra%20ASC`;
        return await _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(urlSearch);
    };
    searchBanners = async (latitude, longitude, limit, query)=>{
        latitude = latitude || "-23.5400516";
        longitude = longitude || "-46.3834606";
        query = query || "";
        limit = limit || 4;
        let bannerList = [];
        let otherVentures = [];
        let numBanner = limit;
        //Listar banners dando prioridade as campanhas (por padrao limite de banners é 4)
        //Listagem de campanhas
        const storage = new _service_storage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z();
        var homeContent = await storage.getHomeContent();
        if (homeContent.campaings.length > 0) {
            const n = homeContent.campaings.length > limit ? limit : homeContent.campaings.length;
            numBanner = numBanner - n;
            const bannerListCamp = await homeContent.campaings.slice(0, n).map((obj, idx)=>{
                const b = new _models_banner_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z().setAPICAmpaign(obj);
                return b;
            });
            bannerList = bannerListCamp;
        }
        numBanner = limit - bannerList.length;
        //Busca de banners principais destaque=1 | status_obra=1
        const mainBannersList = await this.searchMainBanners(numBanner);
        bannerList = bannerList.concat(mainBannersList);
        numBanner = limit - bannerList.length;
        //Busca outros empreendimentos (otherVentures) | caso ainda falte banners completa com banners de empreendimentos
        let urlSearch = _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_2__/* .ENDPOINT_SEARCH_LOCATION */ .YO;
        urlSearch = urlSearch + `?latitude=${latitude}&longitude=${longitude}%20&${query}&limit=${limit}`;
        const res = await _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(urlSearch);
        if (res.data) {
            if (numBanner > 0) {
                const bannerList2 = await res.data.main_image.slice(0, numBanner).map((obj, idx)=>{
                    const b = new _models_banner_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z().setAPI(obj);
                    return b;
                });
                bannerList = bannerList.concat(bannerList2);
            }
            otherVentures = await res.data.search.slice(2, limit).map((obj, idx)=>{
                return obj;
            });
        }
        return {
            bannerList,
            otherVentures
        };
    };
    searchMainBanners = async (limit)=>{
        let query = "?latitude=1&longitude=1&where=destaque=1%20AND%20status_obra=1&limit=6";
        let urlSearch = _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_2__/* .ENDPOINT_SEARCH_LOCATION */ .YO + query;
        const res = await _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(urlSearch);
        let bannerList = [];
        if (res.data) {
            bannerList = await res.data.main_image.slice(0, limit).map((obj, idx)=>{
                const b = new _models_banner_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z().setAPI(obj);
                return b;
            });
        }
        return bannerList;
    };
    searchPreLoadBanners = async (latitude, longitude, limit, query, campaings)=>{
        latitude = latitude || "-23.5400516";
        longitude = longitude || "-46.3834606";
        query = query || "";
        limit = limit || 4;
        let bannerList = [];
        let otherVentures = [];
        let numBanner = limit;
        //Listagem de campanhas
        if (campaings.length > 0) {
            const n = campaings.length > limit ? limit : campaings.length;
            const bannerListCamp = await campaings.slice(0, n).map((obj, idx)=>{
                const b = new _models_banner_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z().setAPICAmpaign(obj);
                return b;
            });
            bannerList = bannerListCamp;
        }
        numBanner = limit - bannerList.length;
        //Busca de banners principais destaque=1 | status_obra=1
        const mainBannersList = await this.searchMainBanners(numBanner);
        bannerList = bannerList.concat(mainBannersList);
        numBanner = limit - bannerList.length;
        //Busca outros empreendimentos (otherVentures) | caso ainda falte banners completa com banners de empreendimentos
        let urlSearch = _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_2__/* .ENDPOINT_SEARCH_LOCATION */ .YO;
        urlSearch = urlSearch + `?latitude=${latitude}&longitude=${longitude}%20&${query}&limit=${limit}`;
        const res = await _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(urlSearch);
        if (res.data) {
            if (numBanner > 0) {
                const bannerEmpreendimentos = await res.data.main_image.slice(0, numBanner).map((obj, idx)=>{
                    const b = new _models_banner_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z().setAPI(obj);
                    return b;
                });
                bannerList = bannerList.concat(bannerEmpreendimentos);
            }
            otherVentures = await res.data.search.slice(2, limit).map((obj, idx)=>{
                return obj;
            });
        }
        return {
            bannerList,
            otherVentures
        };
    };
    searchLocationsWithoutParameters = async ()=>{
        return await _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(_Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_2__/* .ENDPOINT_SEARCH_LOCATION */ .YO);
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);


/***/ }),

/***/ 6008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Storage)
});

// EXTERNAL MODULE: ./_share/service/provider.js
var service_provider = __webpack_require__(4911);
// EXTERNAL MODULE: ./Envirioment/Envirioment.js
var Envirioment = __webpack_require__(1790);
// EXTERNAL MODULE: ./_share/service/api.js
var api = __webpack_require__(1326);
;// CONCATENATED MODULE: ./_share/models/blog.model.js
class BlogModel {
    constructor(){
        this.Id;
        this.image;
        this.title;
        this.excerpt;
        this.link;
    }
    setAPI(data) {
        this.Id = data.id;
        this.image = data.attachments && data.attachments.lenght ? data.attachments[0].images["post-image-post"].url || data.attachments[0].url : "";
        this.title = data.title;
        this.excerpt = data.excerpt;
        this.link = data.url;
        return this;
    }
}
/* harmony default export */ const blog_model = (BlogModel);

;// CONCATENATED MODULE: ./_share/service/blog.js



class Blog {
    getContent = async (limit)=>{
        let urlSearch = Envirioment/* ENDPOINT_BLOG */.wq + limit;
        const result = await api/* default.get */.Z.get(urlSearch);
        let posts = [];
        if (result.data) {
            posts = await result.data.posts.slice(0, limit).map((obj, idx)=>{
                const b = new blog_model().setAPI(obj);
                return b;
            });
        }
        return posts.slice(0, limit);
    };
}
/* harmony default export */ const blog = (Blog);

// EXTERNAL MODULE: ./_share/service/search.js
var service_search = __webpack_require__(398);
// EXTERNAL MODULE: ./_share/service/home.js
var service_home = __webpack_require__(9590);
;// CONCATENATED MODULE: ./_share/service/testimonials.js


class Testimonials {
    getContent = async (limit)=>{
        let urlSearch = Envirioment/* ENDPOINT_TESTIMONIALS */.$P;
        const result = await api/* default.get */.Z.get(urlSearch);
        let OrderedListTestimonials = [];
        if (result.data) {
            OrderedListTestimonials = result.data.sort(function(a, b) {
                if (a.id > b.id) return 1;
                if (a.id < b.id) return -1;
                return 0;
            });
        }
        return OrderedListTestimonials.slice(0, limit);
    };
}
/* harmony default export */ const service_testimonials = (Testimonials);

;// CONCATENATED MODULE: ./_share/service/storage.js






class Storage {
    set = (id, value)=>{
        sessionStorage.setItem(id, value);
    };
    getInitialStates = async ()=>{
        let txtStates = sessionStorage.getItem(Envirioment/* STATES */.PO);
        let states = JSON.parse(txtStates);
        if (!states) {
            const provider = new service_provider/* default */.Z();
            states = await provider.getStates();
            this.set(Envirioment/* STATES */.PO, JSON.stringify(states));
        }
        return states;
    };
    getStates = async (getGeolocal)=>{
        let txtStates = sessionStorage.getItem(Envirioment/* STATES */.PO);
        let states = JSON.parse(txtStates);
        if (!states) {
            const provider = new service_provider/* default */.Z();
            states = await provider.getStates();
            this.set(Envirioment/* STATES */.PO, JSON.stringify(states));
        }
        const localId = await this.getLocalId(getGeolocal);
        const li = states.filter(function(value, index, arr) {
            return value.id == localId;
        });
        const local = li.length > 0 ? li[0] : null;
        const localTitle = local ? local.title : "S\xe3o Paulo";
        const uf = local ? local.uf : "SP";
        sessionStorage.setItem(Envirioment/* LOCATION_TXT */.$e, localTitle);
        sessionStorage.setItem(Envirioment/* LOCATION_UF */.rn, uf);
        return {
            states,
            localId,
            uf,
            localTitle
        };
    };
    getLocationUf = async ()=>{
        return sessionStorage.getItem(Envirioment/* LOCATION_UF */.rn) ? sessionStorage.getItem(Envirioment/* LOCATION_UF */.rn).toLowerCase() : "sp";
    };
    getLocalId = async (getGeolocal)=>{
        let myLocation = {
            id: 0
        };
        if (getGeolocal) {
            myLocation = await this.getGeolocalization();
        }
        const id = myLocation.id == 0 ? 1 : myLocation.id;
        let localId = sessionStorage.getItem(Envirioment/* LOCATION */.Ct) != null ? sessionStorage.getItem(Envirioment/* LOCATION */.Ct) : id;
        const updateApi = this.getUpdateApi();
        if (updateApi.home) {
            localId = id;
            sessionStorage.setItem(Envirioment/* LOCATION */.Ct, localId);
        } else {
            if (sessionStorage.getItem(Envirioment/* LOCATION */.Ct) == null) sessionStorage.setItem(Envirioment/* LOCATION */.Ct, localId);
        }
        //Para app angular
        if (myLocation.id != 0) {
            localStorage.setItem("myUf", myLocation.uf);
            localStorage.setItem("myUfLong", myLocation.title);
            localStorage.setItem("myLat", myLocation.latitude);
            localStorage.setItem("myLong", myLocation.longitude);
        }
        return localId;
    };
    getLocalById = async (localId)=>{
        sessionStorage.setItem(Envirioment/* LOCATION */.Ct, localId);
        this.setUpdateApi(null, false);
        const locate = await this.getStates(false);
        const li = locate.states.filter(function(value, index, arr) {
            return value.id == localId;
        });
        const local = li.length > 0 ? li[0] : null;
        //Para app angular
        if (local.id != 0) {
            localStorage.setItem("myUf", local.uf);
            localStorage.setItem("myUfLong", local.title);
            localStorage.setItem("myLat", local.latitude);
            localStorage.setItem("myLong", local.longitude);
        }
        return local;
    };
    getTxtLocation = async ()=>{
        return sessionStorage.getItem(Envirioment/* LOCATION_TXT */.$e);
    };
    getSearchByLocation = async (localId, limit)=>{
        const local = await this.getLocalById(localId);
        const searchByLocation = {
            latitude: local.latitude,
            longitude: local.longitude,
            query: "where=destaque=1 AND status_obra > 1",
            limit: limit
        };
        return searchByLocation;
    };
    getBanners = async (localId, limit)=>{
        let searchByLocation = await this.getSearchByLocation(localId, limit);
        const update = this.getUpdateApi();
        let banners = [];
        const txtBanners = sessionStorage.getItem(Envirioment/* BANNERS */.hx);
        if (update.banners || !txtBanners) {
            const search = new service_search/* default */.Z();
            banners = await search.searchBanners(searchByLocation.latitude, searchByLocation.longitude, limit, searchByLocation.query);
            this.setUpdateApi(false, null);
            sessionStorage.setItem(Envirioment/* BANNERS */.hx, JSON.stringify(banners));
        } else {
            banners = JSON.parse(txtBanners);
        }
        return banners;
    };
    getGeneralSearch = async (latitude, longitude)=>{
        let searchResult = {};
        const txtSearchResult = sessionStorage.getItem(Envirioment/* GENERAL_SEARCH */.Pn);
        if (!txtSearchResult) {
            searchResult = await new service_search/* default */.Z().generalSearch(latitude, longitude);
            sessionStorage.setItem(Envirioment/* GENERAL_SEARCH */.Pn, JSON.stringify(searchResult));
        } else {
            searchResult = JSON.parse(txtSearchResult);
        }
        return searchResult;
    };
    setUpdateApi = (banners, home)=>{
        const update = JSON.parse(sessionStorage.getItem(Envirioment/* UPDATE_API */.lE) || '{"banners":true, "home":true}');
        if (banners != null) update.banners = banners;
        if (home != null) update.home = home;
        sessionStorage.setItem(Envirioment/* UPDATE_API */.lE, JSON.stringify(update));
    };
    getUpdateApi = ()=>{
        let txtUpdateApi = sessionStorage.getItem(Envirioment/* UPDATE_API */.lE);
        if (!txtUpdateApi) {
            txtUpdateApi = '{"banners":true, "home":true}';
            this.setUpdateApi(true, true);
        }
        return JSON.parse(txtUpdateApi);
    };
    getHomeContent = async ()=>{
        const home = new service_home/* default */.Z();
        const update = this.getUpdateApi();
        let homeContent = {};
        const txtContent = sessionStorage.getItem(Envirioment/* HOME_CONTENT */.CQ);
        if (update.home || !txtContent) {
            homeContent = await home.getContent();
            sessionStorage.setItem(Envirioment/* HOME_CONTENT */.CQ, JSON.stringify(homeContent));
            this.setUpdateApi(null, false);
        } else {
            homeContent = JSON.parse(txtContent);
        }
        return homeContent;
    };
    getTestimonials = async (limit)=>{
        const testimonials = new service_testimonials();
        let testimonialsContent = {};
        const txtContent = sessionStorage.getItem(Envirioment/* TESTIMONIALS_CONTENT */.Vs);
        if (!txtContent) {
            testimonialsContent = await testimonials.getContent(limit);
            sessionStorage.setItem(Envirioment/* TESTIMONIALS_CONTENT */.Vs, JSON.stringify(testimonialsContent));
        } else {
            testimonialsContent = JSON.parse(txtContent);
        }
        return testimonialsContent;
    };
    getPosts = async (limit)=>{
        const blogService = new blog();
        let postsContent = {};
        const txtContent = sessionStorage.getItem(Envirioment/* BLOG_CONTENT */.qU);
        if (!txtContent) {
            postsContent = await blogService.getContent(limit);
            sessionStorage.setItem(Envirioment/* BLOG_CONTENT */.qU, JSON.stringify(postsContent));
        } else {
            postsContent = JSON.parse(txtContent);
        }
        return postsContent;
    };
    setTargetActivePage = async (target)=>{
        this.set("target-page-active", target);
    };
    getGeolocalization = async ()=>{
        const geo = sessionStorage.getItem(Envirioment/* GEOLOCATION */.De) == "up" ? "up" : true;
        const emps = await this.getInitialStates();
        return new Promise((resolve, reject)=>{
            let myLocation = {
                id: 0
            };
            if (navigator) {
                if ("geolocation" in navigator) {
                    navigator.geolocation.getCurrentPosition(function(position) {
                        if (position.coords != null && emps.length > 0) {
                            const liFoundLocation = emps.filter(function(value, index, arr) {
                                return Math.floor(value.latitude) == Math.floor(position.coords.latitude) && Math.floor(value.longitude) == Math.floor(position.coords.longitude);
                            });
                            if (liFoundLocation.length > 0) {
                                myLocation = liFoundLocation[0];
                                sessionStorage.setItem(Envirioment/* GEOLOCATION */.De, geo);
                                resolve(myLocation);
                            }
                        } else {
                            console.log("sem geolocaliza\xe7\xe3o");
                            sessionStorage.setItem(Envirioment/* GEOLOCATION */.De, false);
                            resolve(myLocation);
                        }
                    }, function(error) {
                        sessionStorage.setItem("geolocation", false);
                        switch(error.code){
                            case error.PERMISSION_DENIED:
                                console.log("User denied the request for Geolocation.");
                                break;
                            case error.POSITION_UNAVAILABLE:
                                console.log("Location information is unavailable.");
                                break;
                            case error.TIMEOUT:
                                console.log("The request to get user location timed out.");
                                break;
                            case error.UNKNOWN_ERROR:
                                console.log("An unknown error occurred.");
                                break;
                        }
                        resolve(myLocation);
                    });
                } else {
                    resolve(myLocation);
                }
            } else {
                resolve(myLocation);
            }
        });
    };
    getEnterprisesForHouseCRM = async ()=>{
        let txtEnterprises = sessionStorage.getItem(Envirioment/* ENTERPRISES */.zZ);
        let enterprises = JSON.parse(txtEnterprises);
        if (!enterprises) {
            enterprises = [];
            const search = new service_search/* default */.Z();
            const allData = await search.searchLocationsWithoutParameters();
            allData.data.search.forEach((data)=>{
                const emp = {
                    cidade: data.empreendimento.cidade,
                    estado: data.uf.title,
                    emprendimento: data.empreendimento.name,
                    codEmpreend: data.empreendimento.id_sua_house,
                    idCv: data.empreendimento.id_cv,
                    descriptionCv: data.empreendimento.descricao_cv
                };
                enterprises.push(emp);
            });
            this.set(Envirioment/* ENTERPRISES */.zZ, JSON.stringify(enterprises));
        }
        return enterprises;
    };
};


/***/ })

};
;