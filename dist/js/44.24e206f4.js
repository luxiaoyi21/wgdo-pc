"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[44],{6044:function(t,a,s){s.r(a),s.d(a,{default:function(){return u}});var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"leader"},[a("div",{staticClass:"leader-in"},[a("span",[t._v(t._s(t.$t("about.structure")))]),a("i",{staticClass:"el-icon-arrow-right"})]),a("div",{staticClass:"leader-in"},[a("span",[t._v(t._s(t.$t("about.Korean")))]),a("i",{staticClass:"el-icon-arrow-right"})]),a("div",{staticClass:"leader-in"},[a("span",[t._v(t._s(t.$t("about.UK")))]),a("i",{staticClass:"el-icon-arrow-right"})]),a("div",{staticClass:"leader-in"},[a("span",[t._v(t._s(t.$t("about.Germany")))]),a("i",{staticClass:"el-icon-arrow-right"})]),a("div",{staticClass:"leader-in"},[a("span",[t._v(t._s(t.$t("about.Norwegian")))]),a("i",{staticClass:"el-icon-arrow-right"})])]),a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"aintro"},[t._v(t._s(t.$t("about.structure")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"10px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),t._l(t.orDatas,(function(s){return a("div",{key:s.aboutusId,staticStyle:{"margin-bottom":"50px"}},[a("div",{staticClass:"intro",domProps:{innerHTML:t._s(s.contentDetails)}})])}))],2)])])},e=[],n=s(2964),r=s(1981),o={name:"Aboutor",props:["tabDatas"],data(){return{orDatas:[]}},mounted(){this.getAboutorData(),this.addImageStyles()},methods:{getAboutorData(t=this.$store.state.lang.version){(0,n.aJ)({moduleType:"2",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.orDatas=t.data.rows)}))},addImageStyles(){const t=document.createElement("style");t.type="text/css",t.innerHTML="\n                .content-in img {\n                    width: 100%;\n                    background-size: cover;\n                    background-position: center;\n                }\n            ",document.head.appendChild(t)}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getAboutorData(),this.$store.state.lang.version)}}}},l=o,c=s(1656),d=(0,c.A)(l,i,e,!1,null,"6d062a56",null),u=d.exports}}]);
//# sourceMappingURL=44.24e206f4.js.map