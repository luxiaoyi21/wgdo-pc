"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[517,754],{3106:function(t,a,e){e.r(a),e.d(a,{default:function(){return g}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v("活动预告")]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{}}),a("div",{staticClass:"dynamic-dsc"},t._l(t.previewDatas,(function(e,s){return a("a",{key:e.conferenceId,staticClass:"dynamic-content",attrs:{href:t.isSecondLink(s)?"/meet/preview/info":e.externalLink}},[a("div",{staticClass:"dynamic-img"},[a("img",{attrs:{src:"http://106.3.97.14:9002"+e.cover,alt:""}})]),a("div",{staticClass:"dynamic-dscall"},[a("div",{staticClass:"dscall-top"},[a("div",{staticClass:"dscall-title"},[t._v(t._s(e.title))]),a("div",{staticClass:"dscall-content"},[t._v(t._s(e.intro))])]),a("div",{staticClass:"dscall-time"},[t._v(t._s(e.releaseTime))])])])})),0),a("div",{staticClass:"dynamic-data"},[a("div",{staticClass:"dynamic-data-num"},[a("div",{staticClass:"data-page"},[t._v("第"+t._s(t.currentPage)+"页")]),a("div",{staticClass:"data-limit"},[t._v("共"+t._s(t.totalItems)+"条")])]),a("div",{staticClass:"devide-page"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalItems,"page-size":t.pageSize,"current-page":t.currentPage},on:{"update:currentPage":function(a){t.currentPage=a},"update:current-page":function(a){t.currentPage=a},"current-change":t.handlePageChange}},[t._v("> ")])],1)])])])])},i=[],n=e(2964),r=e(276),c=e(1981),l={name:"Preview",props:["tabDatas"],components:{Info:r.Info},data(){return{previewDatas:[...this.tabDatas],currentPage:1,totalItems:0,pageSize:10}},computed:{currentTabDatas(){const t=(this.currentPage-1)*this.pageSize,a=t+this.pageSize;return this.previewDatas.slice(t,a)}},mounted(){this.getPreviewData()},methods:{isSecondLink(t){return 1===t},getPreviewData(t=this.$store.state.lang.version){(0,n.wk)({moduleType:"1",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.previewDatas=t.data.rows,this.totalItems=t.data.rows.length,console.log(this.previewDatas))}))},handlePageChange(t){this.currentPage=t}},watch:{"$store.state.lang.version":{handler(){(0,c.A)(this.getPreviewData(),this.$store.state.lang.version)}}}},d=l,o=e(1656),v=(0,o.A)(d,s,i,!1,null,"06fc332e",null),g=v.exports}}]);
//# sourceMappingURL=517.ac897d35.js.map