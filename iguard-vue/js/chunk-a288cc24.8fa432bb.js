(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a288cc24"],{"024d":function(t,e,a){},11695:function(t,e,a){"use strict";var i=a("024d"),o=a.n(i);o.a},7879:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("van-nav-bar",{attrs:{title:"故障上报","left-arrow":"",fixed:!0},on:{"click-left":t.onClickLeft}}),a("div",{staticClass:"con"},[a("van-search",{attrs:{"show-action":"",shape:"round",placeholder:"模糊搜索：报事人、描述、编号"},scopedSlots:t._u([{key:"action",fn:function(){return[a("div",{on:{click:t.onSearch}},[t._v("搜索")])]},proxy:!0}]),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._l(t.fault,(function(e,i){return a("div",{key:i,staticClass:"flex list",on:{click:function(a){return t.itemList(e.patrolPointId,e.buildingName,e.floorName,e.patrolPointName)}}},[a("span",[t._v(t._s(e.buildingName)+"/"+t._s(e.floorName))]),a("span",[t._v(t._s(e.patrolPointName))])])}))],2)],1)},o=[],n=(a("ac6a"),{data:function(){return{value:"",fault:[]}},mounted:function(){this.faultList()},methods:{faultList:function(){var t=this;this.keepAxios.post(this.baseUrl.spotCheck+"/app/check/getCheckScanSignInByDetailId",{uid:localStorage.getItem("uid"),taskDetailId:localStorage.getItem("keepWatchId"),page:0,pageSize:9999}).then((function(e){console.log(e);var a=e.data.data.rows.checkScanSignInDetailList,i={};a=a.reduce((function(t,e){return!i[e.patrolPointId]&&(i[e.patrolPointId]=t.push(e)),t}),[]),a.forEach((function(e){"0"!=e.patrolPointCheck&&t.fault.push(e)}))}))},onClickLeft:function(){this.$router.push("/spotFault")},itemList:function(t,e,a,i){console.log(t),console.log(e),console.log(a),console.log(i),this.$router.push({path:"spotFault",query:{faultId:t,buildingName:e,floorName:a,patrolPointName:i}})},onSearch:function(){}}}),l=n,s=(a("11695"),a("2877")),c=Object(s["a"])(l,i,o,!1,null,"6ae171ea",null);e["default"]=c.exports},ac6a:function(t,e,a){for(var i=a("cadf"),o=a("0d58"),n=a("2aba"),l=a("7726"),s=a("32e9"),c=a("84f2"),r=a("2b4c"),u=r("iterator"),f=r("toStringTag"),p=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=o(d),L=0;L<h.length;L++){var S,g=h[L],m=d[g],k=l[g],v=k&&k.prototype;if(v&&(v[u]||s(v,u,p),v[f]||s(v,f,g),c[g]=p,m))for(S in i)v[S]||n(v,S,i[S],!0)}}}]);