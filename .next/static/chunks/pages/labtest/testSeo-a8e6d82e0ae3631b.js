(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2820],{1977:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/labtest/testSeo",function(){return n(8354)}])},1790:function(e,t,n){"use strict";n.d(t,{$P:function(){return j},$e:function(){return m},BT:function(){return i},CQ:function(){return l},Ct:function(){return s},De:function(){return g},GU:function(){return v},H2:function(){return C},NA:function(){return A},Nj:function(){return T},PO:function(){return c},Pn:function(){return h},RL:function(){return S},V3:function(){return w},Vs:function(){return f},YO:function(){return k},Zm:function(){return O},cM:function(){return P},dN:function(){return Z},hx:function(){return a},lE:function(){return u},o2:function(){return N},pF:function(){return b},px:function(){return r},qU:function(){return o},rn:function(){return d},vY:function(){return x},wq:function(){return y},zZ:function(){return _},zg:function(){return p}});var r="Alphaville",a="banners",o="blog-content",i="cookies-policy",u="update-api",s="location",c="states",l="home-content",p="form-lp-content",h="general-search",f="testimonials-content",m="location-txt",d="location-uf",g="geolocation",_="enterprises",w="https://qa.alphaville.com.br",v="https://alphaville.com.br/be_alphaville/public",b="qa.alphaville.com.br",x="/be_alphaville/public",k="/web/empreendimentos/search-by-location",Z="/api/home",y="https://qa.alphaville.com.br/blog/?json=1&count=",P="/web/empreendimentos/",A="/api/states",j="/api/testimonials/all",O="/web/send_data_crm",C="/web/send_data_crm_cv",N="AIzaSyATOyZpJfs9Lsm8urMnzZNTXgDSm_eqdfY",S="551130305100",T="casas-alphaville-d-pedro-0"},1326:function(e,t,n){"use strict";var r=n(9669),a=n.n(r),o=n(1790);t.Z=a().create({baseURL:o.GU,responseType:"json"})},9590:function(e,t,n){"use strict";var r=n(7568),a=n(1438),o=n(4924),i=n(4051),u=n.n(i),s=n(1790),c=n(1326);t.Z=function e(){(0,a.Z)(this,e),(0,o.Z)(this,"getContent",(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get(s.dN);case 2:return t=e.sent,n={},t.data&&(n=t.data),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)}))))}},8224:function(e,t,n){"use strict";var r=n(7568),a=n(1438),o=n(4924),i=n(4051),u=n.n(i),s=n(9669),c=n.n(s),l=n(2321),p=n.n(l),h=n(975),f=n.n(h),m=n(1790);t.Z=function e(){var t=this;(0,a.Z)(this,e),(0,o.Z)(this,"getFileNameByUrl",(function(e){if(-1!==e.indexOf("/")){var t=e.split("/");return t[t.length-1]}return null})),(0,o.Z)(this,"getFolderByUrl",(function(e){if(-1!==e.indexOf("/")){var t=e.split("/"),n=t.slice(0,t.length-1).join("/");return 0!==n.indexOf("/")?"/".concat(n,"/"):"".concat(n,"/")}return null})),(0,o.Z)(this,"convertUrltoBlob",(function(e){return"http://www.alphaville.com.br/be_alphaville/public/uploads/home/cid_alp_image_desktop/graciosa-foto-04-tamanho-1180x350-1-2-3-4.jpeg",fetch("http://www.alphaville.com.br/be_alphaville/public/uploads/home/cid_alp_image_desktop/graciosa-foto-04-tamanho-1180x350-1-2-3-4.jpeg",{mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.blob().then((function(n){return new Promise((function(r,a){var o={type:n.type},i=t.getFileNameByUrl(e.url);return r(new File([n],i,o))}))}))}))})),(0,o.Z)(this,"getImageSize",function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={hostname:t.hostname,path:t.path,headers:{"Access-Control-Allow-Headers":"X-Requested-With","Access-Control-Allow-Origin":"*"}},e.abrupt("return",new Promise((function(e,t){var r=p().get(n,(function(t){f()(t,(function(t,n){e(n),r.abort()}))}))})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var n=this;(0,o.Z)(this,"generateImageMetaProps",function(){var e=(0,r.Z)(u().mark((function e(t,r){var a,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return t=t.startsWith("/")?t.replace("//","/").substring(1):t.replace("//","/"),a={hostname:m.pF,path:m.vY+"/"+t},e.next=6,n.getImageSize(a);case 6:return o=e.sent,e.abrupt("return",{url:m.GU+"/"+t,type:"image/"+o.format,width:o.width,height:o.height,alt:r});case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),(0,o.Z)(this,"getImageSizeAxios",function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/static/images/alphaville.jpg","https://www.alphaville.com.br/be_alphaville/public/uploads/home/cid_alp_image_desktop/graciosa-foto-04-tamanho-1180x350-1-2-3-4.jpeg",n={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"X-Requested-With","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,"},"https://www.alphaville.com.br","/be_alphaville/public/uploads/home/cid_alp_image_desktop/graciosa-foto-04-tamanho-1180x350-1-2-3-4.jpeg",r=c().create({baseURL:"https://www.alphaville.com.br",headers:n}),e.next=8,r.get("/be_alphaville/public/uploads/home/cid_alp_image_desktop/graciosa-foto-04-tamanho-1180x350-1-2-3-4.jpeg");case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),(0,o.Z)(this,"getImageSizeFronUrl",function(){var e=(0,r.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var r=new Image;r.onload=function(){var t={width:r.width,height:r.height};e(t)},r.src=t.url})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var i=this;(0,o.Z)(this,"doCORSRequest",function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://cors-anywhere.herokuapp.com/",n=i.getFileNameByUrl(t.url),(r=new XMLHttpRequest).open(t.method,"https://cors-anywhere.herokuapp.com/"+t.url),r.onload=r.onerror=function(){var e=r.response;return new Promise((function(t,r){var a={type:"image/jpeg"},o=new File([e],n,a),i=new FileReader;return i.readAsArrayBuffer(o),i.onload=function(){console.log("reader.result: ",i.result)},i.onerror=function(){console.log(i.error)},t(new File([e],n,a))}))},/^POST/i.test(t.method)&&r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.send(t.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},8354:function(e,t,n){"use strict";n.r(t);var r=n(7568),a=n(4051),o=n.n(a),i=n(5893),u=n(1664),s=n.n(u),c=n(9590),l=n(8224),p=n(1790);function h(e){return(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"SEO Added to Page"}),(0,i.jsx)("p",{children:"Take a look at the head to see what has been added."}),(0,i.jsxs)("p",{children:["Or checkout how"," ",(0,i.jsx)(s(),{href:"/jsonld",children:(0,i.jsx)("a",{children:"JSON-LD"})})," ","(Structured Data) is added"]})]})}h.getInitialProps=function(){var e=(0,r.Z)(o().mark((function e(t){var n,r,a,i,u,s,h,f,m,d,g,_,w,v,b;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.req,t.query,[],n={},r={},(a=!1)?console.log("server"):console.log("browser"),!a){e.next=33;break}return i=new c.Z,e.next=10,i.getContent();case 10:return n=e.sent,u=new l.Z,s=n.cid_alp_image_desktop||n.cid_alp_image_mobile,e.next=15,u.generateImageMetaProps(s,n.cid_alp_image_alt_text);case 15:return h=e.sent,f=n.exp_alp_image1_desktop||n.exp_alp_image1_mobile,e.next=19,u.generateImageMetaProps(f,n.exp_alp_image1_title);case 19:return m=e.sent,d=n.exp_alp_image2_desktop||n.exp_alp_image2_mobile,e.next=23,u.generateImageMetaProps(d,n.exp_alp_image2_title);case 23:return g=e.sent,_=n.exp_alp_image3_desktop||n.exp_alp_image3_mobile,e.next=27,u.generateImageMetaProps(_,n.exp_alp_image3_title);case 27:return w=e.sent,v=n.exp_alp_image4_desktop||n.exp_alp_image4_mobile,e.next=31,u.generateImageMetaProps(v,n.exp_alp_image4_title);case 31:b=e.sent,r={images:[h,m,g,w,b],title:n.meta_title,description:n.meta_description,url:p.V3+"/home"};case 33:return e.abrupt("return",{homeContent:n,metaProps:r,isServer:a});case 34:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.default=h}},function(e){e.O(0,[9669,1664,6658,9774,2888,179],(function(){return t=1977,e(e.s=t);var t}));var t=e.O();_N_E=t}]);