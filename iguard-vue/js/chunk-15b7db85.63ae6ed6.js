(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15b7db85"],{"1fea":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("c5f6"),a("55dd"),a("ac6a"),a("456d");function i(e){for(var t=[],a={},i=0;i<e.length;i++){var s=Object.keys(e[i]);s.sort((function(e,t){return Number(e)-Number(t)}));for(var n="",l=0;l<s.length;l++)n+=JSON.stringify(s[l]),n+=JSON.stringify(e[i][s[l]]);a.hasOwnProperty(n)||(t.push(e[i]),a[n]=!0)}return t=t,t}},"2e08":function(e,t,a){var i=a("9def"),s=a("9744"),n=a("be13");e.exports=function(e,t,a,l){var r=String(n(e)),o=r.length,c=void 0===a?" ":String(a),u=i(t);if(u<=o||""==c)return r;var f=u-o,d=s.call(c,Math.ceil(f/c.length));return d.length>f&&(d=d.slice(0,f)),l?d+r:r+d}},"2f21":function(e,t,a){"use strict";var i=a("79e5");e.exports=function(e,t){return!!e&&i((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},"456d":function(e,t,a){var i=a("4bf8"),s=a("0d58");a("5eda")("keys",(function(){return function(e){return s(i(e))}}))},"55dd":function(e,t,a){"use strict";var i=a("5ca1"),s=a("d8e8"),n=a("4bf8"),l=a("79e5"),r=[].sort,o=[1,2,3];i(i.P+i.F*(l((function(){o.sort(void 0)}))||!l((function(){o.sort(null)}))||!a("2f21")(r)),"Array",{sort:function(e){return void 0===e?r.call(n(this)):r.call(n(this),s(e))}})},"5eda":function(e,t,a){var i=a("5ca1"),s=a("8378"),n=a("79e5");e.exports=function(e,t){var a=(s.Object||{})[e]||Object[e],l={};l[e]=t(a),i(i.S+i.F*n((function(){a(1)})),"Object",l)}},9335:function(e,t,a){},9744:function(e,t,a){"use strict";var i=a("4588"),s=a("be13");e.exports=function(e){var t=String(s(this)),a="",n=i(e);if(n<0||n==1/0)throw RangeError("Count can't be negative");for(;n>0;(n>>>=1)&&(t+=t))1&n&&(a+=t);return a}},"9ab6":function(e,t,a){"use strict";var i=a("9335"),s=a.n(i);s.a},a3ba:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box"},[a("van-nav-bar",{attrs:{title:"商户自检","left-arrow":"",fixed:""},on:{"click-left":function(t){return e.$router.go(-1)}}}),a("div",{staticClass:"con"},[a("div",{staticClass:"flex col"},[a("span",[e._v("起止时间：")]),a("span",[e._v(e._s(e.obj.start_time)+"~"+e._s(e.obj.end_time))])]),a("div",{staticClass:"title"},[e._v("商户自检信息")]),a("div",{staticClass:"flex col"},[a("span",[e._v("商户：")]),a("span",[e._v(e._s(e.obj.shop_name))])]),a("div",{staticClass:"flex col"},[a("span",[e._v("任务：")]),a("span",[e._v(e._s(e.obj.task_name))])]),a("div",{staticClass:"flex col"},[a("span",[e._v("自检时间：")]),a("span",[e._v(e._s(e.time))])]),a("div",{staticClass:"flex col"},[a("span",[e._v("自检人：")]),a("span",[e._v(e._s(e.obj.check_name))])]),a("div",{staticClass:"flex col"},[a("span",[e._v("自检状态：")]),0==e.obj.check_result||null==e.obj.check_result?a("span",[e._v("N/A")]):e._e(),1==e.obj.check_result?a("span",[e._v("合格")]):e._e(),2==e.obj.check_result?a("span",[e._v("不合格")]):e._e()]),a("div",{staticClass:"title"},[e._v("自检明细")]),e._l(e.obj.checkItemBeanList,(function(t,i){return a("div",{key:i,staticClass:"flex col"},[0!=t.check_type&&2!=t.check_type?a("span",[e._v(e._s(t.check_item_description)+"：")]):e._e(),a("span",[0!=t.check_type&&1!=t.check_type&&2!=t.check_type?a("van-radio-group",{attrs:{direction:"horizontal",disabled:0!=e.flag},on:{change:function(a){return e.danXuan(t.checkItemDetailBeanList,e.radio)}},model:{value:t.checkItemDetailBeanList[0].font_value,callback:function(a){e.$set(t.checkItemDetailBeanList[0],"font_value",a)},expression:"item.checkItemDetailBeanList[0].font_value"}},[a("van-radio",{attrs:{name:"1"}},[e._v("正常")]),a("van-radio",{attrs:{name:"2"}},[e._v("异常")])],1):e._e(),1==t.check_type?a("van-checkbox-group",{attrs:{direction:"horizontal"},model:{value:e.result,callback:function(t){e.result=t},expression:"result"}},e._l(t.checkItemDetailBeanList,(function(t,i){return a("van-checkbox",{key:i,attrs:{name:t.id+":"+t.detail_value+t.normal_item,disabled:0!=e.flag}},[e._v(e._s(t.detail_value))])})),1):e._e(),e._l(t.checkItemDetailBeanList,(function(i,s){return 0==t.check_type||2==t.check_type?a("van-field",{key:s,staticStyle:{"margin-left":"-16px",width:"400px"},attrs:{type:2==t.check_type?"":"number",label:t.check_item_description+"：",placeholder:"请输入：例如"+t.input_tip,readonly:!0},on:{blur:function(a){return e.verify(i.min_value,i.max_value,i.font_value,t.check_item_description,i.normal_item,i.id)}},model:{value:i.font_value,callback:function(t){e.$set(i,"font_value",t)},expression:"item1.font_value"}}):e._e()}))],2)])})),e.flag?a("div",{staticClass:"title"},[e._v("其他描述")]):e._e(),a("van-field",{attrs:{rows:"2",autosize:"",label:"描述：",type:"textarea",maxlength:"50",placeholder:"请输入留言","show-word-limit":"",readonly:!0},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),a("div",{staticClass:"title"},[e._v("自检图片")]),a("div",{staticClass:"col"},[a("van-uploader",{attrs:{"max-count":3,disabled:!0,deletable:!1},model:{value:e.fileList1,callback:function(t){e.fileList1=t},expression:"fileList1"}})],1),a("div",{staticClass:"title"},[e._v("复查信息")]),a("div",{staticClass:"col flex"},[a("span",[e._v("复查人:")]),a("span",[e._v(e._s(e.obj.repeat_check_name))])]),a("div",{staticClass:"col flex"},[a("span",[e._v("复查时间:")]),a("span",[e._v(e._s(e.obj.repeat_time))])]),0==e.obj.repeat_result?a("div",{staticClass:"col flex"},[a("span",[e._v("复查状态:")]),a("span",[e._v("正常")])]):e._e(),1==e.obj.repeat_result?a("div",{staticClass:"col flex"},[a("span",[e._v("复查状态:")]),a("span",[e._v("异常")])]):e._e(),e.obj.repeat_desp?a("div",[a("div",{staticClass:"title"},[e._v("现管检查信息")]),a("div",{staticClass:"col flex"},[a("span",[e._v("检查人：")]),a("span",[e._v(e._s(e.obj.repeat_check_name))])]),a("div",{staticClass:"col flex"},[a("span",[e._v("检查时间：")]),a("span",[e._v(e._s(e.obj.repeat_time))])]),a("div",{staticClass:"col flex"},[a("span",[e._v("检查结果：")]),a("span",[a("van-radio-group",{attrs:{direction:"horizontal",disabled:!0},on:{change:e.danXuan1},model:{value:e.obj.repeat_result,callback:function(t){e.$set(e.obj,"repeat_result",t)},expression:"obj.repeat_result"}},[a("van-radio",{attrs:{name:"0"}},[e._v("正常")]),a("van-radio",{attrs:{name:"1"}},[e._v("异常")])],1)],1)]),e.flag?a("div",{staticClass:"title"},[e._v("事件描述")]):e._e(),a("van-field",{attrs:{rows:"2",autosize:"",label:"描述：",type:"textarea",placeholder:"请输入留言","show-word-limit":"",readonly:!0},model:{value:e.obj.repeat_desp,callback:function(t){e.$set(e.obj,"repeat_desp",t)},expression:"obj.repeat_desp"}})],1):e._e(),e._l(e.obj.followBeans,(function(t,i){return e.obj.followBeans?a("div",{key:i},[a("div",{staticClass:"title"},[e._v("跟进记录"+e._s(i+1))]),a("div",{staticClass:"col flex"},[a("span",[e._v("跟进时间：")]),a("span",[e._v(e._s(t.create_time))])]),a("div",{staticClass:"col flex"},[a("span",[e._v("跟进人人：")]),a("span",[e._v(e._s(t.follow_name))])]),a("van-field",{attrs:{rows:"2",autosize:"",label:"事件描述：",type:"textarea",maxlength:"50",placeholder:"请输入留言","show-word-limit":"",readonly:!0},model:{value:t.follow_desp,callback:function(a){e.$set(t,"follow_desp",a)},expression:"item.follow_desp"}}),a("div",{staticClass:"title"},[e._v("跟进图片"+e._s(i+1))]),a("div",{staticClass:"col"},[a("van-uploader",{attrs:{"max-count":3,disabled:!0,deletable:!1},model:{value:t.img,callback:function(a){e.$set(t,"img",a)},expression:"item.img"}})],1)],1):e._e()}))],2)],1)},s=[],n=(a("28a5"),a("ac6a"),a("f576"),a("1fea"),{data:function(){return{flag:this.$route.query.flag,flag1:this.$route.query.flag1,radio:"",radio1:"",message:"",message1:"",fileList:[],fileList1:[],fileList2:[],base64:"",base64Arr:[],tuName:"",tuNameArr:[],show:!1,time:"",obj:{},ziJianRen:localStorage.getItem("userName"),value:"",yiChangTitle:[],result:[],isArr:[],isArr1:[],isArr2:[],wenBen:"",checkQuery:{uid:localStorage.getItem("uid"),detail_id:this.$route.query.detail_id,id:this.$route.query.detail_id}}},mounted:function(){var e=this,t=new Date;this.time=t.getFullYear()+"-"+JSON.stringify(t.getMonth()+1).padStart(2,"0")+"-"+JSON.stringify(t.getDate()).padStart(2,"0")+" "+JSON.stringify(t.getHours()).padStart(2,"0")+":"+JSON.stringify(t.getMinutes()).padStart(2,"0")+":"+JSON.stringify(t.getSeconds()).padStart(2,"0"),this.keepAxios.get(this.baseUrl.lockage+"/rest/checkTask/getDetailsByParamById",{params:{detail_id:this.$route.query.detail_id}}).then((function(t){console.log(t),e.obj=t.data.data,e.message=e.obj.description;var a=unescape(localStorage.getItem("baseUrl"));e.fileList1.push({url:a+e.obj.check_img}),e.obj.checkItemBeanList.forEach((function(t){t.checkItemDetailBeanList.forEach((function(t){console.log(t.detail_value=="红0".slice(0,1)),null!=t.font_value&&t.detail_value==t.font_value.slice(0,1)&&e.result.push(t.id+":"+t.font_value)}))}));var i=[];e.obj.followBeans.forEach((function(t){i=[{url:(a+t.follow_img).split(",")}],e.$set(t,"img",i)})),e.fileList2=i}))},methods:{verify:function(e,t,a,i,s,n){if(null!=s){var l,r=[];r.push(n+":"+a),(l=this.isArr2).push.apply(l,r);var o=[];""!=e?a<e&&(console.log("我试试1"),o.push({title:i+"异常"})):""!=t?a>t&&(console.log("我试试2"),o.push({title:i+"异常"})):""!=t&&""!=e&&(a<t||a>e)&&(console.log("我试试3"),o.push({title:i+"异常"}))}else{var c;console.log("我是文本类");var u=[];u.push(n+":"+a),this.wenBen=a,(c=this.isArr2).push.apply(c,u)}console.log(this.isArr2)},danXuan:function(e,t){console.log(e),console.log(t),1==t?this.isArr.push(e[0].id+":正常"):this.isArr.push(e[0].id+":异常")},danXuan1:function(e){this.checkQuery.repeat_result=1==e?"0":"1"},up:function(){this.show=!0},genJin:function(){var e=this;this.keepAxios.post(this.baseUrl.lockage+"/rest/checkTask/taskFollow",{detail_id:this.$route.query.detail_id,follow_desp:this.message1,follow_uid:localStorage.getItem("uid"),uid:localStorage.getItem("uid"),company_id:localStorage.getItem("companyId"),base64:this.base64Arr.join("#"),file_name:this.tuNameArr.join(",")}).then((function(t){console.log(t),t.data.code,e.$toast(t.data.msg)}))}}}),l=n,r=(a("9ab6"),a("2877")),o=Object(r["a"])(l,i,s,!1,null,"341bab32",null);t["default"]=o.exports},aa77:function(e,t,a){var i=a("5ca1"),s=a("be13"),n=a("79e5"),l=a("fdef"),r="["+l+"]",o="​",c=RegExp("^"+r+r+"*"),u=RegExp(r+r+"*$"),f=function(e,t,a){var s={},r=n((function(){return!!l[e]()||o[e]()!=o})),c=s[e]=r?t(d):l[e];a&&(s[a]=c),i(i.P+i.F*r,"String",s)},d=f.trim=function(e,t){return e=String(s(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=f},ac6a:function(e,t,a){for(var i=a("cadf"),s=a("0d58"),n=a("2aba"),l=a("7726"),r=a("32e9"),o=a("84f2"),c=a("2b4c"),u=c("iterator"),f=c("toStringTag"),d=o.Array,_={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=s(_),p=0;p<v.length;p++){var h,g=v[p],m=_[g],b=l[g],k=b&&b.prototype;if(k&&(k[u]||r(k,u,d),k[f]||r(k,f,g),o[g]=d,m))for(h in i)k[h]||n(k,h,i[h],!0)}},c5f6:function(e,t,a){"use strict";var i=a("7726"),s=a("69a8"),n=a("2d95"),l=a("5dbc"),r=a("6a99"),o=a("79e5"),c=a("9093").f,u=a("11e9").f,f=a("86cc").f,d=a("aa77").trim,_="Number",v=i[_],p=v,h=v.prototype,g=n(a("2aeb")(h))==_,m="trim"in String.prototype,b=function(e){var t=r(e,!1);if("string"==typeof t&&t.length>2){t=m?t.trim():d(t,3);var a,i,s,n=t.charCodeAt(0);if(43===n||45===n){if(a=t.charCodeAt(2),88===a||120===a)return NaN}else if(48===n){switch(t.charCodeAt(1)){case 66:case 98:i=2,s=49;break;case 79:case 111:i=8,s=55;break;default:return+t}for(var l,o=t.slice(2),c=0,u=o.length;c<u;c++)if(l=o.charCodeAt(c),l<48||l>s)return NaN;return parseInt(o,i)}}return+t};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof v&&(g?o((function(){h.valueOf.call(a)})):n(a)!=_)?l(new p(b(t)),a,v):b(t)};for(var k,y=a("9e1e")?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;y.length>S;S++)s(p,k=y[S])&&!s(v,k)&&f(v,k,u(p,k));v.prototype=h,h.constructor=v,a("2aba")(i,_,v)}},f576:function(e,t,a){"use strict";var i=a("5ca1"),s=a("2e08"),n=a("a25f"),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n);i(i.P+i.F*l,"String",{padStart:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);