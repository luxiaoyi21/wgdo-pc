"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[575],{1575:function(t,s,a){a.r(s),a.d(s,{default:function(){return p}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"item"},[s("div",{staticClass:"content"},[t._m(0),s("div",{staticClass:"content-in"},[s("router-view"),s("p",{staticClass:"dynamic"},[t._v("捐赠公示")]),s("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),s("div",{staticClass:"dsc-line"}),s("div",{staticClass:"dynamic-dsc"},t._l(t.pubDatas,(function(a){return s("a",{key:a.benefitId,staticClass:"dynamic-content",attrs:{href:"/project/publicity/record"}},[s("div",{staticClass:"dynamic-dscall"},[s("div",{staticClass:"dynamic-dscall-top"},[t._v(t._s(a.title))])]),s("div",{staticClass:"grip-time"},[t._v(t._s(a.createTime))])])})),0)],1)])])},i=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"big-leader"},[s("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"80%"},attrs:{href:""}},[s("span",[t._v("需求填报")]),s("i",{staticClass:"el-icon-arrow-right"})]),s("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"80%"},attrs:{href:"/project/inventory"}},[s("span",[t._v("可信供方清单")]),s("i",{staticClass:"el-icon-arrow-right"})]),s("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"80%"},attrs:{href:"/project/publicity"}},[s("span",[t._v("捐赠公示")]),s("i",{staticClass:"el-icon-arrow-right"})]),s("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"80%"},attrs:{href:""}},[s("span",[t._v("新闻中心")]),s("i",{staticClass:"el-icon-arrow-right"})]),s("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"80%"},attrs:{href:"/project/disseminate"}},[s("span",[t._v("抗疫宣传")]),s("i",{staticClass:"el-icon-arrow-right"})]),s("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"80%"},attrs:{href:"/project/contact"}},[s("span",[t._v("联系方式")]),s("i",{staticClass:"el-icon-arrow-right"})])])}],n=a(2964),c=a(1981),r={name:"Publicity",props:["tabDatas"],data(){return{pubDatas:[...this.tabDatas]}},mounted(){this.getPubData()},methods:{getPubData(t=this.$store.state.lang.version){(0,n.MM)({moduleType:"2",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.pubDatas=t.data.rows,console.log(this.pubDatas))}))}},watch:{"$store.state.lang.version":{handler(){(0,c.A)(this.getPubData(),this.$store.state.lang.version)}}}},l=r,o=a(1656),d=(0,o.A)(l,e,i,!1,null,"43687552",null),p=d.exports}}]);
//# sourceMappingURL=575.2c8decca.js.map