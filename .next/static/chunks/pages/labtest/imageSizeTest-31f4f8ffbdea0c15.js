(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1706],{6511:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/labtest/imageSizeTest",function(){return n(9771)}])},1790:function(e,t,n){"use strict";n.d(t,{$P:function(){return S},$e:function(){return m},BT:function(){return i},CQ:function(){return l},Ct:function(){return c},De:function(){return w},GU:function(){return b},H2:function(){return P},NA:function(){return z},Nj:function(){return T},PO:function(){return s},Pn:function(){return h},RL:function(){return O},V3:function(){return g},Vs:function(){return f},YO:function(){return Z},Zm:function(){return j},cM:function(){return A},dN:function(){return k},hx:function(){return o},lE:function(){return u},o2:function(){return C},pF:function(){return _},px:function(){return r},qU:function(){return a},rn:function(){return d},vY:function(){return x},wq:function(){return y},zZ:function(){return v},zg:function(){return p}});var r="Alphaville",o="banners",a="blog-content",i="cookies-policy",u="update-api",c="location",s="states",l="home-content",p="form-lp-content",h="general-search",f="testimonials-content",m="location-txt",d="location-uf",w="geolocation",v="enterprises",g="https://qa.alphaville.com.br",b="https://qa.alphaville.com.br/be_alphaville/public",_="qa.alphaville.com.br",x="/be_alphaville/public",Z="/web/empreendimentos/search-by-location",k="/api/home",y="https://qa.alphaville.com.br/blog/?json=1&count=",A="/web/empreendimentos/",z="/api/states",S="/api/testimonials/all",j="/web/send_data_crm",P="/web/send_data_crm_cv",C="AIzaSyATOyZpJfs9Lsm8urMnzZNTXgDSm_eqdfY",O="551130305100",T="casas-alphaville-d-pedro-0"},8224:function(e,t,n){"use strict";var r=n(7568),o=n(1438),a=n(4924),i=n(4051),u=n.n(i),c=n(9669),s=n.n(c),l=n(2321),p=n.n(l),h=n(975),f=n.n(h),m=n(1790);t.Z=function e(){var t=this;(0,o.Z)(this,e),(0,a.Z)(this,"getFileNameByUrl",(function(e){if(-1!==e.indexOf("/")){var t=e.split("/");return t[t.length-1]}return null})),(0,a.Z)(this,"getFolderByUrl",(function(e){if(-1!==e.indexOf("/")){var t=e.split("/"),n=t.slice(0,t.length-1).join("/");return 0!==n.indexOf("/")?"/".concat(n,"/"):"".concat(n,"/")}return null})),(0,a.Z)(this,"convertUrltoBlob",(function(e){return"http://www.alphaville.com.br/be_alphaville/public/uploads/home/cid_alp_image_desktop/graciosa-foto-04-tamanho-1180x350-1-2-3-4.jpeg",fetch("http://www.alphaville.com.br/be_alphaville/public/uploads/home/cid_alp_image_desktop/graciosa-foto-04-tamanho-1180x350-1-2-3-4.jpeg",{mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.blob().then((function(n){return new Promise((function(r,o){var a={type:n.type},i=t.getFileNameByUrl(e.url);return r(new File([n],i,a))}))}))}))})),(0,a.Z)(this,"getImageSize",function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={hostname:t.hostname,path:t.path,headers:{"Access-Control-Allow-Headers":"X-Requested-With","Access-Control-Allow-Origin":"*"}},e.abrupt("return",new Promise((function(e,t){var r=p().get(n,(function(t){f()(t,(function(t,n){e(n),r.abort()}))}))})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var n=this;(0,a.Z)(this,"generateImageMetaProps",function(){var e=(0,r.Z)(u().mark((function e(t,r){var o,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return t=t.startsWith("/")?t.replace("//","/").substring(1):t.replace("//","/"),o={hostname:m.pF,path:m.vY+"/"+t},e.next=6,n.getImageSize(o);case 6:return a=e.sent,e.abrupt("return",{url:m.GU+"/"+t,type:"image/"+a.format,width:a.width,height:a.height,alt:r});case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),(0,a.Z)(this,"getImageSizeAxios",function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/static/images/alphaville.jpg","https://www.alphaville.com.br/be_alphaville/public/uploads/home/cid_alp_image_desktop/graciosa-foto-04-tamanho-1180x350-1-2-3-4.jpeg",n={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"X-Requested-With","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,"},"https://www.alphaville.com.br","/be_alphaville/public/uploads/home/cid_alp_image_desktop/graciosa-foto-04-tamanho-1180x350-1-2-3-4.jpeg",r=s().create({baseURL:"https://www.alphaville.com.br",headers:n}),e.next=8,r.get("/be_alphaville/public/uploads/home/cid_alp_image_desktop/graciosa-foto-04-tamanho-1180x350-1-2-3-4.jpeg");case 8:return o=e.sent,e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),(0,a.Z)(this,"getImageSizeFronUrl",function(){var e=(0,r.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var r=new Image;r.onload=function(){var t={width:r.width,height:r.height};e(t)},r.src=t.url})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var i=this;(0,a.Z)(this,"doCORSRequest",function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://cors-anywhere.herokuapp.com/",n=i.getFileNameByUrl(t.url),(r=new XMLHttpRequest).open(t.method,"https://cors-anywhere.herokuapp.com/"+t.url),r.onload=r.onerror=function(){var e=r.response;return new Promise((function(t,r){var o={type:"image/jpeg"},a=new File([e],n,o),i=new FileReader;return i.readAsArrayBuffer(a),i.onload=function(){console.log("reader.result: ",i.result)},i.onerror=function(){console.log(i.error)},t(new File([e],n,o))}))},/^POST/i.test(t.method)&&r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.send(t.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},9771:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(7568),o=n(1438),a=n(2951),i=n(8029),u=n(5950),c=n(4051),s=n.n(c),l=n(5893),p=n(7294),h=n(8224),f=n(1664),m=n.n(f),d=function(e){(0,i.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).state={size:{}},r}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){var e=this;return(0,r.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e.props.httpSize);case 1:case"end":return t.stop()}}),t)})))()}},{key:"render",value:function(){return(0,l.jsxs)("div",{children:["Size width: ",this.props.httpSize.width," - height: ",this.props.httpSize.height," - format:"," ",this.props.httpSize.format,(0,l.jsx)("div",{children:(0,l.jsx)(m(),{href:"/home",children:(0,l.jsx)("a",{children:"Home"})})})]})}}],[{key:"getInitialProps",value:function(e){return(0,r.Z)(s().mark((function e(){var t,n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new h.Z,n={hostname:"www.alphaville.com.br",path:"/be_alphaville/public/uploads/home/cid_alp_image_desktop/graciosa-foto-04-tamanho-1180x350-1-2-3-4.jpeg"},e.next=4,t.getImageSize(n);case 4:return r=e.sent,e.abrupt("return",{httpSize:r});case 6:case"end":return e.stop()}}),e)})))()}}]),n}(p.Component)}},function(e){e.O(0,[9669,1664,6658,9774,2888,179],(function(){return t=6511,e(e.s=t);var t}));var t=e.O();_N_E=t}]);