"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[933],{6933:function(t,a,s){s.r(a),s.d(a,{default:function(){return m}});var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},t._l(t.dynamicinfoDatas,(function(s){return t.dynamicinfoDatas.length>0?a("div",{key:s.mediacenterId,staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(s.title))]),a("div",{staticClass:"info"},[a("div",{staticClass:"info-browser"},[t._v(t._s(t.$t("meet.browser"))+"："+t._s(s.clickVolume))]),a("div",{staticClass:"info-create"},[t._v(t._s(t.$t("meet.create"))+"："+t._s(s.releaseTime))])]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"10px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"dynamic-dsc"},[a("div",{staticClass:"intro",domProps:{innerHTML:t._s(s.contentDetails)}})])]):t._e()})),0)])},e=[],n=(s(4114),s(2964)),o=s(1981),r={name:"Dynamicinfo",props:["tabDatas","id"],data(){return{dynamicinfoDatas:[]}},mounted(){this.getDynamicinfoData(),this.Styles()},methods:{getDynamicinfoData(){const t=this.$route.query.id,a=this.$store.state.lang.version;(0,n.$U)({moduleType:"1",status:"1",version:a,id:t}).then((a=>{a.data&&Array.isArray(a.data.rows)&&a.data.rows.length>0&&(this.dynamicinfoDatas=[],a.data.rows.forEach((a=>{a.mediacenterId===t&&this.dynamicinfoDatas.push(a)})))})).catch((t=>{console.error("Error fetching data:",t)}))},Styles(){const t=document.createElement("style");t.type="text/css",t.innerHTML="\n                .intro img {\n                    width: 100%;\n                    \n                    background-size: cover;\n                    background-position: center;\n                }\n            ",document.head.appendChild(t)}},watch:{"$store.state.lang.version":{handler(){(0,o.A)(this.getDynamicinfoData(),this.$store.state.lang.version)}},"$route.query.id":{handler(){this.getDynamicinfoData()},immediate:!0}}},c=r,d=s(1656),l=(0,d.A)(c,i,e,!1,null,"7d83f58d",null),m=l.exports}}]);
//# sourceMappingURL=933.d5d548f1.js.map