(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9948],{764:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/teaser/[empreendimento]",function(){return r(6817)}])},6817:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var n=r(7568),o=r(4051),s=r.n(o),a=r(5893),i=r(7294),l=r(3899),c=r(5129),u=r(2750),h=r(3331),f=r(3001),d=r(1438),p=r(4924),v=r(6042),g=r(9396),b=r(6152),m=r.n(b),C=r(1864),x=r.n(C),w=r(3454),y=function e(){(0,d.Z)(this,e),(0,p.Z)(this,"UploadJsonFile",(0,n.Z)(s().mark((function e(){var t,r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=x().join(w.cwd(),"runserver/redirects.json"),e.next=4,m().readFile(t);case 4:return r=e.sent,n=JSON.parse(r),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log("error:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))));var t=this;(0,p.Z)(this,"TeaserRedirectObject",function(){var e=(0,n.Z)(s().mark((function e(r){var n,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.UploadJsonFile();case 2:if(n=e.sent,o={},n.redirects.map((function(e){e.from==r.asPath&&(o=e)})),!o){e.next=9;break}return e.abrupt("return",(0,g.Z)((0,v.Z)({},o),{isTeaserRedirect:!0}));case 9:return e.abrupt("return",{});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},k=r(7444),A=r(5298),j=r(8244),T=r(9123),Z=r(7382),_=r(1659),E=r(5152),O=r.n(E),P=r(1163),M=O()((function(){return r.e(8808).then(r.bind(r,8808))}),{loadableGenerated:{webpack:function(){return[8808]}},ssr:!1}),S=function(e){var t=e.homeContent,r=e.showAlphaMenu,n=(e.slugDomPedro,e.location),o=e.empreendimentosjson,s=e.displayColor,u=((0,P.useRouter)(),(0,i.useState)(!1)),d=u[0],p=u[1],v=(t.id,t.title),g=t.banner,b=t.metaProps;(0,i.useEffect)((function(){window.outerWidth<=768?p(!0):p(!1)}),[]);var m=new _.Z;return(0,a.jsxs)(f.Z,{metaProps:m.changeTitleMetaProps(b,v),homeContent:t,url:"/",active:"teaser",location:n,cssClass:s+" teaserLayoutPage",outContainer:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{bannerList:g,upBner:!0,showButton:!1,showTexts:!1,isTeaser:!0,homeContent:t,title:t.title,colors:t.displayColors}),!d&&(0,a.jsx)(M,{isTeaser:!0,homeContent:t,colors:t.displayColors})]}),outBottomContainer:(0,a.jsxs)("div",{className:"teaserLayoutPage",children:[(0,a.jsxs)("div",{style:{backgroundColor:"#F7F5F5",position:"relative"},children:[(0,a.jsx)(k.Z,{isTeaser:!0,homeContent:t,isMobile:d,colors:t.displayColors}),"casas-alphaville-d-pedro-0"!=t.slug||"casas-alphaville-d-pedro-1"!=t.slug&&(0,a.jsx)(T.Z,{homeContent:t,isMobile:d,colors:t.displayColors}),(0,a.jsx)(h.Z,{isTeaser:!0,colors:t.displayColors,homeContent:t})]}),(0,a.jsx)("div",{children:1==t.statusStand?(0,a.jsx)(j.Z,{isMobile:d,id:"nosso-stand",colors:t.displayColors,standVendas:t.standVendas}):null})]}),children:[r?(0,a.jsx)(l.Z,{isInternal:!1,isTeaser:!0,colors:t.displayColors,homeContent:t,isMobile:!0,empreendimentosjson:o,statusStand:t.statusStand,linkStatus:t.linkStandAtivo}):"",(0,a.jsx)(Z.Z,{isTeaser:!0,homeContent:t,colors:t.displayColors,isMobile:d}),(0,a.jsx)(A.Z,{homeContent:t,colors:t.displayColors,isMobile:d})]})};S.getInitialProps=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n,o,a,i,l,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.req,r=t.res,n=t.query,o={},e.prev=2,a=new u.Z,e.next=6,a.getEnterpriseBySlugTitle(n.empreendimento,!0);case 6:if("4"==(o=e.sent).statusObra.id){e.next=9;break}throw new Exception;case 9:e.next=37;break;case 11:e.prev=11,e.t0=e.catch(2),e.prev=13,i=null,l=0;case 16:if(!(l<=3)){e.next=25;break}return c=new y,e.next=20,c.TeaserRedirectObject(t);case 20:(i=e.sent)!={}&&(l=4),l++,e.next=16;break;case 25:if(!i||!(null===i||void 0===i?void 0:i.isTeaserRedirect)){e.next=29;break}r.writeHead(301,{Location:null===i||void 0===i?void 0:i.to}),r.end(),e.next=30;break;case 29:throw new Exception;case 30:return e.abrupt("return",{props:{}});case 33:e.prev=33,e.t1=e.catch(13),r.writeHead(301,{Location:"/404"}),r.end();case 37:return e.abrupt("return",{homeContent:o,showAlphaMenu:!0,location:{},empreendimentosjson:{}});case 38:case"end":return e.stop()}}),e,null,[[2,11],[13,33]])})));return function(t){return e.apply(this,arguments)}}();var N=S},1864:function(e){!function(){"use strict";var t={113:function(e){function t(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,n="",o=0,s=-1,a=0,i=0;i<=e.length;++i){if(i<e.length)r=e.charCodeAt(i);else{if(47===r)break;r=47}if(47===r){if(s===i-1||1===a);else if(s!==i-1&&2===a){if(n.length<2||2!==o||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var l=n.lastIndexOf("/");if(l!==n.length-1){-1===l?(n="",o=0):o=(n=n.slice(0,l)).length-1-n.lastIndexOf("/"),s=i,a=0;continue}}else if(2===n.length||1===n.length){n="",o=0,s=i,a=0;continue}t&&(n.length>0?n+="/..":n="..",o=2)}else n.length>0?n+="/"+e.slice(s+1,i):n=e.slice(s+1,i),o=i-s-1;s=i,a=0}else 46===r&&-1!==a?++a:a=-1}return n}var n={resolve:function(){for(var e,n="",o=!1,s=arguments.length-1;s>=-1&&!o;s--){var a;s>=0?a=arguments[s]:(void 0===e&&(e=""),a=e),t(a),0!==a.length&&(n=a+"/"+n,o=47===a.charCodeAt(0))}return n=r(n,!o),o?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(e){if(t(e),0===e.length)return".";var n=47===e.charCodeAt(0),o=47===e.charCodeAt(e.length-1);return 0!==(e=r(e,!n)).length||n||(e="."),e.length>0&&o&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var o=arguments[r];t(o),o.length>0&&(void 0===e?e=o:e+="/"+o)}return void 0===e?".":n.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r)return"";if((e=n.resolve(e))===(r=n.resolve(r)))return"";for(var o=1;o<e.length&&47===e.charCodeAt(o);++o);for(var s=e.length,a=s-o,i=1;i<r.length&&47===r.charCodeAt(i);++i);for(var l=r.length-i,c=a<l?a:l,u=-1,h=0;h<=c;++h){if(h===c){if(l>c){if(47===r.charCodeAt(i+h))return r.slice(i+h+1);if(0===h)return r.slice(i+h)}else a>c&&(47===e.charCodeAt(o+h)?u=h:0===h&&(u=0));break}var f=e.charCodeAt(o+h);if(f!==r.charCodeAt(i+h))break;47===f&&(u=h)}var d="";for(h=o+u+1;h<=s;++h)h!==s&&47!==e.charCodeAt(h)||(0===d.length?d+="..":d+="/..");return d.length>0?d+r.slice(i+u):(i+=u,47===r.charCodeAt(i)&&++i,r.slice(i))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),n=47===r,o=-1,s=!0,a=e.length-1;a>=1;--a)if(47===(r=e.charCodeAt(a))){if(!s){o=a;break}}else s=!1;return-1===o?n?"/":".":n&&1===o?"//":e.slice(0,o)},basename:function(e,r){if(void 0!==r&&"string"!==typeof r)throw new TypeError('"ext" argument must be a string');t(e);var n,o=0,s=-1,a=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var i=r.length-1,l=-1;for(n=e.length-1;n>=0;--n){var c=e.charCodeAt(n);if(47===c){if(!a){o=n+1;break}}else-1===l&&(a=!1,l=n+1),i>=0&&(c===r.charCodeAt(i)?-1===--i&&(s=n):(i=-1,s=l))}return o===s?s=l:-1===s&&(s=e.length),e.slice(o,s)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!a){o=n+1;break}}else-1===s&&(a=!1,s=n+1);return-1===s?"":e.slice(o,s)},extname:function(e){t(e);for(var r=-1,n=0,o=-1,s=!0,a=0,i=e.length-1;i>=0;--i){var l=e.charCodeAt(i);if(47!==l)-1===o&&(s=!1,o=i+1),46===l?-1===r?r=i:1!==a&&(a=1):-1!==r&&(a=-1);else if(!s){n=i+1;break}}return-1===r||-1===o||0===a||1===a&&r===o-1&&r===n+1?"":e.slice(r,o)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var r=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+n:r+e+n:n}("/",e)},parse:function(e){t(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var n,o=e.charCodeAt(0),s=47===o;s?(r.root="/",n=1):n=0;for(var a=-1,i=0,l=-1,c=!0,u=e.length-1,h=0;u>=n;--u)if(47!==(o=e.charCodeAt(u)))-1===l&&(c=!1,l=u+1),46===o?-1===a?a=u:1!==h&&(h=1):-1!==a&&(h=-1);else if(!c){i=u+1;break}return-1===a||-1===l||0===h||1===h&&a===l-1&&a===i+1?-1!==l&&(r.base=r.name=0===i&&s?e.slice(1,l):e.slice(i,l)):(0===i&&s?(r.name=e.slice(1,a),r.base=e.slice(1,l)):(r.name=e.slice(i,a),r.base=e.slice(i,l)),r.ext=e.slice(a,l)),i>0?r.dir=e.slice(0,i-1):s&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var s=r[e]={exports:{}},a=!0;try{t[e](s,s.exports,n),a=!1}finally{a&&delete r[e]}return s.exports}n.ab="//";var o=n(113);e.exports=o}()},6152:function(){}},function(e){e.O(0,[1255,9669,1664,4592,1860,1428,8638,5176,8933,7501,3899,2041,9774,2888,179],(function(){return t=764,e(e.s=t);var t}));var t=e.O();_N_E=t}]);