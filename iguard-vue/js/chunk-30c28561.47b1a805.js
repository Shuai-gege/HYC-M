(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30c28561"],{"1fea":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("c5f6"),a("55dd"),a("ac6a"),a("456d");function i(t){for(var e=[],a={},i=0;i<t.length;i++){var n=Object.keys(t[i]);n.sort((function(t,e){return Number(t)-Number(e)}));for(var s="",r=0;r<n.length;r++)s+=JSON.stringify(n[r]),s+=JSON.stringify(t[i][n[r]]);a.hasOwnProperty(s)||(e.push(t[i]),a[s]=!0)}return e=e,e}},"2e08":function(t,e,a){var i=a("9def"),n=a("9744"),s=a("be13");t.exports=function(t,e,a,r){var o=String(s(t)),c=o.length,l=void 0===a?" ":String(a),u=i(e);if(u<=c||""==l)return o;var f=u-c,h=n.call(l,Math.ceil(f/l.length));return h.length>f&&(h=h.slice(0,f)),r?h+o:o+h}},"2f21":function(t,e,a){"use strict";var i=a("79e5");t.exports=function(t,e){return!!t&&i((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"456d":function(t,e,a){var i=a("4bf8"),n=a("0d58");a("5eda")("keys",(function(){return function(t){return n(i(t))}}))},"55dd":function(t,e,a){"use strict";var i=a("5ca1"),n=a("d8e8"),s=a("4bf8"),r=a("79e5"),o=[].sort,c=[1,2,3];i(i.P+i.F*(r((function(){c.sort(void 0)}))||!r((function(){c.sort(null)}))||!a("2f21")(o)),"Array",{sort:function(t){return void 0===t?o.call(s(this)):o.call(s(this),n(t))}})},"5eda":function(t,e,a){var i=a("5ca1"),n=a("8378"),s=a("79e5");t.exports=function(t,e){var a=(n.Object||{})[t]||Object[t],r={};r[t]=e(a),i(i.S+i.F*s((function(){a(1)})),"Object",r)}},9744:function(t,e,a){"use strict";var i=a("4588"),n=a("be13");t.exports=function(t){var e=String(n(this)),a="",s=i(t);if(s<0||s==1/0)throw RangeError("Count can't be negative");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(a+=e);return a}},aa77:function(t,e,a){var i=a("5ca1"),n=a("be13"),s=a("79e5"),r=a("fdef"),o="["+r+"]",c="​",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),f=function(t,e,a){var n={},o=s((function(){return!!r[t]()||c[t]()!=c})),l=n[t]=o?e(h):r[t];a&&(n[a]=l),i(i.P+i.F*o,"String",n)},h=f.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=f},aacf:function(t,e,a){},ac6a:function(t,e,a){for(var i=a("cadf"),n=a("0d58"),s=a("2aba"),r=a("7726"),o=a("32e9"),c=a("84f2"),l=a("2b4c"),u=l("iterator"),f=l("toStringTag"),h=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=n(d),g=0;g<p.length;g++){var v,_=p[g],m=d[_],b=r[_],y=b&&b.prototype;if(y&&(y[u]||o(y,u,h),y[f]||o(y,f,_),c[_]=h,m))for(v in i)y[v]||s(y,v,i[v],!0)}},c5f6:function(t,e,a){"use strict";var i=a("7726"),n=a("69a8"),s=a("2d95"),r=a("5dbc"),o=a("6a99"),c=a("79e5"),l=a("9093").f,u=a("11e9").f,f=a("86cc").f,h=a("aa77").trim,d="Number",p=i[d],g=p,v=p.prototype,_=s(a("2aeb")(v))==d,m="trim"in String.prototype,b=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=m?e.trim():h(e,3);var a,i,n,s=e.charCodeAt(0);if(43===s||45===s){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+e}for(var r,c=e.slice(2),l=0,u=c.length;l<u;l++)if(r=c.charCodeAt(l),r<48||r>n)return NaN;return parseInt(c,i)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof p&&(_?c((function(){v.valueOf.call(a)})):s(a)!=d)?r(new g(b(e)),a,p):b(e)};for(var y,k=a("9e1e")?l(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;k.length>S;S++)n(g,y=k[S])&&!n(p,y)&&f(p,y,u(g,y));p.prototype=v,v.constructor=p,a("2aba")(i,d,p)}},cc29:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("van-nav-bar",{attrs:{title:"商户自检","left-arrow":"",fixed:""},on:{"click-left":function(e){return t.$router.push("/shangHuItemList")}}}),a("div",{staticClass:"con"},[a("div",{staticClass:"flex col"},[a("span",[t._v("起止时间：")]),a("span",[t._v(t._s(t.obj.start_time)+"~"+t._s(t.obj.end_time))])]),a("div",{staticClass:"title"},[t._v("商户自检信息")]),a("div",{staticClass:"flex col"},[a("span",[t._v("商户：")]),a("span",[t._v(t._s(t.obj.shop_name))])]),a("div",{staticClass:"flex col"},[a("span",[t._v("任务：")]),a("span",[t._v(t._s(t.obj.task_name))])]),a("div",{staticClass:"flex col"},[a("span",[t._v("自检时间：")]),a("span",[t._v(t._s(t.time))])]),a("div",{staticClass:"flex col"},[a("span",[t._v("自检人：")]),a("span",[t._v(t._s(t.ziJianRen))])]),a("div",{staticClass:"flex col"},[a("span",[t._v("自检状态：")]),0==t.flag?a("span",[t._v("进行中")]):t._e(),1==t.flag?a("span",[t._v("未开始")]):t._e(),2==t.flag?a("span",[t._v("已逾期")]):t._e()]),a("div",{staticClass:"title"},[t._v("自检明细")]),t._l(t.obj.checkItemBeanList,(function(e,i){return a("div",{key:i,staticClass:"flex col"},[0!=e.check_type&&2!=e.check_type?a("span",[t._v(t._s(e.check_item_description)+"：")]):t._e(),a("span",[0!=e.check_type&&1!=e.check_type&&2!=e.check_type?a("van-radio-group",{attrs:{direction:"horizontal",disabled:0!=t.flag},on:{change:function(a){return t.danXuan(e.checkItemDetailBeanList,t.radio)}},model:{value:e.checkItemDetailBeanList[0].font_value,callback:function(a){t.$set(e.checkItemDetailBeanList[0],"font_value",a)},expression:"item.checkItemDetailBeanList[0].font_value"}},[a("van-radio",{attrs:{name:"1"}},[t._v("正常")]),a("van-radio",{attrs:{name:"2"}},[t._v("异常")])],1):t._e(),1==e.check_type?a("van-checkbox-group",{attrs:{direction:"horizontal"},model:{value:t.result,callback:function(e){t.result=e},expression:"result"}},t._l(e.checkItemDetailBeanList,(function(i,n){return a("van-checkbox",{key:n,attrs:{name:i.id+":"+i.detail_value+i.normal_item,disabled:0!=t.flag},on:{click:function(a){return t.duoXuan(i.detail_value,i.id,i.normal_item,t.result,e.check_item_description)}}},[t._v(t._s(i.detail_value))])})),1):t._e(),t._l(e.checkItemDetailBeanList,(function(i,n){return 0==e.check_type||2==e.check_type?a("van-field",{key:n,staticStyle:{"margin-left":"-16px",width:"400px"},attrs:{type:2==e.check_type?"":"number",label:e.check_item_description+"：",placeholder:"请输入：例如"+e.input_tip,readonly:1==t.flag||2==t.flag},on:{blur:function(a){return t.verify(i.min_value,i.max_value,i.font_value,e.check_item_description,i.normal_item,i.id)}},model:{value:i.font_value,callback:function(e){t.$set(i,"font_value",e)},expression:"item1.font_value"}}):t._e()}))],2)])})),0==t.flag||2==t.flag?a("div",{staticClass:"title"},[t._v("其他描述")]):t._e(),0==t.flag||2==t.flag?a("van-field",{attrs:{rows:"2",autosize:"",label:"描述：",type:"textarea",maxlength:"50",placeholder:"请输入留言","show-word-limit":"",readonly:1==t.flag||2==t.flag},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}):t._e(),0==t.flag||2==t.flag?a("div",{staticClass:"title"},[t._v("上传图片")]):t._e(),0==t.flag||2==t.flag?a("div",{staticClass:"col"},[a("van-uploader",{attrs:{"max-count":3,"after-read":t.updateImg,disabled:1==t.flag||2==t.flag,deletable:1!=t.flag&&2!=t.flag},on:{delete:t.remove},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}})],1):t._e(),1==t.flag?a("div",{staticClass:"btn flex"},[a("van-button",{attrs:{type:"primary",size:"large",color:"#A68E44"},on:{click:t.yanQi}},[t._v("延期申请")]),a("van-dialog",{attrs:{title:"异常提示","show-cancel-button":"","confirm-button-color":"#A68E44"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("div",{staticClass:"tit"},[t._v("您的自检结果中存在异常，确认提交检查结果吗？")]),a("div",{staticClass:"title"},[t._v("异常项内容:")]),t._l(t.yiChangTitle,(function(e,i){return a("div",{key:i,staticClass:"tit"},[t._v(t._s(i+1)+"."+t._s(e.title))])})),a("div",{staticClass:"tit"},[t._v("若您继续提交，将执行报事流程")]),a("div",{staticClass:"tit red"},[t._v("请注意：完成工维报事后自检任务方可完成。")])],2)],1):t._e()],2)],1)},n=[],s=(a("7f7f"),a("34ef"),a("4917"),a("28a5"),a("ac6a"),a("f576"),a("1fea")),r={data:function(){return{flag:this.$route.query.flag,radio:"",message:"",fileList:[],base64:"",base64Arr:[],tuName:"",tuNameArr:[],show:!1,time:"",obj:{},ziJianRen:localStorage.getItem("userName"),value:"",yiChangTitle:[],result:[],isArr:[],isArr1:[],isArr2:[],wenBen:"",checkQuery:{uid:localStorage.getItem("uid"),detail_id:this.$route.query.detail_id,detail_info:""}}},mounted:function(){var t=this,e=new Date;this.time=e.getFullYear()+"-"+JSON.stringify(e.getMonth()+1).padStart(2,"0")+"-"+JSON.stringify(e.getDate()).padStart(2,"0")+" "+JSON.stringify(e.getHours()).padStart(2,"0")+":"+JSON.stringify(e.getMinutes()).padStart(2,"0")+":"+JSON.stringify(e.getSeconds()).padStart(2,"0"),this.keepAxios.get(this.baseUrl.lockage+"/rest/checkTask/getDetailsByParamById",{params:{detail_id:this.$route.query.detail_id}}).then((function(e){console.log(e),t.obj=e.data.data,t.message=t.obj.description,t.obj.checkItemBeanList.forEach((function(e){e.checkItemDetailBeanList.forEach((function(e){console.log(e.detail_value=="红0".slice(0,1)),null!=e.font_value&&e.detail_value==e.font_value.slice(0,1)&&t.result.push(e.id+":"+e.font_value)}))}));var a=unescape(localStorage.getItem("baseUrl")),i=t.obj.check_img.split(",");i.forEach((function(e){t.fileList.push({url:a+e})})),console.log(t.fileList)}))},methods:{yanQi:function(){this.$router.push({path:"/shangHuPostpone",query:{flag1:"1",detail_id:this.$route.query.detail_id}})},verify:function(t,e,a,i,n,s){if(null!=n){var r,o=[];o.push(s+":"+a),(r=this.isArr2).push.apply(r,o);var c=[];""!=t?a<t&&(console.log("我试试1"),c.push({title:i+"异常"})):""!=e?a>e&&(console.log("我试试2"),c.push({title:i+"异常"})):""!=e&&""!=t&&(a<e||a>t)&&(console.log("我试试3"),c.push({title:i+"异常"}))}else{var l;console.log("我是文本类");var u=[];u.push(s+":"+a),this.wenBen=a,(l=this.isArr2).push.apply(l,u)}console.log(this.isArr2)},duoXuan:function(t,e,a,i,n){this.isArr1=i;var r=[],o=[];i.forEach((function(t){o.push(t.slice(3).slice(1))})),console.log(o),o.forEach((function(t){1==t&&r.push({title:n+":异常"})})),this.yiChangTitle=Object(s["a"])(r)},danXuan:function(t,e){console.log(t),console.log(e),1==e?this.isArr.push(t[0].id+":1"):this.isArr.push(t[0].id+":2")},dataURLtoFile:function(t,e){var a=t.split(","),i=a[0].match(/:(.*?);/)[1],n=atob(a[1]),s=n.length,r=new Uint8Array(s);while(s--)r[s]=n.charCodeAt(s);return new File([r],e,{type:i})},updateImg:function(t){var e=this,a=document.createElement("canvas"),i=a.getContext("2d"),n=new Image;n.src=t.content,n.onload=function(){a.width=400,a.height=300,i.drawImage(n,0,0,400,300),t.content=a.toDataURL(t.file.type,.92);var s=e.dataURLtoFile(t.content,t.file.name),r=new FormData;r.append("file",s),r.append("code",e.applyNo),r.append("type","chat"),e.base64Arr.push(t.content),e.tuNameArr.push(t.file.name),e.base64=e.base64Arr.join("#"),e.tuName=e.tuNameArr.join(",")},console.log(this.base64),console.log(this.tuName)},remove:function(t,e){var a=this;console.log(t),console.log(e),this.base64Arr.forEach((function(i){if(i==t.content)return a.base64Arr.splice(e.index,1)})),this.tuNameArr.forEach((function(i){if(i==t.file.name)return a.tuNameArr.splice(e.index,1)})),this.base64=this.base64Arr.join("#"),this.tuName=this.tuNameArr.join(","),console.log(this.base64Arr),console.log(this.tuNameArr)},up:function(){var t=this;console.log("diyici");var e=!0;0!=this.yiChangTitle.length?this.show=!0:(this.checkQuery,this.checkQuery.description=this.message,this.checkQuery.detail_info=this.isArr.join(";")+";"+this.isArr1.join(";")+";"+this.isArr2.join(";"),this.obj.checkItemBeanList.forEach((function(a){0==a.check_type?0==t.isArr2.length?(t.$toast("请填写"+a.check_item_description+"的值"),e=!1):""==t.message&&(t.$toast("请填写描述"),e=!1):1==a.check_type?0==t.isArr1.length?(t.$toast("请选择"+a.check_item_description+"的值"),e=!1):""==t.message&&(t.$toast("请填写描述"),e=!1):2==a.check_type?""==t.wenBen?(t.$toast("请填写"+a.check_item_description+"的值"),e=!1):""==t.message&&(t.$toast("请填写描述"),e=!1):3==a.check_type&&(""==t.radio?(t.$toast("请选择"+a.check_item_description+"的值"),e=!1):""==t.message&&(t.$toast("请填写描述"),e=!1))})),e&&(console.log(this.checkQuery),this.addDetails(this.checkQuery)))},addDetails:function(t){var e=this;this.keepAxios.post(this.baseUrl.lockage+"/rest/checkTask/addDetails",t).then((function(t){console.log(t),t.data.code,e.$toast(t.data.msg)}))}}},o=r,c=(a("e644"),a("2877")),l=Object(c["a"])(o,i,n,!1,null,"59b4d822",null);e["default"]=l.exports},e644:function(t,e,a){"use strict";var i=a("aacf"),n=a.n(i);n.a},f576:function(t,e,a){"use strict";var i=a("5ca1"),n=a("2e08"),s=a("a25f"),r=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(s);i(i.P+i.F*r,"String",{padStart:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);