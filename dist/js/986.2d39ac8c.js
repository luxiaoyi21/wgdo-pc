"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[986],{1986:function(t,a,e){e.r(a),e.d(a,{default:function(){return m}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v("组织动态")]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line"}),a("div",{staticClass:"dynamic-dsc"},t._l(t.dynamicDatas,(function(e){return a("a",{key:e.mediacenterId,staticClass:"dynamic-content",attrs:{href:e.externalLink}},[a("div",{staticClass:"dynamic-time"},[a("div",{staticClass:"dynamic-time-top"},[t._v(t._s(e.timer))]),a("div",{staticClass:"dynamic-time-buttom"},[t._v(t._s(e.year))])]),t._m(0,!0),a("div",{staticClass:"dynamic-dscall"},[a("div",{staticClass:"dynamic-dscall-top"},[t._v(t._s(e.title))]),a("div",{staticClass:"dynamic-dscall-buttom"},[t._v(t._s(e.intro))])])])})),0),a("div",{staticClass:"dynamic-data"},[a("div",{staticClass:"dynamic-data-num"},[a("div",{staticClass:"data-page"},[t._v("第"+t._s(t.currentPage)+"页")]),a("div",{staticClass:"data-limit"},[t._v("共"+t._s(t.totalItems)+"条")])]),a("div",{staticClass:"devide-page"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalItems,"page-size":t.pageSize,"current-page":t.currentPage},on:{"update:currentPage":function(a){t.currentPage=a},"update:current-page":function(a){t.currentPage=a},"current-change":t.handlePageChange}},[t._v("> ")])],1)])])])])},i=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"dynamic-blank"},[a("div",{staticClass:"dynamic-blankin"})])}],n=e(2964),c=e(1981),r={name:"Dynamic",props:["tabDatas"],data(){return{dynamicDatas:[...this.tabDatas],currentPage:1,totalItems:0,pageSize:10,time:[],day:[]}},mounted(){this.getMediaData()},computed:{currentTabDatas(){const t=(this.currentPage-1)*this.pageSize,a=t+this.pageSize;return this.dynamicDatas.slice(t,a)}},methods:{getMediaData(t=this.$store.state.lang.version){(0,n.$U)({moduleType:"1",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.dynamicDatas=t.data.rows.map((t=>{const a=this.gettime(t.releaseTime);return{...t,year:a.year,timer:a.timer}})),this.totalItems=t.data.rows.length,console.log(this.dynamicDatas))}))},gettime(t){const a=new Date(t),e=a.getFullYear(),s=("0"+(a.getMonth()+1)).slice(-2),i=("0"+a.getDate()).slice(-2);return{year:e,timer:s+"-"+i}},handlePageChange(t){this.currentPage=t}},watch:{"$store.state.lang.version":{handler(){(0,c.A)(this.getMediaData(),this.$store.state.lang.version)}}}},d=r,l=e(1656),o=(0,l.A)(d,s,i,!1,null,"6c990e2a",null),m=o.exports}}]);
//# sourceMappingURL=986.2d39ac8c.js.map