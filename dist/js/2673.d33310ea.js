"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[2673],{1247:function(t,a,e){e.d(a,{A:function(){return u}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"dynamic-data"},[a("div",{staticClass:"dynamic-data-num"},[a("div",{staticClass:"data-page"},[t._v("第"+t._s(t.currentPage)+"页")]),a("div",{staticClass:"data-limit"},[t._v("共"+t._s(t.totalItems)+"条")])]),a("div",{staticClass:"devide-page"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalItems,"page-size":t.pageSize,"current-page":t.currentPage},on:{"update:currentPage":function(a){t.currentPage=a},"update:current-page":function(a){t.currentPage=a},"current-change":t.handlePageChange}},[t._v("> ")])],1)])},n=[],r={name:"Pagination",props:["tabDatas","currentPage","totalItems","pageSize"],data(){return{}},computed:{currentTabDatas(){const t=(this.currentPage-1)*this.pageSize,a=t+this.pageSize;return this.tabDatas.slice(t,a)}},methods:{handlePageChange(t){this.currentPage=t}}},i=r,c=e(1656),o=(0,c.A)(i,s,n,!1,null,"787f8041",null),u=o.exports},2673:function(t,a,e){e.r(a),e.d(a,{default:function(){return l}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("about.figures")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"10px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"dynamic-dsc"},t._l(t.personDatas,(function(e){return a("div",{key:e.aboutusId,staticClass:"dsc-in"},[a("div",{staticClass:"dsc-left"},[a("img",{attrs:{src:"http://www.wgdo.net"+e.figureHeadportrait,alt:""}})]),a("div",{staticClass:"dsc-right"},[a("p",{staticClass:"person-name"},[t._v(t._s(e.figureName))]),a("p",{staticClass:"person-intro"},[t._v(t._s(e.figureIntroduce)+" ")])])])})),0),a("Pagination",{attrs:{tabDatas:t.tabDatas,pageSize:t.pageSize,currentPage:t.currentPage,totalItems:t.totalItems},on:{currentTabDatas:t.currentTabDatas}})],1)])])},n=[],r=e(2964),i=e(1981),c=e(1247),o={name:"Person",props:["tabDatas"],components:{Pagination:c.A},data(){return{personDatas:[],currentPage:1,totalItems:0,pageSize:4}},computed:{currentTabDatas(){const t=(this.currentPage-1)*this.pageSize,a=t+this.pageSize;return this.personDatas.slice(t,a)}},mounted(){this.getPersonData(),this.handlePageChange()},methods:{getPersonData(t=this.$store.state.lang.version){(0,r.aJ)({moduleType:"3",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.personDatas=t.data.rows,this.totalItems=t.data.rows.length)}))},handlePageChange(t){this.currentPage=t}},watch:{"$store.state.lang.version":{handler(){(0,i.A)(this.getPersonData(),this.$store.state.lang.version)}}}},u=o,d=e(1656),g=(0,d.A)(u,s,n,!1,null,"7e863d5d",null),l=g.exports}}]);
//# sourceMappingURL=2673.d33310ea.js.map