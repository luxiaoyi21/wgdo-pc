"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[157],{5538:function(t,a,s){s.r(a),s.d(a,{default:function(){return h}});var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"aintro"},[t._v(t._s(t.$t("wgdo.branch")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticStyle:{"margin-bottom":"50px"}},t._l(t.branchDatas,(function(s,i){return a("div",{key:s.greeninstituteId},[a("div",{staticClass:"intro"},[a("div",{ref:"left1",refInFor:!0,staticClass:"left"},[a("img",{attrs:{src:"http://www.wgdo.net"+s.cover}})]),a("div",{staticClass:"right"},[a("div",{ref:"right1",refInFor:!0,staticClass:"right-top"},[a("p",{staticClass:"ch"},[t._v(t._s(s.title))])]),a("div",{staticClass:"right-bottom"},[t._v(" "+t._s(s.intro)+" ")])])]),i!==t.branchDatas.length-1?a("div",{staticClass:"dsc-line",staticStyle:{margin:"50px 0"}}):t._e()])})),0)])])])},r=[],e=s(2964),n=s(1981),c={name:"Branch",props:["tabDatas"],data(){return{branchDatas:[...this.tabDatas]}},mounted(){this.getBranchData()},methods:{getBranchData(t=this.$store.state.lang.version){(0,e.Ev)({moduleType:"2",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.branchDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,n.A)(this.getBranchData(),this.$store.state.lang.version)}}}},o=c,l=s(1656),d=(0,l.A)(o,i,r,!1,null,"fd4dd9ae",null),h=d.exports}}]);
//# sourceMappingURL=157.b0f5ee2f.js.map