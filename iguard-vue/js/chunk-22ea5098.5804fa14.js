(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22ea5098"],{"1fea":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("c5f6"),a("55dd"),a("ac6a"),a("456d");function i(e){for(var t=[],a={},i=0;i<e.length;i++){var n=Object.keys(e[i]);n.sort((function(e,t){return Number(e)-Number(t)}));for(var s="",r=0;r<n.length;r++)s+=JSON.stringify(n[r]),s+=JSON.stringify(e[i][n[r]]);a.hasOwnProperty(s)||(t.push(e[i]),a[s]=!0)}return t=t,t}},"2e08":function(e,t,a){var i=a("9def"),n=a("9744"),s=a("be13");e.exports=function(e,t,a,r){var o=String(s(e)),l=o.length,c=void 0===a?" ":String(a),u=i(t);if(u<=l||""==c)return o;var f=u-l,d=n.call(c,Math.ceil(f/c.length));return d.length>f&&(d=d.slice(0,f)),r?d+o:o+d}},"2f21":function(e,t,a){"use strict";var i=a("79e5");e.exports=function(e,t){return!!e&&i((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},"456d":function(e,t,a){var i=a("4bf8"),n=a("0d58");a("5eda")("keys",(function(){return function(e){return n(i(e))}}))},"55dd":function(e,t,a){"use strict";var i=a("5ca1"),n=a("d8e8"),s=a("4bf8"),r=a("79e5"),o=[].sort,l=[1,2,3];i(i.P+i.F*(r((function(){l.sort(void 0)}))||!r((function(){l.sort(null)}))||!a("2f21")(o)),"Array",{sort:function(e){return void 0===e?o.call(s(this)):o.call(s(this),n(e))}})},"5eda":function(e,t,a){var i=a("5ca1"),n=a("8378"),s=a("79e5");e.exports=function(e,t){var a=(n.Object||{})[e]||Object[e],r={};r[e]=t(a),i(i.S+i.F*s((function(){a(1)})),"Object",r)}},"6a48":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box"},[a("van-nav-bar",{attrs:{title:"商户自检","left-arrow":"",fixed:""},on:{"click-left":function(t){return e.$router.push("/neiBuItemList")}}}),a("div",{staticClass:"con"},[a("div",{staticClass:"flex col"},[a("span",[e._v("起止时间：")]),a("span",[e._v(e._s(e.obj.start_time)+"~"+e._s(e.obj.end_time))])]),a("div",{staticClass:"title"},[e._v("商户自检信息")]),a("div",{staticClass:"flex col"},[a("span",[e._v("商户：")]),a("span",[e._v(e._s(e.obj.shop_name))])]),a("div",{staticClass:"flex col"},[a("span",[e._v("任务：")]),a("span",[e._v(e._s(e.obj.task_name))])]),a("div",{staticClass:"flex col"},[a("span",[e._v("自检时间：")]),a("span",[e._v(e._s(e.time))])]),a("div",{staticClass:"flex col"},[a("span",[e._v("自检人：")]),a("span",[e._v(e._s(e.obj.check_name))])]),a("div",{staticClass:"flex col"},[a("span",[e._v("自检状态：")]),0==e.flag1?a("span",[e._v("待复查")]):e._e(),1==e.flag1?a("span",[e._v("未开始")]):e._e(),2==e.flag1?a("span",[e._v("已逾期")]):e._e()]),a("div",{staticClass:"title"},[e._v("自检明细")]),e._l(e.obj.checkItemBeanList,(function(t,i){return a("div",{key:i,staticClass:"flex col"},[0!=t.check_type&&2!=t.check_type?a("span",[e._v(e._s(t.check_item_description)+"：")]):e._e(),a("span",[0!=t.check_type&&1!=t.check_type&&2!=t.check_type?a("van-radio-group",{attrs:{direction:"horizontal",disabled:0!=e.flag},on:{change:function(a){return e.danXuan(t.checkItemDetailBeanList,e.radio)}},model:{value:t.checkItemDetailBeanList[0].font_value,callback:function(a){e.$set(t.checkItemDetailBeanList[0],"font_value",a)},expression:"item.checkItemDetailBeanList[0].font_value"}},[a("van-radio",{attrs:{name:"1"}},[e._v("正常")]),a("van-radio",{attrs:{name:"2"}},[e._v("异常")])],1):e._e(),1==t.check_type?a("van-checkbox-group",{attrs:{direction:"horizontal"},model:{value:e.result,callback:function(t){e.result=t},expression:"result"}},e._l(t.checkItemDetailBeanList,(function(t,i){return a("van-checkbox",{key:i,attrs:{name:t.id+":"+t.detail_value+t.normal_item,disabled:0!=e.flag}},[e._v(e._s(t.detail_value))])})),1):e._e(),e._l(t.checkItemDetailBeanList,(function(i,n){return 0==t.check_type||2==t.check_type?a("van-field",{key:n,staticStyle:{"margin-left":"-16px",width:"400px"},attrs:{type:2==t.check_type?"":"number",label:t.check_item_description+"：",placeholder:"请输入：例如"+t.input_tip,readonly:!0},on:{blur:function(a){return e.verify(i.min_value,i.max_value,i.font_value,t.check_item_description,i.normal_item,i.id)}},model:{value:i.font_value,callback:function(t){e.$set(i,"font_value",t)},expression:"item1.font_value"}}):e._e()}))],2)])})),e.flag?a("div",{staticClass:"title"},[e._v("其他描述")]):e._e(),a("van-field",{attrs:{rows:"2",autosize:"",label:"描述：",type:"textarea",maxlength:"50",placeholder:"请输入留言","show-word-limit":"",readonly:!0},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),0==e.flag||2==e.flag?a("div",{staticClass:"title"},[e._v("上传图片")]):e._e(),0==e.flag||2==e.flag?a("div",{staticClass:"col"},[a("van-uploader",{attrs:{"max-count":3,"after-read":e.updateImg,disabled:1==e.flag||2==e.flag},on:{delete:e.remove},model:{value:e.fileList,callback:function(t){e.fileList=t},expression:"fileList"}})],1):e._e(),a("div",{staticClass:"title"},[e._v("现管检查信息")]),a("div",{staticClass:"col flex"},[a("span",[e._v("检查人：")]),a("span",[e._v(e._s(e.ziJianRen))])]),a("div",{staticClass:"col flex"},[a("span",[e._v("检查时间：")]),a("span",[e._v(e._s(e.time))])]),a("div",{staticClass:"col flex"},[a("span",[e._v("检查结果：")]),a("span",[a("van-radio-group",{attrs:{direction:"horizontal"},on:{change:e.danXuan1},model:{value:e.radio1,callback:function(t){e.radio1=t},expression:"radio1"}},[a("van-radio",{attrs:{name:"1"}},[e._v("正常")]),a("van-radio",{attrs:{name:"2"}},[e._v("异常")])],1)],1)]),e.flag?a("div",{staticClass:"title"},[e._v("事件描述")]):e._e(),a("van-field",{attrs:{rows:"2",autosize:"",label:"描述：",type:"textarea",maxlength:"50",placeholder:"请输入留言","show-word-limit":""},model:{value:e.message1,callback:function(t){e.message1=t},expression:"message1"}}),a("div",{staticClass:"btn"},[a("van-button",{staticStyle:{padding:"0 35px"},attrs:{type:"primary",color:"#A68E44",size:"large"},on:{click:e.up}},[e._v("确认提交")]),a("van-dialog",{attrs:{title:"确认提交检查结果吗？","show-cancel-button":"","confirm-button-color":"#A68E44"},on:{confirm:e.endAdd},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1)],2)],1)},n=[],s=(a("7f7f"),a("34ef"),a("4917"),a("28a5"),a("ac6a"),a("f576"),a("1fea"),{data:function(){return{flag:this.$route.query.flag,flag1:this.$route.query.flag1,radio:"",radio1:"",message:"",message1:"",fileList:[],base64:"",base64Arr:[],tuName:"",tuNameArr:[],show:!1,time:"",obj:{},ziJianRen:localStorage.getItem("userName"),value:"",yiChangTitle:[],result:[],isArr:[],isArr1:[],isArr2:[],wenBen:"",checkQuery:{uid:localStorage.getItem("uid"),detail_id:this.$route.query.detail_id}}},mounted:function(){var e=this,t=new Date;this.time=t.getFullYear()+"-"+JSON.stringify(t.getMonth()+1).padStart(2,"0")+"-"+JSON.stringify(t.getDate()).padStart(2,"0")+" "+JSON.stringify(t.getHours()).padStart(2,"0")+":"+JSON.stringify(t.getMinutes()).padStart(2,"0")+":"+JSON.stringify(t.getSeconds()).padStart(2,"0"),this.keepAxios.get(this.baseUrl.lockage+"/rest/checkTask/getDetailsByParamById",{params:{detail_id:this.$route.query.detail_id}}).then((function(t){console.log(t),e.obj=t.data.data,e.message=e.obj.description,e.obj.checkItemBeanList.forEach((function(t){t.checkItemDetailBeanList.forEach((function(t){console.log(t.detail_value=="红0".slice(0,1)),null!=t.font_value&&t.detail_value==t.font_value.slice(0,1)&&e.result.push(t.id+":"+t.font_value)}))}))}))},methods:{verify:function(e,t,a,i,n,s){if(null!=n){var r,o=[];o.push(s+":"+a),(r=this.isArr2).push.apply(r,o);var l=[];""!=e?a<e&&(console.log("我试试1"),l.push({title:i+"异常"})):""!=t?a>t&&(console.log("我试试2"),l.push({title:i+"异常"})):""!=t&&""!=e&&(a<t||a>e)&&(console.log("我试试3"),l.push({title:i+"异常"}))}else{var c;console.log("我是文本类");var u=[];u.push(s+":"+a),this.wenBen=a,(c=this.isArr2).push.apply(c,u)}console.log(this.isArr2)},danXuan:function(e,t){console.log(e),console.log(t),1==t?this.isArr.push(e[0].id+":正常"):this.isArr.push(e[0].id+":异常")},danXuan1:function(e){this.checkQuery.repeat_result=1==e?"0":"1"},dataURLtoFile:function(e,t){var a=e.split(","),i=a[0].match(/:(.*?);/)[1],n=atob(a[1]),s=n.length,r=new Uint8Array(s);while(s--)r[s]=n.charCodeAt(s);return new File([r],t,{type:i})},updateImg:function(e){var t=this,a=document.createElement("canvas"),i=a.getContext("2d"),n=new Image;n.src=e.content,n.onload=function(){a.width=400,a.height=300,i.drawImage(n,0,0,400,300),e.content=a.toDataURL(e.file.type,.92);var s=t.dataURLtoFile(e.content,e.file.name),r=new FormData;r.append("file",s),r.append("code",t.applyNo),r.append("type","chat"),t.base64Arr.push(e.content),t.tuNameArr.push(e.file.name),t.base64=t.base64Arr.join("#"),t.tuName=t.tuNameArr.join(",")},console.log(this.base64),console.log(this.tuName)},remove:function(e,t){var a=this;console.log(e),console.log(t),this.base64Arr.forEach((function(i){if(i==e.content)return a.base64Arr.splice(t.index,1)})),this.tuNameArr.forEach((function(i){if(i==e.file.name)return a.tuNameArr.splice(t.index,1)})),this.base64=this.base64Arr.join("#"),this.tuName=this.tuNameArr.join(","),console.log(this.base64Arr),console.log(this.tuNameArr)},up:function(){this.show=!0},endAdd:function(){console.log("我是确定"),this.checkQuery.check_type=this.flag1,1==this.flag1?(this.checkQuery.repeat_desp=this.message1,this.checkQuery.id=this.$route.query.detail_id):this.checkQuery.description=this.message1,console.log(this.checkQuery),this.addDetails(this.checkQuery)},addDetails:function(e){var t=this;this.keepAxios.post(this.baseUrl.lockage+"/rest/checkTask/addDetails",e).then((function(e){console.log(e),200==e.data.code?(t.$toast(e.data.msg),t.$router.push("/neiBuItemList")):t.$toast(e.data.msg)}))}}}),r=s,o=(a("81bf"),a("2877")),l=Object(o["a"])(r,i,n,!1,null,"18a6f060",null);t["default"]=l.exports},"81bf":function(e,t,a){"use strict";var i=a("fce2"),n=a.n(i);n.a},9744:function(e,t,a){"use strict";var i=a("4588"),n=a("be13");e.exports=function(e){var t=String(n(this)),a="",s=i(e);if(s<0||s==1/0)throw RangeError("Count can't be negative");for(;s>0;(s>>>=1)&&(t+=t))1&s&&(a+=t);return a}},aa77:function(e,t,a){var i=a("5ca1"),n=a("be13"),s=a("79e5"),r=a("fdef"),o="["+r+"]",l="​",c=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),f=function(e,t,a){var n={},o=s((function(){return!!r[e]()||l[e]()!=l})),c=n[e]=o?t(d):r[e];a&&(n[a]=c),i(i.P+i.F*o,"String",n)},d=f.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=f},ac6a:function(e,t,a){for(var i=a("cadf"),n=a("0d58"),s=a("2aba"),r=a("7726"),o=a("32e9"),l=a("84f2"),c=a("2b4c"),u=c("iterator"),f=c("toStringTag"),d=l.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=n(h),v=0;v<p.length;v++){var g,m=p[v],_=h[m],b=r[m],y=b&&b.prototype;if(y&&(y[u]||o(y,u,d),y[f]||o(y,f,m),l[m]=d,_))for(g in i)y[g]||s(y,g,i[g],!0)}},c5f6:function(e,t,a){"use strict";var i=a("7726"),n=a("69a8"),s=a("2d95"),r=a("5dbc"),o=a("6a99"),l=a("79e5"),c=a("9093").f,u=a("11e9").f,f=a("86cc").f,d=a("aa77").trim,h="Number",p=i[h],v=p,g=p.prototype,m=s(a("2aeb")(g))==h,_="trim"in String.prototype,b=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){t=_?t.trim():d(t,3);var a,i,n,s=t.charCodeAt(0);if(43===s||45===s){if(a=t.charCodeAt(2),88===a||120===a)return NaN}else if(48===s){switch(t.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+t}for(var r,l=t.slice(2),c=0,u=l.length;c<u;c++)if(r=l.charCodeAt(c),r<48||r>n)return NaN;return parseInt(l,i)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof p&&(m?l((function(){g.valueOf.call(a)})):s(a)!=h)?r(new v(b(t)),a,p):b(t)};for(var y,k=a("9e1e")?c(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;k.length>S;S++)n(v,y=k[S])&&!n(p,y)&&f(p,y,u(v,y));p.prototype=g,g.constructor=p,a("2aba")(i,h,p)}},f576:function(e,t,a){"use strict";var i=a("5ca1"),n=a("2e08"),s=a("a25f"),r=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(s);i(i.P+i.F*r,"String",{padStart:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},fce2:function(e,t,a){},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);