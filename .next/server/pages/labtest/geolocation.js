"use strict";
(() => {
var exports = {};
exports.id = 5909;
exports.ids = [5909];
exports.modules = {

/***/ 5883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ geolocation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "react-geolocated"
const external_react_geolocated_namespaceObject = require("react-geolocated");
// EXTERNAL MODULE: ./_share/service/storage.js + 3 modules
var service_storage = __webpack_require__(6008);
;// CONCATENATED MODULE: ./pages/labtest/geolocation.jsx




class Demo extends (external_react_default()).Component {
    constructor(props){
        super(props);
        this.state = {
            estados: []
        };
    }
    async componentDidMount() {
        if (this.props.isGeolocationEnabled) {
            const storage = new service_storage/* default */.Z();
            const states = await storage.getStates(true);
            //console.log('states: ', states);
            this.setState({
                estados: states
            });
        }
    }
    static async getDerivedStateFromProps(props, state) {
        //console.log('geolocation Props: ', props,  state);
        if (props.isGeolocationAvailable && props.isGeolocationEnabled && props.coords != null && state.estados.states.length > 0) {
            const li = state.estados.states.filter(function(value, index, arr) {
                return Math.floor(value.latitude) == Math.floor(props.coords.latitude) && Math.floor(value.longitude) == Math.floor(props.coords.longitude);
            });
            console.log("result found: ", li);
        }
    }
    render() {
        return !this.props.isGeolocationAvailable ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Your browser does not support Geolocation"
        }) : !this.props.isGeolocationEnabled ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Geolocation is not enabled"
        }) : this.props.coords ? /*#__PURE__*/ jsx_runtime_.jsx("table", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                children: "latitude"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                children: this.props.coords.latitude
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                children: "longitude"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                children: this.props.coords.longitude
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                children: "altitude"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                children: this.props.coords.altitude
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                children: "heading"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                children: this.props.coords.heading
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                children: "speed"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                children: this.props.coords.speed
                            })
                        ]
                    })
                ]
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Getting the location data… "
        });
    }
}
/* harmony default export */ const geolocation = ((0,external_react_geolocated_namespaceObject.geolocated)({
    positionOptions: {
        enableHighAccuracy: false
    },
    userDecisionTimeout: 5000
})(Demo));


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [1790,5176], () => (__webpack_exec__(5883)));
module.exports = __webpack_exports__;

})();