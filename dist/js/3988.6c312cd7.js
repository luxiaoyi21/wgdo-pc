"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[3988],{3988:function(t,e,s){s.r(e),s.d(e,{default:function(){return p}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"item"},[e("div",{staticClass:"content"},[e("div",{staticClass:"big-leader"},[e("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"80%"},attrs:{href:""}},[e("span",[t._v(t._s(t.$t("project.require")))]),e("i",{staticClass:"el-icon-arrow-right"})]),e("router-link",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"80%"},attrs:{to:{path:"/publicity/inventory"}}},[e("span",[t._v(t._s(t.$t("project.inventory")))]),e("i",{staticClass:"el-icon-arrow-right"})]),e("router-link",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"80%"},attrs:{to:{name:"Publicity"}}},[e("span",[t._v(t._s(t.$t("project.publicity")))]),e("i",{staticClass:"el-icon-arrow-right"})]),e("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"80%"},attrs:{href:""}},[e("span",[t._v(t._s(t.$t("project.news")))]),e("i",{staticClass:"el-icon-arrow-right"})]),e("router-link",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"80%"},attrs:{to:{path:"/publicity/disseminate"}}},[e("span",[t._v(t._s(t.$t("project.disseminate")))]),e("i",{staticClass:"el-icon-arrow-right"})]),e("router-link",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"80%"},attrs:{to:{path:"/publicity/contactform"}}},[e("span",[t._v(t._s(t.$t("project.contactform")))]),e("i",{staticClass:"el-icon-arrow-right"})])],1),t._l(t.inventDatas,(function(s){return e("div",{key:s.benefitId,staticClass:"content-in"},[e("p",{staticClass:"dynamic"},[t._v(t._s(s.title))]),e("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),e("div",{staticClass:"dsc-line"}),e("div",{staticClass:"dynamic-dsc"},[e("div",{domProps:{innerHTML:t._s(s.contentDetails)}})])])}))],2)])},i=[],n=s(2964),r=s(1981),c={name:"Inventory",props:["tabDatas"],data(){return{inventDatas:[...this.tabDatas]}},mounted(){this.getInventData(),this.addImageStyles()},methods:{getInventData(t=this.$store.state.lang.version){(0,n.MM)({moduleType:"4",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.inventDatas=t.data.rows)}))},addImageStyles(){const t=document.createElement("style");t.type="text/css",t.innerHTML="\n                .dynamic-dsc p{\n                    display: flex;\n                    flex-wrap:wrap;\n                }\n\n                .dynamic-dsc img {\n                    display: flex;\n                    width: 50%;\n                    height: 1064px;\n                    margin-bottom:20px;\n                },\n            ",document.head.appendChild(t)}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getInventData(),this.$store.state.lang.version)}}}},l=c,o=s(1656),d=(0,o.A)(l,a,i,!1,null,"19cfa1c8",null),p=d.exports}}]);
//# sourceMappingURL=3988.6c312cd7.js.map