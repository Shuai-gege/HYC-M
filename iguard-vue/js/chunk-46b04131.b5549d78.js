(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46b04131"],{"774eb":function(t,e,n){"use strict";var a=n("b7b0"),r=n.n(a);r.a},b7b0:function(t,e,n){},ddb2:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"checkout-event-detail-container"},[n("van-nav-bar",{staticStyle:{position:"fixed",width:"100%"},attrs:{title:"事件详情","left-arrow":""},on:{"click-left":t.onBack}}),n("div",{staticClass:"content"},[n("van-cell-group",[n("van-cell",{attrs:{title:"事件编号",value:t.oEventDetail.id}}),n("van-cell",{attrs:{title:"开始时间",value:t.oEventDetail.startTimeToString}}),n("van-cell",{attrs:{title:"结束时间",value:t.oEventDetail.endTimeToString}}),n("van-cell",{attrs:{title:"实际用时",value:t.fnActualTimeStr(t.oEventDetail.actualTime,t.oEventDetail.startTimeToString)}}),n("van-cell",{attrs:{title:"逾期状态",value:t.oOverTimeMap[t.oEventDetail.overdue]}}),n("van-cell",{attrs:{title:"事件状态",value:t.oStatusMap[t.oEventDetail.checkStatus]}}),n("van-cell",{attrs:{title:"执行人",value:t.oEventDetail.assignerName}}),n("van-cell",{attrs:{title:"设备数量",value:t.oEventDetail.allDetail}}),n("van-cell",{attrs:{"value-class":"p-danger",title:"异常设备数",value:t.oEventDetail.isError}})],1),n("div",{staticClass:"btn-group"},[n("van-button",{attrs:{type:"default",color:"#A68E44"},on:{click:t.onCommon}},[t._v("评价事件")]),n("van-button",{attrs:{type:"default",color:"#A68E44"},on:{click:t.onDetail}},[t._v("事件详情")])],1)],1)],1)},r=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("96cf"),n("3b8d")),o=n("bd86"),c=n("c1df"),l=n.n(c),s=n("9788");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p={0:"未完成",1:"已提交",2:"已完成"},f={0:"未逾期",1:"已逾期"},d={components:{},data:function(){return{oOverTimeMap:f,oStatusMap:p,oEventDetail:{}}},created:function(){this.apiGetEventDetail()},mounted:function(){},methods:{onBack:function(){this.$router.go(-1)},onCommon:function(){this.$router.push({name:"commentEvent",query:v({},this.$route.query,{userName:this.oEventDetail.assignerName})})},onDetail:function(){this.$router.push({name:"checkoutEventDetail",query:v({},this.$route.query,{userName:this.oEventDetail.assignerName,type:"detail"})})},apiGetEventDetail:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["e"])({id:this.$route.query.id});case 2:e=t.sent,e&&(this.oEventDetail=e.dinfo);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),fnActualTimeStr:function(t,e){var n=l()(t),a=l()(e),r=l.a.duration(n.diff(a)).asMinutes();return"".concat(parseInt(r/60),"小时").concat(parseInt(r%60),"分")}},computed:{}},b=d,m=(n("774eb"),n("2877")),h=Object(m["a"])(b,a,r,!1,null,"195f3dee",null);e["default"]=h.exports}}]);