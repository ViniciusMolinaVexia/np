(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2046],{1453:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/labtest/verifyApiSearch",function(){return n(4198)}])},4198:function(e,t,n){"use strict";n.r(t);var r=n(7568),a=n(4051),i=n.n(a),s=n(5893),l=n(7294),c=n(9669),u=n.n(c);t.default=function(){var e=(0,l.useState)({search:[]}),t=(e[0],e[1]),n=(0,l.useState)({search:[]}),a=(n[0],n[1]),c=(0,l.useState)({search:[]}),o=c[0],h=c[1],d=(0,l.useState)({search:[]}),m=d[0],p=d[1],b=(0,l.useState)({query:""}),w=b[0],f=b[1];(0,l.useEffect)((function(){var e="https://www.alphaville.com.br/be_alphaville/public/web/empreendimentos",n=function(){var n=(0,r.Z)(i().mark((function n(){var r,s,l;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e+"/search-by-location?latitude=-23.5431786&longitude=-46.6291845&where=destaque=1%20AND%20status_obra%20%3E%201&limit=4",n.next=3,u()("https://www.alphaville.com.br/be_alphaville/public/web/empreendimentos/search-by-location?latitude=-23.5431786&longitude=-46.6291845&where=destaque=1%20AND%20status_obra%20%3E%201&limit=4");case 3:return r=n.sent,t({search:r?r.data.main_image:[]}),e+"/search-by-location?latitude=1&longitude=1&where=destaque=1%20AND%20status_obra=1&limit=6",n.next=8,u()("https://www.alphaville.com.br/be_alphaville/public/web/empreendimentos/search-by-location?latitude=1&longitude=1&where=destaque=1%20AND%20status_obra=1&limit=6");case 8:return s=n.sent,a({search:s?s.data.main_image:[]}),e+"/search-by-location?latitude=-23.5431786&longitude=-46.6291845&search=&orderby=status_obra%20ASC&where=",n.next=13,u()("https://www.alphaville.com.br/be_alphaville/public/web/empreendimentos/search-by-location?latitude=-23.5431786&longitude=-46.6291845&search=&orderby=status_obra%20ASC&where=");case 13:l=n.sent,h({search:l?l.data.search:[]});case 15:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]);var _=function(e){var t=o.search.filter((function(t){return JSON.stringify(t).toLowerCase().indexOf(e.toLowerCase())>-1}));p({search:t})},v=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&f({query:t.target.value}),_(w.query);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:" Teste API"}),(0,s.jsx)("li",{children:(0,s.jsx)("b",{children:"TESTE BUSCA"})}),(0,s.jsx)("li",{className:"area-encontre",children:(0,s.jsx)("input",{value:w.query,name:"busca",className:"busca-menu-mobile",placeholder:"Encontre seu empreendimento",onChange:v})}),(0,s.jsxs)("li",{children:["Total: ",m.search.length]}),m.search.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsxs)("a",{href:e.empreendimento.slug,children:["-",e.type.title," - ",e.empreendimento.name," - ",e.empreendimento.second_name]})},e.empreendimento.id)})),(0,s.jsx)("li",{children:"================================"}),(0,s.jsx)("li",{children:(0,s.jsx)("b",{children:"API LINK 3"})}),(0,s.jsxs)("li",{children:["Total: ",o.search.length]}),o.search.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsxs)("a",{href:e.empreendimento.slug,children:["-",e.type.title," - ",e.empreendimento.name," - ",e.empreendimento.second_name]})},e.empreendimento.id)}))]})}}},function(e){e.O(0,[9669,9774,2888,179],(function(){return t=1453,e(e.s=t);var t}));var t=e.O();_N_E=t}]);