"use strict";
exports.id = 3899;
exports.ids = [3899];
exports.modules = {

/***/ 3899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ alphaMenu)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: ./_share/service/storage.js + 3 modules
var service_storage = __webpack_require__(6008);
// EXTERNAL MODULE: ./_share/service/util.js
var service_util = __webpack_require__(1659);
// EXTERNAL MODULE: ./_share/service/enterprisesCRM.js
var enterprisesCRM = __webpack_require__(4434);
// EXTERNAL MODULE: ./_share/components/rdStation/sendRdstation.jsx
var sendRdstation = __webpack_require__(3112);
// EXTERNAL MODULE: ./_share/service/rdstation.service.js
var rdstation_service = __webpack_require__(4562);
;// CONCATENATED MODULE: ./_share/components/modalForm/modalEmail.component.jsx










class ModalEmail extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            idCv: "",
            descriptionCv: ""
        };
        this.enterprisesCRM = new enterprisesCRM/* default */.Z();
    }
    isMounted = false;
    async componentDidMount() {
        this.isMounted = true;
        const storage = new service_storage/* default */.Z();
        const enterprises = await storage.getEnterprisesForHouseCRM();
        this.setState({
            enterprises
        });
    }
    componentWillUnmount() {
        this.isMounted = false;
    }
    sandDataLayer = ()=>{
        if (dataLayer) {
            dataLayer.push({
                event: "novoLead",
                ec: "e-mail",
                ea: "click",
                el: "enviar"
            });
        }
        ;
    };
    handleCity(nomeEstado, event) {
        const nomeCidade = event.target.options[event.target.options.selectedIndex];
        const cv = this.enterprisesCRM.getEnterprise(this.state.enterprises, nomeEstado, nomeCidade.label);
        this.setState({
            idCv: cv.idCv,
            descriptionCv: cv.descriptionCv
        });
    }
    fillRdStation(url, values) {
        values.CodEmpreendimento = this.state.idCv;
        values.NomeEmpreendimento = this.state.descriptionCv;
        const sendRd = new sendRdstation/* default */.Z();
        sendRd.fillRdStation(url, values, "home_email.form");
    }
    sendRdStation = async ()=>{
        const sendRd = new sendRdstation/* default */.Z();
        sendRd.sendRdStation();
    };
    render() {
        if (this.props.show) {
            const sendRd = new sendRdstation/* default */.Z();
            sendRd.fillRdStation(window.location.pathname, {}, "home_email.form");
        }
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Modal, {
            ...this.props,
            className: "modal-form area-modal",
            "aria-labelledby": "contained-modal-title-vcenter",
            centered: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Modal.Header, {
                    closeButton: true,
                    className: "modal-form__header",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "modal-form__header-content",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "icon-logo"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "modal-form__wrapper-title",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "modal-form__icon modal-form__icon--carta"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "modal-title",
                                        children: "Fale Conosco"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
                    initialValues: {
                        name: "",
                        email: "",
                        tel: "",
                        state: "",
                        city: "",
                        msg: "",
                        CodEmpreendimento: "",
                        NomeEmpreendimento: "",
                        sendSuccess: null,
                        checked: []
                    },
                    validate: (values)=>{
                        const errors = {};
                        const util = new service_util/* default */.Z();
                        if (util.validateName(values.name)) errors.name = util.validateName(values.name);
                        if (util.validateEmail(values.email)) errors.email = util.validateEmail(values.email);
                        if (util.validateTel(values.tel)) errors.tel = util.validateTel(values.tel);
                        if (util.validateState(values.state)) errors.state = util.validateState(values.state);
                        if (util.validateCity(values.city)) errors.city = util.validateCity(values.city);
                        if (util.validateMsg(values.msg)) errors.msg = util.validateMsg(values.msg);
                        if (util.validateCheckbox(values.checked)) errors.checked = util.validateCheckbox(values.checked);
                        const arrayErros = Object.values(errors);
                        if (arrayErros.length == 0) {
                            this.fillRdStation(window.location.pathname, values);
                        }
                        return errors;
                    },
                    onSubmit: (values, { setSubmitting  })=>{
                        setTimeout(()=>{
                            const empHouseCRM = this.enterprisesCRM.getEnterprise(this.state.enterprises, values.state, values.city);
                            values.CodEmpreendimento = empHouseCRM.idCv;
                            values.NomeEmpreendimento = empHouseCRM.descriptionCv;
                            const phone = new service_util/* default */.Z().splitPhoneDdd(values.tel);
                            const msgForm = "Home E-mail";
                            const empTitle = `Empreendimento: ${empHouseCRM.emprendimento}.`;
                            const stateAndCity = `Estado: ${values.state} - Cidade: ${values.city}`;
                            const concordo = values.checked.length > 0 ? "Li e concordo com a Pol\xedtica de Privacidade, Pol\xedtica de Cookies e Termo de Uso da Alphaville." : "";
                            const msg = `Form: ${msgForm}. ${empTitle}
                          Preferência de Contato: E-mail.
                          Mensagem: ${values.msg}.
                          ${stateAndCity}.`;
                            try {
                                let codemp = 0;
                                if (empHouseCRM && empHouseCRM.codEmpreend) {
                                    codemp = parseInt(empHouseCRM.codEmpreend);
                                }
                                const sendRd = new rdstation_service/* default */.Z();
                                sendRd.sendApiRdStation(values.name, values.email, phone.ddd.replace(/\D/g, ""), phone.phone.replace(/\D/g, ""), values.CodEmpreendimento, values.NomeEmpreendimento, codemp, empTitle, values.state, values.city, values.msg, "home_email.form", concordo).then((res)=>{
                                    values.sendSuccess = res.success;
                                    if (res.success) {
                                        window.dataLayer.push({
                                            event: "novoLead",
                                            ec: "whatsapp",
                                            ea: "envio",
                                            el: "sucesso"
                                        });
                                    } else {
                                        window.dataLayer.push({
                                            event: "novoLead",
                                            ec: "whatsapp",
                                            ea: "envio",
                                            el: "erro"
                                        });
                                    }
                                    setTimeout(()=>{
                                        this.props.onHide();
                                    }, 5000);
                                    setSubmitting(false);
                                }); //fim rdstation then
                            // const returnHc = hc_envia_mensagem(
                            //   codemp,
                            //   values.name,
                            //   values.email,
                            //   phone.ddd,
                            //   phone.phone,
                            //   msg
                            // );
                            // const returnSuaHouse = JSON.parse(returnHc);
                            } catch (e) {
                                console.error("erro ao enviar api", e);
                                values.sendSuccess = false;
                            }
                        }, 500);
                    },
                    children: ({ values , errors , touched , handleChange , handleBlur , handleSubmit , isSubmitting  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            id: "form-modal-email",
                            name: "modalEmail.form",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Modal.Body, {
                                    className: "modal-form__body",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                            className: values.sendSuccess == null ? "" : " hide",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                md: {
                                                    span: 10,
                                                    offset: 1
                                                },
                                                className: "descricao-modal",
                                                children: "Preencha os campos abaixo que entraremos em contato por e-mail"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                            className: values.sendSuccess == null ? "" : " hide",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                                md: {
                                                    span: 10,
                                                    offset: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                        controlId: "formGroupNome",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                                className: "title-input",
                                                                children: "Nome"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                                type: "text",
                                                                name: "name",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                value: values.name,
                                                                placeholder: "Nome completo",
                                                                className: "input-modal-email" + (errors.name && touched.name ? " " + errors.name : "")
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                        controlId: "formGroupEmail",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                                className: "title-input",
                                                                children: "E-mail"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                                type: "email",
                                                                name: "email",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                value: values.email,
                                                                placeholder: "E-mail",
                                                                className: "input-modal-email" + (errors.email && touched.email ? " " + errors.email : "")
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                        controlId: "formGroupTel",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                                className: "title-input",
                                                                children: "Telefone"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                                type: "text",
                                                                name: "tel",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                value: new service_util/* default */.Z().foneMask(values.tel),
                                                                placeholder: "Telefone",
                                                                className: "input-modal-email" + (errors.tel && touched.tel ? " " + errors.tel : "")
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                        controlId: "formGroupState",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                                className: "title-input",
                                                                children: "Estado"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Control, {
                                                                as: "select",
                                                                name: "state",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                value: values.state,
                                                                className: "input-modal-email" + (errors.state && touched.state ? " " + errors.state : ""),
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                        hidden: true,
                                                                        children: "Selecione o estado"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                        disabled: "disabled",
                                                                        default: true,
                                                                        children: " * Selecione o estado *"
                                                                    }),
                                                                    this.enterprisesCRM.listEnterprises(this.state.enterprises).map((estado)=>{
                                                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("option", {
                                                                            value: estado,
                                                                            children: [
                                                                                " ",
                                                                                estado
                                                                            ]
                                                                        }, estado);
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                        controlId: "formGroupCity",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                                className: "title-input",
                                                                children: "Cidade"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Control, {
                                                                as: "select",
                                                                name: "city",
                                                                onChange: (e)=>{
                                                                    handleChange(e);
                                                                    this.handleCity(values.state, e);
                                                                },
                                                                onBlur: handleBlur,
                                                                value: values.city,
                                                                placeholder: "Cidade",
                                                                className: "input-modal-email" + (errors.city && touched.city ? " " + errors.city : ""),
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                        hidden: true,
                                                                        children: "Selecione a cidade"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                        disabled: "disabled",
                                                                        default: true,
                                                                        children: " * Selecione a cidade *"
                                                                    }),
                                                                    this.enterprisesCRM.listCities(this.state.enterprises, values.state).map((cidade)=>{
                                                                        return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: cidade,
                                                                            children: cidade
                                                                        }, cidade);
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                        controlId: "formGroupMsg",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                                className: "title-input",
                                                                children: "Mensagem"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                                as: "textarea",
                                                                type: "text",
                                                                name: "msg",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                value: values.msg,
                                                                placeholder: "Mensagem",
                                                                className: errors.msg && touched.msg ? errors.msg : ""
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
                                                        id: "Cod-Empreendimento",
                                                        name: "Cod-Empreendimento",
                                                        type: "hidden",
                                                        value: this.state.idCv
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
                                                        id: "NomeEmpreendimento",
                                                        name: "NomeEmpreendimento",
                                                        type: "hidden",
                                                        value: this.state.descriptionCv
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                                xs: 1,
                                                                className: "input-modal-checkbox",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Label, {
                                                                    className: errors.checked && touched.checked ? errors.checked : "valid-checkbox",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
                                                                            type: "checkbox",
                                                                            name: "checked",
                                                                            onChange: handleChange,
                                                                            value: "concordo"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                                xs: 11,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                    className: "checkbox-descricao",
                                                                    children: [
                                                                        "Li e concordo com a",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            className: "underlined-link",
                                                                            href: "/politica-de-privacidade",
                                                                            target: "_blank",
                                                                            children: " Pol\xedtica de Privacidade"
                                                                        }),
                                                                        ",",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            className: "underlined-link",
                                                                            href: "/politica-de-cookies",
                                                                            target: "_blank",
                                                                            children: " Pol\xedtica de Cookies"
                                                                        }),
                                                                        " e",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            className: "underlined-link",
                                                                            href: "/termos-de-uso",
                                                                            target: "_blank",
                                                                            children: " Termo de Uso da Alphaville"
                                                                        }),
                                                                        "."
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                            className: "alerta alerta-success" + (values.sendSuccess ? "" : " hide"),
                                            role: "alert",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                    children: [
                                                        " Contato enviado ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        " com sucesso!"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: "Em breve nossa equipe entrar\xe1 em contato."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                            className: "alerta alerta-danger" + (values.sendSuccess == false ? "" : " hide"),
                                            role: "alert",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                children: "Erro ao enviar contato."
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Modal.Footer, {
                                    className: values.sendSuccess == null ? "modal-form__footer" : "hide",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                md: {
                                                    span: 5,
                                                    offset: 1
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                                    type: "submit",
                                                    className: "btn btn-success",
                                                    onClick: this.sandDataLayer,
                                                    disabled: isSubmitting,
                                                    children: "Enviar"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                md: 5,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                                    type: "reset",
                                                    className: "btn btn-warning btn-reset-modal",
                                                    onClick: this.props.onHide,
                                                    children: "Cancelar"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                })
            ]
        });
    }
}

// EXTERNAL MODULE: ./_share/service/empreendimentoHouseCRM.js + 1 modules
var empreendimentoHouseCRM = __webpack_require__(8372);
;// CONCATENATED MODULE: ./_share/components/modalForm/modalChat.component.jsx








class modalChat_component_ModalEmail extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            brStates: []
        };
        this.empHouseCRMService = new empreendimentoHouseCRM/* default */.Z();
    }
    isMounted = false;
    async componentDidMount() {
        this.isMounted = true;
        const storage = new service_storage/* default */.Z();
        const locate = await storage.getStates(true);
        if (this.isMounted) this.setState({
            brStates: locate.states
        });
    }
    componentWillUnmount() {
        this.isMounted = false;
    }
    sandDataLayer = ()=>{
        if (dataLayer) {
            dataLayer.push({
                event: "novoLead",
                ec: "chat online",
                ea: "click",
                el: "enviar"
            });
        }
    };
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Modal, {
            ...this.props,
            className: "modal-form area-modal",
            "aria-labelledby": "contained-modal-title-vcenter",
            centered: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Modal.Header, {
                    closeButton: true,
                    className: "modal-form__header",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "modal-form__header-content",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "icon-logo"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "modal-form__wrapper-title",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "modal-form__icon modal-form__icon--chat"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "modal-title",
                                        children: "Atendimento Online"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
                    initialValues: {
                        name: "",
                        email: "",
                        tel: "",
                        state: "",
                        city: "",
                        sendSuccess: null
                    },
                    validate: (values)=>{
                        const errors = {};
                        const util = new service_util/* default */.Z();
                        if (util.validateName(values.name)) errors.name = util.validateName(values.name);
                        if (util.validateEmail(values.email)) errors.email = util.validateEmail(values.email);
                        if (util.validateTel(values.tel)) errors.tel = util.validateTel(values.tel);
                        if (util.validateState(values.state)) errors.state = util.validateState(values.state);
                        if (util.validateCity(values.city)) errors.city = util.validateCity(values.city);
                        return errors;
                    },
                    onSubmit: (values, { setSubmitting  })=>{
                        setTimeout(()=>{
                            const empHouseCRM = this.empHouseCRMService.obterEmpreendimento(this.props.empreendimentosjson, values.state, values.city);
                            const phone = new service_util/* default */.Z().splitPhoneDdd(values.tel);
                            const msg = empHouseCRM.emprendimento + " - " + values.state + " - " + values.city;
                            try {
                                let codemp = 0;
                                if (empHouseCRM && empHouseCRM.codEmpreend) {
                                    codemp = parseInt(empHouseCRM.codEmpreend);
                                }
                                console.log("codemp", typeof codemp, codemp);
                                console.log("empHouseCRM", empHouseCRM);
                                console.log("hc_chat", typeof hc_chat);
                                hc_chat(codemp, values.name, values.email, phone.ddd, phone.phone, "", "", "", msg);
                                //(CodigoEmpreendimento, NomeCliente, EmailCliente, DDDCliente, TelefoneCliente, CodFilial, Sem_Pop_Up, pro_ativo, Informacao, Campanha)
                                //soclTracking.event('purchase', { Transactional_ID: 'Chat-Online', Price_Total: '1' });
                                console.log("url chat", url);
                                if (url.includes("alphaville.housecrm.com.br", 0)) {
                                    window.dataLayer.push({
                                        event: "novoLead",
                                        ec: "chat online",
                                        ea: "envio",
                                        el: "sucesso"
                                    });
                                    values.sendSuccess = true;
                                    this.props.onHide();
                                } else {
                                    window.dataLayer.push({
                                        event: "novoLead",
                                        ec: "chat online",
                                        ea: "envio",
                                        el: "erro"
                                    });
                                    values.sendSuccess = false;
                                }
                                setSubmitting(false);
                            } catch (e) {
                                console.error("erro ao enviar hc_chat", e);
                                values.sendSuccess = false;
                            }
                        }, 500);
                    },
                    children: ({ values , errors , touched , handleChange , handleBlur , handleSubmit , isSubmitting  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            id: "form-modal-chat",
                            name: "modalChat.form",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Modal.Body, {
                                    className: "modal-form__body",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                            className: values.sendSuccess == null ? "" : " hide",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                md: {
                                                    span: 10,
                                                    offset: 1
                                                },
                                                className: "descricao-modal",
                                                children: "Preencha os campos abaixo para iniciar o atendimento online"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                            className: values.sendSuccess == null ? "" : " hide",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                                md: {
                                                    span: 10,
                                                    offset: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                        controlId: "formGroupNome",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                                className: "title-input",
                                                                children: "Nome"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                                type: "text",
                                                                name: "name",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                value: values.name,
                                                                placeholder: "Nome completo",
                                                                className: "input-modal-email" + (errors.name && touched.name ? " " + errors.name : "")
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                        controlId: "formGroupEmail",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                                className: "title-input",
                                                                children: "E-mail"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                                type: "email",
                                                                name: "email",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                value: values.email,
                                                                placeholder: "E-mail",
                                                                className: "input-modal-email" + (errors.email && touched.email ? " " + errors.email : "")
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                        controlId: "formGroupTel",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                                className: "title-input",
                                                                children: "Telefone"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                                type: "text",
                                                                name: "tel",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                value: new service_util/* default */.Z().foneMask(values.tel),
                                                                placeholder: "(xx) XXXXX-XXXX",
                                                                className: "input-modal-email" + (errors.tel && touched.tel ? " " + errors.tel : "")
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                        controlId: "formGroupState",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                                className: "title-input",
                                                                children: "Estado"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Control, {
                                                                as: "select",
                                                                name: "state",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                value: values.state,
                                                                className: "input-modal-email" + (errors.state && touched.state ? " " + errors.state : ""),
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                        hidden: true,
                                                                        children: "Selecione o estado"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                        disabled: "disabled",
                                                                        default: true,
                                                                        children: "* Selecione o estado *"
                                                                    }),
                                                                    this.empHouseCRMService.listarEstados(this.props.empreendimentosjson).map((estado)=>{
                                                                        return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: estado,
                                                                            children: estado
                                                                        }, estado);
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                        controlId: "formGroupCity",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                                className: "title-input",
                                                                children: "Cidade"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Control, {
                                                                as: "select",
                                                                name: "city",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                value: values.city,
                                                                placeholder: "Cidade",
                                                                className: "input-modal-email" + (errors.city && touched.city ? " " + errors.city : ""),
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                        hidden: true,
                                                                        children: "Selecione a cidade"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                        disabled: "disabled",
                                                                        default: true,
                                                                        children: "* Selecione a cidade *"
                                                                    }),
                                                                    this.empHouseCRMService.listarCidades(this.props.empreendimentosjson, values.state).map((cidade)=>{
                                                                        return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: cidade,
                                                                            children: cidade
                                                                        }, cidade);
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                            className: "alerta alerta-success" + (values.sendSuccess ? "" : " hide"),
                                            role: "alert",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                    children: [
                                                        "Contato enviado",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        "com sucesso!"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: "Em breve nossa equipe entrar\xe1 em contato."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                            className: "alerta alerta-danger" + (values.sendSuccess == false ? "" : " hide"),
                                            role: "alert",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                children: "Erro ao enviar contato."
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Modal.Footer, {
                                    className: values.sendSuccess == null ? "modal-form__footer" : "hide",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                md: {
                                                    span: 5,
                                                    offset: 1
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                                    type: "submit",
                                                    className: "btn btn-success",
                                                    onClick: this.sandDataLayer,
                                                    disabled: isSubmitting,
                                                    children: "Enviar"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                md: 5,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                                    type: "reset",
                                                    className: "btn btn-warning btn-reset-modal",
                                                    onClick: this.props.onHide,
                                                    children: "Cancelar"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                })
            ]
        });
    }
}

// EXTERNAL MODULE: ./Envirioment/Envirioment.js
var Envirioment = __webpack_require__(1790);
// EXTERNAL MODULE: ./_share/service/construtor-vendas.service.js
var construtor_vendas_service = __webpack_require__(1110);
;// CONCATENATED MODULE: ./_share/components/modalForm/modalWhatsapp.component.jsx













class ModalWhatsapp extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            idCv: "",
            descriptionCv: "",
            cityField: "",
            emailField: "",
            msgField: "",
            nameField: "",
            stateField: "",
            telField: ""
        };
        this.enterprisesCRM = new enterprisesCRM/* default */.Z();
    }
    isMounted = false;
    async componentDidMount() {
        this.isMounted = true;
        const storage = new service_storage/* default */.Z();
        const enterprises = await storage.getEnterprisesForHouseCRM();
        this.setState({
            enterprises
        });
    }
    componentWillUnmount() {
        this.isMounted = false;
    }
    sandDataLayer = ()=>{
        let whats = "sim";
        if (dataLayer) {
            dataLayer.push({
                event: "novoLead",
                ec: "whatsapp",
                ea: "click",
                el: "enviar"
            });
        }
        ;
    };
    handleCity(nomeEstado, event) {
        const nomeCidade = event.target.options[event.target.options.selectedIndex];
        if (nomeCidade.label) {
            const cv = this.enterprisesCRM.getEnterprise(this.state.enterprises, nomeEstado, nomeCidade.label);
            if (cv.idCv != undefined && cv.descriptionCv != undefined) this.setState({
                idCv: cv.idCv,
                descriptionCv: cv.descriptionCv
            });
        }
    }
    fillRdStation(url, values) {
        values.CodEmpreendimento = this.state.idCv;
        values.NomeEmpreendimento = this.state.descriptionCv;
    //const sendRd = new SendRdStation();
    //sendRd.fillRdStation(url, values, 'home_whats.form');
    }
    //sendRdStation = async () => {
    //  const sendRd = new SendRdStation();
    //  sendRd.sendRdStation();
    //}
    render() {
        if (this.props.show) {
            const sendRd = new sendRdstation/* default */.Z();
            sendRd.fillRdStation(window.location.pathname, {}, "home_whats.form");
        }
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Modal, {
            ...this.props,
            className: "modal-form area-modal",
            "aria-labelledby": "contained-modal-title-vcenter",
            centered: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Modal.Header, {
                    closeButton: true,
                    className: "modal-form__header",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "modal-form__header-content",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "icon-logo"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "modal-form__wrapper-title",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "modal-form__icon modal-form__icon--whats"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "modal-title",
                                        children: "Fale com a gente pelo WhatsApp!"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
                    initialValues: {
                        name: "",
                        email: "",
                        tel: "",
                        state: "",
                        city: "",
                        msg: "",
                        CodEmpreendimento: "",
                        NomeEmpreendimento: "",
                        sendSuccess: null,
                        checked: []
                    },
                    validate: (values)=>{
                        const errors = {};
                        const util = new service_util/* default */.Z();
                        if (util.validateName(values.name)) errors.name = util.validateName(values.name);
                        if (util.validateEmail(values.email)) errors.email = util.validateEmail(values.email);
                        if (util.validateTel(values.tel, true)) errors.tel = util.validateTel(values.tel, true);
                        if (util.validateState(values.state)) errors.state = util.validateState(values.state);
                        if (util.validateCity(values.city)) errors.city = util.validateCity(values.city);
                        //if (util.validateMsg(values.msg)) errors.msg = util.validateMsg(values.msg);
                        if (util.validateCheckbox(values.checked)) errors.checked = util.validateCheckbox(values.checked);
                        // const arrayErros = Object.values(errors);
                        // if (arrayErros.length == 0) {
                        //   this.fillRdStation(window.location.pathname, values);
                        // }
                        return errors;
                    },
                    onSubmit: (values, { setSubmitting  })=>{
                        setTimeout(()=>{
                            //const empHouseCRM = this.empHouseCRMService.obterEmpreendimento(this.props.empreendimentosjson, values.state, values.city);
                            const empHouseCRM = this.enterprisesCRM.getEnterprise(this.state.enterprises, values.state, values.city);
                            values.CodEmpreendimento = empHouseCRM.idCv;
                            values.NomeEmpreendimento = empHouseCRM.descriptionCv;
                            const phone = new service_util/* default */.Z().splitPhoneDdd(values.tel);
                            // const msg = empHouseCRM.emprendimento + ' - ' + values.state + ' - ' + values.city + ' -> msg: ' + values.msg;
                            const msgForm = "Home WhatsApp";
                            const empTitle = `Empreendimento: ${empHouseCRM.emprendimento}.`;
                            const stateAndCity = `Estado: ${values.state} - Cidade: ${values.city}`;
                            const concordo = values.checked.length > 0 ? "Li e concordo com a Pol\xedtica de Privacidade, Pol\xedtica de Cookies e Termo de Uso da Alphaville." : "";
                            const msg = `Form: ${msgForm}. ${empTitle}
                         Preferência de Contato: WhatsApp.
                         Mensagem: ${values.msg}.
                         ${stateAndCity}.`;
                            try {
                                let codemp = 0;
                                if (empHouseCRM && empHouseCRM.codEmpreend) {
                                    codemp = parseInt(empHouseCRM.codEmpreend);
                                }
                                const sendRd = new construtor_vendas_service/* default */.Z();
                                sendRd.sendApiCv(values.name, values.email, phone.ddd.replace(/\D/g, ""), phone.phone.replace(/\D/g, ""), values.CodEmpreendimento, values.NomeEmpreendimento, codemp, empTitle, values.state, values.city, values.msg, "home_whats.form", concordo).then((res)=>{
                                    values.sendSuccess = res.success;
                                    if (res.success) {
                                        window.dataLayer.push({
                                            event: "novoLead",
                                            ec: "whatsapp",
                                            ea: "envio",
                                            el: "sucesso"
                                        });
                                    } else {
                                        window.dataLayer.push({
                                            event: "novoLead",
                                            ec: "whatsapp",
                                            ea: "envio",
                                            el: "erro"
                                        });
                                    }
                                    setTimeout(()=>{
                                        this.props.onHide();
                                    }, 5000);
                                    setSubmitting(false);
                                    if (res.success) {
                                        new service_util/* default */.Z().goToUrl([
                                            `https://api.whatsapp.com/send?phone=${Envirioment/* WHATSAPP_PHONE */.RL}&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Alphaville`
                                        ], "_blank", true);
                                    }
                                }); //fim rdstation then
                            // const returnHc = hc_envia_mensagem(
                            //   codemp,
                            //   values.name,
                            //   values.email,
                            //   phone.ddd,
                            //   phone.phone,
                            //   msg
                            // );
                            // const returnSuaHouse = JSON.parse(returnHc);
                            } catch (e) {
                                console.error("erro ao enviar api", e);
                                values.sendSuccess = false;
                            }
                        }, 500);
                    },
                    children: ({ values , errors , touched , handleChange , handleBlur , handleSubmit , isSubmitting  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            id: "form-modal",
                            name: "modalWhats.form",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Modal.Body, {
                                    className: "modal-form__body",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                            className: values.sendSuccess == null ? "" : " hide",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                md: {
                                                    span: 10,
                                                    offset: 1
                                                },
                                                className: "descricao-modal",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                    children: "Para um melhor atendimento, voce pode nos dizer o seu nome?"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                            className: values.sendSuccess == null ? "" : " hide",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                                md: {
                                                    span: 10,
                                                    offset: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                        controlId: "formGroupNome",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                                className: "title-input",
                                                                children: "Nome"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                                type: "text",
                                                                name: "name",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                value: values.name,
                                                                placeholder: "Nome completo",
                                                                className: "input-modal-email" + (errors.name && touched.name ? " " + errors.name : "")
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                        controlId: "formGroupEmail",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                                className: "title-input",
                                                                children: "E-mail"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                                type: "email",
                                                                name: "email",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                value: values.email,
                                                                placeholder: "E-mail",
                                                                className: "input-modal-email" + (errors.email && touched.email ? " " + errors.email : "")
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                        controlId: "formGroupTel",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                                className: "title-input",
                                                                children: "Telefone"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                                type: "text",
                                                                name: "tel",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                value: new service_util/* default */.Z().foneMask(values.tel),
                                                                placeholder: "(xx) XXXXX-XXXX",
                                                                className: "input-modal-email" + (errors.tel && touched.tel ? " " + errors.tel : "")
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                        controlId: "formGroupState",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                                className: "title-input",
                                                                children: "Estado"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Control, {
                                                                as: "select",
                                                                name: "state",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                value: values.state,
                                                                className: "input-modal-email" + (errors.state && touched.state ? " " + errors.state : ""),
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                        hidden: true,
                                                                        children: "Selecione o estado"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                        disabled: "disabled",
                                                                        default: true,
                                                                        children: "* Selecione o estado *"
                                                                    }),
                                                                    this.enterprisesCRM.listEnterprises(this.state.enterprises).map((estado)=>{
                                                                        return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: estado,
                                                                            children: estado
                                                                        }, estado);
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                        controlId: "formGroupCity",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                                className: "title-input",
                                                                children: "Cidade"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Control, {
                                                                as: "select",
                                                                name: "city",
                                                                onChange: (e)=>{
                                                                    handleChange(e);
                                                                    this.handleCity(values.state, e);
                                                                },
                                                                onBlur: handleBlur,
                                                                value: values.city,
                                                                placeholder: "Cidade",
                                                                className: "input-modal-email" + (errors.city && touched.city ? " " + errors.city : ""),
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                        hidden: true,
                                                                        children: "Selecione a cidade"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                        disabled: "disabled",
                                                                        default: true,
                                                                        children: "* Selecione a cidade *"
                                                                    }),
                                                                    this.enterprisesCRM.listCities(this.state.enterprises, values.state).map((cidade)=>{
                                                                        return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: cidade,
                                                                            children: cidade
                                                                        }, cidade);
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
                                                        id: "Cod-Empreendimento",
                                                        name: "Cod-Empreendimento",
                                                        type: "hidden",
                                                        value: this.state.idCv
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
                                                        id: "NomeEmpreendimento",
                                                        name: "NomeEmpreendimento",
                                                        type: "hidden",
                                                        value: this.state.descriptionCv
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                                xs: 1,
                                                                className: "input-modal-checkbox",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Label, {
                                                                    className: errors.checked && touched.checked ? errors.checked : "valid-checkbox",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
                                                                            type: "checkbox",
                                                                            name: "checked",
                                                                            onChange: handleChange,
                                                                            value: "concordo"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                                xs: 11,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                    className: "checkbox-descricao",
                                                                    children: [
                                                                        "Li e concordo com a",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            className: "underlined-link",
                                                                            href: "/politica-de-privacidade",
                                                                            target: "_blank",
                                                                            children: " Pol\xedtica de Privacidade"
                                                                        }),
                                                                        ",",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            className: "underlined-link",
                                                                            href: "/politica-de-cookies",
                                                                            target: "_blank",
                                                                            children: " Pol\xedtica de Cookies"
                                                                        }),
                                                                        " e",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            className: "underlined-link",
                                                                            href: "/termos-de-uso",
                                                                            target: "_blank",
                                                                            children: " Termo de Uso da Alphaville."
                                                                        }),
                                                                        "."
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                            className: "alerta alerta-success" + (values.sendSuccess ? "" : " hide"),
                                            role: "alert",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                    children: [
                                                        "Contato enviado",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        "com sucesso!"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: "Em breve nossa equipe entrar\xe1 em contato."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                                            className: "alerta alerta-danger" + (values.sendSuccess == false ? "" : " hide"),
                                            role: "alert",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                children: "Erro ao enviar contato."
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Modal.Footer, {
                                    className: values.sendSuccess == null ? "modal-form__footer" : "hide",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                md: {
                                                    span: 5,
                                                    offset: 1
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                                    type: "submit",
                                                    className: "btn btn-success",
                                                    onClick: this.sandDataLayer,
                                                    disabled: isSubmitting,
                                                    children: "Enviar"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                md: 5,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                                    type: "reset",
                                                    className: "btn btn-warning btn-reset-modal",
                                                    onClick: this.props.onHide,
                                                    children: "Cancelar"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                })
            ]
        });
    }
}

;// CONCATENATED MODULE: ./_share/components/modalForm/modalForm.component.jsx






// import styles from './modalForm.module.scss';

class ModalForm extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            modalShow: false,
            origin: ""
        };
    }
    async componentDidMount() {
        switch(this.props.id){
            case "email":
                this.setState({
                    origin: "e-mail"
                });
                break;
            case "chat":
                this.setState({
                    origin: "chat online"
                });
                break;
            case "whatsapp":
                this.setState({
                    origin: "whatsapp"
                });
                break;
        }
    }
    closeModal = ()=>{
        if (dataLayer) {
            dataLayer.push({
                event: "novoLead",
                ec: this.state.origin,
                ea: "click",
                el: "cancelar"
            });
        }
        this.setState({
            modalShow: false
        });
    };
    openModal = (e)=>{
        if (e) e.preventDefault();
        if (dataLayer) {
            dataLayer.push({
                event: "novoLead",
                ec: "lead",
                ea: "click",
                el: this.state.origin
            });
        }
        if (this.props.id === "whatsapp") {
            new service_util/* default */.Z().goToUrl([
                `https://api.whatsapp.com/send?phone=${Envirioment/* WHATSAPP_PHONE */.RL}&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Alphaville`
            ], "_blank", true, e);
        } else {
            this.setState({
                modalShow: true
            });
        }
    };
    render() {
        const children = external_react_default().Children.map(this.props.children, (child)=>/*#__PURE__*/ external_react_default().cloneElement(child, {
                onClick: this.openModal.bind(this)
            }));
        let modal = "";
        switch(this.props.id){
            case "email":
                modal = /*#__PURE__*/ jsx_runtime_.jsx(ModalEmail, {
                    empreendimentosjson: this.props.empreendimentosjson,
                    show: this.state.modalShow,
                    onHide: this.closeModal
                });
                break;
            case "chat":
                modal = /*#__PURE__*/ jsx_runtime_.jsx(modalChat_component_ModalEmail, {
                    empreendimentosjson: this.props.empreendimentosjson,
                    show: this.state.modalShow,
                    onHide: this.closeModal
                });
                break;
            case "whatsapp1":
                modal = /*#__PURE__*/ jsx_runtime_.jsx(ModalWhatsapp, {
                    empreendimentosjson: this.props.empreendimentosjson,
                    show: this.state.modalShow,
                    onHide: this.closeModal
                });
                break;
        }
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                children,
                modal
            ]
        });
    }
}
/* harmony default export */ const modalForm_component = (ModalForm);

;// CONCATENATED MODULE: ./_share/components/alphaMenu/alphaMenu.jsx




// import './alpha-menu.scss';
class DesktopAlphaMenu extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            fixedClass: "",
            elmOffsetTop: 0,
            isPhoneShown: false
        };
    }
    componentDidMount() {
        if (window.outerWidth > 768) {
            window.addEventListener("load", this.handleLoad);
            this.handleDesktopAlphaMenuEvents();
            let retryCount = 0;
            let retry = true;
            while(retry){
                this.handleLoad();
                retryCount++;
                if (document.readyState == "complete" || retryCount > 20) retry = false;
            }
        }
    }
    handleLoad = ()=>{
        if (document.querySelector(".alpha-menu") !== null) {
            const windowScrolledValue = window.pageYOffset;
            const elmOffsetTop = windowScrolledValue + document.querySelector(".layout").getBoundingClientRect().top;
            this.setState({
                elmOffsetTop
            });
        }
    };
    componentWillUnmount() {
        window.removeEventListener("load", this.handleLoad);
    }
    handleDesktopAlphaMenuEvents = ()=>{
        window.onscroll = (e)=>{
            this.setAlphaMenuFixed(e);
        };
    };
    setAlphaMenuFixed = (e)=>{
        const windowScrolledValue = window.pageYOffset;
        if (windowScrolledValue > this.state.elmOffsetTop) {
            this.setState({
                fixedClass: "fixed"
            });
            // if (document.querySelector('.cookies-policy') != null || document.querySelector('.cookies-policy') != undefined) {
            //   this.setState({ fixedClass: 'fixed fixed--cookies' });
            // } else {
            //   this.setState({ fixedClass: 'fixed' });
            // }
            if (document.querySelector(".alpha-menu")) {
                document.getElementsByClassName("layout")[0].style.marginTop = `${document.querySelector(".alpha-menu").offsetHeight + -220}px`;
            }
        } else {
            this.setState({
                fixedClass: ""
            });
            document.getElementsByClassName("layout")[0].style.marginTop = "-220px";
        }
    };
    togglePhoneState = ()=>{
        this.setState({
            isPhoneShown: true
        });
    };
    setColorDisplaySaibaMais(displayColor, teaser) {
        let textColor = "";
        if (teaser) {
            if (displayColor === "logoJardim") {
                textColor = "--jardim";
            } else if (displayColor === "logoTerras") {
                textColor = "--terras";
            } else {
                textColor = "--alphaville";
            }
        }
        return textColor;
    }
    setShowTeaserAlphaMenu(isTeaser, bgTeaserPhone, bgTeaserWhatsapp, bgTeaserSales, isInternal) {
        if (isTeaser) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    this.props.homeContent?.telefoneAtivo == 1 && /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        as: "li",
                        className: "alpha-menu__item alpha-menu__item--phone " + bgTeaserPhone,
                        onClick: this.togglePhoneState,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: "tel:0800 512 3399",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "icon"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "TELEFONE "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "number",
                                            children: "0800 512 3399"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    this.props.homeContent?.whatsAppAtivo == 1 && /*#__PURE__*/ jsx_runtime_.jsx(modalForm_component, {
                        id: "whatsapp1",
                        empreendimentosjson: this.props.empreendimentosjson,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                            as: "li",
                            className: "alpha-menu__item alpha-menu__item--wpp " + bgTeaserWhatsapp,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "icon"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "WHATSAPP"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        as: "li",
                        className: isInternal ? "alpha-menu__item alpha-menu__item--sales shown" : "alpha-menu__item alpha-menu__item--sales hidden",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: "#",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "icon"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "STAND DE VENDAS"
                                })
                            ]
                        })
                    }),
                    isTeaser && this.props.statusStand == 1 ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        as: "li",
                        className: "alpha-menu__item alpha-menu__item--sales " + bgTeaserSales,
                        onClick: this.togglePhoneState,
                        children: this.props.linkStatus && this.props.linkStatus == 1 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: "#nosso-stand",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "icon"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "VISITE NOSSO ESTANDE"
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            style: {
                                cursor: "default"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "icon"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "VISITE NOSSO ESTANDE"
                                })
                            ]
                        })
                    }) : null
                ]
            });
        } else {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        as: "li",
                        className: "alpha-menu__item alpha-menu__item--phone " + bgTeaserPhone,
                        onClick: this.togglePhoneState,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: "tel:0800 512 3399",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "icon"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "TELEFONE "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "number",
                                            children: "0800 512 3399"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(modalForm_component, {
                        id: "whatsapp1",
                        empreendimentosjson: this.props.empreendimentosjson,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                            as: "li",
                            className: "alpha-menu__item alpha-menu__item--wpp " + bgTeaserWhatsapp,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "icon"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "WHATSAPP"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        as: "li",
                        className: isInternal ? "alpha-menu__item alpha-menu__item--sales shown" : "alpha-menu__item alpha-menu__item--sales hidden",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: "#",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "icon"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "STAND DE VENDAS"
                                })
                            ]
                        })
                    })
                ]
            });
        }
    }
    render() {
        const isInternal = this.props.isInternal;
        const isTeaser = this.props.isTeaser;
        const bgTeaserSaibaMais = isTeaser ? `bg-teaser${this.setColorDisplaySaibaMais(this.props.colors.displayColor, isTeaser)}--saiba-mais` : "";
        const bgTeaserPhone = isTeaser ? `bg-teaser${this.setColorDisplaySaibaMais(this.props.colors.displayColor, isTeaser)}--phone` : "";
        const bgTeaserWhatsapp = isTeaser ? `bg-teaser${this.setColorDisplaySaibaMais(this.props.colors.displayColor, isTeaser)}--whatsapp` : "";
        const bgTeaserSales = isTeaser ? `bg-teaser${this.setColorDisplaySaibaMais(this.props.colors.displayColor, isTeaser)}--sales` : "";
        return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: isInternal ? `alpha-menu alpha-menu--internal ${this.state.fixedClass}` : `alpha-menu ${this.state.fixedClass}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        md: isInternal ? 4 : 3,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                            className: "alpha-menu__wrapper",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                    md: 6,
                                    className: isInternal ? "share shown" : "share hidden",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                        as: "ul",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                as: "li",
                                                md: 12,
                                                className: "share__item share__item--description",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Compartilhe este empreendimento:"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                as: "li",
                                                md: 5,
                                                className: "share__item share__item--facebook",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "share__link",
                                                    children: "facebook"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                as: "li",
                                                md: 4,
                                                className: "share__item share__item--twitter",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "share__link",
                                                    children: "twitter"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                as: "li",
                                                md: 3,
                                                className: "share__item share__item--email",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "share__link",
                                                    children: "email"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                    className: "alpha-menu__brand " + bgTeaserSaibaMais,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: isTeaser ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#saiba-mais",
                                            children: "SAIBA MAIS"
                                        }) : "COMPRE SEU ALPHA"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        md: isInternal ? 8 : 9,
                        className: "alpha-menu__wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                            as: "ul",
                            className: isInternal ? "alpha-menu__items alpha-menu__items--internal" : "alpha-menu__items",
                            children: this.setShowTeaserAlphaMenu(isTeaser, bgTeaserPhone, bgTeaserWhatsapp, bgTeaserSales, isInternal)
                        })
                    })
                ]
            })
        });
    }
}
class MobileAlphaMenu extends external_react_.Component {
    setColorByDisplayColor(DisplayColor) {
        if (DisplayColor === "logoJardim") {
            return "--jardim";
        } else if (DisplayColor === "logoTerras") {
            return "--terras";
        } else {
            return "--alphaville";
        }
    }
    setWidthByNumberOfElements() {
        let width = "";
        if (this.props.homeContent?.telefoneAtivo == 1 && this.props.homeContent?.saibaMaisAtivo == 1 && this.props.homeContent?.whatsAppAtivo == 0 || this.props.homeContent?.saibaMaisAtivo == 1 && this.props.homeContent?.whatsAppAtivo == 1 && this.props.homeContent?.telefoneAtivo == 0 || this.props.homeContent?.telefoneAtivo == 1 && this.props.homeContent?.whatsAppAtivo == 1 && this.props.homeContent?.saibaMaisAtivo == 0) {
            width = "50%";
        } else if (this.props.homeContent?.telefoneAtivo == 1 && this.props.homeContent?.saibaMaisAtivo == 0 && this.props.homeContent?.whatsAppAtivo == 0 || this.props.homeContent?.saibaMaisAtivo == 1 && this.props.homeContent?.whatsAppAtivo == 0 && this.props.homeContent?.telefoneAtivo == 0 || this.props.homeContent?.telefoneAtivo == 0 && this.props.homeContent?.whatsAppAtivo == 1 && this.props.homeContent?.saibaMaisAtivo == 0) {
            width = "100%";
        }
        return width;
    }
    setShowTeaserAlphaMenuMobile(isTeaser, bgTeaserPhone, bgTeaserSaibaMais, bgTeaserWhatsapp) {
        if (isTeaser) {
            return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "alpha-menu-mobile__items ",
                    children: [
                        this.props.homeContent?.telefoneAtivo == 1 && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            style: {
                                width: this.setWidthByNumberOfElements()
                            },
                            className: "alpha-menu-mobile__item alpha-menu-mobile__item--phone " + bgTeaserPhone,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "tel:08005123399",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "icon"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "TELEFONE"
                                    })
                                ]
                            })
                        }),
                        this.props.homeContent?.saibaMaisAtivo == 1 && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            style: {
                                width: this.setWidthByNumberOfElements()
                            },
                            className: "alpha-menu-mobile__item alpha-menu-mobile__item--saiba-mais " + bgTeaserSaibaMais,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#saiba-mais",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "icon"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "SAIBA MAIS"
                                    })
                                ]
                            })
                        }),
                        this.props.homeContent?.whatsAppAtivo == 1 && /*#__PURE__*/ jsx_runtime_.jsx(modalForm_component, {
                            id: "whatsapp1",
                            empreendimentosjson: this.props.empreendimentosjson,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                style: {
                                    width: this.setWidthByNumberOfElements()
                                },
                                className: "alpha-menu-mobile__item alpha-menu-mobile__item--wpp " + bgTeaserWhatsapp,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "#",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "icon"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "WHATSAPP"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            });
        } else {
            return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "alpha-menu-mobile__items ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "alpha-menu-mobile__item alpha-menu-mobile__item--phone " + bgTeaserPhone,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "tel:08005123399",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "icon"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "TELEFONE"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "alpha-menu-mobile__item alpha-menu-mobile__item--saiba-mais " + bgTeaserSaibaMais,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#saiba-mais",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "icon"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "SAIBA MAIS"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(modalForm_component, {
                            id: "whatsapp1",
                            empreendimentosjson: this.props.empreendimentosjson,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "alpha-menu-mobile__item alpha-menu-mobile__item--wpp " + bgTeaserWhatsapp,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "#",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "icon"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "WHATSAPP"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            });
        }
    }
    render() {
        const isTeaser = this.props.isTeaser;
        const bgTeaserSaibaMais = isTeaser ? `bg-teaser${this.setColorByDisplayColor(this.props.colors.displayColor)}--saiba-mais` : "";
        const bgTeaserPhone = isTeaser ? `bg-teaser${this.setColorByDisplayColor(this.props.colors.displayColor)}--phone` : "";
        const bgTeaserWhatsapp = isTeaser ? `bg-teaser${this.setColorByDisplayColor(this.props.colors.displayColor)}--whatsapp` : "";
        const isInternal = this.props.isInternal;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "alpha-menu-mobile",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                        as: "ul",
                        className: isInternal ? "share" : "hidden",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                as: "li",
                                xs: 5,
                                className: "share__item share__item--description",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Compartilhe este empreendimento:"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                as: "li",
                                xs: 2,
                                className: "share__item share__item--facebook",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "share__link",
                                    children: "facebook"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                as: "li",
                                xs: 2,
                                className: "share__item share__item--twitter",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "share__link",
                                    children: "twitter"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                as: "li",
                                xs: 2,
                                className: "share__item share__item--email",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "share__link",
                                    children: "email"
                                })
                            })
                        ]
                    })
                }),
                this.setShowTeaserAlphaMenuMobile(isTeaser, bgTeaserPhone, bgTeaserSaibaMais, bgTeaserWhatsapp)
            ]
        });
    }
}
class AlphaMenu extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            isMobile: false
        };
    }
    componentDidMount() {
        window.outerWidth <= 768 ? this.setState({
            isMobile: true
        }) : this.setState({
            isMobile: false
        });
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: this.state.isMobile ? /*#__PURE__*/ jsx_runtime_.jsx(MobileAlphaMenu, {
                ...this.props
            }) : /*#__PURE__*/ jsx_runtime_.jsx(DesktopAlphaMenu, {
                ...this.props
            })
        });
    }
}
/* harmony default export */ const alphaMenu = (AlphaMenu);


/***/ }),

/***/ 3112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1326);



class SendRdStation extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props){
        super(props);
    }
    rdSubmit = async (e)=>{
        e.preventDefault();
        console.log(e);
    };
    sendRdStation = async (e)=>{
        document.getElementById("rdstation-btn").click();
    };
    changeValue = async (e)=>{};
    sleep = (m)=>new Promise((r)=>setTimeout(r, m));
    fillRdStation(url, values, formName) {
        values = values || {};
        const existsForm = document.getElementById("rd-station-f") != null;
        var form = existsForm ? document.getElementById("rd-station-f") : document.createElement("form");
        form.setAttribute("name", formName);
        form.setAttribute("id", "rd-station-f");
        form.setAttribute("method", "POST");
        form.setAttribute("action", url);
        form.setAttribute("style", "display: none");
        for(var property in values){
            if (values?.hasOwnProperty(property)) {
                var value = values[property];
                if (value instanceof Array) {
                    for(var i = 0, l = value.length; i < l; i++){
                        if (property != "sendSuccess") {
                            const exists = document.getElementById("field-" + property) != null;
                            var input = exists ? document.getElementById("field-" + property) : document.createElement("input");
                            input.setAttribute("id", "field-" + property);
                            if (property == "email") {
                                input.setAttribute("type", property);
                                input.setAttribute("style", "display: none");
                            } else {
                                input.setAttribute("type", "hidden");
                            }
                            input.setAttribute("name", property);
                            input.setAttribute("value", value[i]);
                            if (!exists) {
                                form.appendChild(input);
                            }
                        }
                    }
                } else {
                    if (property != "sendSuccess") {
                        const exists1 = document.getElementById("field-" + property) != null;
                        var input = exists1 ? document.getElementById("field-" + property) : document.createElement("input");
                        input.setAttribute("id", "field-" + property);
                        if (property == "email") {
                            input.setAttribute("type", property);
                            input.setAttribute("style", "display: none");
                        } else {
                            input.setAttribute("type", "hidden");
                        }
                        input.setAttribute("name", property);
                        input.setAttribute("value", value);
                        if (!exists1) {
                            form.appendChild(input);
                        }
                    }
                }
            }
        }
        const existsBtn = document.getElementById("btn-send-rdstation") != null;
        var btn = existsBtn ? document.getElementById("btn-send-rdstation") : document.createElement("BUTTON");
        btn.setAttribute("id", "btn-send-rdstation");
        btn.setAttribute("type", "submit");
        btn.setAttribute("name", "submit");
        btn.setAttribute("value", "submit");
        btn.setAttribute("style", "display: none");
        btn.innerHTML = "submit";
        if (!existsBtn) {
            form.appendChild(btn);
        }
    }
    sendRdStation = async ()=>{
        var btn = document.getElementById("btn-send-rdstation");
        await this.sleep(10000);
        btn.click();
    };
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            name: "rd-station-f",
            id: "rd-station-f",
            method: "POST",
            action: "/",
            style: {
                display: "none"
            },
            onSubmit: this.rdSubmit,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    id: "field-name",
                    type: "hidden",
                    name: "name",
                    onChange: this.changeValue,
                    value: ""
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    id: "field-email",
                    type: "email",
                    style: {
                        display: "none"
                    },
                    name: "email",
                    onChange: this.changeValue,
                    value: ""
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    id: "field-tel",
                    type: "hidden",
                    name: "tel",
                    onChange: this.changeValue,
                    value: ""
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    id: "field-state",
                    type: "hidden",
                    name: "state",
                    onChange: this.changeValue,
                    value: ""
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    id: "field-city",
                    type: "hidden",
                    name: "city",
                    onChange: this.changeValue,
                    value: ""
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    id: "field-msg",
                    type: "hidden",
                    name: "msg",
                    onChange: this.changeValue,
                    value: ""
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    id: "field-CodEmpreendimento",
                    type: "hidden",
                    name: "CodEmpreendimento",
                    onChange: this.changeValue,
                    value: ""
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    id: "field-NomeEmpreendimento",
                    type: "hidden",
                    name: "NomeEmpreendimento",
                    onChange: this.changeValue,
                    value: ""
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    id: "btn-send-rdstation",
                    type: "submit",
                    name: "submit",
                    value: "submit",
                    children: "submit"
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SendRdStation);


/***/ }),

/***/ 1110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1326);
/* harmony import */ var _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1790);
/* harmony import */ var _service_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1659);



class ConstrutorVendasService {
    sendApiCv = async (name, email, ddd, phone, dddAdicional, celularAdicional, idCv, descricaoCv, tipo, praca, idEmpreendimento)=>{
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const utils = new _service_util__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z();
        const cookieUtmCampaign = utils.getCookie("utm_campaign");
        const cookieUtmMedium = utils.getCookie("utm_medium");
        const cookieUtmSource = utils.getCookie("utm_source");
        const cookieUtmTerm = utils.getCookie("utm_term");
        const cookieUtmContent = utils.getCookie("utm_content");
        let Utm_campaign = urlParams.get("utm_campaign") || cookieUtmCampaign;
        let Utm_medium = urlParams.get("utm_medium") || cookieUtmMedium;
        let Utm_source = urlParams.get("utm_source") || cookieUtmSource;
        let Utm_term = urlParams.get("utm_term") || cookieUtmTerm;
        let Utm_content = urlParams.get("utm_content") || cookieUtmContent;
        if (Utm_campaign) {
            utils.setCookieByminutes("utm_campaign", Utm_campaign, 30);
        }
        if (Utm_medium) {
            utils.setCookieByminutes("utm_medium", Utm_medium, 30);
        }
        if (Utm_source) {
            utils.setCookieByminutes("utm_source", Utm_source, 30);
        }
        if (Utm_term) {
            utils.setCookieByminutes("utm_term", Utm_term, 30);
        }
        if (Utm_content) {
            utils.setCookieByminutes("utm_content", Utm_content, 30);
        }
        let traffic_source = Utm_source;
        const c_utmz = utils.getCookie("__utmz");
        const rdtrk = utils.getCookie("_rdtrk");
        traffic_source = traffic_source || "CH";
        //Utm_medium = Utm_medium || 'referral';
        let traffic_medium = Utm_medium || "(none)"; //'CPC' = busca paga
        let traffic_campaign = Utm_campaign;
        let traffic_value = Utm_term;
        let traffic_content = Utm_content;
        //idEmpreendimento = dddAdicional
        idEmpreendimento = idCv;
        const data = {
            "name": name,
            "email": email,
            "ddd": ddd,
            "celular": phone,
            "ddd_adicional": dddAdicional,
            "celular_adicional": celularAdicional,
            "id_empreendimento": idEmpreendimento,
            "origem": "CH",
            "id_emp": idEmpreendimento,
            "id_cv": idCv,
            "descricao_cv": descricaoCv,
            //"tipo": tipo,
            //"praca": praca,
            "idsituacao": "10",
            "origin_utm_source": traffic_source,
            "origin_utm_medium": traffic_medium,
            "origin_utm_campaign": traffic_campaign,
            "origin_utm_value": traffic_value,
            "origin_utm_content": traffic_content,
            "tipo": [
                tipo
            ],
            "praca": [
                praca
            ]
        };
        return new Promise((resolve)=>{
            try {
                _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_2__/* .ENDPOINT_CONSTRUTORVENDAS */ .H2, data).then((res)=>{
                    const returnData = {
                        success: res.status == 200,
                        statusText: res.statusText
                    };
                    resolve(returnData);
                }, (error)=>{
                    console.log("retorno CV: ", error);
                    console.log("error.response.data.mensagem: ", error.response.data.mensagem);
                    const returnData = {
                        success: false,
                        statusText: error.response.data.mensagem,
                        error: error
                    };
                    resolve(returnData);
                });
            } catch (error) {
                console.log("retorno CV", error);
                const returnData = {
                    success: false,
                    statusText: "Erro ao receber retorno do envio.",
                    error: error
                };
                resolve(returnData);
            }
        });
    };
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConstrutorVendasService);


/***/ }),

/***/ 8372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ empreendimentoHouseCRM)
});

;// CONCATENATED MODULE: ./_share/models/empreendimentoHouseCRM.model.js
class EmpreendimentoHouseCrmModel {
    constructor(cidade, estado, emprendimento, codEmpreend){
        this.cidade = cidade;
        this.estado = estado;
        this.emprendimento = emprendimento;
        this.codEmpreend = codEmpreend;
    }
}
/* harmony default export */ const empreendimentoHouseCRM_model = (EmpreendimentoHouseCrmModel);

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
;// CONCATENATED MODULE: ./_share/service/empreendimentoHouseCRM.js


class EmpreendimentoHouseCRM {
    constructor(){}
    static obterEmpreendimentosJson() {
        let empreendimentoshousecrm;
        try {
            empreendimentoshousecrm = external_fs_default().readFileSync("runserver/EmpreendimentosHouseCRM.json", "utf8");
        } catch (err) {
            console.error(err);
        }
        return empreendimentoshousecrm;
    }
    converterEmpreendimentos(empjson) {
        const emps = JSON.parse(empjson.trim());
        return emps.Empreendimentos.map((i)=>new empreendimentoHouseCRM_model(i.Cidade, i.Estado, i.Emprendimento, i.CodEmpreend));
    }
    listarEstados(empreendimentosJson) {
        if (empreendimentosJson) {
            const empreendimentos = this.converterEmpreendimentos(empreendimentosJson);
            const estados = empreendimentos.map((i)=>i.estado).sort();
            return [
                ...new Set(estados)
            ];
        } else {
            return [];
        }
    }
    listarCidades(empreendimentosJson, nomeEstado) {
        if (empreendimentosJson) {
            const empreendimentos = this.converterEmpreendimentos(empreendimentosJson);
            const cidades = empreendimentos.filter((x)=>x.estado == nomeEstado).map((i)=>i.cidade).sort();
            return [
                ...new Set(cidades)
            ];
        } else {
            return [];
        }
    }
    obterEmpreendimento(empreendimentosJson, nomeEstado, nomeCidade) {
        if (empreendimentosJson) {
            const empreendimentos = this.converterEmpreendimentos(empreendimentosJson);
            const list = empreendimentos.filter((i)=>i.estado == nomeEstado && i.cidade == nomeCidade);
            if (list && list.length > 0) {
                return list[0];
            }
        }
        return new empreendimentoHouseCRM_model();
    }
}
/* harmony default export */ const empreendimentoHouseCRM = (EmpreendimentoHouseCRM);


/***/ }),

/***/ 4434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class EnterprisesCRM {
    listEnterprises(list) {
        const estados = list.map((i)=>i.estado).sort();
        return [
            ...new Set(estados)
        ];
    }
    listCities(list, nomeEstado) {
        const cidades = list.filter((x)=>x.estado == nomeEstado).map((i)=>i.cidade).sort();
        return [
            ...new Set(cidades)
        ];
    }
    getEnterprise(list, nomeEstado, nomeCidade) {
        const liFiltered = list.filter((i)=>i.estado == nomeEstado && i.cidade == nomeCidade);
        if (liFiltered && liFiltered.length > 0) {
            //regra pegar o maior id_cv da mesma cidade
            const orderedList = liFiltered.sort(function(a, b) {
                if (a.idCv < b.idCv) return 1;
                if (a.idCv > b.idCv) return -1;
                return 0;
            });
            for(let i = 0; i < orderedList.length; i++){
                const element = orderedList[i];
                if (element.idCv) return element;
            }
            return orderedList[0];
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnterprisesCRM);


/***/ }),

/***/ 4562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1326);
/* harmony import */ var _Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1790);
/* harmony import */ var _service_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1659);



class RdStationService {
    // Os códigos de erro estão sendo retornados. Para testar os códigos de erro, usar o número de telefone. 
    // telefone = '999999991' - Erro 406
    // telefone = '999999992' - Erro 500
    // Erro de validação de dados vai dar 400
    // E qualquer outro caso, retorna os dados enviados com código 200
    // Lembrando que, as validações hoje estão bem básicas. Ta verificando requerido e max_length apenas.
    sendApiRdStation = async (name, email, ddd, phone, idRd, descriptionRd, idEmp, nameEmp, estado, cidade, mensagem, formName, msgAceite)=>{
        const conversion_identifier = formName;
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const utils = new _service_util__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z();
        const UrlPage = window.location.href;
        let Utm_campaign = urlParams.get("utm_campaign") || utils.getCookie("utm_campaign");
        let Utm_medium = urlParams.get("utm_medium") || utils.getCookie("utm_medium");
        let Utm_source = urlParams.get("utm_source") || utils.getCookie("utm_source");
        let Utm_term = urlParams.get("utm_term") || utils.getCookie("utm_term");
        let Utm_content = urlParams.get("utm_content") || utils.getCookie("utm_content");
        //let traffic_source = utils.getCookie('__trf.src') || Utm_source;
        let traffic_source = Utm_source;
        const c_utmz = utils.getCookie("__utmz");
        const rdtrk = utils.getCookie("_rdtrk");
        traffic_source = traffic_source || "direct";
        Utm_medium = Utm_medium || "(none)";
        //Como configurar minhas campanhas para identificar a origem das conversões
        //https://ajuda.rdstation.com.br/hc/pt-br/articles/360001076243
        //https://ajuda.rdstation.com.br/hc/pt-br/articles/201977010-Por-que-a-origem-do-lead-%C3%A9-considerada-desconhecida-
        //https://ajuda.rdstation.com.br/hc/pt-br/articles/360001093426-O-que-%C3%A9-Origem-do-Lead-
        //https://developers.rdstation.com/en/reference/fields
        let traffic_medium = Utm_medium || ""; //'CPC' = busca paga or referral
        let traffic_campaign = Utm_campaign;
        let traffic_value = Utm_term;
        let traffic_content = Utm_content;
        if (traffic_source) {
            Utm_campaign = "";
            Utm_medium = "";
            Utm_source = "";
        }
        const data = {
            "name": name,
            "email": email,
            "ddd": ddd,
            "telefone": phone,
            "estado": estado,
            "cidade": cidade,
            "mensagem": mensagem,
            "IDempreendimento": idRd,
            "descriptionRd": descriptionRd,
            "id_emp": idEmp,
            "nome_empreendimento": nameEmp,
            "nome_formulario": formName,
            "website": UrlPage,
            "nome_da_pagina": document.title,
            "conversion_identifier": conversion_identifier,
            "msgAceite": msgAceite,
            "traffic_source": traffic_source,
            "traffic_medium": traffic_medium,
            "traffic_campaign": traffic_campaign,
            "traffic_value": traffic_value,
            "traffic_content": traffic_content,
            "client_tracking_id": rdtrk,
            "origin_utm_source": traffic_source,
            "origin_utm_medium": traffic_medium,
            "origin_utm_campaign": traffic_campaign,
            "origin_utm_value": traffic_value,
            "origin_utm_content": traffic_content
        };
        return new Promise((resolve)=>{
            _api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_Envirioment_Envirioment__WEBPACK_IMPORTED_MODULE_2__/* .ENDPOINT_RDSTATION */ .Zm, data).then((res)=>{
                const returnData = {
                    success: res.status == 200,
                    statusText: res.statusText
                };
                resolve(returnData);
            }, (error)=>{
                console.log(error);
                const returnData = {
                    success: false,
                    statusText: "Erro ao receber retorno do envio."
                };
                resolve(returnData);
            });
        });
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RdStationService);


/***/ })

};
;