"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[5132],{5132:function(t,a,s){s.r(a),s.d(a,{default:function(){return u}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"aintro"},[t._v(t._s(t.$t("about.structure")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),t._l(t.orDatas,(function(s){return a("div",{key:s.aboutusId,staticStyle:{"margin-bottom":"50px"}},[a("div",{staticStyle:{opacity:"1","font-size":"15px","font-weight":"400","letter-spacing":"0px","line-height":"25px",color:"rgba(51, 51, 51, 1)","text-align":"justify","vertical-align":"top"},domProps:{innerHTML:t._s(s.contentDetails)}})])}))],2)])])},n=[],i=s(2964),o=s(1981),r={name:"Aboutor",props:["tabDatas"],data(){return{orDatas:[...this.tabDatas]}},mounted(){this.getAboutorData(),this.addImageStyles()},methods:{getAboutorData(t=this.$store.state.lang.version){(0,i.aJ)({moduleType:"2",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.orDatas=t.data.rows)}))},addImageStyles(){const t=document.createElement("style");t.type="text/css",t.innerHTML="\n                .content-in img {\n                    width: 100%;\n                    background-size: cover;\n                    background-position: center;\n                }\n            ",document.head.appendChild(t)}},watch:{"$store.state.lang.version":{handler(){(0,o.A)(this.getAboutorData(),this.$store.state.lang.version)}}}},c=r,l=s(1656),d=(0,l.A)(c,e,n,!1,null,"318a4938",null),u=d.exports}}]);
//# sourceMappingURL=5132.734f67b3.js.map