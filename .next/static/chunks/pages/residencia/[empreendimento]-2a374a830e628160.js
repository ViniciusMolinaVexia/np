(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[130],{6282:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/residencia/[empreendimento]",function(){return s(833)}])},7444:function(e,r,s){"use strict";s.d(r,{Z:function(){return d}});var t=s(5893),o=s(682),n=s(1608),a=s(1555),i=s(1790),l=(s(7294),s(6696)),c=s(2699),u=s.n(c);function d(e){var r=e.homeContent,s=e.colors,c=e.isMobile,d=e.isTeaser,p={color:s.colorFlat};return(0,t.jsx)("section",{className:u().areaTeaserCarrosselCadaSorriso,children:(0,t.jsxs)(o.Z,{className:u().container,children:[(0,t.jsx)(n.Z,{children:(0,t.jsx)(a.Z,{xs:12,children:(0,t.jsxs)("div",{className:u().areaTitleTeaserCarrosselCadaSorriso,children:[(0,t.jsx)("h2",{style:p,className:u().title,children:r.titleCadaSorriso}),(0,t.jsx)("h3",{className:u().description,dangerouslySetInnerHTML:{__html:r.GaleriaImagemDescription}})]})})}),(0,t.jsx)("div",{className:u().teaserCarrosselCadaSorriso,children:(0,t.jsx)(l.Z,{colors:s,isMobile:c,imagesCadaSorriso:function(e){var r;return(null===(r=e.imagesCarrossel)||void 0===r?void 0:r.filter((function(e){if(d){if("principal"==e.tipo)return e}else{if("secundario"==e.tipo)return e;if("principal"==e.tipo)return e}}))).map((function(e){return i.GU+"/"+e.image}))}(r)})})]})})}},833:function(e,r,s){"use strict";s.r(r);var t=s(7568),o=s(4051),n=s.n(o),a=s(5893),i=s(7294),l=s(3899),c=s(5129),u=s(2750),d=s(3331),p=s(3001),h=s(7444),m=s(5298),C=s(8244),f=(s(9123),s(7382)),x=s(1659),_=s(5152),b=s.n(_),j=s(1163),v=b()((function(){return s.e(8808).then(s.bind(s,8808))}),{loadableGenerated:{webpack:function(){return[8808]}},ssr:!1}),w=b()((function(){return s.e(9412).then(s.bind(s,9412))}),{loadableGenerated:{webpack:function(){return[9412]}},ssr:!1}),T=function(e){var r=e.homeContent,s=e.showAlphaMenu,t=(e.slugDomPedro,e.location),o=e.empreendimentosjson,n=e.displayColor,u=((0,j.useRouter)(),(0,i.useState)(!1)),_=u[0],b=u[1],T=(r.id,r.title),y=r.banner,S=r.metaProps;(0,i.useEffect)((function(){window.outerWidth<=768?b(!0):b(!1)}),[]);var Z=new x.Z;return(0,a.jsxs)(p.Z,{metaProps:Z.changeTitleMetaProps(S,T),homeContent:r,url:"/",active:"residencia",location:t,cssClass:n+" teaserLayoutPage",outContainer:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{bannerList:y,upBner:!0,showButton:!1,showTexts:!1,isTeaser:!0,homeContent:r,title:r.title,colors:r.displayColors}),!_&&(0,a.jsx)(v,{isTeaser:!1,homeContent:r,colors:r.displayColors})]}),outBottomContainer:(0,a.jsxs)("div",{className:"teaserLayoutPage",children:[(0,a.jsxs)("div",{style:{backgroundColor:"#F7F5F5",position:"relative"},children:[(0,a.jsx)(h.Z,{homeContent:r,isMobile:_,colors:r.displayColors}),(0,a.jsx)(d.Z,{isTeaser:!1,colors:r.displayColors,homeContent:r})]}),(0,a.jsx)("div",{children:1==r.statusStand?(0,a.jsx)(C.Z,{isMobile:_,id:"nosso-stand",colors:r.displayColors,standVendas:r.standVendas}):null}),(0,a.jsx)("div",{style:{backgroundColor:"#F7F5F5 !important",paddingTop:"3rem"},children:(0,a.jsx)(w,{id:"footer"})})]}),children:[s?(0,a.jsx)(l.Z,{isInternal:!1,isTeaser:!0,colors:r.displayColors,homeContent:r,isMobile:!0,empreendimentosjson:o,statusStand:r.statusStand,linkStatus:r.linkStandAtivo}):"",(0,a.jsx)(f.Z,{homeContent:r,colors:r.displayColors,isMobile:_}),(0,a.jsx)(m.Z,{homeContent:r,colors:r.displayColors,isMobile:_})]})};T.getInitialProps=function(){var e=(0,t.Z)(n().mark((function e(r){var s,t,o,a,i;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.req,s=r.res,t=r.query,o={},e.prev=2,a=new u.Z,e.next=6,a.getEnterpriseBySlugTitle(t.empreendimento,!0);case 6:if("5"==(o=e.sent).statusObra.id){e.next=9;break}throw new Exception;case 9:e.next=23;break;case 11:if(e.prev=11,e.t0=e.catch(2),i=new x.Z,!r.query.utm_content||!i.isTeaserRedirect(r.query.utm_content)){e.next=20;break}return s.writeHead(307,{Location:"https://api.whatsapp.com/send?phone=5519997188929","Content-Type":"text/html; charset=utf-8"}),s.end(),e.abrupt("return",{});case 20:return s.writeHead(307,{Location:"/404","Content-Type":"text/html; charset=utf-8"}),s.end(),e.abrupt("return",{});case 23:return e.abrupt("return",{homeContent:o,showAlphaMenu:!0,location:{},empreendimentosjson:{}});case 24:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(r){return e.apply(this,arguments)}}(),r.default=T},2699:function(e){e.exports={areaTeaserCarrosselCadaSorriso:"teaser-carrossel-cada-sorriso_areaTeaserCarrosselCadaSorriso__Dbia7",container:"teaser-carrossel-cada-sorriso_container__LNnBU",areaTitleTeaserCarrosselCadaSorriso:"teaser-carrossel-cada-sorriso_areaTitleTeaserCarrosselCadaSorriso__SPZ_e",title:"teaser-carrossel-cada-sorriso_title__gLu_6",description:"teaser-carrossel-cada-sorriso_description__eNulq"}}},function(e){e.O(0,[1255,9669,1664,4592,1860,7718,8638,5176,8933,7501,3899,3131,9774,2888,179],(function(){return r=6282,e(e.s=r);var r}));var r=e.O();_N_E=r}]);