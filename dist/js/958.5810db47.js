"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[958,904,921,864,516,166],{2904:function(t,a,s){s.r(a),s.d(a,{default:function(){return m}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("dynamic.dynamics")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line"}),a("div",{staticClass:"dynamic-dsc"},t._l(t.currentTabDatas,(function(s){return a("router-link",{key:s.mediacenterId,staticClass:"dynamic-content",attrs:{to:{name:"Dynamicinfo",query:{id:s.mediacenterId}}},nativeOn:{click:function(a){return t.handleLinkClick(s.mediacenterId)}}},[a("div",{staticClass:"dynamic-time"},[a("div",{staticClass:"dynamic-time-top"},[t._v(t._s(s.timer))]),a("div",{staticClass:"dynamic-time-buttom"},[t._v(t._s(s.year))])]),a("div",{staticClass:"dynamic-blank"},[a("div",{staticClass:"dynamic-blankin"})]),a("div",{staticClass:"dynamic-dscall"},[a("div",{staticClass:"dynamic-dscall-top"},[t._v(t._s(s.title))]),a("div",{staticClass:"dynamic-dscall-buttom",attrs:{title:s.intro}},[t._v(t._s(s.intro))])])])})),1),a("div",{staticClass:"dynamic-data"},[a("div",{staticClass:"dynamic-data-num"},[a("div",{staticClass:"data-page"},[t._v("第"+t._s(t.currentPage)+"页")]),a("div",{staticClass:"data-limit"},[t._v("共"+t._s(t.totalItems)+"条")])]),a("div",{staticClass:"devide-page"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalItems,"page-size":t.pageSize,"current-page":t.currentPage},on:{"update:currentPage":function(a){t.currentPage=a},"update:current-page":function(a){t.currentPage=a},"current-change":t.handlePageChange}},[t._v("> ")])],1)])])])])},i=[],n=(s(4114),s(2964)),r=s(1981),c={name:"Dynamic",props:["tabDatas"],data(){return{dynamicDatas:[...this.tabDatas],currentPage:1,totalItems:0,pageSize:10,time:[],day:[]}},created(){},mounted(){this.getMediaData()},computed:{currentTabDatas(){const t=(this.currentPage-1)*this.pageSize,a=t+this.pageSize;return this.dynamicDatas.slice(t,a)}},methods:{getMediaData(t=this.$store.state.lang.version){(0,n.$U)({moduleType:"1",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.dynamicDatas=t.data.rows.map((t=>{const a=this.gettime(t.releaseTime);return{...t,year:a.year,timer:a.timer}})),this.totalItems=t.data.rows.length)}))},gettime(t){const a=new Date(t),s=a.getFullYear(),e=("0"+(a.getMonth()+1)).slice(-2),i=("0"+a.getDate()).slice(-2);return{year:s,timer:e+"-"+i}},handlePageChange(t){this.currentPage=t},handleLinkClick(t){const a=this.$route.query;a.id!==t&&this.$router.push({name:"Dynamicinfo",query:{id:t}})}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getMediaData(),this.$store.state.lang.version)}}}},o=c,d=s(1656),l=(0,d.A)(o,e,i,!1,null,"2886e721",null),m=l.exports},8921:function(t,a,s){s.r(a),s.d(a,{default:function(){return m}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},t._l(t.dynamicinfoDatas,(function(s){return a("div",{key:s.mediacenterId,staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(s.title))]),a("div",{staticClass:"info"},[a("div",{staticClass:"info-browser"},[t._v(t._s(t.$t("meet.browser"))+"："+t._s(s.clickVolume))]),a("div",{staticClass:"info-create"},[t._v(t._s(t.$t("meet.create"))+"："+t._s(s.releaseTime))])]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"dynamic-dsc"},[a("div",{staticStyle:{opacity:"1","font-size":"15px","font-weight":"400","letter-spacing":"0px","line-height":"25px",color:"rgba(51, 51, 51, 1)","text-align":"justify","vertical-align":"top"},domProps:{innerHTML:t._s(s.contentDetails)}})])])})),0)])},i=[],n=s(2964),r=s(1981),c={name:"Dynamicinfo",props:["tabDatas"],data(){return{dynamicinfoDatas:[...this.tabDatas],id:this.$route.query.id}},created(){},mounted(){this.getDynamicinfoData()},methods:{getDynamicinfoData(t=this.$store.state.lang.version){(0,n.$U)({moduleType:"4",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.dynamicinfoDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getDynamicinfoData(),this.$store.state.lang.version)}},"$route.query.id":{handler(t){this.id=t,this.getDynamicinfoData(t)},immediate:!0}}},o=c,d=s(1656),l=(0,d.A)(o,e,i,!1,null,"247efc74",null),m=l.exports},8287:function(t,a,s){s.r(a),s.d(a,{default:function(){return f}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("Headers"),a("div",{staticClass:"content"},[a("TabControl",{attrs:{tabName:t.tabName},on:{Media:t.getMediaData,tabclickDatas:t.getTabName}}),"组织动态"===t.tabclickDatas?a("Dynamic",{attrs:{tabDatas:t.tabDatas}}):t._e(),"论坛视频"===t.tabclickDatas?a("Video",{attrs:{tabDatas:t.tabDatas}}):t._e(),"媒体报道"===t.tabclickDatas?a("Report",{attrs:{tabDatas:t.tabDatas}}):t._e(),"动态详情"===t.tabclickDatas?a("Dynamicinfo",{attrs:{tabDatas:t.tabDatas}}):t._e(),"报告详情"===t.tabclickDatas?a("Reportinfo",{attrs:{tabDatas:t.tabDatas}}):t._e()],1),a("div",{staticClass:"foot"},[a("Footers")],1)],1)},i=[],n=s(1097),r=s(2589),c=s(7329),o=s(2964),d=s(2904),l=s(8921),m=s(5864),u=s(3516),v=s(2166),g=s(1981),h={name:"Media",components:{Headers:n.A,TabControl:r.A,Footers:c.A,Dynamic:d["default"],Video:m["default"],Report:u["default"],Dynamicinfo:l["default"],Reportinfo:v["default"]},props:["urlData"],data(){return{tabName:[],MediaDatas:[],tabDatas:[],tabclickDatas:"组织动态",name:[]}},mounted(){this.getMediaData("组织动态"),this.getTabNameData()},methods:{getMediaData(){(0,o.$U)({parentId:"4"}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.tabDatas=t.data.rows)})),(0,o.$U)({parentId:"146"}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.tabDatas=t.data.rows)}))},getTabNameData(t=this.$store.state.lang.version){(0,o.rk)({parentId:"4",version:t}).then((t=>{if(t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0){let a=t.data.rows[0].children;this.tabName=a.map((t=>t.classifyName))}})),(0,o.rk)({parentId:"146",version:t}).then((t=>{if(t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0){let a=t.data.rows[0].children;this.tabName=a.map((t=>t.classifyName))}}))},getTabName(t){this.tabclickDatas=t}},watch:{"$store.state.lang.version":{handler(){(0,g.A)(this.getTabNameData(),this.$store.state.lang.version)}}}},p=h,y=s(1656),D=(0,y.A)(p,e,i,!1,null,"dc4e695e",null),f=D.exports},3516:function(t,a,s){s.r(a),s.d(a,{default:function(){return m}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("router-view",[a("router-view")],1),a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("dynamic.report")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{}}),a("div",{staticClass:"dynamic-dsc"},t._l(t.reportDatas,(function(s){return a("router-link",{key:s.mediacenterId,staticClass:"dynamic-content",attrs:{to:{name:"Reportinfo"}}},[a("div",{staticClass:"dynamic-time"},[a("div",{staticClass:"dynamic-time-top"},[t._v(t._s(s.timer))]),a("div",{staticClass:"dynamic-time-buttom"},[t._v(t._s(s.year))])]),a("div",{staticClass:"dynamic-blank"},[a("div",{staticClass:"dynamic-blankin"})]),a("div",{staticClass:"dynamic-dscall"},[a("div",{staticClass:"dynamic-dscall-top"},[t._v(t._s(s.title))]),a("div",{staticClass:"dynamic-dscall-buttom",attrs:{title:s.intro}},[t._v(t._s(s.intro))])])])})),1)])])],1)},i=[],n=s(2964),r=s(1981),c={name:"Report",props:["tabDatas"],data(){return{reportDatas:[...this.tabDatas]}},mounted(){this.getReportData()},methods:{getReportData(t=this.$store.state.lang.version){(0,n.$U)({moduleType:"3",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.reportDatas=t.data.rows.map((t=>{const a=this.gettime(t.releaseTime);return{...t,year:a.year,timer:a.timer}})))}))},gettime(t){const a=new Date(t),s=a.getFullYear(),e=("0"+(a.getMonth()+1)).slice(-2),i=("0"+a.getDate()).slice(-2);return{year:s,timer:e+"-"+i}}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getReportData(),this.$store.state.lang.version)}}}},o=c,d=s(1656),l=(0,d.A)(o,e,i,!1,null,"263dbbc7",null),m=l.exports},2166:function(t,a,s){s.r(a),s.d(a,{default:function(){return m}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},t._l(t.reportinfoData,(function(s){return a("div",{key:s.mediacenterId,staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(s.title))]),a("div",{staticClass:"info"},[a("div",{staticClass:"info-browser"},[t._v(t._s(t.$t("meet.browser"))+"："+t._s(t.dyninfo.clickVolume))]),a("div",{staticClass:"info-create"},[t._v(t._s(t.$t("meet.create"))+"："+t._s(t.dyninfo.releaseTime))])]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),t._m(0,!0)])})),0)])},i=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"dynamic-dsc"},[a("img",{attrs:{src:"https://img.js.design/assets/img/664c585ee95bdb802e70fe67.png",alt:""}})])}],n=s(2964),r=s(1981),c={name:"Reportinfo",props:["tabDatas"],data(){return{reportinfoData:[...this.tabDatas]}},mounted(){this.getReportinfoData()},methods:{getReportinfoData(t=this.$store.state.lang.version){(0,n.$U)({moduleType:"5",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.saveDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getReportinfoData(),this.$store.state.lang.version)}}}},o=c,d=s(1656),l=(0,d.A)(o,e,i,!1,null,"089a69e3",null),m=l.exports},5864:function(t,a,s){s.r(a),s.d(a,{default:function(){return m}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("dynamic.video")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"dynamic-dsc"},t._l(t.videoDatas,(function(s){return a("div",{key:s.mediacenterId,staticClass:"doing-in"},[a("div",{staticClass:"doing-img"},[a("img",{attrs:{src:"http://106.3.97.14:9002"+s.cover,alt:""}})]),a("p",{staticClass:"doing-intro"},[t._v(t._s(s.title))])])})),0),a("div",{staticClass:"dynamic-data"},[a("div",{staticClass:"dynamic-data-num"},[a("div",{staticClass:"data-page"},[t._v("第"+t._s(t.currentPage)+"页")]),a("div",{staticClass:"data-limit"},[t._v("共"+t._s(t.totalItems)+"条")])]),a("div",{staticClass:"devide-page"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalItems,"page-size":t.pageSize,"current-page":t.currentPage},on:{"update:currentPage":function(a){t.currentPage=a},"update:current-page":function(a){t.currentPage=a},"current-change":t.handlePageChange}},[t._v("> ")])],1)])])])])},i=[],n=s(2964),r=s(1981),c={name:"Video",props:["tabDatas"],data(){return{videoDatas:[...this.tabDatas],currentPage:1,totalItems:0,pageSize:9}},computed:{currentTabDatas(){const t=(this.currentPage-1)*this.pageSize,a=t+this.pageSize;return this.videoDatas.slice(t,a)}},mounted(){this.getVideoData()},methods:{getVideoData(t=this.$store.state.lang.version){(0,n.$U)({moduleType:"2",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.videoDatas=t.data.rows,this.totalItems=t.data.rows.length)}))},handlePageChange(t){this.currentPage=t}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getVideoData(),this.$store.state.lang.version)}}}},o=c,d=s(1656),l=(0,d.A)(o,e,i,!1,null,"5cc0567f",null),m=l.exports}}]);
//# sourceMappingURL=958.5810db47.js.map