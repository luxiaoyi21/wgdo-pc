"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[271],{1247:function(t,e,a){a.d(e,{A:function(){return l}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dynamic-data"},[e("div",{staticClass:"dynamic-data-num"},[e("div",{staticClass:"data-page"},[t._v("第"+t._s(t.currentPage)+"页")]),e("div",{staticClass:"data-limit"},[t._v("共"+t._s(t.totalItems)+"条")])]),e("div",{staticClass:"devide-page"},[e("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalItems,"page-size":t.pageSize,"current-page":t.currentPage},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"current-change":t.handlePageChange}},[t._v("> ")])],1)])},i=[],n={name:"Pagination",props:["tabDatas","currentPage","totalItems","pageSize"],data(){return{}},computed:{currentTabDatas(){const t=(this.currentPage-1)*this.pageSize,e=t+this.pageSize;return this.tabDatas.slice(t,e)}},methods:{handlePageChange(t){this.currentPage=t}}},c=n,r=a(1656),o=(0,r.A)(c,s,i,!1,null,"787f8041",null),l=o.exports},8271:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"item"},[e("div",{staticClass:"content"},[e("div",{staticClass:"content-in"},[e("div",{staticClass:"titleintro"},[e("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("research.resource")))]),e("div",{staticStyle:{display:"flex"}},[t.showCheckbox?e("div",{staticClass:"batch-download-btn",staticStyle:{display:"flex","margin-right":"15px"}},[e("el-button",{attrs:{type:"primary"},on:{click:t.batchDownload}},[t._v(t._s(t.$t("research.document")))])],1):t._e(),e("el-button",{attrs:{type:"text"},on:{click:t.toggleCheckbox}},[t._v(t._s(t.$t("research.download")))])],1)]),e("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),e("div",{staticClass:"dsc-line",staticStyle:{}}),t._l(t.resourceDatas,(function(s){return e("div",{key:s.academicId,staticClass:"dynamic-dsc"},t._l(s.gxfileList,(function(i){return e("div",{key:i.name,staticClass:"dynamic-content"},[e("div",{staticClass:"dynamic-dscall"},[e("div",{staticClass:"dynamic-dscall-top"},[t._v(t._s(i.name))]),e("div",{staticClass:"dynamic-dscall-buttom"},[t._v(t._s(s.createTime))])]),t.showCheckbox?e("el-checkbox",{attrs:{label:i},model:{value:t.selectedFiles,callback:function(e){t.selectedFiles=e},expression:"selectedFiles"}},[t._v(t._s(i.iii))]):t._e(),t.showCheckbox?t._e():e("el-button",{attrs:{type:""},on:{click:function(e){return t.downloadFile(i.url)}}},[e("i",{staticClass:"el-icon--right"},[e("img",{staticStyle:{width:"30px",height:"30px"},attrs:{src:a(3980)}})])])],1)})),0)})),e("Pagination",{attrs:{tabDatas:t.tabDatas,pageSize:t.pageSize,currentPage:t.currentPage,totalItems:t.totalItems},on:{currentTabDatas:t.currentTabDatas}})],2)])])},i=[],n=(a(4603),a(7566),a(8721),a(2964)),c=a(1981),r=a(4373),o=a(1247),l={name:"Resource",props:["tabDatas"],components:{Pagination:o.A},data(){return{resourceDatas:[...this.tabDatas],currentPage:1,totalItems:0,pageSize:10,selectedFiles:[],showCheckbox:!1}},computed:{currentTabDatas(){const t=(this.currentPage-1)*this.pageSize,e=t+this.pageSize;return this.resourceDatas.slice(t,e)}},mounted(){this.getResourceData()},methods:{getResourceData(t=this.$store.state.lang.version){(0,n.is)({moduleType:"4",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.resourceDatas=t.data.rows,this.totalItems=t.data.rows.length)}))},handlePageChange(t){this.currentPage=t},async downloadFile(t){if(!t)return;const e="http://106.3.97.14:9002"+t,a=t.split("/").pop();try{const t=await r.A.get(e,{responseType:"blob"}),s=new Blob([t.data]),i=document.createElement("a");i.href=URL.createObjectURL(s),i.download=a,document.body.appendChild(i),i.click(),setTimeout((()=>{document.body.removeChild(i),URL.revokeObjectURL(i.href)}),100)}catch(s){}},toggleCheckbox(){this.showCheckbox=!this.showCheckbox,this.showCheckbox||(this.selectedFiles=[])},batchDownload(){this.selectedFiles.forEach((t=>{this.downloadFile(t.url)}))}},watch:{"$store.state.lang.version":{handler(){(0,c.A)(this.getResourceData(),this.$store.state.lang.version)}}}},d=l,u=a(1656),h=(0,u.A)(d,s,i,!1,null,"2525540c",null),g=h.exports},3980:function(t,e,a){t.exports=a.p+"img/download.5355f8a8.png"}}]);
//# sourceMappingURL=271.1a0654f0.js.map