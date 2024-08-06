"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[926],{2847:function(t,a,e){e.d(a,{A:function(){return c}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[t._m(0),a("el-breadcrumb",{staticClass:"ebc",attrs:{"separator-class":"el-icon-arrow-left"}},t._l(t.urlData,(function(e){return a("el-breadcrumb-item",{attrs:{to:{path:e.path}}},[a("i",{staticClass:"iconfont icon-zuojiantou",attrs:{id:"lef"}}),t._v(" "+t._s(t.getBreadcrumbName(e))+" ")])})),1)],1)},r=[function(){var t=this,a=t._self._c;return a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:e(8605)}})])}],n=(e(2964),{name:"Breadcrumb",props:["urlData"],data(){return{}},mounted(){},computed:{},methods:{getBreadcrumbName(t){if(t.meta&&t.meta.breadcrumbName){let a=this.$store.state.lang.isEn;if(t.meta.breadcrumbName[a])return t.meta.breadcrumbName[a]}return t.name},popBreadcrumb(){this.$emit("update:urlData",this.urlData.slice(0,-1))},updateUrlData(t){}},watch:{urlData:{handler:"updateUrlData",immediate:!0}}}),i=n,o=e(1656),l=(0,o.A)(i,s,r,!1,null,"12b8bd4c",null),c=l.exports},5926:function(t,a,e){e.d(a,{A:function(){return c}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("div",{staticClass:"bgs"}),a("div",{staticClass:"f"},[a("div",{staticClass:"hTop"},[a("a",{attrs:{href:"/"}},[a("div",{staticClass:"logo"},[a("img",{style:t.getLogoStyle(),attrs:{src:t.getLogoPath(),alt:"Logo"}})])]),a("div",{staticClass:"right"},[a("div",{staticClass:"search"},[a("i",{staticClass:"iconfont icon-sousuo scarchI"}),a("el-input",{staticClass:"searchIn",attrs:{placeholder:t.$t("headernav.search")},model:{value:t.searchInp,callback:function(a){t.searchInp=a},expression:"searchInp"}})],1),a("div",{staticClass:"rightList"},[a("div",{staticClass:"login"},[a("a",{attrs:{href:"login"}},[t._v(t._s(t.$t("headernav.Login")))])]),a("div",{staticClass:"loginO"}),a("div",{staticClass:"sed"},[t._v(t._s(t.$t("headernav.Be our merber")))]),a("div",{staticClass:"langs",staticStyle:{cursor:"pointer"},on:{click:t.changeLang}},[a("div",{staticClass:"lang"},[t._v(t._s(t.lang))]),t._m(0)])])])]),a("div",{ref:"changeLangue",class:"中文"===t.$store.state.lang.langs?"zhBottom":"enBottom"},[a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/about"===t.$route.path||t.$route.path.startsWith("/about/")},attrs:{to:"/about"}},[t._v(" "+t._s(t.$t("headernav.Aboutus"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/meet"===t.$route.path||t.$route.path.startsWith("/meet/")},attrs:{to:"/meet"}},[t._v(" "+t._s(t.$t("headernav.Conferenceactivity"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/media"===t.$route.path||t.$route.path.startsWith("/media/")},attrs:{to:"/media"}},[t._v(" "+t._s(t.$t("headernav.Mediacenter"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/research"===t.$route.path||t.$route.path.startsWith("/research/")},attrs:{to:"/research"}},[t._v(" "+t._s(t.$t("headernav.Academicresearch"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/project"===t.$route.path||t.$route.path.startsWith("/project/")},attrs:{to:"/project"}},[t._v(" "+t._s(t.$t("headernav.Publicwelfareproject"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/prize"===t.$route.path||t.$route.path.startsWith("/prize/")},attrs:{to:"/prize"}},[t._v(" "+t._s(t.$t("headernav.InternationalGreenAward"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/wgdo"===t.$route.path||t.$route.path.startsWith("/wgdo/")},attrs:{to:"/wgdo"}},[t._v(" "+t._s(t.$t("headernav.WGDOGreenResearchInstitute"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn},attrs:{to:"http://lyb.wgdo.net/"}},[t._v(" "+t._s(t.$t("headernav.Greenleaflabel"))+" ")])],1)])])},r=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"langO",staticStyle:{display:"none"}},[a("i",{staticClass:"iconfont icon-xiangxiajiantou"})])}],n={name:"HeaderNav",data(){let t="",a="中文";return{searchInp:t,lang:a,currentRoute:""}},created(){this.lang=this.$store.state.lang.langs},mounted(){this.$nextTick((()=>{const t="中文"===this.lang?"zhBottom":"enBottom",a="中文"===this.lang?"ens":"zhs";this.$refs.changeLangue&&this.$refs.changeLangue.classList.add(t),this.$refs.changeLanguea&&this.$refs.changeLanguea.length&&this.$refs.changeLanguea.forEach((t=>{t.classList.add(a)}))}))},methods:{changeLang(){this.$store.commit("getLocalLang"),this.$store.commit("getVersion")},getLogoPath(){return"en"===this.$store.state.lang.isEn?e(6140):e(5158)},getLogoStyle(){return"en"===this.$store.state.lang.isEn?{transform:"scale(0.78) translateX(-4vw)"}:null},setCurrentRoute(t){this.currentRoute=t}},watch:{"$store.state.lang.isText1Visible":{handler(){this.lang=this.$store.state.lang.langs}}}},i=n,o=e(1656),l=(0,o.A)(i,s,r,!1,null,"6dc37c25",null),c=l.exports},3545:function(t,a,e){e.r(a),e.d(a,{default:function(){return m}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("Headers"),a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("Breadcrumb",{attrs:{urlData:t.urlData}}),t.showDynamicContent?a("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("four.greendesign")))]):t._e(),t.showDynamicContent?a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"0px"}}):t._e(),"/fourall"===t.$route.path?a("div",[a("div",{staticClass:"dynamic-dsc"},t._l(t.moredetDatas,(function(e,s){return a("div",{key:e.mediacenterId,staticClass:"dynamic-content",on:{click:function(a){return t.sedTiaoZhuan(s)}}},[a("div",{staticClass:"dynamic-img"},[a("img",{attrs:{src:"http://www.wgdo.net"+e.cover,alt:""}})]),a("div",{staticClass:"dynamic-dscall"},[a("div",{staticClass:"dscall-top"},[a("div",{staticClass:"dscall-title"},[t._v(t._s(e.title))]),a("div",{staticClass:"dscall-content",attrs:{title:e.intro}},[t._v(t._s(e.intro))])]),a("div",{staticClass:"dscall-time"},[t._v(t._s(e.releaseTime))])])])})),0),a("div",{staticClass:"dynamic-data"},[a("div",{staticClass:"dynamic-data-num"},[a("div",{staticClass:"data-page"},[t._v("第"+t._s(t.currentPage)+"页")]),a("div",{staticClass:"data-limit"},[t._v("共"+t._s(t.totalItems)+"条")])]),a("div",{staticClass:"devide-page"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalItems,"page-size":t.pageSize,"current-page":t.currentPage},on:{"update:currentPage":function(a){t.currentPage=a},"update:current-page":function(a){t.currentPage=a},"current-change":t.handlePageChange}},[t._v("> ")])],1)])]):a("router-view",{on:{childrenUrl:t.handleChildrenUrl}})],1)]),a("div",{staticClass:"foot"},[a("Footers")],1)],1)},r=[],n=(e(4114),e(2964)),i=e(5926),o=e(2847),l=e(993),c=e(1981),u={name:"FourAll",components:{Headers:i.A,Breadcrumb:o.A,Footers:l.A},data(){let t=[],a=[];return{moredetDatas:t,currentPage:1,totalItems:0,pageSize:5,urlData:a,showDynamicContent:!0}},mounted(){this.getFourthData(),"en"!==this.$store.state.lang.isEn?this.urlData.push({path:"/",name:"首页"},{path:"/fourall",name:"世界绿色设计之都"}):this.urlData.push({path:"/",name:"Home"},{path:"/fourall",name:"World Green Design Capital"}),"/fourall/fourallinfo"===this.$route.path&&(this.showDynamicContent=!1)},computed:{currentTabDatas(){const t=(this.currentPage-1)*this.pageSize,a=t+this.pageSize;return this.moredetDatas.slice(t,a)}},methods:{getFourthData(t=this.$store.state.lang.version){(0,n.Cs)({moduleType:"5",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.topDatas=t.data.rows[0],this.moredetDatas=t.data.rows,this.totalItems=t.data.rows.length)}))},gettime(t){const a=new Date(t),e=a.getFullYear(),s=("0"+(a.getMonth()+1)).slice(-2),r=("0"+a.getDate()).slice(-2);return{year:e,timer:s+"-"+r}},handlePageChange(t){this.currentPage=t},sedTiaoZhuan(t){this.$router.push({path:"/fourall/fourallinfo",query:{index:t}})},handleChildrenUrl(t){this.urlData.push(t)}},watch:{"$store.state.lang.version":{handler(){(0,c.A)(this.getFourthData(),this.$store.state.lang.version),this.urlData=[],"en"!==this.$store.state.lang.isEn?this.urlData.push({path:"/",name:"首页"},{path:"/fourall",name:"世界绿色设计之都"}):this.urlData.push({path:"/",name:"Home"},{path:"/fourall",name:"World Green Design Capital"})}},$route(){"/fourall"===this.$route.path&&this.urlData.length>=2&&this.urlData.pop()}},computed:{isShow(){return sessionStorage.getItem("isshow")}}},h=u,g=e(1656),d=(0,g.A)(h,s,r,!1,null,"12b979fb",null),m=d.exports},8605:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACzSURBVCiRlY69DcIwEEbfOYyBEA07uEnkdDhbMAnxUoQuFjTZgQqJOXI0WOLHicjX+T6/uweZVI1tK2+19LbP9fI9KL3tBVx6K8RCCfE8xB/I7a0bhexmAKPUCTRJZw4AGIXe7a0DkKqxLcpxDviIEKTyVv8GkqpR6kWEEARgybVLN4jJFQoRIUzqTW48Da1CzHWr3FDAzSmb169JlfekywXA/faIm93aCWwnCSFcu+EA8ARWXDZVPMtimgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=926.9c0bd6a0.js.map