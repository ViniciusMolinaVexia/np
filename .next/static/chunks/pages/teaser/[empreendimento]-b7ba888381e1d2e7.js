(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9948],{764:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/teaser/[empreendimento]",function(){return t(6817)}])},7444:function(e,r,t){"use strict";t.d(r,{Z:function(){return d}});var n=t(5893),s=t(682),o=t(1608),a=t(1555),i=t(1790),l=(t(7294),t(6696)),c=t(2699),u=t.n(c);function d(e){var r=e.homeContent,t=e.colors,c=e.isMobile,d=e.isTeaser,h={color:t.colorFlat};return(0,n.jsx)("section",{className:u().areaTeaserCarrosselCadaSorriso,children:(0,n.jsxs)(s.Z,{className:u().container,children:[(0,n.jsx)(o.Z,{children:(0,n.jsx)(a.Z,{xs:12,children:(0,n.jsxs)("div",{className:u().areaTitleTeaserCarrosselCadaSorriso,children:[(0,n.jsx)("h2",{style:h,className:u().title,children:r.titleCadaSorriso}),(0,n.jsx)("h3",{className:u().description,dangerouslySetInnerHTML:{__html:r.GaleriaImagemDescription}})]})})}),(0,n.jsx)("div",{className:u().teaserCarrosselCadaSorriso,children:(0,n.jsx)(l.Z,{colors:t,isMobile:c,imagesCadaSorriso:function(e){var r;return(null===(r=e.imagesCarrossel)||void 0===r?void 0:r.filter((function(e){if(d){if("principal"==e.tipo)return e}else{if("secundario"==e.tipo)return e;if("principal"==e.tipo)return e}}))).map((function(e){return i.GU+"/"+e.image}))}(r)})})]})})}},6817:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return O}});var n=t(7568),s=t(4051),o=t.n(s),a=t(5893),i=t(7294),l=t(3899),c=t(5129),u=t(2750),d=t(3331),h=t(3001),f=t(1438),p=t(4924),v=t(6042),g=t(9396),C=t(6152),m=t.n(C),x=t(1864),b=t.n(x),w=t(3454),j=function e(){(0,f.Z)(this,e),(0,p.Z)(this,"UploadJsonFile",(0,n.Z)(o().mark((function e(){var r,t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=b().join(w.cwd(),"runserver/redirects.json"),e.next=4,m().readFile(r);case 4:return t=e.sent,n=JSON.parse(t),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log("error:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))));var r=this;(0,p.Z)(this,"TeaserRedirectObject",function(){var e=(0,n.Z)(o().mark((function e(t){var n,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.UploadJsonFile();case 2:if(n=e.sent,s={},n.redirects.map((function(e){e.from==t.asPath&&(s=e)})),!s){e.next=9;break}return e.abrupt("return",(0,g.Z)((0,v.Z)({},s),{isTeaserRedirect:!0}));case 9:return e.abrupt("return",{});case 10:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}())},_=t(7444),y=t(5298),T=t(8244),k=t(9123),A=t(7382),Z=t(1659),S=t(5152),N=t.n(S),E=t(1163),M=N()((function(){return t.e(8808).then(t.bind(t,8808))}),{loadableGenerated:{webpack:function(){return[8808]}},ssr:!1}),P=function(e){var r=e.homeContent,t=e.showAlphaMenu,n=(e.slugDomPedro,e.location),s=e.empreendimentosjson,o=e.displayColor,u=((0,E.useRouter)(),(0,i.useState)(!1)),f=u[0],p=u[1],v=(r.id,r.title),g=r.banner,C=r.metaProps;(0,i.useEffect)((function(){window.outerWidth<=768?p(!0):p(!1)}),[]);var m=new Z.Z;return(0,a.jsxs)(h.Z,{metaProps:m.changeTitleMetaProps(C,v),homeContent:r,url:"/",active:"teaser",location:n,cssClass:o+" teaserLayoutPage",outContainer:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{bannerList:g,upBner:!0,showButton:!1,showTexts:!1,isTeaser:!0,homeContent:r,title:r.title,colors:r.displayColors}),!f&&(0,a.jsx)(M,{isTeaser:!0,homeContent:r,colors:r.displayColors})]}),outBottomContainer:(0,a.jsxs)("div",{className:"teaserLayoutPage",children:[(0,a.jsxs)("div",{style:{backgroundColor:"#F7F5F5",position:"relative"},children:[(0,a.jsx)(_.Z,{isTeaser:!0,homeContent:r,isMobile:f,colors:r.displayColors}),"casas-alphaville-d-pedro-0"!=r.slug||"casas-alphaville-d-pedro-1"!=r.slug&&(0,a.jsx)(k.Z,{homeContent:r,isMobile:f,colors:r.displayColors}),(0,a.jsx)(d.Z,{isTeaser:!0,colors:r.displayColors,homeContent:r})]}),(0,a.jsx)("div",{children:1==r.statusStand?(0,a.jsx)(T.Z,{isMobile:f,id:"nosso-stand",colors:r.displayColors,standVendas:r.standVendas}):null})]}),children:[t?(0,a.jsx)(l.Z,{isInternal:!1,isTeaser:!0,colors:r.displayColors,homeContent:r,isMobile:!0,empreendimentosjson:s,statusStand:r.statusStand,linkStatus:r.linkStandAtivo}):"",(0,a.jsx)(A.Z,{isTeaser:!0,homeContent:r,colors:r.displayColors,isMobile:f}),(0,a.jsx)(y.Z,{homeContent:r,colors:r.displayColors,isMobile:f})]})};P.getInitialProps=function(){var e=(0,n.Z)(o().mark((function e(r){var t,n,s,a,i,l,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.req,t=r.res,n=r.query,s={},e.prev=2,a=new u.Z,e.next=6,a.getEnterpriseBySlugTitle(n.empreendimento,!0);case 6:if("4"==(s=e.sent).statusObra.id){e.next=9;break}throw new Exception;case 9:e.next=37;break;case 11:e.prev=11,e.t0=e.catch(2),e.prev=13,i=null,l=0;case 16:if(!(l<=3)){e.next=25;break}return c=new j,e.next=20,c.TeaserRedirectObject(r);case 20:(i=e.sent)!={}&&(l=4),l++,e.next=16;break;case 25:if(!i||!(null===i||void 0===i?void 0:i.isTeaserRedirect)){e.next=29;break}t.writeHead(301,{Location:null===i||void 0===i?void 0:i.to}),t.end(),e.next=30;break;case 29:throw new Exception;case 30:return e.abrupt("return",{props:{}});case 33:e.prev=33,e.t1=e.catch(13),t.writeHead(301,{Location:"/404"}),t.end();case 37:return e.abrupt("return",{homeContent:s,showAlphaMenu:!0,location:{},empreendimentosjson:{}});case 38:case"end":return e.stop()}}),e,null,[[2,11],[13,33]])})));return function(r){return e.apply(this,arguments)}}();var O=P},2699:function(e){e.exports={areaTeaserCarrosselCadaSorriso:"teaser-carrossel-cada-sorriso_areaTeaserCarrosselCadaSorriso__Dbia7",container:"teaser-carrossel-cada-sorriso_container__LNnBU",areaTitleTeaserCarrosselCadaSorriso:"teaser-carrossel-cada-sorriso_areaTitleTeaserCarrosselCadaSorriso__SPZ_e",title:"teaser-carrossel-cada-sorriso_title__gLu_6",description:"teaser-carrossel-cada-sorriso_description__eNulq"}},1864:function(e){!function(){"use strict";var r={113:function(e){function r(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function t(e,r){for(var t,n="",s=0,o=-1,a=0,i=0;i<=e.length;++i){if(i<e.length)t=e.charCodeAt(i);else{if(47===t)break;t=47}if(47===t){if(o===i-1||1===a);else if(o!==i-1&&2===a){if(n.length<2||2!==s||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var l=n.lastIndexOf("/");if(l!==n.length-1){-1===l?(n="",s=0):s=(n=n.slice(0,l)).length-1-n.lastIndexOf("/"),o=i,a=0;continue}}else if(2===n.length||1===n.length){n="",s=0,o=i,a=0;continue}r&&(n.length>0?n+="/..":n="..",s=2)}else n.length>0?n+="/"+e.slice(o+1,i):n=e.slice(o+1,i),s=i-o-1;o=i,a=0}else 46===t&&-1!==a?++a:a=-1}return n}var n={resolve:function(){for(var e,n="",s=!1,o=arguments.length-1;o>=-1&&!s;o--){var a;o>=0?a=arguments[o]:(void 0===e&&(e=""),a=e),r(a),0!==a.length&&(n=a+"/"+n,s=47===a.charCodeAt(0))}return n=t(n,!s),s?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(e){if(r(e),0===e.length)return".";var n=47===e.charCodeAt(0),s=47===e.charCodeAt(e.length-1);return 0!==(e=t(e,!n)).length||n||(e="."),e.length>0&&s&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return r(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var s=arguments[t];r(s),s.length>0&&(void 0===e?e=s:e+="/"+s)}return void 0===e?".":n.normalize(e)},relative:function(e,t){if(r(e),r(t),e===t)return"";if((e=n.resolve(e))===(t=n.resolve(t)))return"";for(var s=1;s<e.length&&47===e.charCodeAt(s);++s);for(var o=e.length,a=o-s,i=1;i<t.length&&47===t.charCodeAt(i);++i);for(var l=t.length-i,c=a<l?a:l,u=-1,d=0;d<=c;++d){if(d===c){if(l>c){if(47===t.charCodeAt(i+d))return t.slice(i+d+1);if(0===d)return t.slice(i+d)}else a>c&&(47===e.charCodeAt(s+d)?u=d:0===d&&(u=0));break}var h=e.charCodeAt(s+d);if(h!==t.charCodeAt(i+d))break;47===h&&(u=d)}var f="";for(d=s+u+1;d<=o;++d)d!==o&&47!==e.charCodeAt(d)||(0===f.length?f+="..":f+="/..");return f.length>0?f+t.slice(i+u):(i+=u,47===t.charCodeAt(i)&&++i,t.slice(i))},_makeLong:function(e){return e},dirname:function(e){if(r(e),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,s=-1,o=!0,a=e.length-1;a>=1;--a)if(47===(t=e.charCodeAt(a))){if(!o){s=a;break}}else o=!1;return-1===s?n?"/":".":n&&1===s?"//":e.slice(0,s)},basename:function(e,t){if(void 0!==t&&"string"!==typeof t)throw new TypeError('"ext" argument must be a string');r(e);var n,s=0,o=-1,a=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var i=t.length-1,l=-1;for(n=e.length-1;n>=0;--n){var c=e.charCodeAt(n);if(47===c){if(!a){s=n+1;break}}else-1===l&&(a=!1,l=n+1),i>=0&&(c===t.charCodeAt(i)?-1===--i&&(o=n):(i=-1,o=l))}return s===o?o=l:-1===o&&(o=e.length),e.slice(s,o)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!a){s=n+1;break}}else-1===o&&(a=!1,o=n+1);return-1===o?"":e.slice(s,o)},extname:function(e){r(e);for(var t=-1,n=0,s=-1,o=!0,a=0,i=e.length-1;i>=0;--i){var l=e.charCodeAt(i);if(47!==l)-1===s&&(o=!1,s=i+1),46===l?-1===t?t=i:1!==a&&(a=1):-1!==t&&(a=-1);else if(!o){n=i+1;break}}return-1===t||-1===s||0===a||1===a&&t===s-1&&t===n+1?"":e.slice(t,s)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,r){var t=r.dir||r.root,n=r.base||(r.name||"")+(r.ext||"");return t?t===r.root?t+n:t+e+n:n}("/",e)},parse:function(e){r(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var n,s=e.charCodeAt(0),o=47===s;o?(t.root="/",n=1):n=0;for(var a=-1,i=0,l=-1,c=!0,u=e.length-1,d=0;u>=n;--u)if(47!==(s=e.charCodeAt(u)))-1===l&&(c=!1,l=u+1),46===s?-1===a?a=u:1!==d&&(d=1):-1!==a&&(d=-1);else if(!c){i=u+1;break}return-1===a||-1===l||0===d||1===d&&a===l-1&&a===i+1?-1!==l&&(t.base=t.name=0===i&&o?e.slice(1,l):e.slice(i,l)):(0===i&&o?(t.name=e.slice(1,a),t.base=e.slice(1,l)):(t.name=e.slice(i,a),t.base=e.slice(i,l)),t.ext=e.slice(a,l)),i>0?t.dir=e.slice(0,i-1):o&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n}},t={};function n(e){var s=t[e];if(void 0!==s)return s.exports;var o=t[e]={exports:{}},a=!0;try{r[e](o,o.exports,n),a=!1}finally{a&&delete t[e]}return o.exports}n.ab="//";var s=n(113);e.exports=s}()},6152:function(){}},function(e){e.O(0,[1255,9669,1664,4592,1860,7718,8638,5176,8933,7501,3899,3131,9774,2888,179],(function(){return r=764,e(e.s=r);var r}));var r=e.O();_N_E=r}]);