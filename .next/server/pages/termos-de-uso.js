(() => {
var exports = {};
exports.id = 7555;
exports.ids = [7555,2197];
exports.modules = {

/***/ 9764:
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






// import './../public/static/termos-de-uso.scss';
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
            title: "Termos de uso Alphaville",
            active: "termos-de-uso",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "area-info",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "termos-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "title",
                                children: "TERMOS DE USO ALPHAVILLE"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "sub-title-h3",
                                children: "Bem-vindo ao Site Institucional da Alphaville"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "description",
                                children: "O presente documento pretende trazer esclarecimentos acerca da utiliza\xe7\xe3o do conte\xfado e dos recursos disponibilizados no Site Institucional. Ao final, oferecemos um gloss\xe1rio com alguns termos, visando facilitar o entendimento."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sub-title",
                                children: "1. FINALIDADE DO SITE INSTITUCIONAL"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "description",
                                children: [
                                    "Este Site Institucional \xe9 um site de internet desenvolvido com a finalidade de aproximar e ampliar o relacionamento entre a Alphaville e as partes interessadas em nossas atividades, tais como consumidores e empresas parceiras, buscando integrar a tecnologia e seus recursos aos requisitos legais.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Neste Site Institucional disponibilizaremos informa\xe7\xf5es, constantemente atualizadas, acerca de nossos empreendimentos e unidades."
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "area-info-bg",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "termos-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sub-title",
                                children: "2. CONTE\xdaDOS ACESS\xcdVEIS"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "description",
                                children: "Os USU\xc1RIOS devem dispor de seus pr\xf3prios recursos para acessar \xe0 internet e este Site Institucional, cuja visita\xe7\xe3o se limita aos conte\xfados oferecidos de forma gratuita, sujeitando-se \xe0 aplica\xe7\xe3o da legisla\xe7\xe3o penal brasileira e obrigando-se a reparar os danos que decorrerem da utiliza\xe7\xe3o indevida, sendo expressamente vedado:"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "description ml-5",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "• Acesso \xe0s \xe1reas de programa\xe7\xe3o do Site Institucional, seu banco de dados ou qualquer outro conjunto de informa\xe7\xf5es n\xe3o autorizadas;"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "• Realizar engenharia reversa, traduzir ou decompilar os c\xf3digos fontes utilizados que n\xe3o forem abertos, com a finalidade de copiar, modificar, reproduzir, alugar, sublicenciar, publicar, divulgar, transmitir, emprestar, distribuir ou, de outra maneira, dispor das ferramentas de consulta deste Site Institucional e de suas funcionalidades;"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "• Utilizar aplicativos spider, ou de minera\xe7\xe3o de dados, de qualquer tipo ou esp\xe9cie, al\xe9m de outro aqui n\xe3o tipificado, mas que atue de modo automatizado, tanto para realizar opera\xe7\xf5es massificadas ou para quaisquer outras finalidades."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "description",
                                children: [
                                    "O simples acesso ao conte\xfado disponibilizado no Site Institucional independe de cadastro, mas caso voc\xea esteja interessado em alguma de nossas Unidades e/ou Empreendimentos \xe9 indispens\xe1vel que nos forne\xe7a dados corretos e precisos, al\xe9m de nos informar acerca de qualquer tipo de altera\xe7\xe3o em seus dados, para que possamos os manter sempre atualizados.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Ao acessar o nosso site, voc\xea aceita e se compromete a n\xe3o usar nenhum conte\xfado aqui exposto para finalidades il\xedcitas em desacordo com as boas pr\xe1ticas, ou para prop\xf3sitos diversos ou finalidades n\xe3o previstas neste documento."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Voc\xea tamb\xe9m se compromete em n\xe3o reproduzir, modificar, realizar engenharia reversa, compilar, descompilar, transmitir, publicar, sublicenciar, permitir, autorizar, alugar, vender, distribuir, ou, de qualquer outra forma, utilizar qualquer conte\xfado, funcionalidade, software ou material da Alphaville sem a nossa pr\xe9via e expressa autoriza\xe7\xe3o, por escrito."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Tamb\xe9m \xe9 proibida a explora\xe7\xe3o e utiliza\xe7\xe3o comercial, por qualquer meio, de qualquer parte dos servi\xe7os ou dos conte\xfados da Alphaville."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Caso voc\xea n\xe3o aja de acordo com a conduta que se espera e cometa quaisquer ilegalidades ou irregularidades no uso deste site, reservamo-nos o direito de investigar e tomar as medidas legais e administrativas cab\xedveis, sem preju\xedzo de o usu\xe1rio arcar com perdas e danos."
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "area-info",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "termos-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sub-title",
                                children: "3. FORMUL\xc1RIO “FALE CONOSCO”, PRIVACIDADE E PROTE\xc7\xc3O DE DADOS DO USU\xc1RIO"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "description",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "No Site Institucional \xe9 poss\xedvel encontrar o bot\xe3o “FALE CONOSCO”, pelo qual o usu\xe1rio pode conversar com um de nossos consultores de vendas acerca dos nossos empreendimentos, ou pelo qual o usu\xe1rio que preste servi\xe7os de paisagismo, visagismo, limpeza, seguran\xe7a, pintura ou algo relacionado a manuten\xe7\xe3o de \xe1reas comuns, bem como servi\xe7os e produtos coorporativos, podem entrar em contato conosco para apresentar o seu trabalho."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            "Para isto, coletamos seu nome, endere\xe7o e-mail, telefone, seu estado e cidade. Esses dados pessoais s\xe3o coletados e tratados em conformidade com a Lei Geral de Prote\xe7\xe3o de Dados Pessoais (LGPD). Essas informa\xe7\xf5es s\xe3o coletadas para que possamos responder os usu\xe1rios e para o envio de informa\xe7\xf5es que consideramos relevantes para voc\xea, sendo garantido sempre o exerc\xedcio do direito de ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                children: "opt-out"
                                            }),
                                            "."
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "A Alphaville coleta apenas os dados pessoais necess\xe1rios para a realiza\xe7\xe3o de suas finalidades, com abrang\xeancia de dados pertinentes, proporcionais e n\xe3o excessivos."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Ademais, a Alphaville garante aos usu\xe1rios exatid\xe3o e clareza sobre o tratamento de dados pessoais realizado e sempre adota medidas t\xe9cnicas e organizacionais adequadas para garantir a privacidade do usu\xe1rio, bem como a prote\xe7\xe3o contra acessos n\xe3o autorizados e de situa\xe7\xf5es acidentais ou il\xedcitas de destrui\xe7\xe3o, perda, altera\xe7\xe3o, comunica\xe7\xe3o ou difus\xe3o."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Para saber mais sobre como s\xe3o tratados seus dados aqui no site, acesse a nossa Pol\xedtica de Privacidade e fique por dentro, ou entre em contato com o nosso Encarregado de Dados (DPO) atrav\xe9s do endere\xe7o: dpo@alphaville.com.br."
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "area-info-bg",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "termos-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sub-title",
                                children: "4. FUNCIONAMENTO"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "description",
                                children: [
                                    "A Alphaville se esfor\xe7ar\xe1 para manter a disponibilidade cont\xednua e permanente deste Site Institucional ao p\xfablico, contudo:",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "description ml-5",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "• Reserva-se o direito de promover aprimoramentos e atualiza\xe7\xf5es que podem alterar a estrutura ou o layout do Site Institucional, conforme sua conveni\xeancia;"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "• Se mant\xe9m isento de responsabilidade no caso deste Site Institucional permanecer fora do ar;"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "• Se mant\xe9m isento na ocorr\xeancia de dano, preju\xedzo ou perda no equipamento dos USU\xc1RIOS causados por falhas no sistema, no servidor ou na conex\xe3o \xe0 Internet, inclusive por a\xe7\xf5es de softwares maliciosos como v\xedrus e outros que possam, de algum modo, danificar o equipamento ou a conex\xe3o dos USU\xc1RIOS em decorr\xeancia do acesso, utiliza\xe7\xe3o ou navega\xe7\xe3o neste Site Institucional, bem como a transfer\xeancia de dados, arquivos, imagens, textos, \xe1udios ou v\xeddeos contidos no mesmo."
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
                        className: "termos-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sub-title",
                                children: "5. LINKS EXTERNOS"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "description",
                                children: "O Site Institucional pode indicar links externos para acesso do USU\xc1RIO, mas a Alphaville n\xe3o se responsabiliza por qualquer verifica\xe7\xe3o, controle, aprova\xe7\xe3o ou garantia de adequa\xe7\xe3o ou exatid\xe3o de informa\xe7\xf5es e dados dispon\xedveis nestes links."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "description ml-5",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                            children: "Por isso, n\xe3o ser\xe1 respons\xe1vel:"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "• Por qualquer dano decorrente do acesso dos USU\xc1RIOS a estes links externos;"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: "• Por preju\xedzos, perdas ou danos ocorridos por atrasos, defeitos, erros ou omiss\xf5es que possam existir nos sistemas ou servi\xe7os disponibilizados ou pela visita a tais sites ou pelas funcionalidades l\xe1 oferecidas."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "description",
                                children: "\xc9 dever dos USU\xc1RIOS efetuar a leitura dos Termos de Uso, da Pol\xedtica de Privacidade e demais documentos legais e informativos dos sites acessados por meio dos links externos contidos em nosso Site Institucional, e agir conforme o determinado em tais documentos."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "area-info-bg",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "termos-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sub-title",
                                children: "6. PROPRIEDADE INTELECTUAL"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "description",
                                children: [
                                    "Ao acessar este Site Institucional, os USU\xc1RIOS se comprometem a respeitar todos os direitos de propriedade intelectual e os decorrentes da prote\xe7\xe3o de marcas, patentes e/ou desenhos industriais, depositados ou registrados em nome da Alphaville, bem como todos os direitos referentes a terceiros que porventura estejam, ou estiveram, de alguma forma, dispon\xedveis no site.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Os conte\xfados disponibilizados pela Alphaville, como v\xeddeos, informativos, esquemas, conte\xfado interativo e outros, s\xe3o resguardados pelos direitos de propriedade intelectual e sob nenhuma circunst\xe2ncia os USU\xc1RIOS adquirem quaisquer direitos sobre estes."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Qualquer uso indevido do conte\xfado disponibilizado poder\xe1 ser considerado como ato il\xedcito e sujeito \xe0s penas previstas na legisla\xe7\xe3o em vigor e de condena\xe7\xe3o \xe0 indeniza\xe7\xe3o ou ressarcimento de quem sofrer preju\xedzos."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "\xc9 autorizada a reprodu\xe7\xe3o, distribui\xe7\xe3o, impress\xe3o de c\xf3pias para distribui\xe7\xe3o e divulga\xe7\xe3o, total ou parcial, dos textos, imagens, cartilhas e v\xeddeos que comp\xf5em o presente site, sem fins lucrativos, desde que a Alphaville seja creditada e o conte\xfado n\xe3o seja alterado, particionado ou de qualquer forma manipulado de modo que impossibilite o fiel e real entendimento de seu conte\xfado e objetivo, salvo disposi\xe7\xe3o espec\xedfica para cada conte\xfado em p\xe1gina pr\xf3pria."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Os USU\xc1RIOS assumem toda e qualquer responsabilidade, de car\xe1ter civil e/ou criminal pela utiliza\xe7\xe3o indevida de dados e conte\xfado publicados pelo site, a exemplo, mas n\xe3o se restringindo \xe0s informa\xe7\xf5es, textos, gr\xe1ficos, marcas, obras e imagens."
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "area-info",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "termos-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sub-title",
                                children: "7. COMUNICA\xc7\xc3O"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "description",
                                children: [
                                    "A Alphaville, com base no interesse leg\xedtimo da Companhia, poder\xe1 entrar em contato ou submeter conte\xfado aos USU\xc1RIOS do Site Institucional, bem como \xe0queles que interagem conosco.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Para tanto, \xe9 indispens\xe1vel que os USU\xc1RIOS forne\xe7am dados corretos e precisos, al\xe9m de os manterem atualizados."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "\xc9 responsabilidade exclusiva dos USU\xc1RIOS o ajuste de seus sistemas de AntiSpam, de modo que n\xe3o interfiram no recebimento dos comunicados e conte\xfado da Alphaville, n\xe3o sendo aceit\xe1vel nenhuma escusa caso n\xe3o tenha tido acesso a algum e-mail em virtude desse bloqueio ou filtro similar."
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "area-info-bg",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "termos-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sub-title",
                                children: "8. PRIVACIDADE DOS USU\xc1RIOS NO SITE INSTITUCIONAL"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "description",
                                children: [
                                    "A Alphaville possu\xed uma ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_share_components_LinkCustom_LinkCustom_component__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        text: "Pol\xedtica de Privacidade",
                                        arrayLink: [
                                            "politica-de-privacidade"
                                        ]
                                    }),
                                    ", que regula o tratamento dado \xe0s informa\xe7\xf5es de cadastro e demais informa\xe7\xf5es e dados coletados. \xc9 dever dos USU\xc1RIOS conhecer este regulamento.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "A Pol\xedtica de Privacidade \xe9 parte integrante e insepar\xe1vel dos Termos de Uso e Condi\xe7\xf5es de Navega\xe7\xe3o deste Site Institucional e pode ser acessada no link espec\xedfico identificado no Site Institucional."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Caso alguma disposi\xe7\xe3o da Pol\xedtica de Privacidade conflitar com qualquer outra do presente documento, dever\xe1 prevalecer o descrito na norma mais espec\xedfica."
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "area-info",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "termos-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sub-title",
                                children: "9. USO \xc9TICO, SEGURO E LEGAL DOS RECURSOS DE TECNOLOGIA"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "description",
                                children: [
                                    "Ser \xe9tico significa agir de acordo com as regras que orientam a sociedade, portanto, a Alphaville agir\xe1 sempre de acordo com a \xe9tica e a moral. Assim como os USU\xc1RIOS devem sempre respeitar as condi\xe7\xf5es que regem a utiliza\xe7\xe3o do Site Institucional.",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            "A Alphaville desenvolveu o Canal Confidencial para reclama\xe7\xf5es, que pode ser acessado anonimamente ou n\xe3o, por onde qualquer pessoa pode denunciar atitudes ou a\xe7\xf5es que n\xe3o estejam de acordo com os princ\xedpios estabelecidos pelo ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                target: "_blank",
                                                href: "/be_alphaville/public/uploads/contact_us/canal_confidencial_inclusao_arquivo/codigo-de-etica_v2022.pdf",
                                                children: "C\xf3digo de \xc9tica"
                                            }),
                                            "."
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Com rela\xe7\xe3o \xe0 seguran\xe7a das informa\xe7\xf5es, ao fornecerem dados e informa\xe7\xf5es, os USU\xc1RIOS se obrigam a faz\xea-lo sempre com compromisso de veracidade e autenticidade, bem como observar a finalidade para que foi constitu\xeddo."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Os USU\xc1RIOS devem manter o sigilo dos dados de sua conta de acesso, sua senha e demais dispositivos de autentica\xe7\xe3o em rela\xe7\xe3o a terceiros, n\xe3o os divulgando ou compartilhando com quem quer que seja."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Se n\xe3o conseguirem acessar a Internet para obter suporte, dever\xe1 buscar atendimento dentre os canais dispon\xedveis."
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "area-info-bg",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "termos-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sub-title",
                                children: "10. MODIFICA\xc7\xd5ES DESTES TERMOS E CONDI\xc7\xd5ES"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "description",
                                children: [
                                    "O presente Termo de Uso est\xe1 sujeito a constante melhoria e aprimoramento. Assim, a Alphaville se reserva ao direito de modificar a qualquer momento, de forma unilateral, o presente documento e sua Pol\xedtica de Privacidade.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Por isso, recomenda-se que o USU\xc1RIO guarde uma c\xf3pia desses documentos no momento da cria\xe7\xe3o de conta de acesso no site, tal qual a execu\xe7\xe3o de cada atividade nele."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Ao navegar por este site e utilizar suas funcionalidades, voc\xea aceita guiar-se pelos Termos e Condi\xe7\xf5es de Uso do site, e pela Pol\xedtica de Privacidade que se encontram vigentes na data e, portanto, deve verificar os mesmos cada vez que visitar este site."
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "area-info",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "termos-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sub-title",
                                children: "11. DISPOSI\xc7\xd5ES GERAIS"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "description",
                                children: [
                                    "A toler\xe2ncia do eventual descumprimento de quaisquer das cl\xe1usulas e condi\xe7\xf5es do presente instrumento n\xe3o constituir\xe1 nova\xe7\xe3o das obriga\xe7\xf5es aqui estipuladas e tampouco impedir\xe1 ou inibir\xe1 a exigibilidade das mesmas a qualquer tempo.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Caso alguma disposi\xe7\xe3o destes Termos de Uso seja considerada ileg\xedtima por autoridade da localidade que o USU\xc1RIO acessa o site, ou mant\xe9m v\xednculo, as demais condi\xe7\xf5es permanecer\xe3o em pleno vigor e efeito at\xe9 segunda ordem."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "A Alphaville poder\xe1 alterar os crit\xe9rios de elegibilidade de sua plataforma ou da realiza\xe7\xe3o de atividades nela a qualquer momento. Tamb\xe9m, possui a faculdade de se recusar a conceder conta de acesso a qualquer pessoa ou entidade que tiver descumprido previamente os Termos de Uso ou documento legal do site e teve sua conta de acesso suspensa, exclu\xedda ou banida por esta raz\xe3o."
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "area-info-bg",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "termos-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sub-title",
                                children: "12. LEI APLIC\xc1VEL E JURISDI\xc7\xc3O"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "description",
                                children: "Os Termos e Condi\xe7\xf5es de Uso aqui descritos s\xe3o interpretados segundo a legisla\xe7\xe3o brasileira, no idioma portugu\xeas, sendo eleito o Foro da Capital de S\xe3o Paulo – SP para dirimir qualquer lit\xedgio, quest\xe3o ou d\xfavida superveniente, com expressa ren\xfancia de qualquer outro, por mais privilegiado que seja."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "area-info",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "termos-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sub-title",
                                children: "13. GLOSS\xc1RIO"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "description",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        children: "AntiSpam"
                                    }),
                                    ": sistema que evita correspond\xeancias n\xe3o desejadas, como publicidade em massa, pelo bloqueio de mensagens ou as movendo para pasta espec\xedfica.",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                children: "Aplicativo spider"
                                            }),
                                            ": Programa desenvolvido para obter informa\xe7\xf5es de modo automatizado na internet, navegando pela web (teia) como se fosse uma spider (aranha)."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                children: "Conta de Acesso"
                                            }),
                                            ": credencial de um visitante cadastrado que permite o acesso \xe0 \xe1rea restrita e \xe0s funcionalidades exclusivas, que \xe9 definida pelo nome de USU\xc1RIO e senha."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                children: "Layout"
                                            }),
                                            ": Conjunto compreendido entre apar\xeancia, design e fluxos do Site Institucional."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                children: "Link"
                                            }),
                                            ": Terminologia para endere\xe7o de internet."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                children: "Logs"
                                            }),
                                            ": Registros de atividades dos USU\xc1RIOS efetuadas no Site Institucional."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                children: "Site Institucional"
                                            }),
                                            ": Designa os endere\xe7os eletr\xf4nicos “www.alphaville.com.br” e seus subdom\xednios."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                children: "Site"
                                            }),
                                            ": Denomina\xe7\xe3o para p\xe1ginas de internet."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                children: "USU\xc1RIO"
                                            }),
                                            ": Todo visitante do Site Institucional."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                children: "Opt-out"
                                            }),
                                            ": possibilidade de o usu\xe1rio deixar de receber o conte\xfado produzido pela Alphaville, a partir do momento que manifestar seu desinteresse."
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "area-info",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "termos-content",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "description",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                children: "Atualiza\xe7\xe3o: 3 setembro de 2021."
                            })
                        })
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
var __webpack_exports__ = __webpack_require__.X(0, [2952,1270,1664,1790,5176,1659,4756], () => (__webpack_exec__(9764)));
module.exports = __webpack_exports__;

})();