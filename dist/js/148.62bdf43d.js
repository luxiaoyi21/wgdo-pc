"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[148],{148:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"item"},[e("div",{staticClass:"content"},[e("div",{staticClass:"big-leader"},[e("router-link",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"95%",margin:"10px 10px"},attrs:{to:{name:"Contribute"}}},[e("span",[t._v(t._s(t.$t("prize.contribute")))]),e("i",{staticClass:"el-icon-arrow-right"})]),e("router-link",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"95%",margin:"10px 10px"},attrs:{to:{name:"cRule"}}},[e("span",[t._v(t._s(t.$t("prize.rule")))]),e("i",{staticClass:"el-icon-arrow-right"})]),e("router-link",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"95%",margin:"10px 10px"},attrs:{to:{name:"cPersonal"}}},[e("span",[t._v(t._s(t.$t("prize.person")))]),e("i",{staticClass:"el-icon-arrow-right"})]),e("router-link",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"95%",margin:"10px 10px"},attrs:{to:{name:"Mechanism"}}},[e("span",[t._v(t._s(t.$t("prize.mechanism")))]),e("i",{staticClass:"el-icon-arrow-right"})])],1),t._l(t.contriDatas,(function(a){return e("div",{key:a.greenawardId,staticClass:"content-in"},[e("p",{staticClass:"dynamic"},[t._v(t._s(a.title))]),e("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),e("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),e("div",{staticStyle:{opacity:"1","font-size":"15px","font-weight":"400","letter-spacing":"0px","line-height":"25px",color:"rgba(51, 51, 51, 1)","text-align":"justify","vertical-align":"top"},domProps:{innerHTML:t._s(a.contentDetails)}})])}))],2)])},s=[],n=a(2964),r=a(1981),l={name:"Contribute",props:["tabDatas"],data(){return{contriDatas:[...this.tabDatas]}},mounted(){this.getContriData(),this.addImageStyles()},methods:{getContriData(t=this.$store.state.lang.version){(0,n.zE)({moduleType:"3",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.contriDatas=t.data.rows)}))},addImageStyles(){const t=document.createElement("style");t.type="text/css",t.innerHTML="\n                .content-in img {\n                    width: 560px;\n                    height: 436.4px;\n                    mix-blend-mode: multiply;\n                    opacity: 1;\n                    margin: auto;\n                    display:flex;\n                }\n            ",document.head.appendChild(t)}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getContriData(),this.$store.state.lang.version)}}}},o=l,c=a(1656),p=(0,c.A)(o,i,s,!1,null,"13d4440e",null),d=p.exports}}]);
//# sourceMappingURL=148.62bdf43d.js.map