"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[365],{3008:function(t,s,a){a.d(s,{A:function(){return c}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[t._m(0),s("el-breadcrumb",{staticClass:"ebc",attrs:{"separator-class":"el-icon-arrow-left"}},t._l(t.urlData,(function(a){return s("el-breadcrumb-item",{attrs:{to:{path:a.path}}},[s("i",{staticClass:"iconfont icon-zuojiantou",attrs:{id:"lef"}}),t._v(" "+t._s(a.name)+" ")])})),1)],1)},i=[function(){var t=this,s=t._self._c;return s("a",{attrs:{href:"/"}},[s("img",{attrs:{src:a(8605)}})])}],n={name:"Breadcrumb",props:["urlData"],mounted(){}},r=n,o=a(1656),l=(0,o.A)(r,e,i,!1,null,"0b00c7bb",null),c=l.exports},62:function(t,s,a){a.d(s,{A:function(){return c}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[s("div",{staticClass:"bgs"}),s("div",{staticClass:"f"},[s("div",{staticClass:"hTop"},[t._m(0),s("div",{staticClass:"right"},[s("div",{staticClass:"search"},[s("i",{staticClass:"iconfont icon-sousuo scarchI"}),s("el-input",{staticClass:"searchIn",attrs:{placeholder:t.$t("headernav.search")},model:{value:t.searchInp,callback:function(s){t.searchInp=s},expression:"searchInp"}})],1),s("div",{staticClass:"rightList"},[s("div",{staticClass:"login"},[s("a",{attrs:{href:"login"}},[t._v(t._s(t.$t("headernav.Login")))])]),s("div",{staticClass:"loginO"}),s("div",{staticClass:"sed"},[t._v(t._s(t.$t("headernav.Be our merber")))]),s("div",{staticClass:"langs",staticStyle:{cursor:"pointer"},on:{click:t.changeLang}},[s("div",{staticClass:"lang"},[t._v(t._s(t.lang))]),t._m(1)])])])]),s("div",{staticClass:"hBottom",class:"en"===t.$store.state.lang.isEn?"isBottom":"hBottom"},[s("router-link",{class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/about"===t.$route.path},attrs:{to:"/about"}},[t._v(" "+t._s(t.$t("headernav.Aboutus"))+" ")]),s("router-link",{class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/meet"===t.$route.path},attrs:{to:"/meet"}},[t._v(" "+t._s(t.$t("headernav.Conferenceactivity"))+" ")]),s("router-link",{class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/media"===t.$route.path},attrs:{to:"/media"}},[t._v(" "+t._s(t.$t("headernav.Mediacenter"))+" ")]),s("router-link",{class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/research"===t.$route.path},attrs:{to:"/research"}},[t._v(" "+t._s(t.$t("headernav.Academicresearch"))+" ")]),s("router-link",{class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/project"===t.$route.path},attrs:{to:"/project"}},[t._v(" "+t._s(t.$t("headernav.Publicwelfareproject"))+" ")]),s("router-link",{class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/prize"===t.$route.path},attrs:{to:"/prize"}},[t._v(" "+t._s(t.$t("headernav.InternationalGreenAward"))+" ")]),s("router-link",{class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/wgdo"===t.$route.path},attrs:{to:"/wgdo"}},[t._v(" "+t._s(t.$t("headernav.WGDOGreenResearchInstitute"))+" ")]),s("router-link",{class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn},attrs:{to:"http://lyb.wgdo.net/"}},[t._v(" "+t._s(t.$t("headernav.Greenleaflabel"))+" ")])],1)])])},i=[function(){var t=this,s=t._self._c;return s("a",{attrs:{href:"/"}},[s("div",{staticClass:"logo"},[s("img",{staticClass:"logoImg",attrs:{src:"https://img.js.design/assets/img/656e8dc581ed4034e8a418ee.png#680cdd771a71f03f8da7ef2659786ac3"}}),s("div",{staticClass:"logoDsc"},[s("div",{staticClass:"logoDscTop"},[t._v("世界绿色设计组织")]),s("div",{staticClass:"logoDscBot"},[t._v("World Green Design Organization")])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"langO",staticStyle:{display:"none"}},[s("i",{staticClass:"iconfont icon-xiangxiajiantou"})])}],n={name:"HeaderNav",data(){let t="",s=["关于我们","会议活动","媒体中心","学术研究","公益项目","国际绿奖","WGDO绿研院","绿叶标"],a=!0,e="En";return{searchInp:t,bannerNavList:s,isText1Visible:a,lang:e}},mounted(){this.isText1Visible=!1},methods:{changeLang(){this.isText1Visible=!this.isText1Visible,1==this.isText1Visible?this.lang="中文":this.lang="En",this.$store.commit("getLocalLang",this.lang),this.$store.commit("getVersion")}}},r=n,o=a(1656),l=(0,o.A)(r,e,i,!1,null,"2e0058fd",null),c=l.exports},365:function(t,s,a){a.r(s),a.d(s,{default:function(){return g}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"item"},[s("Headers"),s("div",{staticClass:"content"},[s("div",{staticClass:"content-in"},[s("Breadcrumb"),s("p",{staticClass:"dynamic"},[t._v("绿色设计观点")]),s("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),s("div",{staticClass:"dsc-line"}),s("div",{staticClass:"dynamic-dsc"},t._l(t.moredetDatas,(function(a){return s("a",{key:a.mediacenterId,staticClass:"dynamic-content",attrs:{href:a.externalLink}},[s("div",{staticClass:"dynamic-time"},[s("div",{staticClass:"dynamic-time-top"},[t._v(t._s(a.timer))]),s("div",{staticClass:"dynamic-time-buttom"},[t._v(t._s(a.year))])]),t._m(0,!0),s("div",{staticClass:"dynamic-dscall"},[s("div",{staticClass:"dynamic-dscall-top"},[t._v(t._s(a.title))]),s("div",{staticClass:"dynamic-dscall-buttom"},[t._v(t._s(a.intro))])])])})),0),s("div",{staticClass:"dynamic-data"},[s("div",{staticClass:"dynamic-data-num"},[s("div",{staticClass:"data-limit"},[t._v("共"+t._s(t.totalItems)+"条")])])])],1)]),s("div",{staticClass:"foot"},[s("Footers")],1)],1)},i=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"dynamic-blank"},[s("div",{staticClass:"dynamic-blankin"})])}],n=a(2964),r=a(62),o=a(3008),l=a(7329),c=a(1981),d={name:"MoreDet",components:{Headers:r.A,Footers:l.A,Breadcrumb:o.A},data(){return{moredetDatas:[...this.$router.history.current.params.datas],totalItems:0}},mounted(){console.log(this.$router.history.current.params.datas),this.getMoredetData()},computed:{},methods:{getMoredetData(t=this.$store.state.lang.version){(0,n.Cs)({moduleType:"1",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.moredetDatas=t.data.rows.map((t=>{const s=this.gettime(t.releaseTime);return{...t,year:s.year,timer:s.timer}})),this.totalItems=t.data.rows.length,console.log(this.moredetDatas))}))},gettime(t){const s=new Date(t),a=s.getFullYear(),e=("0"+(s.getMonth()+1)).slice(-2),i=("0"+s.getDate()).slice(-2);return{year:a,timer:e+"-"+i}},handlePageChange(t){this.currentPage=t}},watch:{"$store.state.lang.version":{handler(){(0,c.A)(this.getMediaData(),this.$store.state.lang.version)}}}},u=d,h=a(1656),v=(0,h.A)(u,e,i,!1,null,"36835a7a",null),g=v.exports},8605:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACzSURBVCiRlY69DcIwEEbfOYyBEA07uEnkdDhbMAnxUoQuFjTZgQqJOXI0WOLHicjX+T6/uweZVI1tK2+19LbP9fI9KL3tBVx6K8RCCfE8xB/I7a0bhexmAKPUCTRJZw4AGIXe7a0DkKqxLcpxDviIEKTyVv8GkqpR6kWEEARgybVLN4jJFQoRIUzqTW48Da1CzHWr3FDAzSmb169JlfekywXA/faIm93aCWwnCSFcu+EA8ARWXDZVPMtimgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=365.1f8a1a48.js.map