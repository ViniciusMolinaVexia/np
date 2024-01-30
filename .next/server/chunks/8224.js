"use strict";
exports.id = 8224;
exports.ids = [8224];
exports.modules = {

/***/ 8224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3685);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var imagesize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9984);
/* harmony import */ var imagesize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(imagesize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1790);




class ImageSize {
    getFileNameByUrl = (url)=>{
        if (url.indexOf("/") !== -1) {
            const parts = url.split("/");
            return parts[parts.length - 1];
        } else {
            return null;
        }
    };
    getFolderByUrl = (url)=>{
        if (url.indexOf("/") !== -1) {
            const parts = url.split("/");
            const ret = parts.slice(0, parts.length - 1).join("/");
            if (ret.indexOf("/") !== 0) {
                return `/${ret}/`;
            } else {
                return `${ret}/`;
            }
        } else {
            return null;
        }
    };
    convertUrltoBlob = (url)=>{
        url = "http://www.alphaville.com.br/be_alphaville/public/uploads/home/cid_alp_image_desktop/graciosa-foto-04-tamanho-1180x350-1-2-3-4.jpeg";
        return fetch(url, {
            mode: "no-cors",
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }).then((resp)=>{
            return resp.blob().then((data)=>{
                return new Promise((resolve, reject)=>{
                    const metadata = {
                        type: data.type
                    };
                    const filename = this.getFileNameByUrl(resp.url);
                    return resolve(new File([
                        data
                    ], filename, metadata));
                });
            });
        });
    };
    getImageSize = async (opt)=>{
        const options = {
            hostname: opt.hostname,
            path: opt.path,
            headers: {
                "Access-Control-Allow-Headers": "X-Requested-With",
                "Access-Control-Allow-Origin": "*"
            }
        };
        return new Promise((resolve, reject)=>{
            var request = http__WEBPACK_IMPORTED_MODULE_1___default().get(options, (response)=>{
                imagesize__WEBPACK_IMPORTED_MODULE_2___default()(response, function(err, result) {
                    resolve(result);
                    request.abort();
                });
            });
        });
    };
    generateImageMetaProps = async (imgUrl, altImg)=>{
        if (!imgUrl) return null;
        imgUrl = imgUrl.startsWith("/") ? imgUrl.replace("//", "/").substring(1) : imgUrl.replace("//", "/");
        const options = {
            hostname: _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_3__/* .HOSTNAME_API_BASE */ .pF,
            path: _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_3__/* .HOSTNAME_API_COMPLEMENT */ .vY + "/" + imgUrl
        };
        const dimensions = await this.getImageSize(options);
        return {
            url: _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_3__/* .ENDPOINT_BASE */ .GU + "/" + imgUrl,
            type: "image/" + dimensions.format,
            width: dimensions.width,
            height: dimensions.height,
            alt: altImg
        };
    };
    getImageSizeAxios = async (url)=>{
        const path = "/static/images/alphaville.jpg";
        const img = "https://www.alphaville.com.br/be_alphaville/public/uploads/home/cid_alp_image_desktop/graciosa-foto-04-tamanho-1180x350-1-2-3-4.jpeg";
        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "X-Requested-With",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,"
        };
        const axiosUrlBase = "https://www.alphaville.com.br"; //'/';
        const axiosUrl = "/be_alphaville/public/uploads/home/cid_alp_image_desktop/graciosa-foto-04-tamanho-1180x350-1-2-3-4.jpeg"; //'/static/images/alphaville.jpg';
        const axiosServer = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
            baseURL: axiosUrlBase,
            headers: headers
        });
        const axiosRes = await axiosServer.get(axiosUrl);
        return axiosRes;
    };
    getImageSizeFronUrl = async (options)=>{
        return new Promise((resolve, reject)=>{
            var img = new Image();
            img.onload = ()=>{
                const retorno = {
                    width: img.width,
                    height: img.height
                };
                resolve(retorno);
            };
            img.src = options.url;
        });
    };
    doCORSRequest = async (options)=>{
        var cors_api_url = "https://cors-anywhere.herokuapp.com/";
        const filename = this.getFileNameByUrl(options.url);
        var x = new XMLHttpRequest();
        x.open(options.method, cors_api_url + options.url);
        x.onload = x.onerror = function() {
            const data = x.response;
            return new Promise((resolve, reject)=>{
                const metadata = {
                    type: "image/jpeg"
                };
                const file = new File([
                    data
                ], filename, metadata);
                let reader = new FileReader();
                reader.readAsArrayBuffer(file);
                reader.onload = function() {
                    console.log("reader.result: ", reader.result);
                };
                reader.onerror = function() {
                    console.log(reader.error);
                };
                return resolve(new File([
                    data
                ], filename, metadata));
            });
        };
        if (/^POST/i.test(options.method)) {
            x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }
        x.send(options.data);
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageSize);


/***/ })

};
;