"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[3692],{3692:function(t,n,s){s.r(n),s.d(n,{default:function(){return u}});var a=function(){var t=this,n=t._self._c;return n("div",{staticClass:"item"},[n("div",{staticClass:"content"},[n("div",{staticClass:"content-in"},[n("p",{staticClass:"aintro"},[t._v(t._s(t.$t("about.Introduction")))]),n("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"10px","margin-bottom":"5px"}}),n("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),t._l(t.introDatas,(function(s){return n("div",{key:s.aboutusId,staticStyle:{"margin-bottom":"50px"}},[n("div",{staticClass:"intro",domProps:{innerHTML:t._s(s.contentDetails)}})])}))],2)])])},e=[],i=s(2964),o=s(1981),r={name:"Aboutintro",props:["tabDatas"],data(){return{introDatas:[]}},mounted(){this.getAboutintroData(),this.Styles()},methods:{getAboutintroData(t=this.$store.state.lang.version){(0,i.aJ)({moduleType:"1",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.introDatas=t.data.rows)}))},Styles(){const t=document.createElement("style");t.type="text/css",t.innerHTML="\n                .content-in img {\n                    width: 100%;\n                    \n                    background-size: cover;\n                    background-position: center;\n                }\n\n                .content-in p {\n                    font-size: 16px;\n                }\n            ",document.head.appendChild(t)}},watch:{"$store.state.lang.version":{handler(){(0,o.A)(this.getAboutintroData(),this.$store.state.lang.version)}}}},c=r,d=s(1656),l=(0,d.A)(c,a,e,!1,null,"ea62611a",null),u=l.exports}}]);
//# sourceMappingURL=3692.8cb73f18.js.map