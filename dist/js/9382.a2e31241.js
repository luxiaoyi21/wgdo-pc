"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[9382],{9382:function(t,s,e){e.r(s),e.d(s,{default:function(){return u}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"item"},[s("div",{staticClass:"content"},t._l(t.gloryDatas,(function(e){return s("div",{key:e.benefitId,staticClass:"content-in"},[s("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("project.glory")))]),s("div",{staticClass:"info"},[s("div",{staticClass:"info-browser"},[t._v(t._s(t.$t("meet.browser"))+"："+t._s(e.clickVolume))]),s("div",{staticClass:"info-create"},[t._v(t._s(t.$t("meet.create"))+"："+t._s(e.releaseTime))])]),s("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),s("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),s("div",{staticClass:"grip"},[s("div",{domProps:{innerHTML:t._s(e.contentDetails)}})])])})),0)])},n=[],i=e(2964),r=e(1981),o={name:"Glory",props:["tabDatas"],data(){return{gloryDatas:[]}},mounted(){this.getGloryData(),this.ImageStyles()},methods:{getGloryData(t=this.$store.state.lang.version){const s=this.$route.query.id;(0,i.MM)({moduleType:"2",status:"1",version:t,id:s}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.gloryDatas=t.data.rows)}))},ImageStyles(){const t=document.createElement("style");t.type="text/css",t.innerHTML="\n                .content-in img {\n                    height:100%;\n                    \n                    background-size: cover;\n                    background-position: center;\n                    object-fit: cover;\n                }\n            ",document.head.appendChild(t)}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getGloryData(),this.$store.state.lang.version)}}}},l=o,c=e(1656),d=(0,c.A)(l,a,n,!1,null,"0823dfe6",null),u=d.exports}}]);
//# sourceMappingURL=9382.a2e31241.js.map