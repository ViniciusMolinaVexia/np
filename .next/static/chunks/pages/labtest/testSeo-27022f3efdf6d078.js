(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2820],{1977:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/labtest/testSeo",function(){return n(8354)}])},1790:function(e,t,n){"use strict";n.d(t,{$P:function(){return j},$e:function(){return _},BT:function(){return i},CQ:function(){return c},Ct:function(){return u},De:function(){return m},GU:function(){return v},H2:function(){return C},NA:function(){return k},Nj:function(){return T},PO:function(){return s},Pn:function(){return h},RL:function(){return S},V3:function(){return w},Vs:function(){return f},YO:function(){return Z},Zm:function(){return O},cM:function(){return A},dN:function(){return y},hx:function(){return a},lE:function(){return l},o2:function(){return N},pF:function(){return b},px:function(){return r},qU:function(){return o},rn:function(){return g},vY:function(){return x},wq:function(){return P},zZ:function(){return d},zg:function(){return p}});var r="Alphaville",a="banners",o="blog-content",i="cookies-policy",l="update-api",u="location",s="states",c="home-content",p="form-lp-content",h="general-search",f="testimonials-content",_="location-txt",g="location-uf",m="geolocation",d="enterprises",w="https://www.alphaville.com.br",v="https://www.alphaville.com.br/be_alphaville/public",b="www.alphaville.com.br",x="/be_alphaville/public",Z="/web/empreendimentos/search-by-location",y="/api/home",P="https://www.alphaville.com.br/blog/?json=1&count=",A="/web/empreendimentos/",k="/api/states",j="/api/testimonials/all",O="/web/send_data_crm",C="/web/send_data_crm_cv",N="AIzaSyATOyZpJfs9Lsm8urMnzZNTXgDSm_eqdfY",S="551130305100",T="casas-alphaville-d-pedro-0"},1326:function(e,t,n){"use strict";var r=n(9669),a=n.n(r),o=n(1790);t.Z=a().create({baseURL:o.GU,responseType:"json"})},9590:function(e,t,n){"use strict";var r=n(7568),a=n(1438),o=n(4924),i=n(414),l=n(1790),u=n(1326);t.Z=function e(){(0,a.Z)(this,e),(0,o.Z)(this,"getContent",(0,r.Z)((function(){var e,t;return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return[4,u.Z.get(l.dN)];case 1:return e=n.sent(),t={},e.data&&(t=e.data),[2,t]}}))})))}},8224:function(e,t,n){"use strict";var r=n(7568),a=n(1438),o=n(4924),i=n(414),l=n(9669),u=n.n(l),s=n(2321),c=n.n(s),p=n(261),h=n.n(p),f=n(1790);t.Z=function e(){var t=this;(0,a.Z)(this,e),(0,o.Z)(this,"getFileNameByUrl",(function(e){if(-1!==e.indexOf("/")){var t=e.split("/");return t[t.length-1]}return null})),(0,o.Z)(this,"getFolderByUrl",(function(e){if(-1!==e.indexOf("/")){var t=e.split("/"),n=t.slice(0,t.length-1).join("/");return 0!==n.indexOf("/")?"/".concat(n,"/"):"".concat(n,"/")}return null})),(0,o.Z)(this,"convertUrltoBlob",(function(e){return"http://www.alphaville.com.br/be_alphaville/public/uploads/home/cid_alp_image_desktop/graciosa-foto-04-tamanho-1180x350-1-2-3-4.jpeg",fetch("http://www.alphaville.com.br/be_alphaville/public/uploads/home/cid_alp_image_desktop/graciosa-foto-04-tamanho-1180x350-1-2-3-4.jpeg",{mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.blob().then((function(n){return new Promise((function(r,a){var o={type:n.type},i=t.getFileNameByUrl(e.url);return r(new File([n],i,o))}))}))}))})),(0,o.Z)(this,"getImageSize",function(){var e=(0,r.Z)((function(e){var t;return(0,i.__generator)(this,(function(n){return t={hostname:e.hostname,path:e.path,headers:{"Access-Control-Allow-Headers":"X-Requested-With","Access-Control-Allow-Origin":"*"}},[2,new Promise((function(e,n){var r=c().get(t,(function(t){h()(t,(function(t,n){e(n),r.abort()}))}))}))]}))}));return function(t){return e.apply(this,arguments)}}());var n=this;(0,o.Z)(this,"generateImageMetaProps",function(){var e=(0,r.Z)((function(e,t){var r,a;return(0,i.__generator)(this,(function(o){switch(o.label){case 0:return e?(e=e.startsWith("/")?e.replace("//","/").substring(1):e.replace("//","/"),r={hostname:f.pF,path:f.vY+"/"+e},[4,n.getImageSize(r)]):[2,null];case 1:return a=o.sent(),[2,{url:f.GU+"/"+e,type:"image/"+a.format,width:a.width,height:a.height,alt:t}]}}))}));return function(t,n){return e.apply(this,arguments)}}()),(0,o.Z)(this,"getImageSizeAxios",function(){var e=(0,r.Z)((function(e){var t;return(0,i.__generator)(this,(function(e){switch(e.label){case 0:return"/static/images/alphaville.jpg","https://www.alphaville.com.br/be_alphaville/public/uploads/home/cid_alp_image_desktop/graciosa-foto-04-tamanho-1180x350-1-2-3-4.jpeg",t={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"X-Requested-With","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,"},"https://www.alphaville.com.br","/be_alphaville/public/uploads/home/cid_alp_image_desktop/graciosa-foto-04-tamanho-1180x350-1-2-3-4.jpeg",[4,u().create({baseURL:"https://www.alphaville.com.br",headers:t}).get("/be_alphaville/public/uploads/home/cid_alp_image_desktop/graciosa-foto-04-tamanho-1180x350-1-2-3-4.jpeg")];case 1:return[2,e.sent()]}}))}));return function(t){return e.apply(this,arguments)}}()),(0,o.Z)(this,"getImageSizeFronUrl",function(){var e=(0,r.Z)((function(e){return(0,i.__generator)(this,(function(t){return[2,new Promise((function(t,n){var r=new Image;r.onload=function(){var e={width:r.width,height:r.height};t(e)},r.src=e.url}))]}))}));return function(t){return e.apply(this,arguments)}}());var l=this;(0,o.Z)(this,"doCORSRequest",function(){var e=(0,r.Z)((function(e){var t,n;return(0,i.__generator)(this,(function(r){return"https://cors-anywhere.herokuapp.com/",t=l.getFileNameByUrl(e.url),(n=new XMLHttpRequest).open(e.method,"https://cors-anywhere.herokuapp.com/"+e.url),n.onload=n.onerror=function(){var e=n.response;return new Promise((function(n,r){var a={type:"image/jpeg"},o=new File([e],t,a),i=new FileReader;return i.readAsArrayBuffer(o),i.onload=function(){console.log("reader.result: ",i.result)},i.onerror=function(){console.log(i.error)},n(new File([e],t,a))}))},/^POST/i.test(e.method)&&n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.send(e.data),[2]}))}));return function(t){return e.apply(this,arguments)}}())}},8354:function(e,t,n){"use strict";n.r(t);var r=n(7568),a=n(414),o=n(5893),i=n(1664),l=n.n(i),u=n(9590),s=n(8224),c=n(1790);function p(e){return(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"SEO Added to Page"}),(0,o.jsx)("p",{children:"Take a look at the head to see what has been added."}),(0,o.jsxs)("p",{children:["Or checkout how"," ",(0,o.jsx)(l(),{href:"/jsonld",children:(0,o.jsx)("a",{children:"JSON-LD"})})," ","(Structured Data) is added"]})]})}p.getInitialProps=function(){var e=(0,r.Z)((function(e){var t,n,r,o,i,l,p,h,f,_,g,m,d,w;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return e.req,e.query,[],t={},n={},(r=!1)?console.log("server"):console.log("browser"),r?[4,(new u.Z).getContent()]:[3,7];case 1:return t=a.sent(),o=new s.Z,i=t.cid_alp_image_desktop||t.cid_alp_image_mobile,[4,o.generateImageMetaProps(i,t.cid_alp_image_alt_text)];case 2:return l=a.sent(),p=t.exp_alp_image1_desktop||t.exp_alp_image1_mobile,[4,o.generateImageMetaProps(p,t.exp_alp_image1_title)];case 3:return h=a.sent(),f=t.exp_alp_image2_desktop||t.exp_alp_image2_mobile,[4,o.generateImageMetaProps(f,t.exp_alp_image2_title)];case 4:return _=a.sent(),g=t.exp_alp_image3_desktop||t.exp_alp_image3_mobile,[4,o.generateImageMetaProps(g,t.exp_alp_image3_title)];case 5:return m=a.sent(),d=t.exp_alp_image4_desktop||t.exp_alp_image4_mobile,[4,o.generateImageMetaProps(d,t.exp_alp_image4_title)];case 6:w=a.sent(),n={images:[l,h,_,m,w],title:t.meta_title,description:t.meta_description,url:c.V3+"/home"},a.label=7;case 7:return[2,{homeContent:t,metaProps:n,isServer:r}]}}))}));return function(t){return e.apply(this,arguments)}}(),t.default=p}},function(e){e.O(0,[9669,1664,6658,9774,2888,179],(function(){return t=1977,e(e.s=t);var t}));var t=e.O();_N_E=t}]);