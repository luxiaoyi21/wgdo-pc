"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[824],{7824:function(t,s,a){a.r(s),a.d(s,{default:function(){return u}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"item"},[s("div",{staticClass:"content"},t._l(t.recordDatas,(function(a){return s("div",{key:a.benefitId,staticClass:"content-in"},[s("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("project.record")))]),s("div",{staticClass:"info"},[s("div",{staticClass:"info-browser"},[t._v(t._s(t.$t("meet.browser"))+"："+t._s(a.clickVolume))]),s("div",{staticClass:"info-create"},[t._v(t._s(t.$t("meet.create"))+"："+t._s(a.releaseTime))])]),s("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),s("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),s("div",{staticClass:"grip"},[s("div",{domProps:{innerHTML:t._s(a.contentDetails)}})])])})),0)])},i=[],r=a(2964),n=a(1981),o={name:"Record",props:["tabDatas"],data(){return{recordDatas:[]}},mounted(){this.getRecordData()},methods:{getRecordData(t=this.$store.state.lang.version){(0,r.MM)({moduleType:"3",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.recordDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,n.A)(this.getRecordData(),this.$store.state.lang.version)}}}},c=o,d=a(1656),l=(0,d.A)(c,e,i,!1,null,"5704e392",null),u=l.exports}}]);
//# sourceMappingURL=824.47f2acfd.js.map