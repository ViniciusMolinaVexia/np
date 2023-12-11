(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8808],{8808:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return K}});var n=t(5893),r=t(7294);var i=r.forwardRef((function({title:e,titleId:a,...t},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":a},t),e?r.createElement("title",{id:a},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))}));var o=r.forwardRef((function({title:e,titleId:a,...t},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":a},t),e?r.createElement("title",{id:a},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"}))}));var l=r.forwardRef((function({title:e,titleId:a,...t},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":a},t),e?r.createElement("title",{id:a},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"}))}));var s=r.forwardRef((function({title:e,titleId:a,...t},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":a},t),e?r.createElement("title",{id:a},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))})),c=t(1608),d=t(7462),u=t(3366),m=t(4184),h=t.n(m),f=t(6792),v=t(6611),p=t(9602),x=r.createContext(null);x.displayName="CardContext";var g=x,b=["bsPrefix","className","variant","as"],C=r.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,i=e.variant,o=e.as,l=void 0===o?"img":o,s=(0,u.Z)(e,b),c=(0,f.vE)(t,"card-img");return r.createElement(l,(0,d.Z)({ref:a,className:h()(i?c+"-"+i:c,n)},s))}));C.displayName="CardImg",C.defaultProps={variant:null};var k=C,w=["bsPrefix","className","bg","text","border","body","children","as"],_=(0,p.Z)("h5"),j=(0,p.Z)("h6"),N=(0,v.Z)("card-body"),E=(0,v.Z)("card-title",{Component:_}),y=(0,v.Z)("card-subtitle",{Component:j}),T=(0,v.Z)("card-link",{Component:"a"}),S=(0,v.Z)("card-text",{Component:"p"}),Z=(0,v.Z)("card-header"),A=(0,v.Z)("card-footer"),L=(0,v.Z)("card-img-overlay"),P=r.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,i=e.bg,o=e.text,l=e.border,s=e.body,c=e.children,m=e.as,v=void 0===m?"div":m,p=(0,u.Z)(e,w),x=(0,f.vE)(t,"card"),b=(0,r.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return r.createElement(g.Provider,{value:b},r.createElement(v,(0,d.Z)({ref:a},p,{className:h()(n,x,i&&"bg-"+i,o&&"text-"+o,l&&"border-"+l)}),s?r.createElement(N,null,c):c))}));P.displayName="Card",P.defaultProps={body:!1},P.Img=k,P.Title=E,P.Subtitle=y,P.Body=N,P.Link=T,P.Text=S,P.Header=Z,P.Footer=A,P.ImgOverlay=L;var I=P,M=t(7568),O=t(4051),X=t.n(O),B=t(2175),D=t(1110),R=t(4434),F=t(1790),V=t(4562),q=t(1659),W=t(236),z=t.n(W);function J(e){var a=e.isTeaser,t=e.homeContent,i=e.setNomeValue,o=e.setCheckValue,l=e.Navigation,s=e.outlineNameColor,d=(e.outlineCheckColor,e.submitRef),u=e.setLoading,m=(0,r.useState)(!1),f=(m[0],m[1]),v=(0,r.useState)([]),p=v[0],x=(v[1],(0,r.useState)("")),g=x[0],b=x[1],C=(0,r.useState)(null),k=C[0],w=C[1],_=(0,r.useState)(!1),j=_[0],N=_[1];return(0,n.jsx)(B.J9,{initialValues:{name:"",email:"",celular:"",celularAdicional:"",checked:[],idCv:void 0,descricaoCv:void 0},validate:function(e){var a={},t=new q.Z;t.validateName(e.name)&&(a.name=t.validateName(e.name)),t.validateEmail(e.email)&&(a.email=t.validateEmail(e.email)),t.validateTel(e.celular,!0)&&(a.celular=t.validateTel(e.celular,!0)),t.validateTel(e.celularAdicional,!1)&&""!=e.celularAdicional&&(a.celularAdicional=t.validateTel(e.celularAdicional,!1)),t.validateCheckbox(e.checked)&&(a.checked=t.validateCheckbox(e.checked));var n=!(!e.celular||!e.celularAdicional);return n&&(n=e.celular==e.celularAdicional,N(n),n&&(a.celularAdicional="invalid")),a},onSubmit:function(){var e=(0,M.Z)(X().mark((function e(n,r){var i;return X().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=r.setSubmitting,setTimeout((0,M.Z)(X().mark((function e(){var r,o,l,s,c,d,m,h,v,x,g,C,k,_,j,N;return X().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,u(!0),i(!0),f(!0),r=new R.Z,o=r.getEnterprise(p,t.uf.title,t.cidade),n.CodEmpreendimento=t.idCv,n.NomeEmpreendimento=t.descricaoCv,l=(new q.Z).splitPhoneDdd(n.celular),s=(new q.Z).splitPhoneDdd(n.celularAdicional),c="Empreendimento: ".concat(o?o.emprendimento:t.title,"."),n.state=t.uf.uf,n.city=t.cidade,d=n.checked.length>0?"Li e concordo com a Pol\xedtica de Privacidade, Pol\xedtica de Cookies e Termo de Uso da Alphaville.":"",m=t.idCv,h=t.id,v=t.tipoCv,x=t.pracaCv,g=null,!x){e.next=29;break}return C=new D.Z,e.next=23,C.sendApiCv(n.name,n.email,l.ddd.replace(/\D/g,""),l.phone.replace(/\D/g,""),s.ddd.replace(/\D/g,""),s.phone.replace(/\D/g,""),m,t.descricaoCv,v,x,h);case 23:k=e.sent,g=k.success,b(k.statusText),setTimeout((function(){b("")}),25e3),e.next=36;break;case 29:return _=0,o&&o.codEmpreend&&(_=parseInt(o.codEmpreend)),j=new V.Z,e.next=34,j.sendApiRdStation(n.name,n.email,l.ddd.replace(/\D/g,""),l.phone.replace(/\D/g,""),n.CodEmpreendimento,n.NomeEmpreendimento,_,c,n.state,n.city,n.msg,"home_whats.form",d);case 34:N=e.sent,g=N.success;case 36:g?(sessionStorage.setItem(F.zg,JSON.stringify({Name:n.name,Email:n.email,Success:g,PhoneOne:l.ddd.replace(/\D/g,""),PhoneTwo:l.phone.replace(/\D/g,""),PhoneAdctionalOne:s.ddd.replace(/\D/g,""),PhoneAdctionalTwo:s.phone.replace(/\D/g,""),MessageAgradecimento:t.messageAgradecimento,Slug:t.slug})),window.dataLayer.push({event:"ga_event",event_name:"conversao_formulario_empreendimento",ec:"whatsapp",email:Email,phone:PhoneOne,ea:"envio",el:"sucesso"}),w(!0),window.location.href="/".concat(a?"teaser":"residencia","/").concat(t.slug,"/agradecimento?success=").concat(g?"true":"false")):(w(!1),setTimeout((function(){w(null)}),25e3),window.dataLayer.push({event:"ga_event",event_name:"conversao_formulario_empreendimento",ec:"whatsapp",email:Email,phone:PhoneOne,ea:"envio",el:"erro"})),u(!1),i(!1),f(!1),e.next=49;break;case 42:e.prev=42,e.t0=e.catch(0),u(!1),i(!1),f(!1),console.error("erro ao enviar api",e.t0),n.sendSuccess=!1;case 49:case"end":return e.stop()}}),e,null,[[0,42]])}))),500);case 2:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),children:function(e){var r=e.values,u=e.errors,m=e.touched,f=e.handleChange;e.handleBlur,e.handleSubmit,e.isSubmitting;return(0,n.jsxs)(B.l0,{action:"/".concat(a?"teaser":"residencia","/").concat(t.slug,"/agradecimento?success=").concat(r.sendSuccess?"true":"false"),name:"produto_interesse.form",children:[0==l&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(B.gN,{className:h()("field-style",s&&"outline-name"),id:"name",name:"name",placeholder:"Digite seu nome",onChange:function(e){!function(e){i(e.target.value)}(e),f(e)}}),(0,n.jsxs)(c.Z,{style:{justifyContent:"space-around",alignItems:"center",marginLeft:0,marginRight:0},children:[(0,n.jsx)(B.gN,{style:{width:"21px",height:"18px"},className:u.checked&&m.checked?z().invalidCheckbox:z().validCheckbox,type:"checkbox",name:"checked",id:"concordo",onChange:function(e){f(e),function(e){o(e.target.value)}(e)},value:"concordo"}),(0,n.jsxs)("span",{className:z().labelCheckBox,children:["Li e concordo com a\xa0",(0,n.jsx)("a",{className:z().underlinedLink,href:"/politica-de-privacidade",target:"_blank",children:"Pol\xedtica de Privacidade"}),", a\xa0",(0,n.jsx)("a",{className:z().underlinedLink,href:"/politica-de-cookies",target:"_blank",children:"Pol\xedtica de Cookies"})," ","e o\xa0",(0,n.jsx)("a",{className:z().underlinedLink,href:"/termos-de-uso",target:"_blank",children:"Termo de Uso da Alphaville"}),"."]})]})]}),1==l&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(B.gN,{id:"email",name:"email",placeholder:"DIGITE SEU EMAIL AQUI",type:"email",className:h()("field-style","second-page",u.email&&m.email?z().required:"")}),(0,n.jsx)(B.gN,{id:"celular",name:"celular",value:(new q.Z).foneMask(r.celular),placeholder:"(xx) 9XXXX-XXXX",className:h()("field-style","second-page",u.celular&&m.celular?z().required:"")}),(0,n.jsx)(B.gN,{id:"celularAdicional",name:"celularAdicional",value:(new q.Z).foneMask(r.celularAdicional),placeholder:"(xx) XXXXX-XXXX",className:h()("field-style","second-page",u.celularAdicional&&m.celularAdicional?z().required:"")}),j&&(0,n.jsx)(c.Z,{children:(0,n.jsx)("p",{className:z().hasErrorInfo,children:'O n\xfamero informado em "Celular Adicional" e "Celular" n\xe3o podem ser iguais.'})}),0==k&&(0,n.jsx)(c.Z,{children:(0,n.jsxs)("p",{className:z().hasErrorInfo,children:["Erro ao enviar contato. ",g]})})]}),(0,n.jsx)(B.gN,{id:"idCv",name:"idCv",type:"hidden",value:t?t.idCv:0}),(0,n.jsx)(B.gN,{id:"descricaoCv",name:"descricaoCv",type:"hidden",value:t?t.descricaoCv:""}),(0,n.jsx)("button",{type:"submit",hidden:!0,ref:d})]})}})}var U=t(6968),H=t(5566),G=t.n(H);function K(e){var a=e.colors,t=e.homeContent,d=e.isTeaser,u=function(e){return"logoJardim"===e?"jardim":"logoTerras"===e?"terras":"alphaville"},m=function(e,a){var n={};switch(e){case 0:n={title:t.formSaibaMais,subtitle:"Para melhor atend\xea-lo, que tal nos dizer seu nome?",buttonText:"Pr\xf3ximo",footerExist:!0,buttonColor:"red"};break;case 1:n={title:"Ol\xe1, ".concat(a,"! agora falta pouco"),subtitle:"Preencha os campos abaixo para entrarmos em contato!",buttonText:"Finalizar",footerExist:!0,buttonColor:"green"}}return n},f=(0,r.useState)(0),v=f[0],p=f[1],x=(0,r.useState)(m(0,y)),g=x[0],b=x[1],C=(0,r.useState)(!1),k=C[0],w=C[1],_=(0,r.useState)(!1),j=_[0],N=_[1],E=(0,r.useState)(""),y=E[0],T=E[1],S=(0,r.useState)(""),Z=S[0],A=S[1],L=(0,r.useState)(!1),P=L[0],M=L[1],O=(0,r.useState)(!1),X=O[0],B=O[1],D=(0,r.useState)(!1),R=D[0],F=D[1],V=(0,r.useRef)(null);return(0,r.useEffect)((function(){var e=m(v,y);b(e)}),[v]),(0,r.useEffect)((function(){w(!1)}),[y]),(0,r.useEffect)((function(){N(!1)}),[Z]),(0,r.useEffect)((function(){var e,a=null;return e=a,X?(F(!1),clearInterval(e)):e=setInterval((function(){F(!0),setTimeout((function(){F(!1)}),1e3)}),2e3),a=e,function(){clearInterval(a)}}),[X]),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"box-modal ".concat(X?"active":""),style:{backgroundColor:a.colorFlat},children:[(0,n.jsx)(c.Z,{style:{top:"10px",left:"10px",width:"100%",justifyContent:"flex-end",position:"absolute"},children:(0,n.jsx)(i,{cursor:"pointer",onClick:function(){return B(!1)},color:"white",width:20,height:18,strokeWidth:5})}),(0,n.jsx)("h5",{className:G().titleModal,dangerouslySetInnerHTML:{__html:g.title}}),(0,n.jsxs)(I,{style:{height:"337px",width:"307px",borderRadius:"10px",marginLeft:"auto",marginRight:"auto"},className:G().cardModal,variant:"outlined",children:[(0,n.jsxs)(I.Body,{children:[(0,n.jsxs)(I.Subtitle,{className:"subtitle-card",children:[1==v&&(0,n.jsx)(c.Z,{children:(0,n.jsx)(o,{onClick:function(){v>0&&p(v-1)},style:{width:20,height:15,marginBottom:5,cursor:"pointer"}})}),g.subtitle]}),(0,n.jsx)(I.Text,{className:G().containerCardText,children:(0,n.jsx)(J,{isTeaser:d,Navigation:v,setNomeValue:T,setCheckValue:A,CheckValue:Z,homeContent:t,outlineNameColor:k,outlineCheckColor:j,submitRef:V,setLoading:M})})]}),(0,n.jsx)(I.Footer,{className:"card-footer",children:(0,n.jsxs)(c.Z,{style:{pointerEvents:P?"none":"auto"},onClick:function(){""!=y&&""!=Z?0==v?p(v+1):V.current.click():(""==y&&w(!0),""==Z&&N(!0))},className:h()("button-navigation-row","red"==g.buttonColor?"hover-red":"hover-green"),children:[P&&(0,n.jsx)(U.Z,{className:h()("loading-modal",u(a.displayColor)),animation:"grow"}),(0,n.jsx)("span",{"aria-disabled":!0,style:{fontSize:16},children:2!=v&&(P?"Enviando!":g.buttonText)}),2!=v?P?null:0==v?(0,n.jsx)(l,{width:20,height:18}):(0,n.jsx)(s,{width:20,height:18}):null]})})]})]}),(0,n.jsx)("button",{onClick:function(){return B(!X)},className:h()(R?"shake":"","float-button",u(a.displayColor)),children:(0,n.jsx)("span",{className:G().buttonTitle,children:"CONTATO"})})]})}},236:function(e){e.exports={labelCheckBox:"form-saiba-mais-modal_labelCheckBox__xITuf",required:"form-saiba-mais-modal_required__9odUl",invalid:"form-saiba-mais-modal_invalid__lCsxO",hasErrorInfo:"form-saiba-mais-modal_hasErrorInfo__iu7R3",underlinedLink:"form-saiba-mais-modal_underlinedLink__KIf_A",invalidCheckbox:"form-saiba-mais-modal_invalidCheckbox__xr6Ot",validCheckbox:"form-saiba-mais-modal_validCheckbox__MOa8V"}},5566:function(e){e.exports={containerCardText:"teaser-float-modal_containerCardText__0VtE1",iconFinalButton:"teaser-float-modal_iconFinalButton__ZJT7B",titleModal:"teaser-float-modal_titleModal__BRqk6",subtitleModal:"teaser-float-modal_subtitleModal__ruW3J",cardActions:"teaser-float-modal_cardActions__PGSDu",buttonTitle:"teaser-float-modal_buttonTitle__pTA57"}}}]);