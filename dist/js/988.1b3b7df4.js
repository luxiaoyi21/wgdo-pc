"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[988],{8988:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"item"},[e("div",{staticClass:"content"},t._l(t.caseinfoDatas,(function(s){return e("div",{key:s.mediacenterId,staticClass:"content-in"},[e("p",{staticClass:"dynamic"},[t._v(t._s(s.title))]),e("div",{staticClass:"info"},[e("div",{staticClass:"info-browser"},[t._v(t._s(t.$t("meet.browser"))+"："+t._s(s.clickVolume))]),e("div",{staticClass:"info-create"},[t._v(t._s(t.$t("meet.create"))+"："+t._s(s.releaseTime))])]),e("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),e("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),e("div",{staticClass:"dynamic-dsc"},[e("div",{staticClass:"intro",domProps:{innerHTML:t._s(s.contentDetails)}})])])})),0)])},a=[],n=(s(4114),s(2964)),r=s(1981),o={name:"Caseinfo",data(){return{caseinfoDatas:[],cindex:Number(0)}},mounted(){if(this.$route.params.orders||this.$route.params.orders===Number(0))this.cindex=this.$route.params.orders;else{this.$route.query.index&&sessionStorage.setItem("currentIndex",this.$route.query.index);let t=sessionStorage.getItem("currentIndex");t?(this.cindex=Number(t),sessionStorage.setItem("currentIndex",this.cindex)):(this.cindex=Number(this.$route.query.index),sessionStorage.setItem("currentIndex",this.cindex))}this.getSixData(),this.ImageStyles()},methods:{getSixData(t=this.$store.state.lang.version){(0,n.Cs)({moduleType:"10",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.rightData=t.data.rows,this.rightData.forEach(((t,e)=>{e===this.cindex&&(this.caseinfoDatas.pop(),this.caseinfoDatas.push(t))}))),this.$emit("childrenUrl",{path:"/caseall/caseinfo",name:this.caseinfoDatas[0]?.title})}))},ImageStyles(){const t=document.createElement("style");t.type="text/css",t.innerHTML="\n                .intro img {\n                    width: 100%;\n                    \n                    background-size: cover;\n                    background-position: center;\n                }\n            ",document.head.appendChild(t)}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getSixData(),this.$store.state.lang.version)}}},beforeRouteLeave(t,e,s){sessionStorage.removeItem("currentIndex"),s()}},c=o,d=s(1656),l=(0,d.A)(c,i,a,!1,null,"98e27446",null),u=l.exports}}]);
//# sourceMappingURL=988.1b3b7df4.js.map