"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[874],{7874:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"item"},[e("div",{staticClass:"content"},[e("div",{staticClass:"big-leader"},[e("router-link",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"80%"},attrs:{to:{name:"Big"}}},[e("span",[t._v(t._s(t.$t("prize.big")))]),e("i",{staticClass:"el-icon-arrow-right"})]),e("router-link",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"80%"},attrs:{to:{name:"bRule"}}},[e("span",[t._v(t._s(t.$t("prize.rule")))]),e("i",{staticClass:"el-icon-arrow-right"})]),e("router-link",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"80%"},attrs:{to:{name:"bPersonal"}}},[e("span",[t._v(t._s(t.$t("prize.persons")))]),e("i",{staticClass:"el-icon-arrow-right"})])],1),t._l(t.bigDatas,(function(a){return e("div",{key:a.greenawardId,staticClass:"content-in"},[e("p",{staticClass:"dynamic"},[t._v(t._s(a.title))]),e("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),e("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),e("div",{staticClass:"big-content",domProps:{innerHTML:t._s(a.contentDetails)}})])}))],2)])},i=[],n=a(2964),r=a(1981),l={name:"Big",props:["tabDatas"],data(){return{bigDatas:[...this.tabDatas]}},mounted(){this.getBigData(),this.addImageStyles()},methods:{getBigData(t=this.$store.state.lang.version){(0,n.zE)({moduleType:"1",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.bigDatas=t.data.rows)}))},addImageStyles(){const t=document.createElement("style");t.type="text/css",t.innerHTML="\n                .content-in img {\n                    width: 560px;\n                    height: 436.4px;\n                    mix-blend-mode: multiply;\n                    opacity: 1;\n                    margin: auto;\n                    background-size: cover;\n                    background-position: center;\n                }\n            ",document.head.appendChild(t)}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getBigData(),this.$store.state.lang.version)}}}},o=l,c=a(1656),d=(0,c.A)(o,s,i,!1,null,"40cf76a2",null),g=d.exports}}]);
//# sourceMappingURL=874.3d076147.js.map