"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[2583],{2583:function(t,a,s){s.r(a),s.d(a,{default:function(){return d}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"big-leader"},[a("router-link",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"95%",margin:"10px 10px"},attrs:{to:{name:"Contribute"}}},[a("span",[t._v(t._s(t.$t("prize.contribute")))]),a("i",{staticClass:"el-icon-arrow-right"})]),a("router-link",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"95%",margin:"10px 10px"},attrs:{to:{name:"cRule"}}},[a("span",[t._v(t._s(t.$t("prize.rule")))]),a("i",{staticClass:"el-icon-arrow-right"})]),a("router-link",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"95%",margin:"10px 10px"},attrs:{to:{name:"cPersonal"}}},[a("span",[t._v(t._s(t.$t("prize.person")))]),a("i",{staticClass:"el-icon-arrow-right"})]),a("router-link",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"95%",margin:"10px 10px"},attrs:{to:{name:"Mechanism"}}},[a("span",[t._v(t._s(t.$t("prize.mechanism")))]),a("i",{staticClass:"el-icon-arrow-right"})])],1),a("div",{staticClass:"content-in"},t._l(t.perDatas,(function(s){return a("div",{key:s.greenawardId},[a("p",{staticClass:"dynamic"},[t._v(t._s(s.title))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("p",{staticClass:"paper"},[t._v("2011绿色设计国际贡献奖个人获奖名单：")]),a("div",{staticClass:"person"},[t._l(t.perDatas,(function(s){return a("div",{staticClass:"person-in"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:"http://106.3.97.14:9002"+s.cover,alt:""}})]),a("div",{staticClass:"intro"},[a("div",{staticClass:"intro-top"},[a("div",{staticClass:"name"},[t._v(t._s(s.awardName))])]),a("div",{staticClass:"intro-bottom"},[t._v(t._s(s.awardIntro)+" ")])])])})),a("div",{staticClass:"person-line"})],2)])})),0)])])},i=[],n=s(2964),r=s(1981),l={name:"Personal",props:["tabDatas"],data(){return{perDatas:[...this.tabDatas]}},mounted(){this.getPersonalData()},methods:{getPersonalData(t=this.$store.state.lang.version){(0,n.zE)({moduleType:"6",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.perDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getPersonalData(),this.$store.state.lang.version)}}}},o=l,c=s(1656),p=(0,c.A)(o,e,i,!1,null,"561e3739",null),d=p.exports}}]);
//# sourceMappingURL=2583.c703d0bf.js.map