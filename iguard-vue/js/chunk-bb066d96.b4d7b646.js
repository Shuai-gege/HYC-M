(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bb066d96"],{"004b":function(t,e,a){"use strict";var i=a("67eb"),o=a.n(i);o.a},"50ef":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("van-nav-bar",{attrs:{title:"故障上报","left-arrow":"",fixed:!0},on:{"click-left":t.onClickLeft}}),a("div",{staticClass:"con"},[a("van-cell",{attrs:{title:"巡更点","is-link":"",to:"fault1",value:t.faultName}}),a("van-field",{attrs:{rows:"2",autosize:"",label:"上报描述:",type:"textarea",maxlength:"50",placeholder:"请输入留言","show-word-limit":""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),a("van-uploader",{attrs:{"max-count":6,"after-read":t.updateImg},on:{delete:t.remove},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}}),a("div",{staticClass:"btn flex"},[a("van-button",{attrs:{color:"#999"},on:{click:t.out}},[t._v("取消")]),a("van-button",{attrs:{color:"#a48f36"},on:{click:t.end}},[t._v("确认")])],1)],1)],1)},o=[],s=(a("ac6a"),a("34ef"),a("4917"),a("28a5"),a("7f7f"),{data:function(){return{message:"",fileList:[],base64:"",base64Arr:[],tuName:"",tuNameArr:[],faultName:"",id:""}},mounted:function(){this.id=this.$route.query.faultId,void 0==this.$route.query.buildingName||void 0==this.$route.query.floorName||void 0==this.$route.query.patrolPointName?this.faultName="请选择":this.faultName=this.$route.query.buildingName+"/"+this.$route.query.floorName+"--"+this.$route.query.patrolPointName},methods:{updateImg:function(t){var e=this;console.log(t);var a=document.createElement("canvas"),i=a.getContext("2d"),o=new Image;o.src=t.content,o.onload=function(){a.width=400,a.height=300,i.drawImage(o,0,0,400,300),t.content=a.toDataURL(t.file.type,.92);var s=e.dataURLtoFile(t.content,t.file.name),r=new FormData;r.append("file",s),r.append("code",e.applyNo),r.append("type","chat"),e.base64Arr.push(t.content),e.tuNameArr.push(t.file.name),e.base64=e.base64Arr.join("#"),e.tuName=e.tuNameArr.join(",")},console.log(this.base64),console.log(this.tuName)},dataURLtoFile:function(t,e){var a=t.split(","),i=a[0].match(/:(.*?);/)[1],o=atob(a[1]),s=o.length,r=new Uint8Array(s);while(s--)r[s]=o.charCodeAt(s);return new File([r],e,{type:i})},remove:function(t,e){var a=this;console.log(t),console.log(e),this.base64Arr.forEach((function(i){if(i==t.content)return a.base64Arr.splice(e.index,1)})),this.tuNameArr.forEach((function(i){if(i==t.file.name)return a.tuNameArr.splice(e.index,1)})),this.base64=this.base64Arr.join("#"),this.tuName=this.tuNameArr.join(","),console.log(this.base64Arr),console.log(this.tuNameArr)},end:function(){var t=this;""==this.message?this.$toast("请填写故障描述"):""==this.base64?this.$toast("请上传图片"):""==this.faultName?this.$toast("请选择故障巡更点"):this.keepAxios.post(this.baseUrl.keepAxios+"/app/patrolTask/reportDefault",{uid:localStorage.getItem("uid"),base64:this.base64,file_name:this.tuName,remark:this.message,patrolPointId:this.id,taskDetailId:localStorage.getItem("keepWatchId"),defaultType:"1"}).then((function(e){console.log(e.data),2e4==e.data.code?(t.$toast("上报故障成功"),t.$router.push("keepWatch")):t.$toast(e.data.msg)}))},out:function(){this.$router.push({path:"keepWatchDetails",query:{id:localStorage.getItem("keepWatchId")}})},onClickLeft:function(){this.$router.push({path:"keepWatchDetails",query:{id:localStorage.getItem("keepWatchId")}})}}}),r=s,n=(a("004b"),a("2877")),l=Object(n["a"])(r,i,o,!1,null,"75a0eb42",null);e["default"]=l.exports},"67eb":function(t,e,a){},ac6a:function(t,e,a){for(var i=a("cadf"),o=a("0d58"),s=a("2aba"),r=a("7726"),n=a("32e9"),l=a("84f2"),u=a("2b4c"),c=u("iterator"),h=u("toStringTag"),f=l.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=o(d),p=0;p<m.length;p++){var g,b=m[p],L=d[b],v=r[b],N=v&&v.prototype;if(N&&(N[c]||n(N,c,f),N[h]||n(N,h,b),l[b]=f,L))for(g in i)N[g]||s(N,g,i[g],!0)}}}]);