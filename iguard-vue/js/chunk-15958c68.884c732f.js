(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15958c68"],{"2e08":function(t,e,a){var i=a("9def"),s=a("9744"),n=a("be13");t.exports=function(t,e,a,r){var o=String(n(t)),l=o.length,c=void 0===a?" ":String(a),u=i(e);if(u<=l||""==c)return o;var d=u-l,f=s.call(c,Math.ceil(d/c.length));return f.length>d&&(f=f.slice(0,d)),r?f+o:o+f}},9744:function(t,e,a){"use strict";var i=a("4588"),s=a("be13");t.exports=function(t){var e=String(s(this)),a="",n=i(t);if(n<0||n==1/0)throw RangeError("Count can't be negative");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(a+=e);return a}},ac6a:function(t,e,a){for(var i=a("cadf"),s=a("0d58"),n=a("2aba"),r=a("7726"),o=a("32e9"),l=a("84f2"),c=a("2b4c"),u=c("iterator"),d=c("toStringTag"),f=l.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=s(h),p=0;p<m.length;p++){var g,v=m[p],y=h[v],S=r[v],_=S&&S.prototype;if(_&&(_[u]||o(_,u,f),_[d]||o(_,d,v),l[v]=f,y))for(g in i)_[g]||n(_,g,i[g],!0)}},cd33b:function(t,e,a){},d29e:function(t,e,a){"use strict";var i=a("cd33b"),s=a.n(i);s.a},dc8e:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("van-nav-bar",{attrs:{title:"延期申请","left-arrow":"",fixed:""},on:{"click-left":t.out}}),a("div",{staticClass:"con"},[a("div",{staticClass:"flex col"},[a("span",[t._v("起止时间：")]),a("span",[t._v(t._s(t.obj.start_time)+"~"+t._s(t.obj.end_time))])]),a("div",{staticClass:"title"},[t._v("商户自检信息")]),a("div",{staticClass:"flex col"},[a("span",[t._v("商户：")]),a("span",[t._v(t._s(t.obj.shop_name))])]),a("div",{staticClass:"flex col"},[a("span",[t._v("任务：")]),a("span",[t._v(t._s(t.obj.task_name))])]),a("div",{staticClass:"flex col"},[a("span",[t._v("自检时间：")]),a("span",[t._v(t._s(t.time1))])]),a("div",{staticClass:"flex col"},[a("span",[t._v("自检人：")]),a("span",[t._v(t._s(t.ziJianRen))])]),t._m(0),t._m(1),a("div",{staticClass:"title"},[t._v("选择延期时间")]),a("van-cell-group",[a("van-field",{attrs:{label:"延期至：",value:t.newTime,readonly:""},on:{click:function(e){t.isShow=!t.isShow}}}),t.isShow?a("van-datetime-picker",{attrs:{type:"datetime",title:"选择完整时间","min-date":t.minDate,"max-date":t.maxDate},on:{confirm:t.time,cancel:function(e){t.isShow=!t.isShow}},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}}):t._e()],1),a("div",{staticClass:"title"},[t._v("延期事由")]),a("van-field",{attrs:{rows:"2",autosize:"",label:"描述：",type:"textarea",maxlength:"50",placeholder:"请填写延期自检原因","show-word-limit":""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),a("div",{staticClass:"title"},[t._v("所需支持")]),a("van-field",{attrs:{rows:"2",autosize:"",label:"描述：",type:"textarea",maxlength:"50",placeholder:"请填写需物业提供的支持，例如：不断电，不停水","show-word-limit":""},model:{value:t.message1,callback:function(e){t.message1=e},expression:"message1"}}),a("div",{staticClass:"title"},[t._v("上传图片")]),a("div",{staticClass:"col"},[a("van-uploader",{attrs:{"max-count":3,"after-read":t.updateImg},on:{delete:t.remove},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}})],1),a("div",{staticClass:"btn"},[a("van-button",{attrs:{size:"large",type:"primary",color:"#A68E44"},on:{click:t.up}},[t._v("提交")])],1)],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex col"},[a("span",[t._v("自检结果：")]),a("span",[t._v("N/A")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex col"},[a("span",[t._v("自检状态：")]),a("span",[t._v("进行中")])])}],n=(a("ac6a"),a("7f7f"),a("34ef"),a("4917"),a("28a5"),a("f576"),{data:function(){return{fileList:[],base64:"",base64Arr:[],tuName:"",tuNameArr:[],ziJianRen:localStorage.getItem("userName"),message:"",message1:"",minDate:new Date(2020,0,1),maxDate:new Date(2999,10,1),currentDate:new Date,isShow:!1,newTime:"请选择时间",time1:"",obj:{},yanQiQuery:{uid:localStorage.getItem("uid"),task_detail_id:this.$route.query.detail_id,company_id:localStorage.getItem("companyId")}}},mounted:function(){var t=this,e=new Date;this.time1=e.getFullYear()+"-"+JSON.stringify(e.getMonth()+1).padStart(2,"0")+"-"+JSON.stringify(e.getDate()).padStart(2,"0")+" "+JSON.stringify(e.getHours()).padStart(2,"0")+":"+JSON.stringify(e.getMinutes()).padStart(2,"0")+":"+JSON.stringify(e.getSeconds()).padStart(2,"0"),this.keepAxios.get(this.baseUrl.lockage+"/rest/checkTask/getDetailsByParamById",{params:{detail_id:this.$route.query.detail_id}}).then((function(e){console.log(e),t.obj=e.data.data}))},methods:{dataURLtoFile:function(t,e){var a=t.split(","),i=a[0].match(/:(.*?);/)[1],s=atob(a[1]),n=s.length,r=new Uint8Array(n);while(n--)r[n]=s.charCodeAt(n);return new File([r],e,{type:i})},updateImg:function(t){var e=this,a=document.createElement("canvas"),i=a.getContext("2d"),s=new Image;s.src=t.content,s.onload=function(){a.width=400,a.height=300,i.drawImage(s,0,0,400,300),t.content=a.toDataURL(t.file.type,.92);var n=e.dataURLtoFile(t.content,t.file.name),r=new FormData;r.append("file",n),r.append("code",e.applyNo),r.append("type","chat"),e.base64Arr.push(t.content),e.tuNameArr.push(t.file.name),e.base64=e.base64Arr.join("#"),e.tuName=e.tuNameArr.join(",")}},remove:function(t,e){var a=this;console.log(t),console.log(e),this.base64Arr.forEach((function(i){if(i==t.content)return a.base64Arr.splice(e.index,1)})),this.tuNameArr.forEach((function(i){if(i==t.file.name)return a.tuNameArr.splice(e.index,1)})),this.base64=this.base64Arr.join("#"),this.tuName=this.tuNameArr.join(","),console.log(this.base64Arr),console.log(this.tuNameArr)},out:function(){this.$router.push({path:"/shangHuDetails1",query:{flag:"1",detail_id:this.$route.query.detail_id}})},time:function(t){var e=new Date(t);this.newTime=e.getFullYear()+"-"+JSON.stringify(e.getMonth()+1).padStart(2,"0")+"-"+JSON.stringify(e.getDate()).padStart(2,"0")+" "+JSON.stringify(e.getHours()).padStart(2,"0")+":"+JSON.stringify(e.getMinutes()).padStart(2,"0")+":00",this.isShow=!this.isShow,this.yanQiQuery.delay_time=this.newTime},up:function(){this.yanQiQuery.delay_cause=this.message,this.yanQiQuery.delay_support=this.message1,this.yanQiQuery.base64=this.base64,this.yanQiQuery.file_name=this.tuName,console.log(this.yanQiQuery),this.delayApply(this.yanQiQuery)},delayApply:function(t){var e=this;this.keepAxios.post(this.baseUrl.lockage+"/rest/checkTask/delayApply",t).then((function(t){console.log(t),200==t.data.code?(e.$toast(t.data.msg),e.$router.push("/shangHuItemList")):e.$toast(t.data.msg)}))}}}),r=n,o=(a("d29e"),a("2877")),l=Object(o["a"])(r,i,s,!1,null,"25926232",null);e["default"]=l.exports},f576:function(t,e,a){"use strict";var i=a("5ca1"),s=a("2e08"),n=a("a25f"),r=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n);i(i.P+i.F*r,"String",{padStart:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0,!0)}})}}]);