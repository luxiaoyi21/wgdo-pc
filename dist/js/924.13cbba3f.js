"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[924],{2924:function(t,s,a){a.r(s),a.d(s,{default:function(){return d}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"item"},[s("div",{staticClass:"content"},[s("div",{staticClass:"content-in"},[s("p",{staticClass:"aintro"},[t._v("品牌服务")]),s("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),s("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),s("div",{staticClass:"serviceall"},t._l(t.serviceDatas,(function(a){return s("div",{key:a.greeninstituteId,staticClass:"servicein"},[s("p",{staticClass:"service-content",domProps:{innerHTML:t._s(a.contentDetails)}})])})),0)])])])},i=[],n=a(2964),r=a(1981),c={name:"Service",props:["tabDatas"],data(){return{serviceDatas:[...this.tabDatas]}},mounted(){this.getServiceData()},methods:{getServiceData(t=this.$store.state.lang.version){(0,n.Ev)({moduleType:"3",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.serviceDatas=t.data.rows,console.log(this.serviceDatas))}))}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getServiceData(),this.$store.state.lang.version)}}}},o=c,l=a(1656),v=(0,l.A)(o,e,i,!1,null,"24d8354a",null),d=v.exports}}]);
//# sourceMappingURL=924.13cbba3f.js.map