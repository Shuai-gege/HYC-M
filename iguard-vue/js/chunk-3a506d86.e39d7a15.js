(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a506d86"],{4840:function(t,e,a){},ac6a:function(t,e,a){for(var i=a("cadf"),n=a("0d58"),s=a("2aba"),o=a("7726"),r=a("32e9"),l=a("84f2"),c=a("2b4c"),u=c("iterator"),f=c("toStringTag"),d=l.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=n(m),p=0;p<h.length;p++){var g,v=h[p],L=m[v],b=o[v],S=b&&b.prototype;if(S&&(S[u]||r(S,u,d),S[f]||r(S,f,v),l[v]=d,L))for(g in i)S[g]||s(S,g,i[g],!0)}},bc9b:function(t,e,a){"use strict";var i=a("4840"),n=a.n(i);n.a},eb78:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("div",{staticClass:"con"},[t.flag?a("van-radio-group",{on:{change:t.rad},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[a("van-radio",{attrs:{name:"确认故障并已修复"}},[t._v("确认故障并已修复")]),a("van-radio",{attrs:{name:"设备正常无故障"}},[t._v("设备正常无故障")])],1):t._e(),a("van-field",{attrs:{rows:"2",autosize:"",label:"完成描述:",type:"textarea",maxlength:"50",placeholder:"请输入留言","show-word-limit":""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),a("p",[t._v("请上传图片")]),a("van-uploader",{attrs:{"after-read":t.afterRead,"max-count":6},on:{delete:t.remove},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}})],1),a("div",{staticClass:"btn flex"},[a("van-button",{attrs:{color:"#999"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("取消")]),a("van-button",{attrs:{color:"#A68E44"},on:{click:t.end}},[t._v("确认")])],1)])},n=[],s=(a("ac6a"),a("7f7f"),a("34ef"),a("4917"),a("28a5"),{components:{},data:function(){return{message:"",show:!1,value:"",base64:"",base64Arr:[],tuName:"",tuNameArr:[],fileList:[],radio:"",flag:!1}},mounted:function(){"1"==this.$route.query.num?this.flag=!0:this.flag=!1},methods:{dataURLtoFile:function(t,e){var a=t.split(","),i=a[0].match(/:(.*?);/)[1],n=atob(a[1]),s=n.length,o=new Uint8Array(s);while(s--)o[s]=n.charCodeAt(s);return new File([o],e,{type:i})},afterRead:function(t){var e=this,a=document.createElement("canvas"),i=a.getContext("2d"),n=new Image;n.src=t.content,n.onload=function(){a.width=400,a.height=300,i.drawImage(n,0,0,400,300),t.content=a.toDataURL(t.file.type,.92);var s=e.dataURLtoFile(t.content,t.file.name),o=new FormData;o.append("file",s),o.append("code",e.applyNo),o.append("type","chat"),e.base64Arr.push(t.content),e.tuNameArr.push(t.file.name),e.base64=e.base64Arr.join("#"),e.tuName=e.tuNameArr.join(","),console.log(e.base64)}},remove:function(t,e){var a=this;console.log(t),console.log(e),this.base64Arr.forEach((function(i){if(i==t.content)return a.base64Arr.splice(e.index,1)})),this.tuNameArr.forEach((function(i){if(i==t.file.name)return a.tuNameArr.splice(e.index,1)})),this.base64=this.base64Arr.join("#"),this.tuName=this.tuNameArr.join(",")},rad:function(t){console.log(t),this.message=t},end:function(){var t=this;""==this.message?this.$toast("请输入完成描述"):""==this.fileList?this.$toast("请上传完成图片"):this.axios.post("/rest/tbEventReport/completeEvent",{uid:localStorage.getItem("uid"),status:"1",base64:this.base64,file_name:this.tuName,event_id:sessionStorage.getItem("id"),description:this.message,hours:""}).then((function(e){t.$toast("完成成功"),t.$router.push("/eventList")}))}}}),o=s,r=(a("bc9b"),a("2877")),l=Object(r["a"])(o,i,n,!1,null,"2bc87fd0",null);e["default"]=l.exports}}]);