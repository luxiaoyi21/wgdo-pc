"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[3117],{3117:function(t,a,e){e.r(a),e.d(a,{default:function(){return g}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("meet.lookback")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"dynamic-dsc"},t._l(t.lookbackDatas,(function(e,s){return a("router-link",{key:e.conferenceId,staticClass:"doing-in",attrs:{to:t.isSecondLink(s)?{name:"Lookbackinfo",query:{id:e.conferenceId}}:{path:e.externalLink}}},[a("div",{staticClass:"doing-img"},[a("img",{attrs:{src:"http://106.3.97.14:9002"+e.cover,alt:""}})]),a("p",{staticClass:"doing-intro"},[t._v(t._s(e.title))])])})),1),a("div",{staticClass:"dynamic-data"},[a("div",{staticClass:"dynamic-data-num"},[a("div",{staticClass:"data-page"},[t._v("第"+t._s(t.currentPage)+"页")]),a("div",{staticClass:"data-limit"},[t._v("共"+t._s(t.totalItems)+"条")])]),a("div",{staticClass:"devide-page"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalItems,"page-size":t.pageSize,"current-page":t.currentPage},on:{"update:currentPage":function(a){t.currentPage=a},"update:current-page":function(a){t.currentPage=a},"current-change":t.handlePageChange}},[t._v("> ")])],1)])])])])},i=[],n=e(2964),r=e(1981),o={name:"Lookback",props:["tabDatas"],data(){return{lookbackDatas:[...this.tabDatas],currentPage:1,totalItems:0,pageSize:9}},computed:{currentTabDatas(){const t=(this.currentPage-1)*this.pageSize,a=t+this.pageSize;return this.lookbackDatas.slice(t,a)}},mounted(){this.getLookbackData()},methods:{isSecondLink(t){return t%2===0},getLookbackData(t=this.$store.state.lang.version){(0,n.wk)({moduleType:"3",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.lookbackDatas=t.data.rows,this.totalItems=t.data.rows.length)}))},handlePageChange(t){this.currentPage=t}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getLookbackData(),this.$store.state.lang.version)}}}},c=o,d=e(1656),l=(0,d.A)(c,s,i,!1,null,"dd850096",null),g=l.exports}}]);
//# sourceMappingURL=3117.71ec9e8d.js.map