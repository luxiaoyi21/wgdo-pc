"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[990],{8990:function(t,s,e){e.r(s),e.d(s,{default:function(){return h}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"item"},[s("div",{staticClass:"content"},t._l(t.saveDatas,(function(e){return s("div",{key:e.benefitId,staticClass:"content-in"},[s("p",{staticClass:"dynamic"},[t._v(t._s(e.title))]),s("div",{staticClass:"info"},[s("div",{staticClass:"info-browser"},[t._v(t._s(t.$t("meet.browser"))+"："+t._s(e.clickVolume))]),s("div",{staticClass:"info-create"},[t._v(t._s(t.$t("meet.create"))+"："+t._s(e.releaseTime))])]),s("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"10px","margin-bottom":"5px"}}),s("div",{staticClass:"dsc-line"}),s("div",{staticClass:"dynamic-dsc"},[s("div",{staticStyle:{opacity:"1","font-size":"15px","font-weight":"400","letter-spacing":"0px","line-height":"25px",color:"rgba(51, 51, 51, 1)","text-align":"justify","vertical-align":"top"},domProps:{innerHTML:t._s(e.contentDetails)}})])])})),0)])},i=[],n=e(2964),o=e(1981),r={name:"Disseminate",props:["tabDatas"],data(){return{saveDatas:[]}},mounted(){this.addImageStyles(),this.getDissminateData()},methods:{getDissminateData(t=this.$store.state.lang.version){(0,n.MM)({moduleType:"2",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.saveDatas=t.data.rows)}))},addImageStyles(){const t=document.createElement("style");t.type="text/css",t.innerHTML="\n                .content-in img:nth-of-type(1) {\n                    width: 100%;\n                    height:100%;\n                },\n                .content-in img:nth-of-type(2) {\n                    width: 100%;\n                    height:100%;\n        }\n            ",document.head.appendChild(t)}},watch:{"$store.state.lang.version":{handler(){(0,o.A)(this.getDissminateData(),this.$store.state.lang.version)}}}},l=r,c=e(1656),d=(0,c.A)(l,a,i,!1,null,"39866a09",null),h=d.exports}}]);
//# sourceMappingURL=990.957e8d36.js.map