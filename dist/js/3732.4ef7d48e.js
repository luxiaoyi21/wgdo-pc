"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[3732],{3732:function(t,a,s){s.r(a),s.d(a,{default:function(){return u}});var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},t._l(t.labDatas,(function(s){return a("div",{key:s.academicId},[a("p",{staticClass:"dynamic"},[t._v(t._s(s.title))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"dynamic-dsc",staticStyle:{"margin-bottom":"50px"}},[a("div",{staticClass:"lab",domProps:{innerHTML:t._s(s.contentDetails)}})])])})),0)])])},e=[],n=s(2964),r=s(1981),o={name:"Laboratory",props:["tabDatas"],data(){return{labDatas:[...this.tabDatas]}},mounted(){this.getLabData()},methods:{getLabData(t=this.$store.state.lang.version){(0,n.is)({moduleType:"3",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.labDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getLabData(),this.$store.state.lang.version)}}}},l=o,c=s(1656),d=(0,c.A)(l,i,e,!1,null,"90c67a80",null),u=d.exports}}]);
//# sourceMappingURL=3732.4ef7d48e.js.map