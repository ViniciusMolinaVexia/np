(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9637],{3188:function(e,a){"use strict";a.Z={src:"/_next/static/media/lazer-icon.96d01868.svg",height:121,width:121}},3596:function(e,a){"use strict";a.Z={src:"/_next/static/media/lideranca-icon.b821cab9.svg",height:121,width:121}},5007:function(e,a){"use strict";a.Z={src:"/_next/static/media/natureza-icon.1e2cf189.svg",height:121,width:121}},856:function(e,a){"use strict";a.Z={src:"/_next/static/media/qualidade-construtiva-icon.0cc1933b.svg",height:121,width:121}},7308:function(e,a){"use strict";a.Z={src:"/_next/static/media/seguranca-icon.2ed1b5c4.svg",height:121,width:121}},3331:function(e,a,i){"use strict";var t=i(7568),s=i(414),r=i(5893),n=i(682),o=i(4051),l=i(1555),c=i(4835),d=i(2175),m=i(7294),u=i(1110),h=i(4434),p=i(1790),g=i(4562),_=i(3112),v=i(6008),x=i(1659),f=i(4184),b=i.n(f),j=i(1442),S=i.n(j);a.Z=function(e){e.setNameFormulario;var a=e.colors,i=e.homeContent,f=e.isTeaser,j=function(e,a){return"logoJardim"===a?{submit:e.btnSubmitJardim,field:e.formFieldJardim}:"logoTerras"===a?{submit:e.btnSubmitTerra,field:e.formFieldTerra}:{submit:e.btnSubmitAlphaville,field:e.formFieldAlphaville}},w=(0,m.useState)(!1),C=w[0],y=w[1],A=(0,m.useState)([]),N=A[0],Z=A[1],T=(0,m.useState)(null),k=T[0],F=T[1],I=(0,m.useState)(!1),z=I[0],M=I[1],E=(0,m.useState)(""),P=E[0],L=E[1];(0,m.useEffect)((function(){(new _.Z).fillRdStation(window.location.pathname,{},"teaser-saibamais.form");var e=function(){var e=(0,t.Z)((function(){var e;return(0,s.__generator)(this,(function(a){switch(a.label){case 0:return[4,(new v.Z).getEnterprisesForHouseCRM()];case 1:return e=a.sent(),Z(e),[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[]);var q={color:a.colorFlat};return(0,r.jsx)("section",{className:S().areaFormSaibaMais,id:"saiba-mais",children:(0,r.jsx)(n.Z,{children:(0,r.jsxs)(o.Z,{className:S().areaConteudo,children:[(0,r.jsx)("div",{className:S().areaTitle,children:(0,r.jsx)("h2",{style:q,className:S().saibaMaisTitle,dangerouslySetInnerHTML:{__html:i.formSaibaMais}})}),(0,r.jsx)(d.J9,{initialValues:{name:"",email:"",celular:"",celularAdicional:"",checked:[],idCv:void 0,descricaoCv:void 0},validate:function(e){var a={},i=new x.Z;i.validateName(e.name)&&(a.name=i.validateName(e.name)),i.validateEmail(e.email)&&(a.email=i.validateEmail(e.email)),i.validateTel(e.celular,!0)&&(a.celular=i.validateTel(e.celular,!0)),i.validateTel(e.celularAdicional,!1)&&""!=e.celularAdicional&&(a.celularAdicional=i.validateTel(e.celularAdicional,!1)),i.validateCheckbox(e.checked)&&(a.checked=i.validateCheckbox(e.checked));var t=!(!e.celular||!e.celularAdicional);return t&&(t=e.celular==e.celularAdicional,y(t),t&&(a.celularAdicional="invalid")),a},onSubmit:function(){var e=(0,t.Z)((function(e,a){var r;return(0,s.__generator)(this,(function(n){return r=a.setSubmitting,setTimeout((0,t.Z)((function(){var a,t,n,o,l,c,d,m,_,v,b,j,S,w,C;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return s.trys.push([0,5,,6]),r(!0),M(!0),a=new h.Z,t=a.getEnterprise(N,i.uf.title,i.cidade),e.CodEmpreendimento=i.idCv,e.NomeEmpreendimento=i.descricaoCv,n=(new x.Z).splitPhoneDdd(e.celular),o=(new x.Z).splitPhoneDdd(e.celularAdicional),"Empreendimento: "+i.title+" id: "+i.id,l="Empreendimento: ".concat(t?t.emprendimento:i.title,"."),"Estado: ".concat(i.uf.uf," - Cidade: ").concat(i.cidade),e.state=i.uf.uf,e.city=i.cidade,c=e.checked.length>0?"Li e concordo com a Pol\xedtica de Privacidade, Pol\xedtica de Cookies e Termo de Uso da Alphaville.":"",d=i.idCv,m=i.id,i.title,_=i.tipoCv,v=i.pracaCv,b=null,v?[4,(new u.Z).sendApiCv(e.name,e.email,n.ddd.replace(/\D/g,""),n.phone.replace(/\D/g,""),o.ddd.replace(/\D/g,""),o.phone.replace(/\D/g,""),d,i.descricaoCv,_,v,m)]:[3,2];case 1:return j=s.sent(),b=j.success,L(j.statusText),setTimeout((function(){L("")}),25e3),[3,4];case 2:return S=0,t&&t.codEmpreend&&(S=parseInt(t.codEmpreend)),[4,(new g.Z).sendApiRdStation(e.name,e.email,n.ddd.replace(/\D/g,""),n.phone.replace(/\D/g,""),e.CodEmpreendimento,e.NomeEmpreendimento,S,l,e.state,e.city,e.msg,"home_whats.form",c)];case 3:w=s.sent(),b=w.success,s.label=4;case 4:return b?(sessionStorage.setItem(p.zg,JSON.stringify({Name:e.name,Email:e.email,Success:b,PhoneOne:n.ddd.replace(/\D/g,""),PhoneTwo:n.phone.replace(/\D/g,""),PhoneAdctionalOne:o.ddd.replace(/\D/g,""),PhoneAdctionalTwo:o.phone.replace(/\D/g,""),MessageAgradecimento:i.messageAgradecimento,Slug:i.slug})),window.dataLayer.push({event:"ga_event",event_name:"conversao_formulario_empreendimento",ec:"whatsapp",ea:"envio",el:"sucesso"}),F(!0),window.location.href="/".concat(f?"teaser":"residencia","/").concat(i.slug,"/agradecimento?success=").concat(b?"true":"false")):(F(!1),setTimeout((function(){F(null)}),25e3),window.dataLayer.push({event:"ga_event",event_name:"conversao_formulario_empreendimento",ec:"whatsapp",ea:"envio",el:"erro"})),r(!1),M(!1),[3,6];case 5:return C=s.sent(),r(!1),M(!1),console.error("erro ao enviar api",C),e.sendSuccess=!1,[3,6];case 6:return[2]}}))})),500),[2]}))}));return function(a,i){return e.apply(this,arguments)}}(),children:function(e){var t=e.values,s=e.errors,n=e.touched,m=e.handleChange;e.handleBlur,e.handleSubmit,e.isSubmitting;return(0,r.jsxs)(d.l0,{name:"produto_interesse.form",action:"/".concat(f?"teaser":"residencia","/").concat(i.slug,"/agradecimento?success=").concat(t.sendSuccess?"true":"false"),className:S().areaForm,children:[(0,r.jsx)(o.Z,{children:(0,r.jsxs)(l.Z,{xs:12,className:S().areaFields,children:[(0,r.jsx)(d.gN,{id:"name",name:"name",placeholder:"NOME",className:b()(j(S(),a.displayColor).field,s.name&&n.name?S().required:"")}),(0,r.jsx)(d.gN,{id:"email",name:"email",placeholder:"E-MAIL",type:"email",className:b()(j(S(),a.displayColor).field,s.email&&n.email?S().required:"")}),(0,r.jsx)(d.gN,{id:"celular",name:"celular",value:(new x.Z).foneMask(t.celular),placeholder:"(xx) 9XXXX-XXXX",className:b()(j(S(),a.displayColor).field,s.celular&&n.celular?S().required:"")}),(0,r.jsx)(d.gN,{id:"celularAdicional",name:"celularAdicional",value:(new x.Z).foneMask(t.celularAdicional),placeholder:"(xx) XXXXX-XXXX",className:b()(j(S(),a.displayColor).field,s.celularAdicional&&n.celularAdicional?S().required:"")}),(0,r.jsx)(d.gN,{id:"idCv",name:"idCv",type:"hidden",value:i?i.idCv:0}),(0,r.jsx)(d.gN,{id:"descricaoCv",name:"descricaoCv",type:"hidden",value:i?i.descricaoCv:""}),(0,r.jsx)("button",{type:"submit",disabled:z,className:b()(j(S(),a.displayColor).field,j(S(),a.displayColor).submit,z?S().btnSubmitSending:""),children:z?"ENVIANDO":"ENVIAR"})]})}),C&&(0,r.jsx)(o.Z,{children:(0,r.jsx)(l.Z,{xs:12,className:S().areaFields,children:(0,r.jsx)("p",{className:S().hasErrorInfo,children:'O n\xfamero informado em "Celular Adicional" e "Celular" n\xe3o podem ser iguais.'})})}),0==k&&(0,r.jsx)(o.Z,{children:(0,r.jsx)(l.Z,{xs:12,className:S().areaFields,children:(0,r.jsxs)("p",{className:S().hasErrorInfo,children:["Erro ao enviar contato. ",P]})})}),(0,r.jsx)(o.Z,{className:S().areaCheckbox,children:(0,r.jsx)(l.Z,{xs:12,className:S().inputCheckbox,children:(0,r.jsxs)(c.Z.Label,{className:b()(S().labelCheckbox,S().checkboxBase,s.checked&&n.checked?S().invalidCheckbox:S().validCheckbox),children:[(0,r.jsx)(d.gN,{type:"checkbox",name:"checked",id:"concordo",onChange:m,value:"concordo"}),(0,r.jsxs)("span",{className:S().checkboxDescricao,children:["Li e concordo com a\xa0",(0,r.jsx)("a",{className:S().underlinedLink,href:"/politica-de-privacidade",target:"_blank",children:"Pol\xedtica de Privacidade"}),", a\xa0",(0,r.jsx)("a",{className:S().underlinedLink,href:"/politica-de-cookies",target:"_blank",children:"Pol\xedtica de Cookies"})," ","e o\xa0",(0,r.jsx)("a",{className:S().underlinedLink,href:"/termos-de-uso",target:"_blank",children:"Termo de Uso da Alphaville"}),"."]})]})})})]})}})]})})})}},2070:function(e,a,i){"use strict";var t=i(5893),s=i(7294),r=i(7054),n=i(1790);a.Z=function(e){var a=e.objLatLng,i=e.isMobile,o=(0,r.Ji)({id:"google-map-script",googleMapsApiKey:n.o2}).isLoaded,l=(0,s.useState)(null),c=(l[0],l[1]),d={width:"100%",height:i?"354px":"100%"},m=(0,s.useCallback)((function(e){var i=new window.google.maps.LatLngBounds(a);e.fitBounds(i),c(e)}),[]),u=(0,s.useCallback)((function(e){c(null)}),[]);return o?(0,t.jsx)(r.b6,{mapContainerStyle:d,center:a,options:{minZoom:4,maxZoom:18},onLoad:m,onUnmount:u,children:(0,t.jsx)(r.Jx,{position:a})}):(0,t.jsx)("h2",{children:"Sem Mapa"})}},6696:function(e,a,i){"use strict";i.d(a,{Z:function(){return y}});var t=i(6042),s=i(9396),r=i(5893),n=i(4051),o=i(1555),l=i(9447),c=i(4002),d=i(172),m=i(5186),u=i(2997),h=i(7649),p=i(5675),g=i.n(p),_=(i(7294),i(4184)),v=i.n(_),x=i(3188),f=i(3596),b=i(5007),j=i(856),S=i(7308),w=i(9527),C=i.n(w);function y(e){var a,i=e.colors,d=e.isMobile,p=e.imagesCadaSorriso,_=(e.myLoader,p||(f.Z,b.Z,x.Z,j.Z,S.Z),{centeredSlides:!0,speed:400,slidesPerView:d?1:3,autoplay:{delay:5e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});return(0,r.jsx)(n.Z,{children:(0,r.jsx)(o.Z,{children:p?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("section",{className:v()(C().teaserCarrosselSwiperContainer,"teaser-carrossel-simples","teaser-carrossel-images",(a=i.displayColor,"logoJardim"===a?"jardim":"logoTerras"===a?"terras":"alphaville")),children:(0,r.jsx)("div",{children:(0,r.jsx)(l.t,(0,s.Z)((0,t.Z)({},_),{loop:!0,modules:[h.Z,u.Z,m.Z],navigation:!0,spaceBetween:0,children:p.map((function(e,a){return(0,r.jsx)(c.o,{children:(0,r.jsx)("div",{className:p?null:C().teaserCarrosselSwiperImages,style:p&&!d?{height:"350px"}:{height:"200px"},children:(0,r.jsx)(g(),{src:e,layout:"fill",objectFit:"contain",sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",priority:!0},a)})},a)}))}))})})}):""})})}d.Z.use([m.Z,u.Z,h.Z])},7444:function(e,a,i){"use strict";i.d(a,{Z:function(){return m}});var t=i(5893),s=i(682),r=i(4051),n=i(1555),o=i(1790),l=(i(7294),i(6696)),c=i(2699),d=i.n(c);function m(e){var a=e.homeContent,i=e.colors,c=e.isMobile,m=e.isTeaser,u={color:i.colorFlat};return(0,t.jsx)("section",{className:d().areaTeaserCarrosselCadaSorriso,children:(0,t.jsxs)(s.Z,{className:d().container,children:[(0,t.jsx)(r.Z,{children:(0,t.jsx)(n.Z,{xs:12,children:(0,t.jsxs)("div",{className:d().areaTitleTeaserCarrosselCadaSorriso,children:[(0,t.jsx)("h2",{style:u,className:d().title,children:a.titleCadaSorriso}),(0,t.jsx)("h3",{className:d().description,dangerouslySetInnerHTML:{__html:a.GaleriaImagemDescription}})]})})}),(0,t.jsx)("div",{className:d().teaserCarrosselCadaSorriso,children:(0,t.jsx)(l.Z,{colors:i,isMobile:c,imagesCadaSorriso:function(e){var a;return(null===(a=e.imagesCarrossel)||void 0===a?void 0:a.filter((function(e){if(m){if("principal"==e.tipo)return e}else{if("secundario"==e.tipo)return e;if("principal"==e.tipo)return e}}))).map((function(e){return o.GU+"/"+e.image}))}(a)})})]})})}},5298:function(e,a,i){"use strict";i.d(a,{Z:function(){return te}});var t=i(6042),s=i(9396),r=i(5893),n=i(4051),o=i(1555),l=i(7294),c=i(9447),d=i(4002),m=i(172),u=i(5186),h=i(2997),p=i(7649),g=i(5675),_=i.n(g),v=i(4184),x=i.n(v),f={src:"/_next/static/media/empreendimentos-icon-brown.2436cc72.svg",height:121,width:89},b={src:"/_next/static/media/empreendimentos-icon-green.6c64e3cd.svg",height:121,width:89},j={src:"/_next/static/media/experiencia-icon-brown.4de023e9.svg",height:121,width:106},S={src:"/_next/static/media/experiencia-icon-green.f626066c.svg",height:121,width:106},w=i(3188),C={src:"/_next/static/media/lazer-brown.0e1e6b53.svg",height:106,width:118},y={src:"/_next/static/media/lazer-green.d03bde67.svg",height:106,width:118},A={src:"/_next/static/media/lazer-orange.130f4fdc.svg",height:106,width:118},N={src:"/_next/static/media/lazer-icon-red.fe4954a2.svg",height:81,width:81},Z={src:"/_next/static/media/lazer-yellow.ffeadf8f.svg",height:106,width:118},T={src:"/_next/static/media/lideranca-brown.2c2f571a.svg",height:97,width:117},k={src:"/_next/static/media/lideranca-green.990949fb.svg",height:97,width:117},F=i(3596),I={src:"/_next/static/media/lideranca-orange.d017986a.svg",height:97,width:117},z={src:"/_next/static/media/lideranca-icon-red.4144ed8d.svg",height:81,width:81},M={src:"/_next/static/media/lideranca-yellow.09a8fde9.svg",height:97,width:117},E={src:"/_next/static/media/natureza-icon-brown.bd480fb9.svg",height:121,width:121},P={src:"/_next/static/media/natureza-icon-green.df6fa7d7.svg",height:121,width:121},L=i(5007),q={src:"/_next/static/media/natureza-orange.6d661a1b.svg",height:120,width:98},D={src:"/_next/static/media/natureza-icon-red.dbefa60e.svg",height:81,width:81},V={src:"/_next/static/media/natureza-yellow.00275737.svg",height:120,width:98},U={src:"/_next/static/media/premio-icon-brown.2fcb9ba9.svg",height:121,width:90},J={src:"/_next/static/media/premio-icon-green.3ae7d15a.svg",height:121,width:90},G={src:"/_next/static/media/qualidade-construtiva-icon-green.c94f1ec3.svg",height:121,width:121},X=i(856),B={src:"/_next/static/media/qualidade-construtiva-icon-brown.89fde4ea.svg",height:116,width:116},O={src:"/_next/static/media/qualidade-construtiva-orange.a84b9486.svg",height:116,width:116},Q={src:"/_next/static/media/qualidade-construtiva-icon-red.e69f1f09.svg",height:81,width:81},R={src:"/_next/static/media/qualidade-construtiva-yellow.56b17527.svg",height:116,width:116},H={src:"/_next/static/media/seguranca-icon-brown.837d2ac7.svg",height:121,width:121},K={src:"/_next/static/media/seguranca-icon-green.31df4abf.svg",height:121,width:121},Y=i(7308),W={src:"/_next/static/media/seguranca-orange.a0f5626c.svg",height:119,width:99},$={src:"/_next/static/media/seguranca-icon-red.e31276e8.svg",height:81,width:81},ee={src:"/_next/static/media/seguranca-yellow.80975333.svg",height:119,width:99},ae=i(824),ie=i.n(ae);function te(e){var a=e.colors,i=e.isMobile,m=e.imagesCadaSorriso,g=(e.homeContent,(0,l.useState)(null)),v=g[0],ae=g[1],te=(0,l.useState)(null),se=te[0],re=te[1],ne=(0,l.useState)(null),oe=ne[0],le=ne[1],ce=(0,l.useState)(null),de=ce[0],me=ce[1],ue=(0,l.useState)(null),he=ue[0],pe=ue[1],ge=(0,l.useState)(null),_e=ge[0],ve=ge[1],xe=(0,l.useState)(null),fe=xe[0],be=xe[1],je=(0,l.useState)(null),Se=je[0],we=je[1],Ce=(0,l.useState)(null),ye=Ce[0],Ae=Ce[1],Ne=(0,l.useState)(null),Ze=Ne[0],Te=Ne[1],ke=(0,l.useState)(null),Fe=ke[0],Ie=ke[1],ze=(0,l.useState)(null),Me=ze[0],Ee=ze[1],Pe=(0,l.useState)(null),Le=Pe[0],qe=Pe[1],De=(0,l.useState)(null),Ve=De[0],Ue=De[1];(0,l.useState)(null);var Je=(0,l.useState)(null),Ge=Je[0],Xe=Je[1],Be=(0,l.useState)(null),Oe=Be[0],Qe=Be[1],Re=(0,l.useState)(null),He=Re[0],Ke=Re[1],Ye=(0,l.useState)(null),We=Ye[0],$e=Ye[1],ea=(0,l.useState)(null),aa=ea[0],ia=ea[1],ta=(0,l.useState)(null),sa=ta[0],ra=ta[1],na=(0,l.useState)(null),oa=na[0],la=na[1],ca=(0,l.useState)(null),da=ca[0],ma=ca[1],ua=(0,l.useState)(null),ha=ua[0],pa=ua[1],ga=(0,l.useState)(null),_a=ga[0],va=ga[1],xa=(0,l.useState)(null),fa=(xa[0],xa[1]),ba=(0,l.useState)(null),ja=(ba[0],ba[1]),Sa=(0,l.useState)(null),wa=Sa[0],Ca=Sa[1],ya=(0,l.useState)(null),Aa=ya[0],Na=ya[1],Za=(0,l.useState)(null),Ta=(Za[0],Za[1]),ka=(0,l.useState)(null),Fa=(ka[0],ka[1]),Ia=(0,l.useState)(null),za=(Ia[0],Ia[1]),Ma=(0,l.useState)(null),Ea=(Ma[0],Ma[1]),Pa=(0,l.useState)(null),La=Pa[0],qa=Pa[1],Da=(0,l.useState)(null),Va=Da[0],Ua=Da[1],Ja=(0,l.useState)(null),Ga=Ja[0],Xa=Ja[1],Ba=(0,l.useState)(null),Oa=Ba[0],Qa=Ba[1];(0,l.useEffect)((function(){switch(a.displayColor){case"logoJardim":ae(F.Z),re(z),le(L.Z),me(D),pe(w.Z),ve(N),be(X.Z),we(Q),Ae(Y.Z),Te($);break;case"logoTerras":Ie(M),Ee(I),Xe(V),Qe(q),Ke(Z),$e(A),la(R),ma(O),pa(ee),va(W);break;case"logoEmpreendimentos":fa(J),ja(U),Ca(G),Na(B),Ta(S),Fa(j),za(b),Ea(f),qa(P),Ua(E),Xa(K),Qa(H),qe(k),Ue(T),ia(y),ra(C),Ue(T)}}),[]);var Ra,Ha=m||[F.Z,L.Z,w.Z,X.Z,Y.Z],Ka={color:i?(Ra=a.displayColor,"logoJardim"===Ra?"#E46457":"logoTerras"===Ra?"#f26522":"#a89985"):a?a.colorFlat:""},Ya={color:"#E46457"},Wa={color:"#ffcc32"},$a={color:"#a89985"},ei={centeredSlides:!0,speed:400,slidesPerView:i?1:3,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}};return(0,r.jsx)(n.Z,{children:(0,r.jsx)(o.Z,{children:Ha?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("section",{className:x()(ie().teaserCarrosselSwiperContainer,"teaser-carrossel-simples","teaser-carrossel-cards"),children:(0,r.jsx)("div",{children:(0,r.jsxs)(c.t,(0,s.Z)((0,t.Z)({},ei),{loop:!0,modules:[p.Z,h.Z,u.Z],initialSlide:2,navigation:!0,spaceBetween:0,children:[null!==v&&(0,r.jsx)(d.o,{children:function(e){var a=e.isActive;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"swiper-card",children:[(0,r.jsx)("div",{className:"image-icon",children:(0,r.jsx)(_(),{src:a&&!i?v:se,layout:"fill",objectFit:"contain"})}),(0,r.jsx)("h5",{style:a?Ka:Ya,children:"Lideran\xe7a"}),(0,r.jsx)("p",{children:"A Alphaville \xe9 a maior urbanizadora do Brasil. Seu portf\xf3lio conta com residenciais da marca Alphaville, Terras Alpha e Jardim Alpha. Cada um com o seu diferencial."})]})})}},1),null!==oe&&(0,r.jsx)(d.o,{children:function(e){var a=e.isActive;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"swiper-card",children:[(0,r.jsx)("div",{className:"image-icon",children:(0,r.jsx)(_(),{src:a&&!i?oe:de,layout:"fill",objectFit:"contain"})}),(0,r.jsx)("h5",{style:a?Ka:Ya,children:"Natureza"}),(0,r.jsx)("p",{children:"A natureza estar\xe1 sempre presente no seu dia a dia. A Alphaville foi a primeira empresa do pa\xeds a fazer estudos de impacto ambiental em empreendimentos imobili\xe1rios."})]})})}},2),null!==fe&&(0,r.jsx)(d.o,{children:function(e){var a=e.isActive;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"swiper-card",children:[(0,r.jsx)("div",{className:"image-icon",children:(0,r.jsx)(_(),{src:a&&!i?fe:Se,layout:"fill",objectFit:"contain"})}),(0,r.jsx)("h5",{style:a?Ka:Ya,children:"Qualidade Construtiva"}),(0,r.jsx)("p",{children:"Seja no clube, na portaria ou nas vias, a Alphaville utiliza produtos de extrema qualidade e engenharia moderna."})]})})}},3),null!==he&&(0,r.jsx)(d.o,{children:function(e){var a=e.isActive;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"swiper-card",children:[(0,r.jsx)("div",{className:"image-icon",children:(0,r.jsx)(_(),{src:a&&!i?he:_e,layout:"fill",objectFit:"contain"})}),(0,r.jsx)("h5",{style:a?Ka:Ya,children:"Lazer"}),(0,r.jsx)("p",{children:"Piscinas, academia, churrasqueira, quadras de t\xeanis, campos de futebol e muito mais. Cada projeto tem a sua \xe1rea de lazer pensada para a regi\xe3o."})]})})}},4),ye&&(0,r.jsx)(d.o,{children:function(e){var a=e.isActive;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"swiper-card",children:[(0,r.jsx)("div",{className:"image-icon",children:(0,r.jsx)(_(),{src:a&&!i?ye:Ze,layout:"fill",objectFit:"contain"})}),(0,r.jsx)("h5",{style:a?Ka:Ya,children:"Seguran\xe7a"}),(0,r.jsx)("p",{children:"Em um empreendimento da Alphaville, adultos e crian\xe7as caminham despreocupadamente pelas ruas gra\xe7as \xe0 nossa seguran\xe7a 24h."})]})})}},5),null!==Fe&&(0,r.jsx)(d.o,{children:function(e){var a=e.isActive;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"swiper-card",children:[(0,r.jsx)("div",{className:"image-icon",children:(0,r.jsx)(_(),{src:a?Me:Fe,layout:"fill",objectFit:"contain"})}),(0,r.jsx)("h5",{style:a?Ka:Wa,children:"Lideran\xe7a"}),(0,r.jsx)("p",{children:"Somos a maior urbanizadora do Brasil e nosso portf\xf3lio conta com residenciais da marca Alphaville, Terras Alpha e Jardim Alpha. Cada um com o seu diferencial."})]})})}},6),null!==Ge&&(0,r.jsx)(d.o,{children:function(e){var a=e.isActive;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"swiper-card",children:[(0,r.jsx)("div",{className:"image-icon",children:(0,r.jsx)(_(),{src:a?Oe:Ge,layout:"fill",objectFit:"contain"})}),(0,r.jsx)("h5",{style:a?Ka:Wa,children:"Natureza"}),(0,r.jsx)("p",{children:"A natureza estar\xe1 sempre presente no seu dia a dia. O Grupo Alphaville foi a primeira empresa do pa\xeds a fazer estudos de impacto ambiental em empreendimentos imobili\xe1rios."})]})})}},7),null!==He&&(0,r.jsx)(d.o,{children:function(e){var a=e.isActive;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"swiper-card",children:[(0,r.jsx)("div",{className:"image-icon",children:(0,r.jsx)(_(),{src:a?We:He,layout:"fill",objectFit:"contain"})}),(0,r.jsx)("h5",{style:a?Ka:Wa,children:"Lazer"}),(0,r.jsx)("p",{children:"Piscinas, academia, churrasqueira, quadras de t\xeanis, campos de futebol e muito mais. Cada projeto tem a sua \xe1rea de lazer pensada para a regi\xe3o."})]})})}},8),null!==oa&&(0,r.jsx)(d.o,{children:function(e){var a=e.isActive;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"swiper-card",children:[(0,r.jsx)("div",{className:"image-icon",children:(0,r.jsx)(_(),{src:a?da:oa,layout:"fill",objectFit:"contain"})}),(0,r.jsx)("h5",{style:a?Ka:Wa,children:"Qualidade Construtiva"}),(0,r.jsx)("p",{children:"Seja no clube, na portaria ou nas vias, o Grupo Alphaville utiliza produtos de extrema qualidade e engenharia moderna."})]})})}},9),null!==ha&&(0,r.jsx)(d.o,{children:function(e){var a=e.isActive;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"swiper-card",children:[(0,r.jsx)("div",{className:"image-icon",children:(0,r.jsx)(_(),{src:a?_a:ha,layout:"fill",objectFit:"contain"})}),(0,r.jsx)("h5",{style:a?Ka:Wa,children:"Seguran\xe7a"}),(0,r.jsx)("p",{children:"Em um empreendimento do Grupo Alphaville, adultos e crian\xe7as caminham despreocupadamente pelas ruas gra\xe7as \xe0 nossa seguran\xe7a 24h."})]})})}},10),null!==wa&&(0,r.jsx)(d.o,{children:function(e){var a=e.isActive;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"swiper-card",children:[(0,r.jsx)("div",{className:"image-icon",children:(0,r.jsx)(_(),{src:a&&!i?wa:Aa,layout:"fill",objectFit:"contain"})}),(0,r.jsx)("h5",{style:a?Ka:$a,children:"Qualidade construtiva"}),(0,r.jsx)("p",{children:"Seja no clube, na portaria ou nas vias, o Grupo Alphaville utiliza produtos de extrema qualidade e engenharia moderna."})]})})}},12),null!==La&&(0,r.jsx)(d.o,{children:function(e){var a=e.isActive;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"swiper-card",children:[(0,r.jsx)("div",{className:"image-icon",children:(0,r.jsx)(_(),{src:a&&!i?La:Va,layout:"fill",objectFit:"contain"})}),(0,r.jsx)("h5",{style:a?Ka:$a,children:"Natureza"}),(0,r.jsx)("p",{children:"A natureza estar\xe1 sempre presente no seu dia a dia. O Grupo Alphaville foi a primeira empresa do pa\xeds a fazer estudos de impacto ambiental em empreendimentos imobili\xe1rios."})]})})}},14),null!==Ga&&(0,r.jsx)(d.o,{children:function(e){var a=e.isActive;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"swiper-card",children:[(0,r.jsx)("div",{className:"image-icon",children:(0,r.jsx)(_(),{src:a&&!i?Ga:Oa,layout:"fill",objectFit:"contain"})}),(0,r.jsx)("h5",{style:a?Ka:$a,children:"Seguran\xe7a 24 horas"}),(0,r.jsx)("p",{children:"Em um empreendimento do Grupo Alphaville, adultos e crian\xe7as caminham despreocupadamente pelas ruas gra\xe7as \xe0 nossa seguran\xe7a 24h."})]})})}},14),null!==Le&&(0,r.jsx)(d.o,{children:function(e){var a=e.isActive;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"swiper-card",children:[(0,r.jsx)("div",{className:"image-icon",children:(0,r.jsx)(_(),{src:a?Le:Ve,objectFit:"contain"})}),(0,r.jsx)("h5",{style:a?Ka:$a,children:"Lideran\xe7a"}),(0,r.jsx)("p",{children:"Somos a maior urbanizadora do Brasil e nosso portf\xf3lio conta com residenciais da marca Alphaville, Terras Alpha e Jardim Alpha. Cada um com o seu diferencial."})]})})}},16),null!==aa&&(0,r.jsx)(d.o,{children:function(e){var a=e.isActive;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"swiper-card",children:[(0,r.jsx)("div",{className:"image-icon",children:(0,r.jsx)(_(),{src:a?aa:sa,layout:"fill",objectFit:"contain"})}),(0,r.jsx)("h5",{style:a?Ka:$a,children:"Lazer"}),(0,r.jsx)("p",{children:"Piscinas, academia, churrasqueira, quadras de t\xeanis, campos de futebol e muito mais. Cada projeto tem a sua \xe1rea de lazer pensada para a regi\xe3o."})]})})}},17)]}))})})}):""})})}m.Z.use([u.Z,h.Z,p.Z])},9123:function(e,a,i){"use strict";i.d(a,{Z:function(){return m}});var t=i(5893),s=i(682),r=i(4051),n=i(1555),o=i(5675),l=i.n(o),c=(i(7294),i(6889)),d=i.n(c);function m(e){var a=e.colors,i=e.isMobile,o=e.homeContent,c={background:a&&a.suaSeguranca?a.suaSeguranca:""};return(0,t.jsx)("section",{className:d().areaTeaserSuaSeguranca,style:{marginBottom:"20px"},children:(0,t.jsx)(s.Z,{className:d().container,children:(0,t.jsx)(r.Z,{children:(0,t.jsx)(n.Z,{xs:12,children:(0,t.jsxs)("div",{style:""!==c?c:null,className:d().areaTeaserSuaSegurancaContent,children:[(0,t.jsx)("h2",{className:d().title,children:o.titleSuaSeguranca}),(0,t.jsx)("h3",{className:d().description,dangerouslySetInnerHTML:{__html:o.descriptionSuaSeguranca}}),(0,t.jsx)("div",{className:d().areaSuaSegurancaImage,children:i?(0,t.jsx)(l(),{className:d().suaSegurancaImage,layout:"fill",src:o.imagemSuaSegurancaMob,objectFit:"contain",sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",quality:100,priority:!0}):(0,t.jsx)(l(),{className:d().suaSegurancaImage,layout:"fill",src:o.imagemSuaSeguranca,objectFit:"contain",sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",quality:100,priority:!0})})]})})})})})}},4590:function(e,a,i){"use strict";i.d(a,{Z:function(){return r}});var t=i(5893),s=(i(7294),i(3191));function r(e){var a=e.url,i=e.className,r=e.isMobile,n=a.split("v=")[1].split("&")[0]||"";return(0,t.jsx)(s.Z,{className:i,videoId:n,onPause:function(e){e.target.pauseVideo()},opts:{height:r?"200":"507",width:"100%"}})}},7382:function(e,a,i){"use strict";var t=i(5893),s=i(682),r=i(4051),n=i(1555),o=i(1790),l=i(5675),c=i.n(l),d=(i(5755),i(7294),i(6696)),m=i(4590),u=i(5859),h=i.n(u);a.Z=function(e){var a,i=e.homeContent,l=e.colors,u=e.isMobile,p=e.isTeaser,g=i.videoYoutube,_={color:l.colorFlat};return(0,t.jsx)("section",{className:h().areaTeaserVideoJardimAlpha,children:(0,t.jsx)("div",{className:h().areaTeaserVideo,children:(0,t.jsxs)(s.Z,{className:h().container,children:[(0,t.jsx)(r.Z,{children:(0,t.jsx)(n.Z,{xs:12,children:(0,t.jsxs)("div",{className:h().areaTitleTeaserVideo,children:[(0,t.jsx)("h2",{style:_,className:h().title,children:i.videoTitle}),(0,t.jsx)("h3",{className:h().description,dangerouslySetInnerHTML:{__html:i.videoDescription}})]})})}),(0,t.jsx)(r.Z,{children:(0,t.jsx)(n.Z,{children:i.imagesCarrossel&&(a=i.imagesCarrossel,!(a.filter((function(e){return"principal"==e.tipo})).length>=3))||p?(0,t.jsx)("div",{className:h().teaserVideoPlayerContainer,children:i.videoYoutube?(0,t.jsx)(m.Z,{url:g,isMobile:u}):(0,t.jsx)("div",{style:{width:"100%",height:"100%",position:"relative"},children:(0,t.jsx)(c(),{layout:"fill",src:i.videoImagem,objectFit:"contain",quality:100,priority:!0})})}):(0,t.jsx)("div",{children:(0,t.jsx)(d.Z,{colors:l,isMobile:u,imagesCadaSorriso:function(e){var a;return(null===(a=e.imagesCarrossel)||void 0===a?void 0:a.filter((function(e){if("principal"==e.tipo)return e}))).map((function(e){return o.GU+"/"+e.image}))}(i)})})})})]})})})}},2750:function(e,a,i){"use strict";i.d(a,{Z:function(){return g}});var t=i(7568),s=i(1438),r=i(4924),n=i(414),o=i(1790),l=i(2951),c=i(7483),d=function(){function e(){(0,s.Z)(this,e),this.id,this.videoTitle,this.videoDescription,this.description,this.slug,this.title,this.secondName,this.tags,this.lots,this.latitude,this.longitude,this.metaTitle,this.metaDescription,this.status,this.createdAt,this.updatedAt,this.idAlphaville,this.cidade,this.typeId,this.typeLote,this.statusObra,this.destaque,this.prjUbntItensRodape,this.statusStand,this.idCv,this.descricaoCv,this.principalCv,this.tipoCv,this.pracaCv,this.isCampaign,this.uf,this.banner,this.metaProps,this.standVendas,this.videoYoutube,this.videoImagem,this.titleCadaSorriso,this.imagesCarrossel,this.titleSuaSeguranca,this.descriptionSuaSeguranca,this.imagemSuaSeguranca,this.imagemSuaSegurancaMob,this.logoType,this.formSaibaMais,this.messageAgradecimento,this.whatsAppAtivo,this.telefoneAtivo,this.saibaMaisAtivo,this.tituloProjetoUrbanistico,this.descricaoProjetoUrbanistico,this.imagemProjetoUrbanistico}return(0,l.Z)(e,[{key:"setAPI",value:function(e,a){this.id=e.empreendimento.id,this.description=e.empreendimento.description,this.slug=e.empreendimento.slug,this.title=e.empreendimento.name,this.secondName=e.empreendimento.second_name,this.tags=e.empreendimento.tags,this.lots=e.empreendimento.lots,this.latitude=e.empreendimento.latitude,this.longitude=e.empreendimento.longitude,this.metaTitle=e.empreendimento.meta_title,this.metaDescription=e.empreendimento.meta_description,this.status=e.empreendimento.status,this.createdAt=e.empreendimento.created_at,this.updatedAt=e.empreendimento.updated_at,this.idAlphaville=e.empreendimento.id_alphaville,this.cidade=e.empreendimento.cidade,this.tituloProjetoUrbanistico=e.empreendimento.prj_ubnt_title,this.descricaoProjetoUrbanistico=e.empreendimento.prj_ubnt_description,this.descricaoPlantaConceitual=e.empreendimento.plt_prj_description,this.descricaoAreaDeLazer=e.empreendimento.plt_area_description,this.areaDeLazer=e.area_lazer,this.titleConceito=e.empreendimento.atm_title,this.descricaoConceito=e.empreendimento.atm_description,this.Metros=e.empreendimento.prj_ubnt_itens_area_second,this.Verdes=e.empreendimento.prj_ubnt_itens_area_third,this.Terreno=e.empreendimento.prj_ubnt_itens_area_fourth,this.unidatesTerreno=e.empreendimento.prj_ubnt_itens_desc_second,this.tituloSeguranca=e.empreendimento.sct_first_image_alt,this.servicoSeguranca=e.empreendimento.sct_item_first,this.servicoSegurancaSecond=e.empreendimento.sct_item_second,this.servicoSegurancaThird=e.empreendimento.sct_item_third,this.secondImageAltSeguranca=e.empreendimento.sct_second_image_alt,this.aut_mgnt_sub_title=e.empreendimento.aut_mgnt_sub_title,this.aut_mgnt_item_1=e.empreendimento.aut_mgnt_item_1,this.aut_mgnt_item_2=e.empreendimento.aut_mgnt_item_2,this.aut_mgnt_item_3=e.empreendimento.aut_mgnt_item_3,this.aut_mgnt_item_4=e.empreendimento.aut_mgnt_item_4,this.aut_mgnt_item_5=e.empreendimento.aut_mgnt_item_5,this.lcz_etg_sub_title=e.empreendimento.lcz_etg_sub_title,this.lcz_etg_description=e.empreendimento.lcz_etg_description,this.localizacaoEstrategicas=e.localizacao_estrategicas,this.lcz_etg_image_alt=e.empreendimento.lcz_etg_image_alt,this.tour360=e.empreendimento.tour_360,this.out_emp_description=e.empreendimento.out_emp_description,this.typeId={id:e.empreendimento.type_id,title:this.getTypeIdTitle(e.empreendimento.type_id)},this.typeLote=this.getTypeLoteTitle(e.empreendimento.type_lote),this.statusObra={id:e.empreendimento.status_obra,title:this.getStatusObraTitle(e.empreendimento.status_obra)},this.displayColors=this.setDisplayColor(e.empreendimento.type_id,e.empreendimento.type_lote),this.destaque=e.empreendimento.destaque,this.prjUbntItensRodape=e.empreendimento.prj_ubnt_itens_rodape,this.statusStand=e.empreendimento.stand,this.idCv=e.empreendimento.id_cv,this.descricaoCv=e.empreendimento.descricao_cv,this.principalCv=e.empreendimento.principal_CV,this.tipoCv=e.empreendimento.tipo_CV,this.pracaCv=e.empreendimento.praca_CV,this.isCampaign=!1,this.uf=(new u).setAPI(e.empreendimento.uf),this.banner=[(new c.Z).setAPI(e.images_empreendimento[0],a)],this.standVendas={title:e.empreendimento.std_title,subTitle:e.empreendimento.std_sub_title,endereco:e.empreendimento.stand_endereco,hfuncionamento:e.empreendimento.stand_horario_funcionamento,latitude:parseFloat(e.empreendimento.latitude)||0,longitude:parseFloat(e.empreendimento.longitude)||0,stdLatitude:parseFloat(e.empreendimento.std_latitude)||0,stdLongitude:parseFloat(e.empreendimento.std_longitude)||0},this.videoYoutube=e.empreendimento.video,this.videoImagem=o.GU+"/"+e.empreendimento.video_image,this.titleCadaSorriso=e.empreendimento.spc_title,this.imagesCarrossel=e.espaco_exclusivo.filter((function(e,a){return null!==e.image?e.image:null})),this.titleSuaSeguranca=e.empreendimento.sct_title,this.descriptionSuaSeguranca=e.empreendimento.sct_description,this.imagemSuaSeguranca=o.GU+"/"+e.empreendimento.sct_first_image,this.imagemProjetoUrbanistico=o.GU+"/"+e.empreendimento.prj_ubnt_image,this.secondImageSeguranca=o.GU+"/"+e.empreendimento.sct_second_image,this.lczEtgImage=o.GU+"/"+e.empreendimento.lcz_etg_image,this.imagemSuaSegurancaMob=e.empreendimento.sct_image_mob,this.imgConceito=o.GU+"/"+e.empreendimento.atm_image,this.imgProjUrbanistico=o.GU+"/"+e.empreendimento.plt_prj_image,this.areaLazer=o.GU+"/"+e.empreendimento.plt_area_image,this.videoTitle=e.empreendimento.video_titulo,this.videoDescription=e.empreendimento.video_descricao,this.logoType=1==e.empreendimento.logo_novo?"logoNova":"logoAntiga",this.GaleriaImagemDescription=e.empreendimento.galeria_imagem_descricao,this.formSaibaMais=e.empreendimento.formulario_saiba_mais_titulo,this.linkStandAtivo=e.empreendimento.link_stand_ativo,this.messageAgradecimento=e.empreendimento.message_agradecimento,this.whatsAppAtivo=e.empreendimento.whatsapp,this.telefoneAtivo=e.empreendimento.fone,this.saibaMaisAtivo=e.empreendimento.email;return this.metaProps=(new m).setAPI(e.meta_title,e.meta_description,e.tags,e.meta_abstract,e.meta_author,e.meta_copyright,null),this}},{key:"getTypeIdTitle",value:function(e){var a="";switch(e){case 1:a="Residencial";break;case 2:a="Cidades Alpha";break;case 3:a="Comercial"}return a}},{key:"getTypeLoteTitle",value:function(e){var a={id:e,title:"Alphaville"};switch(e){case 1:a.title="Alphaville";break;case 2:a.title="Terras Alpha";break;case 3:a.title="Jardim Alpha";break;case 5:a.title="Terras Alphaville"}return a}},{key:"getStatusObraTitle",value:function(e){var a="";switch(e){case 4:a="Pr\xe9-lan\xe7amento (teaser)";break;case 1:a="Lan\xe7amento";break;case 2:a="Em Constru\xe7\xe3o";break;case 3:a="Obras Conclu\xeddas";break;case 5:a="Residencia"}return a}},{key:"setDisplayColor",value:function(e,a,i){var t={colorMain:"#6de4d7",colorTwo:"#6de4d7",colorFlat:"#008aa4",displayColor:"no-shadow"};return 3==e||2==e?(t.displayColor="shadow",t.colorMain="#494850",t.colorTwo="#2a2934",t.colorFlat="#494850"):2==a||5==a?(t.displayColor="logoTerras",t.colorMain="#f26522",t.colorTwo="#ffcc32",t.colorFlat="#f26522",t.suaSeguranca="#f26522"):3==a?(t.displayColor="logoJardim",t.colorMain="#b26da9",t.colorTwo="#5eabdb",t.colorFlat="#008aa4"):1==e?(t.displayColor="logoEmpreendimentos",t.colorMain="#6de4d7",t.colorTwo="#6de4d7",t.colorFlat="#39bb9c",t.suaSeguranca="#a89985"):i&&(t.displayColor="shadow-campaign",t.colorMain="#666",t.colorTwo="#979797",t.colorFlat="#666"),t}}]),e}(),m=function(){function e(){(0,s.Z)(this,e),this.title,this.description,this.url,this.images}return(0,l.Z)(e,[{key:"setAPI",value:function(e,a,i,t,s,r,n){if(!e&&!a)return this.getdefaultMetaProps();var l=this.getdefaultMetaProps();return this.title=e||l.title,this.description=a||l.description,this.url=imageDesktop?o.V3+"/"+imageDesktop:l.url,this.images=l.images,this}},{key:"getdefaultMetaProps",value:function(){return this.title="Alphaville - Residenciais e lotes comerciais \xe0 venda",this.description="Bem vindo \xe0 Alphaville. Conhe\xe7a nossos lotes \xe0 venda",this.url=o.V3+"/",this.images=[{url:o.V3+"/static/images/alphaville.jpg",type:"image/jpeg",width:"1200",height:"489",alt:"Alphaville"}],this}}]),e}(),u=function(){function e(){(0,s.Z)(this,e),this.id,this.title,this.uf,this.latitude,this.longitude,this.current,this.status,this.createdAt,this.updatedAt}return(0,l.Z)(e,[{key:"setAPI",value:function(e){return this.id=e.id,this.title=e.title,this.uf=e.uf,this.latitude=e.latitude,this.longitude=e.longitude,this.current=e.current,this.status=e.status,this.createdAt=e.created_at,this.updatedAt=e.updated_at,this}}]),e}(),h=d,p=i(1326),g=function e(){(0,s.Z)(this,e),(0,r.Z)(this,"getEnterpriseBySlugTitle",function(){var e=(0,t.Z)((function(e){var a,i,t,s,r=arguments;return(0,n.__generator)(this,(function(n){switch(n.label){case 0:return a=r.length>1&&void 0!==r[1]&&r[1],i="".concat(o.cM).concat(e),[4,p.Z.get(i)];case 1:return t=n.sent(),s={},t.data&&(s=(new h).setAPI(t.data,a)),[2,s]}}))}));return function(a){return e.apply(this,arguments)}}())}},1442:function(e){e.exports={areaFormSaibaMais:"form-saiba-mais_areaFormSaibaMais__o_bMu",areaConteudo:"form-saiba-mais_areaConteudo__kf3NZ",areaTitle:"form-saiba-mais_areaTitle__WwlTf",saibaMaisTitle:"form-saiba-mais_saibaMaisTitle__ga3iX",areaForm:"form-saiba-mais_areaForm__1PZS1",areaFields:"form-saiba-mais_areaFields__kuaiW",formFieldJardim:"form-saiba-mais_formFieldJardim__nyGKm",formFieldTerra:"form-saiba-mais_formFieldTerra__cMaLO",formFieldAlphaville:"form-saiba-mais_formFieldAlphaville__gGrun",btnSubmitJardim:"form-saiba-mais_btnSubmitJardim__hEIbo",btnSubmitTerra:"form-saiba-mais_btnSubmitTerra__MyEcr",btnSubmitAlphaville:"form-saiba-mais_btnSubmitAlphaville__bTxQC",btnSubmitSending:"form-saiba-mais_btnSubmitSending__knQQ8",required:"form-saiba-mais_required__h9F77",invalid:"form-saiba-mais_invalid__0YQjQ",hasErrorInfo:"form-saiba-mais_hasErrorInfo__MUiVS",areaCheckbox:"form-saiba-mais_areaCheckbox__LwIHI",underlinedLink:"form-saiba-mais_underlinedLink__6mQh1",inputCheckbox:"form-saiba-mais_inputCheckbox__jsp6k",checkboxBase:"form-saiba-mais_checkboxBase__ZfbUK",checkboxDescricao:"form-saiba-mais_checkboxDescricao__LBXvE",invalidCheckbox:"form-saiba-mais_invalidCheckbox__qmDcC",validCheckbox:"form-saiba-mais_validCheckbox__ahygd"}},9527:function(e){e.exports={teaserCarrosselSwiperContainer:"teaser-carrossel-base_teaserCarrosselSwiperContainer___P3lg",teaserCarrosselSwiperImages:"teaser-carrossel-base_teaserCarrosselSwiperImages__nk_QF"}},2699:function(e){e.exports={areaTeaserCarrosselCadaSorriso:"teaser-carrossel-cada-sorriso_areaTeaserCarrosselCadaSorriso__Dbia7",container:"teaser-carrossel-cada-sorriso_container__LNnBU",areaTitleTeaserCarrosselCadaSorriso:"teaser-carrossel-cada-sorriso_areaTitleTeaserCarrosselCadaSorriso__SPZ_e",title:"teaser-carrossel-cada-sorriso_title__gLu_6",description:"teaser-carrossel-cada-sorriso_description__eNulq"}},824:function(e){e.exports={teaserCarrosselSwiperContainer:"teaser-carrossel-simples_teaserCarrosselSwiperContainer__F2hEC",teaserCarrosselSwiperImages:"teaser-carrossel-simples_teaserCarrosselSwiperImages__IA2GH"}},6889:function(e){e.exports={areaTeaserSuaSeguranca:"teaser-sua-seguranca_areaTeaserSuaSeguranca__oncy9",container:"teaser-sua-seguranca_container__nZWqi",areaTeaserSuaSegurancaContent:"teaser-sua-seguranca_areaTeaserSuaSegurancaContent__J2gNc",title:"teaser-sua-seguranca_title__1v6fi",description:"teaser-sua-seguranca_description__1RjUn",areaSuaSegurancaImage:"teaser-sua-seguranca_areaSuaSegurancaImage__KNSIb",suaSegurancaImage:"teaser-sua-seguranca_suaSegurancaImage__9k2xc"}},5859:function(e){e.exports={areaTeaserVideoJardimAlpha:"teaser-video_areaTeaserVideoJardimAlpha__7gbPd",areaTeaserVideo:"teaser-video_areaTeaserVideo__8ywa0",container:"teaser-video_container__9uFdi",areaTitleTeaserVideo:"teaser-video_areaTitleTeaserVideo__N_1qg",title:"teaser-video_title__oKmzi",description:"teaser-video_description__4duBJ",teaserVideoPlayerContainer:"teaser-video_teaserVideoPlayerContainer__lpAcn"}}}]);