(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1083941a"],{1564:function(t,a,e){"use strict";var n=e("de6b"),s=e.n(n);s.a},"2f21":function(t,a,e){"use strict";var n=e("79e5");t.exports=function(t,a){return!!t&&n((function(){a?t.call(null,(function(){}),1):t.call(null)}))}},"55dd":function(t,a,e){"use strict";var n=e("5ca1"),s=e("d8e8"),i=e("4bf8"),o=e("79e5"),r=[].sort,c=[1,2,3];n(n.P+n.F*(o((function(){c.sort(void 0)}))||!o((function(){c.sort(null)}))||!e("2f21")(r)),"Array",{sort:function(t){return void 0===t?r.call(i(this)):r.call(i(this),s(t))}})},"794c":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"taskList1"},[e("van-nav-bar",{attrs:{title:"事件详情","left-text":"返回","left-arrow":"",fixed:!0},on:{"click-left":t.onClickLeft}}),e("div",{staticClass:"con"},[e("div",{staticClass:"flex"},[e("van-field",{attrs:{placeholder:"请选择年月/年",readonly:"","left-icon":"clock-o"},on:{click:function(a){t.showTime=!0}},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}}),e("van-field",{attrs:{placeholder:"请输入公司",readonly:"","left-icon":"cluster-o"},on:{click:function(a){t.show=!0}},model:{value:t.value1,callback:function(a){t.value1=a},expression:"value1"}})],1),e("div",[t.showTime?e("van-datetime-picker",{attrs:{type:"year-month",title:"选择年","min-date":t.minDate,"max-date":t.maxDate,formatter:t.formatter},on:{confirm:t.time,cancel:function(a){t.showTime=!1}},model:{value:t.currentDate,callback:function(a){t.currentDate=a},expression:"currentDate"}}):t._e(),e("van-popup",{style:{height:"30%"},attrs:{round:"",position:"bottom"},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[e("div",{staticClass:"content1"},[e("van-radio-group",{model:{value:t.radio,callback:function(a){t.radio=a},expression:"radio"}},[e("van-radio",{attrs:{name:"1","icon-size":"17"},on:{click:function(a){return t.company(t.company1.id,t.company1.name)}}},[t._v(t._s(t.company1.name))])],1)],1)])],1),e("div",{staticClass:"look"},[e("div",{staticClass:"num flex_a"},[e("div",[e("p",{staticClass:"flex_c num1"},[t._v(t._s(t.eventsTotal))]),e("p",[t._v("事件事件数")])]),e("div",[e("p",{staticClass:"flex_c num1"},[t._v(t._s(t.completeEvents))]),e("p",[t._v("结束事件数")])]),e("div",[e("p",{staticClass:"flex_c num1"},[t._v(t._s(t.avgScores))]),e("p",[t._v("评分均值")])])]),e("div",{staticClass:"top flex"},[t._v("事件状态分析")]),e("div",{staticClass:"charts"},[e("ve-pie",{attrs:{data:t.chartData,settings:t.chartSettings,loading:t.loading}})],1),e("div",{staticClass:"top flex"},[t._v("事件类型分析")]),e("div",{staticClass:"charts"},[e("ve-pie",{attrs:{data:t.chartData2,settings:t.chartSettings,loading:t.loading}})],1),e("div",{staticClass:"top flex"},[t._v("事件位置分析")]),e("div",{staticClass:"charts"},[e("ve-bar",{attrs:{data:t.chartData4,extend:t.chartSettings2,height:"500px","legend-visible":!1,loading:t.loading}})],1),e("div",{staticClass:"top flex"},[t._v("事件评分分析")]),e("div",{staticClass:"charts"},[e("ve-pie",{attrs:{data:t.chartData5,loading:t.loading}})],1),e("div",{staticClass:"top flex"},[t._v("日事件状态分析")]),e("div",{staticClass:"charts"},[e("ve-line",{attrs:{data:t.chartData1,extend:t.chartSettings3,grid:t.grid,loading:t.loading}})],1),e("div",{staticClass:"top flex"},[t._v("日报事类型分析")]),e("div",{staticClass:"charts"},[e("ve-line",{attrs:{data:t.chartData3,extend:t.chartSettings1,"data-zoom":t.dataZoom,"legend-visible":!1,grid:t.grid,loading:t.loading}})],1)])])],1)},s=[],i=(e("ac6a"),e("55dd"),e("7f7f"),e("aabe"),e("0a6d"),{data:function(){return this.chartSettings={},this.chartSettings1={max:["dataMax","dataMax"],xAxisType:"value"},this.chartSettings3={max:["dataMax","dataMax"],xAxisType:"value"},this.chartSettings2={max:["dataMax","dataMax"],yAxis:{axisLabel:{formatter:function(t){return t.length>4?t.substr(0,3)+"...":t}}}},this.grid={show:!0,left:3,right:10},this.dataZoom=[{type:"slider"}],{value:"",showTime:!1,value1:"",show:!1,minDate:new Date(2e3),maxDate:new Date(2025,10,1),currentDate:new Date,company1:{},radio:"",chartData:{columns:["数","访问用户"],rows:[]},chartData1:{columns:["日期","报事事件数","结束事件数","当日滞压数"],rows:[]},chartData2:{columns:["事件类型","报事数量"],rows:[]},chartData3:{columns:["日期"],rows:[]},chartData4:{columns:["建筑","报事总数"],rows:[]},chartData5:{columns:["分","事件数"],rows:[]},avgScores:"",eventsTotal:"",completeEvents:"",loading:!0,rest:"",typeObj:[],eventTypeArr:[],nowTime:new Date,listTime:[]}},mounted:function(){this.department();var t=new Date;this.value=t.getFullYear()+"-"+this.p(t.getMonth()+1)},methods:{onClickLeft:function(){this.$router.go(-1)},formatter:function(t,a){return"year"===t?"".concat(a,"年"):"month"===t?"".concat(a,"月"):a},p:function(t){return t<10?"0"+t:t},time:function(t){var a=t;this.nowTime=t,this.value=a.getFullYear()+"-"+this.p(a.getMonth()+1),this.showTime=!1,this.chartData={columns:["数","访问用户"],rows:[]},this.chartData1={columns:["日期","报事事件数","结束事件数","当日滞压数"],rows:[]},this.chartData2={columns:["事件类型","报事数量"],rows:[]},this.chartData3={columns:["日期"],rows:[]},this.chartData4={columns:["建筑","报事总数"],rows:[]},this.chartData5={columns:["分","事件数"],rows:[]},this.loading=!0,this.board(),this.zheXian()},company:function(t,a){this.value1=a,this.companyId=t,this.chartData={columns:["数","访问用户"],rows:[]},this.chartData1={columns:["日期","报事事件数","结束事件数","当日滞压数"],rows:[]},this.chartData2={columns:["事件类型","报事数量"],rows:[]},this.chartData3={columns:["日期"],rows:[]},this.chartData4={columns:["建筑","报事总数"],rows:[]},this.chartData5={columns:["分","事件数"],rows:[]},this.loading=!0,this.board(),this.zheXian()},department:function(){var t=this;this.axios.get("/rest/department/getCompanyByUid",{params:{uid:localStorage.getItem("uid")}}).then((function(a){t.company1=a,t.value1=a.name,t.board(),t.zheXian()}))},board:function(){var t=this;this.axios.get("/rest/management/board",{params:{companyId:this.company1.id,queryTime:this.value}}).then((function(a){t.loading=!1,t.avgScores=a.avgScores,t.completeEvents=a.completeEvents,t.eventsTotal=a.eventsTotal,t.chartData.rows=[{"数":"已结束事件","访问用户":a.completeEventsMonth},{"数":"上报结束事件","访问用户":a.invalidEventsMonth},{"数":"未结束事件","访问用户":a.noFinishEventsMonth},{"数":"被合并事件","访问用户":a.mergeEvents}],a.eventTypeDataList[0].eventTypeCountDataList.sort((function(t,a){return parseInt(t.typeCount)<parseInt(a.typeCount)?1:-1})),a.eventTypeDataList[0].eventTypeCountDataList.forEach((function(e,n){t.typeObj=a.eventTypeDataList[0].eventTypeCountDataList.splice(5),t.typeObj.forEach((function(a){t.eventTypeArr.push(parseInt(a.typeCount))})),t.rest=t.eventTypeArr.reduce((function(t,a){return t+a}),1),0!=n&&1!=n&&2!=n&&3!=n&&4!=n||t.chartData2.rows.push({"事件类型":e.typeName,"报事数量":e.typeCount})})),t.chartData2.rows.push({"事件类型":"其他","报事数量":t.rest}),console.log(t.chartData2),a.eventLocationDataList.forEach((function(a){t.chartData4.rows.push({"建筑":a.buildingName,"报事总数":a.buildingEvents})})),a.eventScoreDataList.forEach((function(a,e){0!=a.eventCounts&&t.chartData5.rows.push({"分":e+"-"+(e+1)+"分","事件数":a.eventCounts})})),console.log(t.chartData5)}))},zheXian:function(){var t=this;this.axios.get("/rest/management/getManagementLine",{params:{companyId:this.company1.id,queryTime:this.value}}).then((function(a){t.loading=!1;t.nowTime.getMonth();a.eventStatusLineList.forEach((function(a,e){t.chartData1.rows.push({"日期":t.nowTime.getMonth()+1+"-"+a.dateCensus,"报事事件数":a.reportEvents,"结束事件数":a.completeEvents,"当日滞压数":a.noFinishEvents})})),a.eventTypeDataList[0].eventTypeCountDataList.forEach((function(a){t.chartData3.columns.push(a.typeName)})),a.eventTypeDataList.map((function(a){var e={"日期":t.nowTime.getMonth()+1+"-"+a.columnName};a.eventTypeCountDataList.map((function(t){return e[t.typeName]=t.typeCount})),t.chartData3.rows.push(e)})),console.log(t.listTime),console.log(t.chartData3)}))}}}),o=i,r=(e("1564"),e("2877")),c=Object(r["a"])(o,n,s,!1,null,"795ab747",null);a["default"]=c.exports},aabe:function(t,a,e){},ac6a:function(t,a,e){for(var n=e("cadf"),s=e("0d58"),i=e("2aba"),o=e("7726"),r=e("32e9"),c=e("84f2"),l=e("2b4c"),u=l("iterator"),h=l("toStringTag"),d=c.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=s(v),p=0;p<m.length;p++){var f,g=m[p],D=v[g],y=o[g],w=y&&y.prototype;if(w&&(w[u]||r(w,u,d),w[h]||r(w,h,g),c[g]=d,D))for(f in n)w[f]||i(w,f,n[f],!0)}},de6b:function(t,a,e){}}]);