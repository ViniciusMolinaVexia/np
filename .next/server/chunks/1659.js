"use strict";
exports.id = 1659;
exports.ids = [1659];
exports.modules = {

/***/ 1659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1790);


class Utils {
    toSlug(text) {
        if (!text) {
            return "";
        } else {
            return text.toLowerCase().replace(/[àÀáÁâÂãäÄÅåª]+/g, "a") // Special Characters #1
            .replace(/[èÈéÉêÊëË]+/g, "e") // Special Characters #2
            .replace(/[ìÌíÍîÎïÏ]+/g, "i") // Special Characters #3
            .replace(/[òÒóÓôÔõÕöÖº]+/g, "o") // Special Characters #4
            .replace(/[ùÙúÚûÛüÜ]+/g, "u") // Special Characters #5
            .replace(/[ýÝÿŸ]+/g, "y") // Special Characters #6
            .replace(/[ñÑ]+/g, "n") // Special Characters #7
            .replace(/[çÇ]+/g, "c") // Special Characters #8
            .replace(/[ß]+/g, "ss") // Special Characters #9
            .replace(/[Ææ]+/g, "ae") // Special Characters #10
            .replace(/[Øøœ]+/g, "oe") // Special Characters #11
            .replace(/[%]+/g, "pct") // Special Characters #12
            .replace(/[,]+/g, "-") // Replace Comma with -
            .replace(/\s+/g, "-") // Replace spaces with -
            .replace(/[^\w\-]+/g, "") // Remove all non-word chars
            .replace(/\-\-+/g, "-") // Replace multiple - with single -
            .replace(/^-+/, "") // Trim - from start of text
            .replace(/-+$/, ""); // Trim - from end of text
        }
    }
    getLabelFromChildren(children) {
        let label = "";
        react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, (child)=>{
            if (typeof child === "string") {
                label += child;
            }
        });
        return label;
    }
    goToUrl(array, target, externalLink, event) {
        if (event) event.preventDefault();
        array = array ? array : [];
        const href = externalLink ? array.join("/") : "/" + array.join("/");
        if (_Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_1__/* .URL_DOMAIN.length */ .V3.length > 0 && !externalLink) {
            window.location = _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_1__/* .URL_DOMAIN */ .V3 + href;
        } else {
            window.open(href, target);
        }
    }
    foneMask = (value)=>{
        let v = value;
        if (v.length >= 15) {
            v = v.substring(0, 15);
        }
        v = v.replace(/\D/g, ""); //Remove tudo o que não é número
        v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
        v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
        return v;
    };
    splitPhoneDdd = (phone)=>{
        let ddd = "";
        let tel = "";
        phone = this.foneMask(phone);
        if (phone.length >= 14) {
            ddd = phone[1] + phone[2];
            tel = phone.substring(5, phone.length);
        }
        return {
            ddd,
            phone: tel
        };
    };
    validateEmail = (email)=>{
        let error = null;
        if (!email) {
            error = "required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            error = "invalid"; //'Invalid email address';
        }
        return error;
    };
    validateName = (name)=>{
        let error = null;
        if (!name) {
            error = "required";
        } else {
            if (name.split(" ").length < 1) {
                error = "invalid";
            }
        }
        return error;
    };
    validateCheckbox = (value)=>{
        let error = null;
        if (!value) {
            error = "required";
        } else {
            if (value.length < 1) {
                error = "invalid-checkbox";
            }
        }
        return error;
    };
    validateTel = (tel, cellphone = false)=>{
        let error = null;
        const digits = cellphone ? 15 : 14;
        if (!tel) {
            error = "required";
        } else if (tel.length >= digits) {
            if (!/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/g.test(this.foneMask(tel))) error = "invalid";
        } else if (tel.length < digits) {
            error = "invalid";
        }
        return error;
    };
    validateMsg = (msg)=>{
        let error = null;
        if (!msg) {
            error = "required";
        }
        return error;
    };
    validateState = (state)=>{
        let error = null;
        if (!state) {
            error = "required";
        }
        return error;
    };
    validateCity = (city)=>{
        let error = null;
        if (!city) {
            error = "required";
        }
        return error;
    };
    setCookie = (cname, cvalue, exdays)=>{
        var d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };
    getCookie = (cname)=>{
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");
        for(var i = 0; i < ca.length; i++){
            var c = ca[i];
            while(c.charAt(0) == " "){
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    setCookieByminutes = (cname, cvalue, exminutes)=>{
        var d = new Date();
        // d.setTime(d.getTime() + (exminutes * 1000));
        d.setMinutes(d.getMinutes() + exminutes);
        // var expires = 'expires=' + d.toString();
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
    };
    getImgDimensions = (url)=>{
        if (!url || url == undefined) return null;
        let w = "1280";
        let h = "350";
        const arrayUrl = url.split(".");
        const extension = arrayUrl[arrayUrl.length - 1];
        return {
            w,
            h,
            extension
        };
    };
    changeTitleMetaProps = (metaProps, title, success)=>{
        const partes = metaProps?.title?.split(" - ");
        let newString = "";
        if (success) {
            if (typeof partes !== "undefined" && partes.length > 0 && typeof partes[0] !== "undefined") {
                newString = partes[0] + " - " + title + " - " + "Agradecimento";
                console.log(newString);
            } else {
                console.log("partes[0] does not exist");
            }
        } else {
            if (typeof partes !== "undefined" && partes.length > 0 && typeof partes[0] !== "undefined") {
                newString = partes[0] + " - " + title;
            } else {
                console.log("partes[0] does not exist");
            }
        }
        metaProps.title = newString;
        return metaProps;
    };
    isTeaserRedirect = (param)=>{
        const arrayUtmContent = [
            "dom_pedro_I",
            "romeu_tortima",
            "dr_moraes_sales_centro",
            "dr_moraes_sales_shop",
            "iguatemi_shop",
            "iguatemi_paineiras",
            "taquaral",
            "leroy_merlin",
            "stand_de_vendas",
            "ceara"
        ];
        return arrayUtmContent.some((item)=>item == param);
    };
    getParameterByName = (name, url)=>{
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return "";
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Utils);


/***/ })

};
;