"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[7064],{7064:function(t,a,s){s.r(a),s.d(a,{default:function(){return l}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("router-view",[a("router-view")],1),a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("research.design")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"dynamic-dsc"},t._l(t.designDatas,(function(s){return a("router-link",{key:s.academicId,staticClass:"doing-in",attrs:{to:{name:"Designinfo"}}},[a("div",{staticClass:"doing-img"},[a("img",{attrs:{src:"http://106.3.97.14:9002"+s.cover,alt:""}})]),a("div",{staticClass:"image-caption"},[t._v(t._s(s.title))])])})),1),a("div",{staticClass:"dynamic-data"},[a("div",{staticClass:"dynamic-data-num"},[a("div",{staticClass:"data-page"},[t._v("第"+t._s(t.currentPage)+"页")]),a("div",{staticClass:"data-limit"},[t._v("共"+t._s(t.totalItems)+"条")])]),a("div",{staticClass:"devide-page"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalItems,"page-size":t.pageSize,"current-page":t.currentPage},on:{"update:currentPage":function(a){t.currentPage=a},"update:current-page":function(a){t.currentPage=a},"current-change":t.handlePageChange}},[t._v("> ")])],1)])])])],1)},i=[],n=s(2964),r=s(1981),c={name:"Design",props:["tabDatas"],data(){return{designDatas:[...this.tabDatas],currentPage:1,totalItems:0,pageSize:9}},computed:{currentTabDatas(){const t=(this.currentPage-1)*this.pageSize,a=t+this.pageSize;return this.designDatas.slice(t,a)}},mounted(){this.getDesignData()},methods:{getDesignData(t=this.$store.state.lang.version){(0,n.is)({moduleType:"1",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.designDatas=t.data.rows,this.totalItems=t.data.rows.length)}))},handlePageChange(t){this.currentPage=t}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getDesignData(),this.$store.state.lang.version)}}}},d=c,g=s(1656),o=(0,g.A)(d,e,i,!1,null,"e3c3e678",null),l=o.exports}}]);
//# sourceMappingURL=7064.26f187a3.js.map