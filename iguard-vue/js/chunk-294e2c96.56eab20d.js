(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-294e2c96"],{2546:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"checkout-event-container"},[n("van-nav-bar",{attrs:{title:"点检事件","left-arrow":""},on:{"click-left":e.onBack}}),n("div",{staticClass:"content"},[n("van-cell-group",[n("van-cell",{attrs:{title:"事件编号",value:e.oEvent.eventNo}}),n("van-cell",{attrs:{title:"人员选择","is-link":"","arrow-direction":"down",value:e.oEvent.userName},on:{click:e.onUserSelect}}),n("van-cell",{attrs:{title:"设备选择","is-link":"","arrow-direction":"down",value:e.oEvent.aDevice.length<=0?"未选择":e.oEvent.aDevice.length},on:{click:e.onEquipmentSelect}})],1),n("van-field",{attrs:{readonly:"",clickable:"",name:"datetimePicker","input-align":"right",value:e.oEvent.startTime,label:"指定开始时间",placeholder:"点击选择时间"},on:{click:e.onDateShow}}),n("van-field",{attrs:{"input-align":"right",type:"number",label:"指定计划工时",placeholder:"(小时)"},model:{value:e.oEvent.duration,callback:function(t){e.$set(e.oEvent,"duration",t)},expression:"oEvent.duration"}}),n("div",{staticClass:"p-event-label"},[e._v("事件描述")])],1),n("van-form",[n("van-field",{attrs:{rows:"1",autosize:{minHeight:150},type:"textarea",placeholder:"填入事件的详细情况",maxlength:"200","show-word-limit":""},model:{value:e.oEvent.details,callback:function(t){e.$set(e.oEvent,"details",t)},expression:"oEvent.details"}})],1),n("van-popup",{attrs:{position:"bottom"},model:{value:e.dateSheetVisible,callback:function(t){e.dateSheetVisible=t},expression:"dateSheetVisible"}},[n("van-datetime-picker",{attrs:{type:"datetime"},on:{confirm:e.onConfirmDate,cancel:e.onCancelDate},model:{value:e.dateTime,callback:function(t){e.dateTime=t},expression:"dateTime"}})],1),n("div",{staticClass:"btn flex"},[n("van-button",{attrs:{color:"#999"},on:{click:e.onCancel}},[e._v("取消")]),n("van-button",{attrs:{color:"#A68E44"},on:{click:e.onConfirm}},[e._v("确定")])],1)],1)},a=[],r=(n("8e6e"),n("ac6a"),n("456d"),n("c5f6"),n("96cf"),n("3b8d")),o=n("bd86"),s=n("2f62"),c=n("c1df"),l=n.n(c),u=n("9788"),f=n("0644"),v=n.n(f);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={components:{},data:function(){return{activeNames:[1],dateTime:l()().format("YYYY-MM-DD HH:mm:ss"),password:"",message:"",showPicker:!1,oEvent:{startTime:l()().format("YYYY-MM-DD HH:mm:ss"),details:"",assignerId:"",aDevice:[],duration:""},dateSheetVisible:!1,uid:localStorage.getItem("uid")}},created:function(){this.fnInitPage()},mounted:function(){},methods:h({},Object(s["b"])(["setEvent"]),{fnInitPage:function(){this.eventInfo.oEventInfo&&(this.oEvent=this.eventInfo.oEventInfo)},onBack:function(){this.$router.push({name:"home"})},onUserSelect:function(){this.setEvent(this.oEvent),this.$router.push({name:"userSelect"})},onEquipmentSelect:function(){this.setEvent(this.oEvent),this.$router.push({name:"equipmentSelect"})},onDateShow:function(){var e=l()(this.oEvent.startTime).valueOf();this.dateTime=new Date(e),this.dateSheetVisible=!0},onConfirmDate:function(){this.oEvent.startTime=l()(this.dateTime).format("YYYY-MM-DD HH:mm:ss"),this.dateSheetVisible=!1},onCancelDate:function(){this.dateSheetVisible=!1},onConfirm:function(){this.oEvent.assignerId?this.oEvent.aDevice.length<=0?this.$toast("未选择设备！"):this.oEvent.startTime?this.oEvent.duration?this.apiSaveEvent():this.$toast("未输入时长！"):this.$toast("未选择开始时间！"):this.$toast("未选择人员！")},onCancel:function(){this.$router.go(-1)},apiSaveEvent:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=v()(this.oEvent),t.deviceId=t.aDevice.join(","),t.endTime=l()(t.startTime).add(Number(t.duration),"h").format("YYYY-MM-DD HH:mm:ss"),t.examinerId=this.uid,e.next=6,Object(u["o"])(t);case 6:e.sent,this.$router.push({name:"home"});case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}),computed:h({},Object(s["c"])(["eventInfo"]))},p=m,b=(n("3cd2"),n("2877")),E=Object(b["a"])(p,i,a,!1,null,"8f643a06",null);t["default"]=E.exports},"3cd2":function(e,t,n){"use strict";var i=n("8670"),a=n.n(i);a.a},8670:function(e,t,n){},aa77:function(e,t,n){var i=n("5ca1"),a=n("be13"),r=n("79e5"),o=n("fdef"),s="["+o+"]",c="​",l=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),f=function(e,t,n){var a={},s=r((function(){return!!o[e]()||c[e]()!=c})),l=a[e]=s?t(v):o[e];n&&(a[n]=l),i(i.P+i.F*s,"String",a)},v=f.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=f},c5f6:function(e,t,n){"use strict";var i=n("7726"),a=n("69a8"),r=n("2d95"),o=n("5dbc"),s=n("6a99"),c=n("79e5"),l=n("9093").f,u=n("11e9").f,f=n("86cc").f,v=n("aa77").trim,d="Number",h=i[d],m=h,p=h.prototype,b=r(n("2aeb")(p))==d,E="trim"in String.prototype,g=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){t=E?t.trim():v(t,3);var n,i,a,r=t.charCodeAt(0);if(43===r||45===r){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===r){switch(t.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+t}for(var o,c=t.slice(2),l=0,u=c.length;l<u;l++)if(o=c.charCodeAt(l),o<48||o>a)return NaN;return parseInt(c,i)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof h&&(b?c((function(){p.valueOf.call(n)})):r(n)!=d)?o(new m(g(t)),n,h):g(t)};for(var I,w=n("9e1e")?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;w.length>S;S++)a(m,I=w[S])&&!a(h,I)&&f(h,I,u(m,I));h.prototype=p,p.constructor=h,n("2aba")(i,d,h)}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);