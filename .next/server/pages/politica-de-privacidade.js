(() => {
var exports = {};
exports.id = 5364;
exports.ids = [5364,2197];
exports.modules = {

/***/ 2285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _share_layouts_layout_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4756);
/* harmony import */ var _share_components_LinkCustom_LinkCustom_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7509);
/* harmony import */ var _share_service_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4911);






// import './../public/static/politica-de-privacidade.scss';
class PoliticaDePrivacidade extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
    constructor(props){
        super(props);
        this.state = {
            location: this.props.location
        };
    }
    static async getInitialProps(ctx) {
        const provider = new _share_service_provider__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z();
        const brStates = await provider.getStates();
        const location = {
            states: brStates,
            localId: 1,
            uf: "SP",
            localTitle: "S\xe3o Paulo"
        };
        return {
            location
        };
    }
    openBox = async (id, evt)=>{
        if (evt) evt.preventDefault();
        document.getElementById(id).classList.toggle("hide");
        if (evt.target.classList.contains("arrow-right")) {
            evt.target.classList.remove("arrow-right");
            evt.target.classList.add("arrow-down");
        } else if (evt.target.classList.contains("arrow-down")) {
            evt.target.classList.remove("arrow-down");
            evt.target.classList.add("arrow-right");
        }
    };
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_share_layouts_layout_main__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            location: this.state.location,
            title: "Pol\xedtica de privacidade",
            active: "politica-de-privacidade",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "area-info",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "politica-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "title",
                                children: "POL\xcdTICA DE PRIVACIDADE E PROTE\xc7\xc3O DE DADOS PESSOAIS - PRIVACY NOTICE"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sub-title",
                                children: "1. NOSSO PAPEL E SUA PRIVACIDADE"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "description",
                                children: [
                                    "Desenvolver empreendimentos urban\xedsticos inovadores e de qualidade para diversos p\xfablicos, com respeito ao meio ambiente e \xe0 sociedade, que transformem espa\xe7os f\xedsicos em lugares para bem viver, gerando valor para clientes, colaboradores e acionistas e deixando um legado para futuras gera\xe7\xf5es essa \xe9 miss\xe3o da Alphaville.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "Se voc\xea \xe9 um cliente da Alphaville ou est\xe1 apenas visitando o nosso site, esta Pol\xedtica se aplica a voc\xea. Aqui vamos falar um pouco sobre como realizamos as opera\xe7\xf5es com seus dados pessoais."
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "sub-title-h3 ml-5",
                                children: "Nossas Responsabilidades"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "description ml-5",
                                children: "Se voc\xea \xe9 um cliente, fornecedor, parceiro da Alphaville, ou apenas um visitante do nosso Portal, agiremos como “controlador” dos seus dados pessoais. E o que isso quer dizer? Significa que determinamos a forma, o motivo  e a utiliza\xe7\xe3o de seus dados pessoais coletados. "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "sub-title-h3 ml-5",
                                children: "Suas Responsabilidades"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "description ml-5",
                                children: [
                                    "Leia essa Pol\xedtica de Privacidade e Prote\xe7\xe3o de Dados Pessoais.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "Se voc\xea \xe9 nosso cliente, verifique tamb\xe9m o nosso contrato, que pode conter informa\xe7\xf5es e detalhes sobre como tratamos seus dados pessoais.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "Na hip\xf3tese de voc\xea nos fornecer informa\xe7\xf5es pessoais de terceiros, ou na hip\xf3tese de terceiros nos fornecerem suas informa\xe7\xf5es pessoais, apenas as utilizaremos pelo motivo espec\xedfico pelo qual tais informa\xe7\xf5es foram fornecidas.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "Ao fornecer suas informa\xe7\xf5es pessoais, voc\xea nos autoriza a process\xe1-las de acordo com essa Pol\xedtica."
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "area-info-bg",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "politica-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sub-title",
                                children: "2. QUANDO E COMO COLETAMOS SEUS DADOS PESSOAIS"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "description",
                                children: [
                                    "Desde o primeiro momento em que voc\xea interage conosco, coletamos dados pessoais e adotamos medidas de preserva\xe7\xe3o e prote\xe7\xe3o. Al\xe9m disso, deixamos claras as finalidades para as quais utilizamos seus dados.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "H\xe1 situa\xe7\xf5es em que voc\xea nos fornecer\xe1 seus dados pessoais, e em outras coletaremos de forma autom\xe1tica.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        onClick: (e)=>this.openBox("box-01", e),
                                        className: "btn-box-hide arrow-right",
                                        children: "Quando voc\xea navega em nosso site"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: "box-01",
                                        className: "box-hide hide",
                                        children: "Coletamos dados pessoais a partir da sua navega\xe7\xe3o em nosso Portal, por exemplo, quando voc\xea realiza buscas acerca de nossos produtos, escolhe sua localiza\xe7\xe3o e preenche formul\xe1rios."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        onClick: (e)=>this.openBox("box-02", e),
                                        className: "btn-box-hide arrow-right",
                                        children: "Quando voc\xea se cadastra em nosso Portal"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        id: "box-02",
                                        className: "box-hide hide",
                                        children: [
                                            "Se voc\xea \xe9 cliente, a disponibiliza\xe7\xe3o de seus dados pessoais em nosso “Portal Cliente Alpha”  permite ficar por dentro de cada detalhe do seu empreendimento, acompanhar a evolu\xe7\xe3o do status da obra, acessar a documenta\xe7\xe3o da sua unidade e executar servi\xe7os financeiros, tais como, antecipa\xe7\xe3o de parcelas, pagamentos de boleto e termos de quita\xe7\xe3o.",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            "Se voc\xea \xe9 fornecedor e gostaria de apresentar seu trabalho, poder\xe1 se cadastrar em nosso Portal fornecendo dados pessoais e informa\xe7\xf5es acerca do seu servi\xe7o."
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        onClick: (e)=>this.openBox("box-03", e),
                                        className: "btn-box-hide arrow-right",
                                        children: "Quando voc\xea solicita um atendimento"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: "box-03",
                                        className: "box-hide hide",
                                        children: "Voc\xea pode solicitar atendimento por e-mail, telefone ou whatsapp, seja para obter informa\xe7\xf5es com nossos consultores acerca de empreendimento ou, no caso de ser cliente, para solicitar qualquer aux\xedlio."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        onClick: (e)=>this.openBox("box-04", e),
                                        className: "btn-box-hide arrow-right",
                                        children: "Quando voc\xea oferece uma \xe1rea dispon\xedvel para que a Alphaville desenvolva um novo empreendimento"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: "box-04",
                                        className: "box-hide hide",
                                        children: "Voc\xea pode se cadastrar como um parceiro Alphaville, para tanto coletaremos seus dados pessoais."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        onClick: (e)=>this.openBox("box-05", e),
                                        className: "btn-box-hide arrow-right",
                                        children: "Quando voc\xea se candidata para trabalhar conosco em uma de nossas vagas emprego."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: "box-05",
                                        className: "box-hide hide",
                                        children: "Coletamos dados sobre voc\xea quando se candidata para trabalhar conosco em uma de nossas vagas dispon\xedveis."
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "area-info",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "politica-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sub-title",
                                children: "3. TIPOS DE DADOS PESSOAIS COLETADOS"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "description",
                                children: [
                                    "Dentre as informa\xe7\xf5es pessoais que coletamos de voc\xea est\xe3o inclu\xeddas, por exemplo:",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        onClick: (e)=>this.openBox("box-06", e),
                                        className: "btn-box-hide arrow-right",
                                        children: "Detalhes de contato"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: "box-06",
                                        className: "box-hide hide",
                                        children: "Nome Completo, Telefone, Celular, E-mail, UF, Cidade, CPF"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        onClick: (e)=>this.openBox("box-07", e),
                                        className: "btn-box-hide arrow-right",
                                        children: "Informa\xe7\xf5es sobre a \xe1rea de um novo empreendimento, vinculada a uma pessoa f\xedsica"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: "box-07",
                                        className: "box-hide hide",
                                        children: "Estado, Cidade, Metragem da \xc1rea"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        onClick: (e)=>this.openBox("box-08", e),
                                        className: "btn-box-hide arrow-right",
                                        children: "Outros dados que te identificam"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: "box-08",
                                        className: "box-hide hide",
                                        children: "Seu endere\xe7o IP, informa\xe7\xf5es de login, tipo e vers\xe3o do navegador, configura\xe7\xe3o de fuso hor\xe1rio, tipos de plug-in de navegador, tipo de aparelho celular, informa\xe7\xf5es de localiza\xe7\xe3o geogr\xe1fica, sistema operacional e vers\xe3o."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        onClick: (e)=>this.openBox("box-09", e),
                                        className: "btn-box-hide arrow-right",
                                        children: "Dados sobre como voc\xea utiliza o nosso site"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: "box-09",
                                        className: "box-hide hide",
                                        children: "Os fluxos de cliques de seu URL (o caminho que voc\xea percorre em nosso site), produtos / servi\xe7os visualizados, tempos de resposta da p\xe1gina, erros de download, tempo de perman\xeancia, atividades e frequ\xeancia, imagens e bot\xf5es clicados e outras a\xe7\xf5es  em nossas p\xe1ginas."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        onClick: (e)=>this.openBox("box-10", e),
                                        className: "btn-box-hide arrow-right",
                                        children: "E dados sens\xedveis?"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: "box-10",
                                        className: "box-hide hide",
                                        children: 'N\xe3o coletamos "dados sens\xedveis" sobre voc\xea, tais como origem racial ou \xe9tnica, convic\xe7\xe3o religiosa, opini\xe3o pol\xedtica, filia\xe7\xe3o a sindicato ou a organiza\xe7\xe3o de car\xe1ter religioso, filos\xf3fico ou pol\xedtico, dado referente \xe0 sa\xfade ou \xe0 vida sexual, dado gen\xe9tico ou biom\xe9trico.'
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        onClick: (e)=>this.openBox("box-11", e),
                                        className: "btn-box-hide arrow-right",
                                        children: "E dados de crian\xe7as e adolescentes?"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: "box-11",
                                        className: "box-hide hide",
                                        children: "A Alphaville \xe9 um Portal direcionado e destinado a ser usado somente por pessoas com 18 anos de idade ou mais. N\xe3o direcionamos o Portal Alphaville para crian\xe7as e n\xe3o coletamos dados pessoais de menores de 18 anos."
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "area-info-bg",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "politica-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sub-title",
                                children: "4.  POR QUE USAMOS SEUS DADOS PESSOAIS"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "description",
                                children: [
                                    "A Lei Geral de Prote\xe7\xe3o de Dados Pessoais nos diz que s\xf3 podemos usar seus dados por certos motivos e, para isso, estaremos sempre amparados por uma base legal para a nossa atividade. Aqui est\xe3o os motivos pelos quais processamos seus dados:",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        onClick: (e)=>this.openBox("box-12", e),
                                        className: "btn-box-hide arrow-right",
                                        children: "Para manter o funcionamento do site"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        id: "box-12",
                                        className: "box-hide hide",
                                        children: [
                                            "Gerenciando suas solicita\xe7\xf5es: (I) quando voc\xea se cadastra em nosso site e acessa o “Portal Cliente Alpha”, (II) quando realiza a aquisi\xe7\xe3o de uma unidade/lote e/ou apresenta demanda sobre determinado assunto, ou (III) quando realiza o login e a sua respectiva autentica\xe7\xe3o.",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            "Bases Legais | Contrato | Leg\xedtimo Interesse"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        onClick: (e)=>this.openBox("box-13", e),
                                        className: "btn-box-hide arrow-right",
                                        children: "Para melhorar e progredir nossos servi\xe7os e produtos"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        id: "box-13",
                                        className: "box-hide hide",
                                        children: [
                                            "Mapeando o calor de nosso site: otimizando o tr\xe1fego e a an\xe1lise/pesquisa de dados (an\xe1lise de perfil de mercado e pesquisa de demandas), analisando perfil de cliente, pesquisando a satisfa\xe7\xe3o p\xf3s-venda. Em certos casos, utilizaremos terceiros para desempenhar tais atividades.",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            "Base Legal | Leg\xedtimo Interesse"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        onClick: (e)=>this.openBox("box-14", e),
                                        className: "btn-box-hide arrow-right",
                                        children: "Para realizar uma venda"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        id: "box-14",
                                        className: "box-hide hide",
                                        children: [
                                            "Ao realizar uma aquisi\xe7\xe3o de nossas unidades e/ou lote, precisaremos coletar seus dados pessoais para que a sua aquisi\xe7\xe3o seja efetivamente entregue.",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            "Base Legal | Contrato"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        onClick: (e)=>this.openBox("box-15", e),
                                        className: "btn-box-hide arrow-right",
                                        children: "Oferecer suporte ao cliente e novos empreendimentos"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        id: "box-15",
                                        className: "box-hide hide",
                                        children: [
                                            "Por meio de um de nossos canais de atendimento, \xe9 poss\xedvel que voc\xea entre em contato conosco para sanar d\xfavidas referente a uma unidade/lote dispon\xedvel ou para prestar suporte \xe0 venda de uma de nossas unidades/lotes.",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            "Bases Legais Contrato"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        onClick: (e)=>this.openBox("box-16", e),
                                        className: "btn-box-hide arrow-right",
                                        children: "Para habilitar um candidato \xe0s nossas vagas"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        id: "box-16",
                                        className: "box-hide hide",
                                        children: [
                                            "Quando voc\xea se candidata a uma de nossas vagas dispon\xedveis.",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            "Bases Legais | Contrato"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sub-title",
                                children: "Mas afinal, o que s\xe3o essas bases legais?"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "sub-title-h3 ml-5",
                                children: "Contrato"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "description ml-5",
                                children: "O processamento de dados \xe9 necess\xe1rio para a execu\xe7\xe3o de um contrato que voc\xea possui conosco, seja para lhe entregar uma de nossas unidades e/ou lotes ou, ainda, para negocia\xe7\xf5es pr\xe9-contratuais como no caso de voc\xea ser um candidato a uma das vagas dispon\xedveis da Alphaville."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "sub-title-h3 ml-5",
                                children: "Leg\xedtimo Interesse"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "description ml-5",
                                children: "O leg\xedtimo interesse \xe9 v\xe1lido quando o processamento de seus dados \xe9 necess\xe1rio para atender os leg\xedtimos interesses da Alphaville. Essa base legal somente ser\xe1 v\xe1lida quando esses interesses n\xe3o sejam superados por seus direitos. "
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "description",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        onClick: (e)=>this.openBox("box-17", e),
                                        className: "btn-box-hide arrow-right",
                                        children: "Os interesses leg\xedtimos poder\xe3o envolver as seguintes atividades de tratamento:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: "box-17",
                                        className: "box-hide hide",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: "• Obter informa\xe7\xf5es sobre seu comportamento em nosso site e aplicativos;"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: "• Obter informa\xe7\xf5es sobre o seu perfil de cliente;"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: "• Desenvolver campanhas de marketing personalizadas ao nosso cliente;"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: "• Enviar a voc\xea novidades acerca de nossas atividades, ap\xf3s o seu cadastro ou realiza\xe7\xe3o de alguma compra."
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "area-info",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "politica-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sub-title",
                                children: "5. SUAS ESCOLHAS E DIREITOS"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "sub-title-h3 ml-5",
                                children: "Suas escolhas"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "description ml-5",
                                children: [
                                    "Voc\xea pode optar por n\xe3o nos fornecer dados pessoais e mesmo assim continuar a utilizar o nosso site e navegar em nossas p\xe1ginas. Por\xe9m, n\xe3o poderemos processar transa\xe7\xf5es sem os seus dados pessoais.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "Voc\xea pode, ainda, desativar os cookies no seu navegador, alterando suas configura\xe7\xf5es para recusar. Pode, ainda, excluir os cookies, tamb\xe9m atrav\xe9s das configura\xe7\xf5es do seu navegador. Entretanto, \xe9 importante que voc\xea saiba que se voc\xea desativar os cookies, poder\xe1 continuar a usar o site e navegar em suas p\xe1ginas, mas determinadas funcionalidades do nosso Portal poder\xe3o n\xe3o funcionar efetivamente.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "Voc\xea tem o controle sobre as suas informa\xe7\xf5es, e poder\xe1 se opor \xe0s opera\xe7\xf5es com seus dados pessoais, inclusive com rela\xe7\xe3o aos dados utilizados para as finalidades de marketing e an\xe1lise de mercado. Poder\xe1 tamb\xe9m se opor a utiliza\xe7\xe3o de suas informa\xe7\xf5es pessoais com a finalidade de melhorar os nossos servi\xe7os e produtos, enviando um e-mail para:",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "mailto:dpo@alphaville.com.br",
                                        children: " dpo@alphaville.com.br"
                                    }),
                                    "."
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "sub-title-h3 ml-5",
                                children: "Seus direitos"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "description ml-5",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "Voc\xea pode exercer seus direitos acessando o nosso “Canal de Solicita\xe7\xf5es de Direito – LGPD” e enviando um email para ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "mailto:dpo@alphaville.com.br",
                                        children: "dpo@alphaville.com.br"
                                    }),
                                    ".",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "Voc\xea tem o direito de confirmar se tratamos ou n\xe3o as suas informa\xe7\xf5es pessoais. Em caso positivo, voc\xea poder\xe1 requerer acesso \xe0s suas informa\xe7\xf5es pessoais, al\xe9m de informa\xe7\xf5es adicionais sobre as atividades de tratamento de dados pessoais, tais como:",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "• as categorias de dados pessoais processados sobre voc\xea;"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "• os prop\xf3sitos das atividades de tratamento de dados pessoais;"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "• os per\xedodos de reten\xe7\xe3o das informa\xe7\xf5es pessoais;"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "• e outras quest\xf5es que possam esclarecer as atividades de tratamento de dados."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "Lembramos que para que sua solicita\xe7\xe3o seja acatada voc\xea dever\xe1 comprovar a sua identidade, apresentando seu documento de identifica\xe7\xe3o ou, no caso de representante legal, instrumento de representa\xe7\xe3o. Al\xe9m disso, a sua demanda ser\xe1 respondida em at\xe9 15 (quinze) dias, contados a partir da data do recebimento de seu requerimento."
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "description",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        onClick: (e)=>this.openBox("box-18", e),
                                        className: "btn-box-hide arrow-right",
                                        children: "Confirma\xe7\xe3o e Acesso"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: "box-18",
                                        className: "box-hide hide",
                                        children: "A confirma\xe7\xe3o da exist\xeancia ou n\xe3o de atividades de tratamento de dados pessoais relacionados a voc\xea ocorrer\xe1 em 24h. Entretanto, para uma declara\xe7\xe3o completa acerca das atividades de tratamento de dados pessoais e informa\xe7\xf5es adicionais sobre as atividades realizadas, cumpriremos o prazo m\xe1ximo de 15 (quinze) dias."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        onClick: (e)=>this.openBox("box-19", e),
                                        className: "btn-box-hide arrow-right",
                                        children: "Retifica\xe7\xe3o"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: "box-19",
                                        className: "box-hide hide",
                                        children: "Voc\xea tem o direito de solicitar a corre\xe7\xe3o e retifica\xe7\xe3o de quaisquer dados pessoais imprecisos, incorretos ou desatualizados sobre voc\xea."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        onClick: (e)=>this.openBox("box-20", e),
                                        className: "btn-box-hide arrow-right",
                                        children: "Oposi\xe7\xe3o"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: "box-20",
                                        className: "box-hide hide",
                                        children: "Voc\xea pode se opor aos tratamentos de dados pessoais realizados, independentemente da base legal utilizada, salvo quando desenvolvido com base no consentimento."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        onClick: (e)=>this.openBox("box-21", e),
                                        className: "btn-box-hide arrow-right",
                                        children: "Portabilidade"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: "box-21",
                                        className: "box-hide hide",
                                        children: "Voc\xea pode, ainda, solicitar a portabilidade de seus dados pessoais para outra organiza\xe7\xe3o.  Neste caso, enviaremos uma c\xf3pia em CSV para que voc\xea possa fornec\xea-los a quem de direito. Caso voc\xea nos solicite, e seja tecnicamente poss\xedvel, transferiremos para voc\xea suas informa\xe7\xf5es pessoais. Por\xe9m, n\xe3o o faremos caso a portabilidade envolva dados pessoais de terceiros que n\xe3o voc\xea, sendo o pedido exclusivo do titular dos dados."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        onClick: (e)=>this.openBox("box-22", e),
                                        className: "btn-box-hide arrow-right",
                                        children: "Exclus\xe3o"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: "box-22",
                                        className: "box-hide hide",
                                        children: "Voc\xea tem o direito de solicitar a exclus\xe3o de seus dados pessoais mantidos pela Alphaville, sempre que os seus dados n\xe3o forem mais necess\xe1rios ou se forem dados em excesso para os fins da Alphaville."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        onClick: (e)=>this.openBox("box-23", e),
                                        className: "btn-box-hide arrow-right",
                                        children: "Peti\xe7\xe3o"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: "box-23",
                                        className: "box-hide hide",
                                        children: "Voc\xea pode apresentar uma reclama\xe7\xe3o junto \xe0 Autoridade Nacional de Prote\xe7\xe3o de Dados Pessoais ou \xf3rg\xe3os de defesa do consumidor. Por\xe9m, solicitamos que nos contate de forma antecipada na tentativa de solucionar a sua demanda. Na sequ\xeancia, voc\xea poder\xe1 acessar livremente os entes respons\xe1veis."
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "area-info-bg",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "politica-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sub-title",
                                children: "6. QU\xc3O SEGURO EST\xc3O SEUS DADOS?"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "description",
                                children: [
                                    "Implementamos procedimentos f\xedsicos, eletr\xf4nicos e gerenciais para monitorar a seguran\xe7a de seus dados pessoais e qualquer outra informa\xe7\xe3o que coletamos.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "Dentre as medidas adotadas est\xe3o o invent\xe1rio de dispositivos, sistemas e instala\xe7\xf5es de acordo com o risco representado por tais ativos de tecnologia, al\xe9m de um filtro de conte\xfado web e an\xe1lise de tr\xe1fego (firewall), antiv\xedrus e auditorias regulares para garantir a valida\xe7\xe3o dos controles internos de seguran\xe7a adotados, visando um processo cont\xednuo de melhoria no ambiente.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "Para obter mais informa\xe7\xf5es sobre nossos esfor\xe7os direcionados \xe0 garantia de que seus dados est\xe3o seguros, voc\xea poder\xe1 nos solicitar informa\xe7\xf5es acerca da nossa Pol\xedtica de Seguran\xe7a da Informa\xe7\xe3o.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "E lembre-se:",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "• Voc\xea fornece dados pessoais por seu pr\xf3prio risco: infelizmente, nenhuma transmiss\xe3o de dados \xe9 100% segura;"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "• Voc\xea \xe9 respons\xe1vel pelo seu nome de usu\xe1rio e senha: mantenha-os secretos e seguros;"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    "• Se voc\xea acredita que sua privacidade ou seus dados foram violados, entre em contato imediatamente pelo e-mail ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "mailto:dpo@alphaville.com.br",
                                                        children: "dpo@alphaville.com.br"
                                                    }),
                                                    "."
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "area-info",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "politica-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sub-title",
                                children: "7. ONDE ARMAZENAMOS SEUS DADOS?"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "description",
                                children: "Os dados pessoais que coletamos e todas as nossas atividades de tratamento de dados s\xe3o realizadas em nossos escrit\xf3rios no Brasil, em instala\xe7\xf5es de atividades de tratamento de dados processadas por operadoras, isto \xe9, por terceiros que prestam servi\xe7os a Alphaville."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "area-info-bg",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "politica-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sub-title",
                                children: "8. POR QUANTO TEMPO FICAMOS COM SEUS DADOS ARMAZENADOS?"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "description",
                                children: [
                                    "A reten\xe7\xe3o e utiliza\xe7\xe3o de seus dados pessoais obedecer\xe1 a medida necess\xe1ria para cumprir nossas obriga\xe7\xf5es legais, tais como: quando for necess\xe1rio reter seus dados por quest\xf5es relacionadas \xe0s fiscaliza\xe7\xf5es e obriga\xe7\xf5es legais e/ou regulat\xf3rias, para resolver disputas judiciais e/ou executar nossos contratos, enquanto este estiver vigente.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "Reteremos, ainda, dados pessoais relacionados \xe0 utiliza\xe7\xe3o dos nossos servi\xe7os, \xe0s compras realizadas e de nossos prospects e/ou leads, sempre com a finalidade de melhorar e desenvolver as nossas atividades, inclusive personalizando servi\xe7os e produtos para voc\xea."
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "area-info",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "politica-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sub-title",
                                children: "9. QUAIS S\xc3O OS TERCEIROS QUE PROCESSAM SUAS INFORMA\xc7\xd5ES PESSOAIS?"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "description",
                                children: "Utilizamos alguns prestadores de servi\xe7o que tratar\xe3o os dados pessoais, por n\xf3s coletados, para desenvolver os servi\xe7os personalizados ao cliente e auxiliar no desenvolvimento das nossas atividades."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "description",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        onClick: (e)=>this.openBox("box-24", e),
                                        className: "btn-box-hide arrow-right",
                                        children: "Nossas parcerias s\xe3o firmadas com empresas de grande reconhecimento nacional e que acreditamos serem os melhores no mercado, em suas respectivas atividades."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        id: "box-24",
                                        className: "box-hide hide",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "• Empresas de Pesquisa e An\xe1lise de Mercado, Pesquisa e An\xe1lise de Perfil de Clientes "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "• Corretores e Imobili\xe1rias"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "• Plataformas de Recrutamento e Sele\xe7\xe3o"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "• Empresas e plataformas de servi\xe7o de atendimento ao cliente"
                                                    })
                                                ]
                                            }),
                                            "Ao realizar a presta\xe7\xe3o e execu\xe7\xe3o de suas atividades, por vezes, \xe9 necess\xe1rio compartilhar suas informa\xe7\xf5es pessoais com esses prestadores para que o servi\xe7o possa ocorrer da melhor forma.",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            "As suas informa\xe7\xf5es pessoais somente ser\xe3o compartilhadas mediante acordo contratual, por meio do Termo de Tratamento de Dados Pessoais, documento que contar\xe1 com o estabelecimento de responsabilidades aos Operadores de Dados e, al\xe9m disso, sempre de acordo com esta Pol\xedtica de Privacidade e com a Pol\xedtica Empresarial de Privacidade e de Prote\xe7\xe3o de Dados Pessoais da Alphaville."
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "area-info-bg",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "politica-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sub-title",
                                children: "10. COOKIES"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "description",
                                children: [
                                    "Utilizamos cookies, desde que voc\xea n\xe3o opte por desabilitar os cookies nos ajustes de configura\xe7\xe3o de seu navegador. Os cookies ser\xe3o emitidos, coletados e arquivados a partir da sua intera\xe7\xe3o com o nosso site e nos auxiliam a identificar quando voc\xea retornar ao nosso site, para que possamos lhe oferecer um servi\xe7o cada vez mais personalizado.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "Para saber mais, acesse nossa ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_share_components_LinkCustom_LinkCustom_component__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        text: "Pol\xedtica de Cookies",
                                        arrayLink: [
                                            "politica-de-cookies"
                                        ]
                                    }),
                                    "."
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "area-info",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "politica-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sub-title",
                                children: "11. TORNANDO ESTA POL\xcdTICA \xdaTIL PARA VOC\xca"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "description",
                                children: [
                                    "Parab\xe9ns por chegar at\xe9 o final de nossa Pol\xedtica de Privacidade e Prote\xe7\xe3o de Dados Pessoais. N\xf3s a projetamos com o desenvolvimento e aux\xedlio do PDK Advogados, de modo a m\xe1xima transpar\xeancia com voc\xea, buscando trazer uma linguagem clara e \xfatil ao seu entendimento.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "Fique \xe0 vontade para entrar em contato conosco e esclarecer qualquer d\xfavida que possa persistir, atrav\xe9s do seguinte e-mail: ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "mailto:dpo@alphaville.com.br",
                                        children: "dpo@alphaville.com.br"
                                    }),
                                    ".",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "N\xe3o deixe de ler esta Pol\xedtica, pois publicaremos quaisquer altera\xe7\xf5es nesta p\xe1gina - \xe9 claro que mudan\xe7as significativas ser\xe3o notificadas por e-mail."
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PoliticaDePrivacidade);


/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(699)


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 2947:
/***/ ((module) => {

"use strict";
module.exports = require("jquery");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 2423:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Accordion");

/***/ }),

/***/ 7511:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ 128:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Collapse");

/***/ }),

/***/ 9306:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ 8907:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,1270,1664,1790,5176,1659,4756], () => (__webpack_exec__(2285)));
module.exports = __webpack_exports__;

})();