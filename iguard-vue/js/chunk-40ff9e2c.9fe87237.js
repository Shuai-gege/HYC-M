(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40ff9e2c"],{"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"1bc3":function(t,e,n){var o=n("f772");t.exports=function(t,e){if(!o(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!o(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var o=n("f772"),i=n("e53d").document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"2f21":function(t,e,n){"use strict";var o=n("79e5");t.exports=function(t,e){return!!t&&o((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"35e8":function(t,e,n){var o=n("d9f6"),i=n("aebd");t.exports=n("8e60")?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},"3b10":function(t,e,n){},"3f5f":function(t,e,n){"use strict";var o=n("3b10"),i=n.n(o);i.a},"454f":function(t,e,n){n("46a7");var o=n("584a").Object;t.exports=function(t,e,n){return o.defineProperty(t,e,n)}},"46a7":function(t,e,n){var o=n("63b6");o(o.S+o.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"55dd":function(t,e,n){"use strict";var o=n("5ca1"),i=n("d8e8"),a=n("4bf8"),r=n("79e5"),s=[].sort,c=[1,2,3];o(o.P+o.F*(r((function(){c.sort(void 0)}))||!r((function(){c.sort(null)}))||!n("2f21")(s)),"Array",{sort:function(t){return void 0===t?s.call(a(this)):s.call(a(this),i(t))}})},"584a":function(t,e){var n=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)},"63b6":function(t,e,n){var o=n("e53d"),i=n("584a"),a=n("d864"),r=n("35e8"),s=n("07e3"),c="prototype",l=function(t,e,n){var u,f,d,p=t&l.F,h=t&l.G,m=t&l.S,g=t&l.P,v=t&l.B,b=t&l.W,y=h?i:i[e]||(i[e]={}),w=y[c],x=h?o:m?o[e]:(o[e]||{})[c];for(u in h&&(n=e),n)f=!p&&x&&void 0!==x[u],f&&s(y,u)||(d=f?x[u]:n[u],y[u]=h&&"function"!=typeof x[u]?n[u]:v&&f?a(d,o):b&&x[u]==d?function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e[c]=t[c],e}(d):g&&"function"==typeof d?a(Function.call,d):d,g&&((y.virtual||(y.virtual={}))[u]=d,t&l.R&&w&&!w[u]&&r(w,u,d)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")((function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a}))},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"85f2":function(t,e,n){t.exports=n("454f")},"8e60":function(t,e,n){t.exports=!n("294c")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},ac6a:function(t,e,n){for(var o=n("cadf"),i=n("0d58"),a=n("2aba"),r=n("7726"),s=n("32e9"),c=n("84f2"),l=n("2b4c"),u=l("iterator"),f=l("toStringTag"),d=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=i(p),m=0;m<h.length;m++){var g,v=h[m],b=p[v],y=r[v],w=y&&y.prototype;if(w&&(w[u]||s(w,u,d),w[f]||s(w,f,v),c[v]=d,b))for(g in o)w[g]||a(w,g,o[g],!0)}},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},bd86:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("85f2"),i=n.n(o);function a(t,e,n){return e in t?i()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},c7d2:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"manage"},[n("van-nav-bar",{attrs:{title:"我要报事","left-text":"首页","left-arrow":"",fixed:!0},on:{"click-left":t.onClickLeft}}),n("div",{staticClass:"con"},[n("van-cell-group",[n("van-cell",{attrs:{title:"报事人:",value:t.iName}}),null==t.detail_id||void 0==t.detail_id?n("van-cell",{attrs:{title:"报事企业:",value:t.company},on:{click:function(e){t.show=!0}}}):t._e(),n("van-action-sheet",{attrs:{title:"选择要报事的企业:"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("div",{staticClass:"content"},[n("van-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},t._l(t.comPany,(function(e,o){return n("van-radio",{key:o,attrs:{name:e.companyId,"icon-size":"16"},on:{click:function(n){return t.qiYe(e.name,e.companyId)}}},[t._v(t._s(e.name))])})),1)],1)]),n("van-cell",{attrs:{title:"报事位置:",value:t.locationName},on:{click:t.weiZhi}}),n("van-cell",{attrs:{title:"详细位置描述:",value:t.message1},on:{click:t.site}}),n("van-action-sheet",{attrs:{title:"报事详细位置:"},model:{value:t.show1,callback:function(e){t.show1=e},expression:"show1"}},[n("van-field",{attrs:{rows:"2",autosize:"",label:"留言",type:"textarea",maxlength:"60",placeholder:"请输入留言","show-word-limit":""},model:{value:t.message1,callback:function(e){t.message1=e},expression:"message1"}}),n("div",{staticClass:"btn flex"},[n("van-button",{attrs:{color:"#A68E44"},on:{click:t.inDetail}},[t._v("确定")]),n("van-button",{attrs:{color:"#999"},on:{click:function(e){t.show1=!1}}},[t._v("取消")])],1)],1)],1),n("div",{staticClass:"baoShiType flex_f"},[n("p",[t._v("报事类型:")]),t._l(t.baoShiType,(function(e,o){return n("span",{key:o,class:{discolor:t.changeLeftBackground==o},on:{click:function(n){return t.leftChange(e.id,o)}}},[t._v(t._s(e.eventType))])}))],2),n("div",{staticStyle:{margin:"0.5px 15px"}}),n("div",{staticClass:"baoShiType flex_f"},[n("p",[t._v("处理方式:")]),t._l(t.dispose,(function(e,o){return n("span",{key:o,class:{discolor1:t.changeLeftBackground1==o},on:{click:function(n){return t.leftChange1(e.name,o)}}},[t._v(t._s(e.name))])}))],2),n("p",[t._v("事件描述")]),n("van-field",{attrs:{rows:"2",autosize:"",type:"textarea",maxlength:"100",placeholder:"请输描述","show-word-limit":""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),n("p",[t._v("添加照片")]),n("van-uploader",{attrs:{"max-count":6,"after-read":t.updateImg},on:{delete:t.remove},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}})],1),n("div",{staticClass:"btn flex"},[n("van-button",{attrs:{color:"#A68E44"},on:{click:t.end}},[t._v("确定")]),n("van-button",{attrs:{color:"#999",to:"/"}},[t._v("取消")])],1)],1)},i=[],a=(n("55dd"),n("ac6a"),n("7f7f"),n("34ef"),n("4917"),n("28a5"),n("bd86")),r=(n("bc3a"),{data:function(){var t;return t={iName:localStorage.getItem("userName"),show:!1,show1:!1,show2:!1,radio:""},Object(a["a"])(t,"radio",""),Object(a["a"])(t,"userNames",[]),Object(a["a"])(t,"fenPeiUid",""),Object(a["a"])(t,"reportEventTypeId",""),Object(a["a"])(t,"company",localStorage.getItem("deptName")),Object(a["a"])(t,"companyId",localStorage.getItem("companyId")),Object(a["a"])(t,"name","阿萨德"),Object(a["a"])(t,"baoShiType",[]),Object(a["a"])(t,"dispose",[{name:"指派部门"},{name:"自行处理"}]),Object(a["a"])(t,"dispose1","1"),Object(a["a"])(t,"changeLeftBackground",-1),Object(a["a"])(t,"changeLeftBackground1",0),Object(a["a"])(t,"message",""),Object(a["a"])(t,"message1",""),Object(a["a"])(t,"fileList",[]),Object(a["a"])(t,"locationName","选择"),Object(a["a"])(t,"fenPeiName","选择"),Object(a["a"])(t,"base64",""),Object(a["a"])(t,"base64Arr",[]),Object(a["a"])(t,"tuName",""),Object(a["a"])(t,"tuNameArr",[]),Object(a["a"])(t,"comPany",[]),Object(a["a"])(t,"detail_id",this.$route.query.detail_id),t},components:{},mounted:function(){var t=this;this.allUsers(),null!=this.detail_id&&void 0!=this.detail_id||this.department(),setTimeout((function(){t.tbEventTypeConfig()}),500),null==sessionStorage.getItem("locationName")?this.locationName="选择":this.locationName=sessionStorage.getItem("locationName")},methods:{onClickLeft:function(){this.$router.push("/")},leftChange:function(t,e){""==this.locationName||"选择"==this.locationName?this.$toast("请先选择报事位置"):(this.changeLeftBackground=e,this.reportEventTypeId=t,console.log(t))},leftChange1:function(t,e){""==this.locationName||"选择"==this.locationName?this.$toast("请先选择报事位置"):(this.changeLeftBackground1=e,"指派部门"==t?this.dispose1="1":"自行处理"==t&&(this.dispose1="2"))},dataURLtoFile:function(t,e){var n=t.split(","),o=n[0].match(/:(.*?);/)[1],i=atob(n[1]),a=i.length,r=new Uint8Array(a);while(a--)r[a]=i.charCodeAt(a);return new File([r],e,{type:o})},updateImg:function(t){var e=this,n=document.createElement("canvas"),o=n.getContext("2d"),i=new Image;i.src=t.content,i.onload=function(){n.width=400,n.height=300,o.drawImage(i,0,0,400,300),t.content=n.toDataURL(t.file.type,.92);var a=e.dataURLtoFile(t.content,t.file.name),r=new FormData;r.append("file",a),r.append("code",e.applyNo),r.append("type","chat"),e.base64Arr.push(t.content),e.tuNameArr.push(t.file.name),e.base64=e.base64Arr.join("#"),e.tuName=e.tuNameArr.join(",")},console.log(this.base64),console.log(this.tuName)},remove:function(t,e){var n=this;console.log(t),console.log(e),this.base64Arr.forEach((function(o){if(o==t.content)return n.base64Arr.splice(e.index,1)})),this.tuNameArr.forEach((function(o){if(o==t.file.name)return n.tuNameArr.splice(e.index,1)})),this.base64=this.base64Arr.join("#"),this.tuName=this.tuNameArr.join(","),console.log(this.base64Arr),console.log(this.tuNameArr)},tbEventTypeConfig:function(){var t=this;this.axios.get("/rest/tbEventTypeConfig/getEventTypes",{params:{uid:"",company_id:localStorage.getItem("companyId")}}).then((function(e){e.sort((function(t,e){return t.eventType>e.eventType?1:-1})),t.baoShiType=e,console.log(e),t.reportEventTypeId=e[0].id}))},allUsers:function(){},itemName:function(t,e){console.log(t,e),this.fenPeiName=t,this.fenPeiUid=e,this.show2=!1},isRadio:function(t){1==t?(this.company="xxx公司",this.show=!1):(this.company="xxx分公司",this.show=!1)},department:function(){var t=this;this.axios.get("/rest/department/getCompanyByUid",{params:{uid:localStorage.getItem("uid")}}).then((function(e){console.log(e),t.companyId=e.id,t.company=e.name,t.comPany.push({companyId:e.id,name:e.name}),t.department1()}))},department1:function(){var t=this;this.axios.get("/rest/department/getCompanyDept",{params:{uid:localStorage.getItem("uid")}}).then((function(e){e.forEach((function(e){2==e.deptCompany&&t.comPany.push({companyId:e.id,name:e.name})})),console.log(t.comPany)}))},qiYe:function(t,e){console.log(t,e),this.company=t,this.companyId=e,localStorage.setItem("companyId",e),this.show=!1},site:function(){this.show1=!0,this.message1=""},inDetail:function(){console.log(this.message1),this.show1=!1},weiZhi:function(){sessionStorage.clear(),this.$router.push({path:"/matterLocation",query:{flag1:"1",detail_id:this.$route.query.detail_id}})},end:function(){var t=this;console.log(this.reportEventTypeId),""==this.company?this.$toast("请选择报事企业"):"选择"==this.locationName?this.$toast("请选择报事位置"):""==this.reportEventTypeId||-1==this.changeLeftBackground?this.$toast("请选择报事类型"):""==this.fileList?this.$toast("请上传图片"):this.axios.post("/rest/tbEventReport/add",{uid:localStorage.getItem("uid"),reporterId:localStorage.getItem("uid"),buildingId0:sessionStorage.getItem("buildingId0"),buildingId1:sessionStorage.getItem("buildingId1"),buildingId2:sessionStorage.getItem("buildingId2"),disposalType:this.dispose1,buildingDescription:this.message1,eventRemark:this.message,base64:this.base64,file_name:this.tuName,distributeUid:this.fenPeiUid,reportEventTypeId:this.reportEventTypeId,companyId:this.companyId}).then((function(e){t.$toast("报事成功"),t.baoShi(t.$route.query.detail_id),sessionStorage.removeItem("buildingId0"),sessionStorage.removeItem("buildingId1"),sessionStorage.removeItem("buildingId2"),sessionStorage.removeItem("locationName"),t.$router.push("/")}))},baoShi:function(t){var e=this;this.keepAxios.get(this.baseUrl.lockage+"/rest/checkTask/reportEventAfter",{params:{detail_id:t}}).then((function(t){console.log(t),t.data.code,e.$toast(t.data.msg)}))}}}),s=r,c=(n("3f5f"),n("2877")),l=Object(c["a"])(s,o,i,!1,null,"4db7b95e",null);e["default"]=l.exports},d864:function(t,e,n){var o=n("79aa");t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,i){return t.call(e,n,o,i)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var o=n("e4ae"),i=n("794b"),a=n("1bc3"),r=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(o(t),e=a(e,!0),o(n),i)try{return r(t,e,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},e4ae:function(t,e,n){var o=n("f772");t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);