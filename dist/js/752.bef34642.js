"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[752],{752:function(t,s,a){a.r(s),a.d(s,{default:function(){return v}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"item"},[s("div",{staticClass:"content"},[s("div",{staticClass:"content-in"},[s("p",{staticClass:"aintro"},[t._v(t._s(t.$t("wgdo.intro")))]),s("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),s("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),t._l(t.introDatas,(function(a){return s("div",{key:a.greeninstituteId,staticClass:"intro"},[s("div",{staticClass:"left"},[s("img",{attrs:{src:"http://106.3.97.14:9002"+a.cover}})]),s("div",{staticClass:"right"},[s("div",{staticClass:"right-top"},[s("p",{staticClass:"ch"},[t._v(t._s(a.title))])]),s("div",{staticClass:"right-bottom"},[t._v(" "+t._s(a.intro)+" ")])])])}))],2)])])},n=[],r=a(2964),e=a(1981),o={name:"Intro",props:["tabDatas"],data(){return{introDatas:[...this.tabDatas]}},mounted(){this.getIntroData()},methods:{getIntroData(t=this.$store.state.lang.version){(0,r.Ev)({moduleType:"1",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.introDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,e.A)(this.getIntroData(),this.$store.state.lang.version)}}}},l=o,c=a(1656),d=(0,c.A)(l,i,n,!1,null,"0c7b1fc0",null),v=d.exports}}]);
//# sourceMappingURL=752.bef34642.js.map